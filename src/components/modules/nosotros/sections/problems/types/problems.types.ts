import type { LucideIcon } from "lucide-react";

export interface ProblemsHeaderContent {
  title: string;
  description: string;
}

export interface ProblemContent {
  problem: string;
  solution: string;
  impact: string;
  icon: LucideIcon;
}

export interface ProblemsContent {
  header: ProblemsHeaderContent;
  problems: ProblemContent[];
}