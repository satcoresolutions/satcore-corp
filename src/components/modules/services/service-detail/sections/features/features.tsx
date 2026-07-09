"use client";

import Section
  from "@/components/ui/section";

import Container
  from "@/components/ui/container";

import {
  useTranslation,
} from "@/hooks/use-translation";

import {
  featuresContent,
} from "./content/features.content";

import FeatureGrid
  from "./components/FeatureGrid";

import type {
  FeaturesProps,
} from "./types/features.types";

export default function Features({
  features,
}: FeaturesProps) {
  const labels =
    useTranslation(
      featuresContent,
    );

  if (
    features.features.length === 0
  ) {
    return null;
  }

  return (
    <Section
      variant="glass"
      id="service-features"
      className="p-10"
    >
      <Container>

        <div
          className="
            mx-auto
            mb-16
            max-w-3xl
            text-center
          "
        >
          <span
            className="
              text-sm
              font-medium
              text-primary
            "
          >
            {labels.badge}
          </span>

          <h2
            className="
              mt-3
              text-4xl
              font-bold
            "
          >
            {features.title}
          </h2>

          <p
            className="
              mt-5
              text-lg
              text-surface
            "
          >
            {features.description}
          </p>
        </div>

        <FeatureGrid
          features={
            features.features
          }
        />

      </Container>
    </Section>
  );
}