"use client";

import { motion } from "framer-motion";

import Section from "@/components/ui/section";
import Container from "@/components/ui/container";
import Card from "@/components/ui/card";

import CTABackground
  from "./components/CTABackground";

import CTAActions
  from "./components/CTAActions";

import {
  useLanguage,
} from "@/hooks/use-language";

import {
  useTranslation,
} from "@/hooks/use-translation";

import {
  ctaContent,
} from "@/i18n/cta.content";

import {
  ctaContentPillar,
} from "./content/cta.content";

const cardMotion = {
  initial: {
    opacity: 0,
    y: 40,
    scale: 0.98,
  },

  whileInView: {
    opacity: 1,
    y: 0,
    scale: 1,
  },

  viewport: {
    once: false,
    amount: 0.3,
  },

  transition: {
    duration: 0.7,
    ease: "easeOut",
  },

  whileHover: {
    y: -4,
    transition: {
      duration: 0.25,
    },
  },
} as const;

export default function ContactCTA() {
  const lang =
    useLanguage();

  const content =
    ctaContentPillar[lang] ??
    ctaContentPillar.en;

  const actionsContent =
    useTranslation(ctaContent);

  return (
    <Section
      id="contact-cta"
      className="py-16"
    >
      <Container>

        <motion.div
          {...cardMotion}
        >
          <Card
            variant="featured"
            className="
              relative
              isolate
              overflow-hidden

              w-full
              min-h-140

              border
              border-border/40

              shadow-2xl
              shadow-black/10
            "
          >
            <CTABackground />

            <div
              className="
                relative
                z-10

                flex
                min-h-140
                items-center
                justify-center

                px-8
                py-20

                md:px-16
                lg:px-24
              "
            >
              <div
                className="
                  mx-auto
                  flex
                  w-full
                  max-w-5xl
                  flex-col
                  items-center

                  text-center
                "
              >
                {/* Badge */}

                <div
                  className="
                    inline-flex
                    items-center
                    gap-3

                    rounded-full

                    border
                    border-primary/20

                    bg-primary/10

                    px-5
                    py-2

                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.25em]

                    text-primary
                  "
                >
                  <span
                    className="
                      h-2
                      w-2

                      rounded-full

                      bg-primary
                    "
                  />

                  {content.badge}
                </div>

                {/* Title */}

                <h2
                  className="
                    mt-8

                    max-w-4xl

                    text-4xl
                    font-bold
                    leading-tight

                    md:text-6xl
                  "
                >
                  {content.title}
                </h2>

                {/* Description */}

                <p
                  className="
                    mt-8

                    max-w-3xl

                    text-lg
                    leading-8

                    text-text-primary

                    md:text-xl
                  "
                >
                  {content.description}
                </p>

                {/* Microcopy */}

                <p
                  className="
                    pt-6

                    max-w-2xl

                    text-sm

                    text-secondary
                  "
                >
                  {content.microcopy}
                </p>

                {/* Actions */}

                <div
                  className="
                    mt-12

                    flex
                    justify-center
                  "
                >
                  <CTAActions
                    primaryLabel={
                      actionsContent.service.primaryAction.label
                    }
                    secondaryLabel={
                      actionsContent.service.secondaryAction.label
                    }
                    whatsappTemplate={
                      actionsContent.service.whatsapp.message
                    }
                  />
                </div>

                {/* Trust */}

                <div
                  className="
                    mt-14

                    flex
                    flex-wrap
                    justify-center
                    gap-4
                  "
                >
                  {content.trustItems.map(
                    (item) => (
                      <span
                        key={item}
                        className="
                          rounded-full

                          border
                          border-white/10

                          bg-quaternary/60

                          px-5
                          py-2.5

                          text-sm
                          font-medium

                          text-secondary

                          backdrop-blur-md
                        "
                      >
                        {item}
                      </span>
                    ),
                  )}
                </div>

              </div>
            </div>

          </Card>
        </motion.div>

      </Container>
    </Section>
  );
}