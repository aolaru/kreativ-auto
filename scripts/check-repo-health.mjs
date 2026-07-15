import fs from "node:fs";
import path from "node:path";

const cwd = process.cwd();
const ignoredDirs = new Set([".git", "node_modules", "dist"]);
const sourceExts = new Set([".astro", ".md", ".ts", ".js", ".mjs"]);
const imageRefPattern = /\/images\/[A-Za-z0-9_./-]+\.(?:png|jpe?g|webp|svg)/g;
const problems = [];
const checkedImages = new Set();
const minimumAdsenseContentWords = 900;
const lowValueContentRoots = [
  path.join(cwd, "src", "content"),
  path.join(cwd, "src", "pages"),
  path.join(cwd, "src", "data"),
  path.join(cwd, "scripts", "autopilot")
];
const prohibitedLowValuePhrases = [
  "starter page",
  "starter coverage",
  "weekly scaffold",
  "first scaffold",
  "scaffold",
  "credible base entry",
  "next content passes",
  "cluster starts filling out",
  "cluster gets deeper",
  "still being built",
  "refine trim-level differences later",
  "refine exact trim differences later",
  "refine specific hardware differences later",
  "should be refined later",
  "confirm part splits later",
  "where the site",
  "site already has",
  "content maze",
  "content layer",
  "guide layer",
  "flat listing",
  "database view",
  "published car hubs",
  "car hub page",
  "vehicle cluster",
  "strongest vehicle clusters",
  "deepest cluster",
  "supporting pages",
  "generation context",
  "automation lanes",
  "content-quality gaps",
  "cluster work",
  "cluster into",
  "guide stack",
  "pages already available",
  "linked from this page",
  "use this guide",
  "use this page",
  "use this category",
  "use this view",
  "use this when",
  "use this if",
  "use this after",
  "use this before",
  "use this first",
  "use this order",
  "use these pages",
  "use these guides",
  "this guide",
  "this page",
  "these pages",
  "this comparison",
  "how to use this",
  "what this section",
  "low-value content",
  "content gaps",
  "generated thumbnails",
  "guide treatment",
  "linked problem",
  "linked guides",
  "linked pages",
  "linked sections",
  "platform coverage",
  "deeper hvac coverage",
  "model-year hub",
  "generation hub",
  "car hub",
  "this page is written",
  "this page treats",
  "this page keeps",
  "use this page as",
  "the site is",
  "on the site"
];
const requiredStaticFiles = [
  "public/_headers",
  "public/ads.txt",
  "src/pages/about.astro",
  "src/pages/contact.astro",
  "src/pages/editorial-policy.astro",
  "src/pages/image-credits.astro",
  "src/pages/affiliate-disclosure.astro",
  "src/pages/privacy-policy.astro"
];
const maxReferencedPhotoBytes = 500 * 1024;
const maxDerivedThumbnailBytes = 140 * 1024;
const knownCarPhotoPlaceholders = new Set();
const optimizedPublicImageRoots = [
  path.join(cwd, "public", "images", "cars"),
  path.join(cwd, "public", "images", "photos"),
  path.join(cwd, "public", "images", "thumbs")
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
    return;
  }

  if (
    imageRef.startsWith("/images/photos/cars/") &&
    imageRef.endsWith(".svg") &&
    !knownCarPhotoPlaceholders.has(imageRef)
  ) {
    problems.push(`${path.relative(cwd, filePath)} references car SVG placeholder ${imageRef}; use a real WebP photo.`);
  }

  if (imageRef.startsWith("/images/photos/parts/") && /\.(?:png|jpe?g)$/i.test(imageRef)) {
    problems.push(`${path.relative(cwd, filePath)} references unoptimized part photo ${imageRef}; use WebP.`);
  }

  if (imageRef.startsWith("/images/photos/") && !imageRef.endsWith(".svg")) {
    const imageBytes = fs.statSync(imagePath).size;
    if (imageBytes > maxReferencedPhotoBytes) {
      problems.push(`${path.relative(cwd, filePath)} references oversized photo ${imageRef} (${Math.round(imageBytes / 1024)} KB).`);
    }
  }

  if (imageRef.startsWith("/images/photos/")) {
    const thumbnailRef = imageRef.replace("/images/photos/", "/images/thumbs/");
    const thumbnailPath = path.join(cwd, "public", thumbnailRef.slice(1));
    if (!fs.existsSync(thumbnailPath)) {
      problems.push(`${path.relative(cwd, filePath)} derives missing thumbnail ${thumbnailRef} from ${imageRef}`);
    } else {
      const thumbnailBytes = fs.statSync(thumbnailPath).size;
      if (thumbnailBytes > maxDerivedThumbnailBytes) {
        problems.push(`${path.relative(cwd, filePath)} derives oversized thumbnail ${thumbnailRef} (${Math.round(thumbnailBytes / 1024)} KB).`);
      }
    }
  }
}

function isPolicySensitiveSource(filePath) {
  return lowValueContentRoots.some((root) => {
    const relativePath = path.relative(root, filePath);
    return relativePath && !relativePath.startsWith("..") && !path.isAbsolute(relativePath);
  });
}

walk(cwd, (filePath) => {
  if (!sourceExts.has(path.extname(filePath))) return;

  const source = fs.readFileSync(filePath, "utf8");
  if (isPolicySensitiveSource(filePath)) {
    const lowerSource = source.toLowerCase();
    for (const phrase of prohibitedLowValuePhrases) {
      if (lowerSource.includes(phrase)) {
        problems.push(`${path.relative(cwd, filePath)} contains low-value placeholder phrase "${phrase}".`);
      }
    }
  }

  for (const match of source.matchAll(imageRefPattern)) {
    checkImageReference(filePath, match[0]);
  }
});

for (const relativePath of requiredStaticFiles) {
  if (!fs.existsSync(path.join(cwd, relativePath))) {
    problems.push(`Required trust or ads file is missing: ${relativePath}`);
  }
}

for (const imageRoot of optimizedPublicImageRoots) {
  if (!fs.existsSync(imageRoot)) continue;
  walk(imageRoot, (filePath) => {
    if (/\.(?:png|jpe?g)$/i.test(filePath)) {
      problems.push(`${path.relative(cwd, filePath)} is a legacy raster image; use an optimized WebP asset.`);
    }
  });
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
  if (!baseLayout.includes('name="referrer"') || !baseLayout.includes("strict-origin-when-cross-origin")) {
    problems.push("BaseLayout.astro is missing the strict referrer policy meta tag.");
  }
}

const headersPath = path.join(cwd, "public", "_headers");
if (fs.existsSync(headersPath)) {
  const headers = fs.readFileSync(headersPath, "utf8");
  for (const requiredHeader of ["X-Content-Type-Options", "X-Frame-Options", "Referrer-Policy", "Permissions-Policy", "Strict-Transport-Security"]) {
    if (!headers.includes(requiredHeader)) {
      problems.push(`public/_headers is missing ${requiredHeader}.`);
    }
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
    const route = `/${path.relative(distDir, filePath).replace(/index\.html$/, "").replace(/\.html$/, "")}`;

    if (/href=["'][^"']*\$\{[^"']*["']/i.test(html) || /href=["'][^"']*%7B/i.test(html)) {
      problems.push(`${route} contains a raw template placeholder inside an href.`);
    }

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
const deepOwnershipGuidesPath = path.join(cwd, "src", "data", "deep-ownership-guides.ts");
const guidesDir = path.join(cwd, "src", "pages", "guides");

if (fs.existsSync(ownershipGuidesPath) && fs.existsSync(guidesDir)) {
  const ownershipSource = fs.readFileSync(ownershipGuidesPath, "utf8");
  const quickSource = fs.existsSync(quickOwnershipGuidesPath) ? fs.readFileSync(quickOwnershipGuidesPath, "utf8") : "";
  const deepSource = fs.existsSync(deepOwnershipGuidesPath) ? fs.readFileSync(deepOwnershipGuidesPath, "utf8") : "";
  const dynamicGuideSlugs = new Set(
    [...quickSource.matchAll(/slug:\s*"([^"]+)"/g), ...deepSource.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1])
  );
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
