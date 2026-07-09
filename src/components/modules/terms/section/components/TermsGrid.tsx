"use client";

import { motion, type Variants } from "framer-motion";

import Card from "@/components/ui/card";

import type {
  TermsContent,
} from "../types/terms.types";

/* 🎬 ANIMACIONES */

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

interface TermsGridProps {
  content: TermsContent["terms"];
  animationKey: React.Key;
}

export default function TermsGrid({
  content,
  animationKey,
}: TermsGridProps) {
  return (
    <motion.div
      key={animationKey}
      className="
        mx-auto
        grid
        max-w-6xl
        gap-6
        px-6
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
      {content.map((term) => (
        <motion.div
          key={term.title}
          variants={itemVariants}
          className="h-full"
          whileHover={{
            scale: 1.03,
          }}
          transition={{
            type: "spring",
            stiffness: 220,
            damping: 18,
          }}
        >
          <Card
            variant="premium"
            className="flex h-full flex-col p-6"
          >
            <h3 className="mb-4">
              {term.title}
            </h3>

            <p className="text-text-muted">
              {term.description}
            </p>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}