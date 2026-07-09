"use client";

import { motion } from "framer-motion";

import Section from "@/components/ui/section";
import Container from "@/components/ui/container";

import { useTranslation } from "@/hooks/use-translation";

import {
  serviceBenefitsContent,
} from "./content/service-benefits.content";

import BenefitsCard from "./components/BenefitsCard";

import type {
  BenefitsProps,
} from "./types/benefits.types";

export default function Benefits({
  benefits,
}: BenefitsProps) {
  const content =
    useTranslation(
      serviceBenefitsContent,
    );

  if (!benefits.length) {
    return null;
  }

  return (
    <Section
      id="service-benefits"
      variant="transparent"
      spacing="xl"
      className="p-10"
    >
      <Container>

        <div
          className="
            mx-auto
            mb-16
            max-w-3xl
            text-center
          "
        >
          <span
            className="
              text-sm
              font-medium
              text-primary
            "
          >
            {content.badge}
          </span>

          <h2
            className="
              mt-3
              text-3xl
              font-bold
              md:text-5xl
            "
          >
            {content.title}
          </h2>

          <p
            className="
              mt-4
              text-lg
              text-surface
            "
          >
            {content.description}
          </p>
        </div>

        <div
          className="
            mx-auto
            grid
            max-w-6xl
            gap-6

            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{
                opacity: 0,
                y: 32,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
                amount: 0.25,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: "easeOut",
              }}
            >
              <BenefitsCard
                benefit={benefit}
              />
            </motion.div>
          ))}
        </div>

      </Container>
    </Section>
  );
}