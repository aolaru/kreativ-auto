import { buildSearchIndex } from "../../utils/search-index";

export async function GET() {
  return new Response(JSON.stringify(await buildSearchIndex()), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600"
    }
  });
}
