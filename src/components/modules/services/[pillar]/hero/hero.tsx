"use client";

import Hero, {
  HeroBadge,
  HeroContent,
  HeroDescription,
  HeroTitle,
} from "@/components/ui/hero";

import Container
  from "@/components/ui/container";

import { useLanguage }
  from "@/hooks/use-language";

import type {
  Pillar,
} from "@/types/pillar.types";

interface SoftwareHeroProps {
  pillar: Pillar;
}

export default function SoftwareHero({
  pillar,
}: SoftwareHeroProps) {
  const lang =
    useLanguage();

  const content =
    pillar.translations[lang];

  return (
    <Hero
      variant="editorial"
      height="lg"
      backgroundImage={
        pillar.core.image
      }
      overlay
    >
      <Container>

        <HeroContent>

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

              {content.hero?.badge}

              <span
                className="
                  h-px
                  w-8
                  bg-primary
                "
              />
            </span>
          </HeroBadge>

          <HeroTitle>
            {content.title}
          </HeroTitle>

          <HeroDescription>
            {content.description}
          </HeroDescription>

        </HeroContent>

      </Container>
    </Hero>
  );
}