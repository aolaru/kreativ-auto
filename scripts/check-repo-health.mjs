import fs from "node:fs";
import path from "node:path";

const cwd = process.cwd();
const ignoredDirs = new Set([".git", "node_modules", "dist"]);
const sourceExts = new Set([".astro", ".md", ".ts", ".js", ".mjs"]);
const imageRefPattern = /(["'`])(\/images\/[A-Za-z0-9_./-]+\.(?:png|jpe?g|webp|svg))\1/g;
const problems = [];

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

walk(cwd, (filePath) => {
  if (!sourceExts.has(path.extname(filePath))) return;

  const source = fs.readFileSync(filePath, "utf8");
  for (const match of source.matchAll(imageRefPattern)) {
    const imagePath = path.join(cwd, "public", match[2].slice(1));
    if (!fs.existsSync(imagePath)) {
      problems.push(`${path.relative(cwd, filePath)} references missing image ${match[2]}`);
    }
  }
});

if (fs.existsSync(path.join(cwd, ".git", "refs"))) {
  walk(path.join(cwd, ".git", "refs"), (filePath) => {
    if (path.basename(filePath).includes("conflicted copy")) {
      problems.push(`Conflicted Git ref found: ${path.relative(cwd, filePath)}`);
    }
  });
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
