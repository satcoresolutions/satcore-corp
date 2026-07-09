import type {
  LucideIcon,
} from "lucide-react";

export interface Benefit {
  icon: LucideIcon;

  title: string;

  description: string;
}

export interface BenefitsContent {
  title: string;

  description: string;

  items: Benefit[];
}

export interface BenefitsGridProps {
  items: Benefit[];
}

export interface BenefitCardProps {
  benefit: Benefit;
}

export interface BenefitsHeaderProps {
  title: string;

  description: string;
}