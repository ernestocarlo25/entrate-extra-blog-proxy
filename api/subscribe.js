export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, phone } = req.body;
  if (!email) return res.status(400).json({ error: 'Email richiesta' });

  const nameParts = (name || '').trim().split(' ');
  const firstName = nameParts[0] || '';
  const lastName = nameParts.slice(1).join(' ') || '';

  const payload = {
    locationId: process.env.GHL_LOCATION_ID,
    firstName,
    lastName,
    email,
    tags: ['newsletter-osservatorio']
  };
  if (phone) payload.phone = phone;

  try {
    const ghlRes = await fetch('https://services.leadconnectorhq.com/contacts/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GHL_API_KEY}`,
        'Version': '2021-07-28',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const data = await ghlRes.json();

    if (!ghlRes.ok) {
      if (ghlRes.status === 422 || (data.message && data.message.toLowerCase().includes('duplicate'))) {
        return res.status(200).json({ success: true, existing: true });
      }
      return res.status(500).json({ error: data.message || 'Errore GHL' });
    }

    return res.status(200).json({ success: true, contactId: data.contact?.id });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
