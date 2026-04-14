import { mkdir, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { carBacklog } from "./car-backlog.mjs";

const cwd = process.cwd();
const carsDir = path.join(cwd, "src/content/cars");
const problemsDir = path.join(cwd, "src/content/problems");
const bestDir = path.join(cwd, "src/content/best");
const args = new Set(process.argv.slice(2));
const dryRun = args.has("--dry-run");
const today = new Date().toISOString().slice(0, 10);

function quote(value) {
  return JSON.stringify(value);
}

function yamlList(items, indent = 0) {
  const pad = " ".repeat(indent);
  if (!items || items.length === 0) {
    return `${pad}[]`;
  }

  return items.map((item) => `${pad}- ${quote(item)}`).join("\n");
}

function yamlFaqs(items) {
  if (!items || items.length === 0) {
    return "[]";
  }

  return items
    .map((item) => `  - question: ${quote(item.question)}\n    answer: ${quote(item.answer)}`)
    .join("\n");
}

function yamlProducts(items, key = "products") {
  if (!items || items.length === 0) {
    return `${key}: []`;
  }

  return [
    `${key}:`,
    ...items.map((item) =>
      [
        `  - name: ${quote(item.name)}`,
        `    price: ${quote(item.price)}`,
        `    rating: ${item.rating}`,
        `    affiliate_url: ${quote(item.affiliate_url)}`,
        `    summary: ${quote(item.summary)}`,
        `    image: ${quote(item.image)}`
      ].join("\n")
    )
  ].join("\n");
}

function yamlBuyingTiers(items) {
  if (!items || items.length === 0) {
    return "buyingTiers: []";
  }

  return [
    "buyingTiers:",
    ...items.map((item) =>
      [
        `  - label: ${quote(item.label)}`,
        `    product: ${quote(item.product)}`,
        `    reason: ${quote(item.reason)}`
      ].join("\n")
    )
  ].join("\n");
}

function yamlFitment(fitment) {
  if (!fitment) {
    return [
      "fitment:",
      "  appliesTo: []",
      "  doesNotApplyTo: []",
      "  phaseDifferences: []",
      "  powertrainDifferences: []"
    ].join("\n");
  }

  return [
    "fitment:",
    "  appliesTo:",
    yamlList(fitment.appliesTo ?? [], 4),
    "  doesNotApplyTo:",
    yamlList(fitment.doesNotApplyTo ?? [], 4),
    "  phaseDifferences:",
    yamlList(fitment.phaseDifferences ?? [], 4),
    "  powertrainDifferences:",
    yamlList(fitment.powertrainDifferences ?? [], 4)
  ].join("\n");
}

function renderBody(paragraphs) {
  return `${paragraphs.map((paragraph) => `${paragraph}\n`).join("\n").trimEnd()}\n`;
}

function renderCar(entry, problemSlug, bestSlug) {
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
    entry.image ? `image: ${quote(entry.image)}` : null,
    `metaTitle: ${quote(entry.metaTitle)}`,
    `metaDescription: ${quote(entry.metaDescription)}`,
    `excerpt: ${quote(entry.excerpt)}`,
    entry.image ? `heroImage: ${quote(entry.image)}` : null,
    `updatedAt: ${today}`,
    "relatedProblems:",
    yamlList([problemSlug], 2),
    "relatedBest:",
    yamlList([bestSlug], 2),
    "commonProblems:",
    yamlList(entry.commonProblems, 2),
    yamlProducts(entry.recommendedParts, "recommendedParts"),
    "maintenanceTips:",
    yamlList(entry.maintenanceTips, 2),
    "faqs:",
    yamlFaqs(entry.faqs),
    yamlFitment(entry.fitment),
    "---",
    "",
    renderBody(entry.body)
  ]
    .filter(Boolean)
    .join("\n");

  return `${frontmatter.trimEnd()}\n`;
}

function renderProblem(entry, carSlug, bestSlug) {
  const frontmatter = [
    "---",
    `title: ${quote(entry.title)}`,
    `metaTitle: ${quote(entry.metaTitle)}`,
    `metaDescription: ${quote(entry.metaDescription)}`,
    `excerpt: ${quote(entry.excerpt)}`,
    `heroImage: ${quote(entry.heroImage)}`,
    `updatedAt: ${today}`,
    "relatedCars:",
    yamlList([carSlug], 2),
    "relatedBest:",
    yamlList([bestSlug], 2),
    "symptoms:",
    yamlList(entry.symptoms, 2),
    "causes:",
    yamlList(entry.causes, 2),
    "solutions:",
    yamlList(entry.solutions, 2),
    `urgency: ${quote(entry.urgency)}`,
    `canYouDrive: ${quote(entry.canYouDrive)}`,
    `estimatedCost: ${quote(entry.estimatedCost)}`,
    `diyDifficulty: ${quote(entry.diyDifficulty)}`,
    "whenToSeeMechanic:",
    yamlList(entry.whenToSeeMechanic, 2),
    "commonMistakes:",
    yamlList(entry.commonMistakes, 2),
    `quickVerdict: ${quote(entry.quickVerdict)}`,
    `firstCheck: ${quote(entry.firstCheck)}`,
    "confusedWith:",
    yamlList(entry.confusedWith, 2),
    "stopDrivingIf:",
    yamlList(entry.stopDrivingIf, 2),
    yamlProducts(entry.recommendedParts, "recommendedParts"),
    "faqs:",
    yamlFaqs(entry.faqs),
    yamlFitment(entry.fitment),
    "---",
    "",
    renderBody(entry.body)
  ].join("\n");

  return `${frontmatter.trimEnd()}\n`;
}

function renderBest(entry, carSlug, problemSlug) {
  const frontmatter = [
    "---",
    `title: ${quote(entry.title)}`,
    `category: ${quote(entry.category)}`,
    `car_model: ${quote(entry.car_model)}`,
    `metaTitle: ${quote(entry.metaTitle)}`,
    `metaDescription: ${quote(entry.metaDescription)}`,
    `excerpt: ${quote(entry.excerpt)}`,
    `heroImage: ${quote(entry.heroImage)}`,
    `updatedAt: ${today}`,
    "relatedCars:",
    yamlList([carSlug], 2),
    "relatedProblems:",
    yamlList([problemSlug], 2),
    yamlProducts(entry.products, "products"),
    "buyingAdvice:",
    yamlList(entry.buyingAdvice, 2),
    `quickVerdict: ${quote(entry.quickVerdict)}`,
    "bestFor:",
    yamlList(entry.bestFor, 2),
    "avoidIf:",
    yamlList(entry.avoidIf, 2),
    yamlBuyingTiers(entry.buyingTiers),
    "faqs:",
    yamlFaqs(entry.faqs),
    yamlFitment(entry.fitment),
    "---",
    "",
    renderBody(entry.body)
  ].join("\n");

  return `${frontmatter.trimEnd()}\n`;
}

async function existingSlugs(dir) {
  return new Set(
    (await readdir(dir))
      .filter((file) => file.endsWith(".md"))
      .map((file) => file.replace(/\.md$/, ""))
  );
}

const [carSlugs, problemSlugs, bestSlugs] = await Promise.all([
  existingSlugs(carsDir),
  existingSlugs(problemsDir),
  existingSlugs(bestDir)
]);

const nextEntry = carBacklog.find(
  ({ car, problem, best }) =>
    !carSlugs.has(car.slug) && !problemSlugs.has(problem.slug) && !bestSlugs.has(best.slug)
);

if (!nextEntry) {
  console.log("No backlog entries left to add.");
  process.exit(0);
}

const outputs = [
  {
    kind: "car",
    slug: nextEntry.car.slug,
    path: path.join(carsDir, `${nextEntry.car.slug}.md`),
    content: renderCar(nextEntry.car, nextEntry.problem.slug, nextEntry.best.slug)
  },
  {
    kind: "problem",
    slug: nextEntry.problem.slug,
    path: path.join(problemsDir, `${nextEntry.problem.slug}.md`),
    content: renderProblem(nextEntry.problem, nextEntry.car.slug, nextEntry.best.slug)
  },
  {
    kind: "best",
    slug: nextEntry.best.slug,
    path: path.join(bestDir, `${nextEntry.best.slug}.md`),
    content: renderBest(nextEntry.best, nextEntry.car.slug, nextEntry.problem.slug)
  }
];

if (dryRun) {
  console.log(`Next backlog entry: ${nextEntry.car.slug}`);
  for (const file of outputs) {
    console.log(`\n### ${file.kind}: ${path.relative(cwd, file.path)}\n`);
    console.log(file.content);
  }
  process.exit(0);
}

await Promise.all([
  mkdir(carsDir, { recursive: true }),
  mkdir(problemsDir, { recursive: true }),
  mkdir(bestDir, { recursive: true })
]);

for (const file of outputs) {
  await writeFile(file.path, file.content, "utf8");
}

for (const file of outputs) {
  console.log(`Created ${path.relative(cwd, file.path)}`);
}
