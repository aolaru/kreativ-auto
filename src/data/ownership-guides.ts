import { deepOwnershipGuides } from "./deep-ownership-guides";
import { quickOwnershipGuides } from "./quick-ownership-guides";

export interface OwnershipGuide {
  title: string;
  href: string;
  description: string;
  eyebrow: string;
  image?: string;
  relatedCars?: string[];
  relatedGenerations?: string[];
}

export const ownershipGuides: OwnershipGuide[] = [
  {
    title: "2020 Mazda CX-30: what to check before buying",
    href: "/guides/mazda-cx-30-2020-what-to-check-before-buying/",
    description:
      "A VIN-led used-buyer inspection for a 2020 CX-30, covering records, recalls, tires, brakes, and a front-rattle check that does not assume the repair.",
    eyebrow: "Used buyer guide",
    image: "/images/photos/cars/mazda-cx-30-2020.webp",
    relatedCars: ["mazda-cx-30-2020"],
    relatedGenerations: ["mazda-cx-30-dm-2020-model-year-covered"]
  },
  {
    title: "2020 Mazda CX-30 service schedule and maintenance record",
    href: "/guides/mazda-cx-30-2020-service-schedule-and-maintenance-record/",
    description:
      "A record-based guide to Mazda's published schedule, the vehicle status monitor, severe-use conditions, and the service evidence a buyer or workshop needs.",
    eyebrow: "Service guide",
    image: "/images/photos/cars/mazda-cx-30-2020.webp",
    relatedCars: ["mazda-cx-30-2020"],
    relatedGenerations: ["mazda-cx-30-dm-2020-model-year-covered"]
  },
  {
    title: "2020 Mazda CX-30 maintenance-cost framework",
    href: "/guides/mazda-cx-30-2020-maintenance-cost-framework/",
    description:
      "A practical method for planning CX-30 ownership costs from service records, inspection evidence, and itemized quotes instead of generic annual averages.",
    eyebrow: "Ownership planning",
    image: "/images/photos/cars/mazda-cx-30-2020.webp",
    relatedCars: ["mazda-cx-30-2020"],
    relatedGenerations: ["mazda-cx-30-dm-2020-model-year-covered"]
  },
  {
    title: "2020 Mazda CX-30: what to avoid",
    href: "/guides/mazda-cx-30-2020-what-to-avoid/",
    description:
      "The records, safety symptoms, and unsupported suspension diagnoses that should change a CX-30 buying decision before the price is agreed.",
    eyebrow: "Avoid guide",
    image: "/images/photos/cars/mazda-cx-30-2020.webp",
    relatedCars: ["mazda-cx-30-2020"],
    relatedGenerations: ["mazda-cx-30-dm-2020-model-year-covered"]
  },
  {
    title: "Toyota Highlander XU70: what to check before buying",
    href: "/guides/toyota-highlander-xu70-what-to-check-before-buying/",
    description:
      "A used-buyer inspection for a 2020 Highlander, covering records, recalls, tires, brakes, battery condition, and the test-drive evidence that should affect the price.",
    eyebrow: "Used buyer guide",
    image: "/images/photos/cars/toyota-highlander-2020.webp",
    relatedCars: ["toyota-highlander-2020"],
    relatedGenerations: ["toyota-highlander-xu70-2020-2023"]
  },
  {
    title: "Should you buy a used VW Tiguan II facelift?",
    href: "/guides/vw-tiguan-ii-facelift-should-you-buy-it-used/",
    description:
      "A Tiguan buyer's guide focused on maintenance history, coolant behavior, warning lights, and the tradeoffs that matter before money changes hands.",
    eyebrow: "Used buyer guide",
    image: "/images/photos/cars/vw-tiguan-2020.webp",
    relatedCars: ["vw-tiguan-2020"],
    relatedGenerations: ["volkswagen-tiguan-tiguan-ii-facelift-2020-2024"]
  },
  {
    title: "Should you buy a used Toyota RAV4 XA50?",
    href: "/guides/toyota-rav4-xa50-should-you-buy-it-used/",
    description:
      "A RAV4 XA50 buying guide focused on price discipline, condition, powertrain fit, and where reputation stops being a substitute for inspection.",
    eyebrow: "Used buyer guide",
    image: "/images/photos/cars/toyota-rav4-2021.webp",
    relatedCars: ["toyota-rav4-2020", "toyota-rav4-2021"],
    relatedGenerations: ["toyota-rav4-xa50-2019-2021"]
  },
  {
    title: "Should you buy a used Honda Civic 10th gen facelift?",
    href: "/guides/honda-civic-10th-gen-facelift-should-you-buy-it-used/",
    description:
      "A Civic buying guide focused on engine choice, trim fit, maintenance history, and the wear items that still matter on a safe-looking used buy.",
    eyebrow: "Used buyer guide",
    image: "/images/photos/cars/honda-civic-2019.webp",
    relatedCars: ["honda-civic-2019"],
    relatedGenerations: ["honda-civic-fc-fk-facelift-2019-2021"]
  },
  {
    title: "VW Tiguan II facelift reliability scorecard",
    href: "/guides/vw-tiguan-ii-facelift-reliability-scorecard/",
    description:
      "A used-buyer reliability scorecard for the facelift Tiguan, focused on what the SUV does well, where the ownership risk really sits, and which complaints are manageable versus annoying.",
    eyebrow: "Reliability guide",
    image: "/images/photos/cars/vw-tiguan-2020.webp",
    relatedCars: ["vw-tiguan-2020"],
    relatedGenerations: ["volkswagen-tiguan-tiguan-ii-facelift-2020-2024"]
  },
  {
    title: "Toyota RAV4 XA50 reliability scorecard",
    href: "/guides/toyota-rav4-xa50-reliability-scorecard/",
    description:
      "A used-buyer reliability scorecard for the XA50 RAV4, focused on where the platform is genuinely strong, where everyday ownership still needs discipline, and which complaints are usually low-drama.",
    eyebrow: "Reliability guide",
    image: "/images/photos/cars/toyota-rav4-2021.webp",
    relatedCars: ["toyota-rav4-2020", "toyota-rav4-2021"],
    relatedGenerations: ["toyota-rav4-xa50-2019-2021"]
  },
  {
    title: "Honda Civic 10th gen facelift reliability scorecard",
    href: "/guides/honda-civic-10th-gen-facelift-reliability-scorecard/",
    description:
      "A used-buyer reliability scorecard for the facelift Civic, focused on what is genuinely easy to live with, which weak points deserve real attention, and where the platform reputation hides nuance.",
    eyebrow: "Reliability guide",
    image: "/images/photos/cars/honda-civic-2019.webp",
    relatedCars: ["honda-civic-2019"],
    relatedGenerations: ["honda-civic-fc-fk-facelift-2019-2021"]
  },
  {
    title: "VW Tiguan II facelift common problems",
    href: "/guides/vw-tiguan-ii-facelift-common-problems/",
    description:
      "A flagship ownership guide to the repeat Tiguan facelift trouble spots, what to check first, and which guide to open next when the car starts feeling less sorted.",
    eyebrow: "Ownership guide",
    image: "/images/photos/cars/vw-tiguan-2020.webp",
    relatedCars: ["vw-tiguan-2020"],
    relatedGenerations: ["volkswagen-tiguan-tiguan-ii-facelift-2020-2024"]
  },
  {
    title: "Toyota RAV4 XA50 common problems",
    href: "/guides/toyota-rav4-xa50-common-problems/",
    description:
      "A flagship ownership guide to the repeat RAV4 XA50 complaints, where owners waste money first, and which problem or parts guide is worth opening next.",
    eyebrow: "Ownership guide",
    image: "/images/photos/cars/toyota-rav4-2021.webp",
    relatedCars: ["toyota-rav4-2020", "toyota-rav4-2021"],
    relatedGenerations: ["toyota-rav4-xa50-2019-2021"]
  },
  {
    title: "Honda Civic 10th gen facelift common problems",
    href: "/guides/honda-civic-10th-gen-facelift-common-problems/",
    description:
      "A flagship ownership guide to the repeat Civic facelift issues, what to check first, and which guide to open next before routine commuter problems get overdiagnosed.",
    eyebrow: "Ownership guide",
    image: "/images/photos/cars/honda-civic-2019.webp",
    relatedCars: ["honda-civic-2019"],
    relatedGenerations: ["honda-civic-fc-fk-facelift-2019-2021"]
  },
  {
    title: "Honda CR-V 2020 common problems and what to check first",
    href: "/guides/honda-cr-v-2020-common-problems/",
    description:
      "A second-tier cornerstone guide for the 2020 CR-V, focused on brake refinement, front-end clunks, battery behavior, and the first checks that keep ownership costs controlled.",
    eyebrow: "Ownership guide",
    image: "/images/photos/cars/honda-cr-v-2020.webp",
    relatedCars: ["honda-cr-v-2020"],
    relatedGenerations: ["honda-cr-v-rw-rt-facelift-2020-2022"]
  },
  {
    title: "Mazda CX-5 2020 common problems and what to check first",
    href: "/guides/mazda-cx-5-2020-common-problems/",
    description:
      "A second-tier cornerstone guide for the 2020 CX-5, focused on brake noise, front-end suspension clunks, road hum, and the checks that preserve the SUV's refinement.",
    eyebrow: "Ownership guide",
    image: "/images/photos/cars/mazda-cx-5-2020.webp",
    relatedCars: ["mazda-cx-5-2020"],
    relatedGenerations: ["mazda-cx-5-kf-2017-2021"]
  },
  {
    title: "Toyota Corolla 2020 common problems and what to check first",
    href: "/guides/toyota-corolla-2020-common-problems/",
    description:
      "A second-tier cornerstone guide for the 2020 Corolla, focused on brake squeal, battery warning behavior, wheel-bearing hum, and the first checks owners should not skip.",
    eyebrow: "Ownership guide",
    image: "/images/photos/cars/toyota-corolla-2020.webp",
    relatedCars: ["toyota-corolla-2020"],
    relatedGenerations: ["toyota-corolla-e210-2019-2022"]
  },
  {
    title: "Honda Accord 2020 common problems and what to check first",
    href: "/guides/honda-accord-2020-common-problems/",
    description:
      "A second-tier cornerstone guide for the 2020 Accord, focused on weak A/C at idle, brake vibration, battery behavior, and front-end noise.",
    eyebrow: "Ownership guide",
    image: "/images/photos/cars/honda-accord-2020.webp",
    relatedCars: ["honda-accord-2020"],
    relatedGenerations: ["honda-accord-cv1-cv2-2018-2022"]
  },
  {
    title: "Mazda 3 2020 common problems and what to check first",
    href: "/guides/mazda-3-2020-common-problems/",
    description:
      "A second-tier cornerstone guide for the 2020 Mazda 3, focused on front-end clunks, brake noise, road hum, and short-trip battery behavior.",
    eyebrow: "Ownership guide",
    image: "/images/photos/cars/mazda-3-2020.webp",
    relatedCars: ["mazda-3-2020"],
    relatedGenerations: ["mazda-mazda-3-bp-2019-2023"]
  },
  {
    title: "Toyota Camry 2020 common problems and what to check first",
    href: "/guides/toyota-camry-2020-common-problems/",
    description:
      "A second-tier cornerstone guide for the 2020 Camry, focused on brake squeal, highway vibration, battery behavior, and road-noise diagnosis.",
    eyebrow: "Ownership guide",
    image: "/images/photos/cars/toyota-camry-2020.webp",
    relatedCars: ["toyota-camry-2020"],
    relatedGenerations: ["toyota-camry-xv70-2018-2020"]
  },
  {
    title: "VW Tiguan II facelift maintenance costs and weak points",
    href: "/guides/vw-tiguan-ii-facelift-maintenance-costs-and-weak-points/",
    description:
      "A maintenance-focused flagship guide to Tiguan II facelift running costs, common weak points, and the service areas most likely to cost real money first.",
    eyebrow: "Maintenance guide",
    image: "/images/photos/cars/vw-tiguan-2020.webp",
    relatedCars: ["vw-tiguan-2020"],
    relatedGenerations: ["volkswagen-tiguan-tiguan-ii-facelift-2020-2024"]
  },
  {
    title: "Toyota RAV4 XA50 maintenance costs and weak points",
    href: "/guides/toyota-rav4-xa50-maintenance-costs-and-weak-points/",
    description:
      "A maintenance-focused flagship guide to RAV4 XA50 ownership costs, repeat weak points, and the repair areas most likely to shape long-term running costs.",
    eyebrow: "Maintenance guide",
    image: "/images/photos/cars/toyota-rav4-2021.webp",
    relatedCars: ["toyota-rav4-2020", "toyota-rav4-2021"],
    relatedGenerations: ["toyota-rav4-xa50-2019-2021"]
  },
  {
    title: "Honda Civic 10th gen facelift maintenance costs and weak points",
    href: "/guides/honda-civic-10th-gen-facelift-maintenance-costs-and-weak-points/",
    description:
      "A maintenance-focused flagship guide to facelift Civic ownership costs, recurring weak points, and the service items most likely to matter first on a daily-driven car.",
    eyebrow: "Maintenance guide",
    image: "/images/photos/cars/honda-civic-2019.webp",
    relatedCars: ["honda-civic-2019"],
    relatedGenerations: ["honda-civic-fc-fk-facelift-2019-2021"]
  },
  {
    title: "Toyota Corolla 2020 maintenance costs and weak points",
    href: "/guides/toyota-corolla-2020-maintenance-costs-and-weak-points/",
    description:
      "A maintenance-focused guide to 2020 Corolla ownership costs, ordinary weak points, and the service areas most likely to shape the budget first.",
    eyebrow: "Maintenance guide",
    image: "/images/photos/cars/toyota-corolla-2020.webp",
    relatedCars: ["toyota-corolla-2020"],
    relatedGenerations: ["toyota-corolla-e210-2019-2022"]
  },
  {
    title: "Honda Accord 2020 maintenance costs and weak points",
    href: "/guides/honda-accord-2020-maintenance-costs-and-weak-points/",
    description:
      "A maintenance-focused guide to 2020 Accord ownership costs, ordinary weak points, and the service areas most likely to shape the budget first.",
    eyebrow: "Maintenance guide",
    image: "/images/photos/cars/honda-accord-2020.webp",
    relatedCars: ["honda-accord-2020"],
    relatedGenerations: ["honda-accord-cv1-cv2-2018-2022"]
  },
  {
    title: "Mazda 3 2020 maintenance costs and weak points",
    href: "/guides/mazda-3-2020-maintenance-costs-and-weak-points/",
    description:
      "A maintenance-focused guide to 2020 Mazda 3 ownership costs, ordinary weak points, and the refinement items most likely to shape the budget first.",
    eyebrow: "Maintenance guide",
    image: "/images/photos/cars/mazda-3-2020.webp",
    relatedCars: ["mazda-3-2020"],
    relatedGenerations: ["mazda-mazda-3-bp-2019-2023"]
  },
  {
    title: "Honda Accord 2020: what to avoid",
    href: "/guides/honda-accord-2020-what-to-avoid/",
    description:
      "An ownership guide to the 2020 Accord examples, shortcuts, and weak-condition patterns that create the most regret.",
    eyebrow: "Avoid guide",
    image: "/images/photos/cars/honda-accord-2020.webp",
    relatedCars: ["honda-accord-2020"],
    relatedGenerations: ["honda-accord-cv1-cv2-2018-2022"]
  },
  {
    title: "Mazda 3 2020: what to avoid",
    href: "/guides/mazda-3-2020-what-to-avoid/",
    description:
      "An ownership guide to the 2020 Mazda 3 examples where front-end noise, brake refinement, road hum, or battery behavior should change the buying decision.",
    eyebrow: "Avoid guide",
    image: "/images/photos/cars/mazda-3-2020.webp",
    relatedCars: ["mazda-3-2020"],
    relatedGenerations: ["mazda-mazda-3-bp-2019-2023"]
  },
  {
    title: "Toyota Corolla 2020: what to avoid",
    href: "/guides/toyota-corolla-2020-what-to-avoid/",
    description:
      "An ownership guide to the 2020 Corolla examples where reputation hides brake, battery, tire, or wheel-end costs that should be priced in.",
    eyebrow: "Avoid guide",
    image: "/images/photos/cars/toyota-corolla-2020.webp",
    relatedCars: ["toyota-corolla-2020"],
    relatedGenerations: ["toyota-corolla-e210-2019-2022"]
  },
  {
    title: "VW Tiguan II facelift service schedule and intervals",
    href: "/guides/vw-tiguan-ii-facelift-service-schedule-and-intervals/",
    description:
      "A service-interval guide to the facelift Tiguan maintenance rhythm, including which jobs deserve strict timing and which ones should be moved up on harder-use cars.",
    eyebrow: "Service guide",
    image: "/images/photos/cars/vw-tiguan-2020.webp",
    relatedCars: ["vw-tiguan-2020"],
    relatedGenerations: ["volkswagen-tiguan-tiguan-ii-facelift-2020-2024"]
  },
  {
    title: "Toyota RAV4 XA50 service schedule and intervals",
    href: "/guides/toyota-rav4-xa50-service-schedule-and-intervals/",
    description:
      "A service-interval guide to the XA50 RAV4 maintenance rhythm, including where everyday use, short trips, and hybrid-versus-gas usage change the practical schedule.",
    eyebrow: "Service guide",
    image: "/images/photos/cars/toyota-rav4-2021.webp",
    relatedCars: ["toyota-rav4-2020", "toyota-rav4-2021"],
    relatedGenerations: ["toyota-rav4-xa50-2019-2021"]
  },
  {
    title: "Honda Civic 10th gen facelift service schedule and intervals",
    href: "/guides/honda-civic-10th-gen-facelift-service-schedule-and-intervals/",
    description:
      "A service-interval guide to the facelift Civic maintenance rhythm, including the jobs that matter most on commuter-driven cars and where owners should not stretch the schedule.",
    eyebrow: "Service guide",
    image: "/images/photos/cars/honda-civic-2019.webp",
    relatedCars: ["honda-civic-2019"],
    relatedGenerations: ["honda-civic-fc-fk-facelift-2019-2021"]
  },
  {
    title: "VW Tiguan II facelift what to check before buying",
    href: "/guides/vw-tiguan-ii-facelift-what-to-check-before-buying/",
    description:
      "A buyer-focused guide to the Tiguan II facelift checks that matter most before purchase, including the weak spots that are easy to miss on a quick viewing.",
    eyebrow: "Buying guide",
    image: "/images/photos/cars/vw-tiguan-2020.webp",
    relatedCars: ["vw-tiguan-2020"],
    relatedGenerations: ["volkswagen-tiguan-tiguan-ii-facelift-2020-2024"]
  },
  {
    title: "Toyota RAV4 XA50 what to check before buying",
    href: "/guides/toyota-rav4-xa50-what-to-check-before-buying/",
    description:
      "A buyer-focused guide to the XA50 RAV4 checks that matter most before purchase, including the refinement and wear patterns that show up in normal ownership.",
    eyebrow: "Buying guide",
    image: "/images/photos/cars/toyota-rav4-2021.webp",
    relatedCars: ["toyota-rav4-2020", "toyota-rav4-2021"],
    relatedGenerations: ["toyota-rav4-xa50-2019-2021"]
  },
  {
    title: "Honda Civic 10th gen facelift what to check before buying",
    href: "/guides/honda-civic-10th-gen-facelift-what-to-check-before-buying/",
    description:
      "A buyer-focused guide to the facelift Civic checks that matter most before purchase, including the commuter-grade weak points that are easy to dismiss too quickly.",
    eyebrow: "Buying guide",
    image: "/images/photos/cars/honda-civic-2019.webp",
    relatedCars: ["honda-civic-2019"],
    relatedGenerations: ["honda-civic-fc-fk-facelift-2019-2021"]
  },
  {
    title: "VW Tiguan II facelift trims: which one to buy",
    href: "/guides/vw-tiguan-ii-facelift-trims-which-one-to-buy/",
    description:
      "A trim-focused guide to the facelift Tiguan range, including which versions make the most sense for daily use and which ones are easier to overpay for.",
    eyebrow: "Trim guide",
    image: "/images/photos/cars/vw-tiguan-2020.webp",
    relatedCars: ["vw-tiguan-2020"],
    relatedGenerations: ["volkswagen-tiguan-tiguan-ii-facelift-2020-2024"]
  },
  {
    title: "Toyota RAV4 XA50 trims: which one to buy",
    href: "/guides/toyota-rav4-xa50-trims-which-one-to-buy/",
    description:
      "A trim-focused guide to the XA50 RAV4 range, including where the equipment and value balance is strongest and which trims need a more careful read.",
    eyebrow: "Trim guide",
    image: "/images/photos/cars/toyota-rav4-2021.webp",
    relatedCars: ["toyota-rav4-2020", "toyota-rav4-2021"],
    relatedGenerations: ["toyota-rav4-xa50-2019-2021"]
  },
  {
    title: "Honda Civic 10th gen facelift trims and engines: which one to buy",
    href: "/guides/honda-civic-10th-gen-facelift-trims-and-engines-which-one-to-buy/",
    description:
      "A trim-and-engine buying guide for the facelift Civic, focused on which versions suit normal daily use best and where the ownership tradeoffs actually change.",
    eyebrow: "Trim guide",
    image: "/images/photos/cars/honda-civic-2019.webp",
    relatedCars: ["honda-civic-2019"],
    relatedGenerations: ["honda-civic-fc-fk-facelift-2019-2021"]
  },
  {
    title: "VW Tiguan II facelift: what to avoid",
    href: "/guides/vw-tiguan-ii-facelift-what-to-avoid/",
    description:
      "An ownership guide to the facelift Tiguan mistakes, weak-condition examples, and buying shortcuts that create the most regret.",
    eyebrow: "Avoid guide",
    image: "/images/photos/cars/vw-tiguan-2020.webp",
    relatedCars: ["vw-tiguan-2020"],
    relatedGenerations: ["volkswagen-tiguan-tiguan-ii-facelift-2020-2024"]
  },
  {
    title: "Toyota RAV4 XA50: what to avoid",
    href: "/guides/toyota-rav4-xa50-what-to-avoid/",
    description:
      "An ownership guide to the XA50 RAV4 mistakes, weak-condition examples, and buying shortcuts that create the most regret.",
    eyebrow: "Avoid guide",
    image: "/images/photos/cars/toyota-rav4-2021.webp",
    relatedCars: ["toyota-rav4-2020", "toyota-rav4-2021"],
    relatedGenerations: ["toyota-rav4-xa50-2019-2021"]
  },
  {
    title: "Honda Civic 10th gen facelift: what to avoid",
    href: "/guides/honda-civic-10th-gen-facelift-what-to-avoid/",
    description:
      "An ownership guide to the facelift Civic mistakes, weak-condition examples, and buying shortcuts that create the most regret.",
    eyebrow: "Avoid guide",
    image: "/images/photos/cars/honda-civic-2019.webp",
    relatedCars: ["honda-civic-2019"],
    relatedGenerations: ["honda-civic-fc-fk-facelift-2019-2021"]
  },
  ...deepOwnershipGuides.map((guide) => ({
    title: guide.title,
    href: guide.href,
    description: guide.description,
    eyebrow: guide.eyebrow,
    image: guide.image,
    relatedCars: guide.relatedCars,
    relatedGenerations: guide.relatedGenerations
  })),
  ...quickOwnershipGuides.map((guide) => ({
    title: guide.title,
    href: guide.href,
    description: guide.description,
    eyebrow: guide.eyebrow,
    image: guide.image,
    relatedCars: guide.relatedCars,
    relatedGenerations: guide.relatedGenerations
  }))
];
