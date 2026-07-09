"use client";

import {
  motion,
  type Variants,
} from "framer-motion";

import Card from "@/components/ui/card";

import type {
  ProcessGridProps,
} from "../types/process.types";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ProcessGrid({
  steps,
}: ProcessGridProps) {
  return (
    <motion.div
      className="
        grid
        gap-6
        md:grid-cols-2
        xl:grid-cols-5
      "
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: false,
        margin: "-80px",
      }}
    >
      {steps.map((step, index) => {
        const Icon = step.icon;

        return (
          <motion.div
            key={index}
            variants={item}
            whileHover={{
              y: -6,
              scale: 1.03,
            }}
          >
            <Card
              variant="premium"
              className="p-6 h-full text-center"
            >
              <div className="flex justify-center mb-4">
                <Icon className="h-10 w-10 text-accent" />
              </div>

              <h3 className="text-lg font-semibold mb-3">
                {index + 1}. {step.title}
              </h3>

              <p className="text-sm text-text-muted">
                {step.subtitle}
              </p>
            </Card>
          </motion.div>
        );
      })}
    </motion.div>
  );
}