import { mkdir, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { carBacklog } from "./car-backlog.mjs";

const cwd = process.cwd();
const carsDir = path.join(cwd, "src/content/cars");
const args = new Set(process.argv.slice(2));
const dryRun = args.has("--dry-run");
const today = new Date().toISOString().slice(0, 10);

function quote(value) {
  return JSON.stringify(value);
}

function renderStringList(items, indent = 0) {
  const pad = " ".repeat(indent);
  if (items.length === 0) {
    return `${pad}[]`;
  }

  return items.map((item) => `${pad}- ${quote(item)}`).join("\n");
}

function renderFaqs(items) {
  if (items.length === 0) {
    return "[]";
  }

  return items
    .map(
      (item) =>
        `  - question: ${quote(item.question)}\n    answer: ${quote(item.answer)}`
    )
    .join("\n");
}

function renderProducts(items) {
  if (items.length === 0) {
    return "[]";
  }

  return items
    .map(
      (item) =>
        [
          `  - name: ${quote(item.name)}`,
          `    price: ${quote(item.price)}`,
          `    rating: ${item.rating}`,
          `    affiliate_url: ${quote(item.affiliate_url)}`,
          `    summary: ${quote(item.summary)}`,
          `    image: ${quote(item.image)}`
        ].join("\n")
    )
    .join("\n");
}

function renderCar(entry) {
  const frontmatter = [
    "---",
    `title: ${quote(entry.title)}`,
    `brand: ${quote(entry.brand)}`,
    `model: ${quote(entry.model)}`,
    `year: ${entry.year}`,
    `generation: ${quote(entry.generation)}`,
    entry.generationCode ? `generationCode: ${quote(entry.generationCode)}` : null,
    `generationYears: ${quote(entry.generationYears)}`,
    entry.phase ? `phase: ${quote(entry.phase)}` : null,
    entry.phaseYears ? `phaseYears: ${quote(entry.phaseYears)}` : null,
    `description: ${quote(entry.description)}`,
    `metaTitle: ${quote(entry.metaTitle)}`,
    `metaDescription: ${quote(entry.metaDescription)}`,
    `excerpt: ${quote(entry.excerpt)}`,
    `updatedAt: ${today}`,
    "relatedProblems: []",
    "relatedBest: []",
    "commonProblems:",
    renderStringList(entry.commonProblems, 2),
    "recommendedParts:",
    renderProducts(entry.recommendedParts),
    "maintenanceTips:",
    renderStringList(entry.maintenanceTips, 2),
    "faqs:",
    renderFaqs(entry.faqs),
    "---",
    "",
    ...entry.body.map((paragraph) => `${paragraph}\n`)
  ]
    .filter(Boolean)
    .join("\n");

  return `${frontmatter.trimEnd()}\n`;
}

const existingCars = new Set(
  (await readdir(carsDir))
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""))
);

const nextCar = carBacklog.find((entry) => !existingCars.has(entry.slug));

if (!nextCar) {
  console.log("No backlog cars left to add.");
  process.exit(0);
}

const outputPath = path.join(carsDir, `${nextCar.slug}.md`);
const rendered = renderCar(nextCar);

if (dryRun) {
  console.log(`Next backlog car: ${nextCar.slug}`);
  console.log(rendered);
  process.exit(0);
}

await mkdir(carsDir, { recursive: true });
await writeFile(outputPath, rendered, "utf8");

console.log(`Created ${path.relative(cwd, outputPath)}`);
