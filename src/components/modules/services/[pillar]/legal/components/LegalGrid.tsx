"use client";

import {
  motion,
  type Variants,
} from "framer-motion";

import LegalCard
  from "./LegalCard";

import type {
  LegalGridProps,
} from "../types/legal.types";

const container: Variants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function LegalGrid({
  items,
}: LegalGridProps) {
  return (
    <motion.div
      className="
        flex
        flex-col
        gap-4
      "
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: false,
        amount: 0.15,
      }}
    >
      {items.map((item) => (
        <LegalCard
          key={item.element}
          item={item}
        />
      ))}
    </motion.div>
  );
}