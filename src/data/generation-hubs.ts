export interface GenerationHubSection {
  title: string;
  intro?: string;
  items: string[];
}

export interface GenerationHubStartHere {
  title: string;
  description: string;
  href: string;
}

export interface GenerationHubVisualHighlight {
  title: string;
  description: string;
  image: string;
  href?: string;
}

export interface GenerationHubContent {
  eyebrow?: string;
  intro: string;
  overview: string[];
  painPoints: string[];
  firstPartsToCheck?: string[];
  cautionNotes?: string[];
  ownershipNotes: string[];
  phaseNotes?: string[];
  startHere?: GenerationHubStartHere[];
  featuredProblems?: string[];
  featuredBest?: string[];
  visualHighlights?: GenerationHubVisualHighlight[];
}

export const generationHubContent: Record<string, GenerationHubContent> = {
  "honda-civic-fc-fk-facelift-2019-2021": {
    eyebrow: "Generation Hub",
    intro:
      "The facelifted tenth-generation Civic is the version a lot of owners expect to be almost trouble-free, and broadly it is. The repeat pattern is still easy to spot though: ignition-related drivability issues when maintenance slips, A/C performance complaints in traffic, and the smaller chassis noises that make the car feel more worn than it really is.",
    overview: [
      "The 2019-2021 facelift years are the cleanest way to group the later Civic X ownership pattern, especially for the regular gas sedan, coupe, and hatchback trims.",
      "What wastes money on these cars is usually not a huge catastrophic failure. It is replacing the wrong ignition part first, blaming every front-end noise on something major, or shopping brake and suspension parts without checking trim and body style closely enough.",
      "If you stay disciplined on spark plugs, charging health, front-end inspection, and common A/C weak points, these Civics usually stay cheap and easy to live with."
    ],
    painPoints: [
      "Idle misfires, cold-start roughness, and light hesitation still cluster around overdue ignition maintenance more than owners want to believe.",
      "A/C complaints are often most obvious at idle or in traffic, where condenser efficiency and fan behavior show their weakness fastest.",
      "Small front-end rattles and driveway-entry clunks are easy to overdiagnose unless sway-bar links, axle condition, and brake hardware get checked in the right order.",
      "Brake squeal on these cars is often more about compound choice and hardware condition than some serious brake-system failure."
    ],
    firstPartsToCheck: [
      "Start ignition complaints with spark plugs and then coils, not with random sensor guesses.",
      "For warm-idle A/C complaints, check condenser condition, fan performance, and whether the symptom is worse in traffic than at speed.",
      "If the front end rattles or clunks, inspect sway-bar links, brake hardware, and axle boots before you assume struts or racks.",
      "If the car squeaks after rain, rear pad compound and hardware condition are usually worth checking before ordering a full brake overhaul."
    ],
    cautionNotes: [
      "Do not treat Si and Type R fitment like regular Civic trim fitment. Brake, suspension, and powertrain assumptions drift quickly there.",
      "The 1.5T and 2.0 share a lot of ownership logic, but they do not share every ignition, drivability, or buying conclusion cleanly.",
      "Late-year facelift cars are the cleaner group for later condenser and trim guidance. Earlier Civic X overlap exists, but parts shopping gets sloppier if you flatten it too much."
    ],
    ownershipNotes: [
      "Confirm whether the car is a 2.0, 1.5T, Si, or Type R before buying parts. The mainstream Civic advice here is for the regular gas lineup, not the special trims.",
      "Do not lump every Civic X year together by default. The facelift years share a lot, but condenser listings, trim packaging, and some supplier changes are cleaner if you keep 2019-2021 together.",
      "Short-trip cars need battery and ground checks sooner, especially if voltage behavior starts looking random.",
      "When front-end noise shows up, inspect links, pads, and axle boots before assuming the repair is bigger than it is."
    ],
    phaseNotes: [
      "The 2019 facelift does not transform the chassis, but it is still the right split for keeping condenser, trim, and later-year fitment guidance cleaner.",
      "Earlier 2016-2018 Civic X cars overlap in broad ownership logic, but mixing them blindly into the facelift cluster makes parts and trim guidance sloppier."
    ],
    startHere: [
      {
        title: "Start with the powertrain split",
        description: "Use the 1.5T versus 2.0 guide first if you are still mixing advice across the two mainstream engines.",
        href: "/comparisons/honda-civic-1-5t-vs-2-0/"
      },
      {
        title: "If the engine feels rough",
        description: "Start on the misfire and ignition pages before shopping random sensors or fuel parts.",
        href: "/problems/engine-misfires-at-idle/"
      },
      {
        title: "If the car feels worn in traffic",
        description: "The A/C, front-end noise, and rear-brake refinement pages are where this generation usually shows age first.",
        href: "/problems/air-conditioner-blows-warm-at-idle/"
      }
    ],
    featuredProblems: [
      "engine-misfires-at-idle",
      "air-conditioner-blows-warm-at-idle",
      "battery-light-flickers-at-idle",
      "front-suspension-rattles-over-small-bumps",
      "rear-brakes-squeak-after-overnight-rain",
      "front-brakes-squeal-at-low-speed"
    ],
    featuredBest: [
      "best-ignition-coils-for-honda-civic-2019",
      "best-spark-plugs-for-honda-civic-2019",
      "best-ac-condensers-for-honda-civic-2019",
      "best-front-sway-bar-links-for-honda-civic-2019",
      "best-rear-brake-pads-for-honda-civic-2019",
      "best-front-brake-pads-for-honda-civic-2019"
    ],
    visualHighlights: [
      {
        title: "Ignition upkeep matters early",
        description: "The facelift Civic gets rough around the edges fastest when plugs and coils are left alone too long.",
        image: "/images/photos/parts/ngk-spark-plugs.png",
        href: "/best/best-spark-plugs-for-honda-civic-2019/"
      },
      {
        title: "Traffic exposes the A/C weak point",
        description: "Warm-idle A/C complaints are one of the easiest ways this generation starts feeling older than it should.",
        image: "/images/photos/parts/denso-condenser.jpeg",
        href: "/problems/air-conditioner-blows-warm-at-idle/"
      },
      {
        title: "Small front-end noises add up",
        description: "A light rattle over broken pavement usually points to smaller wear items before anything dramatic in the chassis.",
        image: "/images/photos/parts/moog-sway-bar-links.png",
        href: "/problems/front-suspension-rattles-over-small-bumps/"
      }
    ]
  },
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
    firstPartsToCheck: [
      "If the complaint is brake noise, start with pad compound, rear hardware condition, and rotor surface before upgrading to a bigger theory.",
      "If the SUV hums at speed, inspect tires, rotation pattern, and tread wear before buying wheel hubs.",
      "If the rear knocks over bumps, look at sway-bar links and simple cargo-area causes before assuming shocks or major rear suspension wear.",
      "If the battery keeps feeling weak, match the diagnosis to gas versus hybrid use pattern before buying the first battery on the list."
    ],
    cautionNotes: [
      "Gas and hybrid versions share some complaints, but battery, brake-use pattern, and ownership advice do not transfer perfectly.",
      "Trim and wheel-package differences matter more here than owners expect, especially once brake and suspension fitment enter the picture.",
      "This XA50 hub is strongest for the normal North American ownership pattern. Earlier RAV4 generations should stay separate instead of being flattened into the same advice."
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
    startHere: [
      {
        title: "Start with hybrid versus gas",
        description: "Use the comparison page first if you are still mixing battery, brake, and ownership advice across both powertrains.",
        href: "/comparisons/toyota-rav4-hybrid-vs-gas/"
      },
      {
        title: "If the SUV hums or feels rough",
        description: "Road-noise complaints on this generation are worth sorting through tires, wheel bearings, and suspension in that order.",
        href: "/problems/humming-noise-that-gets-louder-with-speed/"
      },
      {
        title: "If the brakes feel cheap or noisy",
        description: "Start with the brake squeal and rear-brake guides before throwing parts at the whole system.",
        href: "/problems/brake-squeal-at-low-speed/"
      }
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
    ],
    visualHighlights: [
      {
        title: "Brake refinement is a real theme",
        description: "Pad choice and hardware condition do more to shape daily RAV4 feel than most owners expect.",
        image: "/images/photos/parts/akebono-proact.png",
        href: "/best/best-brake-pads-for-toyota-rav4-2021/"
      },
      {
        title: "Highway comfort starts with tires",
        description: "A lot of road hum and vibration stories on the XA50 start with the tire, not the wheel bearing.",
        image: "/images/photos/parts/michelin-defender2.webp",
        href: "/best/best-tires-for-toyota-rav4-2021-highway-vibration/"
      },
      {
        title: "Short-trip battery complaints are common",
        description: "The 12-volt battery story is one of the main ownership differences that keeps coming up across gas and hybrid use.",
        image: "/images/photos/parts/car-battery.jpg",
        href: "/problems/battery-goes-dead-after-sitting/"
      }
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
    firstPartsToCheck: [
      "For brake shake, start with pads, rotors, and hardware quality before blaming the whole front end.",
      "For coolant loss, confirm exact coolant spec and inspect for small seepage before mixing fluids or topping up forever.",
      "If EPC or hesitation shows up under load, check spark plugs and coils before turning the car into an electronics mystery.",
      "If the front end feels busy or noisy, inspect sway-bar links, tire condition, and wheel torque before escalating to larger suspension theories."
    ],
    cautionNotes: [
      "Do not flatten pre-facelift and facelift Tiguans together if the page is supposed to help with parts buying. The overlap is real, but the trim and supplier differences still matter.",
      "FWD and 4MOTION ownership logic overlaps until tires, driveline behavior, and chassis diagnosis enter the picture. Then the split matters quickly.",
      "This hub assumes the mainstream 2.0T facelift ownership pattern. Market-specific diesel or hybrid variants should not inherit the same parts and cooling advice blindly."
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
    startHere: [
      {
        title: "Start with facelift versus pre-facelift",
        description: "Use this first if you are still mixing older Mk2 advice into the facelift-era ownership pattern.",
        href: "/comparisons/vw-tiguan-pre-facelift-vs-facelift/"
      },
      {
        title: "If the car hesitates or shows EPC",
        description: "Begin with the load-related drivability and ignition pages before chasing random electronics.",
        href: "/problems/epc-light-comes-on-under-acceleration/"
      },
      {
        title: "If the SUV feels less refined",
        description: "Brake shake, coolant seepage, and front-end noise are the three fastest places to get traction on this generation.",
        href: "/problems/car-shakes-when-braking/"
      }
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
    ],
    visualHighlights: [
      {
        title: "Brake quality changes the whole car",
        description: "On the facelift Tiguan, weak pad and rotor choices are one of the fastest ways to make the SUV feel older than it is.",
        image: "/images/photos/parts/bosch-quietcast-pads.jpg",
        href: "/best/best-brake-pads-for-vw-tiguan-2020/"
      },
      {
        title: "Coolant issues often start small",
        description: "This platform is much easier to live with when the first trace of coolant drift gets treated as a diagnosis, not a topping-up habit.",
        image: "/images/photos/parts/pentosin-coolant.jpg",
        href: "/problems/coolant-level-drops-with-no-visible-leak/"
      },
      {
        title: "Ignition-side drivability is a repeat pattern",
        description: "EPC and hesitation complaints feel electronic, but the first useful look is often still the spark and coil side.",
        image: "/images/photos/parts/delphi-ignition-coil.jpg",
        href: "/problems/epc-light-comes-on-under-acceleration/"
      }
    ]
  }
};
