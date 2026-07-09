export interface FeatureItem {
  title: string;

  description: string;
}

export interface FeaturesData {
  title: string;

  description: string;

  features: FeatureItem[];
}

export interface FeaturesProps {
  features: FeaturesData;
}

export interface FeatureGridProps {
  features: FeatureItem[];
}

export interface FeatureCardProps {
  feature: FeatureItem;
}