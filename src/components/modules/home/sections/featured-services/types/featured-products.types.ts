export interface FeaturedProductsContent {
  badge: string;

  title: string;

  description: string;

  button: string;
}

export interface FeaturedProductsContentProps {
  content: FeaturedProductsContent;
}

export interface FeaturedProductsGridProps {
  buttonLabel: string;
}