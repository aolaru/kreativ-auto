import { existsSync } from "node:fs";
import { mkdir, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { carBacklog } from "./car-backlog.mjs";

const cwd = process.cwd();
const carsDir = path.join(cwd, "src/content/cars");
const problemsDir = path.join(cwd, "src/content/problems");
const bestDir = path.join(cwd, "src/content/best");
const publicDir = path.join(cwd, "public");
const args = new Set(process.argv.slice(2));
const dryRun = args.has("--dry-run");
const selectedSlug = [...args].find((arg) => arg.startsWith("--slug="))?.slice("--slug=".length);
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

function yamlSourceLinks(items, key = "sourceLinks") {
  if (!items || items.length === 0) {
    return `${key}: []`;
  }

  return [
    `${key}:`,
    items.map((item) => `  - label: ${quote(item.label)}\n    href: ${quote(item.href)}`).join("\n")
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
    "selectionCriteria:",
    yamlList(entry.selectionCriteria, 2),
    "alternatives:",
    yamlList(entry.alternatives, 2),
    yamlSourceLinks(entry.sourceLinks),
    yamlSourceLinks(entry.priceSourceLinks, "priceSourceLinks"),
    entry.pricingCheckedAt ? `pricingCheckedAt: ${entry.pricingCheckedAt}` : null,
    entry.priceVerified === true ? "priceVerified: true" : "priceVerified: false",
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

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function hasStringList(value, minimum = 1) {
  return Array.isArray(value) && value.filter(isNonEmptyString).length >= minimum;
}

function hasSourceLinks(value, minimum = 2) {
  return (
    Array.isArray(value) &&
    value.filter((item) => isNonEmptyString(item?.label) && isNonEmptyString(item?.href)).length >= minimum
  );
}

function validateEditorialReadiness(entry) {
  const blockers = [];
  const { car, reviewReadiness } = entry;
  const image = car.image;

  if (!isNonEmptyString(image) || !image.startsWith("/images/photos/cars/") || !image.endsWith(".webp")) {
    blockers.push("a real optimized vehicle photo under /images/photos/cars/ (WebP)");
  } else {
    const imagePath = path.join(publicDir, image.slice(1));
    const thumbnail = image.replace("/images/photos/", "/images/thumbs/");
    const thumbnailPath = path.join(publicDir, thumbnail.slice(1));

    if (!existsSync(imagePath)) blockers.push(`vehicle photo asset ${image}`);
    if (!existsSync(thumbnailPath)) blockers.push(`derived vehicle thumbnail ${thumbnail}`);
  }

  if (!reviewReadiness || typeof reviewReadiness !== "object") {
    blockers.push("editorial review-readiness record");
    return blockers;
  }

  const evidence = reviewReadiness.evidence;
  if (!evidence || typeof evidence !== "object") {
    blockers.push("evidence-and-scope record");
  } else {
    if (!isNonEmptyString(evidence.summary)) blockers.push("evidence summary");
    if (!hasStringList(evidence.basedOn, 2)) blockers.push("at least two research-basis notes");
    if (!hasStringList(evidence.appliesTo)) blockers.push("vehicle scope");
    if (!hasStringList(evidence.doesNotCover)) blockers.push("scope limits");
    if (!hasSourceLinks(evidence.sourceLinks)) blockers.push("at least two claim-level source links");
  }

  const decisionPath = reviewReadiness.decisionPath;
  if (
    !Array.isArray(decisionPath) ||
    decisionPath.length < 2 ||
    decisionPath.some(
      (step) => !isNonEmptyString(step?.trigger) || !isNonEmptyString(step?.check) || !isNonEmptyString(step?.nextStep)
    )
  ) {
    blockers.push("two evidence-led decision steps");
  }

  const parts = reviewReadiness.parts;
  if (!parts || typeof parts !== "object") {
    blockers.push("parts research record");
  } else {
    if (!hasStringList(parts.selectionCriteria, 3)) blockers.push("three parts selection criteria");
    if (!hasStringList(parts.alternatives, 2)) blockers.push("two parts alternatives");
    if (!hasSourceLinks(parts.sourceLinks)) blockers.push("at least two product or manufacturer source links");
    if (!/^\d{4}-\d{2}-\d{2}$/.test(parts.pricingCheckedAt ?? "")) blockers.push("pricing check date");
    if (parts.priceVerified === true && !hasSourceLinks(parts.priceSourceLinks)) blockers.push("a product-level price source");
  }

  return blockers;
}

function applyEditorialReadiness(entry) {
  const { evidence, parts } = entry.reviewReadiness;
  return {
    ...entry,
    best: {
      ...entry.best,
      selectionCriteria: parts.selectionCriteria,
      alternatives: parts.alternatives,
      sourceLinks: parts.sourceLinks,
      priceSourceLinks: parts.priceSourceLinks ?? [],
      pricingCheckedAt: parts.pricingCheckedAt,
      priceVerified: parts.priceVerified === true
    },
    reviewReadiness: {
      ...entry.reviewReadiness,
      evidence
    }
  };
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

const backlogCandidates = selectedSlug
  ? carBacklog.filter(({ car }) => car.slug === selectedSlug)
  : carBacklog;

if (selectedSlug && backlogCandidates.length === 0) {
  console.error(`No backlog entry found for slug: ${selectedSlug}`);
  process.exit(1);
}

const nextEntry = backlogCandidates.find(
  ({ car, problem, best }) =>
    !carSlugs.has(car.slug) && !problemSlugs.has(problem.slug) && !bestSlugs.has(best.slug)
);

if (!nextEntry) {
  console.log(selectedSlug ? `No missing backlog entry left to add for ${selectedSlug}.` : "No backlog entries left to add.");
  process.exit(0);
}

const blockers = validateEditorialReadiness(nextEntry);
if (blockers.length > 0) {
  console.log(`Next backlog entry is not ready to generate: ${nextEntry.car.slug}`);
  console.log("Required before a draft can be created:");
  for (const blocker of blockers) {
    console.log(`- ${blocker}`);
  }
  process.exit(0);
}

const readyEntry = applyEditorialReadiness(nextEntry);

const outputs = [
  {
    kind: "car",
    slug: readyEntry.car.slug,
    path: path.join(carsDir, `${readyEntry.car.slug}.md`),
    content: renderCar(readyEntry.car, readyEntry.problem.slug, readyEntry.best.slug)
  },
  {
    kind: "problem",
    slug: readyEntry.problem.slug,
    path: path.join(problemsDir, `${readyEntry.problem.slug}.md`),
    content: renderProblem(readyEntry.problem, readyEntry.car.slug, readyEntry.best.slug)
  },
  {
    kind: "best",
    slug: readyEntry.best.slug,
    path: path.join(bestDir, `${readyEntry.best.slug}.md`),
    content: renderBest(readyEntry.best, readyEntry.car.slug, readyEntry.problem.slug)
  }
];

if (dryRun) {
  console.log(`Next publish-ready backlog entry: ${readyEntry.car.slug}`);
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
