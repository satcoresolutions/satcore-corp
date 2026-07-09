"use client";

import Section
  from "@/components/ui/section";

import Container
  from "@/components/ui/container";

import {
  useTranslation,
} from "@/hooks/use-translation";

import {
  useLanguage,
} from "@/hooks/use-language";

import {
  testimonialsContent,
} from "./content/testimonials.content";

import TestimonialsHeader
  from "./components/TestimonialsHeader";

import TestimonialsList
  from "./components/TestimonialsList";

export default function Testimonials() {
  const content =
    useTranslation(
      testimonialsContent,
    );

  const language =
    useLanguage();

  return (
    <Section
      variant="default"
    >
      <Container>

        <TestimonialsHeader
          content={
            content.header
          }
        />

        <TestimonialsList
          animationKey={
            language
          }
          items={
            content.items
          }
        />

      </Container>
    </Section>
  );
}