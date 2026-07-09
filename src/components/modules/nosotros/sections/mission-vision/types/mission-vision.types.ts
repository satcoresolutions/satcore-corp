import type { LucideIcon } from "lucide-react";

export interface MissionVisionHeaderContent {
  title: string;
  description: string;
}

export interface MissionVisionCardContent {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface MissionVisionContent {
  header: MissionVisionHeaderContent;
  cards: MissionVisionCardContent[];
}