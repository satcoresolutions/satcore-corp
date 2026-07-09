"use client";

import Section
  from "@/components/ui/section";

import {
  useTranslation,
} from "@/hooks/use-translation";

import {
  useLanguage,
} from "@/hooks/use-language";

import {
  useCasesContent,
} from "./content/use-cases.content";

import UseCasesHeader
  from "./components/UseCasesHeader";

import UseCasesGrid
  from "./components/UseCasesGrid";


export default function UseCases() {
  const content =
    useTranslation(
      useCasesContent,
    );

  const language =
    useLanguage();


  return (
    <Section
      variant="glass"
    >

      <div
        className="
          mx-auto
          max-w-6xl
          px-6
        "
      >

        <UseCasesHeader
          content={
            content.header
          }
        />


        <UseCasesGrid
          animationKey={
            language
          }
          items={
            content.items
          }
        />

      </div>

    </Section>
  );
}