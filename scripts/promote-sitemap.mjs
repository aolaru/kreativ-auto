import { copyFile, readdir } from "node:fs/promises";
import path from "node:path";

const cwd = process.cwd();
const distDir = path.join(cwd, "dist");
const entries = await readdir(distDir);
const sitemapParts = entries
  .filter((entry) => /^sitemap-\d+\.xml$/.test(entry))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

if (sitemapParts.length === 0) {
  throw new Error("No sitemap shard was generated in dist/.");
}

if (sitemapParts.length > 1) {
  throw new Error(
    `Expected a single sitemap shard, but found ${sitemapParts.length}: ${sitemapParts.join(", ")}.`
  );
}

const source = path.join(distDir, sitemapParts[0]);
const target = path.join(distDir, "sitemap.xml");

await copyFile(source, target);
console.log(`Promoted ${sitemapParts[0]} to sitemap.xml`);
