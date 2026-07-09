"use client";

import {
  motion,
  type Variants,
} from "framer-motion";

import GuaranteeCard
  from "./GuaranteeCard";

import type {
  GuaranteeGridProps,
} from "../types/guarantee.types";

const container: Variants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function GuaranteeGrid({
  cards,
}: GuaranteeGridProps) {
  return (
    <motion.div
      className="
        grid
        gap-8
        md:grid-cols-2
      "
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: false,
        amount: 0.25,
      }}
    >
      {cards.map((card) => (
        <GuaranteeCard
          key={card.title}
          card={card}
        />
      ))}
    </motion.div>
  );
}