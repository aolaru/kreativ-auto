export function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
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
