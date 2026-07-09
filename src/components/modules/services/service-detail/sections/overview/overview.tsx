"use client";

import Section from "@/components/ui/section";
import Container from "@/components/ui/container";

import {
  useTranslation,
} from "@/hooks/use-translation";

import {
  overviewContent,
} from "./content/overview.content";

import OverviewContent
  from "./components/OverviewContent";

import OverviewImage
  from "./components/OverviewImage";

import OverviewHighlights
  from "./components/OverviewHighlights";

import type {
  OverviewProps,
} from "./types/overview.types";

export default function Overview({
  overview,
}: OverviewProps) {
  const labels =
    useTranslation(
      overviewContent,
    );

  return (
    <Section
      id="service-overview"
      variant="glass"
      className="p-10"
    >
      <Container>

        <div
          className="
            grid
            items-center
            gap-16

            lg:grid-cols-2
          "
        >
          <div>

            <span
              className="
                text-sm
                font-medium
                text-primary
              "
            >
              {labels.badge}
            </span>

            <OverviewContent
              title={
                overview.title
              }
              description={
                overview.description
              }
            />

            <OverviewHighlights
              title={
                labels.highlightsTitle
              }
              items={
                overview.useCases
              }
            />

          </div>

          <OverviewImage
            image={
              overview.image
            }
            alt={
              overview.imageAlt
            }
          />

        </div>

      </Container>
    </Section>
  );
}