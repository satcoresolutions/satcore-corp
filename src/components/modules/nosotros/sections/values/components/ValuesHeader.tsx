"use client";

import { motion, type Variants } from "framer-motion";

import type { ValuesHeaderContent } from "../types/values.types";

const headerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

interface ValuesHeaderProps {
  content: ValuesHeaderContent;
}

export default function ValuesHeader({ content }: ValuesHeaderProps) {
  return (
    <motion.div
      className="text-center mb-10"
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
    >
      <h2>{content.title}</h2>
      <p className="text-surface">{content.description}</p>
    </motion.div>
  );
}