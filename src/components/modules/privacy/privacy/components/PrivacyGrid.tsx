"use client";

import {
  motion,
  type Variants,
} from "framer-motion";

import PrivacyCard
  from "./PrivacyCards";

import type {
  PrivacyGridProps,
} from "../types/privacy.types";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function PrivacyGrid({
  items,
  animationKey,
}: PrivacyGridProps) {
  return (
    <motion.div
      key={animationKey}
      className="
        mx-auto
        grid
        max-w-6xl
        gap-6
        sm:grid-cols-2
        lg:grid-cols-3
      "
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: false,
        amount: 0.2,
      }}
    >
      {items.map((item) => (
        <motion.div
          key={item.title}
          variants={cardVariants}
          className="h-full"
        >
          <PrivacyCard
            item={item}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}