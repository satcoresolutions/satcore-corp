import type {
  AutomationLevel,
  LanguageCode,
  PricingType,
} from "./common.types";

// ────────────────────────────────────────────
// SHARED
// ────────────────────────────────────────────

export interface PlanSpecification {
  label: string;

  value: string;
}

export interface PlanBenefit {
  title: string;

  description: string;
}

export interface PlanFAQ {
  question: string;

  answer: string;
}

export interface PlanProcess {
  title: string;

  description: string;
}

// ────────────────────────────────────────────
// CONTENT (TRANSLATABLE)
// ────────────────────────────────────────────

export interface ServicePlanContent {
  name: string;

  title: string;

  level: string;

  category: string;

  description: string;

  time: string;

  imageAlt: string;

  target: string;

  support?: string;

  useCases: string[];

  includes: string[];

  notIncludes: string[];

  features: string[];

  deliverables: string[];

  specifications: PlanSpecification[];

  process?: PlanProcess[];

  benefits?: PlanBenefit[];

  faq?: PlanFAQ[];
}

// ────────────────────────────────────────────
// CORE
// ────────────────────────────────────────────

export interface ServicePlanCore {
  id: string;

  slug: string;

  price: string;

  complexity: string;

  pricingType?: PricingType;

  automationLevel?: AutomationLevel;

  stack: string[];

  image?: string;

  heroImage?: string;

  technologies?: string[];

  integrations?: string[];

  sla?: string;
}

// ────────────────────────────────────────────
// FINAL MODEL
// ────────────────────────────────────────────

export interface ServicePlan {
  core: ServicePlanCore;

  translations: Record<
    LanguageCode,
    ServicePlanContent
  >;

  href?: string;
}