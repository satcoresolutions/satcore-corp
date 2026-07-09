"use client";

import { motion, type Variants } from "framer-motion";

import Card from "@/components/ui/card";

import type {
  HistoryContent,
} from "../types/history.types";

const cardVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

interface HistoryHighlightProps {
  content: HistoryContent["highlight"];
}

export default function HistoryHighlight({
  content,
}: HistoryHighlightProps) {
  const Icon = content.icon;

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="h-full"
    >
      <Card
        variant="outlined"
        className="flex h-full flex-col items-center p-8 text-center"
      >
        <div
          className="
      mb-6
      flex
      size-20
      items-center
      justify-center
      rounded-full
      bg-primary
    "
        >
          <Icon className="size-10 text-text-secondary" />
        </div>

        <h5 className="pb-5">
          {content.title}
        </h5>

        <p className="text-primary">
          {content.description}
        </p>
      </Card>
    </motion.div>
  );
}