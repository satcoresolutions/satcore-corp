import type { LucideIcon } from "lucide-react";

export interface HistoryContent {
  title: string;

  paragraphs: string[];

  highlight: {
    title: string;
    description: string;
    icon: LucideIcon;
  };
}