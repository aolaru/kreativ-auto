export interface GenerationHubSection {
  title: string;
  intro?: string;
  items: string[];
}

export interface GenerationHubContent {
  eyebrow?: string;
  intro: string;
  overview: string[];
  painPoints: string[];
  ownershipNotes: string[];
  phaseNotes?: string[];
  featuredProblems?: string[];
  featuredBest?: string[];
}

export const generationHubContent: Record<string, GenerationHubContent> = {
  "volkswagen-tiguan-tiguan-ii-facelift-2020-2024": {
    eyebrow: "Generation Hub",
    intro:
      "The Tiguan II facelift is the version most owners end up cross-shopping or keeping long enough to run into the same repeat complaints: front brake vibration, cooling-system seepage, intermittent EPC behavior, and the small suspension noises that make the SUV feel older than it is.",
    overview: [
      "This 2020-2024 facelift window is where the Tiguan settles into its everyday ownership pattern, especially around the 2.0T gas engine and normal family-SUV use.",
      "Most of the expensive mistakes happen when owners treat brake vibration, coolant loss, or load-related drivability faults as random one-offs instead of repeat platform issues.",
      "If you stay disciplined on brake parts, coolant spec, and ignition maintenance, the platform is usually much easier to live with than the internet makes it sound."
    ],
    painPoints: [
      "Front brake vibration and pad wear show up early if the SUV spends a lot of time in traffic or gets low-quality replacement parts.",
      "Small coolant loss can stay hidden for too long because the first signs are often residue or smell, not a dramatic puddle.",
      "EPC warnings and hesitation under load often trace back to ignition or boost-related weak links, not some mystery electronic curse.",
      "Front-end knocks, sway-bar-link noise, and alignment-sensitive vibration all chip away at refinement quickly on these cars."
    ],
    ownershipNotes: [
      "Check trim, axle setup, and wheel size before ordering brake parts because Tiguan fitment gets messy fast when listings are too broad.",
      "Do not mix random coolant types. On this platform, fluid spec matters more than brand marketing.",
      "If the car is a 4MOTION model, stay stricter on tire matching and rotation so you do not misread driveline or chassis behavior.",
      "When the car misfires or throws EPC warnings under load, scan it before clearing anything. The useful clue is usually in the first code set."
    ],
    phaseNotes: [
      "The facelift years overlap heavily in core maintenance patterns, but supplier changes and trim packaging still mean VIN-level confirmation matters for some parts.",
      "Earlier pre-facelift Mk2 Tiguans can share broad symptoms, but the 2020-2024 group is the cleaner place to keep electronics, trim, and parts guidance together."
    ],
    featuredProblems: [
      "car-shakes-when-braking",
      "coolant-level-drops-with-no-visible-leak",
      "epc-light-comes-on-under-acceleration",
      "oil-level-drops-between-services",
      "water-leaks-into-cabin-after-heavy-rain"
    ],
    featuredBest: [
      "best-brake-pads-for-vw-tiguan-2020",
      "best-coolant-for-vw-tiguan-2020",
      "best-ignition-coils-for-vw-tiguan-2020",
      "best-engine-oil-for-vw-tiguan-2020",
      "best-batteries-for-vw-tiguan-2020"
    ]
  }
};
