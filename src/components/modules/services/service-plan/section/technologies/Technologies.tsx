"use client";

import Section
  from "@/components/ui/section";

import Container
  from "@/components/ui/container";

import {
  useTranslation,
} from "@/hooks/use-translation";

import {
  technologiesContent,
} from "./content/technologies.content";

import TechnologyHeader
  from "./components/TechnologyHeader";

import TechnologyMarquee
  from "./components/TechnologyMarquee";

import TechnologyDescription
  from "./components/TechnologyDescription";

import type {
  TechnologiesProps,
} from "./types/technologies.types";

export default function Technologies({
  technologies,
}: TechnologiesProps) {
  const content =
    useTranslation(
      technologiesContent,
    );

  if (!technologies.length) {
    return null;
  }

  return (
    <Section
      id="service-technologies"
      variant="transparent"
      spacing="xl"
      className="py-10"
    >
      <Container>

        <TechnologyHeader
          badge={content.badge}
          title={content.title}
          description={content.description}
        />

        <TechnologyMarquee
          technologies={technologies}
        />

        <TechnologyDescription
          footer={content.footer}
        />

      </Container>
    </Section>
  );
}