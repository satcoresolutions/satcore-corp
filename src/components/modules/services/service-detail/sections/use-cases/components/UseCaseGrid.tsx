"use client";

import { motion } from "framer-motion";

import UseCaseCard from "./UseCaseCard";

import type { UseCaseGridProps } from "../types/use-cases.types";

export default function UseCaseGrid({
  useCases,
}: UseCaseGridProps) {
  return (
    <div
      className="
        grid
        gap-6
        md:grid-cols-2
        xl:grid-cols-3
      "
    >
      {useCases.map((useCase, index) => (
        <motion.div
          key={useCase.title}
          initial={{
            opacity: 0,
            y: 48,
            rotateX: 8,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
          }}
          viewport={{
            once: false,
            amount: 0.25,
          }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          style={{
            transformPerspective: 1000,
            transformStyle: "preserve-3d",
          }}
        >
          <UseCaseCard useCase={useCase} />
        </motion.div>
      ))}
    </div>
  );
}