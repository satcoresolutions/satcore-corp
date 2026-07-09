"use client";

import { motion, type Variants } from "framer-motion";

import Card from "@/components/ui/card";

import type {
  ProblemContent,
} from "../types/problems.types";

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

interface ProblemsGridProps {
  content: readonly ProblemContent[];
}

export default function ProblemsGrid({
  content,
}: ProblemsGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {content.map((problem, index) => {
        const Icon = problem.icon;

        return (
          <motion.div
            key={problem.problem}
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
              variant="outlined"
              className="flex h-full flex-col items-center p-8 text-center"
            >
              <div
                className="
      mb-6
      flex
      size-20
      items-center
      justify-center
      rounded-2xl
      bg-primary/10
    "
              >
                <Icon className="size-10 text-primary" />
              </div>

              <h5 className="pb-4">
                {problem.problem}
              </h5>

              <div className="flex w-full flex-col gap-5">
                <div className="rounded-xl border border-border/50 bg-primary/40 p-4">
                  <h4 className="text-center font-semibold text-primary">
                    Solución
                  </h4>

                  <p className="text-text-primary">
                    {problem.solution}
                  </p>
                </div>

                <div className="rounded-xl border border-border/50 bg-primary/40 p-4">
                  <h4 className="mb-2 text-center font-semibold text-primary">
                    Impacto
                  </h4>

                  <p>
                    {problem.impact}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}