"use client";

import Section from "@/components/ui/section";
import Container from "@/components/ui/container";

import { useLanguage } from "@/hooks/use-language";

import ProcessHeader from "./components/ProcessHeader";
import ProcessGrid from "./components/ProcessGrid";

import type {
  ProcessProps,
} from "./types/process.types";

export default function Process({
  pillar,
}: ProcessProps) {
  const lang =
    useLanguage();

  const process =
    pillar.translations[lang].process;

  if (!process.steps.length) {
    return null;
  }

  return (
    <Section
      variant="default"
      className="py-20"
    >
      <Container>

        <ProcessHeader
          title={process.title}
          description={process.description}
        />

        <ProcessGrid
          steps={process.steps}
        />

      </Container>
    </Section>
  );
}