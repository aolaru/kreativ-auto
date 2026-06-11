import { copyFile, readFile, readdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
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

const routeToHtmlPath = (pathname) => {
  if (pathname === "/") return path.join(distDir, "index.html");
  const cleanPath = pathname.replace(/^\/+/, "");
  if (/\.[a-z0-9]+$/i.test(cleanPath)) return path.join(distDir, cleanPath);
  return path.join(distDir, cleanPath, "index.html");
};

const hasNoindexRobots = async (pathname) => {
  const htmlPath = routeToHtmlPath(pathname);
  if (!existsSync(htmlPath)) return false;

  const html = await readFile(htmlPath, "utf8");
  return /<meta\s+name="robots"\s+content="[^"]*noindex/i.test(html);
};

let sitemap = await readFile(source, "utf8");
const urlPattern = /<url><loc>(.*?)<\/loc><\/url>/g;
const filteredUrls = [];
let removedCount = 0;

for (const match of sitemap.matchAll(urlPattern)) {
  const loc = match[1];
  const pathname = new URL(loc).pathname;

  if (await hasNoindexRobots(pathname)) {
    removedCount += 1;
    continue;
  }

  filteredUrls.push(match[0]);
}

if (filteredUrls.length > 0) {
  sitemap = sitemap.replace(/<url>[\s\S]*<\/url>/, filteredUrls.join(""));
  await writeFile(source, sitemap);
}

await copyFile(source, target);
console.log(`Promoted ${sitemapParts[0]} to sitemap.xml and removed ${removedCount} noindex URL${removedCount === 1 ? "" : "s"}`);
