export interface OwnershipGuide {
  title: string;
  href: string;
  description: string;
  eyebrow: string;
  relatedCars?: string[];
  relatedGenerations?: string[];
}

export const ownershipGuides: OwnershipGuide[] = [
  {
    title: "VW Tiguan II facelift common problems",
    href: "/guides/vw-tiguan-ii-facelift-common-problems/",
    description:
      "A flagship ownership guide to the repeat Tiguan facelift trouble spots, what to check first, and which pages to open next when the car starts feeling less sorted.",
    eyebrow: "Ownership guide",
    relatedCars: ["vw-tiguan-2020"],
    relatedGenerations: ["volkswagen-tiguan-tiguan-ii-facelift-2020-2024"]
  }
];
