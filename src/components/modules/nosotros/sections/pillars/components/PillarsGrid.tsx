"use client";

import { motion, type Variants } from "framer-motion";

import Card from "@/components/ui/card";

import type {
  PillarContent,
} from "../types/pillars.types";

const leftCardVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const rightCardVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

interface PillarsGridProps {
  content: readonly PillarContent[];
}

export default function PillarsGrid({
  content,
}: PillarsGridProps) {
  return (
    <div
      className="
        grid
        grid-cols-1
        gap-6
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-5
      "
    >
      {content
        .filter((pillar) => pillar.active)
        .map((pillar, index) => {
          const Icon = pillar.icon;

          return (
            <motion.div
              key={pillar.title}
              className="h-full"
              variants={
                index % 2 === 0
                  ? leftCardVariants
                  : rightCardVariants
              }
              initial="hidden"
              whileInView="show"
              viewport={{ once: false }}
            >
              <Card
                variant="premium"
                className="flex h-full flex-col items-center p-8 text-center"
              >
                <div
                  className="
      mb-6
      flex
      size-20
      items-center
      justify-center
      rounded-xl
      bg-background/40
    "
                >
                  <Icon className="size-10 text-primary" />
                </div>

                <h3 className="mb-4">
                  {pillar.title}
                </h3>

                <p className="text-text-muted">
                  {pillar.description}
                </p>
              </Card>
            </motion.div>
          );
        })}
    </div>
  );
}