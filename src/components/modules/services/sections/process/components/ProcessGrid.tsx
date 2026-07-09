"use client";

import {
  motion,
} from "framer-motion";

import ProcessCard
  from "./ProcessCard";

import type {
  ProcessProps,
} from "../types/process.types";

export default function ProcessGrid({
  steps,
}: ProcessProps) {
  return (
    <div
      className="
        mt-16
        grid
        gap-6

        sm:grid-cols-2
        lg:grid-cols-5
      "
    >
      {steps.map(
        (step, index) => (
          <motion.div
            key={`${step.title}-${index}`}
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.12,
              ease: "easeOut",
            }}
            whileHover={{
              y: -5,
              scale: 1.03,
            }}
          >
            <ProcessCard
              step={step}
              index={index}
            />
          </motion.div>
        ),
      )}
    </div>
  );
}