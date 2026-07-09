"use client";

import {
  Check,
  X,
} from "lucide-react";

import {
  motion,
  Variants,
} from "framer-motion";

import Card from "@/components/ui/card";

import ScopeItem
  from "./ScopeItem";

const leftCard: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const rightCard: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const listContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

interface ScopeCardProps {
  title: string;

  type: "include" | "exclude";

  items: string[];
}

export default function ScopeCard({
  title,
  type,
  items,
}: ScopeCardProps) {
  const Icon =
    type === "include"
      ? Check
      : X;

  return (
    <motion.div
      variants={
        type === "include"
          ? leftCard
          : rightCard
      }
      initial="hidden"
      whileInView="show"
      viewport={{
        once: false,
        amount: 0.25,
      }}
      className="h-full"
    >
      <Card
        variant="outlined"
        className="
          p-8
          h-full
        "
      >
        <div
          className="
            flex
            items-center
            gap-3
            mb-6
          "
        >
          <Icon
            className="
              h-6
              w-6
              text-surface
            "
          />

          <h5
            className="
              text-xl
              font-semibold
            "
          >
            {title}
          </h5>
        </div>

        <motion.ul
          className="
            space-y-4
          "
          variants={listContainer}
        >
          {items.map((item) => (
            <ScopeItem
              key={item}
              label={item}
              type={type}
            />
          ))}
        </motion.ul>
      </Card>
    </motion.div>
  );
}