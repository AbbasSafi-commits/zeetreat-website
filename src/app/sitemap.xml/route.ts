import type { Metadata } from 'next';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

export default function Sitemap() {
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://zeetreat.com/</loc>
       <lastmod>2026-09-04</lastmod>
       <changefreq>weekly</changefreq>
       <priority>1.0</priority>
     </url>
     <url>
       <loc>https://zeetreat.com/services</loc>
       <lastmod>2026-09-04</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>https://zeetreat.com/equipment</loc>
       <lastmod>2026-09-04</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>https://zeetreat.com/pricing</loc>
       <lastmod>2026-09-04</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>https://zeetreat.com/about</loc>
       <lastmod>2026-09-04</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.7</priority>
     </url>
     <url>
       <loc>https://zeetreat.com/blog</loc>
       <lastmod>2026-09-04</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.7</priority>
     </url>
     <url>
       <loc>https://zeetreat.com/contact</loc>
       <lastmod>2026-09-04</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.6</priority>
     </url>
     <url>
       <loc>https://zeetreat.com/careers</loc>
       <lastmod>2026-09-04</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.6</priority>
     </url>
     <url>
       <loc>https://zeetreat.com/privacy</loc>
       <lastmod>2026-09-04</lastmod>
       <changefreq>yearly</changefreq>
       <priority>0.3</priority>
     </url>
     <url>
       <loc>https://zeetreat.com/terms</loc>
       <lastmod>2026-09-04</lastmod>
       <changefreq>yearly</changefreq>
       <priority>0.3</priority>
     </url>
   </urlset>`,
    {
      headers: {
        'Content-Type': 'application/xml',
      },
    }
  );
}
