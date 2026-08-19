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

const civicSourceLinks: SourceLink[] = [
  {
    label: "Honda maintenance minder",
    href: "https://owners.honda.com/utility/download?path=%2Fstatic%2Fpdfs%2F2019%2FCivic+Sedan%2F2019_Civic_4D_Maintenance_Minder.pdf"
  },
  {
    label: "Honda warranty guide",
    href: "https://owners.honda.com/Documentum/Warranty/Handbooks/2019_Honda_Warranty_Basebook_AWL07531_Petrol_Hybrid_PHEV__SIS.pdf"
  },
  {
    label: "NHTSA 2019 recalls API",
    href: "https://api.nhtsa.gov/recalls/recallsByVehicle?make=Honda&model=Civic&modelYear=2019"
  }
];

const commonCivicEvidence = {
  basedOn: [
    "Honda's 2019 Civic maintenance minder and warranty material for scheduled maintenance and vehicle-specific coverage context.",
    "NHTSA's 2019 Civic recall records for recall status and campaign context only.",
    "Editorial diagnosis guidance that separates ordinary commuter wear from vehicle-specific inspection and repair decisions."
  ],
  appliesTo: [
    "2019-2021 facelifted tenth-generation Honda Civic gas sedan, coupe, and hatchback ownership patterns.",
    "Mainstream 2.0 NA and 1.5T daily-driver use cases where A/C performance, ignition maintenance, battery reserve, brakes, and front-end refinement matter.",
    "North American-style ownership assumptions unless a specific page says otherwise."
  ],
  doesNotCover: [
    "Civic Si, Type R, track-use, heavily modified, or export-market variants with different brake, suspension, powertrain, or HVAC packaging.",
    "A VIN-specific recall, warranty, dealer goodwill, or service-bulletin determination.",
    "One-to-one diagnosis for a car that has crash history, flood history, aftermarket tuning, or unknown repair quality."
  ],
  sourceLinks: civicSourceLinks
};

const ownershipDecisionPath: DecisionStep[] = [
  {
    trigger: "The A/C cools better while driving than it does at idle or in traffic.",
    check: "Confirm fan operation, refrigerant charge, leak evidence, and condenser condition before buying parts.",
    nextStep: "Treat the condenser as a serious suspect only after the system test points there."
  },
  {
    trigger: "The Civic has rough idle, hesitation, cold-start stumble, or a misfire code.",
    check: "Start with spark plugs, coils, maintenance age, and engine-specific fitment before drifting toward fuel or electronics theories.",
    nextStep: "Buy ignition parts only after confirming the symptom pattern and cylinder-side evidence."
  },
  {
    trigger: "The battery warning flickers or the car feels weak after short commuter use.",
    check: "Test battery health and charging voltage before assuming alternator or module trouble.",
    nextStep: "Replace the battery or chase charging only after the voltage evidence is clear."
  },
  {
    trigger: "Low-speed brake squeal or small front-end rattles make the car feel older than it should.",
    check: "Separate pad/hardware refinement and sway-bar-link wear from larger brake or suspension failures.",
    nextStep: "Keep the repair in the wear-item tier unless inspection proves a bigger problem."
  }
];

const maintenanceDecisionPath: DecisionStep[] = [
  {
    trigger: "The Civic is used mostly for short trips or commuter traffic.",
    check: "Watch battery reserve, brake noise, idle A/C behavior, and maintenance minder timing together.",
    nextStep: "Tighten routine checks instead of waiting for several small complaints to stack up."
  },
  {
    trigger: "Idle quality or acceleration starts feeling uneven.",
    check: "Confirm plug age, coil behavior, codes, and engine variant before replacing random parts.",
    nextStep: "Keep the first spend on verified ignition maintenance when the evidence supports it."
  },
  {
    trigger: "Comfort and refinement are slipping but the car still drives normally.",
    check: "Check A/C performance, brake hardware, front links, tires, and battery before calling the car unreliable.",
    nextStep: "Budget for the specific weak area instead of letting the diagnosis become broad."
  }
];

const usedBuyerDecisionPath: DecisionStep[] = [
  {
    trigger: "A seller relies on the Civic reputation but cannot explain maintenance, A/C, battery, or engine-specific details.",
    check: "Ask for service history, engine variant, A/C work, battery age, and recent brake/front-end repairs.",
    nextStep: "Pay Civic money only when the ordinary weak points are either clean or priced in."
  },
  {
    trigger: "The choice is 1.5T versus 2.0.",
    check: "Separate the daily-use, drivability, and maintenance tradeoffs instead of treating every facelift Civic the same.",
    nextStep: "Use the engine comparison before choosing trim or buying powertrain-related parts."
  },
  {
    trigger: "The test drive shows A/C weakness, front-end rattle, brake squeal, or battery warning behavior.",
    check: "Treat those as negotiation and inspection items, not background Civic character.",
    nextStep: "Walk away if the explanation stays vague or the price assumes a problem-free car."
  }
];

export const hondaCivicGuideQuality: Record<string, QualityEnhancement> = {
  "honda-civic-10th-gen-facelift-common-problems": {
    evidence: {
      ...commonCivicEvidence,
      summary:
        "Separate the facelift Civic repeat ownership pattern from generic Civic confidence. It uses official Honda material, recall checks, and buyer-visible symptoms as guardrails."
    },
    decisionPath: ownershipDecisionPath
  },
  "honda-civic-10th-gen-facelift-maintenance-costs-and-weak-points": {
    evidence: {
      ...commonCivicEvidence,
      summary:
        "Civic cost is treated as a maintenance and diagnosis problem first, showing where ordinary commuter use usually spends money before small issues become larger repair theories."
    },
    decisionPath: maintenanceDecisionPath
  },
  "honda-civic-10th-gen-facelift-reliability-scorecard": {
    evidence: {
      ...commonCivicEvidence,
      summary:
        "This scorecard is not a blanket reliability promise. It weighs the Civic's strong daily-driver baseline against the ordinary weak points that still change a used-buyer decision."
    },
    decisionPath: usedBuyerDecisionPath
  },
  "honda-civic-10th-gen-facelift-what-to-check-before-buying": {
    evidence: {
      ...commonCivicEvidence,
      summary:
        "This checklist is built for a real Civic viewing or test drive. It focuses on checks a buyer can notice or verify before relying on reputation, trim labels, or generic Civic advice."
    },
    decisionPath: usedBuyerDecisionPath
  },
  "honda-civic-10th-gen-facelift-what-to-avoid": {
    evidence: {
      ...commonCivicEvidence,
      summary:
        "This avoidance guide focuses on weak examples, not on dismissing the facelift Civic. The point is to catch cars where the reputation hides A/C, battery, brake, engine, or front-end issues."
    },
    decisionPath: usedBuyerDecisionPath
  },
  "honda-civic-10th-gen-facelift-service-schedule-and-intervals": {
    evidence: {
      ...commonCivicEvidence,
      summary:
        "This interval guide uses Honda maintenance material as the baseline, then translates it into the practical service areas that most affect how a facelift Civic feels as it ages."
    },
    decisionPath: maintenanceDecisionPath
  },
  "honda-civic-10th-gen-facelift-trims-and-engines-which-one-to-buy": {
    evidence: {
      ...commonCivicEvidence,
      summary:
        "This trim-and-engine guide keeps the buying advice tied to condition, powertrain, and use case instead of ranking Civics by equipment or reputation alone."
    },
    decisionPath: usedBuyerDecisionPath
  },
  "honda-civic-10th-gen-facelift-should-you-buy-it-used": {
    evidence: {
      ...commonCivicEvidence,
      summary:
        "This final verdict weighs the main Civic ownership checks together instead of relying on one isolated repair concern."
    },
    decisionPath: usedBuyerDecisionPath
  }
};

export const hondaCivicProblemQuality: Record<string, QualityEnhancement> = {
  "air-conditioner-blows-warm-at-idle": {
    evidence: {
      ...commonCivicEvidence,
      summary:
        "For the facelift Civic, weak idle A/C is treated as a system-diagnosis problem before it becomes a condenser-shopping problem. Fan behavior, charge, leaks, and fitment still matter."
    },
    decisionPath: [
      {
        trigger: "A/C gets warmer at idle but improves once the car is moving.",
        check: "Confirm condenser airflow, fan operation, refrigerant charge, and leak evidence.",
        nextStep: "Move toward condenser or system repair only after the test results support it."
      },
      {
        trigger: "Cooling is weak all the time, not just at idle.",
        check: "Check charge level, compressor behavior, leaks, and temperature split before blaming one part.",
        nextStep: "Diagnose the full system instead of ordering the common Civic part first."
      }
    ]
  },
  "battery-light-flickers-at-idle": {
    evidence: {
      ...commonCivicEvidence,
      summary:
        "Civic idle battery-light complaints stay grounded in battery health, charging voltage, and usage pattern before assuming a larger electrical fault."
    },
    decisionPath: [
      {
        trigger: "The battery light flickers at idle or after short trips.",
        check: "Test battery health, charging voltage, belt condition, and accessory load.",
        nextStep: "Replace or repair only after voltage behavior confirms the weak point."
      },
      {
        trigger: "Warning lights appear with unstable idle, misfire, or repeated no-start behavior.",
        check: "Separate charging faults from drivability faults and stored codes.",
        nextStep: "Escalate diagnosis rather than buying a battery or alternator blindly."
      }
    ]
  },
  "front-brakes-squeal-at-low-speed": {
    evidence: {
      ...commonCivicEvidence,
      summary:
        "This Civic brake page is framed around low-speed refinement. It does not treat every squeak as a safety failure or every pad change as a guaranteed fix."
    },
    decisionPath: [
      {
        trigger: "Squeal happens at low speed but braking remains normal.",
        check: "Inspect pad compound, shims, hardware contact points, and rotor surface.",
        nextStep: "Treat it as a pad and hardware refinement problem unless braking performance says otherwise."
      },
      {
        trigger: "Noise comes with grinding, vibration, pull, poor pedal feel, or warning lights.",
        check: "Inspect pad thickness, rotors, calipers, and hydraulic behavior.",
        nextStep: "Treat it as a brake repair issue, not only noise cleanup."
      }
    ]
  },
  "front-suspension-rattles-over-small-bumps": {
    evidence: {
      ...commonCivicEvidence,
      summary:
        "This Civic front-end page keeps small rattles in the wear-item diagnosis lane unless inspection shows larger suspension or crash-related issues."
    },
    decisionPath: [
      {
        trigger: "The front end rattles over small bumps but the car tracks normally.",
        check: "Inspect front sway-bar links, bushings, loose hardware, and tire condition first.",
        nextStep: "Start with confirmed small wear items before pricing struts or broader suspension work."
      },
      {
        trigger: "Rattle appears with pull, uneven tire wear, or accident history.",
        check: "Inspect alignment, control arms, wheel damage, and prior repair quality.",
        nextStep: "Escalate beyond links only when the inspection supports it."
      }
    ]
  },
  "engine-misfires-at-idle": {
    evidence: {
      ...commonCivicEvidence,
      summary:
        "For the facelift Civic, idle misfire guidance starts with spark-side maintenance and engine-specific fitment before moving to broader fuel or control-system theories."
    },
    decisionPath: [
      {
        trigger: "Idle is rough, a cylinder code appears, or the car stumbles after a cold start.",
        check: "Confirm plug age, coil behavior, code history, and whether the car is 1.5T or 2.0.",
        nextStep: "Replace plugs or coils when the evidence points there instead of buying random ignition parts."
      },
      {
        trigger: "Misfire continues after verified plugs and coils.",
        check: "Check fuel, compression, vacuum leaks, and engine-specific service history.",
        nextStep: "Move beyond basic ignition only after the simple Civic checks are clean."
      }
    ]
  },
  "engine-hesitates-under-acceleration": {
    evidence: {
      ...commonCivicEvidence,
      summary:
        "Acceleration hesitation on a Civic should stay engine-specific. The 1.5T and 2.0 can share symptoms while still needing different context."
    },
    decisionPath: [
      {
        trigger: "The car hesitates under light or moderate acceleration.",
        check: "Check plug age, coil behavior, air intake issues, stored codes, and engine variant.",
        nextStep: "Use the 1.5T-vs-2.0 context before assuming the same repair fits every Civic."
      }
    ]
  },
  "rough-cold-start": {
    evidence: {
      ...commonCivicEvidence,
      summary:
        "Cold-start roughness is treated as a maintenance and ignition-context problem first, not a reason to jump straight to a larger engine diagnosis."
    },
    decisionPath: [
      {
        trigger: "The Civic starts rough when cold but improves after warming up.",
        check: "Check plug age, coil behavior, battery strength, stored codes, and recent maintenance.",
        nextStep: "Correct verified maintenance gaps before escalating the diagnosis."
      }
    ]
  },
  "clicking-noise-when-turning": {
    evidence: {
      ...commonCivicEvidence,
      summary:
        "Turning clicks are treated as CV-joint diagnosis first, with side confirmation and boot inspection ahead of parts ordering."
    },
    decisionPath: [
      {
        trigger: "Clicking repeats during tight turns under light throttle.",
        check: "Inspect both outer CV boots, grease loss, and which side clicks under load.",
        nextStep: "Replace the confirmed axle only after the side and joint behavior are clear."
      }
    ]
  },
  "rear-brakes-squeak-after-overnight-rain": {
    evidence: {
      ...commonCivicEvidence,
      summary:
        "This Civic rear-brake page treats overnight rain squeak as a moisture and pad/hardware behavior issue unless braking performance points elsewhere."
    },
    decisionPath: [
      {
        trigger: "Rear squeak appears after overnight moisture and fades with use.",
        check: "Inspect rear pads, rotor surface, parking brake behavior, and hardware movement.",
        nextStep: "Service or replace parts only when the noise pattern and inspection support it."
      }
    ]
  }
};

export const hondaCivicBestQuality: Record<string, QualityEnhancement> = {
  "best-ac-condensers-for-honda-civic-2019": hondaCivicProblemQuality["air-conditioner-blows-warm-at-idle"],
  "best-batteries-for-honda-civic-2019": hondaCivicProblemQuality["battery-light-flickers-at-idle"],
  "best-front-brake-pads-for-honda-civic-2019": hondaCivicProblemQuality["front-brakes-squeal-at-low-speed"],
  "best-rear-brake-pads-for-honda-civic-2019": hondaCivicProblemQuality["rear-brakes-squeak-after-overnight-rain"],
  "best-front-sway-bar-links-for-honda-civic-2019": hondaCivicProblemQuality["front-suspension-rattles-over-small-bumps"],
  "best-ignition-coils-for-honda-civic-2019": hondaCivicProblemQuality["engine-misfires-at-idle"],
  "best-spark-plugs-for-honda-civic-2019": hondaCivicProblemQuality["engine-misfires-at-idle"],
  "best-cv-axles-for-honda-civic-2019": hondaCivicProblemQuality["clicking-noise-when-turning"]
};
