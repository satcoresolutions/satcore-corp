"use client";

import Section from "@/components/ui/section";
import Container from "@/components/ui/container";

import ProblemsHeader
  from "./components/ProblemsHeader";

import ProblemsGrid
  from "./components/ProblemsGrid";

import {
  problemsContent,
} from "./content/problems.content";

import {
  useTranslation,
} from "@/hooks/use-translation";

export default function ProblemsSection() {
  const content =
    useTranslation(
      problemsContent,
    );

  return (
    <Section variant="glass">
      <Container>

        <ProblemsHeader
          content={content.header}
        />

        <ProblemsGrid
          content={content.problems}
        />

      </Container>
    </Section>
  );
}