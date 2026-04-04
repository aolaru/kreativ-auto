export interface ComparisonGuide {
  title: string;
  href: string;
  description: string;
  eyebrow: string;
  relatedCars?: string[];
  relatedModels?: string[];
  relatedGenerations?: string[];
}

export const comparisonGuides: ComparisonGuide[] = [
  {
    title: "Honda Civic 1.5T vs 2.0",
    href: "/tools/honda-civic-1-5t-vs-2-0/",
    description:
      "A practical guide to where the 1.5T and 2.0 Civic ownership experience really differs, including drivability, maintenance, and parts-buying traps.",
    eyebrow: "Powertrain guide",
    relatedCars: ["honda-civic-2019"],
    relatedModels: ["Honda Civic"],
    relatedGenerations: ["honda-civic-fc-fk-facelift-2019-2021"]
  }
];
