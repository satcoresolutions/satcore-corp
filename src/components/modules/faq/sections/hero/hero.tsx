"use client";

import Hero,
{
  HeroContent,
  HeroTitle,
  HeroDescription,
  HeroBadge,
} from "@/components/ui/hero";

import {
  useLanguage,
} from "@/hooks/use-language";

import {
  heroContent,
} from "./content/hero.content";

export default function HeroSection() {
  const lang = useLanguage();

  const content =
    heroContent[lang] ??
    heroContent.en;

  return (
    <Hero
      variant="editorial"
      height="full"
      className={`py-25`}
      backgroundImage={
        "/images/hero/hero-legal.png"
      }
      overlay
    >

      <HeroContent>

        {/* Badge */}
        <HeroBadge>
          <span className="inline-flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            {content.badge}
            <span className="h-px w-8 bg-primary" />
          </span>
        </HeroBadge>
        <HeroTitle>
          {content.title}
        </HeroTitle>

        <HeroDescription>
          {content.description}
        </HeroDescription>

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
      </HeroContent>

    </Hero>
  );
}