"use client";

import Hero, {
  HeroBadge,
  HeroContent,
  HeroDescription,
  HeroTitle,
} from "@/components/ui/hero";

import Container from "@/components/ui/container";

import Card from "@/components/ui/card";

import type {
  ServiceHeroProps,
} from "./types/hero.types";

export default function ServiceHero({
  core,
  content,
}: ServiceHeroProps) {
  return (
    <Hero
      variant="editorial"
      height="lg"
      backgroundImage={core.heroImage}
      overlay
    >
      <Container>
        <HeroContent>

          {/* Badge */}
          <HeroBadge>
            <span
              className="
                inline-flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  h-px
                  w-8
                  bg-primary
                "
              />
              {core.pillar}
              <span
                className="
                  h-px
                  w-8
                  bg-primary
                "
              />
            </span>
          </HeroBadge>

          {/* Title */}
          <HeroTitle>
            {content.title}
          </HeroTitle>

          {/* Subtitle */}
          <HeroDescription>
            {content.subtitle}
          </HeroDescription>

          {/* Description */}
          <p
            className="
              mx-auto
              max-w-3xl
              text-center
              text-secondary
            "
          >
            {content.description}
          </p>
        </HeroContent>
      </Container>
    </Hero>
  );
}