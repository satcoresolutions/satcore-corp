"use client";

import {
  useMemo,
  useState,
} from "react";

import Container
  from "@/components/ui/container";

import Section
  from "@/components/ui/section";

import {
  useLanguage,
} from "@/hooks/use-language";

import {
  useTranslation,
} from "@/hooks/use-translation";

import PricingHeader from "./components/PricingHeader";

import PricingPreview
  from "./components/PricingPreview";

import PricingSelector
  from "./components/PricingSelector";

import {
  pricingContent,
} from "./content/pricing.content";

import type {
  PricingProps,
} from "./types/pricing.types";

export default function Pricing({
  plans,
  pillar,
  serviceSlug,
}: PricingProps) {
  const lang =
    useLanguage();

  const content =
    useTranslation(
      pricingContent,
    );

  const [
    activePlan,
    setActivePlan,
  ] = useState(
    plans[0] ?? null,
  );

  const activeContent =
    useMemo(
      () =>
        activePlan
          ? activePlan.translations[lang]
          : null,
      [
        activePlan,
        lang,
      ],
    );

  if (
    !plans.length ||
    !activePlan ||
    !activeContent
  ) {
    return null;
  }

  return (
    <Section
      id="service-pricing"
      variant="transparent"
      className="p-20"
    >
      <Container>
        <PricingHeader
          title={content.title}
          description={
            content.description
          }
        />

        <div
          className="
            mt-12
            grid
            gap-12
            lg:grid-cols-[260px_1fr]
            items-start
          "
        >
          <PricingSelector
            plans={plans}
            activePlan={
              activePlan
            }
            onSelect={
              setActivePlan
            }
          />

          <PricingPreview
            plan={
              activePlan
            }
            content={
              activeContent
            }
            href={`/services/${pillar}/${serviceSlug}/${activePlan.core.slug}`}
            buttonLabel={
              content.buttonLabel
            }
          />
        </div>
      </Container>
    </Section>
  );
}