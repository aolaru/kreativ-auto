// Research checked 2026-08-31. Draft eligibility is separate from indexing approval.
const sources = {
  mount: { label: "Mazda TSB 02-004/21: front suspension rattle and VIN limits", href: "https://static.nhtsa.gov/odi/tsbs/2021/MC-10188017-0001.pdf" },
  damper: { label: "Mazda front suspension rattle service alert, August 25, 2022", href: "https://static.nhtsa.gov/odi/tsbs/2022/MC-10218775-0001.pdf" },
  maintenance: { label: "Mazda 2020 CX-30 US maintenance schedule", href: "https://www.mazdausa.com/static/manuals/2020/cx-30/contents/07020601.html" },
  brakes: { label: "Mazda brake noise, judder and dragging service alert, October 2024", href: "https://static.nhtsa.gov/odi/tsbs/2024/MC-11009644-0001.pdf" },
  fitment: { label: "2020 CX-30 Base 2.5L front suspension catalog", href: "https://mazda.oempartsonline.com/v-2020-mazda-cx-30--base--2-5l-l4-gas/suspension--front-suspension" },
  part: { label: "Mazda-Parts: BDTS-34-170A product and price", href: "https://www.mazda-parts.com/oem-parts/mazda-stabilizer-link-bdts34170a" },
  alternateSeller: { label: "MazdaStuff: BDTS-34-170A product and price", href: "https://www.mazdastuff.com/CX-30-Front-Suspension-Stabilizer-Bar-Link-p/bdts-34-170a-101883.htm" }
};
const link = (source) => `[${source.label}](${source.href})`;
const image = "/images/photos/cars/mazda-cx-30-2020.webp";
const fitment = {
  appliesTo: ["US-market 2020 Mazda CX-30 DM with the 2.5L gasoline engine and standard front suspension; FWD/AWD applicability must be checked against the VIN before ordering."],
  doesNotApplyTo: ["Not a fitment claim for modified suspension, other model years, turbo, diesel, hybrid, or non-US specifications. Confirm VIN, production date and current supersession with the supplier."],
  phaseDifferences: ["The mount bulletin has a narrow early-production VIN limit; it must not be applied to every 2020 CX-30. The later service alert has a different production-date decision."],
  powertrainDifferences: ["The catalog reference is a 2020 Base 2.5L application. Shared part descriptions across Mazda models are not proof of universal compatibility."]
};
const decisionPath = [
  { trigger: "A front rattle occurs over bumps.", check: "Have a technician reproduce the noise and check the VIN, build date and previous repairs against Mazda TSB 02-004/21.", nextStep: "Follow the applicable mount investigation before treating a sway-bar link as the cause." },
  { trigger: "The mount bulletin does not apply, or the noise remains after the relevant repair.", check: "Ask the workshop to check the August 2022 Mazda service alert and current Mazda service information.", nextStep: "Have the damper and other suspension causes diagnosed; do not order links just because the symptom sounds similar." },
  { trigger: "Inspection identifies a worn stabilizer link.", check: "Confirm the actual damaged joint or attachment, correct front position and VIN-specific part number.", nextStep: "Compare the genuine part and supplier terms, obtain an itemized repair quote, then verify that the repair resolves the noise." }
];
const evidence = {
  summary: "Mazda documents front suspension rattle investigations involving mounts and dampers. These records support a diagnosis-first approach, not a claim that sway-bar links commonly fail on this model.",
  basedOn: ["Mazda service documents hosted by NHTSA for symptom-specific scope and diagnostic branches.", "Mazda's model-year maintenance schedule and dealer catalogs for inspection context and a conditional genuine-parts reference."],
  appliesTo: fitment.appliesTo,
  doesNotCover: ["Failure rates, a reliability ranking, personal testing, or confirmation that an individual vehicle has this fault.", "Current warranty eligibility, VIN-specific recall status, workshop repair instructions, or a guaranteed cure from replacing links."],
  sourceLinks: [sources.mount, sources.damper, sources.maintenance, sources.brakes]
};
const parts = {
  selectionCriteria: [
    "Buy only after inspection confirms a stabilizer-link fault; mount, damper and brake noise require different repairs.",
    "Confirm the VIN, front axle position, production date, engine and drivetrain in the current supplier catalog. BDTS-34-170A is the researched genuine reference, not a universal fitment promise.",
    "Check whether the offer covers one link or a pair, included fasteners, current supersessions and return restrictions before comparing costs.",
    "Compare delivered price, tax, shipping, warranty and stock. Obtain a separate labor quote; a listed part price is not an installed repair estimate."
  ],
  alternatives: [
    "Retain serviceable links and have the mount/damper investigation completed if the noise has not been isolated. Buying no link is the appropriate alternative when the fault is elsewhere.",
    "Ask a local Mazda dealer for a VIN-confirmed supply-and-fit quote for the same genuine part; this adds a single point of responsibility for fitment and labor.",
    "An aftermarket link is an option only after an exact part-number cross-reference and application check. No MOOG or Delphi product-family recommendation is retained because the researched material did not establish an exact match."
  ],
  sourceLinks: [sources.fitment, sources.part, sources.alternateSeller],
  pricingCheckedAt: "2026-08-31",
  priceVerified: true,
  priceSourceLinks: [sources.part, sources.alternateSeller]
};
const researchBody = [
  "## Evidence and limits",
  evidence.summary,
  `Sources: ${evidence.sourceLinks.map(link).join("; ")}. These documents do not establish how frequently the problem occurs. Ask a Mazda workshop to confirm current applicability and any superseding instructions.`,
  "## Diagnostic decisions",
  ...decisionPath.map((step, i) => `${i + 1}. **${step.trigger}** ${step.check} ${step.nextStep}`),
  "Workshop inspection is required for a diagnosis. Stop driving and arrange assistance if the noise accompanies steering looseness, loss of stability, braking deterioration or visible wheel displacement. Do not work beneath a vehicle supported only by a jack. Strut and spring work belongs with a properly equipped technician."
];
const product = {
  name: "Genuine Mazda front stabilizer link BDTS-34-170A",
  price: "$122.89",
  affiliate_url: sources.part.href,
  summary: "One genuine part reference for a confirmed link repair, subject to VIN verification. Listed price checked August 31, 2026; confirm quantity, shipping and tax. No independent durability testing or product rating is claimed."
};

export const mazdaCx30Seed = {
  slug: "mazda-cx-30-2020",
  brand: "Mazda",
  modelDisplay: "Mazda CX-30",
  model: "CX-30",
  year: 2020,
  generation: "First Generation",
  generationCode: "DM",
  generationYears: "2020 model year covered",
  image,
  kind: "swayBarLinks",
  products: [product],
  carDescription: "Review a 2020 Mazda CX-30 through its maintenance records and current condition. For front suspension rattles, distinguish Mazda's mount and damper service information from a separately confirmed stabilizer-link fault.",
  commonProblems: ["A front suspension rattle that needs symptom and build-date checks, not automatic link replacement.", "Brake noise or vibration requiring a separate brake inspection.", "Tire wear or road noise that should be assessed from tire condition and service records."],
  maintenanceTips: ["Follow Mazda's normal or severe-use maintenance schedule as appropriate to the vehicle's use.", "Keep inspection records for brakes, steering, suspension, tires and chassis fasteners.", "Record when a noise occurs, previous repairs and the vehicle build date before seeking a workshop diagnosis."],
  carFaqs: [
    { question: "Does a rattle mean the CX-30 needs sway-bar links?", answer: "No. Mazda documents mount and damper investigations; replace a link only after its fault is confirmed." },
    { question: "Do Mazda service bulletins prove every 2020 CX-30 is affected?", answer: "No. A service bulletin describes a conditional repair investigation, not a failure rate or a universal recall." }
  ],
  reviewReadiness: { evidence, decisionPath, parts },
  contentOverrides: {
    car: {
      hasResearchBody: true,
      metaTitle: "2020 Mazda CX-30: Maintenance and Front Suspension Checks",
      metaDescription: "Check 2020 Mazda CX-30 maintenance records and distinguish front suspension rattle causes before selecting replacement parts.",
      excerpt: "Maintenance context and source-backed suspension checks for a US-market 2020 CX-30.",
      fitment,
      body: [
        `Mazda's ${link(sources.maintenance)} includes brakes, steering, suspension and wheel-bearing checks. Follow the schedule appropriate to driving conditions rather than assuming a noise identifies a specific failed part.`,
        `For a noise assessment, start with the [front-rattle diagnosis](/problems/front-end-clunk-over-bumps-mazda-cx-30-2020/). The [front-link buying notes](/best/best-front-sway-bar-links-for-mazda-cx-30-2020/) apply only after a link fault has been confirmed.`,
        ...researchBody
      ]
    },
    problem: {
      hasResearchBody: true,
      title: "2020 Mazda CX-30 front rattle over bumps: mounts, dampers and links",
      metaTitle: "2020 Mazda CX-30 Front Rattle: Diagnose Before Replacing Links",
      metaDescription: "Check Mazda's front-rattle service information, VIN limits and repair history before assuming a 2020 CX-30 needs stabilizer links.",
      excerpt: "A bump-related rattle needs a diagnosis; Mazda documents mount and damper paths as well as ordinary inspection needs.",
      heroImage: image,
      symptoms: ["Front rattle over bumps or uneven pavement.", "Noise that continues after an earlier suspension repair.", "A change in noise with braking, steering or road surface that needs to be recorded for the technician."],
      causes: ["Mount-related noise within the specific scope of Mazda TSB 02-004/21.", "Damper-related noise considered in Mazda's August 2022 service alert.", "A worn link or other loose hardware only when inspection confirms it; brake hardware can also rattle."],
      solutions: ["Reproduce and localize the noise with a qualified technician.", "Check Mazda service information, VIN/build date and previous repair records.", "Repair the confirmed fault and verify the result before considering further parts."],
      urgency: "Arrange prompt inspection; escalate immediately if steering, braking or stability changes.",
      canYouDrive: "Noise alone cannot establish safety. Obtain a workshop assessment; stop and arrange assistance if control or braking is affected.",
      estimatedCost: "An itemized diagnosis and repair quote is required; the linked part price excludes labor and may not be the needed repair.",
      diyDifficulty: "Owner-level symptom recording; professional diagnosis and suspension repair recommended.",
      whenToSeeMechanic: ["A persistent or worsening front noise.", "A rattle that remains after parts have already been replaced.", "Any steering looseness, instability or braking change: stop driving and arrange assistance."],
      commonMistakes: ["Calling links the usual cause without confirming a failed joint.", "Applying an early-production bulletin to every 2020 vehicle.", "Confusing a technical service bulletin with a recall or a guarantee of free repair."],
      quickVerdict: "Check Mazda's documented mount/damper paths and inspect the vehicle before ordering links.",
      firstCheck: "Record the noise conditions, VIN, build date and repair history for a workshop assessment.",
      confusedWith: ["Brake pad or mounting-hardware rattle, covered separately in Mazda brake service information.", "Tire and wheel noise that changes with speed or road surface."],
      stopDrivingIf: ["Steering becomes loose, braking deteriorates, the vehicle loses stability or a wheel visibly shifts."],
      faqs: [
        { question: "Which early CX-30 vehicles are described in TSB 02-004/21?", answer: "The bulletin specifies 2020 CX-30 VINs below 3MVDM******100187, produced before October 15, 2019. Have a Mazda dealer confirm applicability." },
        { question: "Should I replace links if the mount repair did not fix the rattle?", answer: "Not on that basis alone. The later Mazda service alert includes a damper investigation and further diagnosis." }
      ],
      fitment,
      body: [
        `The ${link(sources.mount)} concerns a defined early-production group and mounting-rubber clearance. It is not evidence that every 2020 CX-30 has worn links.`,
        `The ${link(sources.damper)} covers 2020–2022 CX-30 complaints and adds a front-damper branch for vehicles built before January 1, 2022, after checking the earlier bulletin. These are technician procedures, not instructions to buy struts without diagnosis.`,
        `If braking changes the noise, ask for a separate brake inspection: ${link(sources.brakes)} also discusses rattle from pad or mounting-hardware clearance.`,
        ...researchBody,
        "Return to the [2020 CX-30 ownership checks](/cars/mazda-cx-30-2020/) or compare the [conditional front-link option](/best/best-front-sway-bar-links-for-mazda-cx-30-2020/) after a link fault is confirmed."
      ]
    },
    best: {
      hasResearchBody: true,
      title: "2020 Mazda CX-30 front sway-bar link: genuine option and alternatives",
      metaTitle: "2020 Mazda CX-30 Front Link: Fitment, Price and Alternatives",
      metaDescription: "Compare a sourced genuine Mazda front-link reference, dated seller prices and alternatives after confirming the actual suspension fault.",
      excerpt: "A conditional genuine-parts reference for a diagnosed link fault, with two seller price checks and no unsupported brand ranking.",
      heroImage: image,
      buyingAdvice: parts.selectionCriteria,
      quickVerdict: "The researched option is genuine Mazda BDTS-34-170A, subject to VIN confirmation. No link purchase is recommended for an undiagnosed rattle.",
      bestFor: ["US-market 2020 2.5L CX-30 owners whose workshop has confirmed a front-link fault and whose supplier verifies the VIN."],
      avoidIf: ["The noise has not been localized or the mount/damper path remains unresolved.", "The supplier has not confirmed the exact vehicle, quantity and current part number."],
      buyingTiers: [{ label: "Genuine reference, VIN check required", product: product.name, reason: "Listed in the 2020 Base 2.5L catalog. Selected for traceable part identity, not an unverified performance score." }],
      faqs: [
        { question: "Why is there only one product reference?", answer: "The research supports a genuine Mazda reference. It does not establish a tested or fitment-verified MOOG-versus-Delphi comparison." },
        { question: "Is the listed price the cost of fixing the rattle?", answer: "No. It is a seller's part price, excluding labor and additional charges. A mount, damper or brake fault needs a different repair." }
      ],
      fitment,
      body: [
        "## Diagnose before shopping",
        "Start with the [CX-30 front-rattle diagnosis](/problems/front-end-clunk-over-bumps-mazda-cx-30-2020/). A parts comparison cannot establish the cause. The [vehicle overview](/cars/mazda-cx-30-2020/) gives maintenance context.",
        "## Part identity and scope",
        `The ${link(sources.fitment)} lists BDTS-34-170A for the front suspension of a 2020 Base 2.5L CX-30. The ${link(sources.part)} identifies front left/right positions and superseded BCKE-34-170 / BDTS-34-170 references. Its application text mixes several Mazda models, so a supplier VIN check remains mandatory.`,
        "## Dated price comparison",
        `Checked 2026-08-31 in USD: ${link(sources.part)} displayed $122.89; ${link(sources.alternateSeller)} displayed $120.52. These are two sellers of the same part, not different products or a durability ranking. Confirm one-link versus pair quantity, tax, shipping, hardware, stock and returns before ordering. Seller prices can change.`,
        "## Research disclosure",
        "This is a catalog and service-document review, not hands-on product testing. No star rating is assigned and no unrelated product photograph is used. Product links may be affiliate links; see the [affiliate disclosure](/affiliate-disclosure/). The photo shows the vehicle, not the replacement part.",
        ...researchBody
      ]
    }
  }
};
