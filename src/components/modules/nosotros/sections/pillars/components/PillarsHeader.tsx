"use client";

import { motion, type Variants } from "framer-motion";

import type {
  PillarsHeaderContent,
} from "../types/pillars.types";

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

interface PillarsHeaderProps {
  content: PillarsHeaderContent;
}

export default function PillarsHeader({
  content,
}: PillarsHeaderProps) {
  return (
    <motion.div
      className="mb-10 text-center"
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
    >
      <h2>{content.title}</h2>

      <p className="text-surface">
        {content.description}
      </p>
    </motion.div>
  );
}