const WELCOME_EMAIL_HTML = (firstName) => `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:Georgia,serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;">
  <tr><td align="center" style="padding:40px 20px;">
    <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#111111;border:1px solid #c9a84c;">
      <tr>
        <td style="padding:40px;text-align:center;border-bottom:1px solid #c9a84c;">
          <p style="margin:0;font-size:11px;letter-spacing:4px;color:#c9a84c;text-transform:uppercase;">Entrate Extra — Business Community</p>
          <h1 style="margin:12px 0 0;font-size:26px;color:#ffffff;font-weight:normal;letter-spacing:2px;">L'Osservatorio</h1>
        </td>
      </tr>
      <tr>
        <td style="padding:40px;">
          <p style="color:#cccccc;font-size:16px;line-height:1.8;">Ciao ${firstName},</p>
          <p style="color:#cccccc;font-size:16px;line-height:1.8;">benvenuto/a in <strong style="color:#ffffff;">L'Osservatorio di Entrate Extra</strong>.</p>
          <p style="color:#cccccc;font-size:16px;line-height:1.8;">Non ti sei iscritto/a a una newsletter qualunque. Hai scelto di ricevere ogni settimana analisi, strategie e opportunità concrete — selezionate da chi lavora ogni giorno nel mondo del business e delle entrate extra.</p>
          <p style="color:#cccccc;font-size:16px;line-height:1.8;">Niente rumore. Niente contenuti di basso valore. Solo ciò che vale davvero il tuo tempo.</p>
          <table width="100%" cellpadding="0" cellspacing="0" style="margin:30px 0;border-left:3px solid #c9a84c;">
            <tr><td style="padding:20px 24px;background:#1a1a1a;">
              <p style="margin:0 0 12px;font-size:11px;letter-spacing:3px;color:#c9a84c;text-transform:uppercase;">Cosa riceverai ogni settimana</p>
              <p style="margin:6px 0;color:#cccccc;font-size:15px;">&#10003; Analisi su modelli di business e opportunità concrete</p>
              <p style="margin:6px 0;color:#cccccc;font-size:15px;">&#10003; Risorse selezionate: tool, trend, strategie da conoscere prima degli altri</p>
              <p style="margin:6px 0;color:#cccccc;font-size:15px;">&#10003; Accesso anticipato a contenuti riservati ai membri della community</p>
            </td></tr>
          </table>
          <p style="margin:30px 0 10px;font-size:11px;letter-spacing:3px;color:#c9a84c;text-transform:uppercase;">Nel frattempo, inizia da qui</p>
          <p style="margin:0 0 10px;"><a href="https://www.entrateextra.com/blog/come-creare-entrate-extra-2026-5-strategie" style="color:#c9a84c;text-decoration:none;font-size:15px;line-height:1.8;">&#8594; Come creare entrate extra nel 2026: le 5 strategie pi&#249; efficaci</a></p>
          <p style="margin:0 0 30px;"><a href="https://www.entrateextra.com/blog/network-marketing-verita-pro-contro-guida-2026" style="color:#c9a84c;text-decoration:none;font-size:15px;line-height:1.8;">&#8594; Network Marketing: la verit&#224; che nessuno ti dice</a></p>
          <table width="100%" cellpadding="0" cellspacing="0" style="margin:10px 0 30px;">
            <tr><td align="center">
              <a href="https://www.entrateextra.com" style="display:inline-block;padding:16px 40px;background:#c9a84c;color:#000000;text-decoration:none;font-size:12px;letter-spacing:3px;text-transform:uppercase;font-weight:bold;">Scopri la Community &#8594;</a>
            </td></tr>
          </table>
          <table width="100%" cellpadding="0" cellspacing="0" style="margin:20px 0;">
            <tr><td style="padding:16px 20px;background:#1a1a0a;border:1px solid rgba(201,168,76,0.15);">
              <p style="margin:0;color:#999999;font-size:13px;line-height:1.7;">&#9888;&#65039; <strong style="color:#cccccc;">Una cosa importante:</strong> se questa email &#232; finita nello <strong style="color:#cccccc;">Spam</strong> o nella scheda <strong style="color:#cccccc;">Promozioni</strong> di Gmail, spostala nella cartella <strong style="color:#cccccc;">Principale</strong>. In questo modo tutte le prossime arriveranno direttamente l&#236;.</p>
            </td></tr>
          </table>
          <p style="color:#cccccc;font-size:15px;line-height:1.8;margin-top:30px;">A presto,<br><strong style="color:#ffffff;">Ernesto e il Team di Entrate Extra</strong></p>
        </td>
      </tr>
      <tr>
        <td style="padding:24px 40px;border-top:1px solid #222222;text-align:center;">
          <p style="margin:0 0 8px;font-size:11px;color:#555555;">Hai ricevuto questa email perch&#233; ti sei iscritto/a a L'Osservatorio di Entrate Extra su entrateextra.com</p>
          <p style="margin:0;font-size:11px;color:#555555;"><a href="mailto:info@entrateextra.com?subject=Disiscrivimi%20da%20L'Osservatorio" style="color:#555555;">Disiscriviti in un click</a> &middot; <a href="mailto:info@entrateextra.com" style="color:#555555;">info@entrateextra.com</a></p>
        </td>
      </tr>
    </table>
  </td></tr>
</table>
</body>
</html>`;

const WELCOME_SMS = (firstName) => `Ciao ${firstName}! 👋

Benvenuto/a in *Entrate Extra — Business Community!*

Sei ufficialmente iscritto/a a *L'Osservatorio di Entrate Extra*, la nostra newsletter settimanale con strategie, analisi e opportunità per costruire entrate extra concrete.

*Una cosa importante sul numero WhatsApp:*
Lo useremo *solo per comunicazioni davvero importanti* — niente spam, te lo garantiamo.

*La newsletter la ricevi via email.*
Vai subito nella tua casella di posta e cerca un messaggio da *info@entrateextra.com*

Non lo trovi? Controlla qui:
📁 La cartella *Spam*
📁 Se usi Gmail → la scheda *Promozioni*

Se lo trovi in una di queste cartelle, *trascinalo nella cartella Principale*. In questo modo tutte le nostre email future arriveranno direttamente lì.

Per qualsiasi domanda, rispondi a quell'email — siamo lì.

A presto,
*Il Team di Entrate Extra* 🚀`;

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, phone } = req.body;
  if (!email) return res.status(400).json({ error: 'Email richiesta' });

  const nameParts = (name || '').trim().split(' ');
  const firstName = nameParts[0] || 'amico';
  const lastName = nameParts.slice(1).join(' ') || '';

  const ghlHeaders = {
    'Authorization': `Bearer ${process.env.GHL_API_KEY}`,
    'Version': '2021-07-28',
    'Content-Type': 'application/json'
  };

  try {
    // 1. Create contact
    const contactPayload = {
      locationId: process.env.GHL_LOCATION_ID,
      firstName,
      lastName,
      email,
      tags: ['newsletter-osservatorio']
    };
    if (phone) contactPayload.phone = phone;

    const contactRes = await fetch('https://services.leadconnectorhq.com/contacts/', {
      method: 'POST',
      headers: ghlHeaders,
      body: JSON.stringify(contactPayload)
    });
    const contactData = await contactRes.json();

    const contactId = contactData.contact?.id;
    if (!contactId && !contactRes.ok) {
      const isDuplicate = contactRes.status === 422 ||
        (contactData.message || '').toLowerCase().includes('duplicate');
      if (!isDuplicate) return res.status(500).json({ error: contactData.message || 'Errore creazione contatto' });
    }

    // 2. Send welcome email
    if (contactId) {
      await fetch('https://services.leadconnectorhq.com/conversations/messages', {
        method: 'POST',
        headers: ghlHeaders,
        body: JSON.stringify({
          type: 'Email',
          contactId,
          emailFrom: 'info@entrateextra.com',
          emailFromName: "L'Osservatorio di Entrate Extra",
          emailSubject: `Sei dentro, ${firstName}. Ecco da dove iniziare.`,
          html: WELCOME_EMAIL_HTML(firstName),
          locationId: process.env.GHL_LOCATION_ID
        })
      });

      // 3. Send WhatsApp/SMS if phone provided
      if (phone) {
        await fetch('https://services.leadconnectorhq.com/conversations/messages', {
          method: 'POST',
          headers: ghlHeaders,
          body: JSON.stringify({
            type: 'SMS',
            contactId,
            message: WELCOME_SMS(firstName),
            locationId: process.env.GHL_LOCATION_ID
          })
        });
      }
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
