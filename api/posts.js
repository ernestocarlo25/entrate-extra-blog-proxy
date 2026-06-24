export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  const { limit = 20, offset = 0, categoryId } = req.query;

  let url = `https://services.leadconnectorhq.com/blogs/posts/all` +
    `?locationId=${process.env.GHL_LOCATION_ID}` +
    `&blogId=${process.env.GHL_BLOG_ID}` +
    `&limit=${limit}&offset=${offset}&status=PUBLISHED`;

  if (categoryId) url += `&categoryIds=${categoryId}`;

  try {
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${process.env.GHL_API_KEY}`,
        'Version': '2021-07-28'
      }
    });
    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: 'Errore nel recupero degli articoli' });
  }
}
