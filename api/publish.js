export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  if (req.headers.authorization !== `Bearer ${process.env.PUBLISH_SECRET}`) {
    return res.status(401).json({ error: 'Non autorizzato' });
  }

  const { title, description, rawHTML, categoryId, imageUrl, imageAltText, urlSlug, authorId, publishedAt } = req.body;

  try {
    // 1. Pubblica su GHL
    const ghlRes = await fetch('https://services.leadconnectorhq.com/blogs/posts', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GHL_API_KEY}`,
        'Content-Type': 'application/json',
        'Version': '2021-07-28'
      },
      body: JSON.stringify({
        title, locationId: process.env.GHL_LOCATION_ID, blogId: process.env.GHL_BLOG_ID,
        description, rawHTML, status: 'PUBLISHED', imageUrl, imageAltText,
        categories: [categoryId], author: authorId || '6a3a93a49a4feeedeb60c3f1',
        urlSlug, publishedAt: publishedAt || new Date().toISOString()
      })
    });
    const ghlData = await ghlRes.json();

    // 2. Aggiorna posts-content.json su GitHub
    const REPO = 'ernestocarlo25/entrate-extra-blog-proxy';
    const FILE_PATH = 'data/posts-content.json';
    const fileRes = await fetch(`https://api.github.com/repos/${REPO}/contents/${FILE_PATH}`, {
      headers: {
        'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github+json'
      }
    });
    const fileData = await fileRes.json();
    const current = JSON.parse(Buffer.from(fileData.content, 'base64').toString('utf-8'));
    current[urlSlug] = rawHTML;

    await fetch(`https://api.github.com/repos/${REPO}/contents/${FILE_PATH}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: `Add article: ${urlSlug}`,
        content: Buffer.from(JSON.stringify(current)).toString('base64'),
        sha: fileData.sha
      })
    });

    return res.status(200).json({ success: true, postId: ghlData.id || ghlData._id, urlSlug });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
