export interface PrivacyItem {
  title: string;
  description: string;
}

export interface PrivacyHeaderContent {
  title: string;
  description: string;
}

export interface PrivacyContent {
  header: PrivacyHeaderContent;
  items: PrivacyItem[];
}

export interface PrivacyHeaderProps {
  content: PrivacyHeaderContent;
}

export interface PrivacyGridProps {
  items: PrivacyItem[];
  animationKey: React.Key;
}

export interface PrivacyCardProps {
  item: PrivacyItem;
}