import type { LucideIcon } from "lucide-react";

export interface ValuesHeaderContent {
  title: string;
  description: string;
}

export interface ValueContent {
  title: string;
  subtitle: string;
  icon: LucideIcon;
}

export interface ValuesContent {
  header: ValuesHeaderContent;
  values: ValueContent[];
}