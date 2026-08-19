import { hondaCivicBestQuality, hondaCivicGuideQuality, hondaCivicProblemQuality } from "./honda-civic-quality";
import { rav4BestQuality, rav4GuideQuality, rav4ProblemQuality } from "./toyota-rav4-quality";

const combineKeys = (...records: Array<Record<string, unknown>>) => new Set(records.flatMap((record) => Object.keys(record)));

// Only pages with vehicle-specific evidence and a decision path are submitted for search and ad review.
export const reviewReadyGuideIds = combineKeys(rav4GuideQuality, hondaCivicGuideQuality);
// Reusable symptom pages can support readers, but they are not a substitute for
// vehicle-specific research. Keep them out of search until each has dedicated
// model scope and evidence rather than inheriting a cluster's evidence record.
export const reviewReadyProblemIds = new Set<string>();
export const reviewReadyBestIds = combineKeys(rav4BestQuality, hondaCivicBestQuality);
export const reviewReadyCarIds = new Set(["toyota-rav4-2020", "toyota-rav4-2021", "honda-civic-2019"]);
export const reviewReadyComparisonIds = new Set(["honda-civic-1-5t-vs-2-0", "toyota-rav4-hybrid-vs-gas"]);

export const isReviewReadyGuide = (id: string) => reviewReadyGuideIds.has(id);
export const isReviewReadyProblem = (id: string) => reviewReadyProblemIds.has(id);
export const isReviewReadyBest = (id: string) => reviewReadyBestIds.has(id);
export const isReviewReadyCar = (id: string) => reviewReadyCarIds.has(id);
export const isReviewReadyComparison = (id: string) => reviewReadyComparisonIds.has(id);
