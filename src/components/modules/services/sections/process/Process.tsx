"use client";

import Section from "@/components/ui/section";
import Container from "@/components/ui/container";

import {
  useTranslation,
} from "@/hooks/use-translation";

import {
  processContent,
} from "./content/process.content";

import ProcessHeader
  from "./components/ProcessHeader";

import ProcessGrid
  from "./components/ProcessGrid";

export default function ProcessSection() {
  const content =
    useTranslation(
      processContent,
    );

  return (
    <Section
      className="
        py-10
      "
    >
      <Container>

        <ProcessHeader
          title={content.title}
          description={
            content.description
          }
        />

        <ProcessGrid
          steps={content.steps}
        />

      </Container>
    </Section>
  );
}