import type {
  Pillar,
  PillarPricingPlan,
} from "@/types/pillar.types";

export interface PricingProps {
  pillar: Pillar;
}

export interface PricingHeaderProps {
  title: string;
  description: string;
}

export interface PricingCardProps {
  plan: PillarPricingPlan;
}

export interface PricingGridProps {
  plans: PillarPricingPlan[];
}