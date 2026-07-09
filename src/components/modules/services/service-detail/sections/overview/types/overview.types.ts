import type {
  ServiceOverview,
} from "@/types/service-detail.types";

export interface OverviewProps {
  overview: ServiceOverview;
}

export interface OverviewContentProps {
  title: string;

  description: string;
}

export interface OverviewImageProps {
  image: string;

  alt: string;
}

export interface OverviewHighlightsProps {
  title: string;

  items: string[];
}