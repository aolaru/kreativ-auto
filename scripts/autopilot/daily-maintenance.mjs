import { access, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { dump as dumpYaml, load as parseYaml } from "js-yaml";

const cwd = process.cwd();
const carsDir = path.join(cwd, "src/content/cars");
const problemsDir = path.join(cwd, "src/content/problems");
const bestDir = path.join(cwd, "src/content/best");
const updatesPath = path.join(cwd, "src/pages/updates.astro");
const publicDir = path.join(cwd, "public");
const args = new Set(process.argv.slice(2));
const dryRun = args.has("--dry-run");
const today = new Date().toISOString().slice(0, 10);
const maxFixes = 4;
const currentMonthLabel = new Intl.DateTimeFormat("en-US", {
  month: "long",
  year: "numeric",
  timeZone: "Europe/Bucharest"
}).format(new Date());

function normalize(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function tokenize(value) {
  const stop = new Set([
    "the", "and", "for", "with", "that", "this", "from", "into", "your", "when", "what", "best",
    "car", "cars", "guide", "common", "problems", "problem", "parts", "page", "pages", "after",
    "over", "under", "into", "idle", "speed", "noise", "front", "rear", "year"
  ]);

  return normalize(value)
    .split(/\s+/)
    .filter((token) => token && token.length > 2 && !stop.has(token));
}

function scoreTextOverlap(a, b) {
  const aTokens = new Set(tokenize(a));
  const bTokens = new Set(tokenize(b));
  let score = 0;
  for (const token of aTokens) {
    if (bTokens.has(token)) {
      score += 1;
    }
  }
  return score;
}

async function fileExists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

function extractFrontmatter(source) {
  const match = source.match(/^---\n([\s\S]*?)\n---/m);
  if (!match) {
    return null;
  }

  return match[1];
}

function extractBody(source) {
  const match = source.match(/^---\n[\s\S]*?\n---\n?([\s\S]*)$/m);
  return match ? match[1] : source;
}

function parseFrontmatterData(source, filePath) {
  const frontmatter = extractFrontmatter(source);
  if (!frontmatter) {
    return {};
  }

  try {
    return parseYaml(frontmatter) ?? {};
  } catch (error) {
    const detail = error instanceof Error ? error.message : String(error);
    throw new Error(`Invalid existing frontmatter in ${path.relative(cwd, filePath)}: ${detail}`);
  }
}

function serializeFrontmatterData(data) {
  return dumpYaml(data, {
    lineWidth: -1,
    noRefs: true,
    sortKeys: false,
    quotingType: "\"",
    forceQuotes: true
  }).trimEnd();
}

function buildMarkdownContent(data, body) {
  return `---\n${serializeFrontmatterData(data)}\n---\n${body}`;
}

function assertValidMarkdownData(data, filePath) {
  if (path.extname(filePath) !== ".md") {
    return;
  }

  try {
    parseYaml(serializeFrontmatterData(data));
  } catch (error) {
    const detail = error instanceof Error ? error.message : String(error);
    throw new Error(`Invalid frontmatter generated for ${path.relative(cwd, filePath)}: ${detail}`);
  }
}

function updateUpdatedAt(data) {
  data.updatedAt = today;
  return data;
}

function getStringList(data, key) {
  return Array.isArray(data[key]) ? data[key].filter((item) => typeof item === "string") : [];
}

function getProducts(data) {
  return Array.isArray(data.products)
    ? data.products
        .filter((item) => item && typeof item === "object" && typeof item.name === "string")
        .map((item) => ({
          name: item.name,
          summary: typeof item.summary === "string" ? item.summary : "",
          price: Number(String(item.price ?? "").replace(/[^0-9.]/g, "")),
          rating: Number(item.rating ?? 0)
        }))
    : [];
}

function deepReplaceStringValues(value, from, to) {
  if (typeof value === "string") {
    return value === from ? to : value;
  }

  if (Array.isArray(value)) {
    return value.map((item) => deepReplaceStringValues(item, from, to));
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, nested]) => [key, deepReplaceStringValues(nested, from, to)])
    );
  }

  return value;
}

function buildBuyingTiers(products) {
  if (products.length < 2) {
    return [];
  }

  const byRating = [...products].sort((a, b) => (b.rating - a.rating) || (a.price - b.price));
  const byPrice = [...products].sort((a, b) => (a.price - b.price) || (b.rating - a.rating));
  const byPremium = [...products].sort((a, b) => (b.price - a.price) || (b.rating - a.rating));

  const tiers = [];
  const used = new Set();

  const overall = byRating[0];
  if (overall) {
    tiers.push({
      label: "Best overall",
      product: overall.name,
      reason: overall.summary || "The strongest all-around choice in the current shortlist."
    });
    used.add(overall.name);
  }

  const value = byPrice.find((item) => !used.has(item.name)) ?? byPrice[0];
  if (value) {
    tiers.push({
      label: "Best value",
      product: value.name,
      reason: value.summary || "The lower-cost option if you want a sensible repair without overspending."
    });
    used.add(value.name);
  }

  const alt = byPremium.find((item) => !used.has(item.name));
  if (alt) {
    tiers.push({
      label: "Best alternative",
      product: alt.name,
      reason: alt.summary || "The alternative pick if the main recommendation is not the one you want to buy."
    });
  }

  return tiers;
}

async function loadEntries(dir, type) {
  const files = (await readdir(dir)).filter((file) => file.endsWith(".md")).sort();
  const entries = [];

  for (const file of files) {
    const filePath = path.join(dir, file);
    const source = await readFile(filePath, "utf8");
    const data = parseFrontmatterData(source, filePath);
    const body = extractBody(source);
    const id = file.replace(/\.md$/, "");
    const title = typeof data.title === "string" ? data.title : id;
    entries.push({
      id,
      type,
      filePath,
      source,
      body,
      data,
      title,
      brand: typeof data.brand === "string" ? data.brand : "",
      model: typeof data.model === "string" ? data.model : "",
      year: data.year ? String(data.year) : "",
      carModel: typeof data.car_model === "string" ? data.car_model : "",
      description: typeof data.description === "string" ? data.description : "",
      excerpt: typeof data.excerpt === "string" ? data.excerpt : "",
      symptoms: getStringList(data, "symptoms"),
      causes: getStringList(data, "causes"),
      commonProblems: getStringList(data, "commonProblems"),
      relatedCars: getStringList(data, "relatedCars"),
      relatedBest: getStringList(data, "relatedBest"),
      relatedProblems: getStringList(data, "relatedProblems"),
      recommendedParts: Array.isArray(data.recommendedParts) ? data.recommendedParts : [],
      maintenanceTips: getStringList(data, "maintenanceTips"),
      products: getProducts(data)
    });
  }

  return entries;
}

async function tryImageWebpFix(entry) {
  const matches = [...entry.source.matchAll(/\/images\/photos\/[^\s"']+\.(jpg|jpeg)\b/g)];

  for (const match of matches) {
    const current = match[0];
    const candidate = current.replace(/\.(jpg|jpeg)\b/, ".webp");
    const publicCandidate = path.join(publicDir, candidate.replace(/^\//, ""));

    if (!(await fileExists(publicCandidate))) {
      continue;
    }

    const nextData = deepReplaceStringValues(structuredClone(entry.data), current, candidate);
    updateUpdatedAt(nextData);
    return {
      changed: true,
      reason: `Use lighter .webp image variant for ${current}`,
      data: nextData
    };
  }

  return { changed: false };
}

function tryExcerptFix(entry) {
  if (typeof entry.data.excerpt === "string" && entry.data.excerpt.trim()) {
    return { changed: false };
  }

  if (typeof entry.data.metaDescription !== "string" || !entry.data.metaDescription.trim()) {
    return { changed: false };
  }

  const nextData = structuredClone(entry.data);
  nextData.excerpt = entry.data.metaDescription;
  updateUpdatedAt(nextData);

  return {
    changed: true,
    reason: "Add missing excerpt from metaDescription",
    data: nextData
  };
}

function tryHeroImageFix(entry) {
  if (typeof entry.data.heroImage === "string" && entry.data.heroImage.trim()) {
    return { changed: false };
  }

  if (typeof entry.data.image !== "string" || !entry.data.image.trim()) {
    return { changed: false };
  }

  const nextData = structuredClone(entry.data);
  nextData.heroImage = entry.data.image;
  updateUpdatedAt(nextData);

  return {
    changed: true,
    reason: "Add missing heroImage from image",
    data: nextData
  };
}

function tryUpdatedAtFix(entry) {
  if (entry.data.updatedAt) {
    return { changed: false };
  }

  const nextData = structuredClone(entry.data);
  updateUpdatedAt(nextData);
  return {
    changed: true,
    reason: "Add missing updatedAt",
    data: nextData
  };
}

function deriveBestPageFields(entry) {
  const products = entry.products;
  if (products.length === 0) {
    return null;
  }

  const carLabel = entry.carModel || entry.title.replace(/^Best\s+/i, "");
  const category = typeof entry.data.category === "string" ? entry.data.category : "parts";

  return {
    buyingAdvice: [
      `Confirm ${category.toLowerCase()} fitment for ${carLabel} before ordering because trim and supplier changes can matter.`,
      `Use the product shortlist to match the job to the car instead of defaulting to the cheapest option.`,
      `If the original problem is still unclear, confirm the diagnosis before buying parts.`
    ],
    bestFor: [
      `${carLabel} owners who want a cleaner, more predictable daily-driver repair.`,
      `Drivers trying to buy a sensible ${category.toLowerCase()} option without turning the job into guesswork.`
    ],
    avoidIf: [
      `You have not confirmed the exact fitment for ${carLabel} yet.`,
      `You are trying to solve the wrong underlying problem and are using parts shopping as diagnosis.`
    ],
    buyingTiers: buildBuyingTiers(products)
  };
}

function tryBestFieldCompletion(entry) {
  if (entry.type !== "best") {
    return { changed: false };
  }

  const derived = deriveBestPageFields(entry);
  if (!derived) {
    return { changed: false };
  }

  const nextData = structuredClone(entry.data);
  let changed = false;

  if (!Array.isArray(nextData.buyingAdvice) || nextData.buyingAdvice.length === 0) {
    nextData.buyingAdvice = derived.buyingAdvice;
    changed = true;
  }

  if (!Array.isArray(nextData.bestFor) || nextData.bestFor.length === 0) {
    nextData.bestFor = derived.bestFor;
    changed = true;
  }

  if (!Array.isArray(nextData.avoidIf) || nextData.avoidIf.length === 0) {
    nextData.avoidIf = derived.avoidIf;
    changed = true;
  }

  if ((!Array.isArray(nextData.buyingTiers) || nextData.buyingTiers.length === 0) && derived.buyingTiers.length >= 2) {
    nextData.buyingTiers = derived.buyingTiers;
    changed = true;
  }

  if (!changed) {
    return { changed: false };
  }

  updateUpdatedAt(nextData);
  return {
    changed: true,
    reason: "Complete missing best-parts page recommendation fields",
    data: nextData
  };
}

function deriveProblemRelatedBest(entry, cars, bestPages) {
  const relatedCars = entry.relatedCars;
  if (relatedCars.length === 0) {
    return [];
  }

  const carEntries = cars.filter((car) => relatedCars.includes(car.id));
  const queryText = `${entry.title} ${entry.symptoms.join(" ")} ${entry.causes.join(" ")}`;

  const scored = bestPages
    .map((best) => {
      let score = 0;

      if (best.relatedCars.some((slug) => relatedCars.includes(slug))) {
        score += 5;
      }

      for (const car of carEntries) {
        const carPhrase = `${car.brand} ${car.model} ${car.year}`.trim();
        if (best.carModel && normalize(best.carModel).includes(normalize(carPhrase))) {
          score += 4;
        } else if (best.carModel && normalize(best.carModel).includes(normalize(car.model))) {
          score += 2;
        }
      }

      score += scoreTextOverlap(queryText, `${best.title} ${best.excerpt}`);

      return { id: best.id, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((item) => item.id);

  return [...new Set(scored)];
}

function tryProblemFieldCompletion(entry, cars, bestPages) {
  if (entry.type !== "problem") {
    return { changed: false };
  }

  const nextData = structuredClone(entry.data);
  let changed = false;

  if (!Array.isArray(nextData.relatedBest) || nextData.relatedBest.length === 0) {
    const relatedBest = deriveProblemRelatedBest(entry, cars, bestPages);
    if (relatedBest.length > 0) {
      nextData.relatedBest = relatedBest;
      changed = true;
    }
  }

  if (!changed) {
    return { changed: false };
  }

  updateUpdatedAt(nextData);
  return {
    changed: true,
    reason: "Complete missing problem-page related links",
    data: nextData
  };
}

function deriveCarRelatedProblems(entry, problemPages) {
  const queryText = `${entry.title} ${entry.description} ${entry.commonProblems.join(" ")}`;
  const scored = problemPages
    .map((problem) => {
      const score = scoreTextOverlap(queryText, `${problem.title} ${problem.symptoms.join(" ")} ${problem.excerpt}`);
      return { id: problem.id, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map((item) => item.id);

  return [...new Set(scored)];
}

function deriveCarRelatedBest(entry, bestPages) {
  const carPhrase = `${entry.brand} ${entry.model} ${entry.year}`.trim();
  return bestPages
    .filter((best) => normalize(best.carModel).includes(normalize(carPhrase)))
    .slice(0, 5)
    .map((best) => best.id);
}

function tryCarInternalLinks(entry, problemPages, bestPages) {
  if (entry.type !== "car") {
    return { changed: false };
  }

  const nextData = structuredClone(entry.data);
  let changed = false;

  if (!Array.isArray(nextData.relatedProblems) || nextData.relatedProblems.length === 0) {
    const relatedProblems = deriveCarRelatedProblems(entry, problemPages);
    if (relatedProblems.length > 0) {
      nextData.relatedProblems = relatedProblems;
      changed = true;
    }
  }

  if (!Array.isArray(nextData.relatedBest) || nextData.relatedBest.length === 0) {
    const relatedBest = deriveCarRelatedBest(entry, bestPages);
    if (relatedBest.length > 0) {
      nextData.relatedBest = relatedBest;
      changed = true;
    }
  }

  if (!changed) {
    return { changed: false };
  }

  updateUpdatedAt(nextData);
  return {
    changed: true,
    reason: "Add missing internal links to a car page",
    data: nextData
  };
}

async function tryUpdatesRefresh() {
  const source = await readFile(updatesPath, "utf8");
  const monthHeader = `<p class="eyebrow">${currentMonthLabel}</p>`;
  if (!source.includes(monthHeader)) {
    return { changed: false };
  }

  if (/automation/i.test(source) && /daily maintenance|weekly content autopilot/i.test(source)) {
    return { changed: false };
  }

  const sectionRegex = new RegExp(
    `${monthHeader.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[\\s\\S]*?<ul class="mt-4 list-disc space-y-3 pl-5 text-sm leading-6 text-steel marker:text-accent">([\\s\\S]*?)</ul>`
  );
  const match = source.match(sectionRegex);
  if (!match) {
    return { changed: false };
  }

  const addition =
    "\n          <li>Added weekly and daily automation lanes so the site can keep drafting new content clusters and filling bounded content-quality gaps without hand-editing every pass.</li>";
  const next = source.replace(sectionRegex, (full, listContent) => full.replace(listContent, `${listContent.trimEnd()}${addition}\n        `));

  return {
    changed: true,
    filePath: updatesPath,
    reason: "Refresh the Updates page with the new automation layer",
    content: next
  };
}

const [cars, problems, bestPages] = await Promise.all([
  loadEntries(carsDir, "car"),
  loadEntries(problemsDir, "problem"),
  loadEntries(bestDir, "best")
]);

const entries = [...cars, ...problems, ...bestPages];
const appliedFixes = [];

for (const entry of entries) {
  const fixes = [
    await tryImageWebpFix(entry),
    tryExcerptFix(entry),
    tryHeroImageFix(entry),
    tryUpdatedAtFix(entry),
    tryCarInternalLinks(entry, problems, bestPages),
    tryBestFieldCompletion(entry),
    tryProblemFieldCompletion(entry, cars, bestPages)
  ];

  const fix = fixes.find((candidate) => candidate.changed);
  if (!fix) {
    continue;
  }

  appliedFixes.push({
    filePath: entry.filePath,
    reason: fix.reason,
    content: fix.content ?? buildMarkdownContent(fix.data, entry.body)
  });

  if (appliedFixes.length >= maxFixes) {
    break;
  }
}

if (appliedFixes.length < maxFixes) {
  const updatesFix = await tryUpdatesRefresh();
  if (updatesFix.changed) {
    appliedFixes.push(updatesFix);
  }
}

if (appliedFixes.length === 0) {
  console.log("No daily maintenance fix available.");
  process.exit(0);
}

if (dryRun) {
  for (const fix of appliedFixes) {
    console.log(`Would update ${path.relative(cwd, fix.filePath)}`);
    console.log(`Reason: ${fix.reason}`);
  }
  process.exit(0);
}

for (const fix of appliedFixes) {
  if (path.extname(fix.filePath) === ".md") {
    assertValidMarkdownData(parseFrontmatterData(fix.content, fix.filePath), fix.filePath);
  }
}

for (const fix of appliedFixes) {
  await writeFile(fix.filePath, fix.content, "utf8");
  console.log(`Updated ${path.relative(cwd, fix.filePath)}`);
  console.log(`Reason: ${fix.reason}`);
}
