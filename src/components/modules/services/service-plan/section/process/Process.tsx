"use client";

import { motion } from "framer-motion";

import Section from "@/components/ui/section";
import Container from "@/components/ui/container";

import { useTranslation } from "@/hooks/use-translation";

import {
  serviceProcessContent,
} from "./content/process.content";

import ProcessStep
  from "./components/ProcessStep";

import type {
  ProcessProps,
} from "./types/process.types";

export default function Process({
  process,
}: ProcessProps) {
  const content =
    useTranslation(
      serviceProcessContent,
    );

  if (!process.length) {
    return null;
  }

  return (
    <Section
      id="service-process"
      variant="transparent"
      spacing="xl"
      className="py-10"
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
            flex
            flex-wrap
            justify-center
            gap-8
          "
        >
          {process.map((step, index) => (
            <motion.div
              key={`${step.title}-${index}`}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: "easeOut",
              }}
            >
              <ProcessStep
                step={step}
                index={index}
                isLast={index === process.length - 1}
              />
            </motion.div>
          ))}
        </div>

      </Container>
    </Section>
  );
}