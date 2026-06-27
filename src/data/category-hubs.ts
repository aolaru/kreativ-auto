export interface CategoryHubContent {
  intro: string;
  whenItMatters: string[];
  checksBeforeBuying: string[];
  avoidWhen: string[];
  diagnosisNotes: string[];
}

const defaultCategoryHub: CategoryHubContent = {
  intro:
    "A good parts shortlist starts after the symptom, vehicle, and service history point toward the same repair area. Fitment still needs year, trim, engine, drivetrain, and package checks before ordering.",
  whenItMatters: [
    "The diagnosis already points toward this part family rather than a broad noise or warning-light complaint.",
    "Several vehicle-specific pages cover the same repair area and the next question is which fitment or use case matters most.",
    "The repair is a normal wear item and the owner wants to avoid buying the cheapest part that creates repeat work."
  ],
  checksBeforeBuying: [
    "Confirm the exact vehicle year, trim, engine, drivetrain, and production split.",
    "Check whether the related problem page points to the part itself or to a nearby system.",
    "Compare the old part condition with the symptom so the replacement is not covering up a different fault.",
    "Check whether paired parts, hardware, fluid, or calibration work should be handled at the same time."
  ],
  avoidWhen: [
    "The symptom is still vague and no inspection has narrowed the repair area.",
    "The vehicle has tire, battery, fluid, or maintenance problems that could be creating the same complaint.",
    "Fitment depends on trim, package, or drivetrain details that have not been confirmed."
  ],
  diagnosisNotes: [
    "Part choice should follow diagnosis. A quiet, correct part is more valuable than a premium listing bought for the wrong symptom.",
    "If the same complaint returns after a recent replacement, inspect installation, hardware, and nearby components before buying another part."
  ]
};

const categoryOverrides: Record<string, CategoryHubContent> = {
  Batteries: {
    intro:
      "Battery choice depends on reserve capacity, charging health, short-trip use, climate, and whether the vehicle has enough electrical load to justify AGM pricing.",
    whenItMatters: [
      "The vehicle cranks slowly after sitting or after repeated short trips.",
      "Battery testing shows weak reserve and the charging system checks out.",
      "Cold weather, accessories, or stop-start behavior make the old battery feel marginal."
    ],
    checksBeforeBuying: [
      "Load-test the old battery and check resting voltage after the car has sat.",
      "Inspect terminals, grounds, alternator output, and parasitic draw clues.",
      "Confirm physical size, terminal layout, hold-down style, and required reset or registration steps.",
      "Choose AGM only when the vehicle use case and charging system make it worthwhile."
    ],
    avoidWhen: [
      "The battery has not been tested and the real issue may be charging, terminals, or parasitic draw.",
      "The car only starts weakly after aftermarket accessories are left on.",
      "A warning light points toward charging-system diagnosis rather than battery reserve."
    ],
    diagnosisNotes: [
      "A battery can test acceptable right after driving and weak after sitting overnight. Timing matters.",
      "Repeated dead-battery complaints need charging and draw checks before a more expensive battery is blamed or bought."
    ]
  },
  "Brake Pads": {
    intro:
      "Brake pad choice should match the vehicle weight, driving style, rotor condition, and noise tolerance. Pads alone do not fix stuck hardware, glazed rotors, or a caliper issue.",
    whenItMatters: [
      "Pad material is worn, glazed, noisy, or poorly matched to the vehicle's daily use.",
      "The rotor and caliper inspection supports a pad replacement rather than deeper brake work.",
      "The owner wants quieter daily braking or stronger towing and hauling confidence."
    ],
    checksBeforeBuying: [
      "Inspect rotor thickness, surface condition, runout clues, and heat marks.",
      "Check caliper slides, hardware, pad wear pattern, brake fluid, and parking-brake behavior.",
      "Match ceramic, semi-metallic, or truck-duty pads to actual use rather than marketing.",
      "Confirm front or rear axle fitment, trim, package, and hardware needs."
    ],
    avoidWhen: [
      "The brake pedal pulses, pulls, or feels soft and the hydraulic or rotor cause is not understood.",
      "The old pads wore unevenly and caliper movement has not been checked.",
      "The goal is silence but the chosen pad compound is more aggressive than the driving pattern needs."
    ],
    diagnosisNotes: [
      "Brake noise after a pad job often means hardware, rotor surface, or installation detail was missed.",
      "A complete brake service can be cheaper than repeating a quick pad swap that leaves the original cause in place."
    ]
  },
  "Front Brake Pads": {
    intro:
      "Front brake pads handle most of the stopping load, so rotor condition, caliper movement, and hardware matter as much as the pad brand.",
    whenItMatters: [
      "Low-speed squeal, front brake dust, or front pad wear has been confirmed.",
      "The vehicle shakes or feels rough under braking and the rotor inspection supports front brake work.",
      "The owner wants a daily pad compound that stays quiet without giving up normal stopping confidence."
    ],
    checksBeforeBuying: [
      "Confirm the noise or vibration is coming from the front axle.",
      "Inspect front rotors, caliper slides, boots, abutment hardware, and pad taper.",
      "Check whether the vehicle uses trim-specific front brakes.",
      "Plan for bedding, cleaning, and hardware replacement where needed."
    ],
    avoidWhen: [
      "Rear brake noise or parking-brake hardware is actually causing the complaint.",
      "The pedal is soft and the brake fluid or hydraulic system has not been checked.",
      "Rotor condition is poor enough that front pads alone will not solve the issue."
    ],
    diagnosisNotes: [
      "Front pads should not be chosen until front axle fitment and rotor condition are known.",
      "A quiet front brake job usually depends on clean hardware and correct bedding, not just pad material."
    ]
  },
  "Rear Brake Pads": {
    intro:
      "Rear brake pad replacement often depends on parking-brake design, caliper condition, moisture-related noise, and whether the rear axle is actually the source.",
    whenItMatters: [
      "Rear pad wear, rain-related squeak, or rear brake noise has been confirmed.",
      "The parking brake or electronic parking brake process is understood before the repair starts.",
      "The vehicle needs a quiet daily pad rather than an aggressive compound."
    ],
    checksBeforeBuying: [
      "Confirm the complaint is rear-axle brake noise and not front brake echo or tire noise.",
      "Inspect rear rotors, caliper movement, parking-brake hardware, and uneven pad wear.",
      "Check whether an electronic parking brake service mode is required.",
      "Plan for hardware and lubrication details that prevent repeat squeak."
    ],
    avoidWhen: [
      "The rear caliper is sticking and pads alone would wear out quickly.",
      "The parking brake procedure is unknown.",
      "Rotor rust or scoring is heavy enough that a pad-only repair is weak."
    ],
    diagnosisNotes: [
      "Rain-related squeak can come from surface rust, pad compound, or hardware condition.",
      "Rear pads are often simple parts, but the parking-brake system can make the job less forgiving."
    ]
  },
  Tires: {
    intro:
      "Tire choice shapes noise, vibration, braking confidence, fuel economy, winter behavior, and wheel-end diagnosis. A tire set should match the vehicle load and driving pattern.",
    whenItMatters: [
      "The vehicle has highway vibration, road hum, uneven wear, or poor wet-weather confidence.",
      "The current tires are old, mismatched, cupped, or worn enough to confuse suspension and hub diagnosis.",
      "The vehicle tows, hauls, drives winter roads, or needs a quieter daily ride."
    ],
    checksBeforeBuying: [
      "Check date codes, tread depth, uneven wear, wheel damage, alignment clues, and pressure history.",
      "Confirm size, speed rating, load rating, and whether the vehicle needs matched tread depth across all driven wheels.",
      "Separate tire roar from wheel-bearing hum before buying hubs or suspension parts.",
      "Choose the tire category for real use: touring, all-weather, truck load, performance, or winter."
    ],
    avoidWhen: [
      "A vibration has not been separated from wheel balance, bent wheels, or brake pulsation.",
      "Only one tire is being replaced on an AWD vehicle without checking tread depth and matching requirements.",
      "The selected tire does not match towing, load, climate, or ride-comfort priorities."
    ],
    diagnosisNotes: [
      "Tire noise changes with pavement and rotation more often than a bad wheel bearing does.",
      "The right tires can prevent repeat vibration diagnosis, but they cannot fix bent wheels or worn suspension parts."
    ]
  },
  "Wheel Bearings": {
    intro:
      "Wheel-bearing replacement should follow a road-speed noise diagnosis. Tire roar, uneven wear, and brake noise can imitate a bearing problem.",
    whenItMatters: [
      "A hum or growl rises with road speed and stays present off throttle.",
      "Tire rotation or inspection makes the noise easier to separate from tire roar.",
      "There is looseness, heat, ABS-related evidence, or a clear hub-side diagnosis."
    ],
    checksBeforeBuying: [
      "Drive at steady speed and listen for noise that tracks vehicle speed rather than engine load.",
      "Inspect tires for cupping, uneven wear, and age before blaming the bearing.",
      "Check for play, heat, ABS wiring, corrosion, and hub assembly style.",
      "Confirm whether the repair needs a pressed bearing, hub unit, axle nut, or sensor work."
    ],
    avoidWhen: [
      "The noise changes mostly with pavement texture and tire rotation has not been tried.",
      "Brake noise or rotor dust shield contact could be causing the sound.",
      "The vehicle has mismatched tires or severe tire wear that should be corrected first."
    ],
    diagnosisNotes: [
      "A bearing hum usually follows road speed consistently; tire noise is often more sensitive to pavement.",
      "Replacing a hub before checking tires can turn one noise complaint into two separate repair bills."
    ]
  },
  "Ignition Coils": {
    intro:
      "Ignition coils should be bought after scan data, plug condition, cylinder behavior, and service history point toward a real ignition fault.",
    whenItMatters: [
      "Misfire codes or cylinder-specific behavior follow one coil or one ignition path.",
      "Spark plug age and condition have already been checked.",
      "Hesitation, rough idle, or load-related stumble matches ignition evidence."
    ],
    checksBeforeBuying: [
      "Read codes and freeze-frame data before clearing anything.",
      "Inspect plugs, plug wells, coil boots, oil intrusion, wiring, and grounds.",
      "Swap-test only when it is safe and useful for the engine layout.",
      "Confirm whether coils should be replaced individually or as a set based on age and evidence."
    ],
    avoidWhen: [
      "The engine has not been scanned and the symptom could be fuel, intake, vacuum, or tune related.",
      "Spark plugs are overdue and have not been checked.",
      "A modified car has no service history and the misfire appears only under boost."
    ],
    diagnosisNotes: [
      "Coils are easy to blame because they are easy to buy, but plug age and scan data should lead the decision.",
      "A repeat misfire after coil replacement means the diagnosis needs to widen, not that another random coil should be ordered."
    ]
  },
  "Spark Plugs": {
    intro:
      "Spark plugs are maintenance parts, but the correct interval, heat range, gap, and engine condition still matter before a drivability complaint is blamed on plugs.",
    whenItMatters: [
      "Plug age or mileage is known and the engine shows rough idle, misfire, hesitation, or poor cold starts.",
      "The ignition system has been checked and the plugs are the logical maintenance reset.",
      "A turbo or performance engine needs correct plug specification rather than a generic listing."
    ],
    checksBeforeBuying: [
      "Confirm the exact engine, plug type, gap, torque procedure, and service interval.",
      "Inspect old plugs for oil, fuel, heat, deposits, or one cylinder that looks different.",
      "Check coil boots and plug wells while the plugs are out.",
      "Avoid changing plug specification on a modified car without knowing the tune requirements."
    ],
    avoidWhen: [
      "Misfire diagnosis has not separated plugs from coils, injectors, compression, or intake issues.",
      "A seller claims plugs were changed but cannot show mileage, brand, or specification.",
      "The engine has oil or coolant contamination evidence that plugs will not solve."
    ],
    diagnosisNotes: [
      "Old plugs can create real drivability complaints, but they also reveal clues about the engine.",
      "Correct specification is more important than a premium-sounding plug name."
    ]
  },
  "Sway Bar Links": {
    intro:
      "Sway bar links are common clunk sources, but they should be checked alongside bushings, struts, mounts, control arms, and tire condition.",
    whenItMatters: [
      "A short, sharp clunk appears over small bumps or driveway entries.",
      "The noise is isolated near the stabilizer link or bushing area.",
      "The vehicle still tracks normally and the repair looks like a localized front-end or rear-end wear item."
    ],
    checksBeforeBuying: [
      "Check link play, boot condition, mounting hardware, sway bar bushings, and nearby suspension parts.",
      "Confirm whether the noise is front, rear, left, or right before ordering.",
      "Inspect tire wear and alignment clues that could point to a broader suspension issue.",
      "Replace paired links when age and access make one-side replacement a weak value."
    ],
    avoidWhen: [
      "The noise is a heavy knock, steering looseness, or braking clunk that points beyond links.",
      "Strut mounts, control arms, or bushings have not been inspected.",
      "The vehicle has accident damage or severe tire wear that changes the diagnosis."
    ],
    diagnosisNotes: [
      "Sway bar links often make a small, sharp noise over quick bumps.",
      "A link repair should make the noise narrower, not hide loose steering or worn structural suspension parts."
    ]
  },
  "Front Sway Bar Links": {
    intro:
      "Front sway bar links are worth checking when a small front clunk appears over short bumps, but the surrounding suspension should be inspected at the same time.",
    whenItMatters: [
      "The clunk comes from the front over small bumps, driveway lips, or broken pavement.",
      "The steering still feels controlled and the noise is narrow enough to isolate.",
      "The boots, ball joints, or link hardware show wear or looseness."
    ],
    checksBeforeBuying: [
      "Confirm front axle location and inspect both left and right links.",
      "Check front sway bar bushings, strut mounts, control arm bushings, and tire wear.",
      "Confirm fitment by year, trim, drivetrain, and suspension package.",
      "Plan for new hardware when corrosion or rounded fasteners are likely."
    ],
    avoidWhen: [
      "The sound is a deep suspension knock or steering looseness rather than a small stabilizer clunk.",
      "The vehicle has uneven tire wear and broader front-end diagnosis is still open.",
      "Only one side is being changed on an older, evenly worn front suspension without a reason."
    ],
    diagnosisNotes: [
      "Front link noise can be annoying while still being a localized repair.",
      "A careful front-end inspection keeps a simple link job from becoming a parts guess."
    ]
  }
};

export function getCategoryHub(category: string): CategoryHubContent {
  return categoryOverrides[category] ?? defaultCategoryHub;
}
