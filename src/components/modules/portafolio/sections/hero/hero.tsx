"use client";

import Hero, {
  HeroBadge,
  HeroContent,
  HeroTitle,
} from "@/components/ui/hero";

import Container from "@/components/ui/container";
import Link from "next/link";
import Button from "@/components/ui/button";

import { useLanguage } from "@/hooks/use-language";
import { heroContent } from "./content/hero.content";

import type { ServicesHeroProps } from "./types/services-hero.types";

export default function ServicesHero({
  className = "",
}: ServicesHeroProps) {
  const lang = useLanguage();
  const content = heroContent[lang];

  return (
    <Hero
      variant="editorial"
      height="full"
      className={`${className} py-25`}
      backgroundImage="/images/hero/hero-portfolio.png"
      overlay
    >
      <Container>
        <HeroContent>
          {/* Badge */}
          <HeroBadge>
            <span className="inline-flex items-center gap-3 uppercase">
              <span className="h-px w-8 bg-primary" />
              {content.badge}
              <span className="h-px w-8 bg-primary" />
            </span>
          </HeroBadge>

          {/* Title */}
          <HeroTitle>{content.title}</HeroTitle>

          {/* Description */}
          <p className="max-w-xl text-secondary">
            {content.description}
          </p>

          <div
          className="
             mt-8
    flex
    flex-wrap
    justify-center
    gap-3
            "
        >
          {content.features.map((feature) => (
            <span
              key={feature}
               className="
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-accent/10
        bg-secondary/5
        px-4
        py-2
        text-secondary
        text-sm
        backdrop-blur-sm
      "
            >
              ✦ {feature}
            </span>
          ))}
        </div>

          {/* Actions */}
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Button variant="primary">
              <Link href={content.primaryAction.href}>
                {content.primaryAction.label}
              </Link>
            </Button>

            <Button variant="secondary">
              <Link href={content.secondaryAction.href}>
                {content.secondaryAction.label}
              </Link>
            </Button>
          </div>
        </HeroContent>
      </Container>
    </Hero>
  );
}