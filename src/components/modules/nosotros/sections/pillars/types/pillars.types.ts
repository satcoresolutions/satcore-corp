import type { LucideIcon } from "lucide-react";

export interface PillarsHeaderContent {
  title: string;
  description: string;
}

export interface PillarContent {
  title: string;
  description: string;
  icon: LucideIcon;
  active: boolean;
}

export interface PillarsContent {
  header: PillarsHeaderContent;
  pillars: PillarContent[];
}