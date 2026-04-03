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
  "toyota-rav4-xa50-2019-2021": {
    eyebrow: "Generation Hub",
    intro:
      "The XA50 RAV4 is the version most owners expect to be simple, quiet, and low-drama. That is mostly true, but the repeat ownership pattern is still clear: brake noise, road hum, rear suspension knocks, and 12-volt battery complaints show up often enough that the generation is better understood as a cluster, not as isolated model years.",
    overview: [
      "The 2019-2021 XA50 window is where the current RAV4 ownership pattern settles in, especially around brake refinement, wheel-bearing noise, tire-related hum, and light rear suspension wear.",
      "A lot of wasted money on these SUVs comes from misdiagnosing tire noise as hubs, replacing bigger suspension parts before checking links and bushings, or ordering parts without paying attention to trim and hybrid differences.",
      "If you stay on top of tires, brake hardware, and the smaller suspension pieces, the XA50 usually stays quieter and more refined than the complaint forums make it look."
    ],
    painPoints: [
      "Low-speed brake squeal and occasional rear-brake noise are common enough that hardware condition and pad compound matter more than people expect.",
      "Road hum is frequently blamed on wheel hubs when the real answer is tread pattern, rotation history, or tire cupping.",
      "Rear-end and driveway-entry clunks often trace back to smaller sway-bar-link or stabilizer-hardware wear rather than a major suspension failure.",
      "Gas and hybrid owners both deal with 12-volt battery complaints, but the way they describe the symptom can differ a lot."
    ],
    ownershipNotes: [
      "Do not buy hub assemblies before ruling out tire noise. On the XA50, bad tire wear and bad diagnosis travel together.",
      "Check trim, wheel size, and hybrid versus gas layout before ordering brake or battery parts.",
      "Rear clunks are worth isolating carefully because cargo-area noise and rear suspension noise can sound almost identical from the driver seat.",
      "If the SUV sees short trips, watch 12-volt battery health earlier instead of waiting for a no-start."
    ],
    phaseNotes: [
      "The 2020 and 2021 years are close enough to group confidently, but Toyota trim and supplier changes still make VIN-level parts confirmation worth doing.",
      "Earlier pre-XA50 RAV4 generations overlap in broad ownership logic, but not enough in fitment or chassis behavior to mix the pages together."
    ],
    featuredProblems: [
      "brake-squeal-at-low-speed",
      "humming-noise-that-gets-louder-with-speed",
      "rear-suspension-clunk-over-bumps",
      "rear-brakes-squeak-after-rain",
      "front-end-clunk-when-pulling-into-driveways"
    ],
    featuredBest: [
      "best-brake-pads-for-toyota-rav4-2021",
      "best-wheel-bearings-for-toyota-rav4-2021",
      "best-rear-sway-bar-links-for-toyota-rav4-2021",
      "best-rear-brake-pads-for-toyota-rav4-2021",
      "best-front-sway-bar-links-for-toyota-rav4-2021"
    ]
  },
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
