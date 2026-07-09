"use client";

import Section from "@/components/ui/section";
import Container from "@/components/ui/container";

import {
  useTranslation,
} from "@/hooks/use-translation";

import {
  benefitsContent,
} from "./content/benefits.content";

import BenefitsHeader
  from "./components/BenefitsHeader";

import BenefitsGrid
  from "./components/BenefitsGrid";

export default function BenefitsSection() {
  const content =
    useTranslation(
      benefitsContent,
    );

  return (
    <Section
      variant="default"
      className="
        py-10
      "
    >
      <Container>

        <BenefitsHeader
          title={content.title}
          description={content.description}
        />

        <BenefitsGrid
          items={content.items}
        />

      </Container>
    </Section>
  );
}