"use client";

import Section from "@/components/ui/section";
import Container from "@/components/ui/container";

import TermsHeader
  from "./components/TermsHeader";

import TermsGrid
  from "./components/TermsGrid";

import {
  termsContent,
} from "./content/terms.content";

import {
  useTranslation,
} from "@/hooks/use-translation";

export default function TermsSection() {
  const content =
    useTranslation(
      termsContent,
    );

  return (
    <Section variant="surface">
      <Container>

        <TermsHeader
          content={content.header}
        />

        <TermsGrid
          content={content.terms}
        />

      </Container>
    </Section>
  );
}