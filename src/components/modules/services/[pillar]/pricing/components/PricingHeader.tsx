"use client";

import {
    motion,
} from "framer-motion";

import type {
    PricingHeaderProps,
} from "../types/pricing.types";

export default function PricingHeader({
    title,
    description,
}: PricingHeaderProps) {
    return (
        <motion.div
            className="
        text-center
        mb-16
      "
            initial={{
                opacity: 0,
                y: 30,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
                once: true,
            }}
        >
            <div
                className="
        mb-14
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