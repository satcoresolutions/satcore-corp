"use client";

import Section from "@/components/ui/section";
import Container from "@/components/ui/container";

import { useLanguage } from "@/hooks/use-language";

import PricingHeader from "./components/PricingHeader";
import PricingGrid from "./components/PricingGrid";

import type {
  PricingProps,
} from "./types/pricing.types";

export default function SoftwarePricing({
  pillar,
}: PricingProps) {
  const lang =
    useLanguage();

  const pricing =
    pillar.translations[lang].pricing;

  if (!pricing.plans.length) {
    return null;
  }

  return (
    <Section
      variant="default"
      className="
        py-10
      "
    >
      <Container>

        <PricingHeader
          title={pricing.title}
          description={pricing.description}
        />

        <PricingGrid
          plans={pricing.plans}
        />

      </Container>
    </Section>
  );
}