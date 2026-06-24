export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  const { slug } = req.query;
  if (!slug) return res.status(400).json({ error: 'slug richiesto' });

  const listUrl = `https://services.leadconnectorhq.com/blogs/posts/all` +
    `?locationId=${process.env.GHL_LOCATION_ID}` +
    `&blogId=${process.env.GHL_BLOG_ID}` +
    `&limit=100&offset=0&status=PUBLISHED`;

  try {
    const [listRes, contentRes] = await Promise.all([
      fetch(listUrl, {
        headers: {
          'Authorization': `Bearer ${process.env.GHL_API_KEY}`,
          'Version': '2021-07-28'
        }
      }),
      fetch('https://raw.githubusercontent.com/ernestocarlo25/entrate-extra-blog-proxy/main/data/posts-content.json')
    ]);

    const listData = await listRes.json();
    const contentMap = await contentRes.json();

    const post = listData.blogs?.find(p => p.urlSlug === slug);
    if (!post) return res.status(404).json({ error: 'Articolo non trovato' });

    return res.status(200).json({
      ...post,
      rawHTML: contentMap[slug] || ''
    });
  } catch (err) {
    return res.status(500).json({ error: "Errore nel recupero dell'articolo" });
  }
}
