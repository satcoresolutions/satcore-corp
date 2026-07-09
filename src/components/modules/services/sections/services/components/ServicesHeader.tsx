"use client";

import {
  motion,
} from "framer-motion";

import type {
  ServicesHeaderProps,
} from "../types/services.types";

export default function ServicesHeader({
  title,
  description,
}: ServicesHeaderProps) {
  return (
    <motion.div
      className="
        mx-auto
        max-w-3xl
        text-center
      "
      initial={{
        opacity: 0,
        y: 24,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{
        once: false,
        amount: 0.25,
      }}
    >
      <h2
        className="
          text-4xl
          font-bold
          md:text-5xl
        "
      >
        {title}
      </h2>

      <p
        className="
          mt-4
          text-lg
          text-text-muted
        "
      >
        {description}
      </p>
    </motion.div>
  );
}