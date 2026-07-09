"use client";

import Section from "@/components/ui/section";
import Container from "@/components/ui/container";

import PillarsHeader
  from "./components/PillarsHeader";

import PillarsGrid
  from "./components/PillarsGrid";

import {
  pillarsContent,
} from "./content/pillars.content";

import {
  useTranslation,
} from "@/hooks/use-translation";

export default function PillarsSection() {
  const content =
    useTranslation(
      pillarsContent,
    );

  return (
    <Section variant="surface">
      <Container>

        <PillarsHeader
          content={content.header}
        />

        <PillarsGrid
          content={content.pillars}
        />

      </Container>
    </Section>
  );
}