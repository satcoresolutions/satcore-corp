"use client";

import Section
  from "@/components/ui/section";

import Container
  from "@/components/ui/container";

import ServiceCatalogHeader
  from "./components/ServiceCatalogHeader";

import ServiceCatalogGrid
  from "./components/ServiceCatalogGrid";

import type {
  ServiceCatalogProps,
} from "./types/service-catalog.types";

export default function ServiceCatalog({
  title,
  description,
  services,
}: ServiceCatalogProps) {
  if (!services.length) {
    return null;
  }

  return (
    <Section
      id="services"
      variant="default"
      spacing="xl"
    >
      <Container>

        <ServiceCatalogHeader
          title={title}
          description={description}
        />

        <ServiceCatalogGrid
          services={services}
        />

      </Container>
    </Section>
  );
}