"use client";

import Section
  from "@/components/ui/section";

import Container
  from "@/components/ui/container";

import TechStackHeader
  from "./components/TechStackHeader";

import TechStackMarquee
  from "./components/TechStackMarquee";

import type {
  TechStackProps,
} from "./types/tech-stack.types";

export default function TechStack({
  title,
  description,
  technologies,
}: TechStackProps) {
  if (!technologies.length) {
    return null;
  }

  return (
    <Section
      variant="default"
      spacing="xl"
      className="py-20"
    >
      <Container>

        <TechStackHeader
          title={title}
          description={description}
        />

        <TechStackMarquee
          technologies={technologies}
        />

      </Container>
    </Section>
  );
}