import { access, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const cwd = process.cwd();
const contentDirs = [
  path.join(cwd, "src/content/cars"),
  path.join(cwd, "src/content/problems"),
  path.join(cwd, "src/content/best")
];
const publicDir = path.join(cwd, "public");
const args = new Set(process.argv.slice(2));
const dryRun = args.has("--dry-run");
const today = new Date().toISOString().slice(0, 10);

async function fileExists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function getMarkdownFiles() {
  const buckets = await Promise.all(
    contentDirs.map(async (dir) => {
      const files = await readdir(dir);
      return files.filter((file) => file.endsWith(".md")).map((file) => path.join(dir, file));
    })
  );

  return buckets.flat().sort();
}

function updateUpdatedAt(frontmatter) {
  if (/^updatedAt:\s*.+$/m.test(frontmatter)) {
    return frontmatter.replace(/^updatedAt:\s*.+$/m, `updatedAt: ${today}`);
  }

  if (/^heroImage:\s*.+$/m.test(frontmatter)) {
    return frontmatter.replace(/^heroImage:\s*.+$/m, (match) => `${match}\nupdatedAt: ${today}`);
  }

  if (/^excerpt:\s*.+$/m.test(frontmatter)) {
    return frontmatter.replace(/^excerpt:\s*.+$/m, (match) => `${match}\nupdatedAt: ${today}`);
  }

  return `${frontmatter}\nupdatedAt: ${today}`;
}

async function tryImageWebpFix(filePath, source) {
  const matches = [...source.matchAll(/\/images\/photos\/[^\s"']+\.(jpg|jpeg)\b/g)];

  for (const match of matches) {
    const current = match[0];
    const candidate = current.replace(/\.(jpg|jpeg)\b/, ".webp");
    const publicCandidate = path.join(publicDir, candidate.replace(/^\//, ""));

    if (!(await fileExists(publicCandidate))) {
      continue;
    }

    const replaced = source.split(current).join(candidate);
    const next = replaced.replace(/^---\n([\s\S]*?)\n---/m, (_, frontmatter) => `---\n${updateUpdatedAt(frontmatter)}\n---`);

    return {
      changed: true,
      reason: `Use lighter .webp image variant for ${current}`,
      content: next
    };
  }

  return { changed: false };
}

function tryExcerptFix(source) {
  const frontmatterMatch = source.match(/^---\n([\s\S]*?)\n---/m);
  if (!frontmatterMatch) {
    return { changed: false };
  }

  const frontmatter = frontmatterMatch[1];
  if (/^excerpt:\s*.+$/m.test(frontmatter)) {
    return { changed: false };
  }

  const metaDescriptionMatch = frontmatter.match(/^metaDescription:\s*(.+)$/m);
  if (!metaDescriptionMatch) {
    return { changed: false };
  }

  const insertAfter = frontmatter.match(/^metaDescription:\s*.+$/m)?.[0];
  if (!insertAfter) {
    return { changed: false };
  }

  let updatedFrontmatter = frontmatter.replace(insertAfter, `${insertAfter}\nexcerpt: ${metaDescriptionMatch[1]}`);
  updatedFrontmatter = updateUpdatedAt(updatedFrontmatter);
  const next = source.replace(/^---\n[\s\S]*?\n---/m, `---\n${updatedFrontmatter}\n---`);

  return {
    changed: true,
    reason: "Add missing excerpt from metaDescription",
    content: next
  };
}

function tryHeroImageFix(source) {
  const frontmatterMatch = source.match(/^---\n([\s\S]*?)\n---/m);
  if (!frontmatterMatch) {
    return { changed: false };
  }

  const frontmatter = frontmatterMatch[1];
  if (/^heroImage:\s*.+$/m.test(frontmatter)) {
    return { changed: false };
  }

  const imageMatch = frontmatter.match(/^image:\s*(.+)$/m);
  if (!imageMatch) {
    return { changed: false };
  }

  let updatedFrontmatter = frontmatter.replace(/^image:\s*.+$/m, (match) => `${match}\nheroImage: ${imageMatch[1]}`);
  updatedFrontmatter = updateUpdatedAt(updatedFrontmatter);
  const next = source.replace(/^---\n[\s\S]*?\n---/m, `---\n${updatedFrontmatter}\n---`);

  return {
    changed: true,
    reason: "Add missing heroImage from image",
    content: next
  };
}

function tryUpdatedAtFix(source) {
  const frontmatterMatch = source.match(/^---\n([\s\S]*?)\n---/m);
  if (!frontmatterMatch) {
    return { changed: false };
  }

  const frontmatter = frontmatterMatch[1];
  if (/^updatedAt:\s*.+$/m.test(frontmatter)) {
    return { changed: false };
  }

  const updatedFrontmatter = updateUpdatedAt(frontmatter);
  const next = source.replace(/^---\n[\s\S]*?\n---/m, `---\n${updatedFrontmatter}\n---`);

  return {
    changed: true,
    reason: "Add missing updatedAt",
    content: next
  };
}

const files = await getMarkdownFiles();
let appliedFix = null;

for (const filePath of files) {
  const source = await readFile(filePath, "utf8");
  const fixes = [
    await tryImageWebpFix(filePath, source),
    tryExcerptFix(source),
    tryHeroImageFix(source),
    tryUpdatedAtFix(source)
  ];

  const fix = fixes.find((candidate) => candidate.changed);
  if (!fix) {
    continue;
  }

  appliedFix = {
    filePath,
    reason: fix.reason,
    content: fix.content
  };
  break;
}

if (!appliedFix) {
  console.log("No daily maintenance fix available.");
  process.exit(0);
}

if (dryRun) {
  console.log(`Would update ${path.relative(cwd, appliedFix.filePath)}`);
  console.log(`Reason: ${appliedFix.reason}`);
  process.exit(0);
}

await writeFile(appliedFix.filePath, appliedFix.content, "utf8");
console.log(`Updated ${path.relative(cwd, appliedFix.filePath)}`);
console.log(`Reason: ${appliedFix.reason}`);
