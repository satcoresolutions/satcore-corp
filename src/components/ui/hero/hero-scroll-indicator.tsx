"use client";

import {
  motion,
} from "framer-motion";

import type {
  HeroScrollIndicatorProps,
} from "./hero.types";

export default function HeroScrollIndicator({
  className = "",
}: HeroScrollIndicatorProps) {
  return (
    <div
      className={`
        absolute
        bottom-8
        left-1/2

        -translate-x-1/2

        ${className}
      `}
    >
      <div
        className="
          flex
          h-10
          w-6

          justify-center

          rounded-full
          border
          border-border
        "
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="
            mt-2

            h-2
            w-2

            rounded-full

            bg-current
          "
        />
      </div>
    </div>
  );
}