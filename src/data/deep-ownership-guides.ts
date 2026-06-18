export interface DeepGuideLink {
  href: string;
  title: string;
  description: string;
  eyebrow: string;
}

export interface DeepGuideCard {
  eyebrow: string;
  title: string;
  text: string;
}

export interface DeepGuideSection {
  id: string;
  title: string;
  intro: string;
  cards?: DeepGuideCard[];
  list?: string[];
  ordered?: string[];
  paragraphs?: string[];
}

export interface DeepOwnershipGuide {
  slug: string;
  title: string;
  href: string;
  description: string;
  eyebrow: string;
  image: string;
  relatedCars: string[];
  relatedGenerations: string[];
  intro: string;
  modifiedTime: string;
  editorialSummary: string;
  trustSummary: string;
  badges: string[];
  summaryPoints: string[];
  sections: DeepGuideSection[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedProblems: DeepGuideLink[];
  relatedBest: DeepGuideLink[];
}

const modifiedTime = "2026-06-18";

export const deepOwnershipGuides: DeepOwnershipGuide[] = [
  {
    slug: "chevrolet-silverado-1500-2020-maintenance-costs-and-weak-points",
    title: "Chevrolet Silverado 1500 2020 maintenance costs and weak points",
    href: "/guides/chevrolet-silverado-1500-2020-maintenance-costs-and-weak-points/",
    description:
      "What usually costs money first on a 2020 Silverado 1500, with a practical look at tire, brake, wheel-end, and truck-use weak points.",
    eyebrow: "Maintenance guide",
    image: "/images/photos/cars/chevrolet-silverado-1500-2020.webp",
    relatedCars: ["chevrolet-silverado-1500-2020"],
    relatedGenerations: ["chevrolet-silverado-1500-t1xx-2019-2024"],
    intro:
      "A 2020 Silverado 1500 can be straightforward to maintain when the truck is used honestly and the wear pattern is easy to read. The expensive ownership stories usually start with vague vibration, brake pulsation, uneven tire wear, or a work-truck history that does not match the records.",
    modifiedTime,
    editorialSummary:
      "Maintenance guidance for the 2020 Silverado 1500, focused on the wear areas that shape real running cost first.",
    trustSummary:
      "Start here when the Silverado feels healthy overall, but tire, brake, wheel-end, or towing-use clues need to be priced before the next repair.",
    badges: ["Maintenance guide", "Truck-specific", "Cost-focused"],
    summaryPoints: [
      "Tires, wheel balance, brake condition, and wheel-end checks shape the early ownership budget more than accessories or trim.",
      "A highway vibration should be separated from brake pulsation before parts are ordered.",
      "Towing and hauling history matters because it changes how much confidence to place in the current tires, brakes, and fluids."
    ],
    sections: [
      {
        id: "cost-areas",
        title: "Where the money usually goes first",
        intro: "Most early Silverado costs come from normal truck wear that has been left too vague for too long.",
        cards: [
          {
            eyebrow: "Tires and balance",
            title: "Highway vibration starts with the tire story",
            text: "Check tire age, load rating, balance weights, tread wear, and pressure before blaming suspension or driveline parts. A large truck can make a small tire issue feel like a much bigger repair."
          },
          {
            eyebrow: "Brake system",
            title: "Pulsation needs a braking-only test",
            text: "Brake pulsation that appears only while slowing points toward rotor, pad, caliper, or hardware checks. Mixing that symptom with highway shake leads to wasted money."
          },
          {
            eyebrow: "Wheel end",
            title: "Hubs and bearings need evidence",
            text: "Road-speed hum, looseness, and tire condition should be checked together. A hub can be the answer, but it should not be the first guess when the tires are unknown."
          },
          {
            eyebrow: "Truck use",
            title: "Towing history changes the budget",
            text: "A truck that towed regularly needs a closer look at brakes, tires, fluids, and service intervals. Cosmetic cleanliness does not prove light use."
          }
        ]
      },
      {
        id: "weak-points",
        title: "Weak points worth budgeting for",
        intro: "These areas are not unusual for a used full-size truck, but they decide whether the Silverado stays predictable.",
        list: [
          "Brake pads, rotors, and caliper hardware should be inspected when the pedal pulses or the truck has a heavy-use history.",
          "Tires need to match the truck's load use, not just the wheel size. Cheap or mismatched tires make every diagnosis noisier.",
          "Wheel balance, bent wheels, and tire wear should be checked before a highway vibration turns into a larger parts list.",
          "Wheel bearings and hubs deserve attention when the noise follows road speed and stays present off throttle.",
          "Fluid-service records matter more when the truck has a hitch, bed wear, or evidence of frequent hauling."
        ]
      },
      {
        id: "inspection-order",
        title: "Inspection order",
        intro: "Use this sequence before approving a repair estimate or buying a used example.",
        ordered: [
          "Start with tire age, pressure, tread depth, wear pattern, and whether all four tires match the way the truck is used.",
          "Drive at highway speed on a smooth road and note whether vibration follows speed, braking force, or both.",
          "Make several medium stops after the brakes are warm, then inspect rotor surface, pad life, and caliper hardware.",
          "Listen for wheel-end hum separately from engine load and check for looseness only after tire clues are understood.",
          "Compare the service history with the truck's accessories, hitch wear, bed wear, and seller explanation."
        ]
      },
      {
        id: "overspending",
        title: "How owners overspend",
        intro: "The most expensive path is usually a skipped diagnosis, not a rare failure.",
        list: [
          "Replacing front-end parts before tire balance, tire condition, and wheel damage are ruled out.",
          "Buying brake pads only when the real issue is rotor condition, caliper slide service, or uneven wear.",
          "Ignoring towing history because the truck looks clean in photos.",
          "Treating a road-speed hum, steering shake, and brake pulsation as one problem when they may need separate checks.",
          "Pricing the truck like a light-duty family vehicle when its wear pattern looks like work use."
        ]
      },
      {
        id: "final-checkpoint",
        title: "Final budget checkpoint",
        intro: "The right Silverado is not the one with no wear. It is the one where the wear makes sense.",
        paragraphs: [
          "A clean 2020 Silverado 1500 should feel stable at speed, stop smoothly, and have tire and brake condition that match the mileage. If the truck shakes, pulses, or hums, the repair path should be specific enough to price before money changes hands.",
          "The best budget control comes from keeping tire, brake, and wheel-end diagnosis separate. Once those basics are clear, the truck is much easier to judge fairly."
        ]
      }
    ],
    faqs: [
      {
        question: "What usually costs money first on a 2020 Silverado 1500?",
        answer: "Tires, wheel balance, brake service, and wheel-end diagnosis are common early budget items, especially on trucks that have towed or hauled."
      },
      {
        question: "Is highway vibration always a suspension problem?",
        answer: "No. Tire condition, wheel balance, wheel damage, and brake-related vibration should be separated before suspension parts are blamed."
      },
      {
        question: "What should be checked before buying one used?",
        answer: "Check tire match and age, highway stability, brake pulsation, wheel-end noise, and whether the service records fit the truck's use history."
      }
    ],
    relatedProblems: [
      {
        href: "/problems/steering-wheel-vibrates-at-highway-speed-chevrolet-silverado-1500-2020/",
        title: "Steering wheel vibrates at highway speed on Chevrolet Silverado 1500 2020",
        description: "Best when the main cost question starts with speed-linked shake.",
        eyebrow: "Problem guide"
      },
      {
        href: "/problems/brake-pedal-pulsates-when-slowing-chevrolet-silverado-1500-2020/",
        title: "Brake pedal pulsates when slowing on Chevrolet Silverado 1500 2020",
        description: "Open this when the vibration follows braking force instead of road speed.",
        eyebrow: "Problem guide"
      }
    ],
    relatedBest: [
      {
        href: "/best/best-brake-pads-for-chevrolet-silverado-1500-2020/",
        title: "Best brake pads for Chevrolet Silverado 1500 2020",
        description: "Use after the brake inspection points toward pads and hardware.",
        eyebrow: "Brake Pads"
      },
      {
        href: "/best/best-tires-for-chevrolet-silverado-1500-2020/",
        title: "Best tires for Chevrolet Silverado 1500 2020",
        description: "Use when tire condition or load use is shaping the next spend.",
        eyebrow: "Tires"
      }
    ]
  },
  {
    slug: "chevrolet-silverado-1500-2020-what-to-avoid",
    title: "Chevrolet Silverado 1500 2020: what to avoid",
    href: "/guides/chevrolet-silverado-1500-2020-what-to-avoid/",
    description:
      "Used 2020 Silverado 1500 examples to avoid, including unresolved highway vibration, brake pulsation, mismatched tires, and vague towing history.",
    eyebrow: "Avoid guide",
    image: "/images/photos/cars/chevrolet-silverado-1500-2020.webp",
    relatedCars: ["chevrolet-silverado-1500-2020"],
    relatedGenerations: ["chevrolet-silverado-1500-t1xx-2019-2024"],
    intro:
      "The weak Silverado examples are usually not hard to spot. They shake at speed, pulse under braking, carry mismatched tires, or show work-truck clues while the seller describes them as light-use trucks.",
    modifiedTime,
    editorialSummary:
      "A buyer-focused guide to the 2020 Silverado 1500 examples that deserve a discount, deeper inspection, or a clean pass.",
    trustSummary:
      "Use the test drive and service history to decide whether the truck's condition supports the asking price.",
    badges: ["Avoid guide", "Used buyer checks", "Truck condition"],
    summaryPoints: [
      "Avoid trucks where highway vibration and brake pulsation are both present but neither has been diagnosed.",
      "Mismatched, old, or uneven tires should change confidence quickly on a full-size truck.",
      "A towing setup without matching service records is a pricing problem, not a harmless detail."
    ],
    sections: [
      {
        id: "avoid-first",
        title: "Avoid these first",
        intro: "These patterns turn a normal used truck into a risky first month.",
        cards: [
          {
            eyebrow: "Highway shake",
            title: "Vibration that is brushed off as normal",
            text: "A Silverado should not need excuses at highway speed. If shake is present, the seller should have tire, balance, wheel, or brake evidence ready."
          },
          {
            eyebrow: "Brake pulsation",
            title: "A pulsing pedal with no repair plan",
            text: "Brake pulsation is easy to feel and easy to price when inspected honestly. It becomes risky when treated like a cosmetic complaint."
          },
          {
            eyebrow: "Tire condition",
            title: "Mismatched tires on a heavy truck",
            text: "Mixed brands, uneven wear, old date codes, or the wrong use case make the truck harder to judge and can hide wheel-end or alignment issues."
          },
          {
            eyebrow: "Use history",
            title: "Heavy-use clues with light-use stories",
            text: "A hitch, worn bed, trailer wiring, and brake wear should match the seller's explanation. When they do not, budget for a deeper inspection."
          }
        ]
      },
      {
        id: "walk-away-patterns",
        title: "Walk-away patterns",
        intro: "One small issue can be negotiable. Several vague issues together are different.",
        list: [
          "The truck shakes at speed, pulses while braking, and has uneven tire wear.",
          "The seller says the vibration is normal but cannot show tire balance, alignment, brake, or wheel checks.",
          "The truck has clear towing accessories but no fluid, brake, or tire service trail.",
          "Brake parts were replaced recently but the pedal still pulses during normal stops.",
          "A road-speed hum is present and the tires are old, mismatched, or worn in a pattern."
        ]
      },
      {
        id: "negotiable",
        title: "What is still negotiable",
        intro: "Not every issue should kill the deal if the diagnosis is specific and the price reflects it.",
        list: [
          "A single tire or balance issue with clean wheels, even wear, and a believable service explanation.",
          "Brake wear that is visible, consistent, and priced like a normal brake job.",
          "A truck used for towing that has matching maintenance records and no warning signs on the test drive.",
          "Cosmetic bed wear when the chassis, brakes, tires, and fluids still tell a clean story."
        ]
      },
      {
        id: "inspection-order",
        title: "Buying inspection order",
        intro: "Check the truck in an order that exposes expensive shortcuts.",
        ordered: [
          "Inspect tires first because they affect vibration, braking feel, road noise, and the quality of the test drive.",
          "Drive at highway speed, then make several normal stops to separate speed vibration from brake pulsation.",
          "Look under the truck and around the bed for towing or work-use clues that should match the records.",
          "Listen for road-speed hum and compare it with tire condition before assuming a hub problem.",
          "Use every unresolved issue as a pricing item, not as casual seller conversation."
        ]
      },
      {
        id: "final-decision",
        title: "Final decision checkpoint",
        intro: "A good truck makes the story easy to believe.",
        paragraphs: [
          "The Silverado to avoid is the one where the test drive produces more questions than the records answer. Highway shake, brake pulsation, and unclear tire history are not rare, but they need honest pricing.",
          "The better buy has tires, brakes, and use history that all point in the same direction. When those basics conflict, slow down before paying clean-truck money."
        ]
      }
    ],
    faqs: [
      {
        question: "What is the biggest red flag on a used 2020 Silverado 1500?",
        answer: "Highway vibration or brake pulsation with no diagnosis is a major red flag, especially when tire wear and towing history are unclear."
      },
      {
        question: "Are mismatched tires a serious issue?",
        answer: "They can be. On a full-size truck, mismatched or old tires can create vibration, noise, braking concerns, and poor diagnostic confidence."
      },
      {
        question: "Can towing history be acceptable?",
        answer: "Yes, if records and condition support it. Towing becomes a concern when the truck shows heavy-use clues but the maintenance trail is missing."
      }
    ],
    relatedProblems: [
      {
        href: "/problems/steering-wheel-vibrates-at-highway-speed-chevrolet-silverado-1500-2020/",
        title: "Steering wheel vibrates at highway speed on Chevrolet Silverado 1500 2020",
        description: "Use when the test drive exposes shake before the buying decision is settled.",
        eyebrow: "Problem guide"
      },
      {
        href: "/problems/brake-pedal-pulsates-when-slowing-chevrolet-silverado-1500-2020/",
        title: "Brake pedal pulsates when slowing on Chevrolet Silverado 1500 2020",
        description: "Use when brake feel is the concern that changes the deal.",
        eyebrow: "Problem guide"
      }
    ],
    relatedBest: [
      {
        href: "/best/best-tires-for-chevrolet-silverado-1500-2020/",
        title: "Best tires for Chevrolet Silverado 1500 2020",
        description: "Best when a clean truck mainly needs the right tire path.",
        eyebrow: "Tires"
      },
      {
        href: "/best/best-brake-pads-for-chevrolet-silverado-1500-2020/",
        title: "Best brake pads for Chevrolet Silverado 1500 2020",
        description: "Best after the truck still looks worth buying and the brake path is clear.",
        eyebrow: "Brake Pads"
      }
    ]
  },
  {
    slug: "hyundai-tucson-2020-maintenance-costs-and-weak-points",
    title: "Hyundai Tucson 2020 maintenance costs and weak points",
    href: "/guides/hyundai-tucson-2020-maintenance-costs-and-weak-points/",
    description:
      "What usually costs money first on a 2020 Hyundai Tucson, with practical checks for brakes, battery reserve, tires, and everyday compact-SUV wear.",
    eyebrow: "Maintenance guide",
    image: "/images/photos/cars/hyundai-tucson-2020.webp",
    relatedCars: ["hyundai-tucson-2020"],
    relatedGenerations: ["hyundai-tucson-tl-2019-2021"],
    intro:
      "The 2020 Tucson is usually a simple compact SUV to keep in service, but the first costs still follow a pattern. Brake noise, a weak battery, tire wear, and routine service discipline decide whether it feels cheap to own or neglected.",
    modifiedTime,
    editorialSummary:
      "Maintenance guidance for the 2020 Hyundai Tucson, focused on the ordinary weak points that shape ownership cost first.",
    trustSummary:
      "Start with brake feel, battery reserve, tire condition, and service records before treating the Tucson as either trouble-free or risky.",
    badges: ["Maintenance guide", "Compact SUV", "Cost-focused"],
    summaryPoints: [
      "Brake noise and battery reserve are the most useful early checks on a 2020 Tucson.",
      "Tire condition affects comfort, road noise, and confidence in the rest of the inspection.",
      "A clear maintenance record matters more than trim or cosmetic condition when keeping costs predictable."
    ],
    sections: [
      {
        id: "cost-areas",
        title: "Where the money usually goes first",
        intro: "The Tucson budget is usually shaped by everyday wear rather than dramatic failures.",
        cards: [
          {
            eyebrow: "Brakes",
            title: "Low-speed squeal and hardware condition",
            text: "Brake noise should be checked with the pads, rotors, clips, and slide hardware. Replacing pads alone can leave the same noise if the hardware was the real weak spot."
          },
          {
            eyebrow: "Battery",
            title: "Weak reserve on short-trip use",
            text: "A Tucson that sits or only makes short errands can expose a tired battery early. Testing reserve is cheaper than guessing at a larger electrical issue."
          },
          {
            eyebrow: "Tires",
            title: "Comfort and noise depend on tire quality",
            text: "Uneven wear, old tires, or cheap replacements can make the SUV feel rough before any suspension repair is needed."
          },
          {
            eyebrow: "Routine service",
            title: "Small jobs keep the car ordinary",
            text: "Fluid service, filters, inspections, and timely wear-item replacement matter because the Tucson's strength is low-drama ownership, not neglect tolerance."
          }
        ]
      },
      {
        id: "weak-points",
        title: "Weak points worth budgeting for",
        intro: "These are the areas to keep in the maintenance budget before they stack together.",
        list: [
          "Brake pads, rotors, and hardware service when low-speed noise starts repeating.",
          "Battery testing and replacement when starts become slower after short trips or parked periods.",
          "Tires, alignment checks, and rotation discipline when road noise or uneven wear appears.",
          "Basic fluids and filters, especially when service records are incomplete.",
          "Small suspension or steering checks only after tire pressure and tire wear are understood."
        ]
      },
      {
        id: "inspection-order",
        title: "Inspection order",
        intro: "A simple sequence keeps the diagnosis from becoming wider than the symptom.",
        ordered: [
          "Start with the battery test if the SUV is used for short trips, sits outside, or shows slower starts.",
          "Listen for brake squeal during gentle stops, then inspect pad life, rotor surface, and brake hardware.",
          "Check tire age, tread depth, pressure, and wear pattern before chasing suspension noise.",
          "Compare the service records with mileage and usage rather than assuming the SUV needed little attention.",
          "Price any repeated complaint before buying parts or approving a general inspection list."
        ]
      },
      {
        id: "overspending",
        title: "How owners overspend",
        intro: "Tucson costs usually rise when ordinary checks are skipped.",
        list: [
          "Replacing pads without cleaning or replacing tired brake hardware.",
          "Buying electrical parts before a battery load test and terminal check.",
          "Blaming suspension for noise that changes with tire condition or road surface.",
          "Ignoring small service gaps because the SUV still looks clean.",
          "Letting a weak battery, noisy brakes, and tired tires all stack into one expensive service visit."
        ]
      },
      {
        id: "final-checkpoint",
        title: "Final budget checkpoint",
        intro: "The Tucson stays appealing when the basics are visible and current.",
        paragraphs: [
          "A good 2020 Tucson does not need a dramatic maintenance story. It should start cleanly, stop quietly enough for normal use, ride on decent tires, and have records that make the mileage believable.",
          "If the SUV already has brake noise, weak starts, and tire wear, it can still be fixable, but the price should reflect those ordinary costs before they are treated like surprises."
        ]
      }
    ],
    faqs: [
      {
        question: "Is the 2020 Hyundai Tucson expensive to maintain?",
        answer: "Usually no. Costs are most often shaped by brake service, battery replacement, tire condition, and routine maintenance discipline."
      },
      {
        question: "What should be checked first on a Tucson with weak starts?",
        answer: "Start with battery health, terminal condition, and charging basics before assuming a larger electrical problem."
      },
      {
        question: "What causes low-speed brake squeal?",
        answer: "Pad material, rotor surface, brake hardware, dust, or incomplete brake service can all contribute, so the hardware should be inspected with the pads."
      }
    ],
    relatedProblems: [
      {
        href: "/problems/brake-squeal-at-low-speed-hyundai-tucson-2020/",
        title: "Brake squeal at low speed on Hyundai Tucson 2020",
        description: "Open this when brake noise is the first maintenance concern.",
        eyebrow: "Problem guide"
      },
      {
        href: "/problems/battery-struggles-after-short-trips-hyundai-tucson-2020/",
        title: "Battery struggles after short trips on Hyundai Tucson 2020",
        description: "Best when starting behavior is changing after errands or parked time.",
        eyebrow: "Problem guide"
      }
    ],
    relatedBest: [
      {
        href: "/best/best-brake-pads-for-hyundai-tucson-2020/",
        title: "Best brake pads for Hyundai Tucson 2020",
        description: "Use after brake inspection points toward pads and hardware service.",
        eyebrow: "Brake Pads"
      },
      {
        href: "/best/best-batteries-for-hyundai-tucson-2020/",
        title: "Best batteries for Hyundai Tucson 2020",
        description: "Use after testing confirms weak reserve.",
        eyebrow: "Batteries"
      }
    ]
  },
  {
    slug: "hyundai-tucson-2020-what-to-avoid",
    title: "Hyundai Tucson 2020: what to avoid",
    href: "/guides/hyundai-tucson-2020-what-to-avoid/",
    description:
      "Used 2020 Hyundai Tucson examples to avoid, including unresolved brake squeal, weak-start behavior, tire neglect, and vague service history.",
    eyebrow: "Avoid guide",
    image: "/images/photos/cars/hyundai-tucson-2020.webp",
    relatedCars: ["hyundai-tucson-2020"],
    relatedGenerations: ["hyundai-tucson-tl-2019-2021"],
    intro:
      "The Tucson examples to avoid usually look like easy commuter SUVs until the simple checks fail. Repeating brake squeal, weak starts, cheap tires, and missing maintenance records should change the buying decision.",
    modifiedTime,
    editorialSummary:
      "A buyer-focused guide to the 2020 Tucson condition patterns that deserve a discount, deeper inspection, or a pass.",
    trustSummary:
      "A used Tucson should feel simple, stable, and easy to explain. Vague basics are the warning sign.",
    badges: ["Avoid guide", "Used buyer checks", "Compact SUV"],
    summaryPoints: [
      "Avoid examples where brake noise is obvious and no one has inspected pads, rotors, or hardware.",
      "Weak starts after short trips should be tested, not explained away.",
      "Cheap tires and missing records can make a clean-looking Tucson a poor value."
    ],
    sections: [
      {
        id: "avoid-first",
        title: "Avoid these first",
        intro: "These are the Tucson condition patterns that create the most regret.",
        cards: [
          {
            eyebrow: "Brake noise",
            title: "Squeal with no hardware check",
            text: "Low-speed brake noise can be manageable, but not when the seller has no pad, rotor, or hardware information and wants clean-car money."
          },
          {
            eyebrow: "Battery behavior",
            title: "Weak starts treated as random",
            text: "A tired battery is not a deal breaker. Repeated boosting without a test is a sign that the owner has been guessing."
          },
          {
            eyebrow: "Tire quality",
            title: "Uneven or mismatched tires",
            text: "Tires reveal how carefully the SUV has been kept. Uneven wear can also make road noise and steering feel harder to judge."
          },
          {
            eyebrow: "Records",
            title: "A practical SUV with no practical history",
            text: "The Tucson's appeal is simple use. Missing records weaken that appeal when brakes, battery, or tires already need attention."
          }
        ]
      },
      {
        id: "walk-away-patterns",
        title: "Walk-away patterns",
        intro: "The risk rises when several ordinary problems are present at once.",
        list: [
          "The brakes squeal during a normal test drive and the seller has no recent service details.",
          "The battery struggles after sitting, but no load test or charging check has been done.",
          "Tires are mismatched, old, or worn unevenly on an SUV advertised as easy and ready.",
          "The cabin and paint look clean while the maintenance records are thin or missing.",
          "The seller asks top-market money while several basic wear items need immediate attention."
        ]
      },
      {
        id: "negotiable",
        title: "What is still negotiable",
        intro: "Some issues are acceptable when they are narrow and honestly priced.",
        list: [
          "Brake noise with visible pad life, clean hardware, and a price that reflects service.",
          "An aging battery with a clean electrical check and no broader warning lights.",
          "Tires nearing replacement when the rest of the SUV has records and drives cleanly.",
          "Minor wear on a daily commuter when the seller is realistic about the condition."
        ]
      },
      {
        id: "inspection-order",
        title: "Buying inspection order",
        intro: "A short inspection can expose whether the Tucson is simple or neglected.",
        ordered: [
          "Start the SUV cold and again after the test drive to judge battery reserve.",
          "Listen for brake noise during several gentle stops and one firmer stop.",
          "Inspect tire age, match, pressure, and wear before judging ride quality.",
          "Check records for brake work, battery replacement, tires, oil service, and inspections.",
          "Use every unresolved basic as a pricing item before accepting the asking price."
        ]
      },
      {
        id: "final-decision",
        title: "Final decision checkpoint",
        intro: "The right Tucson should be boring in a good way.",
        paragraphs: [
          "A strong 2020 Tucson starts cleanly, stops without a distracting squeal, rides on sensible tires, and has records that match the mileage. Those basics matter more than small trim differences.",
          "If the SUV needs brakes, a battery, and tires at the same time, it may still be worth buying, but only at a price that treats those as immediate costs."
        ]
      }
    ],
    faqs: [
      {
        question: "What should I avoid on a used 2020 Hyundai Tucson?",
        answer: "Avoid examples with unresolved brake squeal, weak-start behavior, poor tire condition, and thin maintenance records."
      },
      {
        question: "Is brake squeal a reason to walk away?",
        answer: "Not always. It becomes a stronger reason to walk away when the seller has no inspection details and the price does not reflect brake service."
      },
      {
        question: "Can a weak battery be negotiated?",
        answer: "Yes, if testing shows a simple battery issue and there are no broader charging or warning-light concerns."
      }
    ],
    relatedProblems: [
      {
        href: "/problems/brake-squeal-at-low-speed-hyundai-tucson-2020/",
        title: "Brake squeal at low speed on Hyundai Tucson 2020",
        description: "Use when the test drive exposes repeating brake noise.",
        eyebrow: "Problem guide"
      },
      {
        href: "/problems/battery-struggles-after-short-trips-hyundai-tucson-2020/",
        title: "Battery struggles after short trips on Hyundai Tucson 2020",
        description: "Use when weak-start behavior changes confidence in the SUV.",
        eyebrow: "Problem guide"
      }
    ],
    relatedBest: [
      {
        href: "/best/best-brake-pads-for-hyundai-tucson-2020/",
        title: "Best brake pads for Hyundai Tucson 2020",
        description: "Use only after the Tucson still looks worth buying and brake service is the clear next step.",
        eyebrow: "Brake Pads"
      },
      {
        href: "/best/best-batteries-for-hyundai-tucson-2020/",
        title: "Best batteries for Hyundai Tucson 2020",
        description: "Use after a battery test confirms weak reserve.",
        eyebrow: "Batteries"
      }
    ]
  },
  {
    slug: "nissan-rogue-2021-maintenance-costs-and-weak-points",
    title: "Nissan Rogue 2021 maintenance costs and weak points",
    href: "/guides/nissan-rogue-2021-maintenance-costs-and-weak-points/",
    description:
      "What usually costs money first on a 2021 Nissan Rogue, with checks for battery reserve, front brake noise, tires, and newer-SUV ownership basics.",
    eyebrow: "Maintenance guide",
    image: "/images/photos/cars/nissan-rogue-2021.webp",
    relatedCars: ["nissan-rogue-2021"],
    relatedGenerations: ["nissan-rogue-t33-2021-2025"],
    intro:
      "The 2021 Rogue is new enough that small ownership problems should not be ignored as age. Battery reserve, front brake refinement, tire condition, and service records are the first places to look when the SUV starts feeling older than it should.",
    modifiedTime,
    editorialSummary:
      "Maintenance guidance for the 2021 Nissan Rogue, focused on the early weak points that shape everyday ownership cost.",
    trustSummary:
      "Use battery, brake, tire, and record checks to decide whether the Rogue is aging normally or being neglected early.",
    badges: ["Maintenance guide", "Newer SUV", "Cost-focused"],
    summaryPoints: [
      "Weak-start behavior after sitting should be tested before larger electrical ideas are considered.",
      "Front brake squeal can be a refinement issue, but it still needs a pad, rotor, and hardware check.",
      "Tire quality and rotation history matter because they shape road noise and ride comfort on a newer SUV."
    ],
    sections: [
      {
        id: "cost-areas",
        title: "Where the money usually goes first",
        intro: "Early Rogue costs are usually about refinement and basic upkeep, not age-related failure.",
        cards: [
          {
            eyebrow: "Battery",
            title: "Reserve after sitting",
            text: "A weak start after parked time should lead to battery testing, terminal inspection, and usage review before expensive electrical theories."
          },
          {
            eyebrow: "Front brakes",
            title: "Low-speed noise and hardware",
            text: "Front brake squeal should be checked with pad life, rotor condition, and hardware service. Noise without stopping loss can still affect ownership confidence."
          },
          {
            eyebrow: "Tires",
            title: "Road comfort depends on wear quality",
            text: "Tire age, rotation, pressure, and wear pattern help explain hum or harshness before wheel-end parts are discussed."
          },
          {
            eyebrow: "Records",
            title: "Newer does not mean maintenance-free",
            text: "A newer SUV should have a clean service trail. Missing records weaken the value argument even when mileage looks attractive."
          }
        ]
      },
      {
        id: "weak-points",
        title: "Weak points worth budgeting for",
        intro: "These items keep a 2021 Rogue feeling like a newer vehicle instead of a tired one.",
        list: [
          "Battery testing and replacement when the SUV sits often or starts weakly after parked periods.",
          "Front brake inspection when low-speed squeal repeats during normal stops.",
          "Tire rotation, alignment checks, and replacement when hum or uneven wear starts early.",
          "Routine oil, filter, fluid, and inspection records that support the asking price.",
          "Careful diagnosis before treating a simple refinement complaint like a major mechanical issue."
        ]
      },
      {
        id: "inspection-order",
        title: "Inspection order",
        intro: "The right order keeps early ownership issues from being overdiagnosed.",
        ordered: [
          "Test battery health first if the Rogue struggles after sitting or short trips.",
          "Drive quietly at low speed and listen for front brake squeal during normal stops.",
          "Run at highway speed and separate tire hum from brake noise or engine load.",
          "Inspect tire match, age, wear, and rotation records before blaming hubs or suspension.",
          "Compare the service history with mileage, usage, and the seller's maintenance claims."
        ]
      },
      {
        id: "overspending",
        title: "How owners overspend",
        intro: "The Rogue gets expensive when small clues are treated like unrelated mysteries.",
        list: [
          "Replacing parts before a battery test explains weak-start behavior.",
          "Changing pads without checking brake hardware or rotor surface.",
          "Assuming road hum is a wheel bearing before tire wear and rotation history are checked.",
          "Paying a newer-SUV premium when the records do not support it.",
          "Letting small refinement issues stack until the car feels older than its mileage."
        ]
      },
      {
        id: "final-checkpoint",
        title: "Final budget checkpoint",
        intro: "The Rogue should still feel fresh if the basics have been handled.",
        paragraphs: [
          "A good 2021 Rogue starts cleanly after sitting, stops without distracting front brake noise, and rides on tires that match the mileage. When those basics are not clean, the asking price should move.",
          "The best maintenance approach is to keep battery, brake, and tire questions separate. That prevents a simple newer-SUV complaint from turning into a broad and expensive guess."
        ]
      }
    ],
    faqs: [
      {
        question: "What usually costs money first on a 2021 Nissan Rogue?",
        answer: "Battery replacement, front brake service, tire replacement, and routine maintenance are the common early budget items."
      },
      {
        question: "Is front brake squeal serious?",
        answer: "It depends on pad life, rotor condition, and hardware. It should be inspected before assuming it is harmless or urgent."
      },
      {
        question: "What should be checked when the battery dies after sitting?",
        answer: "Start with battery health, terminal condition, charging basics, and usage pattern before considering a deeper electrical draw."
      }
    ],
    relatedProblems: [
      {
        href: "/problems/battery-goes-dead-after-sitting-nissan-rogue-2021/",
        title: "Battery goes dead after sitting on Nissan Rogue 2021",
        description: "Open this when parked time is the trigger for weak starts.",
        eyebrow: "Problem guide"
      },
      {
        href: "/problems/front-brakes-squeal-at-low-speed-nissan-rogue-2021/",
        title: "Front brakes squeal at low speed on Nissan Rogue 2021",
        description: "Best when front brake refinement is the first ownership complaint.",
        eyebrow: "Problem guide"
      }
    ],
    relatedBest: [
      {
        href: "/best/best-batteries-for-nissan-rogue-2021/",
        title: "Best batteries for Nissan Rogue 2021",
        description: "Use after the battery test confirms replacement is the right path.",
        eyebrow: "Batteries"
      },
      {
        href: "/best/best-brake-pads-for-nissan-rogue-2021/",
        title: "Best brake pads for Nissan Rogue 2021",
        description: "Use after brake inspection points toward pads and hardware.",
        eyebrow: "Brake Pads"
      }
    ]
  },
  {
    slug: "nissan-rogue-2021-what-to-avoid",
    title: "Nissan Rogue 2021: what to avoid",
    href: "/guides/nissan-rogue-2021-what-to-avoid/",
    description:
      "Used 2021 Nissan Rogue examples to avoid, including weak-start behavior, front brake noise, tire neglect, and thin service history.",
    eyebrow: "Avoid guide",
    image: "/images/photos/cars/nissan-rogue-2021.webp",
    relatedCars: ["nissan-rogue-2021"],
    relatedGenerations: ["nissan-rogue-t33-2021-2025"],
    intro:
      "A 2021 Rogue should still feel modern, stable, and easy to explain. The examples to avoid are the ones with weak-start behavior, front brake noise, tire hum, or missing records that are treated as minor because the SUV is newer.",
    modifiedTime,
    editorialSummary:
      "A buyer-focused guide to the 2021 Rogue examples where early wear or vague maintenance should change the price.",
    trustSummary:
      "A newer Rogue should not need excuses for the basics. Battery, brake, tire, and record checks should support the asking price.",
    badges: ["Avoid guide", "Used buyer checks", "Newer SUV"],
    summaryPoints: [
      "Avoid a Rogue with repeated weak starts and no battery test.",
      "Do not ignore front brake squeal on the assumption that low mileage makes it harmless.",
      "A newer SUV with poor tire history or missing records should not be priced like a careful example."
    ],
    sections: [
      {
        id: "avoid-first",
        title: "Avoid these first",
        intro: "These patterns make the Rogue feel older than it should.",
        cards: [
          {
            eyebrow: "Weak starts",
            title: "Battery complaints with no test result",
            text: "A failing battery can be simple. Repeated no-start behavior without testing is the part that should change confidence."
          },
          {
            eyebrow: "Front brakes",
            title: "Brake squeal treated as nothing",
            text: "Noise during normal stops should lead to a brake inspection, even when the SUV is newer and otherwise clean."
          },
          {
            eyebrow: "Tire story",
            title: "Road hum with unknown tire history",
            text: "Road noise on a newer Rogue should send the inspection toward tire age, rotation, pressure, and wear before bigger repairs are assumed."
          },
          {
            eyebrow: "Value",
            title: "Newer-SUV price with thin records",
            text: "Low mileage does not replace maintenance records. The price should reflect whether the basics can be proven."
          }
        ]
      },
      {
        id: "walk-away-patterns",
        title: "Walk-away patterns",
        intro: "The more basic issues appear together, the less useful the newer model year becomes.",
        list: [
          "The Rogue starts weakly after sitting and no one has tested the battery.",
          "Front brake noise is present on the test drive but the seller says the SUV needs nothing.",
          "Tires show uneven wear or unknown rotation history while road hum is already present.",
          "Service records are missing even though the asking price depends on careful ownership.",
          "Several small issues are dismissed because the vehicle is still relatively new."
        ]
      },
      {
        id: "negotiable",
        title: "What is still negotiable",
        intro: "A narrow problem can be acceptable when it is easy to test and price.",
        list: [
          "A weak battery with clean terminals, stable charging, and no broader warning signs.",
          "Front brake noise with clear pad, rotor, and hardware condition.",
          "Tires approaching replacement when the rest of the SUV has a good service trail.",
          "A minor refinement issue when the seller adjusts the price realistically."
        ]
      },
      {
        id: "inspection-order",
        title: "Buying inspection order",
        intro: "Check the Rogue like a newer vehicle that still needs evidence.",
        ordered: [
          "Start with battery health if the SUV has been sitting or mainly used for short trips.",
          "Listen for front brake noise during low-speed stops in a quiet area.",
          "Drive at highway speed and note whether hum changes with road surface or vehicle speed.",
          "Inspect tire age, wear, pressure, and rotation history before making wheel-end assumptions.",
          "Ask for records that match the mileage and the seller's price, not just a clean interior."
        ]
      },
      {
        id: "final-decision",
        title: "Final decision checkpoint",
        intro: "The best Rogue examples make the condition easy to trust.",
        paragraphs: [
          "A strong 2021 Rogue should not require a long explanation for weak starts, noisy brakes, or tire hum. Those issues can be manageable, but they should be tested and priced before purchase.",
          "When the basics are vague, the newer model year stops carrying the deal. A better example with cleaner records is usually worth waiting for."
        ]
      }
    ],
    faqs: [
      {
        question: "What should I avoid on a used 2021 Nissan Rogue?",
        answer: "Avoid repeated weak starts, unresolved front brake noise, poor tire history, and missing maintenance records."
      },
      {
        question: "Does low mileage make brake noise less important?",
        answer: "No. Low mileage helps, but brake noise still needs a pad, rotor, and hardware inspection."
      },
      {
        question: "Is a weak battery a deal breaker?",
        answer: "Not by itself. It becomes a concern when no testing has been done or there are broader electrical warning signs."
      }
    ],
    relatedProblems: [
      {
        href: "/problems/battery-goes-dead-after-sitting-nissan-rogue-2021/",
        title: "Battery goes dead after sitting on Nissan Rogue 2021",
        description: "Use when parked time exposes weak reserve.",
        eyebrow: "Problem guide"
      },
      {
        href: "/problems/front-brakes-squeal-at-low-speed-nissan-rogue-2021/",
        title: "Front brakes squeal at low speed on Nissan Rogue 2021",
        description: "Use when brake noise changes confidence in the vehicle.",
        eyebrow: "Problem guide"
      }
    ],
    relatedBest: [
      {
        href: "/best/best-batteries-for-nissan-rogue-2021/",
        title: "Best batteries for Nissan Rogue 2021",
        description: "Best after the battery path is confirmed.",
        eyebrow: "Batteries"
      },
      {
        href: "/best/best-brake-pads-for-nissan-rogue-2021/",
        title: "Best brake pads for Nissan Rogue 2021",
        description: "Best after the Rogue still looks worth buying and the brake issue is narrow.",
        eyebrow: "Brake Pads"
      }
    ]
  },
  {
    slug: "subaru-forester-2020-maintenance-costs-and-weak-points",
    title: "Subaru Forester 2020 maintenance costs and weak points",
    href: "/guides/subaru-forester-2020-maintenance-costs-and-weak-points/",
    description:
      "What usually costs money first on a 2020 Subaru Forester, with practical checks for tires, wheel-end hum, battery reserve, and AWD ownership habits.",
    eyebrow: "Maintenance guide",
    image: "/images/photos/cars/subaru-forester-2020.webp",
    relatedCars: ["subaru-forester-2020"],
    relatedGenerations: ["subaru-forester-sk-2019-2024"],
    intro:
      "The 2020 Forester's maintenance budget depends heavily on simple AWD discipline. Matched tires, road-speed noise checks, battery reserve, and honest service records do more to control cost than broad reliability labels.",
    modifiedTime,
    editorialSummary:
      "Maintenance guidance for the 2020 Subaru Forester, focused on AWD-sensitive tires, wheel-end checks, and everyday ownership costs.",
    trustSummary:
      "Start with tire match, road-speed hum, and battery reserve before blaming larger AWD or drivetrain issues.",
    badges: ["Maintenance guide", "AWD checks", "Cost-focused"],
    summaryPoints: [
      "Matched tires and rotation history are central to Forester ownership quality.",
      "Road-speed hum should be separated from tire noise before wheel bearings are replaced.",
      "Battery reserve matters on short-trip and cold-weather use."
    ],
    sections: [
      {
        id: "cost-areas",
        title: "Where the money usually goes first",
        intro: "The Forester budget is easiest to control when AWD basics are not skipped.",
        cards: [
          {
            eyebrow: "Tires",
            title: "Four matched tires matter",
            text: "Brand, size, tread depth, and wear pattern should be consistent across all four corners. Tire shortcuts create noise and reduce confidence in every next diagnosis."
          },
          {
            eyebrow: "Wheel end",
            title: "Hum needs a careful order",
            text: "A wheel bearing can cause speed-linked hum, but tire wear and rotation history should be checked first so the repair path is not guessed."
          },
          {
            eyebrow: "Battery",
            title: "Reserve on short trips",
            text: "Foresters that sit outside or make short errands can expose weak battery reserve before other electrical issues exist."
          },
          {
            eyebrow: "Routine service",
            title: "Records protect resale and repair confidence",
            text: "Fluid service, tire rotations, brake checks, and inspections are more important than accessory condition when judging long-term cost."
          }
        ]
      },
      {
        id: "weak-points",
        title: "Weak points worth budgeting for",
        intro: "These are the checks that keep a Forester from becoming noisy or uncertain.",
        list: [
          "A complete tire set when one or two tires are worn enough to disturb the AWD and noise picture.",
          "Wheel-bearing diagnosis when hum rises with road speed after tire checks are complete.",
          "Battery testing and replacement for short-trip use, parked periods, or cold-weather weak starts.",
          "Brake and suspension checks after tire match and wear are known.",
          "Routine service records that show rotations, inspections, oil changes, and fluid attention."
        ]
      },
      {
        id: "inspection-order",
        title: "Inspection order",
        intro: "A Forester rewards a methodical inspection more than a broad parts list.",
        ordered: [
          "Confirm tire size, brand, model, and tread depth match well across all four corners.",
          "Drive at steady road speed and listen for hum that rises with speed rather than engine rpm.",
          "Rotate or inspect tires before concluding that the noise is a wheel bearing.",
          "Test battery reserve if starts are slower after sitting or cold weather.",
          "Review rotation, brake, and service records before pricing larger AWD concerns."
        ]
      },
      {
        id: "overspending",
        title: "How owners overspend",
        intro: "Most avoidable Forester costs start with tire and noise shortcuts.",
        list: [
          "Replacing a wheel bearing before checking tire wear and rotation history.",
          "Buying one or two tires when the tread-depth spread makes a full set the cleaner choice.",
          "Boosting a weak battery repeatedly instead of testing and replacing it.",
          "Blaming the AWD system before simple tire, wheel, and brake checks are complete.",
          "Letting tire mismatch create noise that hides the real condition of the vehicle."
        ]
      },
      {
        id: "final-checkpoint",
        title: "Final budget checkpoint",
        intro: "The Forester should be judged by how well the AWD basics have been respected.",
        paragraphs: [
          "A strong 2020 Forester has four sensible tires, no unexplained speed-linked hum, clean starts, and records that show ordinary maintenance. That condition is what keeps the ownership budget predictable.",
          "If tires are mismatched, hum is present, and the battery is weak, the car may still be repairable, but it should be priced like a vehicle with immediate needs."
        ]
      }
    ],
    faqs: [
      {
        question: "What usually costs money first on a 2020 Subaru Forester?",
        answer: "Tires, wheel-bearing diagnosis, battery replacement, brake service, and routine maintenance are the common early budget areas."
      },
      {
        question: "Why do matched tires matter on a Forester?",
        answer: "Consistent tire size, type, and wear help the AWD system behave predictably and make road-noise diagnosis cleaner."
      },
      {
        question: "Is humming always a wheel bearing?",
        answer: "No. Tire wear, tire type, and rotation history should be checked before a wheel bearing is blamed."
      }
    ],
    relatedProblems: [
      {
        href: "/problems/humming-noise-that-gets-louder-with-speed-subaru-forester-2020/",
        title: "Humming noise that gets louder with speed on Subaru Forester 2020",
        description: "Open this when road-speed hum is shaping the maintenance budget.",
        eyebrow: "Problem guide"
      },
      {
        href: "/problems/battery-struggles-after-short-trips-subaru-forester-2020/",
        title: "Battery struggles after short trips on Subaru Forester 2020",
        description: "Best when weak starts point toward battery reserve.",
        eyebrow: "Problem guide"
      }
    ],
    relatedBest: [
      {
        href: "/best/best-wheel-bearings-for-subaru-forester-2020/",
        title: "Best wheel bearings for Subaru Forester 2020",
        description: "Use after tire checks support a wheel-bearing path.",
        eyebrow: "Wheel Bearings"
      },
      {
        href: "/best/best-batteries-for-subaru-forester-2020/",
        title: "Best batteries for Subaru Forester 2020",
        description: "Use after testing confirms weak battery reserve.",
        eyebrow: "Batteries"
      }
    ]
  },
  {
    slug: "subaru-forester-2020-what-to-avoid",
    title: "Subaru Forester 2020: what to avoid",
    href: "/guides/subaru-forester-2020-what-to-avoid/",
    description:
      "Used 2020 Subaru Forester examples to avoid, including mismatched tires, road-speed hum, weak batteries, and missing AWD maintenance clues.",
    eyebrow: "Avoid guide",
    image: "/images/photos/cars/subaru-forester-2020.webp",
    relatedCars: ["subaru-forester-2020"],
    relatedGenerations: ["subaru-forester-sk-2019-2024"],
    intro:
      "The Forester examples to avoid are the ones where AWD basics have been treated casually. Mismatched tires, road-speed hum, weak-start behavior, and thin records all make the car harder to price honestly.",
    modifiedTime,
    editorialSummary:
      "A buyer-focused guide to the 2020 Forester condition patterns that deserve a discount, deeper inspection, or a pass.",
    trustSummary:
      "A used Forester should have a clear tire story, quiet road-speed behavior, and maintenance records that fit AWD ownership.",
    badges: ["Avoid guide", "Used buyer checks", "AWD condition"],
    summaryPoints: [
      "Avoid examples with mismatched tires unless the price and repair plan are clear.",
      "Road-speed hum should not be accepted without tire and wheel-end checks.",
      "Weak starts and missing records matter more when the car is sold as a low-drama AWD SUV."
    ],
    sections: [
      {
        id: "avoid-first",
        title: "Avoid these first",
        intro: "These issues weaken the Forester's main ownership appeal.",
        cards: [
          {
            eyebrow: "Tire mismatch",
            title: "Four tires that do not tell the same story",
            text: "Different brands, sizes, ages, or tread depths make an AWD Forester harder to judge and can hide noise or wear issues."
          },
          {
            eyebrow: "Road hum",
            title: "Speed-linked noise with no diagnosis",
            text: "Hum that rises with speed needs tire and wheel-end checks. A vague explanation is not enough on a vehicle where tire condition matters."
          },
          {
            eyebrow: "Battery",
            title: "Weak starts treated casually",
            text: "A weak battery can be simple, but repeated boosts without testing suggest poor ownership habits."
          },
          {
            eyebrow: "Records",
            title: "AWD ownership with missing rotation history",
            text: "Rotation and tire records matter on a Forester. Missing proof should change how much confidence the asking price deserves."
          }
        ]
      },
      {
        id: "walk-away-patterns",
        title: "Walk-away patterns",
        intro: "These combinations usually mean the next owner inherits the diagnosis.",
        list: [
          "The tires are mismatched and the vehicle already has speed-linked hum.",
          "A wheel-bearing explanation is offered without tire inspection or rotation history.",
          "The Forester starts weakly after sitting and no battery test has been done.",
          "Maintenance records are thin, but the seller prices the car like a careful AWD example.",
          "Road noise, tire wear, and weak starts all appear during the same inspection."
        ]
      },
      {
        id: "negotiable",
        title: "What is still negotiable",
        intro: "A Forester with one clear issue can still make sense at the right price.",
        list: [
          "A full tire set needed soon when the rest of the car has clean records and quiet road behavior.",
          "A narrow battery issue with clean terminals, stable charging, and no warning-light pattern.",
          "Wheel-bearing noise after tire condition has been checked and the repair cost is priced in.",
          "Minor brake or suspension wear once tire match and road-speed noise are understood."
        ]
      },
      {
        id: "inspection-order",
        title: "Buying inspection order",
        intro: "The Forester should be checked in a way that respects its AWD sensitivity.",
        ordered: [
          "Inspect tire size, brand, age, tread depth, and wear pattern at all four corners.",
          "Drive at steady speed and listen for hum that follows vehicle speed rather than engine rpm.",
          "Ask for tire rotation and maintenance records before accepting a wheel-bearing explanation.",
          "Restart the vehicle after the drive and check battery behavior.",
          "Price the car based on immediate tire, battery, and wheel-end needs, not only mileage."
        ]
      },
      {
        id: "final-decision",
        title: "Final decision checkpoint",
        intro: "The right Forester is easy to believe.",
        paragraphs: [
          "A good 2020 Forester has a clean tire story, starts consistently, and does not need excuses for road-speed noise. When those details line up, the AWD benefit is easier to trust.",
          "A Forester with mismatched tires, hum, and weak battery behavior can become expensive quickly. The issue is not that any one item is unusual; the issue is paying full price for a vehicle with several immediate needs."
        ]
      }
    ],
    faqs: [
      {
        question: "What should I avoid on a used 2020 Subaru Forester?",
        answer: "Avoid mismatched tires, unexplained road-speed hum, weak starts, and missing tire rotation or service records."
      },
      {
        question: "Are mismatched tires a deal breaker?",
        answer: "They can be. At minimum, they should change the price and trigger a closer AWD and road-noise inspection."
      },
      {
        question: "Can wheel-bearing noise be negotiated?",
        answer: "Yes, if the diagnosis is narrow, tire condition has been checked, and the repair cost is reflected in the price."
      }
    ],
    relatedProblems: [
      {
        href: "/problems/humming-noise-that-gets-louder-with-speed-subaru-forester-2020/",
        title: "Humming noise that gets louder with speed on Subaru Forester 2020",
        description: "Use when road-speed noise appears during the buying inspection.",
        eyebrow: "Problem guide"
      },
      {
        href: "/problems/battery-struggles-after-short-trips-subaru-forester-2020/",
        title: "Battery struggles after short trips on Subaru Forester 2020",
        description: "Use when weak starts change confidence in the car.",
        eyebrow: "Problem guide"
      }
    ],
    relatedBest: [
      {
        href: "/best/best-wheel-bearings-for-subaru-forester-2020/",
        title: "Best wheel bearings for Subaru Forester 2020",
        description: "Use after tire checks support a wheel-bearing repair path.",
        eyebrow: "Wheel Bearings"
      },
      {
        href: "/best/best-batteries-for-subaru-forester-2020/",
        title: "Best batteries for Subaru Forester 2020",
        description: "Use after testing confirms battery replacement is needed.",
        eyebrow: "Batteries"
      }
    ]
  }
];
