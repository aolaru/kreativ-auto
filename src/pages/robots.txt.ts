export function GET() {
  const body = `User-agent: *
Allow: /
Disallow: /internal/
Disallow: /search-index.json

Sitemap: https://kreativauto.com/sitemap.xml
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}
