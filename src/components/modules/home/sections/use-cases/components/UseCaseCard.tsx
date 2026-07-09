"use client";

import {
  motion,
  type Variants,
} from "framer-motion";

import Card
  from "@/components/ui/card";

import type {
  UseCaseCardProps,
} from "../types/use-cases.types";


const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },

  show: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


export default function UseCaseCard({
  item,
}: UseCaseCardProps) {
  const Icon = item.icon;

  return (
    <motion.div
      variants={itemVariants}
      className="h-full"
      whileHover={{
        y: -6,
      }}
    >
      <Card
        variant="featured"
        className="
    flex
    h-full
    flex-col
    items-center
    justify-center
    p-6
    text-center
  "
      >
        <div
          className="
      mb-5
      flex
      h-12
      w-12
      items-center
      justify-center
      rounded-xl
      bg-primary/50
    "
        >
          <Icon
            className="
        h-6
        w-6
        text-accent
      "
          />
        </div>

        <h3
          className="
      text-lg
      font-semibold
    "
        >
          {item.title}
        </h3>

        <p
          className="
      mt-3
      text-sm
      text-text-muted
    "
        >
          {item.subtitle}
        </p>
      </Card>
    </motion.div>
  );
}