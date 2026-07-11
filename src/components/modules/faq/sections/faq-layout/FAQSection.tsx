"use client";

import {
  useTranslation,
} from "@/hooks/use-translation";

import Section from "@/components/ui/section";

import FAQLayout
  from "./components/FAQLayout";

import {
  faqContent,
} from "./content";

export default function FAQSection() {
  const content =
    useTranslation(
      faqContent,
    );

  return (
    <Section id="faq" variant="default">
      <FAQLayout
        content={content}
      />
    </Section>
  );
}