"use client";

import Section from "@/components/ui/section";
import Container from "@/components/ui/container";

import { useLanguage } from "@/hooks/use-language";

import LegalHeader from "./components/LegalHeader";
import LegalTableHeader from "./components/LegalTableHeader";
import LegalGrid from "./components/LegalGrid";

import type {
  LegalProps,
} from "./types/legal.types";

export default function Legal({
  pillar,
}: LegalProps) {
  const lang =
    useLanguage();

  const legal =
    pillar.translations[lang].legal;

  if (!legal.items.length) {
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

        <LegalHeader
          title={legal.title}
          description={legal.description}
        />

        <LegalTableHeader
          element="Elemento"
          owner="Propiedad"
          license="Licencia"
        />

        <LegalGrid
          items={legal.items}
        />

      </Container>
    </Section>
  );
}