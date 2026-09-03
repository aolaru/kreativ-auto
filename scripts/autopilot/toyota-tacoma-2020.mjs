const sources = {
  maintenance: {
    label: "Toyota 2020 Tacoma warranty and maintenance guide",
    href: "https://assets.sia.toyota.com/publications/en/omms-s/T-MMS-20Tacoma/pdf/T-MMS-20Tacoma.pdf"
  },
  recall: {
    label: "NHTSA Toyota fuel-pump recall notice including 2017-2020 Tacoma",
    href: "https://static.nhtsa.gov/odi/rcl/2020/RCMN-20V682-0847.pdf"
  },
  vibration: {
    label: "Toyota T-SB-0124-20: driveline vibration under deceleration",
    href: "https://static.nhtsa.gov/odi/tsbs/2020/MC-10187246-9999.pdf"
  },
  fitment: {
    label: "Tire Rack 2020 Tacoma 2WD Double Cab 265/65R17 fitment results",
    href: "https://www.tirerack.com/tires/TireSearchResults.jsp?autoMake=Toyota&autoModClar=Double+Cab&autoModel=Tacoma+2WD&autoYear=2020&diameter=17&minLoadRating=S&minSpeedRating=S&performance=ALL&ratio=65&skipOver=true&sortCode=50549&tireIndex=3&width=265%2F"
  },
  allTerrain: {
    label: "BFGoodrich All-Terrain T/A KO2 product information",
    href: "https://www.bfgoodrichtires.com/auto/tires/bfgoodrich-all-terrain-t-a-ko2"
  }
};

const link = (source) => `[${source.label}](${source.href})`;

export const toyotaTacomaSeed = {
  slug: "toyota-tacoma-2020",
  brand: "Toyota",
  modelDisplay: "Toyota Tacoma",
  year: 2020,
  generation: "Third Generation",
  generationCode: "N300",
  generationYears: "2016-2023",
  image: "/images/photos/cars/toyota-tacoma-2020.webp",
  kind: "tires",
  carDescription:
    "Assess a used 2020 Toyota Tacoma through its maintenance record, VIN recall result, tire condition, wheel condition, and the exact circumstances of any vibration. Cab, drivetrain, wheel package, tire size, and off-road equipment all affect the next check.",
  commonProblems: [
    "Highway steering vibration that needs tire, wheel, and balance checks before suspension or wheel-end parts are priced.",
    "A driveline vibration under deceleration that needs the exact speed range, trim, and bulletin scope checked before a repair is assumed.",
    "Tire wear, mismatched tires, or wheel damage that changes ride, braking confidence, and the accuracy of later diagnosis."
  ],
  maintenanceTips: [
    "Use Toyota's model-year maintenance guide and invoices to establish completed work and the next due items.",
    "Record tire size, load rating, tread depth, date codes, pressures, rotations, wheel damage, and balance or alignment history before diagnosing a highway vibration.",
    "Check open recalls by VIN. A recall notice identifies an affected population; it does not confirm that a particular truck is included or repaired."
  ],
  carFaqs: [
    {
      question: "What should I check first when a 2020 Tacoma shakes at highway speed?",
      answer: "Start with the tire placard, the installed tire set, pressures, wear pattern, wheel condition, balance history, and alignment history. Do not select wheel-end parts before those checks are clean."
    },
    {
      question: "Does a Toyota bulletin prove the cause of vibration on one Tacoma?",
      answer: "No. A bulletin defines a symptom and vehicle scope for a technician. Confirm the VIN, trim, speed range, and observed symptom before treating it as applicable."
    }
  ],
  reviewReadiness: {
    evidence: {
      summary:
        "This draft uses Toyota's 2020 Tacoma maintenance guide, a published NHTSA recall notice, and Toyota's bounded driveline-vibration bulletin. It does not turn a bulletin, recall population, or generic tire listing into a diagnosis for an individual truck.",
      basedOn: [
        "Toyota's 2020 Tacoma warranty and maintenance guide for service items and maintenance-record context.",
        "NHTSA's published Toyota fuel-pump recall notice for campaign context only; VIN lookup is still required for an individual truck.",
        "Toyota T-SB-0124-20 for its stated deceleration-vibration symptom and trim scope, not as a highway-vibration or failure-rate claim."
      ],
      appliesTo: [
        "US-market 2020 Toyota Tacoma N300 used-buyer and ownership checks where service records, VIN recall status, tire condition, wheel condition, and a road test can be verified.",
        "Stock tire and wheel setups only until the exact cab, drivetrain, wheel diameter, tire size, load rating, and modifications are known."
      ],
      doesNotCover: [
        "VIN-specific recall completion, warranty coverage, collision, towing abuse, suspension lifts, oversize tires, wheel spacers, or non-US specifications.",
        "A remote diagnosis, a model-wide reliability rate, or a tire-fitment claim without the truck's tire placard and a current vehicle-specific catalog result."
      ],
      sourceLinks: [sources.maintenance, sources.recall, sources.vibration]
    },
    decisionPath: [
      {
        trigger: "A Tacoma vibrates through the steering wheel or seat at highway speed.",
        check: "Record the speed range, tire pressure, tire size, tread pattern, age, wear, wheel damage, balance history, alignment history, and whether the vibration changes with braking or road surface.",
        nextStep: "Correct the verified tire or wheel issue first. Escalate to wheel-end or suspension diagnosis only if the symptom remains after those checks."
      },
      {
        trigger: "A vibration appears while decelerating around 30 to 10 mph.",
        check: "Confirm the exact symptom, cab and package. Toyota T-SB-0124-20 has a defined model-year and TRD Off-Road scope; it must not be applied from a similar description alone.",
        nextStep: "Have a qualified technician determine whether the bulletin applies before approving driveline or suspension work."
      },
      {
        trigger: "A used truck has incomplete service history or an unresolved recall story.",
        check: "Match invoices against Toyota's maintenance guide and check open recalls by VIN before accepting a seller's verbal account.",
        nextStep: "Treat missing records as a reason for an inspection and documented maintenance baseline, not proof of a specific fault."
      }
    ],
    parts: {
      selectionCriteria: [
        "Match the driver's door placard and current wheel diameter before comparing tire width, aspect ratio, load index, speed rating, and construction.",
        "Choose a tire category for actual highway, wet-weather, snow, load, and off-pavement use rather than treating an all-terrain tread as a universal improvement.",
        "Inspect the existing tires, wheels, balance, alignment, and suspension first because a new tire set cannot correct an unconfirmed vibration source.",
        "Confirm cab, drivetrain, trim, brake clearance, spare-tire compatibility, retailer fitment, warranty, installation, and return terms on the exact size."
      ],
      alternatives: [
        "Keep the tire size and load specification on the vehicle placard, then obtain a current vehicle-specific fitment result before changing tire type or size.",
        "Have a qualified tire shop inspect balance, wheel runout, alignment, and suspension condition before replacing a set that may be masking another fault."
      ],
      sourceLinks: [sources.fitment, sources.allTerrain],
      pricingCheckedAt: "2026-09-03",
      priceVerified: false
    }
  },
  contentOverrides: {
    car: {
      hasResearchBody: true,
      metaTitle: "2020 Toyota Tacoma: vibration, tire, and used-buyer checks",
      metaDescription:
        "A source-backed 2020 Toyota Tacoma ownership draft covering VIN recall checks, maintenance records, tire condition, highway vibration, and limited bulletin scope.",
      excerpt:
        "Check records, VIN status, tires, wheels, and the exact vibration pattern before treating a Tacoma complaint as a parts list.",
      fitment: {
        appliesTo: ["US-market 2020 Toyota Tacoma N300 in stock condition, after the cab, drivetrain, trim, wheel, tire, and equipment details have been confirmed."],
        doesNotApplyTo: ["No tire or suspension advice here establishes fitment for lifted trucks, oversize tires, wheel spacers, aftermarket suspension, damage history, or non-US trucks."],
        phaseDifferences: ["The N300 generation is a useful ownership grouping, but Toyota's deceleration-vibration bulletin has a more limited trim and condition scope."],
        powertrainDifferences: ["Tire and wheel checks apply across engines, but drivetrain, cab, package, wheel, and tire-size details can change the diagnosis and permitted tire selection."]
      },
      recommendedParts: [],
      body: [
        "## Begin with the truck in front of you",
        "A road test should reproduce the reported vibration at a known speed and road surface. Record whether it arrives through the steering wheel, seat, or floor; whether braking changes it; and whether the installed tires are a matched set. That record is more useful than a description such as “Tacoma shake.”",
        "## Service, recall, and bulletin checks",
        `Compare invoices with ${link(sources.maintenance)}. Check recalls by VIN; ${link(sources.recall)} includes affected Tacoma production but cannot establish the status of one truck. For a deceleration vibration around 30 to 10 mph, read the defined condition and package scope in ${link(sources.vibration)} before assuming the bulletin applies.`,
        "## Tire decision boundary",
        `The ${link(sources.fitment)} is limited to a 2020 Tacoma 2WD Double Cab with 265/65R17 tires. It is a useful example of why year and model alone are not fitment. The tire placard and live catalog result control the final choice.`
      ]
    },
    problem: {
      hasResearchBody: true,
      title: "2020 Toyota Tacoma vibration at highway speed: tire and wheel checks first",
      metaTitle: "2020 Toyota Tacoma Highway Vibration: Tire and Wheel Checks First",
      metaDescription:
        "A 2020 Toyota Tacoma highway-vibration draft that starts with tire condition, wheel condition, balance, alignment, and the exact road-test pattern before parts are selected.",
      excerpt:
        "A highway vibration needs tire, wheel, balance, and alignment evidence before a wheel bearing, driveline, or suspension part is blamed.",
      symptoms: [
        "Steering-wheel or seat vibration that begins in a repeatable highway-speed range.",
        "A vibration that changes with road surface, tire pressure, braking, acceleration, or deceleration.",
        "Uneven tread wear, mixed tires, visible wheel damage, missing balance history, or a recent tire change."
      ],
      causes: [
        "Tire pressure, tread, age, construction, or balance issues that need inspection before further diagnosis.",
        "Wheel damage, runout, alignment issues, or a mismatched tire set.",
        "A separate driveline, brake, wheel-end, or suspension issue only after the tire and wheel evidence is known."
      ],
      solutions: [
        "Inspect the tire placard, installed tire set, tread, date codes, pressure, wheel condition, and balance history.",
        "Correct a confirmed tire, wheel, balance, or alignment issue and repeat the same road test.",
        "Escalate to a qualified diagnosis when vibration remains, changes under braking, or includes steering, braking, warning, or driveline symptoms."
      ],
      urgency: "Inspection soon; stop and seek prompt professional advice if braking, steering control, wheel security, warning lights, or rapid worsening is involved.",
      canYouDrive: "Avoid treating a persistent vibration as normal. Limit driving and obtain an inspection when the vehicle pulls, shakes under braking, has damaged tires or wheels, or the steering or braking response changes.",
      estimatedCost: "No estimate is published because tire repair, wheel repair, alignment, diagnosis, and driveline work have different scopes.",
      diyDifficulty: "Inspection notes are straightforward; wheel balance, runout, alignment, and driveline diagnosis require suitable equipment or a qualified shop.",
      whenToSeeMechanic: [
        "Vibration remains after tire pressure, wheel condition, balance, and alignment have been checked.",
        "Braking, steering, driveline, warning-light, wheel-security, or abnormal tire-wear symptoms are present.",
        "The reported symptom matches a Toyota bulletin only after the truck's exact trim and condition have been confirmed."
      ],
      commonMistakes: [
        "Ordering wheel bearings, suspension parts, or tires from a generic Tacoma listing before inspecting the installed set.",
        "Treating a Toyota bulletin as an all-trim diagnosis instead of checking its stated symptom and package scope.",
        "Using a new tire purchase to avoid a balance, wheel, alignment, or steering inspection."
      ],
      quickVerdict: "Highway vibration is a measurement and condition problem before it is a Tacoma-parts problem.",
      firstCheck: "Document the speed range and inspect tire pressure, tire condition, wheel condition, and balance history before selecting parts.",
      confusedWith: [
        "A steering-wheel vibration can be described as a tire, wheel, brake, bearing, suspension, or driveline issue before any of those causes is confirmed.",
        "Toyota's defined deceleration-vibration bulletin is not evidence that every highway-speed shake has the same cause."
      ],
      stopDrivingIf: [
        "The vehicle has a damaged tire or wheel, loose-wheel concern, steering change, pull, braking change, warning light, or rapidly worsening shake.",
        "The vibration creates a safety concern or the truck cannot be controlled predictably."
      ],
      recommendedParts: [],
      faqs: [
        {
          question: "What should I check first when a 2020 Tacoma vibrates at highway speed?",
          answer: "Start with the tire placard, the installed tire set, pressures, wear pattern, wheel condition, balance history, and alignment history. Do not select wheel-end parts before those checks are clean."
        },
        {
          question: "Does a Toyota bulletin identify the cause of every Tacoma vibration?",
          answer: "No. Toyota's bulletin has a defined deceleration symptom and package scope. A qualified technician should confirm whether that scope matches the individual truck."
        }
      ],
      fitment: {
        appliesTo: ["US-market 2020 Tacoma N300 road-test and condition checks after the exact cab, drivetrain, tire, wheel, and modification details are known."],
        doesNotApplyTo: ["A parts-fitment claim or a diagnosis for lifted, modified, collision-damaged, non-US, or VIN-specific recall vehicles."],
        phaseDifferences: ["Toyota's T-SB-0124-20 covers a defined deceleration condition and package scope rather than every 2020 Tacoma vibration."],
        powertrainDifferences: ["Tire and wheel evidence remains first, while drivetrain and package details affect the next diagnostic step."]
      },
      body: [
        "## Record the pattern before changing parts",
        "Note the speed range, road surface, tire pressure, steering input, braking input, load, and whether the vibration is felt through the wheel, seat, or floor. Photograph tire wear and wheel damage before a shop visit. Those details help separate a tire or wheel issue from a driveline or braking concern.",
        "## Keep the Toyota bulletin in scope",
        `Toyota's ${link(sources.vibration)} addresses a particular deceleration condition and specifies its model-year and package scope. It supports a technician-led check when the actual symptom matches; it does not identify the source of every highway vibration.`,
        "## Before authorising a tire replacement",
        "Confirm the door-placard specification, installed size, load and speed ratings, tire age, tread condition, pressure, wheel condition, and balance or alignment result. A replacement set should be selected only after the underlying condition and exact fitment are clear."
      ]
    },
    best: {
      hasResearchBody: true,
      title: "2020 Toyota Tacoma tire selection: fitment and use-case checks",
      metaTitle: "2020 Toyota Tacoma Tires: Fitment and Use-Case Checks",
      metaDescription:
        "A noindex 2020 Toyota Tacoma tire-research draft covering placard fitment, road use, all-terrain tradeoffs, wheel clearance, and condition checks before purchase.",
      excerpt:
        "Select Tacoma tires by the placard, exact fitment, load, road use, and confirmed condition rather than by a generic model-year result.",
      products: [],
      buyingAdvice: [
        "Match the door-placard specification and a current vehicle-specific catalog result before comparing tire categories.",
        "Correct tire, wheel, balance, alignment, or suspension issues before replacing a set for an unconfirmed vibration.",
        "Compare tire type only after the intended road, weather, load, and off-pavement use are clear."
      ],
      quickVerdict: "No tire is recommended until the exact truck, placard specification, wheel, current setup, and intended use are confirmed.",
      bestFor: ["Owners who have confirmed the exact cab, drivetrain, wheel, tire placard, and highway or off-pavement use before comparing a tire category."],
      avoidIf: ["The vibration has not been diagnosed or the installed tire and wheel condition is unknown.", "The truck has a lift, changed wheels, oversize tires, spacers, towing or load requirements, or an unverified fitment result."],
      buyingTiers: [],
      faqs: [
        {
          question: "Can one tire listing fit every 2020 Toyota Tacoma?",
          answer: "No. Cab, drivetrain, trim, wheel diameter, tire placard, load requirements, and modifications must be checked before a supplier result is treated as a match."
        },
        {
          question: "Will new tires fix a Tacoma vibration?",
          answer: "Only if inspection identifies a tire-related cause. Wheel damage, balance, alignment, braking, driveline, or suspension concerns can require different work."
        }
      ],
      fitment: {
        appliesTo: ["A stock US-market 2020 Tacoma only after the door placard and current vehicle-specific fitment result match the installed or proposed tire size."],
        doesNotApplyTo: ["Universal Tacoma tire sizing, lifted or modified suspension, wheel changes, brake-clearance claims, towing/load changes, or non-US applications."],
        phaseDifferences: ["Cab, drivetrain, trim, wheel, and tire-package combinations can change the allowed size and load requirements within the N300 generation."],
        powertrainDifferences: ["Drivetrain and package details affect tire fitment and intended use even when the same model year is listed by a retailer."]
      },
      body: [
        "## Fitment comes before category",
        `The ${link(sources.fitment)} shows why a vehicle-specific result needs cab, drivetrain, and tire-size inputs. It is limited to one 2WD Double Cab configuration and is not a substitute for the truck's placard or a live supplier check.`,
        "## Use case before marketing",
        `A highway-focused tire, an all-terrain tire, and an off-road-oriented tire make different noise, wear, wet-weather, snow, load, and comfort tradeoffs. ${link(sources.allTerrain)} describes its product category and warranty; it does not establish fitment or solve an undiagnosed vibration.`,
        "## Record the current tire and wheel condition",
        "Photograph all four tires and the spare, then record the placard specification, installed size, load and speed markings, date codes, cold pressures, remaining tread, uneven wear, repairs, and visible sidewall or wheel damage. Note whether the set is matched by size and construction. A mixed or damaged set can change ride, braking behavior, and the value of any later vibration diagnosis.",
        "## Match the category to the use already documented",
        "Write down the truck's usual highway speed, wet-weather and snow use, unpaved-road use, towing or payload demand, and the comfort or noise tradeoff the driver will accept. A tire category can be evaluated against those stated uses, but it cannot be selected from a model-year label alone. Keep the original specification unless a current catalog and a qualified installer confirm a permitted change.",
        "## Keep installation evidence with the truck",
        "For a replacement set, retain the dated quote or invoice, exact part number, tire size, load and speed rating, installation date, balance result, alignment result, warranty terms, and return policy. Re-test on the same road after any correction and record whether the original symptom changed. That gives the next technician a usable before-and-after record instead of an unsupported claim that tires did or did not fix the vibration.",
        "## Use one documented decision sequence",
        "First confirm the tire placard and the installed set. Next, inspect and correct a verified pressure, tread, wheel, balance, or alignment issue. Then repeat the same road test before considering a different tire category or a non-tire cause. Do not combine those steps, because a change in tire size and a new balance result at the same time makes the outcome difficult to interpret. When a shop recommends a different size or construction, ask what vehicle-specific catalog result and clearance, load, spare, and warranty checks support that recommendation.",
        "## Price disclosure",
        "No current price is published in this draft. Tire prices vary by exact size, load rating, retailer, installation, balancing, disposal, taxes, warranty, and local availability."
      ]
    }
  }
};
