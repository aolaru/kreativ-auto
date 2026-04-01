import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const affiliateProductSchema = z.object({
  name: z.string(),
  price: z.string(),
  rating: z.number().min(0).max(5),
  affiliate_url: z.string().url(),
  summary: z.string().optional(),
  image: z.string().optional()
});

const seoFields = {
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  excerpt: z.string().optional(),
  heroImage: z.string().optional(),
  updatedAt: z.coerce.date().optional()
};

const cars = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/cars" }),
  schema: z.object({
    title: z.string(),
    brand: z.string(),
    model: z.string(),
    year: z.number().int(),
    generation: z.string(),
    generationCode: z.string().optional(),
    generationYears: z.string(),
    phase: z.string().optional(),
    phaseYears: z.string().optional(),
    description: z.string(),
    image: z.string().optional(),
    relatedProblems: z.array(z.string()).default([]),
    relatedBest: z.array(z.string()).default([]),
    commonProblems: z.array(z.string()).default([]),
    recommendedParts: z.array(affiliateProductSchema).default([]),
    maintenanceTips: z.array(z.string()).default([]),
    faqs: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string()
        })
      )
      .default([]),
    ...seoFields
  })
});

const problems = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/problems" }),
  schema: z.object({
    title: z.string(),
    symptoms: z.array(z.string()),
    causes: z.array(z.string()),
    solutions: z.array(z.string()),
    urgency: z.string().optional(),
    canYouDrive: z.string().optional(),
    estimatedCost: z.string().optional(),
    diyDifficulty: z.string().optional(),
    whenToSeeMechanic: z.array(z.string()).default([]),
    commonMistakes: z.array(z.string()).default([]),
    relatedCars: z.array(z.string()).default([]),
    relatedBest: z.array(z.string()).default([]),
    recommendedParts: z.array(affiliateProductSchema).default([]),
    faqs: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string()
        })
      )
      .default([]),
    ...seoFields
  })
});

const best = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/best" }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    car_model: z.string(),
    relatedCars: z.array(z.string()).default([]),
    relatedProblems: z.array(z.string()).default([]),
    products: z.array(affiliateProductSchema),
    buyingAdvice: z.array(z.string()).default([]),
    faqs: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string()
        })
      )
      .default([]),
    ...seoFields
  })
});

export const collections = { cars, problems, best };
