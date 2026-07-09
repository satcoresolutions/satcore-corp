import type { LucideIcon } from "lucide-react";

export interface ValueProposalHeaderContent {
  title: string;
  description: string;
}

export interface ValueProposalContent {
  title: string;
  content: string;
  icon: LucideIcon;
}

export interface ValueProposalsContent {
  header: ValueProposalHeaderContent;
  values: ValueProposalContent[];
}