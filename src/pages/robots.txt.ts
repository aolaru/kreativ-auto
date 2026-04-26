export function GET() {
  const body = `User-agent: *
Allow: /

Sitemap: https://kreativauto.com/sitemap.xml
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}
