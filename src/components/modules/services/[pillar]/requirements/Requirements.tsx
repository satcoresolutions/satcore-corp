"use client";

import Section from "@/components/ui/section";
import Container from "@/components/ui/container";

import {
  useLanguage,
} from "@/hooks/use-language";

import RequirementsHeader
  from "./components/RequirementsHeader";

import RequirementsGrid
  from "./components/RequirementsGrid";

import type {
  RequirementsProps,
} from "./types/requirements.types";

export default function Requirements({
  pillar,
}: RequirementsProps) {
  const lang =
    useLanguage();

  const requirements =
    pillar.translations[lang].requirements;

  if (!requirements.items.length) {
    return null;
  }

  return (
    <Section
      variant="glass"
      className="
        py-10
      "
    >
      <Container>

        <RequirementsHeader
          title={
            requirements.title
          }
          description={
            requirements.description
          }
        />

        <RequirementsGrid
          items={
            requirements.items
          }
        />

      </Container>
    </Section>
  );
}