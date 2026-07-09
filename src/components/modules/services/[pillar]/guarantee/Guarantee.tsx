"use client";

import Section
  from "@/components/ui/section";

import Container
  from "@/components/ui/container";

import {
  useLanguage,
} from "@/hooks/use-language";

import GuaranteeHeader
  from "./components/GuaranteeHeader";

import GuaranteeGrid
  from "./components/GuaranteeGrid";

import type {
  GuaranteeProps,
} from "./types/guarantee.types";

export default function Guarantee({
  pillar,
}: GuaranteeProps) {
  const lang =
    useLanguage();

  const guarantee =
    pillar.translations[lang].guarantee;

  if (!guarantee.cards.length) {
    return null;
  }

  return (
    <Section
      variant="surface"
      className="
        py-10
      "
    >
      <Container>

        <GuaranteeHeader
          title={
            guarantee.title
          }
          description={
            guarantee.description
          }
        />

        <GuaranteeGrid
          cards={
            guarantee.cards
          }
        />

      </Container>
    </Section>
  );
}