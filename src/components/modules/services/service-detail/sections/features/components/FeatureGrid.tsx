"use client";

import { motion } from "framer-motion";

import FeatureCard from "./FeatureCard";

import type { FeatureGridProps } from "../types/features.types";

export default function FeatureGrid({
  features,
}: FeatureGridProps) {
  return (
    <div
      className="
        grid
        gap-6
        md:grid-cols-2
        xl:grid-cols-3
      "
    >
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{
            opacity: 0,
            y: 32,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.25,
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.08,
            ease: "easeOut",
          }}
        >
          <FeatureCard feature={feature} />
        </motion.div>
      ))}
    </div>
  );
}