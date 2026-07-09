"use client";

import Section
  from "@/components/ui/section";

import Container
  from "@/components/ui/container";

import {
  useTranslation,
} from "@/hooks/use-translation";

import {
  useCasesContent,
} from "./content/use-cases.content";

import UseCaseGrid
  from "./components/UseCaseGrid";

import type {
  UseCasesProps,
} from "./types/use-cases.types";

export default function UseCases({
  useCases,
}: UseCasesProps) {
  const labels =
    useTranslation(
      useCasesContent,
    );

  if (
    useCases.useCases.length === 0
  ) {
    return null;
  }

  return (
    <Section
      variant="surface"
      id="service-use-cases"
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
            {useCases.title}
          </h2>

          <p
            className="
              mt-5
              text-lg
              text-surface
            "
          >
            {useCases.description}
          </p>
        </div>

        <UseCaseGrid
          useCases={
            useCases.useCases
          }
        />

      </Container>
    </Section>
  );
}