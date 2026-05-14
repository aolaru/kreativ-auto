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
        description: "Use this when the Q5 ownership question is really about whether oil use has become a pattern.",
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
        description: "Use this when the test drive exposes hesitation instead of clean pull.",
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
        description: "Use this only after tires and basic wheel checks no longer explain the hum.",
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
        description: "Use this when the premium-sedan test drive does not feel smooth under load.",
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
        description: "Use this before replacing tires or hubs without a clean diagnosis.",
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
  }
];
