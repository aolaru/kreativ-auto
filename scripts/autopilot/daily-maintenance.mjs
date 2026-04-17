import { access, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { load as parseYaml } from "js-yaml";

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

function quote(value) {
  return JSON.stringify(value);
}

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

function replaceFrontmatter(source, frontmatter) {
  return source.replace(/^---\n[\s\S]*?\n---/m, `---\n${frontmatter}\n---`);
}

function assertValidFrontmatter(content, filePath) {
  const frontmatter = extractFrontmatter(content);
  if (!frontmatter) {
    return;
  }

  try {
    parseYaml(frontmatter);
  } catch (error) {
    const detail = error instanceof Error ? error.message : String(error);
    throw new Error(`Invalid frontmatter generated for ${path.relative(cwd, filePath)}: ${detail}`);
  }
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

function parseList(frontmatter, key) {
  const bulletMatch = frontmatter.match(new RegExp(`^${key}:\\n([\\s\\S]*?)(?=^[A-Za-z][A-Za-z0-9_]*:|\\Z)`, "m"));
  if (bulletMatch) {
    return bulletMatch[1]
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.startsWith("- "))
      .map((line) => line.replace(/^- /, "").trim().replace(/^"(.*)"$/, "$1"));
  }

  const inlineMatch = frontmatter.match(new RegExp(`^${key}:\\s*\\[(.*)\\]$`, "m"));
  if (inlineMatch) {
    return inlineMatch[1]
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean)
      .map((item) => item.replace(/^"(.*)"$/, "$1"));
  }

  return [];
}

function renderList(key, items) {
  if (items.length === 0) {
    return `${key}: []`;
  }

  return `${key}:\n${items.map((item) => `  - ${quote(item)}`).join("\n")}`;
}

function replaceBlockPreservingBoundary(frontmatter, regex, block) {
  return frontmatter.replace(regex, (match) => {
    const suffix = match.endsWith("\n") ? "\n" : "";
    return `${block}${suffix}`;
  });
}

function replaceOrInsertList(frontmatter, key, items, afterKeyCandidates = []) {
  const block = renderList(key, items);
  const keyRegex = new RegExp(`^${key}:\\s*(?:\\[(?:[^\\]]*)\\]|\\n[\\s\\S]*?)(?=^[A-Za-z][A-Za-z0-9_]*:|\\Z)`, "m");
  if (keyRegex.test(frontmatter)) {
    return replaceBlockPreservingBoundary(frontmatter, keyRegex, block);
  }

  for (const afterKey of afterKeyCandidates) {
    const afterRegex = new RegExp(`^${afterKey}:\\s*(?:\\[(?:[^\\]]*)\\]|\\n[\\s\\S]*?)(?=^[A-Za-z][A-Za-z0-9_]*:|\\Z)`, "m");
    const match = frontmatter.match(afterRegex);
    if (match) {
      const suffix = match[0].endsWith("\n") ? "\n" : "";
      return frontmatter.replace(afterRegex, `${match[0].trimEnd()}\n${block}${suffix}`);
    }
  }

  return `${frontmatter}\n${block}`;
}

function replaceOrInsertScalar(frontmatter, key, value, afterKeyCandidates = []) {
  const line = `${key}: ${quote(value)}`;
  const keyRegex = new RegExp(`^${key}:\\s*.+$`, "m");
  if (keyRegex.test(frontmatter)) {
    return frontmatter.replace(keyRegex, line);
  }

  for (const afterKey of afterKeyCandidates) {
    const afterRegex = new RegExp(`^${afterKey}:\\s*.+$`, "m");
    const match = frontmatter.match(afterRegex);
    if (match) {
      return frontmatter.replace(afterRegex, `${match[0]}\n${line}`);
    }
  }

  return `${frontmatter}\n${line}`;
}

function parseProductBlocks(frontmatter) {
  const productsMatch = frontmatter.match(/^products:\n([\s\S]*?)(?=^[A-Za-z][A-Za-z0-9_]*:|\Z)/m);
  if (!productsMatch) {
    return [];
  }

  return productsMatch[1]
    .split(/\n(?=\s*-\sname:)/)
    .map((chunk) => chunk.trim())
    .filter(Boolean)
    .map((chunk) => {
      const name = chunk.match(/name:\s*("?)(.+?)\1$/m)?.[2];
      const summary = chunk.match(/summary:\s*("?)(.+?)\1$/m)?.[2] ?? "";
      const priceRaw = chunk.match(/price:\s*("?)(.+?)\1$/m)?.[2] ?? "";
      const ratingRaw = chunk.match(/rating:\s*([0-9.]+)/m)?.[1] ?? "";

      return name
        ? {
            name,
            summary,
            price: Number(priceRaw.replace(/[^0-9.]/g, "")),
            rating: Number(ratingRaw)
          }
        : null;
    })
    .filter(Boolean);
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

function renderBuyingTiers(items) {
  if (items.length === 0) {
    return "buyingTiers: []";
  }

  return [
    "buyingTiers:",
    ...items.map((tier) =>
      [
        `  - label: ${quote(tier.label)}`,
        `    product: ${quote(tier.product)}`,
        `    reason: ${quote(tier.reason)}`
      ].join("\n")
    )
  ].join("\n");
}

async function loadEntries(dir, type) {
  const files = (await readdir(dir)).filter((file) => file.endsWith(".md")).sort();
  const entries = [];

  for (const file of files) {
    const filePath = path.join(dir, file);
    const source = await readFile(filePath, "utf8");
    const frontmatter = extractFrontmatter(source) ?? "";
    const id = file.replace(/\.md$/, "");
    const title = frontmatter.match(/^title:\s*("?)(.+?)\1$/m)?.[2] ?? id;
    entries.push({
      id,
      type,
      filePath,
      source,
      frontmatter,
      title,
      brand: frontmatter.match(/^brand:\s*("?)(.+?)\1$/m)?.[2] ?? "",
      model: frontmatter.match(/^model:\s*("?)(.+?)\1$/m)?.[2] ?? "",
      year: frontmatter.match(/^year:\s*([0-9]{4})$/m)?.[1] ?? "",
      carModel: frontmatter.match(/^car_model:\s*("?)(.+?)\1$/m)?.[2] ?? "",
      description: frontmatter.match(/^description:\s*("?)(.+?)\1$/m)?.[2] ?? "",
      excerpt: frontmatter.match(/^excerpt:\s*("?)(.+?)\1$/m)?.[2] ?? "",
      symptoms: parseList(frontmatter, "symptoms"),
      causes: parseList(frontmatter, "causes"),
      commonProblems: parseList(frontmatter, "commonProblems"),
      relatedCars: parseList(frontmatter, "relatedCars"),
      relatedBest: parseList(frontmatter, "relatedBest"),
      relatedProblems: parseList(frontmatter, "relatedProblems"),
      recommendedParts: parseList(frontmatter, "recommendedParts"),
      maintenanceTips: parseList(frontmatter, "maintenanceTips"),
      products: parseProductBlocks(frontmatter)
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

    const replaced = entry.source.split(current).join(candidate);
    const next = replaceFrontmatter(replaced, updateUpdatedAt(entry.frontmatter));
    return {
      changed: true,
      reason: `Use lighter .webp image variant for ${current}`,
      content: next
    };
  }

  return { changed: false };
}

function tryExcerptFix(entry) {
  if (/^excerpt:\s*.+$/m.test(entry.frontmatter)) {
    return { changed: false };
  }

  const metaDescriptionMatch = entry.frontmatter.match(/^metaDescription:\s*(.+)$/m);
  if (!metaDescriptionMatch) {
    return { changed: false };
  }

  let nextFrontmatter = replaceOrInsertScalar(entry.frontmatter, "excerpt", metaDescriptionMatch[1].replace(/^"(.*)"$/, "$1"), ["metaDescription"]);
  nextFrontmatter = updateUpdatedAt(nextFrontmatter);

  return {
    changed: true,
    reason: "Add missing excerpt from metaDescription",
    content: replaceFrontmatter(entry.source, nextFrontmatter)
  };
}

function tryHeroImageFix(entry) {
  if (/^heroImage:\s*.+$/m.test(entry.frontmatter)) {
    return { changed: false };
  }

  const imageMatch = entry.frontmatter.match(/^image:\s*(.+)$/m);
  if (!imageMatch) {
    return { changed: false };
  }

  let nextFrontmatter = replaceOrInsertScalar(entry.frontmatter, "heroImage", imageMatch[1].replace(/^"(.*)"$/, "$1"), ["image"]);
  nextFrontmatter = updateUpdatedAt(nextFrontmatter);

  return {
    changed: true,
    reason: "Add missing heroImage from image",
    content: replaceFrontmatter(entry.source, nextFrontmatter)
  };
}

function tryUpdatedAtFix(entry) {
  if (/^updatedAt:\s*.+$/m.test(entry.frontmatter)) {
    return { changed: false };
  }

  return {
    changed: true,
    reason: "Add missing updatedAt",
    content: replaceFrontmatter(entry.source, updateUpdatedAt(entry.frontmatter))
  };
}

function deriveBestPageFields(entry) {
  const products = entry.products;
  if (products.length === 0) {
    return null;
  }

  const carLabel = entry.carModel || entry.title.replace(/^Best\s+/i, "");
  const category = entry.frontmatter.match(/^category:\s*("?)(.+?)\1$/m)?.[2] ?? "parts";

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

  let nextFrontmatter = entry.frontmatter;
  let changed = false;

  if (!/^buyingAdvice:\s*(?:\n|\[)/m.test(nextFrontmatter)) {
    nextFrontmatter = replaceOrInsertList(nextFrontmatter, "buyingAdvice", derived.buyingAdvice, ["products"]);
    changed = true;
  }

  if (!/^bestFor:\s*(?:\n|\[)/m.test(nextFrontmatter)) {
    nextFrontmatter = replaceOrInsertList(nextFrontmatter, "bestFor", derived.bestFor, ["quickVerdict", "buyingAdvice"]);
    changed = true;
  }

  if (!/^avoidIf:\s*(?:\n|\[)/m.test(nextFrontmatter)) {
    nextFrontmatter = replaceOrInsertList(nextFrontmatter, "avoidIf", derived.avoidIf, ["bestFor"]);
    changed = true;
  }

  if (!/^buyingTiers:\s*(?:\n|\[)/m.test(nextFrontmatter) && derived.buyingTiers.length >= 2) {
    const block = renderBuyingTiers(derived.buyingTiers);
    if (/^avoidIf:\s*(?:\n|\[)/m.test(nextFrontmatter)) {
      nextFrontmatter = nextFrontmatter.replace(/^avoidIf:\s*(?:\[(?:[^\]]*)\]|\n[\s\S]*?)(?=^[A-Za-z][A-Za-z0-9_]*:|\Z)/m, (match) => {
        const suffix = match.endsWith("\n") ? "\n" : "";
        return `${match.trimEnd()}\n${block}${suffix}`;
      });
    } else {
      nextFrontmatter = `${nextFrontmatter}\n${block}`;
    }
    changed = true;
  }

  if (!changed) {
    return { changed: false };
  }

  nextFrontmatter = updateUpdatedAt(nextFrontmatter);
  return {
    changed: true,
    reason: "Complete missing best-parts page recommendation fields",
    content: replaceFrontmatter(entry.source, nextFrontmatter)
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

  let nextFrontmatter = entry.frontmatter;
  let changed = false;

  if (!/^relatedBest:\s*(?:\n|\[)/m.test(nextFrontmatter)) {
    const relatedBest = deriveProblemRelatedBest(entry, cars, bestPages);
    nextFrontmatter = replaceOrInsertList(nextFrontmatter, "relatedBest", relatedBest, ["relatedCars"]);
    changed = true;
  }

  if (!changed) {
    return { changed: false };
  }

  nextFrontmatter = updateUpdatedAt(nextFrontmatter);
  return {
    changed: true,
    reason: "Complete missing problem-page related links",
    content: replaceFrontmatter(entry.source, nextFrontmatter)
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

  let nextFrontmatter = entry.frontmatter;
  let changed = false;

  if (!/^relatedProblems:\s*(?:\n|\[)/m.test(nextFrontmatter)) {
    const relatedProblems = deriveCarRelatedProblems(entry, problemPages);
    if (relatedProblems.length > 0) {
      nextFrontmatter = replaceOrInsertList(nextFrontmatter, "relatedProblems", relatedProblems, ["heroImage", "updatedAt"]);
      changed = true;
    }
  }

  if (!/^relatedBest:\s*(?:\n|\[)/m.test(nextFrontmatter)) {
    const relatedBest = deriveCarRelatedBest(entry, bestPages);
    if (relatedBest.length > 0) {
      nextFrontmatter = replaceOrInsertList(nextFrontmatter, "relatedBest", relatedBest, ["relatedProblems", "heroImage", "updatedAt"]);
      changed = true;
    }
  }

  if (!changed) {
    return { changed: false };
  }

  nextFrontmatter = updateUpdatedAt(nextFrontmatter);
  return {
    changed: true,
    reason: "Add missing internal links to a car page",
    content: replaceFrontmatter(entry.source, nextFrontmatter)
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
    content: fix.content
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
  assertValidFrontmatter(fix.content, fix.filePath);
  await writeFile(fix.filePath, fix.content, "utf8");
  console.log(`Updated ${path.relative(cwd, fix.filePath)}`);
  console.log(`Reason: ${fix.reason}`);
}
