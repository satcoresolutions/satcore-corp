import type { LucideIcon } from "lucide-react";

export interface TermsHeaderContent {
  title: string;
  description: string;
}

export interface TermContent {
  title: string;
  content: string;
  icon: LucideIcon;
}

export interface TermsContent {
  header: TermsHeaderContent;
  terms: TermContent[];
}