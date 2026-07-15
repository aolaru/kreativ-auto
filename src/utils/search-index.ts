import { getCollection } from "astro:content";
import { comparisonGuides } from "../data/comparison-guides";
import { ownershipGuides } from "../data/ownership-guides";
import { ownershipTasks } from "../data/ownership-tasks";
import { getGenerationLabel, getGenerationSlug, slugify } from "./taxonomy";

const getEntryPath = (entry: { id: string; slug?: string }) => entry.slug ?? entry.id.replace(/\.(md|mdx)$/i, "");

const uniqueByHref = <T extends { href: string }>(items: T[]) => {
  const seen = new Set<string>();

  return items.filter((item) => {
    if (seen.has(item.href)) return false;
    seen.add(item.href);
    return true;
  });
};

export async function buildSearchIndex() {
  const [cars, problems, bestPages] = await Promise.all([
    getCollection("cars"),
    getCollection("problems"),
    getCollection("best")
  ]);

  const brands = [...new Set(cars.map((entry) => entry.data.brand))].sort((a, b) => a.localeCompare(b));
  const models = [...new Set(cars.map((entry) => `${entry.data.brand} ${entry.data.model}`))].sort((a, b) => a.localeCompare(b));
  const generations = uniqueByHref(
    cars.map((entry) => ({
      title: getGenerationLabel(entry.data),
      href: `/generations/${getGenerationSlug(entry.data)}/`,
      description: `${entry.data.generationYears} ${entry.data.brand} ${entry.data.model} generation notes.`,
      type: "Generation",
      keywords: `${entry.data.brand} ${entry.data.model} ${entry.data.generation} ${entry.data.generationCode ?? ""} ${entry.data.generationYears}`,
      priority: 90
    }))
  );
  const categories = [...new Set(bestPages.map((entry) => entry.data.category))]
    .sort((a, b) => a.localeCompare(b))
    .map((category) => ({
      title: `${category} guides`,
      href: `/categories/${slugify(category)}/`,
      description: `Compare ${category.toLowerCase()} by vehicle and symptom.`,
      type: "Part category",
      keywords: category,
      priority: 58
    }));

  return [
    ...cars.map((entry) => ({
      title: entry.data.title,
      href: `/cars/${getEntryPath(entry)}/`,
      description: entry.data.metaDescription,
      type: "Car",
      keywords: `${entry.data.brand} ${entry.data.model} ${entry.data.year} ${entry.data.generation} ${entry.data.generationCode ?? ""} ${entry.data.generationYears}`,
      priority: 100
    })),
    ...problems.map((entry) => ({
      title: entry.data.title,
      href: `/problems/${getEntryPath(entry)}/`,
      description: entry.data.metaDescription,
      type: "Problem guide",
      keywords: `${entry.data.symptoms.join(" ")} ${entry.data.causes.join(" ")} ${entry.data.relatedCars.join(" ")}`,
      priority: 75
    })),
    ...bestPages.map((entry) => ({
      title: entry.data.title,
      href: `/best/${getEntryPath(entry)}/`,
      description: entry.data.metaDescription,
      type: "Best parts",
      keywords: `${entry.data.car_model} ${entry.data.category} ${entry.data.relatedCars.join(" ")}`,
      priority: 50
    })),
    ...ownershipGuides.map((guide) => ({
      title: guide.title,
      href: guide.href,
      description: guide.description,
      type: guide.eyebrow,
      keywords: `${guide.eyebrow} ${guide.relatedCars?.join(" ") ?? ""} ${guide.relatedModels?.join(" ") ?? ""}`,
      priority: 92
    })),
    ...comparisonGuides.map((guide) => ({
      title: guide.title,
      href: guide.href,
      description: guide.description,
      type: guide.eyebrow,
      keywords: `${guide.eyebrow} ${guide.relatedCars?.join(" ") ?? ""} ${guide.relatedModels?.join(" ") ?? ""}`,
      priority: 55
    })),
    ...ownershipTasks.map((task) => ({
      title: task.title,
      href: task.href,
      description: task.description,
      type: "Ownership task",
      keywords: task.label,
      priority: 80
    })),
    ...brands.map((brand) => ({
      title: `${brand} cars`,
      href: `/brands/${slugify(brand)}/`,
      description: `Browse ${brand} cars, guides, problems, and parts comparisons.`,
      type: "Brand",
      keywords: brand,
      priority: 60
    })),
    ...models.map((model) => ({
      title: `${model} guides`,
      href: `/models/${slugify(model)}/`,
      description: `Open ${model} model-year and ownership pages.`,
      type: "Model",
      keywords: model,
      priority: 90
    })),
    ...generations,
    ...categories,
    {
      title: "Browse",
      href: "/browse/",
      description: "Browse by car, brand, model, generation, or parts category.",
      type: "Navigation",
      keywords: "cars brands models generations categories",
      priority: 45
    }
  ].filter((entry) => entry.title && entry.href);
}
