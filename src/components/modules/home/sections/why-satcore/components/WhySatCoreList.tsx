"use client";

import {
  motion,
  type Variants,
} from "framer-motion";

import WhySatCoreItem
  from "./WhySatCoreItem";

import type {
  WhySatCoreListProps,
} from "../types/why-satcore.types";


const containerVariants: Variants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};


export default function WhySatCoreList({
  items,
  animationKey,
}: WhySatCoreListProps) {
  return (
    <motion.div
      key={animationKey}
      className="
        space-y-6
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
        <WhySatCoreItem
          key={item.title}
          item={item}
        />
      ))}
    </motion.div>
  );
}