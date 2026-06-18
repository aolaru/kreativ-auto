export interface QuickOwnershipGuide {
  slug: string;
  title: string;
  href: string;
  description: string;
  eyebrow: string;
  image: string;
  relatedCars: string[];
  relatedGenerations: string[];
  quickVerdict: string;
  bestFor: string[];
  avoidIf: string[];
  firstCheck: string;
  keyChecks: string[];
  redFlags: string[];
  nextReads: {
    href: string;
    title: string;
    description: string;
    eyebrow: string;
  }[];
}

export const quickOwnershipGuides: QuickOwnershipGuide[] = [
  {
    slug: "audi-q5-2020-common-problems",
    title: "Audi Q5 2020 common problems and weak points",
    href: "/guides/audi-q5-2020-common-problems/",
    description:
      "A practical first ownership guide for the 2020 Q5, focused on oil use, brake feel, electronics complaints, and the checks that separate normal German-car wear from expensive neglect.",
    eyebrow: "Ownership guide",
    image: "/images/photos/cars/audi-q5-2020.webp",
    relatedCars: ["audi-q5-2020"],
    relatedGenerations: ["audi-q5-fy-2018-2020"],
    quickVerdict:
      "A clean 2020 Q5 can be a strong premium SUV, but it needs proof of maintenance and a calm scan report before the badge premium makes sense.",
    bestFor: [
      "Buyers who want a quiet premium crossover and are willing to maintain it on time.",
      "Owners who prefer fixing small brake, oil, and sensor complaints before they become diagnostic noise."
    ],
    avoidIf: [
      "The seller cannot show recent service history or dismisses warning lights as harmless.",
      "Oil level, brake feel, or electronic faults already look inconsistent on the test drive."
    ],
    firstCheck: "Scan for stored faults, check oil level history, then inspect brake wear and tire condition before negotiating.",
    keyChecks: [
      "Look for oil consumption notes between services, not just fresh oil on the day of sale.",
      "Check for brake squeal, rotor lip, and uneven pad wear after a longer drive.",
      "Confirm every infotainment, parking sensor, camera, and driver-assist feature works without intermittent warnings.",
      "Listen for suspension knocks over low-speed bumps with the cabin quiet."
    ],
    redFlags: [
      "Multiple warning lights appear after restart or after the car warms up.",
      "The car has mixed tires, skipped service records, and vague explanations for oil top-ups.",
      "Brake vibration or grinding is being sold as normal premium-SUV behavior."
    ],
    nextReads: [
      {
        href: "/problems/oil-level-drops-between-services-audi-q5-2020/",
        title: "Oil level drops between services on Audi Q5 2020",
        description: "Best when the Q5 ownership question is really about whether oil use has become a pattern.",
        eyebrow: "Problem guide"
      },
      {
        href: "/best/best-engine-oil-for-audi-q5-2020/",
        title: "Best engine oil for Audi Q5 2020",
        description: "Open this when the maintenance path needs the right oil spec instead of a generic bottle.",
        eyebrow: "Best parts"
      }
    ]
  },
  {
    slug: "bmw-3-series-2019-common-problems",
    title: "BMW 3 Series 2019 common problems and weak points",
    href: "/guides/bmw-3-series-2019-common-problems/",
    description:
      "A practical ownership guide for the 2019 G20 3 Series, focused on ignition behavior, brake refinement, tire wear, and the checks that matter before buying.",
    eyebrow: "Ownership guide",
    image: "/images/photos/cars/bmw-3-series-2019.webp",
    relatedCars: ["bmw-3-series-2019"],
    relatedGenerations: ["bmw-3-series-g20-2019-2022"],
    quickVerdict:
      "The 2019 3 Series is best when it has clean maintenance, matching tires, and no hidden drivability faults; neglected examples get expensive quickly.",
    bestFor: [
      "Drivers who want a sharper sedan and are comfortable staying ahead of maintenance.",
      "Buyers who can verify service records instead of buying only on trim and mileage."
    ],
    avoidIf: [
      "The car hesitates under load, idles unevenly, or has tire wear that hints at alignment neglect.",
      "The seller has no clear answer on plugs, coils, brake service, or recent diagnostics."
    ],
    firstCheck: "Start with a scan, cold idle behavior, tire condition, and a steady acceleration pull after warm-up.",
    keyChecks: [
      "Listen for rough idle, hesitation, or misfire behavior before and after warm-up.",
      "Check tires for matching brand, even wear, and evidence of alignment or suspension neglect.",
      "Feel for brake pulsation or low-speed squeal during normal city stops.",
      "Verify maintenance records for oil, plugs, brake fluid, and any prior drivability work."
    ],
    redFlags: [
      "A drivability complaint is explained away as fuel quality without scan data.",
      "Premium tires were replaced with mismatched budget tires on a car advertised as carefully kept.",
      "The car feels sharp in photos but vague, noisy, or uneven on the road."
    ],
    nextReads: [
      {
        href: "/problems/engine-hesitates-under-acceleration-bmw-3-series-2019/",
        title: "Engine hesitates under acceleration on BMW 3 Series 2019",
        description: "Best when the test drive exposes hesitation instead of clean pull.",
        eyebrow: "Problem guide"
      },
      {
        href: "/best/best-spark-plugs-for-bmw-3-series-2019/",
        title: "Best spark plugs for BMW 3 Series 2019",
        description: "Open this when the diagnosis is pointing toward normal spark-side maintenance.",
        eyebrow: "Best parts"
      }
    ]
  },
  {
    slug: "ford-f-150-2020-common-problems",
    title: "Ford F-150 2020 common problems and weak points",
    href: "/guides/ford-f-150-2020-common-problems/",
    description:
      "A first ownership guide for the 2020 F-150, focused on highway vibration, wheel-bearing hum, brake wear, and work-truck wear patterns that are easy to hide.",
    eyebrow: "Ownership guide",
    image: "/images/photos/cars/ford-f-150-2020.webp",
    relatedCars: ["ford-f-150-2020"],
    relatedGenerations: ["ford-f-150-p552-2015-2020"],
    quickVerdict:
      "The 2020 F-150 is durable when the chassis is tight, but tire, hub, brake, and towing wear need a more careful check than the odometer alone suggests.",
    bestFor: [
      "Owners who need a useful truck and will inspect wear items honestly.",
      "Buyers who can separate normal truck wear from neglected front-end or wheel-end problems."
    ],
    avoidIf: [
      "Highway vibration, humming, or brake shake is already obvious and the seller blames only the road.",
      "The truck has towing accessories but no service trail for fluids, brakes, or tires."
    ],
    firstCheck: "Drive it at highway speed, listen for road-speed hum, then inspect tires, hubs, brakes, and towing-service history.",
    keyChecks: [
      "Test for steering-wheel vibration at several highway speeds.",
      "Listen for humming that changes with speed or load shift.",
      "Check tire age, balance quality, and uneven wear before assuming a suspension failure.",
      "Inspect brake feel and rotor condition on trucks used for towing or hauling."
    ],
    redFlags: [
      "A heavy-use truck has no fluid, brake, or tire-service records.",
      "The cabin is clean but the underbody, tires, and brake hardware tell a harder story.",
      "Highway vibration remains after tire pressure and visible tire defects are checked."
    ],
    nextReads: [
      {
        href: "/problems/steering-wheel-vibrates-at-highway-speed-ford-f-150-2020/",
        title: "Steering wheel vibrates at highway speed on Ford F-150 2020",
        description: "Start here when highway refinement is the main complaint.",
        eyebrow: "Problem guide"
      },
      {
        href: "/best/best-wheel-bearings-for-ford-f-150-2020/",
        title: "Best wheel bearings for Ford F-150 2020",
        description: "Only after tires and basic wheel checks no longer explain the hum.",
        eyebrow: "Best parts"
      }
    ]
  },
  {
    slug: "mercedes-benz-c-class-2019-common-problems",
    title: "Mercedes-Benz C-Class 2019 common problems and weak points",
    href: "/guides/mercedes-benz-c-class-2019-common-problems/",
    description:
      "A practical ownership guide for the 2019 C-Class, focused on ignition feel, brake refinement, electronics, and the inspection details that matter on a premium compact sedan.",
    eyebrow: "Ownership guide",
    image: "/images/photos/cars/mercedes-benz-c-class-2019.webp",
    relatedCars: ["mercedes-benz-c-class-2019"],
    relatedGenerations: ["mercedes-benz-c-class-w205-facelift-2019-2021"],
    quickVerdict:
      "A 2019 C-Class is worth considering when it feels tight, quiet, and boringly consistent; intermittent faults are the expensive warning sign.",
    bestFor: [
      "Buyers who want a refined sedan and will verify electronics, brakes, and drivability carefully.",
      "Owners who prefer OE-style maintenance over chasing cheap parts after symptoms appear."
    ],
    avoidIf: [
      "The car hesitates, idles unevenly, or shows intermittent electrical behavior on a short test drive.",
      "Brake noise, tire wear, and service records do not match the premium price being asked."
    ],
    firstCheck: "Scan modules, check cold and warm idle, test every cabin feature, then inspect brakes and tires.",
    keyChecks: [
      "Look for hesitation under acceleration and uneven idle before assuming it just needs fuel.",
      "Test infotainment, cameras, sensors, windows, seats, and climate controls one by one.",
      "Check brake noise and rotor condition at low speeds.",
      "Confirm service history is specific, not just a generic claim of dealer maintenance."
    ],
    redFlags: [
      "Any warning is described as intermittent but no diagnostic printout is available.",
      "The car presents well cosmetically but has mismatched tires or cheap brake parts.",
      "A rough idle or hesitation remains after warm-up."
    ],
    nextReads: [
      {
        href: "/problems/engine-hesitates-under-acceleration-mercedes-benz-c-class-2019/",
        title: "Engine hesitates under acceleration on Mercedes-Benz C-Class 2019",
        description: "Best when the premium-sedan test drive does not feel smooth under load.",
        eyebrow: "Problem guide"
      },
      {
        href: "/best/best-front-brake-pads-for-mercedes-benz-c-class-2019/",
        title: "Best front brake pads for Mercedes-Benz C-Class 2019",
        description: "Open this when the car is right but brake refinement needs a better parts path.",
        eyebrow: "Best parts"
      }
    ]
  },
  {
    slug: "subaru-outback-2020-common-problems",
    title: "Subaru Outback 2020 common problems and weak points",
    href: "/guides/subaru-outback-2020-common-problems/",
    description:
      "A practical guide to the 2020 Outback ownership checks that matter most, including road hum, rear brake noise, tires, and all-weather use patterns.",
    eyebrow: "Ownership guide",
    image: "/images/photos/cars/subaru-outback-2020.webp",
    relatedCars: ["subaru-outback-2020"],
    relatedGenerations: ["subaru-outback-bt-2020-2022"],
    quickVerdict:
      "The 2020 Outback is strongest as a calm all-weather wagon, but tire condition, wheel-end noise, and brake refinement deserve a careful listen.",
    bestFor: [
      "Drivers who value comfort, space, and all-weather traction more than sporty response.",
      "Owners who rotate tires consistently and catch wheel-end noise before it becomes a guessing game."
    ],
    avoidIf: [
      "Road-speed hum, rear brake squeak, or uneven tire wear is already obvious.",
      "The AWD system has been run on mismatched tires or neglected rotation intervals."
    ],
    firstCheck: "Check tire matching and wear first, then listen for speed-linked hum and rear brake noise after rain or overnight sitting.",
    keyChecks: [
      "Confirm all four tires match in brand, size, and wear depth.",
      "Listen for humming that rises with road speed and does not change much with engine load.",
      "Check rear brake noise after the car has sat in damp conditions.",
      "Inspect service records for tire rotations, brake service, and fluid maintenance."
    ],
    redFlags: [
      "Mismatched tires on an AWD Outback are treated as harmless.",
      "A road-speed hum is blamed on tires without checking wheel bearings.",
      "The seller cannot explain repeated brake noise or uneven tire wear."
    ],
    nextReads: [
      {
        href: "/problems/humming-noise-that-gets-louder-with-speed-subaru-outback-2020/",
        title: "Humming noise that gets louder with speed on Subaru Outback 2020",
        description: "Best before replacing tires or hubs without a clean diagnosis.",
        eyebrow: "Problem guide"
      },
      {
        href: "/best/best-rear-brake-pads-for-subaru-outback-2020/",
        title: "Best rear brake pads for Subaru Outback 2020",
        description: "Open this when rear brake noise is confirmed rather than guessed.",
        eyebrow: "Best parts"
      }
    ]
  },
  {
    slug: "vw-golf-gti-2020-common-problems",
    title: "VW Golf GTI 2020 common problems and weak points",
    href: "/guides/vw-golf-gti-2020-common-problems/",
    description:
      "A focused ownership guide for the 2020 GTI, covering ignition behavior, brake feel, tuning-risk clues, and the first checks that matter before buying one used.",
    eyebrow: "Ownership guide",
    image: "/images/photos/cars/vw-golf-gti-2020.webp",
    relatedCars: ["vw-golf-gti-2020"],
    relatedGenerations: ["volkswagen-golf-gti-mk7-5-facelift-2018-2021"],
    quickVerdict:
      "A stock, well-serviced GTI is the one to chase; vague tune history, cheap ignition parts, and rough drivability should change the deal quickly.",
    bestFor: [
      "Drivers who want a practical performance hatch and will keep maintenance ahead of modifications.",
      "Buyers who can verify tune status, ignition health, brake condition, and tire quality."
    ],
    avoidIf: [
      "The seller is unclear about tune history, plugs, coils, or past misfires.",
      "The car hesitates, idles roughly, or has brake vibration that is being sold as normal sporty behavior."
    ],
    firstCheck: "Confirm tune status, scan for misfire history, inspect plugs and coils, then test brake feel after a warm drive.",
    keyChecks: [
      "Scan for misfire codes or stored boost and drivability faults.",
      "Verify plug interval, coil condition, and whether the car is tuned.",
      "Check brake feel, rotor condition, tire quality, and evidence of hard use.",
      "Listen for suspension rattles over broken pavement with the radio off."
    ],
    redFlags: [
      "Tune history is vague but the car has obvious performance hardware.",
      "Idle or acceleration hesitation is blamed on fuel without scan data.",
      "Cheap tires or brake parts are fitted to a car priced like a careful enthusiast example."
    ],
    nextReads: [
      {
        href: "/problems/engine-misfires-at-idle-vw-golf-gti-2020/",
        title: "Engine misfires at idle on VW Golf GTI 2020",
        description: "Start here if the car feels uneven before you chase larger performance-system theories.",
        eyebrow: "Problem guide"
      },
      {
        href: "/best/best-ignition-coils-for-vw-golf-gti-2020/",
        title: "Best ignition coils for VW Golf GTI 2020",
        description: "Open this when ignition maintenance is the right next step, not a random parts throw.",
        eyebrow: "Best parts"
      }
    ]
  },
  {
    slug: "chevrolet-silverado-1500-2020-common-problems",
    title: "Chevrolet Silverado 1500 2020 common problems and weak points",
    href: "/guides/chevrolet-silverado-1500-2020-common-problems/",
    description:
      "A practical ownership guide for the 2020 Silverado 1500, focused on highway vibration, brake pulsation, tire wear, and the checks that matter before replacing parts.",
    eyebrow: "Ownership guide",
    image: "/images/photos/cars/chevrolet-silverado-1500-2020.webp",
    relatedCars: ["chevrolet-silverado-1500-2020"],
    relatedGenerations: ["chevrolet-silverado-1500-t1xx-2019-2024"],
    quickVerdict:
      "The 2020 Silverado 1500 is easiest to own when tire, wheel, and brake complaints are diagnosed separately instead of being treated as one vague truck vibration.",
    bestFor: [
      "Owners who want a useful daily truck and are willing to inspect tires, brakes, and wheel-end basics before buying parts.",
      "Buyers who can verify highway refinement and brake feel on a real test drive, not only in a parking lot."
    ],
    avoidIf: [
      "The truck already shakes at highway speed or pulses through the pedal and the seller treats it as normal full-size-truck behavior.",
      "Tires are mismatched, worn unevenly, or old enough that brake and suspension diagnosis will be noisy from the start."
    ],
    firstCheck: "Drive at highway speed, then inspect tire age, balance evidence, pad condition, rotor surface, and wheel torque before pricing larger repairs.",
    keyChecks: [
      "Check tire age, brand match, tread wear, and visible damage before blaming hubs or suspension.",
      "Feel for brake pedal pulsation during several medium stops after the brakes are warm.",
      "Look for towing or hauling use, then compare that story with brake wear and service records.",
      "Listen for road-speed hum separately from engine or transmission load."
    ],
    redFlags: [
      "The truck has heavy-use accessories but no matching tire, brake, or fluid-service history.",
      "Highway shake remains after obvious tire pressure, tire condition, and wheel-balance clues are checked.",
      "Brake pulsation is present on a test drive but priced like a cosmetic complaint."
    ],
    nextReads: [
      {
        href: "/problems/steering-wheel-vibrates-at-highway-speed-chevrolet-silverado-1500-2020/",
        title: "Steering wheel vibrates at highway speed on Chevrolet Silverado 1500 2020",
        description: "Start here when the main complaint is highway shake or steering-wheel vibration.",
        eyebrow: "Problem guide"
      },
      {
        href: "/problems/brake-pedal-pulsates-when-slowing-chevrolet-silverado-1500-2020/",
        title: "Brake pedal pulsates when slowing on Chevrolet Silverado 1500 2020",
        description: "Best when the vibration follows braking force more than road speed.",
        eyebrow: "Problem guide"
      },
      {
        href: "/best/best-brake-pads-for-chevrolet-silverado-1500-2020/",
        title: "Best brake pads for Chevrolet Silverado 1500 2020",
        description: "Open this after the brake inspection points toward pad replacement instead of tire or hub diagnosis.",
        eyebrow: "Best parts"
      }
    ]
  },
  {
    slug: "hyundai-tucson-2020-common-problems",
    title: "Hyundai Tucson 2020 common problems and weak points",
    href: "/guides/hyundai-tucson-2020-common-problems/",
    description:
      "A practical ownership guide for the 2020 Tucson, focused on brake noise, battery reserve, tire comfort, and simple checks that keep the diagnosis useful.",
    eyebrow: "Ownership guide",
    image: "/images/photos/cars/hyundai-tucson-2020.webp",
    relatedCars: ["hyundai-tucson-2020"],
    relatedGenerations: ["hyundai-tucson-tl-2019-2021"],
    quickVerdict:
      "The 2020 Tucson is usually a low-drama compact SUV, but brake noise and weak-start behavior should be checked early because they quickly make the car feel neglected.",
    bestFor: [
      "Owners who want simple commuter-SUV ownership and will stay ahead of normal brake, tire, and battery wear.",
      "Buyers comparing practical SUVs where condition and service history matter more than trim badges."
    ],
    avoidIf: [
      "Low-speed brake squeal, weak starts, or tire noise is already obvious and the seller has no service explanation.",
      "The Tucson has short-trip use, an older battery, and inconsistent starting behavior that has not been tested."
    ],
    firstCheck: "Test battery reserve and charging basics, then inspect brake pads, hardware, rotors, tire condition, and recent service history.",
    keyChecks: [
      "Listen for brake squeal during gentle city stops and after the vehicle has sat.",
      "Test battery health if the SUV mainly sees short errands or longer parked periods.",
      "Inspect tire wear and pressure before treating road noise as a suspension issue.",
      "Confirm brake service records include hardware condition, not just pad replacement."
    ],
    redFlags: [
      "A weak battery is repeatedly boosted without any load test or charging-system check.",
      "Brake noise is dismissed as normal while the pads, rotors, or hardware show visible neglect.",
      "Tires are mismatched or unevenly worn on a car being sold as an easy commuter."
    ],
    nextReads: [
      {
        href: "/problems/brake-squeal-at-low-speed-hyundai-tucson-2020/",
        title: "Brake squeal at low speed on Hyundai Tucson 2020",
        description: "Best when brake noise is the first issue making the Tucson feel rough.",
        eyebrow: "Problem guide"
      },
      {
        href: "/problems/battery-struggles-after-short-trips-hyundai-tucson-2020/",
        title: "Battery struggles after short trips on Hyundai Tucson 2020",
        description: "Open this when starting behavior changes after errands, sitting, or colder weather.",
        eyebrow: "Problem guide"
      },
      {
        href: "/best/best-batteries-for-hyundai-tucson-2020/",
        title: "Best batteries for Hyundai Tucson 2020",
        description: "Best after the battery test confirms weak reserve rather than a random electrical concern.",
        eyebrow: "Best parts"
      }
    ]
  },
  {
    slug: "nissan-rogue-2021-common-problems",
    title: "Nissan Rogue 2021 common problems and weak points",
    href: "/guides/nissan-rogue-2021-common-problems/",
    description:
      "A practical ownership guide for the 2021 Rogue, focused on battery reserve, front brake noise, tire comfort, and the first checks that keep a newer SUV from feeling prematurely worn.",
    eyebrow: "Ownership guide",
    image: "/images/photos/cars/nissan-rogue-2021.webp",
    relatedCars: ["nissan-rogue-2021"],
    relatedGenerations: ["nissan-rogue-t33-2021-2025"],
    quickVerdict:
      "The 2021 Rogue is strongest when the basic battery, brake, and tire picture is clean; small refinement problems matter because they are the first ownership clues on this newer generation.",
    bestFor: [
      "Families and commuters who want a newer compact SUV and will verify everyday refinement before buying.",
      "Owners who separate battery, brake, and tire complaints before spending money on larger theories."
    ],
    avoidIf: [
      "The SUV has weak starts after sitting, brake squeal in normal stops, or road hum that no one has narrowed down.",
      "The seller relies on low mileage alone while service history and tire condition tell a less careful story."
    ],
    firstCheck: "Start with battery testing, then use a quiet low-speed drive and a highway run to separate brake noise, tire hum, and wheel-end concerns.",
    keyChecks: [
      "Load-test the battery if the Rogue has short-trip use or longer parked intervals.",
      "Check front brake noise at low speed after several normal stops.",
      "Inspect tire wear, rotation history, and balance clues before chasing wheel-end parts.",
      "Confirm maintenance records match the newer-generation asking price."
    ],
    redFlags: [
      "Repeated no-start or weak-start behavior is treated as a one-off without battery test results.",
      "Front brake noise appears during the test drive but the vehicle is presented as needing nothing.",
      "Road hum changes with speed and the tire history is unknown."
    ],
    nextReads: [
      {
        href: "/problems/battery-goes-dead-after-sitting-nissan-rogue-2021/",
        title: "Battery goes dead after sitting on Nissan Rogue 2021",
        description: "Best when the Rogue starts weakly after parking instead of after normal use.",
        eyebrow: "Problem guide"
      },
      {
        href: "/problems/front-brakes-squeal-at-low-speed-nissan-rogue-2021/",
        title: "Front brakes squeal at low speed on Nissan Rogue 2021",
        description: "Open this when the main symptom is brake refinement rather than stopping power.",
        eyebrow: "Problem guide"
      },
      {
        href: "/best/best-brake-pads-for-nissan-rogue-2021/",
        title: "Best brake pads for Nissan Rogue 2021",
        description: "Best when the front brake diagnosis points toward pads and hardware.",
        eyebrow: "Best parts"
      }
    ]
  },
  {
    slug: "subaru-forester-2020-common-problems",
    title: "Subaru Forester 2020 common problems and weak points",
    href: "/guides/subaru-forester-2020-common-problems/",
    description:
      "A practical ownership guide for the 2020 Forester, focused on road-speed hum, battery reserve, tire matching, and the AWD checks that matter before replacing parts.",
    eyebrow: "Ownership guide",
    image: "/images/photos/cars/subaru-forester-2020.webp",
    relatedCars: ["subaru-forester-2020"],
    relatedGenerations: ["subaru-forester-sk-2019-2024"],
    quickVerdict:
      "The 2020 Forester is best when tire matching, battery health, and wheel-end noise are kept simple and verified before the AWD system gets blamed.",
    bestFor: [
      "Owners who want an easy all-weather SUV and will keep tires matched, rotated, and inspected.",
      "Buyers who can listen for speed-linked hum and check battery health before deciding the car is clean."
    ],
    avoidIf: [
      "The Forester has mismatched tires, a road-speed hum, or weak starts and those issues are explained away without evidence.",
      "The seller cannot show tire rotation, battery, or wheel-end service history on an AWD vehicle."
    ],
    firstCheck: "Check all four tires for match and wear depth, test battery reserve, then listen for hum that follows road speed instead of engine load.",
    keyChecks: [
      "Confirm tire brand, size, and wear are consistent across all four corners.",
      "Listen for humming that rises with speed and does not track engine rpm.",
      "Test battery reserve if the Forester does short trips or sits in cold weather.",
      "Inspect brake and suspension condition only after tire and battery basics are clean."
    ],
    redFlags: [
      "Mismatched tires are treated as harmless on an AWD Forester.",
      "Wheel-bearing hum is assumed before tire condition and rotation history are checked.",
      "Battery weakness is boosted repeatedly instead of tested."
    ],
    nextReads: [
      {
        href: "/problems/humming-noise-that-gets-louder-with-speed-subaru-forester-2020/",
        title: "Humming noise that gets louder with speed on Subaru Forester 2020",
        description: "Start here when the Forester sounds louder as road speed rises.",
        eyebrow: "Problem guide"
      },
      {
        href: "/problems/battery-struggles-after-short-trips-subaru-forester-2020/",
        title: "Battery struggles after short trips on Subaru Forester 2020",
        description: "Best when the symptom is weak reserve rather than wheel or tire noise.",
        eyebrow: "Problem guide"
      },
      {
        href: "/best/best-batteries-for-subaru-forester-2020/",
        title: "Best batteries for Subaru Forester 2020",
        description: "Open this after battery testing confirms the replacement path.",
        eyebrow: "Best parts"
      }
    ]
  },
  {
    slug: "honda-accord-2020-brake-and-ac-checks",
    title: "Honda Accord 2020 brake and A/C checks before buying",
    href: "/guides/honda-accord-2020-brake-and-ac-checks/",
    description:
      "A focused 2020 Accord guide for brake vibration, weak idle A/C, and the quick checks that separate a sensible used sedan from an expensive first month.",
    eyebrow: "Ownership guide",
    image: "/images/photos/cars/honda-accord-2020.webp",
    relatedCars: ["honda-accord-2020"],
    relatedGenerations: ["honda-accord-cv1-cv2-2018-2022"],
    quickVerdict:
      "The 2020 Accord is still a strong used sedan, but brake shake and idle A/C weakness should be priced and diagnosed before the purchase feels safe.",
    bestFor: [
      "Buyers who want a practical sedan and are willing to test braking and cabin cooling carefully.",
      "Owners deciding whether a brake or A/C complaint is a small maintenance item or the next serious repair."
    ],
    avoidIf: [
      "The Accord shakes during braking or cools poorly in traffic and the seller has no recent repair evidence.",
      "A/C performance, brake vibration, and battery behavior are all vague at once."
    ],
    firstCheck: "Test A/C at idle and at road speed, then make several medium brake stops and inspect pad, rotor, condenser, fan, and service-record clues.",
    keyChecks: [
      "Compare cabin cooling in traffic with cooling at road speed.",
      "Feel for steering-wheel shake, seat vibration, or pedal pulsation during normal braking.",
      "Inspect condenser condition and fan behavior before buying A/C parts.",
      "Check battery voltage and service records if electrical symptoms appear alongside A/C or brake complaints."
    ],
    redFlags: [
      "Weak idle cooling is sold as normal summer behavior without a condenser, fan, or charge check.",
      "Brake vibration is obvious but the car has fresh pads with no rotor or hardware explanation.",
      "Multiple comfort and refinement complaints appear on a short test drive."
    ],
    nextReads: [
      {
        href: "/guides/honda-accord-2020-common-problems/",
        title: "Honda Accord 2020 common problems and what to check first",
        description: "Start with the broader Accord ownership map before narrowing to one repair area.",
        eyebrow: "Ownership guide"
      },
      {
        href: "/problems/car-shakes-when-braking-honda-accord-2020/",
        title: "Car shakes when braking on Honda Accord 2020",
        description: "Start here when the main symptom is brake vibration or pedal pulsation.",
        eyebrow: "Problem guide"
      },
      {
        href: "/best/best-brake-rotors-for-honda-accord-2020/",
        title: "Best brake rotors for Honda Accord 2020",
        description: "Open this after the brake diagnosis points clearly toward rotor replacement.",
        eyebrow: "Best parts"
      }
    ]
  },
  {
    slug: "mazda-3-2020-brake-and-suspension-checks",
    title: "Mazda 3 2020 brake and suspension checks before buying",
    href: "/guides/mazda-3-2020-brake-and-suspension-checks/",
    description:
      "A focused 2020 Mazda 3 guide for low-speed brake squeal, front-end clunks, road hum, and the checks that protect the car's refinement.",
    eyebrow: "Ownership guide",
    image: "/images/photos/cars/mazda-3-2020.webp",
    relatedCars: ["mazda-3-2020"],
    relatedGenerations: ["mazda-mazda-3-bp-2019-2023"],
    quickVerdict:
      "The 2020 Mazda 3 is appealing when it still feels tight and quiet; brake squeal, clunks, and road hum should be separated before they become a parts list.",
    bestFor: [
      "Drivers who care about compact-car refinement and will inspect small noises instead of ignoring them.",
      "Buyers comparing used Mazda 3 examples where brake, tire, and suspension condition can change the deal."
    ],
    avoidIf: [
      "The car squeals at low speed, clunks over small bumps, or hums at road speed and the seller calls it normal.",
      "The tires, brake hardware, and front-end service story do not match the clean-cabin impression."
    ],
    firstCheck: "Drive over small bumps, make several gentle low-speed stops, then inspect tires, pad condition, rotor surface, links, and bushings.",
    keyChecks: [
      "Listen for clunks over small bumps, driveway entries, and broken pavement.",
      "Check brake squeal during gentle stops after the brakes are lightly warm.",
      "Inspect tire wear and rotation history before treating road hum as a confirmed hub issue.",
      "Look at sway bar links, bushings, and loose hardware before pricing larger suspension work."
    ],
    redFlags: [
      "A refined compact already sounds loose or cheap during normal city driving.",
      "Brake squeal returns after a recent pad job with no hardware or rotor explanation.",
      "Road hum is present and the tires show uneven wear or unknown age."
    ],
    nextReads: [
      {
        href: "/guides/mazda-3-2020-common-problems/",
        title: "Mazda 3 2020 common problems and what to check first",
        description: "Start with the broader Mazda 3 ownership map before narrowing the repair.",
        eyebrow: "Ownership guide"
      },
      {
        href: "/problems/brake-squeal-at-low-speed-mazda-3-2020/",
        title: "Brake squeal at low speed on Mazda 3 2020",
        description: "Start here when the main symptom is brake noise during normal city stops.",
        eyebrow: "Problem guide"
      },
      {
        href: "/best/best-brake-pads-for-mazda-3-2020/",
        title: "Best brake pads for Mazda 3 2020",
        description: "Open this after the brake inspection confirms pads and hardware are the right path.",
        eyebrow: "Best parts"
      }
    ]
  }
];
