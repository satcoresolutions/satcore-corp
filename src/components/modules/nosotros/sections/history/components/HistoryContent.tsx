"use client";

import { motion, type Variants } from "framer-motion";

import type {
  HistoryContent as HistoryContentType,
} from "../types/history.types";

const textVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

interface HistoryContentProps {
  content: Pick<
    HistoryContentType,
    "title" | "paragraphs"
  >;
}

export default function HistoryContent({
  content,
}: HistoryContentProps) {
  return (
    <motion.div
      variants={textVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
    >
      <h2 className="text-center pb-5">{content.title}</h2>

      {content.paragraphs.map((paragraph) => (
        <p className="text-surface" key={paragraph}>
          {paragraph}
        </p>
      ))}
    </motion.div>
  );
}