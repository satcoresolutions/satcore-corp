"use client";

import Section from "@/components/ui/section";
import Container from "@/components/ui/container";

import ValueProposalHeader
  from "./components/ValueProposalHeader";

import ValueProposalGrid
  from "./components/ValueProposalGrid";

import {
  valueProposalContent,
} from "./content/value-proposal.content";

import {
  useTranslation,
} from "@/hooks/use-translation";

export default function ValueProposalSection() {
  const content =
    useTranslation(
      valueProposalContent,
    );

  return (
    <Section variant="default">
      <Container>

        <ValueProposalHeader
          content={content.header}
        />

        <ValueProposalGrid
          content={content.values}
        />

      </Container>
    </Section>
  );
}