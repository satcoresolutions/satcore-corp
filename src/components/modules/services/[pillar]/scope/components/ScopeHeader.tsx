"use client";

import {
  motion,
} from "framer-motion";

interface ScopeHeaderProps {
  title: string;
  description: string;
}

export default function ScopeHeader({
  title,
  description,
}: ScopeHeaderProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
    >
      <div
        className="
        mb-16
        text-center
      "
      >
        <h2
          className="
          mb-4
          text-3xl
          font-bold
          md:text-5xl
        "
        >
          {title}
        </h2>

        <p
          className="
          text-text-muted
        "
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}