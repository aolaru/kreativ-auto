import { getCollection } from "astro:content";
import { comparisonGuides } from "../data/comparison-guides";
import { ownershipGuides } from "../data/ownership-guides";
import { isReviewReadyCar, isReviewReadyComparison, isReviewReadyGuide, isReviewReadyProblem } from "../data/review-readiness";

const getEntryPath = (entry: { id: string; slug?: string }) => entry.slug ?? entry.id.replace(/\.(md|mdx)$/i, "");
const getGuideSlug = (href: string) => href.split("/").filter(Boolean).at(-1) ?? "";

const uniqueByHref = <T extends { href: string }>(items: T[]) => {
  const seen = new Set<string>();

  return items.filter((item) => {
    if (seen.has(item.href)) return false;
    seen.add(item.href);
    return true;
  });
};

export async function buildSearchIndex() {
  const [cars, problems] = await Promise.all([
    getCollection("cars"),
    getCollection("problems")
  ]);

  const reviewedCars = cars.filter((entry) => isReviewReadyCar(entry.id));
  const reviewedProblems = problems.filter((entry) => isReviewReadyProblem(entry.id));
  const reviewedOwnershipGuides = ownershipGuides.filter((guide) => isReviewReadyGuide(getGuideSlug(guide.href)));
  const reviewedComparisons = comparisonGuides.filter((guide) => isReviewReadyComparison(getGuideSlug(guide.href)));

  return uniqueByHref([
    ...reviewedCars.map((entry) => ({
      title: entry.data.title,
      href: `/cars/${getEntryPath(entry)}/`,
      description: entry.data.metaDescription,
      type: "Car",
      keywords: `${entry.data.brand} ${entry.data.model} ${entry.data.year} ${entry.data.generation} ${entry.data.generationCode ?? ""} ${entry.data.generationYears}`,
      priority: 100
    })),
    ...reviewedProblems.map((entry) => ({
      title: entry.data.title,
      href: `/problems/${getEntryPath(entry)}/`,
      description: entry.data.metaDescription,
      type: "Problem guide",
      keywords: `${entry.data.symptoms.join(" ")} ${entry.data.causes.join(" ")} ${entry.data.relatedCars.join(" ")}`,
      priority: 75
    })),
    ...reviewedOwnershipGuides.map((guide) => ({
      title: guide.title,
      href: guide.href,
      description: guide.description,
      type: guide.eyebrow,
      keywords: `${guide.eyebrow} ${guide.relatedCars?.join(" ") ?? ""} ${guide.relatedModels?.join(" ") ?? ""}`,
      priority: 92
    })),
    ...reviewedComparisons.map((guide) => ({
      title: guide.title,
      href: guide.href,
      description: guide.description,
      type: guide.eyebrow,
      keywords: `${guide.eyebrow} ${guide.relatedCars?.join(" ") ?? ""} ${guide.relatedModels?.join(" ") ?? ""}`,
      priority: 55
    })),
  ].filter((entry) => entry.title && entry.href));
}
