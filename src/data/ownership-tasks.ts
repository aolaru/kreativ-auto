export interface OwnershipTask {
  title: string;
  label: string;
  description: string;
  href: string;
  cta: string;
  kind: "car" | "problem" | "parts" | "brand" | "model" | "category";
}

export const ownershipTasks: OwnershipTask[] = [
  {
    title: "Buying used",
    label: "Buying Used",
    description: "Used-buyer verdicts, red flags, trim choices, and pre-purchase checks before money changes hands.",
    href: "/guides/#browse-all-guides",
    cta: "Open used-car guides",
    kind: "car"
  },
  {
    title: "Diagnosing problems",
    label: "Diagnose",
    description: "Start with the symptom when the car is noisy, warning, leaking, vibrating, or behaving differently.",
    href: "/problems/",
    cta: "Find the symptom",
    kind: "problem"
  },
  {
    title: "Maintenance costs",
    label: "Maintenance Costs",
    description: "Check weak points, service timing, and the ownership costs most likely to matter first.",
    href: "/guides/#browse-all-guides",
    cta: "Check costs",
    kind: "category"
  },
  {
    title: "Parts by category",
    label: "Parts by Category",
    description: "Browse brakes, batteries, tires, ignition, suspension, fluids, and other part groups.",
    href: "/categories/",
    cta: "Browse part categories",
    kind: "parts"
  },
  {
    title: "Model comparisons",
    label: "Comparisons",
    description: "Compare engines, drivetrains, hybrid choices, trims, and generation changes before deciding.",
    href: "/comparisons/",
    cta: "Compare versions",
    kind: "model"
  }
];
