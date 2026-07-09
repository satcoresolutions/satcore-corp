"use client";

import {
  motion,
  type Variants,
} from "framer-motion";

import RequirementsCard
  from "./RequirementsCard";

import type {
  RequirementsGridProps,
} from "../types/requirements.types";

const container: Variants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function RequirementsGrid({
  items,
}: RequirementsGridProps) {
  return (
    <motion.div
      className="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-4

        max-w-5xl
        mx-auto
      "
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: false,
        amount: 0.25,
      }}
    >
      {items.map((item) => (
        <RequirementsCard
          key={item.title}
          item={item}
        />
      ))}
    </motion.div>
  );
}