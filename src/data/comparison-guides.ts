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
  },
  {
    title: "Toyota RAV4 Hybrid vs gas",
    href: "/tools/toyota-rav4-hybrid-vs-gas/",
    description:
      "A practical guide to where the hybrid and gas RAV4 ownership pattern really diverges, including braking feel, battery complaints, and parts-buying mistakes.",
    eyebrow: "Powertrain guide",
    relatedCars: ["toyota-rav4-2020", "toyota-rav4-2021"],
    relatedModels: ["Toyota RAV4"],
    relatedGenerations: ["toyota-rav4-xa50-2019-2021"]
  },
  {
    title: "VW Tiguan FWD vs 4MOTION",
    href: "/tools/vw-tiguan-fwd-vs-4motion/",
    description:
      "A practical guide to where front-wheel-drive and 4MOTION Tiguan ownership really diverges, including tires, driveline load, maintenance priorities, and parts-buying mistakes.",
    eyebrow: "Drivetrain guide",
    relatedCars: ["vw-tiguan-2020"],
    relatedModels: ["Volkswagen Tiguan", "VW Tiguan"],
    relatedGenerations: ["volkswagen-tiguan-tiguan-ii-facelift-2020-2024"]
  }
];
