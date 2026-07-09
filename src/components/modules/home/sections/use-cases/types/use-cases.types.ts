import type {
  LucideIcon,
} from "lucide-react";

export interface UseCaseItem {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  active: boolean;
}

export interface UseCasesHeaderContent {
  title: string;
}

export interface UseCasesContent {
  header: UseCasesHeaderContent;
  items: UseCaseItem[];
}

export interface UseCasesHeaderProps {
  content: UseCasesHeaderContent;
}

export interface UseCasesGridProps {
  items: UseCaseItem[];
  animationKey: React.Key;
}

export interface UseCaseCardProps {
  item: UseCaseItem;
}