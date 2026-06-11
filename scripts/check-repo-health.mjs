import fs from "node:fs";
import path from "node:path";

const cwd = process.cwd();
const ignoredDirs = new Set([".git", "node_modules", "dist"]);
const sourceExts = new Set([".astro", ".md", ".ts", ".js", ".mjs"]);
const imageRefPattern = /\/images\/[A-Za-z0-9_./-]+\.(?:png|jpe?g|webp|svg)/g;
const problems = [];
const checkedImages = new Set();
const minimumAdsenseContentWords = 450;
const requiredStaticFiles = [
  "public/ads.txt",
  "src/pages/about.astro",
  "src/pages/contact.astro",
  "src/pages/editorial-policy.astro",
  "src/pages/affiliate-disclosure.astro",
  "src/pages/privacy-policy.astro"
];

function walk(dir, visitor) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ignoredDirs.has(entry.name)) continue;

    const fullPath = path.join(dir, entry.name);

    if (entry.name.includes("conflicted copy")) {
      problems.push(`Conflicted copy file found: ${path.relative(cwd, fullPath)}`);
    }

    if (entry.isDirectory()) {
      walk(fullPath, visitor);
    } else {
      visitor(fullPath);
    }
  }
}

function checkImageReference(filePath, imageRef, context = "references") {
  const key = `${filePath}:${imageRef}`;
  if (checkedImages.has(key)) return;
  checkedImages.add(key);

  const imagePath = path.join(cwd, "public", imageRef.slice(1));
  if (!fs.existsSync(imagePath)) {
    problems.push(`${path.relative(cwd, filePath)} ${context} missing image ${imageRef}`);
  }

  if (imageRef.startsWith("/images/photos/")) {
    const thumbnailRef = imageRef.replace("/images/photos/", "/images/thumbs/");
    const thumbnailPath = path.join(cwd, "public", thumbnailRef.slice(1));
    if (!fs.existsSync(thumbnailPath)) {
      problems.push(`${path.relative(cwd, filePath)} derives missing thumbnail ${thumbnailRef} from ${imageRef}`);
    }
  }
}

walk(cwd, (filePath) => {
  if (!sourceExts.has(path.extname(filePath))) return;

  const source = fs.readFileSync(filePath, "utf8");
  for (const match of source.matchAll(imageRefPattern)) {
    checkImageReference(filePath, match[0]);
  }
});

for (const relativePath of requiredStaticFiles) {
  if (!fs.existsSync(path.join(cwd, relativePath))) {
    problems.push(`Required trust or ads file is missing: ${relativePath}`);
  }
}

const adsTxtPath = path.join(cwd, "public", "ads.txt");
if (fs.existsSync(adsTxtPath)) {
  const adsTxt = fs.readFileSync(adsTxtPath, "utf8");
  if (!/google\.com,\s*pub-\d+,\s*DIRECT,\s*f08c47fec0942fa0/.test(adsTxt)) {
    problems.push("public/ads.txt does not include a valid Google AdSense DIRECT seller entry.");
  }
}

const baseLayoutPath = path.join(cwd, "src", "layouts", "BaseLayout.astro");
if (fs.existsSync(baseLayoutPath)) {
  const baseLayout = fs.readFileSync(baseLayoutPath, "utf8");
  if (!baseLayout.includes("google-adsense-account") || !baseLayout.includes("pagead2.googlesyndication.com/pagead/js/adsbygoogle.js")) {
    problems.push("BaseLayout.astro is missing the AdSense account meta tag or AdSense script loader.");
  }
}

const footerPath = path.join(cwd, "src", "components", "Footer.astro");
if (fs.existsSync(footerPath)) {
  const footer = fs.readFileSync(footerPath, "utf8");
  if (!footer.includes("/privacy-policy/")) {
    problems.push("Footer.astro does not link to the privacy policy.");
  }
}

if (fs.existsSync(path.join(cwd, ".git", "refs"))) {
  walk(path.join(cwd, ".git", "refs"), (filePath) => {
    if (path.basename(filePath).includes("conflicted copy")) {
      problems.push(`Conflicted Git ref found: ${path.relative(cwd, filePath)}`);
    }
  });
}

const distDir = path.join(cwd, "dist");
if (fs.existsSync(distDir)) {
  const renderedPages = [];

  walk(distDir, (filePath) => {
    if (path.extname(filePath) === ".html") {
      renderedPages.push(filePath);
    }
  });

  for (const filePath of renderedPages) {
    const html = fs.readFileSync(filePath, "utf8");
    const hasAdsense = html.includes("pagead2.googlesyndication.com/pagead/js/adsbygoogle.js");
    const robots = html.match(/<meta name="robots" content="([^"]+)"/i)?.[1] ?? "";

    if (!hasAdsense || !robots.includes("index")) continue;

    const visibleText = html
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<svg[\s\S]*?<\/svg>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/&[a-z0-9#]+;/gi, " ")
      .replace(/\s+/g, " ")
      .trim();
    const wordCount = visibleText ? visibleText.split(/\s+/).length : 0;

    if (wordCount < minimumAdsenseContentWords) {
      const route = `/${path.relative(distDir, filePath).replace(/index\.html$/, "").replace(/\.html$/, "")}`;
      problems.push(
        `${route} has AdSense enabled with only ${wordCount} rendered words; keep ads off thin archive/navigation pages.`
      );
    }
  }

  const sitemapPath = path.join(distDir, "sitemap.xml");
  if (fs.existsSync(sitemapPath)) {
    const sitemap = fs.readFileSync(sitemapPath, "utf8");
    const sitemapLocs = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);

    for (const loc of sitemapLocs) {
      const pathname = new URL(loc).pathname;
      const htmlPath =
        pathname === "/"
          ? path.join(distDir, "index.html")
          : path.join(distDir, pathname.replace(/^\/+/, ""), "index.html");

      if (!fs.existsSync(htmlPath)) continue;

      const html = fs.readFileSync(htmlPath, "utf8");
      if (/<meta\s+name="robots"\s+content="[^"]*noindex/i.test(html)) {
        problems.push(`${pathname} is noindex but still appears in dist/sitemap.xml.`);
      }
    }
  }
}

const ownershipGuidesPath = path.join(cwd, "src", "data", "ownership-guides.ts");
const quickOwnershipGuidesPath = path.join(cwd, "src", "data", "quick-ownership-guides.ts");
const guidesDir = path.join(cwd, "src", "pages", "guides");

if (fs.existsSync(ownershipGuidesPath) && fs.existsSync(guidesDir)) {
  const ownershipSource = fs.readFileSync(ownershipGuidesPath, "utf8");
  const quickSource = fs.existsSync(quickOwnershipGuidesPath) ? fs.readFileSync(quickOwnershipGuidesPath, "utf8") : "";
  const dynamicGuideSlugs = new Set([...quickSource.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]));
  const staticGuideSlugs = new Set(
    fs
      .readdirSync(guidesDir)
      .filter((fileName) => fileName.endsWith(".astro") && !fileName.startsWith("[") && fileName !== "index.astro")
      .map((fileName) => fileName.replace(/\.astro$/, ""))
  );

  for (const match of ownershipSource.matchAll(/href:\s*"\/guides\/([^"]+)\/"/g)) {
    const slug = match[1];
    if (!staticGuideSlugs.has(slug) && !dynamicGuideSlugs.has(slug)) {
      problems.push(`src/data/ownership-guides.ts references missing guide /guides/${slug}/`);
    }
  }
}

if (problems.length) {
  console.error(problems.join("\n"));
  process.exit(1);
}

console.log("Repo health checks passed.");
