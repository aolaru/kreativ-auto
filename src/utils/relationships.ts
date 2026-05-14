type GuideRelationship = {
  relatedCars?: string[];
  relatedGenerations?: string[];
};

type CarRelationship = {
  id: string;
  generationSlug?: string;
};

export function guideMatchesCar(guide: GuideRelationship, car: CarRelationship) {
  return Boolean(
    guide.relatedCars?.includes(car.id) ||
      (car.generationSlug && guide.relatedGenerations?.includes(car.generationSlug))
  );
}

export function getGuideCluster(guide: GuideRelationship) {
  if (guide.relatedCars?.includes("honda-civic-2019")) return "civic";
  if (guide.relatedCars?.includes("toyota-rav4-2020") || guide.relatedCars?.includes("toyota-rav4-2021")) return "rav4";
  if (guide.relatedCars?.includes("vw-tiguan-2020")) return "tiguan";
  return "other";
}
