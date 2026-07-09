"use client";

import {
  Check,
  X,
} from "lucide-react";

import {
  motion,
  Variants,
} from "framer-motion";

interface ScopeItemProps {
  label: string;
  type: "include" | "exclude";
}

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -10,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
};

export default function ScopeItem({
  label,
  type,
}: ScopeItemProps) {
  const Icon =
    type === "include"
      ? Check
      : X;

  return (
    <motion.li
      variants={itemVariants}
      className="
        flex
        items-start
        gap-3
      "
    >
      <Icon
        className="
          h-4
          w-4
          mt-1
          shrink-0
        "
      />

      <span
        className="
          text-sm
          text-primary
        "
      >
        {label}
      </span>
    </motion.li>
  );
}