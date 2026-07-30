const DOMAIN = 'https://www.mlawyer.in';
const STATIC_PAGES = [
  { loc: '/', priority: '1.0', changefreq: 'daily' },
  { loc: '/lawyer', priority: '0.9', changefreq: 'weekly' },
  { loc: '/customer', priority: '0.9', changefreq: 'weekly' },
  { loc: '/family-lawyers', priority: '0.9', changefreq: 'weekly' },
  { loc: '/property-lawyers', priority: '0.9', changefreq: 'weekly' },
  { loc: '/legal-criminal-lawyers', priority: '0.9', changefreq: 'weekly' },
  { loc: '/best-corporate-lawyers', priority: '0.9', changefreq: 'weekly' },
  { loc: '/consumer-right-lawyer-app', priority: '0.9', changefreq: 'weekly' },
  { loc: '/labour-lawyer-advisor', priority: '0.9', changefreq: 'weekly' },
  { loc: '/services/startup-lawyer', priority: '0.8', changefreq: 'weekly' },
  { loc: '/services/nri-legal-support', priority: '0.8', changefreq: 'weekly' },
  { loc: '/pricing', priority: '0.9', changefreq: 'weekly' },
  { loc: '/about-us', priority: '0.9', changefreq: 'weekly' },
  { loc: '/blogs', priority: '0.9', changefreq: 'daily' },
  { loc: '/contact-us', priority: '0.9', changefreq: 'weekly' },
  { loc: '/download', priority: '0.9', changefreq: 'weekly' },
  { loc: '/how-it-works', priority: '0.9', changefreq: 'weekly' },
  { loc: '/privacy-policy', priority: '0.9', changefreq: 'monthly' },
  { loc: '/terms-and-conditions', priority: '0.9', changefreq: 'monthly' },
  { loc: '/customer/best-corporate-lawyers', priority: '0.8', changefreq: 'weekly' },
  { loc: '/customer/online-legal-consultation', priority: '0.8', changefreq: 'weekly' },
  { loc: '/customer/legal-criminal-lawyer', priority: '0.8', changefreq: 'weekly' },
  { loc: '/waitlist', priority: '0.9', changefreq: 'weekly' }
];

export default async function handler(req, res) {
  const today = new Date().toISOString().split('T')[0];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // 1. Add static pages
  for (const page of STATIC_PAGES) {
    xml += '  <url>\n';
    xml += `    <loc>${DOMAIN}${page.loc}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += '  </url>\n';
  }

  // 2. Add blog pages dynamically
  try {
    const response = await fetch('https://raw.githubusercontent.com/mlawyerlegalconsultation/mlawyer-blog-files/main/index.json');
    if (response.ok) {
      const blogs = await response.json();
      for (const blog of blogs) {
        if (!blog.slug) continue;
        const lastmodDate = blog.updatedAt || blog.date || today;
        const formattedLastmod = new Date(lastmodDate).toISOString().split('T')[0];

        xml += '  <url>\n';
        xml += `    <loc>${DOMAIN}/blog/${blog.slug}</loc>\n`;
        xml += `    <lastmod>${formattedLastmod}</lastmod>\n`;
        xml += '    <changefreq>weekly</changefreq>\n';
        xml += '    <priority>0.8</priority>\n';
        xml += '  </url>\n';
      }
    }
  } catch (error) {
    console.error('Error rendering dynamic sitemap blogs:', error);
  }

  xml += '</urlset>\n';

  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=600');
  res.status(200).send(xml);
}
