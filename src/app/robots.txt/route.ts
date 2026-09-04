export default function Robots() {
  return new Response(
    `User-agent: *
Allow: /
Disallow: /private/

Sitemap: https://zeetreat.com/sitemap.xml`,
    {
      headers: {
        'Content-Type': 'text/plain',
      },
    }
  );
}
