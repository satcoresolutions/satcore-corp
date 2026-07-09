import type {
  Pillar,
  PillarLegalItem,
} from "@/types/pillar.types";

export interface LegalProps {
  pillar: Pillar;
}

export interface LegalHeaderProps {
  title: string;

  description: string;
}

export interface LegalTableHeaderProps {
  element: string;

  owner: string;

  license: string;
}

export interface LegalGridProps {
  items: PillarLegalItem[];
}

export interface LegalCardProps {
  item: PillarLegalItem;
}