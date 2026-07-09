"use client";

import {
  motion,
  Variants,
} from "framer-motion";

import ScopeCard from "./ScopeCard";

import type {
  PillarScopeCard,
} from "@/types/pillar.types";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

interface ScopeGridProps {
  cards: PillarScopeCard[];
}

export default function ScopeGrid({
  cards,
}: ScopeGridProps) {
  return (
    <motion.div
      className="
        grid
        md:grid-cols-2
        gap-8
        max-w-5xl
        mx-auto
      "
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
      }}
    >
      {cards.map((card) => (
        <ScopeCard
          key={card.title}
          title={card.title}
          type={card.type}
          items={card.items}
        />
      ))}
    </motion.div>
  );
}