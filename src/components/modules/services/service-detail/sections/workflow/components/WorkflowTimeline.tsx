"use client";

import { motion } from "framer-motion";

import WorkflowStep from "./WorkflowStep";

import type { WorkflowTimelineProps } from "../types/workflow.types";

export default function WorkflowTimeline({
  steps,
}: WorkflowTimelineProps) {
  return (
    <div className="mx-auto max-w-6xl">
      <div
  className="
    grid
    gap-6

    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    xl:grid-cols-4
  "
>
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{
              opacity: 0,
              x: -60,
              scale: 0.98,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: false,
              amount: 0.25,
            }}
            transition={{
              duration: 0.55,
              delay: index * 0.12,
              ease: [0.16, 1, 0.3, 1], 
            }}
          >
            <WorkflowStep
              step={step}
              index={index}
              isLast={index === steps.length - 1}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}