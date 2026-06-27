import type { DeepGuideCard, DeepGuideLink, DeepOwnershipGuide } from "./deep-ownership-guides";

const modifiedTime = "2026-06-27";

interface OwnershipExpansionProfile {
  slugBase: string;
  titleName: string;
  shortName: string;
  vehicleType: string;
  image: string;
  relatedCars: string[];
  relatedGenerations: string[];
  mainSymptom: string;
  secondarySymptom: string;
  primaryRepair: string;
  secondaryRepair: string;
  maintenanceCards: DeepGuideCard[];
  weakPoints: string[];
  inspectionOrder: string[];
  overspending: string[];
  avoidCards: DeepGuideCard[];
  avoidList: string[];
  negotiable: string[];
  relatedProblems: DeepGuideLink[];
  relatedBest: DeepGuideLink[];
}

interface ServiceExpansionProfile {
  slugBase: string;
  titleName: string;
  shortName: string;
  vehicleType: string;
  image: string;
  relatedCars: string[];
  relatedGenerations: string[];
  intervalTheme: string;
  firstPriority: string;
  secondPriority: string;
  serviceCards: DeepGuideCard[];
  intervalList: string[];
  records: string[];
  roadTripChecks: string[];
  relatedProblems: DeepGuideLink[];
  relatedBest: DeepGuideLink[];
}

const problemLink = (href: string, title: string, description: string): DeepGuideLink => ({
  href,
  title,
  description,
  eyebrow: "Problem guide"
});

const bestLink = (href: string, title: string, description: string, eyebrow: string): DeepGuideLink => ({
  href,
  title,
  description,
  eyebrow
});

const ownershipProfiles: OwnershipExpansionProfile[] = [
  {
    slugBase: "honda-cr-v-2020",
    titleName: "Honda CR-V 2020",
    shortName: "CR-V",
    vehicleType: "compact SUV",
    image: "/images/photos/cars/honda-cr-v-2020.webp",
    relatedCars: ["honda-cr-v-2020"],
    relatedGenerations: ["honda-cr-v-rw-rt-facelift-2020-2022"],
    mainSymptom: "front brake noise",
    secondarySymptom: "front-end clunking",
    primaryRepair: "brake pads, rotors, and hardware",
    secondaryRepair: "front sway bar links and suspension bushings",
    maintenanceCards: [
      {
        eyebrow: "Brakes",
        title: "Quiet braking depends on hardware condition",
        text: "Pad material matters, but the CR-V also needs clean slide pins, healthy rotors, and hardware that is not binding. A pad-only repair can leave the same squeal in place."
      },
      {
        eyebrow: "Front suspension",
        title: "Small clunks deserve an early look",
        text: "Sway bar links and bushings are often the first front-end items to check when the SUV knocks over short bumps. Letting the noise continue makes the diagnosis less clear."
      },
      {
        eyebrow: "Tires",
        title: "Road hum can hide inside uneven wear",
        text: "The CR-V can sound rougher than it is when tire rotation is delayed or one tire starts wearing differently. Tire age, pressure, and wear pattern should be checked before wheel-end parts."
      },
      {
        eyebrow: "Battery reserve",
        title: "Short-trip use changes the starting budget",
        text: "Repeated short trips, accessory load, and colder starts make battery condition part of the ownership budget even when the rest of the SUV feels easy."
      }
    ],
    weakPoints: [
      "Front brake squeal should be diagnosed with rotor surface, caliper slide movement, and pad material together.",
      "A front-end clunk over small bumps often starts with links or bushings before it points to larger suspension work.",
      "Tire noise should be separated from wheel-bearing hum before a quiet family SUV gets an expensive parts list.",
      "Battery health deserves a real test if the CR-V sits outside, makes short trips, or starts weakly after several days.",
      "AWD examples need rear differential service records checked along with the usual oil, filter, brake fluid, and tire records."
    ],
    inspectionOrder: [
      "Check tire age, matching brand, tread depth, pressure, and wear at all four corners.",
      "Drive over a broken but safe road surface and note whether the front clunk happens on short, sharp impacts.",
      "Make several low-speed stops and inspect brake hardware if squeal, scrape, or vibration appears.",
      "Restart the engine after the drive and watch for slow cranking or voltage-sensitive behavior.",
      "Compare the service records with the seller's mileage story, especially brake work, brake fluid, tire rotations, and AWD service."
    ],
    overspending: [
      "Replacing front struts before links, bushings, and loose hardware have been checked.",
      "Buying pads alone when rotor condition, caliper slides, or hardware are causing the noise.",
      "Calling every road hum a wheel bearing before the tire wear pattern is understood.",
      "Ignoring battery reserve because the SUV starts normally during one warm test drive.",
      "Paying full retail for a CR-V that needs tires, brakes, and suspension noise diagnosis immediately."
    ],
    avoidCards: [
      {
        eyebrow: "Brake noise",
        title: "A squeal with no inspection record",
        text: "A seller who says the brakes are new but cannot explain rotor condition, hardware, or pad choice is leaving the buyer to sort out the real cause."
      },
      {
        eyebrow: "Front-end clunk",
        title: "A knock that gets dismissed as normal",
        text: "The CR-V should not need excuses for sharp clunks over small bumps. The repair may be simple, but the price should reflect diagnosis and parts."
      },
      {
        eyebrow: "Tire story",
        title: "Uneven or mismatched tires",
        text: "A practical SUV can still feel worn out when the tires are old, mismatched, or uneven. That also makes wheel-end diagnosis harder."
      },
      {
        eyebrow: "Short-trip wear",
        title: "Weak starts after sitting",
        text: "A low-mileage CR-V is not automatically a low-risk CR-V if the battery, charging behavior, and service history all point to short-trip use."
      }
    ],
    avoidList: [
      "Fresh brake pads installed without any note about rotor condition or caliper hardware.",
      "Front-end clunks that appear on the test drive and get explained away without an estimate.",
      "Tire wear that does not match the mileage, alignment story, or rotation records.",
      "A weak battery paired with missing service records and repeated short-trip ownership.",
      "AWD examples with no rear differential service evidence once mileage is no longer low."
    ],
    negotiable: [
      "A clear front sway bar link or bushing repair with no tire or alignment problems.",
      "Brakes that need a full, properly documented service rather than mystery noise chasing.",
      "A battery that fails testing while charging voltage and terminals look clean.",
      "Tires needed soon when the rest of the SUV drives straight, quiet, and consistent."
    ],
    relatedProblems: [
      problemLink(
        "/problems/front-brakes-squeal-at-low-speed-honda-cr-v-2020/",
        "Front brakes squeal at low speed on Honda CR-V 2020",
        "Best next step when the ownership budget starts with brake noise."
      ),
      problemLink(
        "/problems/front-end-clunk-over-bumps-honda-cr-v-2020/",
        "Front-end clunk over bumps on Honda CR-V 2020",
        "Best next step when the test drive exposes a sharp front-end knock."
      )
    ],
    relatedBest: [
      bestLink(
        "/best/best-front-brake-pads-for-honda-cr-v-2020/",
        "Best front brake pads for Honda CR-V 2020",
        "Good follow-up after brake hardware and rotor checks point toward pads.",
        "Front Brake Pads"
      ),
      bestLink(
        "/best/best-front-sway-bar-links-for-honda-cr-v-2020/",
        "Best front sway bar links for Honda CR-V 2020",
        "Good follow-up after the clunk is narrowed to front stabilizer hardware.",
        "Front Sway Bar Links"
      )
    ]
  },
  {
    slugBase: "mazda-cx-5-2020",
    titleName: "Mazda CX-5 2020",
    shortName: "CX-5",
    vehicleType: "compact SUV",
    image: "/images/photos/cars/mazda-cx-5-2020.webp",
    relatedCars: ["mazda-cx-5-2020"],
    relatedGenerations: ["mazda-cx-5-kf-2017-2021"],
    mainSymptom: "brake noise",
    secondarySymptom: "front-end clunking",
    primaryRepair: "pads, rotor surface, and brake hardware",
    secondaryRepair: "front sway bar links, bushings, and tire wear checks",
    maintenanceCards: [
      {
        eyebrow: "Brake refinement",
        title: "Noise matters because refinement is part of the value",
        text: "A CX-5 can still be reliable while feeling rough if the brakes squeal or pulse. Brake hardware, pad material, and rotor surface should be checked together."
      },
      {
        eyebrow: "Front suspension",
        title: "Small front noises change the whole feel",
        text: "The CX-5 is sensitive to worn links and bushings because the car is expected to feel tight. A small clunk should be priced before it becomes a broad suspension guess."
      },
      {
        eyebrow: "Tires and road hum",
        title: "Quiet tires protect the cabin feel",
        text: "Uneven wear, old tires, or a poor tire match can make a good CX-5 seem tired. Tire checks should happen before wheel bearings are blamed."
      },
      {
        eyebrow: "Service records",
        title: "Normal maintenance still decides value",
        text: "Oil changes, brake fluid, tire rotations, and any AWD-related service matter more than trim equipment once the SUV is several years old."
      }
    ],
    weakPoints: [
      "Brake squeal needs pad, rotor, and hardware checks together because cheap pad swaps can leave the same complaint behind.",
      "Front-end clunks often point toward stabilizer links or bushings before they justify larger suspension parts.",
      "Tire noise and wheel-bearing hum should be separated on a quiet road before parts are ordered.",
      "Cabin refinement drops quickly when tires, brakes, and small suspension noises stack up.",
      "AWD service records and tire match matter on examples that have seen winter or rough-road use."
    ],
    inspectionOrder: [
      "Inspect tires first for age, brand match, tread depth, and uneven inner-edge wear.",
      "Drive at neighborhood speed over small bumps and listen for short, sharp front-end knocks.",
      "Test the brakes cold and warm, then inspect pad life, rotor surface, and slide movement.",
      "Drive at steady highway speed and separate tire roar from a speed-linked hub noise.",
      "Check records for oil, brake fluid, tire rotations, and any AWD service before judging the price."
    ],
    overspending: [
      "Buying sporty brake pads when the actual problem is glazed pads, rotor surface, or stuck hardware.",
      "Replacing struts before links and bushings have been checked under load.",
      "Treating tire roar like a wheel bearing without rotating or inspecting the tires first.",
      "Ignoring a weak service history because the interior and paint still look premium.",
      "Overpaying for trim equipment while immediate tires, brakes, and suspension work are due."
    ],
    avoidCards: [
      {
        eyebrow: "Refinement loss",
        title: "A CX-5 that feels older than its mileage",
        text: "Brake noise, road hum, and clunks together are a pricing problem. The SUV may still be fixable, but it should not be priced like a clean one."
      },
      {
        eyebrow: "Front suspension",
        title: "Repeated clunks without a clear repair path",
        text: "A vague front-end noise can be simple or annoying. The important part is whether the seller has a credible inspection or only a broad explanation."
      },
      {
        eyebrow: "Tires",
        title: "Uneven tire wear on a quiet-road test",
        text: "A CX-5 that drones, pulls, or changes noise with pavement needs tire and alignment checks before the price makes sense."
      },
      {
        eyebrow: "Records",
        title: "Premium trim, ordinary maintenance gaps",
        text: "Leather, audio, or appearance packages do not offset missing oil, brake fluid, tire, and AWD records."
      }
    ],
    avoidList: [
      "A car that has brake squeal, road hum, and a front-end clunk during the same short drive.",
      "New pads installed without any sign that rotors and hardware were inspected.",
      "Tires that are old, mismatched, or worn unevenly enough to hide other noises.",
      "AWD examples with poor tire history or no service evidence beyond oil changes.",
      "A seller who treats every refinement complaint as harmless because the vehicle still drives."
    ],
    negotiable: [
      "A clear brake refresh when rotor and caliper condition are understood.",
      "A front stabilizer repair with no steering looseness, tire issue, or alignment concern.",
      "Tires needed soon when the SUV is otherwise quiet, straight, and well documented.",
      "Minor cosmetic wear after the mechanical inspection supports the asking price."
    ],
    relatedProblems: [
      problemLink(
        "/problems/front-brakes-squeal-at-low-speed-mazda-cx-5-2020/",
        "Front brakes squeal at low speed on Mazda CX-5 2020",
        "Best next step when brake refinement is the main concern."
      ),
      problemLink(
        "/problems/front-end-clunk-over-bumps-mazda-cx-5-2020/",
        "Front-end clunk over bumps on Mazda CX-5 2020",
        "Best next step when the test drive reveals front suspension noise."
      )
    ],
    relatedBest: [
      bestLink(
        "/best/best-brake-pads-for-mazda-cx-5-2020/",
        "Best brake pads for Mazda CX-5 2020",
        "Good follow-up after the brake inspection points toward pad replacement.",
        "Brake Pads"
      ),
      bestLink(
        "/best/best-front-sway-bar-links-for-mazda-cx-5-2020/",
        "Best front sway bar links for Mazda CX-5 2020",
        "Good follow-up after the clunk is narrowed to stabilizer hardware.",
        "Front Sway Bar Links"
      )
    ]
  },
  {
    slugBase: "toyota-camry-2020",
    titleName: "Toyota Camry 2020",
    shortName: "Camry",
    vehicleType: "midsize sedan",
    image: "/images/photos/cars/toyota-camry-2020.webp",
    relatedCars: ["toyota-camry-2020"],
    relatedGenerations: ["toyota-camry-xv70-2018-2020"],
    mainSymptom: "brake squeal",
    secondarySymptom: "highway vibration",
    primaryRepair: "brake pads, rotor surface, and hardware",
    secondaryRepair: "tires, wheel balance, and road-speed diagnosis",
    maintenanceCards: [
      {
        eyebrow: "Brakes",
        title: "Quiet daily driving depends on the full brake job",
        text: "The Camry is expected to feel calm. Pad material, rotor surface, hardware, and slide movement all matter when a simple brake squeal keeps returning."
      },
      {
        eyebrow: "Tires and balance",
        title: "Highway vibration should start with the tire story",
        text: "A sedan that shakes at speed needs tire age, tread wear, wheel balance, and wheel condition checked before front-end parts are blamed."
      },
      {
        eyebrow: "Battery and idle quality",
        title: "Small drivability changes still deserve maintenance checks",
        text: "Weak starts, rough idle, and delayed tune-up items can make a reliable Camry feel less sorted than it should."
      },
      {
        eyebrow: "Records",
        title: "Routine service is the value signal",
        text: "Oil history, brake fluid, tire rotations, coolant, and spark plug timing tell more about the car than reputation alone."
      }
    ],
    weakPoints: [
      "Brake squeal should be checked with rotor surface and hardware condition, not only pad remaining life.",
      "Highway vibration needs tire and wheel checks before suspension parts are priced.",
      "Rough idle and weak battery behavior can be early signs of delayed basic maintenance.",
      "Road hum should be separated from tire wear before wheel-bearing work is approved.",
      "A reliable model still becomes expensive when several ordinary service items are overdue at the same time."
    ],
    inspectionOrder: [
      "Start with tires: age, matching set, tread depth, balance history, and uneven wear.",
      "Drive at highway speed and note whether vibration follows speed, braking, or a specific road surface.",
      "Make low-speed stops and medium stops to separate squeal, pulse, and steering shake.",
      "Check idle quality, starting behavior, and maintenance records for plugs, coolant, and fluids.",
      "Price the car with immediate tires, brakes, battery, and tune-up needs included."
    ],
    overspending: [
      "Replacing front suspension parts before tire balance and wheel condition are checked.",
      "Buying pads only when rotor surface or caliper hardware explains the squeal.",
      "Treating a reliable badge as proof that delayed service can be ignored.",
      "Chasing a road hum without first rotating and inspecting the tires.",
      "Paying clean-car money for a Camry that needs several basic services right away."
    ],
    avoidCards: [
      {
        eyebrow: "Highway test",
        title: "A shake that appears only at speed",
        text: "Speed-linked vibration can be simple, but the price should account for tires, balance, wheels, and diagnosis before bigger parts are considered."
      },
      {
        eyebrow: "Brake noise",
        title: "Squeal after a recent pad job",
        text: "Recent pads are not proof of a solved brake issue if hardware, rotor surface, and caliper movement were never documented."
      },
      {
        eyebrow: "Maintenance gaps",
        title: "Reputation covering for missing records",
        text: "A Camry can be dependable and still need catch-up service. Missing fluid, tire, and tune-up records should affect the price."
      },
      {
        eyebrow: "Road noise",
        title: "A quiet sedan that is no longer quiet",
        text: "Tire roar, hum, and vibration make the car feel older quickly. The source should be narrow enough to price."
      }
    ],
    avoidList: [
      "A highway vibration with no tire, wheel, or balance evidence.",
      "Brake squeal after recent parts with no note about rotors or hardware.",
      "A rough idle paired with overdue tune-up records.",
      "Tires that are mismatched or worn enough to hide wheel-end noise.",
      "A seller relying on Toyota reputation instead of maintenance evidence."
    ],
    negotiable: [
      "A tire set or balance correction when the rest of the car drives straight and quiet.",
      "A complete brake service when rotor and hardware condition are known.",
      "A battery or tune-up item that tests poorly but has a clear repair path.",
      "Minor road noise after tires and wheel bearings have been checked."
    ],
    relatedProblems: [
      problemLink(
        "/problems/brake-squeal-at-low-speed-toyota-camry-2020/",
        "Brake squeal at low speed on Toyota Camry 2020",
        "Best next step when brake noise is the first complaint."
      ),
      problemLink(
        "/problems/steering-wheel-vibrates-at-highway-speed-toyota-camry-2020/",
        "Steering wheel vibrates at highway speed on Toyota Camry 2020",
        "Best next step when the test drive exposes highway shake."
      )
    ],
    relatedBest: [
      bestLink(
        "/best/best-brake-pads-for-toyota-camry-2020/",
        "Best brake pads for Toyota Camry 2020",
        "Good follow-up after the brake diagnosis points toward pad replacement.",
        "Brake Pads"
      ),
      bestLink(
        "/best/best-tires-for-toyota-camry-2020-highway-vibration/",
        "Best tires for Toyota Camry 2020 highway vibration",
        "Good follow-up after the vibration points toward tires or tire condition.",
        "Tires"
      )
    ]
  },
  {
    slugBase: "vw-golf-gti-2020",
    titleName: "VW Golf GTI 2020",
    shortName: "GTI",
    vehicleType: "hot hatch",
    image: "/images/photos/cars/vw-golf-gti-2020.webp",
    relatedCars: ["vw-golf-gti-2020"],
    relatedGenerations: ["volkswagen-golf-gti-mk7-5-facelift-2018-2021"],
    mainSymptom: "idle misfires",
    secondarySymptom: "hesitation under acceleration",
    primaryRepair: "spark plugs, ignition coils, and intake checks",
    secondaryRepair: "brake and front-end wear checks",
    maintenanceCards: [
      {
        eyebrow: "Ignition",
        title: "Plugs and coils shape the first ownership budget",
        text: "The GTI reacts quickly when plugs age, coils weaken, or short-trip use loads up the ignition system. Misfire diagnosis should start with service history, not random upgrades."
      },
      {
        eyebrow: "Brakes",
        title: "Street brake parts need to match real driving",
        text: "Aggressive pads can add noise and dust without solving the daily-driving problem. Rotor surface, pad compound, and hardware condition should match how the car is driven."
      },
      {
        eyebrow: "Front end",
        title: "Sharp steering exposes worn hardware",
        text: "Small clunks and looseness are easier to feel in a GTI than in a softer car. Links, bushings, mounts, and tires should be checked before the car is judged harshly."
      },
      {
        eyebrow: "Modification history",
        title: "A tune changes the maintenance conversation",
        text: "Power modifications, intake changes, and hard use make plug intervals, oil history, and cooling behavior more important than the listing photos."
      }
    ],
    weakPoints: [
      "Misfires at idle should be checked with plug age, coil behavior, and scan data before parts are guessed.",
      "Hesitation under acceleration deserves a clean split between ignition, intake, fuel, and tune history.",
      "Brake noise or vibration can come from pad compound, rotor surface, deposits, or hardware rather than one universal fix.",
      "Front-end clunks and tire wear affect steering feel quickly on a GTI.",
      "Modified examples need stricter records because the same mileage can mean very different use."
    ],
    inspectionOrder: [
      "Scan for misfire, fuel trim, and boost-related codes before the test drive if possible.",
      "Check plug and coil service records, then confirm whether the car has a tune or intake modifications.",
      "Drive gently and then under moderate load to see whether hesitation appears at idle, tip-in, or boost.",
      "Check brake feel, pad compound, rotor condition, and tire wear after the drive.",
      "Inspect front-end looseness, mount noise, and uneven tire wear before accepting a performance-car explanation."
    ],
    overspending: [
      "Buying coils without checking plug age, codes, and whether one cylinder is actually repeating.",
      "Installing aggressive brake pads when the car mainly needs clean, quiet street braking.",
      "Ignoring tune history because the car feels fast during one short test drive.",
      "Replacing suspension parts before tire condition and front-end hardware are checked together.",
      "Paying a premium for modifications that increase future maintenance risk."
    ],
    avoidCards: [
      {
        eyebrow: "Misfire behavior",
        title: "A rough idle with no scan history",
        text: "Idle misfires can be manageable, but a GTI should not be bought blind when codes, plugs, coils, and tune history are unknown."
      },
      {
        eyebrow: "Acceleration",
        title: "Hesitation under load",
        text: "A car that stumbles when boost builds needs a narrow diagnosis. Guessing ignition parts after purchase can hide intake, fuel, or tune problems."
      },
      {
        eyebrow: "Mods",
        title: "Power changes without maintenance proof",
        text: "A modified GTI can be fine, but the service records need to be better than average, not thinner than average."
      },
      {
        eyebrow: "Brake and tire wear",
        title: "Performance look, neglected basics",
        text: "Nice wheels, exhaust, or cosmetics do not offset poor tires, noisy brakes, or loose front-end hardware."
      }
    ],
    avoidList: [
      "A rough idle with fresh coils but no plug, code, or cylinder-specific diagnosis.",
      "Hesitation under acceleration that appears only when the car is warm and under load.",
      "A tune or intake modification with no supporting oil, plug, and inspection history.",
      "Noisy aggressive brake parts on a car that will mostly commute.",
      "Uneven tires, front-end clunks, and vague claims that the car only needs alignment."
    ],
    negotiable: [
      "A plug and coil service when scan data supports the diagnosis.",
      "Street-focused brake parts when the current setup is noisy but the system is otherwise healthy.",
      "Front links, bushings, or mounts when tire wear and alignment look controlled.",
      "A clean stock car with normal wear and a price that reflects upcoming maintenance."
    ],
    relatedProblems: [
      problemLink(
        "/problems/engine-misfires-at-idle-vw-golf-gti-2020/",
        "Engine misfires at idle on VW Golf GTI 2020",
        "Best next step when idle quality is the main warning sign."
      ),
      problemLink(
        "/problems/engine-hesitates-under-acceleration-vw-golf-gti-2020/",
        "Engine hesitates under acceleration on VW Golf GTI 2020",
        "Best next step when the car stumbles under load."
      )
    ],
    relatedBest: [
      bestLink(
        "/best/best-spark-plugs-for-vw-golf-gti-2020/",
        "Best spark plugs for VW Golf GTI 2020",
        "Good follow-up after plug age or misfire data points toward ignition service.",
        "Spark Plugs"
      ),
      bestLink(
        "/best/best-ignition-coils-for-vw-golf-gti-2020/",
        "Best ignition coils for VW Golf GTI 2020",
        "Good follow-up after diagnosis supports coil replacement.",
        "Ignition Coils"
      )
    ]
  }
];

const serviceProfiles: ServiceExpansionProfile[] = [
  {
    slugBase: "chevrolet-silverado-1500-2020",
    titleName: "Chevrolet Silverado 1500 2020",
    shortName: "Silverado",
    vehicleType: "full-size truck",
    image: "/images/photos/cars/chevrolet-silverado-1500-2020.webp",
    relatedCars: ["chevrolet-silverado-1500-2020"],
    relatedGenerations: ["chevrolet-silverado-1500-t1xx-2019-2024"],
    intervalTheme: "truck use changes the service budget",
    firstPriority: "oil, tires, brake condition, and towing-related fluid discipline",
    secondPriority: "tire balance, brake heat, wheel-end noise, and service records that match real truck use",
    serviceCards: [
      {
        eyebrow: "Every service",
        title: "Tires and brakes need truck-level attention",
        text: "A Silverado that tows, hauls, or runs larger tires should have tire pressure, tread, brake pad life, and rotor condition checked more carefully than a light-use commuter."
      },
      {
        eyebrow: "Fluids",
        title: "Towing history changes interval confidence",
        text: "Transmission, differential, transfer case, and coolant records matter more when the truck has hitch wear, bed wear, or repeated heat load."
      },
      {
        eyebrow: "Wheel end",
        title: "Road-speed noise should be tracked early",
        text: "Truck tires can be loud, but a hum that grows with speed still deserves tire rotation, balance, wheel, and hub checks before it gets worse."
      },
      {
        eyebrow: "Before towing",
        title: "Service before load, not after trouble",
        text: "Brake feel, tire load rating, pressures, lights, cooling behavior, and fluid condition should be checked before a long tow."
      }
    ],
    intervalList: [
      "Engine oil and filter: keep the interval conservative when the truck tows, idles, or runs short trips.",
      "Tire rotation and pressure check: repeat consistently because uneven tire wear quickly creates vibration and road noise.",
      "Brake inspection: check pad life, rotor condition, caliper hardware, and brake fluid condition before heavy use.",
      "Transmission, differential, and transfer case service: verify the schedule against towing, hauling, 4WD use, and heat exposure.",
      "Coolant, belts, hoses, and battery: inspect before summer towing or long highway trips."
    ],
    records: [
      "Oil changes that line up with mileage and use, not only dashboard reminders.",
      "Tire rotation and balance records when highway vibration has appeared before.",
      "Brake work that lists pads, rotor condition, hardware, and fluid service.",
      "Fluid service evidence for 4WD, towing, or higher-load use.",
      "Proof that the current tires match the truck's load and driving pattern."
    ],
    roadTripChecks: [
      "Confirm tire load rating, pressures, tread depth, and spare tire condition.",
      "Make a highway brake check before the truck is loaded.",
      "Listen for wheel-end hum before and after the tires warm up.",
      "Check coolant level, belt condition, and battery age before a hot trip.",
      "Recheck trailer lights, hitch setup, and brake feel before leaving town."
    ],
    relatedProblems: [
      problemLink(
        "/problems/steering-wheel-vibrates-at-highway-speed-chevrolet-silverado-1500-2020/",
        "Steering wheel vibrates at highway speed on Chevrolet Silverado 1500 2020",
        "Best next step when service planning starts with highway shake."
      ),
      problemLink(
        "/problems/brake-pedal-pulsates-when-slowing-chevrolet-silverado-1500-2020/",
        "Brake pedal pulsates when slowing on Chevrolet Silverado 1500 2020",
        "Best next step when brake service needs a clearer diagnosis."
      )
    ],
    relatedBest: [
      bestLink(
        "/best/best-tires-for-chevrolet-silverado-1500-2020/",
        "Best tires for Chevrolet Silverado 1500 2020",
        "Good follow-up when tire age, use, or vibration points toward replacement.",
        "Tires"
      ),
      bestLink(
        "/best/best-brake-pads-for-chevrolet-silverado-1500-2020/",
        "Best brake pads for Chevrolet Silverado 1500 2020",
        "Good follow-up after the brake inspection confirms pads are due.",
        "Brake Pads"
      )
    ]
  },
  {
    slugBase: "subaru-forester-2020",
    titleName: "Subaru Forester 2020",
    shortName: "Forester",
    vehicleType: "AWD compact SUV",
    image: "/images/photos/cars/subaru-forester-2020.webp",
    relatedCars: ["subaru-forester-2020"],
    relatedGenerations: ["subaru-forester-sk-2019-2024"],
    intervalTheme: "AWD confidence depends on tires, fluids, and battery reserve",
    firstPriority: "matched tires, oil service, brake inspections, and battery testing",
    secondPriority: "wheel-bearing noise, tire rotation records, and CVT or differential service evidence",
    serviceCards: [
      {
        eyebrow: "Tires",
        title: "Matched tires protect the AWD feel",
        text: "The Forester needs tire size, tread depth, wear pattern, and rotation history checked consistently because mismatched tires make every other diagnosis less reliable."
      },
      {
        eyebrow: "Battery",
        title: "Short trips make reserve testing important",
        text: "Weak starts after short drives should not wait until winter. Battery age, terminal condition, and charging behavior belong in routine service."
      },
      {
        eyebrow: "Wheel end",
        title: "Hum should not be lost in tire noise",
        text: "A growing road-speed hum needs a calm tire and wheel-bearing check before long trips or winter driving."
      },
      {
        eyebrow: "Fluids",
        title: "AWD service records matter as mileage rises",
        text: "Oil, brake fluid, differential-related service, and CVT records are the paperwork that keeps the Forester's simple ownership story credible."
      }
    ],
    intervalList: [
      "Engine oil and filter: keep records clear and consistent, especially on short-trip or winter-driven cars.",
      "Tire rotation: track tread depth across all four tires and correct uneven wear early.",
      "Brake inspection and brake fluid: check before hills, winter use, or long family trips.",
      "Battery test: repeat before cold weather and after repeated short-trip use.",
      "CVT and differential-related service: verify against the maintenance schedule and driving conditions."
    ],
    records: [
      "Four matching tires with rotation history and similar tread depth.",
      "Battery test results or replacement date, not just a recent jump-start story.",
      "Brake service notes with fluid condition and caliper hardware included.",
      "Wheel-bearing or tire-noise diagnosis if a hum has already appeared.",
      "CVT and AWD-related service evidence once mileage is no longer low."
    ],
    roadTripChecks: [
      "Check tire pressure, tread, and any road-speed hum on a quiet road.",
      "Restart the car after errands to catch weak battery behavior.",
      "Confirm brake feel before a loaded trip or mountain drive.",
      "Inspect wipers, lights, coolant, and accessory belt condition.",
      "Carry the service record forward so tire and AWD checks stay traceable."
    ],
    relatedProblems: [
      problemLink(
        "/problems/humming-noise-that-gets-louder-with-speed-subaru-forester-2020/",
        "Humming noise that gets louder with speed on Subaru Forester 2020",
        "Best next step when road noise becomes part of the service plan."
      ),
      problemLink(
        "/problems/battery-struggles-after-short-trips-subaru-forester-2020/",
        "Battery struggles after short trips on Subaru Forester 2020",
        "Best next step when starting behavior changes between services."
      )
    ],
    relatedBest: [
      bestLink(
        "/best/best-wheel-bearings-for-subaru-forester-2020/",
        "Best wheel bearings for Subaru Forester 2020",
        "Good follow-up after tire checks support a wheel-bearing repair.",
        "Wheel Bearings"
      ),
      bestLink(
        "/best/best-batteries-for-subaru-forester-2020/",
        "Best batteries for Subaru Forester 2020",
        "Good follow-up after battery testing confirms replacement is due.",
        "Batteries"
      )
    ]
  },
  {
    slugBase: "nissan-rogue-2021",
    titleName: "Nissan Rogue 2021",
    shortName: "Rogue",
    vehicleType: "compact SUV",
    image: "/images/photos/cars/nissan-rogue-2021.webp",
    relatedCars: ["nissan-rogue-2021"],
    relatedGenerations: ["nissan-rogue-t33-2021-2025"],
    intervalTheme: "battery reserve and brake refinement decide early ownership feel",
    firstPriority: "battery testing, oil service, brake condition, and tire rotation records",
    secondPriority: "short-trip use, brake squeal, tire wear, and CVT service evidence",
    serviceCards: [
      {
        eyebrow: "Battery",
        title: "Reserve should be checked before it becomes a no-start",
        text: "A Rogue that sits or makes short trips needs battery age, resting voltage, charging behavior, and terminal condition checked during routine service."
      },
      {
        eyebrow: "Brakes",
        title: "Low-speed squeal needs complete brake service",
        text: "Pad condition, rotor surface, hardware, and caliper movement should be checked together so brake noise does not return after a quick pad swap."
      },
      {
        eyebrow: "Tires",
        title: "Tire wear shapes road noise and comfort",
        text: "Rotation records, tread depth, pressure, and alignment clues matter because a small SUV can feel rough quickly when tires wear unevenly."
      },
      {
        eyebrow: "CVT",
        title: "Fluid history should stay visible",
        text: "CVT service confidence comes from records and driving behavior, especially as mileage rises or the car has lived in stop-and-go use."
      }
    ],
    intervalList: [
      "Engine oil and filter: track consistent intervals and avoid stretching them on short-trip cars.",
      "Battery test: check before winter, before travel, and anytime the car has sat for several days.",
      "Brake inspection: include pad wear, rotor surface, hardware, and fluid condition.",
      "Tire rotation and alignment check: monitor road noise, vibration, and uneven wear.",
      "CVT service review: match records to mileage, heat exposure, and city-driving load."
    ],
    records: [
      "Battery replacement date or test results when no-start complaints have happened.",
      "Brake service notes that include hardware and rotor condition.",
      "Tire rotation history and matching tires with even tread depth.",
      "Oil and filter records that fit city driving rather than ideal conditions only.",
      "CVT maintenance evidence when the Rogue has meaningful mileage."
    ],
    roadTripChecks: [
      "Test the battery after the car has sat, not only right after driving.",
      "Confirm brake feel and noise during low-speed stops.",
      "Check tire pressure, tread, and road noise before highway travel.",
      "Look for warning lights or hesitation during steady-speed driving.",
      "Verify that fluids, lights, wipers, and the spare setup are ready before departure."
    ],
    relatedProblems: [
      problemLink(
        "/problems/battery-goes-dead-after-sitting-nissan-rogue-2021/",
        "Battery goes dead after sitting on Nissan Rogue 2021",
        "Best next step when service planning starts with weak battery reserve."
      ),
      problemLink(
        "/problems/front-brakes-squeal-at-low-speed-nissan-rogue-2021/",
        "Front brakes squeal at low speed on Nissan Rogue 2021",
        "Best next step when brake service needs more than a pad guess."
      )
    ],
    relatedBest: [
      bestLink(
        "/best/best-batteries-for-nissan-rogue-2021/",
        "Best batteries for Nissan Rogue 2021",
        "Good follow-up after battery testing confirms weak reserve.",
        "Batteries"
      ),
      bestLink(
        "/best/best-brake-pads-for-nissan-rogue-2021/",
        "Best brake pads for Nissan Rogue 2021",
        "Good follow-up after brake inspection confirms pads are due.",
        "Brake Pads"
      )
    ]
  },
  {
    slugBase: "hyundai-tucson-2020",
    titleName: "Hyundai Tucson 2020",
    shortName: "Tucson",
    vehicleType: "compact SUV",
    image: "/images/photos/cars/hyundai-tucson-2020.webp",
    relatedCars: ["hyundai-tucson-2020"],
    relatedGenerations: ["hyundai-tucson-tl-2019-2021"],
    intervalTheme: "simple maintenance keeps small complaints from stacking up",
    firstPriority: "oil service, brake checks, battery testing, and tire rotation",
    secondPriority: "low-speed brake squeal, weak starts, tire wear, and fluid records",
    serviceCards: [
      {
        eyebrow: "Brakes",
        title: "Brake noise should be handled as a service item",
        text: "Low-speed squeal usually needs pad material, rotor surface, slide movement, and hardware checked together before parts are bought."
      },
      {
        eyebrow: "Battery",
        title: "Weak starts point toward short-trip service needs",
        text: "Battery reserve, terminal condition, and charging behavior should be part of normal service on a Tucson that sits or makes short trips."
      },
      {
        eyebrow: "Tires",
        title: "Rotation keeps the cabin quieter",
        text: "Uneven tire wear can make the Tucson feel less refined than it is. Pressure, tread, and alignment clues deserve a look at every service."
      },
      {
        eyebrow: "Fluids",
        title: "Records keep the ownership story simple",
        text: "Oil, coolant, brake fluid, and any driveline service records are the items that separate a tidy used Tucson from a deferred-maintenance one."
      }
    ],
    intervalList: [
      "Engine oil and filter: keep intervals conservative when the SUV sees city use or short trips.",
      "Brake inspection: check pads, rotors, caliper hardware, and brake fluid condition.",
      "Battery test: repeat before cold weather or anytime starting speed changes.",
      "Tire rotation and pressure check: track uneven wear before road noise grows.",
      "Coolant, belts, hoses, and cabin filter: inspect as mileage rises and seasonal use changes."
    ],
    records: [
      "Brake work that includes hardware and rotor notes, not only pad brand.",
      "Battery age or test results when weak-start complaints have appeared.",
      "Tire rotation history and alignment evidence when wear is uneven.",
      "Oil and fluid records that match mileage and use.",
      "Clear notes for any repeated brake, battery, or tire complaint."
    ],
    roadTripChecks: [
      "Confirm starting speed after the Tucson has sat overnight.",
      "Check brake noise during low-speed stops before the trip starts.",
      "Inspect tire pressure, tread depth, and uneven wear.",
      "Verify coolant level, lights, wipers, and belt condition.",
      "Listen for road hum at steady speed before loading the car."
    ],
    relatedProblems: [
      problemLink(
        "/problems/brake-squeal-at-low-speed-hyundai-tucson-2020/",
        "Brake squeal at low speed on Hyundai Tucson 2020",
        "Best next step when brake service starts with noise."
      ),
      problemLink(
        "/problems/battery-struggles-after-short-trips-hyundai-tucson-2020/",
        "Battery struggles after short trips on Hyundai Tucson 2020",
        "Best next step when starting behavior changes between services."
      )
    ],
    relatedBest: [
      bestLink(
        "/best/best-brake-pads-for-hyundai-tucson-2020/",
        "Best brake pads for Hyundai Tucson 2020",
        "Good follow-up after the brake inspection supports replacement.",
        "Brake Pads"
      ),
      bestLink(
        "/best/best-batteries-for-hyundai-tucson-2020/",
        "Best batteries for Hyundai Tucson 2020",
        "Good follow-up after battery testing confirms weak reserve.",
        "Batteries"
      )
    ]
  },
  {
    slugBase: "honda-cr-v-2020",
    titleName: "Honda CR-V 2020",
    shortName: "CR-V",
    vehicleType: "compact SUV",
    image: "/images/photos/cars/honda-cr-v-2020.webp",
    relatedCars: ["honda-cr-v-2020"],
    relatedGenerations: ["honda-cr-v-rw-rt-facelift-2020-2022"],
    intervalTheme: "brakes, tires, and AWD records keep ownership predictable",
    firstPriority: "oil service, brake inspections, tire rotations, and battery testing",
    secondPriority: "front-end clunks, brake squeal, road hum, and rear differential records on AWD examples",
    serviceCards: [
      {
        eyebrow: "Brakes",
        title: "Brake service should include hardware",
        text: "The CR-V's brake complaints are easier to control when pad life, rotor surface, slide pins, hardware, and fluid condition are checked at the same visit."
      },
      {
        eyebrow: "Tires",
        title: "Rotation protects ride quality",
        text: "Tire pressure, matching tread, and rotation history help keep road hum from becoming confused with wheel-end trouble."
      },
      {
        eyebrow: "Front end",
        title: "Clunks should be checked before they spread",
        text: "Sway bar links, bushings, and loose hardware are worth checking early because small front-end noises make the SUV feel older quickly."
      },
      {
        eyebrow: "AWD service",
        title: "Rear differential records matter on AWD cars",
        text: "AWD CR-Vs need service evidence beyond oil changes as mileage rises, especially if the car sees winter roads, hills, or repeated family trips."
      }
    ],
    intervalList: [
      "Engine oil and filter: keep records consistent and avoid stretching intervals on short-trip cars.",
      "Tire rotation and pressure check: monitor road hum, uneven wear, and matching tread depth.",
      "Brake inspection and brake fluid: check pads, rotors, hardware, caliper slides, and fluid condition.",
      "Battery test: repeat before cold weather and after repeated short-trip use.",
      "AWD rear differential service: verify records on AWD examples as mileage rises."
    ],
    records: [
      "Oil and filter history that matches mileage and daily use.",
      "Brake service notes with hardware, rotor, and fluid condition included.",
      "Tire rotations and matching tires across the car.",
      "Battery test or replacement date when starts have become slower.",
      "Rear differential service notes on AWD examples."
    ],
    roadTripChecks: [
      "Check tire pressure, tread depth, and road hum before highway driving.",
      "Make low-speed stops and listen for squeal before loading the car.",
      "Drive over small bumps and listen for front-end clunks.",
      "Confirm battery health after the car has sat overnight.",
      "Verify fluids, lights, wipers, and any AWD service needs before a long trip."
    ],
    relatedProblems: [
      problemLink(
        "/problems/front-brakes-squeal-at-low-speed-honda-cr-v-2020/",
        "Front brakes squeal at low speed on Honda CR-V 2020",
        "Best next step when routine brake service starts with noise."
      ),
      problemLink(
        "/problems/front-end-clunk-over-bumps-honda-cr-v-2020/",
        "Front-end clunk over bumps on Honda CR-V 2020",
        "Best next step when interval checks reveal front-end noise."
      )
    ],
    relatedBest: [
      bestLink(
        "/best/best-front-brake-pads-for-honda-cr-v-2020/",
        "Best front brake pads for Honda CR-V 2020",
        "Good follow-up after the brake inspection confirms pads are due.",
        "Front Brake Pads"
      ),
      bestLink(
        "/best/best-front-sway-bar-links-for-honda-cr-v-2020/",
        "Best front sway bar links for Honda CR-V 2020",
        "Good follow-up after the clunk is narrowed to stabilizer hardware.",
        "Front Sway Bar Links"
      )
    ]
  }
];

function buildMaintenanceGuide(profile: OwnershipExpansionProfile): DeepOwnershipGuide {
  return {
    slug: `${profile.slugBase}-maintenance-costs-and-weak-points`,
    title: `${profile.titleName} maintenance costs and weak points`,
    href: `/guides/${profile.slugBase}-maintenance-costs-and-weak-points/`,
    description: `${profile.titleName} maintenance costs explained through ${profile.mainSymptom}, ${profile.secondarySymptom}, and the repairs most likely to shape the first ownership budget.`,
    eyebrow: "Maintenance guide",
    image: profile.image,
    relatedCars: profile.relatedCars,
    relatedGenerations: profile.relatedGenerations,
    intro: `${profile.titleName} costs stay easier to control when normal wear is priced before it becomes a vague repair list. The first budget pass should separate ${profile.mainSymptom}, ${profile.secondarySymptom}, ${profile.primaryRepair}, and ${profile.secondaryRepair}.`,
    modifiedTime,
    editorialSummary: `${profile.titleName} maintenance guidance focused on the wear items that most often change running cost and buying confidence.`,
    trustSummary: `Start with ${profile.mainSymptom}, ${profile.secondarySymptom}, and maintenance records before approving a repair estimate or paying clean-car money.`,
    badges: ["Maintenance guide", "Cost-focused", "Used ownership"],
    summaryPoints: [
      `${profile.mainSymptom} and ${profile.secondarySymptom} should be diagnosed separately before parts are bought.`,
      `${profile.primaryRepair} usually decide the first repair budget more than accessories or cosmetic condition.`,
      `${profile.secondaryRepair} can turn a good ${profile.vehicleType} into a frustrating one when the clues are ignored.`,
      "A good record file matters because ordinary wear gets expensive when several small jobs arrive together."
    ],
    sections: [
      {
        id: "cost-areas",
        title: "Where the money usually goes first",
        intro: `Most early ${profile.shortName} costs come from ordinary wear that has not been separated cleanly enough.`,
        cards: profile.maintenanceCards
      },
      {
        id: "weak-points",
        title: "Weak points worth budgeting for",
        intro: `These items are not automatic failures, but they are the checks that decide whether the ${profile.shortName} stays predictable.`,
        list: profile.weakPoints
      },
      {
        id: "inspection-order",
        title: "Inspection order",
        intro: "Work through the visible checks before accepting a broad estimate.",
        ordered: profile.inspectionOrder
      },
      {
        id: "overspending",
        title: "How owners overspend",
        intro: "The expensive path usually starts when separate symptoms are treated like one large repair.",
        list: profile.overspending
      },
      {
        id: "final-checkpoint",
        title: "Final budget checkpoint",
        intro: `A fair ${profile.shortName} budget should make the first repair month easy to predict.`,
        paragraphs: [
          `${profile.titleName} ownership is easiest when the first repair decision is specific. ${profile.mainSymptom}, ${profile.secondarySymptom}, tire condition, and service records should point toward the same story before money is spent.`,
          `The right example does not need to be perfect. It needs wear that matches the mileage, a price that respects the immediate jobs, and records strong enough to separate maintenance from neglect.`
        ]
      }
    ],
    faqs: [
      {
        question: `What usually costs money first on a ${profile.titleName}?`,
        answer: `${profile.mainSymptom}, ${profile.secondarySymptom}, and catch-up service usually shape the first ownership budget before anything unusual is considered.`
      },
      {
        question: `Is the ${profile.titleName} expensive to maintain?`,
        answer: `It does not have to be. Costs stay more predictable when ${profile.primaryRepair} and ${profile.secondaryRepair} are checked before several small issues stack up.`
      },
      {
        question: "What should be checked before buying one used?",
        answer: `Check tires, brakes, service records, starting behavior, and the exact symptom that appears on the test drive. The price should reflect any immediate ${profile.primaryRepair} or ${profile.secondaryRepair}.`
      }
    ],
    relatedProblems: profile.relatedProblems,
    relatedBest: profile.relatedBest
  };
}

function buildAvoidGuide(profile: OwnershipExpansionProfile): DeepOwnershipGuide {
  return {
    slug: `${profile.slugBase}-what-to-avoid`,
    title: `${profile.titleName}: what to avoid`,
    href: `/guides/${profile.slugBase}-what-to-avoid/`,
    description: `Used ${profile.titleName} examples to avoid, including unresolved ${profile.mainSymptom}, ${profile.secondarySymptom}, weak maintenance records, and repairs that are too vague to price.`,
    eyebrow: "Avoid guide",
    image: profile.image,
    relatedCars: profile.relatedCars,
    relatedGenerations: profile.relatedGenerations,
    intro: `The weak ${profile.titleName} examples are usually the ones where normal wear has become vague. Walk in with a plan for ${profile.mainSymptom}, ${profile.secondarySymptom}, service records, and tire condition before trusting the asking price.`,
    modifiedTime,
    editorialSummary: `A buyer-focused ${profile.titleName} checklist for separating normal wear from examples that deserve a discount or a pass.`,
    trustSummary: `Let the test drive and records decide whether the ${profile.shortName} is a clean buy or a catch-up-maintenance project.`,
    badges: ["Avoid guide", "Used buyer checks", "Condition-focused"],
    summaryPoints: [
      `Avoid examples where ${profile.mainSymptom} and ${profile.secondarySymptom} are both present but neither has a clear estimate.`,
      "Missing service records should change the price, even on models with strong reputations.",
      "Tire, brake, battery, and front-end clues matter because they are easy to underprice during a quick test drive.",
      "A narrow problem can be negotiated. Several vague problems at once should slow the buying decision."
    ],
    sections: [
      {
        id: "avoid-first",
        title: "Avoid these first",
        intro: `These patterns turn a normal used ${profile.vehicleType} into a risky first month.`,
        cards: profile.avoidCards
      },
      {
        id: "price-changers",
        title: "Price changers",
        intro: "These details should change the offer before the inspection continues.",
        list: profile.avoidList
      },
      {
        id: "inspection-order",
        title: "Buying inspection order",
        intro: "Start with the items that are easiest to verify, then move toward the symptoms that need pricing.",
        ordered: profile.inspectionOrder
      },
      {
        id: "negotiable",
        title: "What can still be negotiated",
        intro: `A ${profile.shortName} with one clear issue can still make sense at the right price.`,
        list: profile.negotiable
      },
      {
        id: "final-decision",
        title: "Final decision checkpoint",
        intro: `The right ${profile.shortName} should not need a long explanation.`,
        paragraphs: [
          `A good ${profile.titleName} has wear that lines up with mileage, records that explain the work already done, and a test drive that does not create more questions than answers.`,
          `A pass makes sense when ${profile.mainSymptom}, ${profile.secondarySymptom}, tire condition, and records all point in different directions. That is usually a sign that the first repair month will be harder to control than the listing suggests.`
        ]
      }
    ],
    faqs: [
      {
        question: `What should I avoid on a used ${profile.titleName}?`,
        answer: `Avoid unresolved ${profile.mainSymptom}, unresolved ${profile.secondarySymptom}, missing service records, poor tire history, and any repair explanation too vague to price.`
      },
      {
        question: `Can a ${profile.titleName} with one issue still be worth buying?`,
        answer: `Yes, if the issue is narrow, the estimate is realistic, and the price reflects it. The risk climbs when several small problems appear at once.`
      },
      {
        question: "What matters most during the test drive?",
        answer: `Listen for the symptom that appears first, then confirm whether it matches the records and the parts likely to be needed. A clean answer is more valuable than a perfect-looking listing.`
      }
    ],
    relatedProblems: profile.relatedProblems,
    relatedBest: profile.relatedBest
  };
}

function buildServiceGuide(profile: ServiceExpansionProfile): DeepOwnershipGuide {
  return {
    slug: `${profile.slugBase}-service-schedule-and-intervals`,
    title: `${profile.titleName} service schedule and intervals`,
    href: `/guides/${profile.slugBase}-service-schedule-and-intervals/`,
    description: `${profile.titleName} service schedule notes for oil changes, tires, brakes, battery checks, fluids, and the intervals that matter most in real ownership.`,
    eyebrow: "Service guide",
    image: profile.image,
    relatedCars: profile.relatedCars,
    relatedGenerations: profile.relatedGenerations,
    intro: `${profile.titleName} service planning works best when the interval is matched to how the vehicle is actually driven. The practical focus is ${profile.firstPriority}, with extra attention to ${profile.secondPriority}.`,
    modifiedTime,
    editorialSummary: `${profile.titleName} service interval guidance focused on the maintenance items most likely to prevent repeat complaints.`,
    trustSummary: `Treat ${profile.intervalTheme} as the organizing idea, then match the records to the way the vehicle is used.`,
    badges: ["Service guide", "Interval checklist", "Maintenance planning"],
    summaryPoints: [
      `The first service priority is ${profile.firstPriority}.`,
      `The second pass should look at ${profile.secondPriority}.`,
      "Short trips, winter use, towing, heat, and stop-and-go driving can justify conservative intervals.",
      "Records matter because an interval that looks fine on paper can be weak evidence without dates, mileage, and repair notes."
    ],
    sections: [
      {
        id: "service-priorities",
        title: "Service priorities",
        intro: `The ${profile.shortName} stays easier to own when these checks happen before symptoms become expensive.`,
        cards: profile.serviceCards
      },
      {
        id: "intervals",
        title: "Intervals to track",
        intro: "Treat mileage, time, and driving conditions together rather than following one number blindly.",
        list: profile.intervalList
      },
      {
        id: "records",
        title: "Records that matter",
        intro: "The record file should explain the car's condition without needing a long story from the seller.",
        list: profile.records
      },
      {
        id: "before-a-trip",
        title: "Before a long drive",
        intro: `A final service pass is worth making before the ${profile.shortName} is loaded, driven hard, or taken far from home.`,
        ordered: profile.roadTripChecks
      },
      {
        id: "final-checkpoint",
        title: "Final interval checkpoint",
        intro: `A good ${profile.shortName} schedule is specific to the vehicle in front of you.`,
        paragraphs: [
          `A printed interval chart is only the baseline. The better ownership decision comes from matching oil, tires, brakes, battery, fluids, and known symptoms to the vehicle's real daily use.`,
          `When the records are clear, maintenance stops feeling like guesswork. When the records are vague, the next service should be treated as a reset point and priced accordingly.`
        ]
      }
    ],
    faqs: [
      {
        question: `How often should a ${profile.titleName} be serviced?`,
        answer: `Follow the factory schedule as the baseline, then shorten the interval when the vehicle sees short trips, heavy load, cold starts, heat, towing, or stop-and-go use.`
      },
      {
        question: `What service matters most on a ${profile.titleName}?`,
        answer: `${profile.firstPriority} should be checked first, then ${profile.secondPriority} should be verified through records and the current condition.`
      },
      {
        question: "What records should a used buyer ask for?",
        answer: "Ask for dated oil, tire, brake, battery, and fluid records with mileage. The best records make the current condition easy to verify."
      }
    ],
    relatedProblems: profile.relatedProblems,
    relatedBest: profile.relatedBest
  };
}

export const additionalDeepOwnershipGuides: DeepOwnershipGuide[] = [
  ...ownershipProfiles.flatMap((profile) => [buildMaintenanceGuide(profile), buildAvoidGuide(profile)]),
  ...serviceProfiles.map(buildServiceGuide)
];
