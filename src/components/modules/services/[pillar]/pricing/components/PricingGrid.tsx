"use client";

import {
  motion,
  Variants,
} from "framer-motion";

import PricingCard from "./PricingCard";

import type {
  PricingGridProps,
} from "../types/pricing.types";

const container: Variants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function PricingGrid({
  plans,
}: PricingGridProps) {
  return (
    <motion.div
      className="
        grid
        gap-6
        md:grid-cols-2
      "
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        margin: "-80px",
      }}
    >
      {plans.map((plan) => (
        <PricingCard
          key={plan.title}
          plan={plan}
        />
      ))}
    </motion.div>
  );
}