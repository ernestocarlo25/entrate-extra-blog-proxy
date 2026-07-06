import { randomUUID } from 'crypto';

// ─── UTILITIES ──────────────────────────────────────────────────────────────

function createLogger(correlationId) {
  const t0 = Date.now();
  return function log(level, event, extra = {}) {
    const entry = {
      ts: new Date().toISOString(),
      level,
      correlationId,
      event,
      durationMs: Date.now() - t0,
      ...extra
    };
    const line = `[subscribe] ${JSON.stringify(entry)}`;
    if (level === 'ERROR') console.error(line);
    else if (level === 'WARN') console.warn(line);
    else console.log(line);
  };
}

function emailDomain(email) {
  return email.split('@')[1] ?? 'unknown';
}

function isValidEmail(email) {
  return typeof email === 'string' && /.+@.+\..+/.test(email.trim());
}

async function ghlFetch(url, options) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8_000);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

// ─── CONSTANTS ───────────────────────────────────────────────────────────────

const GHL_CONTACTS_URL = 'https://services.leadconnectorhq.com/contacts/';

// ─── HANDLER ─────────────────────────────────────────────────────────────────

export default async function handler(req, res) {
  const correlationId = randomUUID();

  res.setHeader('X-Correlation-Id', correlationId);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, event: 'METHOD_NOT_ALLOWED', error: 'Method not allowed' });
  }

  const log = createLogger(correlationId);
  const { name, email: rawEmail, phone } = req.body ?? {};
  const email = typeof rawEmail === 'string' ? rawEmail.trim().toLowerCase() : '';

  // ── Validation ─────────────────────────────────────────────────────────────
  if (!email) {
    log('WARN', 'VALIDATION_ERROR', { field: 'email', reason: 'missing' });
    return res.status(400).json({ success: false, event: 'MISSING_EMAIL', error: 'Email richiesta' });
  }
  if (!isValidEmail(email)) {
    log('WARN', 'VALIDATION_ERROR', { field: 'email', reason: 'invalid_format' });
    return res.status(400).json({ success: false, event: 'INVALID_EMAIL', error: 'Formato email non valido' });
  }

  const domain = emailDomain(email);
  const nameParts = (name ?? '').trim().split(' ');
  const firstName = nameParts[0] || 'amico';
  const lastName = nameParts.slice(1).join(' ');

  const ghlHeaders = {
    Authorization: `Bearer ${process.env.GHL_API_KEY}`,
    Version: '2021-07-28',
    'Content-Type': 'application/json'
  };

  const contactPayload = {
    locationId: process.env.GHL_LOCATION_ID,
    firstName,
    lastName,
    email,
    tags: ['newsletter-osservatorio']
  };
  if (phone) contactPayload.phone = phone;

  try {
    // ── Step 1: Create contact ─────────────────────────────────────────────
    let cRes, cData;
    try {
      cRes = await ghlFetch(GHL_CONTACTS_URL, {
        method: 'POST',
        headers: ghlHeaders,
        body: JSON.stringify(contactPayload)
      });
      cData = await cRes.json();
    } catch (err) {
      if (err.name === 'AbortError') {
        log('ERROR', 'GHL_TIMEOUT', { phase: 'contact_creation', domain });
        return res.status(504).json({ success: false, event: 'TIMEOUT', error: 'Il servizio non risponde. Riprova tra qualche istante.' });
      }
      throw err;
    }

    let contactId = cData.contact?.id ?? null;
    let isNew = false;

    if (cRes.ok && contactId) {
      // Happy path: new contact created
      isNew = true;

    } else if (cRes.status === 401) {
      log('ERROR', 'GHL_AUTH_ERROR', { domain, ghlStatus: 401 });
      return res.status(502).json({ success: false, event: 'SERVICE_ERROR', error: 'Il servizio non è disponibile al momento. Riprova tra qualche minuto.' });

    } else if (cRes.status === 429) {
      log('WARN', 'GHL_RATE_LIMIT', { domain, ghlStatus: 429 });
      return res.status(429).json({ success: false, event: 'RATE_LIMIT', error: 'Il servizio è momentaneamente occupato. Riprova tra qualche secondo.' });

    } else if (cRes.status === 422 || !contactId) {
      // ── Potential duplicate: search for existing contact ─────────────────
      // 422 = GHL validation/duplicate; fallback also covers 2xx with no id
      let sData;
      try {
        const sRes = await ghlFetch(
          `${GHL_CONTACTS_URL}?locationId=${process.env.GHL_LOCATION_ID}&query=${encodeURIComponent(email)}`,
          { headers: ghlHeaders }
        );
        sData = await sRes.json();
      } catch (searchErr) {
        if (searchErr.name === 'AbortError') {
          log('ERROR', 'GHL_TIMEOUT', { phase: 'contact_search', domain });
          return res.status(504).json({ success: false, event: 'TIMEOUT', error: 'Il servizio non risponde. Riprova tra qualche istante.' });
        }
        throw searchErr;
      }

      contactId = sData.contacts?.[0]?.id ?? null;
      if (!contactId) {
        // Not a duplicate — genuine GHL validation error
        log('WARN', 'GHL_VALIDATION_ERROR', { domain, ghlStatus: cRes.status });
        return res.status(422).json({ success: false, event: 'VALIDATION_ERROR', error: 'Dati non validi. Controlla email e numero di telefono.' });
      }

      // Existing contact: check tags for internal logging only — no tag changes
      const existingTags = sData.contacts?.[0]?.tags ?? [];
      if (existingTags.includes('newsletter-osservatorio')) {
        log('INFO', 'CONTACT_ALREADY_SUBSCRIBED', { domain, contactId });
      } else {
        log('INFO', 'CONTACT_EXISTS_WITHOUT_NEWSLETTER_TAG', { domain, contactId });
      }
      isNew = false;

    } else if (cRes.status >= 500) {
      log('ERROR', 'GHL_SERVER_ERROR', { domain, ghlStatus: cRes.status });
      return res.status(502).json({ success: false, event: 'SERVICE_ERROR', error: 'Errore temporaneo del servizio. Riprova tra qualche minuto.' });

    } else {
      log('ERROR', 'GHL_UNEXPECTED', { domain, ghlStatus: cRes.status });
      return res.status(502).json({ success: false, event: 'SERVICE_ERROR', error: 'Errore inatteso. Riprova tra qualche minuto.' });
    }

    // ── Safety guard: contactId must be resolved by this point ────────────
    if (!contactId) {
      log('ERROR', 'CONTACT_ID_MISSING', { domain, ghlStatus: cRes.status });
      return res.status(502).json({ success: false, event: 'SERVICE_ERROR', error: 'Errore durante la registrazione. Riprova.' });
    }

    if (isNew) {
      log('INFO', 'CONTACT_CREATED', { domain, contactId });
      return res.status(201).json({ success: true, event: 'CONTACT_CREATED' });
    }

    return res.status(200).json({ success: true, event: 'CONTACT_ALREADY_EXISTS' });

  } catch (err) {
    // Network-level error: DNS failure, connection refused
    log('ERROR', 'GHL_NETWORK_ERROR', { domain, error: err.message });
    return res.status(502).json({ success: false, event: 'SERVICE_UNREACHABLE', error: 'Il servizio non è raggiungibile. Riprova.' });
  }
}
