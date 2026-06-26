const NEWSLETTER_HTML = (v) => `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <meta name="color-scheme" content="dark">
  <title>L'Osservatorio #${v.numero} — ${v.data}</title>
</head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;">
  <tr><td align="center" style="padding:32px 16px 48px;">

    <!-- WRAPPER 600px -->
    <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#111111;border:1px solid #c9a84c;">

      <!-- ═══ HEADER ═══ -->
      <tr>
        <td style="padding:32px 40px 28px;text-align:center;border-bottom:1px solid #c9a84c;background:#0d0d0d;">
          <p style="margin:0 0 6px;font-size:10px;letter-spacing:5px;color:#c9a84c;text-transform:uppercase;">Entrate Extra — Business Community</p>
          <h1 style="margin:0 0 16px;font-size:28px;color:#ffffff;font-weight:300;letter-spacing:3px;">L'Osservatorio</h1>
          <table cellpadding="0" cellspacing="0" style="margin:0 auto;">
            <tr>
              <td style="padding:5px 16px;border:1px solid #c9a84c;background:transparent;">
                <span style="font-size:11px;letter-spacing:3px;color:#c9a84c;text-transform:uppercase;">#${v.numero} &nbsp;·&nbsp; ${v.data}</span>
              </td>
            </tr>
          </table>
          <p style="margin:16px 0 0;font-size:15px;color:#888888;line-height:1.6;">Ciao ${v.firstName}, ecco la tua analisi settimanale.</p>
        </td>
      </tr>

      <!-- ═══ L'ANALISI ═══ -->
      <tr>
        <td style="padding:36px 40px 28px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding:0 0 20px;border-bottom:2px solid #c9a84c;">
                <p style="margin:0;font-size:10px;letter-spacing:4px;color:#c9a84c;text-transform:uppercase;">L'Analisi</p>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 0 0;">
                <h2 style="margin:0 0 20px;font-size:22px;color:#ffffff;font-weight:600;line-height:1.4;">${v.analisiTitolo}</h2>
                <div style="font-size:16px;color:#e8e8e8;line-height:1.9;">${v.analisiCorpo}</div>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- ═══ IL RADAR ═══ -->
      <tr>
        <td style="padding:0 40px 28px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#1a1a1a;border-left:3px solid #c9a84c;">
            <tr>
              <td style="padding:24px 28px 20px;">
                <p style="margin:0 0 20px;font-size:10px;letter-spacing:4px;color:#c9a84c;text-transform:uppercase;">Il Radar — 3 cose da sapere</p>

                <!-- Item 1 -->
                <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:18px;">
                  <tr>
                    <td style="padding:0 0 4px;">
                      <a href="${v.radar[0].link}" style="color:#c9a84c;text-decoration:none;font-size:15px;font-weight:600;">&#8594; ${v.radar[0].testo}</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p style="margin:0;font-size:15px;color:#aaaaaa;line-height:1.7;padding-left:16px;">${v.radar[0].commento}</p>
                    </td>
                  </tr>
                </table>

                <!-- Divider -->
                <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:18px;">
                  <tr><td style="border-top:1px solid #2a2a2a;padding:0;font-size:0;line-height:0;">&nbsp;</td></tr>
                </table>

                <!-- Item 2 -->
                <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:18px;">
                  <tr>
                    <td style="padding:0 0 4px;">
                      <a href="${v.radar[1].link}" style="color:#c9a84c;text-decoration:none;font-size:15px;font-weight:600;">&#8594; ${v.radar[1].testo}</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p style="margin:0;font-size:15px;color:#aaaaaa;line-height:1.7;padding-left:16px;">${v.radar[1].commento}</p>
                    </td>
                  </tr>
                </table>

                <!-- Divider -->
                <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:18px;">
                  <tr><td style="border-top:1px solid #2a2a2a;padding:0;font-size:0;line-height:0;">&nbsp;</td></tr>
                </table>

                <!-- Item 3 -->
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:0 0 4px;">
                      <a href="${v.radar[2].link}" style="color:#c9a84c;text-decoration:none;font-size:15px;font-weight:600;">&#8594; ${v.radar[2].testo}</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p style="margin:0;font-size:15px;color:#aaaaaa;line-height:1.7;padding-left:16px;">${v.radar[2].commento}</p>
                    </td>
                  </tr>
                </table>

              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- ═══ LA STRATEGIA ═══ -->
      <tr>
        <td style="padding:0 40px 28px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding:0 0 20px;border-bottom:1px solid #2a2a2a;">
                <p style="margin:0;font-size:10px;letter-spacing:4px;color:#c9a84c;text-transform:uppercase;">La Strategia</p>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 0 0;">
                <h3 style="margin:0 0 14px;font-size:18px;color:#ffffff;font-weight:600;line-height:1.4;">${v.strategiaTitolo}</h3>
                <div style="font-size:16px;color:#e8e8e8;line-height:1.9;">${v.strategiaCorpo}</div>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- ═══ DAL BLOG ═══ -->
      <tr>
        <td style="padding:0 40px 28px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#0d0d0d;border:1px solid #222222;">
            <tr>
              <td style="padding:24px 28px;">
                <p style="margin:0 0 18px;font-size:10px;letter-spacing:4px;color:#c9a84c;text-transform:uppercase;">Dal Blog</p>
                ${v.blog.map(b => `
                <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                  <tr>
                    <td style="padding:0 0 4px;">
                      <a href="${b.link}" style="color:#ffffff;text-decoration:none;font-size:15px;font-weight:600;line-height:1.5;">${b.titolo}</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p style="margin:0 0 8px;font-size:13px;color:#888888;line-height:1.6;">${b.hook}</p>
                      <a href="${b.link}" style="font-size:12px;letter-spacing:2px;color:#c9a84c;text-decoration:none;text-transform:uppercase;">Leggi &#8594;</a>
                    </td>
                  </tr>
                </table>`).join('<table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;"><tr><td style="border-top:1px solid #1e1e1e;font-size:0;line-height:0;padding:0;">&nbsp;</td></tr></table>')}
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- ═══ LA DOMANDA ═══ -->
      <tr>
        <td style="padding:0 40px 36px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#1a1a0a;border:1px solid rgba(201,168,76,0.3);">
            <tr>
              <td style="padding:24px 28px;text-align:center;">
                <p style="margin:0 0 10px;font-size:10px;letter-spacing:4px;color:#c9a84c;text-transform:uppercase;">La Domanda della Settimana</p>
                <p style="margin:0 0 18px;font-size:17px;color:#ffffff;line-height:1.6;font-weight:500;">${v.domanda}</p>
                <a href="mailto:info@entrateextra.com?subject=Risposta%20Osservatorio%20%23${v.numero}" style="display:inline-block;padding:12px 28px;border:1px solid #c9a84c;color:#c9a84c;text-decoration:none;font-size:11px;letter-spacing:3px;text-transform:uppercase;">Rispondi via email &#8594;</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- ═══ CTA BLOG ═══ -->
      <tr>
        <td style="padding:0 40px 36px;text-align:center;">
          <p style="margin:0 0 16px;font-size:14px;color:#888888;line-height:1.7;">Analisi, guide e strategie concrete sul blog di Entrate Extra — aggiornato ogni settimana.</p>
          <a href="https://www.entrateextra.com/blog" style="display:inline-block;padding:15px 36px;background:#c9a84c;color:#000000;text-decoration:none;font-size:11px;letter-spacing:3px;text-transform:uppercase;font-weight:700;">Leggi il Blog &#8594;</a>
        </td>
      </tr>

      <!-- ═══ FOOTER ═══ -->
      <tr>
        <td style="padding:24px 40px;border-top:1px solid #1e1e1e;text-align:center;background:#0d0d0d;">
          <p style="margin:0 0 6px;font-size:13px;color:#555555;">Hai ricevuto questa email perché sei iscritto/a a L'Osservatorio di Entrate Extra.</p>
          <p style="margin:0;font-size:13px;color:#555555;">
            <a href="mailto:info@entrateextra.com?subject=Disiscrivimi%20da%20L'Osservatorio" style="color:#555555;">Disiscriviti</a>
            &nbsp;&middot;&nbsp;
            <a href="https://www.entrateextra.com" style="color:#555555;">entrateextra.com</a>
            &nbsp;&middot;&nbsp;
            <a href="mailto:info@entrateextra.com" style="color:#555555;">info@entrateextra.com</a>
          </p>
        </td>
      </tr>

    </table>
    <!-- END WRAPPER -->

  </td></tr>
</table>
</body>
</html>`;


export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  if (req.headers.authorization !== `Bearer ${process.env.PUBLISH_SECRET}`) {
    return res.status(401).json({ error: 'Non autorizzato' });
  }

  const { subject, numero, data, analisiTitolo, analisiCorpo, radar, strategiaTitolo, strategiaCorpo, blog, domanda, fonti, testEmail } = req.body;

  if (!subject || !numero || !analisiCorpo) {
    return res.status(400).json({ error: 'Campi obbligatori mancanti: subject, numero, analisiCorpo' });
  }

  const ghlHeaders = {
    'Authorization': `Bearer ${process.env.GHL_API_KEY}`,
    'Version': '2021-07-28',
    'Content-Type': 'application/json'
  };

  try {
    // 1. Recupera contatti: se testEmail invia solo a quello, altrimenti tutta la lista
    let contacts = [];

    if (testEmail) {
      // Modalità preview: cerca il singolo contatto per email
      const r = await fetch(
        `https://services.leadconnectorhq.com/contacts/?locationId=${process.env.GHL_LOCATION_ID}&query=${encodeURIComponent(testEmail)}`,
        { headers: ghlHeaders }
      );
      const d = await r.json();
      contacts = (d.contacts || []).slice(0, 1);
      console.log(`[newsletter] TEST MODE — invio solo a: ${testEmail}`);
    } else {
      // Invio completo: recupera tutti i contatti (paginati via nextPageUrl) e filtra per tag
      let nextUrl = `https://services.leadconnectorhq.com/contacts/?locationId=${process.env.GHL_LOCATION_ID}&limit=100`;
      while (nextUrl) {
        const r = await fetch(nextUrl, { headers: ghlHeaders });
        const d = await r.json();
        const batch = (d.contacts || []).filter(c =>
          Array.isArray(c.tags) && c.tags.includes('newsletter-osservatorio')
        );
        contacts = contacts.concat(batch);
        // GHL restituisce meta.nextPageUrl per la paginazione
        nextUrl = d.meta?.nextPageUrl || null;
      }
    }

    console.log(`[newsletter] Contatti trovati: ${contacts.length}`);

    // 2. Invia a ogni contatto
    const results = { sent: 0, failed: 0, errors: [] };

    for (const contact of contacts) {
      const firstName = contact.firstName || 'amico';
      const email = contact.email;
      if (!email) { results.failed++; continue; }

      const html = NEWSLETTER_HTML({ numero, data, firstName, analisiTitolo, analisiCorpo, radar, strategiaTitolo, strategiaCorpo, blog, domanda });

      const emailRes = await fetch('https://services.leadconnectorhq.com/conversations/messages', {
        method: 'POST',
        headers: ghlHeaders,
        body: JSON.stringify({
          type: 'Email',
          contactId: contact.id,
          emailTo: email,
          emailFrom: 'info@entrateextra.com',
          emailFromName: "L'Osservatorio di Entrate Extra",
          subject,
          html,
          locationId: process.env.GHL_LOCATION_ID
        })
      });

      if (emailRes.ok) {
        results.sent++;
      } else {
        results.failed++;
        const err = await emailRes.json().catch(() => ({}));
        results.errors.push({ email, status: emailRes.status, msg: err.message });
      }

      // Pausa 100ms tra invii per evitare rate limit
      await new Promise(r => setTimeout(r, 100));
    }

    console.log(`[newsletter] Inviata: ${results.sent} ok, ${results.failed} errori`);

    // 3. Salva fonti su GitHub (solo se invio reale, non test)
    if (!testEmail && fonti && fonti.length > 0) {
      try {
        const REPO = 'ernestocarlo25/entrate-extra-blog-proxy';
        const FILE_PATH = 'data/newsletter-sources.json';
        const ghHeaders = {
          'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github+json',
          'Content-Type': 'application/json'
        };

        const fileRes = await fetch(`https://api.github.com/repos/${REPO}/contents/${FILE_PATH}`, { headers: ghHeaders });
        const fileData = await fileRes.json();
        const current = JSON.parse(Buffer.from(fileData.content, 'base64').toString('utf-8'));

        current._aggiornato = new Date().toISOString().split('T')[0];
        current.puntate[numero] = {
          data,
          subject,
          dataInvio: new Date().toISOString(),
          destinatari: results.sent,
          fonti
        };

        await fetch(`https://api.github.com/repos/${REPO}/contents/${FILE_PATH}`, {
          method: 'PUT',
          headers: ghHeaders,
          body: JSON.stringify({
            message: `Fonti newsletter #${numero} — ${data}`,
            content: Buffer.from(JSON.stringify(current, null, 2)).toString('base64'),
            sha: fileData.sha
          })
        });

        console.log(`[newsletter] Fonti puntata #${numero} salvate su GitHub`);
      } catch (e) {
        console.error('[newsletter] Errore salvataggio fonti:', e.message);
      }
    }

    return res.status(200).json({ success: true, total: contacts.length, ...results });

  } catch (err) {
    console.error('[newsletter] errore:', err.message);
    return res.status(500).json({ error: err.message });
  }
}
