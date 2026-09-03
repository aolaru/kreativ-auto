import fs from "node:fs";
import path from "node:path";

const cwd = process.cwd();
const bestDir = path.join(cwd, "src", "content", "best");
const files = fs.readdirSync(bestDir).filter((file) => file.endsWith(".md")).sort();

function frontmatter(source) {
  return source.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? "";
}

function yamlBlock(header, key) {
  const lines = header.split("\n");
  const start = lines.findIndex((line) => line === `${key}:`);
  if (start === -1) return "";

  const block = [];
  for (const line of lines.slice(start + 1)) {
    if (line.length > 0 && !line.startsWith(" ")) break;
    block.push(line);
  }
  return block.join("\n");
}

function listItems(header, key) {
  return [...yamlBlock(header, key).matchAll(/^ {2}-\s+\S/gm)].length;
}

function sourceCount(header, key) {
  return [...yamlBlock(header, key).matchAll(/^ {2}- label:/gm)].length;
}

function bodyWordCount(source) {
  const body = source.replace(/^---\n[\s\S]*?\n---\n?/, "");
  return body.replace(/[#*`[\]()]/g, " ").trim().split(/\s+/).filter(Boolean).length;
}

const results = files.map((file) => {
  const source = fs.readFileSync(path.join(bestDir, file), "utf8");
  const header = frontmatter(source);
  const priceVerified = /^priceVerified:\s*true\s*$/m.test(header);
  const blockers = [];

  if (!/^hasResearchBody:\s*true\s*$/m.test(header)) blockers.push("original model-specific analysis");
  if (bodyWordCount(source) < 350) blockers.push("at least 350 words of original analysis");
  if (listItems(header, "selectionCriteria") < 3) blockers.push("three selection criteria");
  if (listItems(header, "alternatives") < 2) blockers.push("two real alternatives");
  if (sourceCount(header, "sourceLinks") < 2) blockers.push("two product or manufacturer sources");
  if (!/^pricingCheckedAt:\s*\d{4}-\d{2}-\d{2}\s*$/m.test(header)) blockers.push("dated pricing review");
  if (!/^priceVerified:\s*(true|false)\s*$/m.test(header)) blockers.push("explicit price-verification state");
  if (priceVerified && sourceCount(header, "priceSourceLinks") < 1) blockers.push("product-level price source");

  return { file, blockers };
});

const eligible = results.filter((result) => result.blockers.length === 0);
const blocked = results.filter((result) => result.blockers.length > 0);

console.log(`Commercial-page review: ${files.length} pages checked`);
console.log(`${eligible.length} eligible for a manual index review; ${blocked.length} remain noindex.`);

if (eligible.length > 0) {
  console.log("\nEligible for manual review (indexing is not automatic):");
  for (const result of eligible) console.log(`- ${result.file}`);
}

if (blocked.length > 0) {
  console.log("\nNoindex work queue:");
  for (const result of blocked) console.log(`- ${result.file}: ${result.blockers.join(", ")}`);
}
