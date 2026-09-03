export interface SourceLink {
  label: string;
  href: string;
}

export interface EvidenceLimits {
  title?: string;
  summary: string;
  basedOn: string[];
  appliesTo: string[];
  doesNotCover: string[];
  sourceLinks?: SourceLink[];
}

export interface DecisionStep {
  trigger: string;
  check: string;
  nextStep: string;
}

export interface QualityEnhancement {
  evidence: EvidenceLimits;
  decisionPath: DecisionStep[];
}

const rav4SourceLinks: SourceLink[] = [
  {
    label: "Toyota 2020 RAV4 warranty and maintenance guide",
    href: "https://assets.sia.toyota.com/publications/en/omms-s/T-MMS-20RAV4/pdf/T-MMS-20RAV4.pdf"
  },
  {
    label: "Toyota 2021 RAV4 warranty and maintenance guide",
    href: "https://assets.sia.toyota.com/publications/en/omms-s/T-MMS-21RAV4/pdf/T-MMS-21RAV4.pdf"
  },
  {
    label: "Toyota 2021 RAV4 manuals",
    href: "https://www.toyota.com/owners/warranty-owners-manuals/digital/article/rav4/2021/om0r030u/in02se06/"
  },
  {
    label: "NHTSA RAV4 recall lookup",
    href: "https://www.nhtsa.gov/recalls"
  }
];

const commonRav4Evidence = {
  basedOn: [
    "Toyota's 2020 and 2021 RAV4 manuals and maintenance material for service requirements, warning information, and model-specific operating context.",
    "NHTSA's 2020 and 2021 RAV4 recall records for recall status and campaign context only.",
    "Editorial diagnosis guidance that separates normal wear patterns from vehicle-specific inspection and repair decisions."
  ],
  appliesTo: [
    "2019-2021 Toyota RAV4 XA50 gas and hybrid ownership patterns, with the strongest fit for 2020-2021 vehicles.",
    "Normal used-buyer, commuter, and family-crossover use cases where refinement, maintenance, and fitment discipline matter.",
    "North American-style ownership assumptions unless a page says otherwise."
  ],
  doesNotCover: [
    "RAV4 Prime high-voltage plug-in-specific diagnosis.",
    "A VIN-specific recall, warranty, or dealer service determination.",
    "One-to-one diagnosis for a car that has already been modified, crashed, flooded, or repaired with unknown parts."
  ],
  sourceLinks: rav4SourceLinks
};

const ownershipDecisionPath: DecisionStep[] = [
  {
    trigger: "The RAV4 has weak starts, a recent jump-start story, or a seller who says it only happens after sitting.",
    check: "Load-test the 12-volt battery, confirm charging voltage, and ask how the car was used before assuming a larger electrical fault.",
    nextStep: "Budget for a correct battery only after the use pattern and charging picture make sense."
  },
  {
    trigger: "Brake squeak appears after rain, low-speed use, or light stops.",
    check: "Separate pad compound, rotor surface, and hardware condition from actual braking performance.",
    nextStep: "Treat it as a refinement and service-quality issue unless pedal feel, stopping power, or warning lights point elsewhere."
  },
  {
    trigger: "The front or rear end clunks over driveways, speed bumps, or sharp pavement edges.",
    check: "Inspect sway-bar links, bushings, visible play, and tire/wheel condition before pricing larger suspension work.",
    nextStep: "Negotiate around a normal wear-item repair if the rest of the car is clean; walk away if the story stays vague."
  },
  {
    trigger: "The steering wheel vibrates or the RAV4 hums at highway speed.",
    check: "Rule out tire condition, balance, wheel damage, and rotation history before buying hubs or bigger chassis parts.",
    nextStep: "Only move toward wheel-bearing or suspension parts after the tire/wheel evidence is clean."
  }
];

const maintenanceDecisionPath: DecisionStep[] = [
  {
    trigger: "The car mostly does short trips or sits for days at a time.",
    check: "Treat battery reserve and charging recovery as usage-sensitive maintenance, not just mileage-based maintenance.",
    nextStep: "Tighten battery checks and avoid replacing parts until the charging picture is verified."
  },
  {
    trigger: "Tires show uneven wear, mixed brands, age cracking, or the ride feels rougher than expected.",
    check: "Inspect tires, alignment history, and wheel balance before calling the RAV4 inherently noisy.",
    nextStep: "Prioritize tire/alignment correction because it changes both comfort and diagnostic accuracy."
  },
  {
    trigger: "Brake noise has become repeat behavior.",
    check: "Check hardware service quality, rear pad behavior, rotor surface, and moisture-related patterns.",
    nextStep: "Spend once on a clean brake setup instead of repeatedly chasing the same squeak."
  }
];

const usedBuyerDecisionPath: DecisionStep[] = [
  {
    trigger: "A seller leans heavily on the RAV4 reputation but cannot show ordinary service proof.",
    check: "Look for documented oil services, tire rotation/alignment history, brake work, and battery age.",
    nextStep: "Pay RAV4 money only for a RAV4 with a boring maintenance trail."
  },
  {
    trigger: "The car is a higher trim but has vibration, brake noise, or a weak battery story.",
    check: "Value the condition and use case above equipment level.",
    nextStep: "A cleaner lower trim is usually a better buy than a premium trim with unresolved basics."
  },
  {
    trigger: "The decision is hybrid versus gas.",
    check: "Separate powertrain needs from trim preference and make sure the maintenance logic matches the version.",
    nextStep: "Use the hybrid-vs-gas comparison before treating every RAV4 as the same ownership decision."
  }
];

export const rav4GuideQuality: Record<string, QualityEnhancement> = {
  "toyota-rav4-xa50-common-problems": {
    evidence: {
      ...commonRav4Evidence,
      summary:
        "Separate the repeat XA50 ownership pattern from generic Toyota confidence. It uses official Toyota documents, recall checks, and buyer-visible symptoms as guardrails."
    },
    decisionPath: ownershipDecisionPath
  },
  "toyota-rav4-xa50-maintenance-costs-and-weak-points": {
    evidence: {
      ...commonRav4Evidence,
      summary:
        "RAV4 cost is treated as a maintenance and diagnosis problem first, showing where normal ownership usually spends money before small issues are turned into larger repair theories."
    },
    decisionPath: maintenanceDecisionPath
  },
  "toyota-rav4-xa50-reliability-scorecard": {
    evidence: {
      ...commonRav4Evidence,
      summary:
        "This scorecard is not a blanket reliability promise. It weighs the RAV4's strong baseline against the ordinary issues that still change a used-buyer decision."
    },
    decisionPath: usedBuyerDecisionPath
  },
  "toyota-rav4-xa50-what-to-check-before-buying": {
    evidence: {
      ...commonRav4Evidence,
      summary:
        "This checklist is built for a real viewing or test drive. It focuses on checks a buyer can notice or verify before relying on reputation, seller claims, or a generic inspection list."
    },
    decisionPath: usedBuyerDecisionPath
  },
  "toyota-rav4-xa50-what-to-avoid": {
    evidence: {
      ...commonRav4Evidence,
      summary:
        "This avoidance guide focuses on weak examples, not on dismissing the XA50 platform. The point is to catch the cases where reputation hides condition problems."
    },
    decisionPath: usedBuyerDecisionPath
  },
  "toyota-rav4-xa50-service-schedule-and-intervals": {
    evidence: {
      ...commonRav4Evidence,
      summary:
        "This interval guide uses Toyota maintenance material as the baseline, then translates it into the practical service areas that most affect how an XA50 feels as it ages."
    },
    decisionPath: maintenanceDecisionPath
  },
  "toyota-rav4-xa50-trims-which-one-to-buy": {
    evidence: {
      ...commonRav4Evidence,
      summary:
        "This trim guide keeps the buying advice tied to condition, powertrain, and use case instead of ranking trims by equipment alone."
    },
    decisionPath: usedBuyerDecisionPath
  },
  "toyota-rav4-xa50-should-you-buy-it-used": {
    evidence: {
      ...commonRav4Evidence,
      summary:
        "This final verdict weighs the main RAV4 ownership checks together instead of relying on one isolated repair concern."
    },
    decisionPath: usedBuyerDecisionPath
  }
};

export const rav4ProblemQuality: Record<string, QualityEnhancement> = {
  "battery-goes-dead-after-sitting": {
    evidence: {
      ...commonRav4Evidence,
      summary:
        "For the XA50 RAV4, this symptom starts as a 12-volt battery and use-pattern problem. Hybrid traction-battery diagnosis is intentionally outside this scope."
    },
    decisionPath: [
      {
        trigger: "The RAV4 starts after normal daily use but struggles after sitting.",
        check: "Load-test the 12-volt battery and check charging voltage before testing for parasitic draw.",
        nextStep: "Replace the battery only if testing shows weak reserve or age-related failure."
      },
      {
        trigger: "The battery is new but still goes flat.",
        check: "Look for charging issues, add-on accessories, and draw after sleep mode.",
        nextStep: "Move to draw diagnosis instead of buying another battery."
      },
      {
        trigger: "The vehicle is a hybrid and the warning behavior seems larger than a normal no-start.",
        check: "Separate 12-volt wake-up problems from hybrid-system warnings.",
        nextStep: "Use professional diagnosis if the issue involves hybrid-system faults, not only a weak 12-volt battery."
      }
    ]
  },
  "rear-brakes-squeak-after-rain": {
    evidence: {
      ...commonRav4Evidence,
      summary:
        "This RAV4 brake page is framed around weather-sensitive rear brake refinement. It does not treat every squeak as a safety failure or every pad change as a guaranteed fix."
    },
    decisionPath: [
      {
        trigger: "Rear squeak happens mostly after rain or overnight moisture.",
        check: "Inspect pad material, rotor surface, and hardware movement before changing parts.",
        nextStep: "Service hardware or choose a quieter pad if braking performance is otherwise normal."
      },
      {
        trigger: "Noise comes with vibration, grinding, poor pedal feel, or longer stopping distance.",
        check: "Inspect pad thickness, rotor condition, caliper movement, and warning lights.",
        nextStep: "Treat it as a brake repair issue, not only refinement."
      }
    ]
  },
  "front-end-clunk-when-pulling-into-driveways": {
    evidence: {
      ...commonRav4Evidence,
      summary:
        "RAV4 driveway-entry clunks stay in the small-parts-first lane unless inspection shows a larger suspension problem."
    },
    decisionPath: [
      {
        trigger: "The clunk appears over angled driveway entries or slow suspension compression.",
        check: "Inspect front sway-bar links, bushings, fasteners, and visible play.",
        nextStep: "Start with the confirmed wear item before pricing struts or broader suspension work."
      },
      {
        trigger: "The clunk appears with steering pull, uneven tire wear, or crash history.",
        check: "Inspect alignment, control arms, wheel/tire damage, and prior repair quality.",
        nextStep: "Escalate beyond links only when the inspection supports it."
      }
    ]
  },
  "rear-suspension-clunk-over-bumps": {
    evidence: {
      ...commonRav4Evidence,
      summary:
        "Rear clunks are treated as a refinement and wear-item diagnosis first, because the expensive version of this repair often starts with guessing."
    },
    decisionPath: [
      {
        trigger: "The rear knock appears over sharp bumps but the vehicle tracks normally.",
        check: "Inspect rear sway-bar links, bushings, loose cargo/tools, and obvious hardware play.",
        nextStep: "Repair the confirmed small part before replacing larger rear suspension components."
      },
      {
        trigger: "The rear feels unstable or the noise follows a heavy impact.",
        check: "Inspect alignment, tire damage, shock leakage, and structural repair signs.",
        nextStep: "Treat it as a broader safety inspection before buying links."
      }
    ]
  },
  "steering-wheel-vibrates-at-highway-speed": {
    evidence: {
      ...commonRav4Evidence,
      summary:
        "For the XA50 RAV4, highway vibration should be tire-and-wheel-led until the evidence points elsewhere."
    },
    decisionPath: [
      {
        trigger: "The vibration is strongest at highway speed and changes with road surface or tire rotation.",
        check: "Check tire wear, balance, wheel damage, and alignment history first.",
        nextStep: "Correct tire/wheel issues before moving to hubs or suspension."
      },
      {
        trigger: "The hum grows with speed and changes when loading one side of the vehicle.",
        check: "Road-test for wheel-bearing behavior after tire noise has been ruled out.",
        nextStep: "Only buy a hub assembly once the bearing diagnosis is clear."
      }
    ]
  }
};

export const rav4BestQuality: Record<string, QualityEnhancement> = {
  "best-batteries-for-toyota-rav4-2021": rav4ProblemQuality["battery-goes-dead-after-sitting"],
  "best-brake-pads-for-toyota-rav4-2021": rav4ProblemQuality["rear-brakes-squeak-after-rain"],
  "best-brake-pads-for-toyota-rav4-2020": rav4ProblemQuality["rear-brakes-squeak-after-rain"],
  "best-rear-brake-pads-for-toyota-rav4-2021": rav4ProblemQuality["rear-brakes-squeak-after-rain"],
  "best-front-sway-bar-links-for-toyota-rav4-2021": rav4ProblemQuality["front-end-clunk-when-pulling-into-driveways"],
  "best-rear-sway-bar-links-for-toyota-rav4-2021": rav4ProblemQuality["rear-suspension-clunk-over-bumps"],
  "best-tires-for-toyota-rav4-2021-highway-vibration": rav4ProblemQuality["steering-wheel-vibrates-at-highway-speed"],
  "best-wheel-bearings-for-toyota-rav4-2021": rav4ProblemQuality["steering-wheel-vibrates-at-highway-speed"],
  "best-brake-rotors-for-toyota-rav4-2021": rav4ProblemQuality["rear-brakes-squeak-after-rain"]
};
