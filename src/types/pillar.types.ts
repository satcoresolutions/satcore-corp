import type {
  GuaranteeIcon,
  LanguageCode,
  PillarSlug,
  ServiceIcon,
} from "./common.types";

import type { LucideIcon } from "lucide-react";

// ────────────────────────────────────────────
// HERO
// ────────────────────────────────────────────

export interface PillarHero {
  badge?: string;
}

// ────────────────────────────────────────────
// TECH STACK
// ────────────────────────────────────────────

export interface PillarTechStack {
  title: string;

  description: string;
}

// ────────────────────────────────────────────
// SERVICE CATALOG
// ────────────────────────────────────────────

export interface PillarServiceCatalog {
  title: string;

  description: string;
}

// ────────────────────────────────────────────
// PROCESS
// ────────────────────────────────────────────

export interface PillarProcessStep {
  title: string;

  subtitle: string;

  icon: LucideIcon;
}

export interface PillarProcess {
  title: string;

  description: string;

  steps: PillarProcessStep[];
}

// ────────────────────────────────────────────
// SCOPE
// ────────────────────────────────────────────

export interface PillarScopeCard {
  title: string;

  type: "include" | "exclude";

  items: string[];
}

export interface PillarScope {
  title: string;

  description: string;

  cards: PillarScopeCard[];
}

// ────────────────────────────────────────────
// PRICING
// ────────────────────────────────────────────

export interface PillarPricingPlan {
  title: string;

  price: string;

  time: string;
}

export interface PillarPricing {
  title: string;

  description: string;

  plans: PillarPricingPlan[];
}

// ────────────────────────────────────────────
// GUARANTEE
// ────────────────────────────────────────────

export interface PillarGuaranteeCard {
  title: string;

  description: string;

  icon: GuaranteeIcon;
}

export interface PillarGuarantee {
  title: string;

  description: string;

  cards: PillarGuaranteeCard[];
}

// ────────────────────────────────────────────
// REQUIREMENTS
// ────────────────────────────────────────────

export interface PillarRequirementItem {
  title: string;

  description: string;
}

export interface PillarRequirements {
  title: string;

  description: string;

  items: PillarRequirementItem[];
}

// ────────────────────────────────────────────
// LEGAL
// ────────────────────────────────────────────

export interface PillarLegalItem {
  element: string;

  owner: string;

  license: string;
}

export interface PillarLegal {
  title: string;

  description: string;

  items: PillarLegalItem[];
}

// ────────────────────────────────────────────
// CTA
// ────────────────────────────────────────────

export interface PillarCTA {
  title: string;

  description: string;

  button: string;
}

// ────────────────────────────────────────────
// TRANSLATABLE CONTENT
// ────────────────────────────────────────────

export interface PillarContent {
  title: string;

  category: string;

  description: string;

  imageAlt: string;

  hero?: PillarHero;

  techStack: PillarTechStack;

  serviceCatalog: PillarServiceCatalog;

  process: PillarProcess;

  scope: PillarScope;

  pricing: PillarPricing;

  guarantee: PillarGuarantee;

  requirements: PillarRequirements;

  legal: PillarLegal;

  cta: PillarCTA;
}

// ────────────────────────────────────────────
// CORE (NON-TRANSLATABLE)
// ────────────────────────────────────────────

export interface PillarCore {
  id: string;

  pillar: PillarSlug;

  slug: string;

  name: string;

  type: string;

  icon: ServiceIcon;

  image: string;

  images?: string[];

  technologies: string[];
}

// ────────────────────────────────────────────
// FINAL MODEL
// ────────────────────────────────────────────

export interface Pillar {
  core: PillarCore;

  translations: Record<
    LanguageCode,
    PillarContent
  >;

  href: string;
}