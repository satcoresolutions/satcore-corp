import type {
  Pillar,
  PillarGuaranteeCard,
} from "@/types/pillar.types";

export interface GuaranteeProps {
  pillar: Pillar;
}

export interface GuaranteeHeaderProps {
  title: string;

  description: string;
}

export interface GuaranteeGridProps {
  cards: PillarGuaranteeCard[];
}

export interface GuaranteeCardProps {
  card: PillarGuaranteeCard;
}