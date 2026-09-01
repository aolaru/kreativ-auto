import type { QualityEnhancement, SourceLink } from "./toyota-rav4-quality";

const cx30SourceLinks: SourceLink[] = [
  {
    label: "Mazda 2020 CX-30 scheduled maintenance",
    href: "https://www.mazdausa.com/static/manuals/2020/cx-30/contents/07020601.html"
  },
  {
    label: "Mazda 2020 CX-30 owner-maintenance precautions",
    href: "https://www.mazdausa.com/static/manuals/2020/cx-30/contents/07031603.html"
  },
  {
    label: "NHTSA 2020 Mazda CX-30 brake-caliper recall report",
    href: "https://static.nhtsa.gov/odi/rcl/2020/RCLRPT-20V346-7731.PDF"
  },
  {
    label: "Mazda front-suspension rattle bulletin 02-004/21",
    href: "https://static.nhtsa.gov/odi/tsbs/2021/MC-10188017-0001.pdf"
  }
];

const cx30Evidence = {
  basedOn: [
    "Mazda's US-market 2020 CX-30 maintenance schedule and owner-maintenance precautions for service timing and owner checks.",
    "NHTSA's published brake-caliper recall report for campaign context only; VIN lookup is still required for one vehicle.",
    "Mazda's front-suspension bulletin for its stated build and symptom scope, not as a frequency claim or a diagnosis for every rattle."
  ],
  appliesTo: [
    "US-market 2020 Mazda CX-30 DM with the 2.5L gasoline engine and standard front suspension.",
    "Used-buyer and ownership checks that can be supported by service records, VIN recall status, inspection, and a road test."
  ],
  doesNotCover: [
    "VIN-specific recall completion, warranty coverage, collision, flood, modified suspension, or non-US specifications.",
    "A repair diagnosis, a failure-rate estimate, or exact parts fitment without a current VIN-specific catalog check."
  ],
  sourceLinks: cx30SourceLinks
};

const cx30DecisionPath = [
  {
    trigger: "A 2020 CX-30 is being considered without a complete maintenance or recall record.",
    check: "Match the VIN, build information, maintenance invoices, tire condition, brake condition, and recall result before using the asking price as the starting point.",
    nextStep: "Treat missing records as a reason for a baseline inspection and budget, not as proof of a specific fault."
  },
  {
    trigger: "The car has a front rattle or clunk over bumps.",
    check: "Have a qualified technician reproduce the noise and assess Mazda's bulletin scope, damper path, brakes, mounts, links, and other hardware before ordering a part.",
    nextStep: "Repair the confirmed cause and verify the result; a rattle alone does not identify a stabilizer link."
  },
  {
    trigger: "The next service or ownership cost is unclear.",
    check: "Use Mazda's schedule, the vehicle status monitor, recorded mileage, operating conditions, and the actual condition of tires, brakes, and fluids.",
    nextStep: "Separate routine maintenance from diagnosis and compare itemized quotes for confirmed work."
  }
];

const cx30Quality: QualityEnhancement = {
  evidence: {
    ...cx30Evidence,
    summary:
      "This CX-30 coverage is based on Mazda maintenance material, a published recall report, and a bounded suspension bulletin. It does not convert a model-wide reputation or one technical bulletin into a prediction for an individual car."
  },
  decisionPath: cx30DecisionPath
};

export const cx30CarQuality: Record<string, QualityEnhancement> = {
  "mazda-cx-30-2020": cx30Quality
};

export const cx30ProblemQuality: Record<string, QualityEnhancement> = {
  "front-end-clunk-over-bumps-mazda-cx-30-2020": cx30Quality
};

export const cx30BestQuality: Record<string, QualityEnhancement> = {
  "best-front-sway-bar-links-for-mazda-cx-30-2020": cx30Quality
};

export const cx30GuideQuality: Record<string, QualityEnhancement> = {
  "mazda-cx-30-2020-what-to-check-before-buying": cx30Quality,
  "mazda-cx-30-2020-service-schedule-and-maintenance-record": cx30Quality,
  "mazda-cx-30-2020-maintenance-cost-framework": cx30Quality,
  "mazda-cx-30-2020-what-to-avoid": cx30Quality
};
