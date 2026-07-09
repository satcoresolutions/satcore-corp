"use client";

import { motion, type Variants } from "framer-motion";

import type {
  MissionVisionHeaderContent,
} from "../types/mission-vision.types";

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

interface MissionVisionHeaderProps {
  content: MissionVisionHeaderContent;
}

export default function MissionVisionHeader({
  content,
}: MissionVisionHeaderProps) {
  return (
    <motion.div
      className="mb-10 text-center"
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <h2>{content.title}</h2>

      <p className="text-surface">
        {content.description}
      </p>
    </motion.div>
  );
}