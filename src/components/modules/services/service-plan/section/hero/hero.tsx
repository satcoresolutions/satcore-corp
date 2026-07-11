"use client";

import Hero, {
  HeroBadge,
  HeroContent,
  HeroDescription,
  HeroTitle,
} from "@/components/ui/hero";

import Container
  from "@/components/ui/container";

import Card
  from "@/components/ui/card";

import { useTranslation } from "@/hooks/use-translation";

import type {
  ServicePlanCore,
  ServicePlanContent,
} from "@/types/plan.types";

import {
  servicePlanHeroContent,
} from "./content/hero.content";

interface ServicePlanHeroProps {
  core: ServicePlanCore;

  content: ServicePlanContent;
}

export default function ServicePlanHero({
  core,
  content,
}: ServicePlanHeroProps) {
  const labels =
    useTranslation(
      servicePlanHeroContent,
    );

  return (
    <Hero
      variant="editorial"
      height="lg"
      className={`py-25`}
      backgroundImage={
        core.heroImage
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

              {content.level}

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

          <div
            className="
              mt-12
              grid
              w-full
              max-w-3xl
              grid-cols-1
              gap-4
              sm:grid-cols-3
            "
          >
            <Card
              variant="glass"
              className="
                p-6
                text-center
              "
            >
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-secondary
                "
              >
                {labels.price}
              </p>

              <p
                className="
                  mt-2
                  text-xl
                  font-bold
                  text-text-secondary
                "
              >
                {core.price}
              </p>
            </Card>

            <Card
              variant="glass"
              className="
                p-6
                text-center
              "
            >
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-secondary
                "
              >
                {labels.delivery}
              </p>

              <p
                className="
                  mt-2
                  text-xl
                  font-bold
                  text-text-secondary
                "
              >
                {content.time}
              </p>
            </Card>

            <Card
              variant="glass"
              className="
                p-6
                text-center
              "
            >
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-secondary
                "
              >
                {labels.complexity}
              </p>

              <p
                className="
                  mt-2
                  text-xl
                  font-bold
                  text-text-secondary
                "
              >
                {core.complexity}
              </p>
            </Card>

          </div>

        </HeroContent>

      </Container>
    </Hero>
  );
}