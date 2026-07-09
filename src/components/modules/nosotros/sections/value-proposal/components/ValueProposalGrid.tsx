"use client";

import { motion, type Variants } from "framer-motion";

import Card from "@/components/ui/card";

import type {
  ValueProposalContent,
} from "../types/value-proposal.types";

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

interface ValueProposalGridProps {
  readonly content: readonly ValueProposalContent[];
}

export default function ValueProposalGrid({
  content,
}: ValueProposalGridProps) {
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
      rounded-full
      bg-surface-secondary/40
    "
              >
                <Icon className="size-10 text-secondary" />
              </div>

              <h3 className="mb-4">
                {value.title}
              </h3>

              <p className="text-text-muted">
                {value.content}
              </p>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}