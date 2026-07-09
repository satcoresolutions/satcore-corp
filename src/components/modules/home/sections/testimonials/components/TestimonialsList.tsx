"use client";

import {
  motion,
  type Variants,
} from "framer-motion";

import TestimonialCard
  from "./TestimonialCard";

import type {
  TestimonialsListProps,
} from "../types/testimonials.types";

const containerVariants: Variants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function TestimonialsList({
  items,
  animationKey,
}: TestimonialsListProps) {
  return (
    <motion.div
      key={animationKey}
      className="
        space-y-8
      "
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: false,
        amount: 0.2,
      }}
    >
      {items.map((item, index) => (
        <TestimonialCard
          key={index}
          item={item}
        />
      ))}
    </motion.div>
  );
}