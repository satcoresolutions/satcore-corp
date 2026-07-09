import type {
  Pillar,
  PillarRequirementItem,
} from "@/types/pillar.types";

export interface RequirementsProps {
  pillar: Pillar;
}

export interface RequirementsHeaderProps {
  title: string;

  description: string;
}

export interface RequirementsGridProps {
  items: PillarRequirementItem[];
}

export interface RequirementsCardProps {
  item: PillarRequirementItem;
}