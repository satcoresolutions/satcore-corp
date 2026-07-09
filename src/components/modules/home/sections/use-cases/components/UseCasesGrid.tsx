"use client";

import {
  motion,
  type Variants,
} from "framer-motion";

import UseCaseCard
  from "./UseCaseCard";

import type {
  UseCasesGridProps,
} from "../types/use-cases.types";


const containerVariants: Variants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};


export default function UseCasesGrid({
  items,
  animationKey,
}: UseCasesGridProps) {
  return (
    <motion.div
      key={animationKey}
      className="
        grid
        grid-cols-1
        gap-6

        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4

        items-stretch
      "
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: false,
        amount: 0.2,
      }}
    >
      {items
        .filter(
          (item) => item.active,
        )
        .map((item) => (
          <UseCaseCard
            key={item.title}
            item={item}
          />
        ))}
    </motion.div>
  );
}