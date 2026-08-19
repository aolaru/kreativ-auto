export interface OwnershipTask {
  title: string;
  label: string;
  description: string;
  href: string;
  cta: string;
  kind: "car" | "problem" | "parts" | "brand" | "model" | "category";
  primary: boolean;
}

export const ownershipTasks: OwnershipTask[] = [
  {
    title: "Buying used",
    label: "Buying Used",
    description: "Used-buyer verdicts, red flags, trim choices, and pre-purchase checks before money changes hands.",
    href: "/guides/toyota-rav4-xa50-should-you-buy-it-used/",
    cta: "Open a buyer guide",
    kind: "car",
    primary: true
  },
  {
    title: "Diagnosing problems",
    label: "Diagnose",
    description: "Start with the symptom when the car is noisy, warning, leaking, vibrating, or behaving differently.",
    href: "/guides/toyota-rav4-xa50-common-problems/",
    cta: "Start diagnosing",
    kind: "problem",
    primary: true
  },
  {
    title: "Maintenance costs",
    label: "Maintenance Costs",
    description: "Check weak points, service timing, and the ownership costs most likely to matter first.",
    href: "/guides/toyota-rav4-xa50-maintenance-costs-and-weak-points/",
    cta: "Check ownership costs",
    kind: "category",
    primary: true
  },
  {
    title: "Parts by category",
    label: "Parts by Category",
    description: "Browse brakes, batteries, tires, ignition, suspension, fluids, and other part groups.",
    href: "/categories/",
    cta: "Browse part categories",
    kind: "parts",
    primary: false
  },
  {
    title: "Model comparisons",
    label: "Comparisons",
    description: "Compare engines, drivetrains, hybrid choices, trims, and generation changes before deciding.",
    href: "/comparisons/toyota-rav4-hybrid-vs-gas/",
    cta: "Compare powertrains",
    kind: "model",
    primary: true
  }
];

export const primaryOwnershipTasks = ownershipTasks.filter((task) => task.primary);
