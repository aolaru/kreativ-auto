import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const MODEL = process.env.AUTO_IMPROVE_MODEL || "gpt-5.4-mini";

const CANDIDATES = [
  "src/content/problems/epc-light-comes-on-under-acceleration.md",
  "src/content/problems/coolant-level-drops-with-no-visible-leak.md",
  "src/content/problems/battery-goes-dead-after-sitting.md",
  "src/content/problems/air-conditioner-blows-warm-at-idle.md",
  "src/content/problems/front-end-clunk-when-pulling-into-driveways.md",
  "src/content/problems/front-brakes-squeal-at-low-speed.md",
  "src/content/best/best-brake-pads-for-vw-tiguan-2020.md",
  "src/content/best/best-batteries-for-toyota-rav4-2021.md",
  "src/content/best/best-ac-condensers-for-honda-civic-2019.md",
  "src/content/best/best-engine-oil-for-vw-tiguan-2020.md",
  "src/content/best/best-front-brake-pads-for-honda-civic-2019.md",
  "src/content/best/best-front-sway-bar-links-for-toyota-rav4-2021.md"
];

function pickCandidate() {
  const slot = Math.floor(Date.now() / (1000 * 60 * 60 * 3));
  return CANDIDATES[slot % CANDIDATES.length];
}

function fileKind(filePath) {
  if (filePath.includes("/problems/")) {
    return "problem";
  }

  if (filePath.includes("/best/")) {
    return "best";
  }

  return "generic";
}

function buildInstructions(kind, today) {
  const common = [
    "You are editing one existing file in a production automotive content site.",
    "Return strict JSON only.",
    'The JSON must have keys: "change_summary", "content".',
    "The content value must be the complete updated file contents.",
    "Preserve the existing file format and frontmatter style.",
    "Do not introduce dev, SEO, or internal strategy language.",
    "Do not invent new product prices, ratings, vehicle years, trims, or affiliate URLs.",
    "Do not remove existing internal links unless they are clearly broken.",
    `Set updatedAt to ${today} if the file already has updatedAt.`
  ];

  if (kind === "problem") {
    common.push(
      "For problem guides, improve only these areas when useful: excerpt, metaDescription, quickVerdict, firstCheck, confusedWith, stopDrivingIf, and the opening body paragraphs.",
      "Keep the advice practical, specific, and scan-friendly.",
      "Do not add new frontmatter keys."
    );
  } else if (kind === "best") {
    common.push(
      "For best-parts guides, improve only these areas when useful: excerpt, metaDescription, quickVerdict, bestFor, avoidIf, buyingAdvice, and the opening body paragraphs.",
      "Keep the recommendation logic grounded in daily use, fitment caution, and buying clarity.",
      "Do not add new products or remove existing ones."
    );
  }

  common.push(
    "If the file is already strong, make only a light but real clarity upgrade instead of rewriting aggressively.",
    "Keep the final file compatible with Astro content parsing."
  );

  return common.join("\n");
}

function extractResponseText(json) {
  if (!Array.isArray(json.output)) {
    throw new Error("Unexpected Responses API payload: missing output array");
  }

  const chunks = [];

  for (const item of json.output) {
    if (item.type !== "message" || !Array.isArray(item.content)) {
      continue;
    }

    for (const content of item.content) {
      if (content.type === "output_text" && typeof content.text === "string") {
        chunks.push(content.text);
      }
    }
  }

  const text = chunks.join("").trim();

  if (!text) {
    throw new Error("Responses API returned no output text");
  }

  return text;
}

async function improveFile(relativePath) {
  if (!OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY is required for auto-improve runs");
  }

  const absolutePath = path.join(ROOT, relativePath);
  const current = await fs.readFile(absolutePath, "utf8");
  const today = new Date().toISOString().slice(0, 10);
  const kind = fileKind(relativePath);
  const instructions = buildInstructions(kind, today);

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: MODEL,
      reasoning: { effort: "medium" },
      input: [
        {
          role: "system",
          content: [{ type: "input_text", text: instructions }]
        },
        {
          role: "user",
          content: [
            {
              type: "input_text",
              text: `File path: ${relativePath}\n\nCurrent file contents:\n\n${current}`
            }
          ]
        }
      ]
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`OpenAI request failed: ${response.status} ${errorText}`);
  }

  const payload = await response.json();
  const rawText = extractResponseText(payload);
  let parsed;

  try {
    parsed = JSON.parse(rawText);
  } catch (error) {
    throw new Error(`Model did not return valid JSON: ${error instanceof Error ? error.message : String(error)}`);
  }

  if (typeof parsed.content !== "string" || typeof parsed.change_summary !== "string") {
    throw new Error("Model response JSON is missing required keys");
  }

  const next = `${parsed.content.trimEnd()}\n`;
  const previous = `${current.trimEnd()}\n`;

  if (next === previous) {
    console.log(`No meaningful change for ${relativePath}`);
    return false;
  }

  await fs.writeFile(absolutePath, next, "utf8");
  console.log(`Updated ${relativePath}`);
  console.log(`Summary: ${parsed.change_summary}`);
  return true;
}

async function main() {
  const target = process.env.AUTO_IMPROVE_TARGET || pickCandidate();
  console.log(`Auto-improve target: ${target}`);
  const changed = await improveFile(target);
  if (!changed) {
    console.log("No changes written.");
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
