import type {
  LanguageCode,
  PillarSlug,
  ServiceIcon,
} from "./common.types";

import type {
  ServicePlan,
} from "./plan.types";

// ────────────────────────────────────────────
// OVERVIEW
// ────────────────────────────────────────────

export interface ServiceOverview {
  title: string;

  description: string;

  image: string;

  imageAlt: string;

  useCases: string[];
}

// ────────────────────────────────────────────
// WORKFLOW
// ────────────────────────────────────────────

export interface ServiceWorkflowStep {
  title: string;

  description: string;
}

export interface ServiceWorkflow {
  badge: string;

  title: string;

  description: string;

  steps: ServiceWorkflowStep[];
}

// ────────────────────────────────────────────
// USE CASES
// ────────────────────────────────────────────

export interface ServiceUseCaseItem {
  title: string;

  description: string;

  icon?: string;
}

export interface ServiceUseCases {
  title: string;

  description: string;

  useCases: ServiceUseCaseItem[];
}

// ────────────────────────────────────────────
// FEATURES
// ────────────────────────────────────────────

export interface ServiceFeatureItem {
  title: string;

  description: string;
}

export interface ServiceFeatures {
  title: string;

  description: string;

  features: ServiceFeatureItem[];
}

// ────────────────────────────────────────────
// PLANS SECTION
// ────────────────────────────────────────────

export interface ServicePlansSection {
  title: string;

  description: string;
}

// ────────────────────────────────────────────
// CTA
// ────────────────────────────────────────────

export interface ServiceCTA {
  title: string;

  description: string;

  button: string;
}

// ────────────────────────────────────────────
// SEO
// ────────────────────────────────────────────

export interface ServiceSEO {
  title: string;

  description: string;

  keywords: string[];
}

// ────────────────────────────────────────────
// CONTENT (TRANSLATABLE)
// ────────────────────────────────────────────

export interface ServiceDetailContent {
  title: string;

  subtitle: string;

  description: string;

  overview: ServiceOverview;

  workflow: ServiceWorkflow;

  useCases: ServiceUseCases;

  features: ServiceFeatures;

  plansSection: ServicePlansSection;

  cta?: ServiceCTA;

  seo?: ServiceSEO;
}

// ────────────────────────────────────────────
// CORE (NON-TRANSLATABLE)
// ────────────────────────────────────────────

export interface ServiceDetailCore {
  id: string;

  pillar: PillarSlug;

  slug: string;

  name: string;

  icon: ServiceIcon;

  heroImage: string;

  plans: ServicePlan[];
}

// ────────────────────────────────────────────
// FINAL MODEL
// ────────────────────────────────────────────

export interface ServiceDetail {
  core: ServiceDetailCore;

  plans: ServicePlan[];

  translations: Record<
    LanguageCode,
    ServiceDetailContent
  >;

  href?: string;
}