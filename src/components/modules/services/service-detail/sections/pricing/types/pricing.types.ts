import type {
  ServicePlan,
  ServicePlanContent,
} from "@/types/plan.types";

export interface PricingProps {
  plans: ServicePlan[];

  pillar: string;

  serviceSlug: string;

  title: string;

  description: string;

  buttonLabel: string;
}

export interface PricingSelectorProps {
  plans: ServicePlan[];

  activePlan: ServicePlan;

  onSelect: (plan: ServicePlan) => void;
}

export interface PricingPreviewProps {
  plan: ServicePlan;

  content: ServicePlanContent;

  href: string;

  buttonLabel: string;
}

export interface PricingCardProps {
  plan: ServicePlan;

  content: ServicePlanContent;

  href: string;

  buttonLabel: string;
}

export interface PricingInformationProps {
  name: string;

  description: string;
}

export interface PricingSelectorItemProps {
  content: ServicePlanContent;

  active: boolean;

  onClick: () => void;
}

export interface PricingButtonProps {
  href: string;

  label: string;
}