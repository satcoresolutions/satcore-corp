"use client";

import {
  motion,
} from "framer-motion";

import BenefitCard
  from "./BenefitCard";

import type {
  BenefitsGridProps,
} from "../types/benefits.types";

export default function BenefitsGrid({
  items,
}: BenefitsGridProps) {
  return (
    <div
      className="
        mt-16
        grid
        gap-6

        sm:grid-cols-2
        lg:grid-cols-4
      "
    >
      {items.map(
        (benefit, index) => (
          <motion.div
            key={`${benefit.title}-${index}`}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
              ease: "easeOut",
            }}
            whileHover={{
              y: -6,
              scale: 1.03,
            }}
          >
            <BenefitCard
              benefit={benefit}
            />
          </motion.div>
        ),
      )}
    </div>
  );
}