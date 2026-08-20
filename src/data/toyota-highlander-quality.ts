import type { QualityEnhancement, SourceLink } from "./toyota-rav4-quality";

const highlanderSourceLinks: SourceLink[] = [
  {
    label: "Toyota 2020 Highlander manuals and warranties",
    href: "https://www.toyota.com/owners/warranty-owners-manuals/vehicle/highlander/2020/"
  },
  {
    label: "Toyota 2020 Highlander warranty and maintenance guide",
    href: "https://assets.sia.toyota.com/publications/en/omms-s/T-MMS-20Highlander/pdf/T-MMS-20Highlander.pdf"
  },
  {
    label: "NHTSA 2020 Toyota Highlander recall record",
    href: "https://static.nhtsa.gov/odi/rcl/2020/RCMN-20V633-2759.pdf"
  }
];

const highlanderEvidence = {
  basedOn: [
    "Toyota's 2020 Highlander manuals and warranty-and-maintenance guide for model-year maintenance, warning, and operating context.",
    "NHTSA's recall lookup and the published 2020 Highlander recall record for campaign context only.",
    "Manufacturer brake-pad information for material and product-selection criteria; exact vehicle fitment still requires the supplier catalog and VIN."
  ],
  appliesTo: [
    "US-market 2020 Toyota Highlander XU70 daily-driver ownership, including gas and hybrid models where a standard 12-volt battery, tire, or friction-brake concern is being assessed.",
    "Used-buyer and owner checks that can be confirmed through records, inspection, and a road test before parts are ordered."
  ],
  doesNotCover: [
    "VIN-specific recall completion, warranty coverage, or dealer diagnosis.",
    "Exact brake, wheel, tire, or battery fitment across every trim, drivetrain, wheel package, and market version.",
    "Hybrid high-voltage system diagnosis, collision damage, flood damage, or modifications."
  ],
  sourceLinks: highlanderSourceLinks
};

const highlanderBrakeDecisionPath = [
  {
    trigger: "The Highlander has brake noise at low speed but normal pedal feel and stopping performance.",
    check: "Inspect pad thickness, rotor surface, pad hardware, and the exact axle and trim before assuming a caliper or a model-wide fault.",
    nextStep: "Correct the confirmed wear or hardware issue, then confirm the replacement pad listing against the vehicle's exact configuration."
  },
  {
    trigger: "Brake noise arrives with grinding, vibration, pull, warning lights, a soft pedal, or a longer stopping distance.",
    check: "Treat it as a safety-related brake inspection: check friction material, rotors, caliper movement, hydraulic condition, and stored warnings.",
    nextStep: "Do not select pads from a noise-only shortlist until the braking fault has been diagnosed and repaired."
  },
  {
    trigger: "The SUV feels noisy or unsettled at highway speed.",
    check: "Check tire age, wear pattern, pressure, balance, wheel damage, and alignment history before attributing the issue to suspension or bearings.",
    nextStep: "Resolve tire and wheel evidence first, then escalate only if the symptom remains."
  }
];

const highlanderBrakeQuality: QualityEnhancement = {
  evidence: {
    ...highlanderEvidence,
    summary:
      "Toyota's model-year material supplies the service context, NHTSA records supply campaign context, and the diagnosis starts with the observed brake symptom. Ordinary brake wear is not presented as a model-wide fault."
  },
  decisionPath: highlanderBrakeDecisionPath
};

export const highlanderCarQuality: Record<string, QualityEnhancement> = {
  "toyota-highlander-2020": {
    evidence: {
      ...highlanderEvidence,
      summary:
        "Assess this Highlander through its records, tire and brake condition, 12-volt battery health, and VIN-specific recall status. General reputation is not a substitute for those checks."
    },
    decisionPath: highlanderBrakeDecisionPath
  }
};

export const highlanderProblemQuality: Record<string, QualityEnhancement> = {
  "brake-squeal-at-low-speed-toyota-highlander-2020": highlanderBrakeQuality
};

export const highlanderBestQuality: Record<string, QualityEnhancement> = {
  "best-brake-pads-for-toyota-highlander-2020": highlanderBrakeQuality
};

export const highlanderGuideQuality: Record<string, QualityEnhancement> = {
  "toyota-highlander-xu70-what-to-check-before-buying": {
    evidence: {
      ...highlanderEvidence,
      summary:
        "The purchase decision is based on Toyota's model-year maintenance material, recall records, a documented service history, and condition found during inspection and a road test. It is not based on a blanket reliability claim."
    },
    decisionPath: highlanderBrakeDecisionPath
  }
};
