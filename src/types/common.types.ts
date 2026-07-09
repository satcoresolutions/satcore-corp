import type {
  LucideIcon,
} from "lucide-react";

import {
  serviceIcons,
} from "@/data/stack/service-icons";

export type LanguageCode =
  | "es"
  | "en"
  | "pt";

export type PillarSlug =
  | "software"
  | "artificial-intelligence"
  | "cybersecurity"
  | "branding"
  | "education";

export type ServiceIcon =
  keyof typeof serviceIcons;

export type PricingType =
  | "fixed"
  | "project"
  | "monthly"
  | "custom"
  | "per_person"
  | "hourly"
  | "subscription"
  | "one-time"
  | "tiered"
  | "usage-based"
  | "freemium"
  | "pay-as-you-go"
  | "license"
  | "commission"
  | "ad-supported"
  | "donation"
  | "other";

export type AutomationLevel =
  | "low"
  | "medium"
  | "high"
  | "enterprise";

export type GuaranteeIcon =
  | "shield-check"
  | "wrench";

export type ProcessIcon = LucideIcon;