"use client";

import Hero, {
  HeroBadge,
  HeroContent,
  HeroDescription,
  HeroTitle,
} from "@/components/ui/hero";

import Container from "@/components/ui/container";

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
      className={`py-25` }
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
                uppercase
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