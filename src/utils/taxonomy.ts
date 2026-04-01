export function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

interface GenerationFields {
  brand: string;
  model: string;
  generation: string;
  generationCode?: string;
  generationYears: string;
  phase?: string;
  phaseYears?: string;
}

export function unslugify(value: string) {
  return value
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function normalize(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

export function includesPhrase(haystack: string, needle: string) {
  return normalize(haystack).includes(normalize(needle));
}

export function uniqueByHref<T extends { href: string }>(items: T[]) {
  return items.filter((item, index) => items.findIndex((candidate) => candidate.href === item.href) === index);
}

export function getModelKey(fields: Pick<GenerationFields, "brand" | "model">) {
  return `${fields.brand} ${fields.model}`;
}

export function getGenerationKey(fields: GenerationFields) {
  return [
    fields.brand,
    fields.model,
    fields.generationCode ?? fields.generation,
    fields.phase ?? "",
    fields.phaseYears ?? fields.generationYears
  ]
    .filter(Boolean)
    .join("::");
}

export function getGenerationSlug(fields: GenerationFields) {
  return slugify(getGenerationKey(fields).replaceAll("::", " "));
}

export function getGenerationLabel(fields: GenerationFields) {
  const base = `${fields.brand} ${fields.model} ${fields.generationCode ?? fields.generation}`;
  return fields.phase ? `${base} ${fields.phase}` : base;
}

export function getGenerationRange(fields: GenerationFields) {
  return fields.phaseYears ?? fields.generationYears;
}
