"use client";

import Section from "@/components/ui/section";
import Container from "@/components/ui/container";

import ValuesHeader from "./components/ValuesHeader";
import ValuesGrid from "./components/ValuesGrid";

import { valuesContent } from "./content/values.content";

import {
  useTranslation,
} from "@/hooks/use-translation";

export default function ValuesSection() {
  const content =
    useTranslation(
      valuesContent,
    );

  return (
    <Section variant="default">
      <Container>

        <ValuesHeader
          content={content.header}
        />

        <ValuesGrid
          content={content.values}
        />

      </Container>
    </Section>
  );
}