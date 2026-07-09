import type {
  ServiceDetail,
} from "@/types/service-detail.types";

export interface ServiceCatalogProps {
  title: string;

  description: string;

  services: ServiceDetail[];
}

export interface ServiceCatalogHeaderProps {
  title: string;

  description: string;
}

export interface ServiceCatalogGridProps {
  services: ServiceDetail[];
}

export interface ServiceCatalogCardProps {
  service: ServiceDetail;
}