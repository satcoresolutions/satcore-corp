import type {
  Pillar,
  PillarProcessStep,
} from "@/types/pillar.types";

export interface ProcessProps {
  pillar: Pillar;
}

export interface ProcessGridProps {
  steps: PillarProcessStep[];
}