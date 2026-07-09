import type {
  LucideIcon,
} from "lucide-react";

export interface WhySatCoreItem {
  title: string;
  icon: LucideIcon;
}

export interface WhySatCoreHeaderContent {
  title: string;
}

export interface WhySatCoreContent {
  header: WhySatCoreHeaderContent;
  items: WhySatCoreItem[];
}

export interface WhySatCoreHeaderProps {
  content: WhySatCoreHeaderContent;
}

export interface WhySatCoreListProps {
  items: WhySatCoreItem[];
  animationKey: React.Key;
}

export interface WhySatCoreItemProps {
  item: WhySatCoreItem;
}