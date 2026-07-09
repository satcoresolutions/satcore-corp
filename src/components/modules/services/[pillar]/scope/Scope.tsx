"use client";

import Section from "@/components/ui/section";
import Container from "@/components/ui/container";

import { useLanguage } from "@/hooks/use-language";

import ScopeHeader from "./components/ScopeHeader";
import ScopeGrid from "./components/ScopeGrid";

import type {
  ScopeProps,
} from "./types/scope.types";

export default function Scope({
  pillar,
}: ScopeProps) {
  const lang =
    useLanguage();

  const scope =
    pillar.translations[lang].scope;

  if (!scope.cards.length) {
    return null;
  }

  return (
    <Section
      variant="glass"
      spacing="xl"
      className="py-20"
    >
      <Container>

        <ScopeHeader
          title={scope.title}
          description={scope.description}
        />

        <ScopeGrid
          cards={scope.cards}
        />

      </Container>
    </Section>
  );
}