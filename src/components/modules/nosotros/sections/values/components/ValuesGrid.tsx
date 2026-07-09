"use client";

import { motion, type Variants } from "framer-motion";

import Card from "@/components/ui/card";

import type { ValueContent } from "../types/values.types";

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

interface ValuesGridProps {
  content: readonly ValueContent[];
}

export default function ValuesGrid({
  content,
}: ValuesGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      {content.map((value, index) => {
        const Icon = value.icon;

        return (
          <motion.div
            key={value.title}
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
              variant="featured"
              className="h-full p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-full bg-background/40">
                  <Icon className="size-8 text-surface" />
                </div>

                <h3>{value.title}</h3>
              </div>

              <p className="text-text-muted">
                {value.subtitle}
              </p>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}