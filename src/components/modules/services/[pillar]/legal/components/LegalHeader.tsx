"use client";

import {
    motion,
} from "framer-motion";

import type {
    LegalHeaderProps,
} from "../types/legal.types";

export default function LegalHeader({
    title,
    description,
}: LegalHeaderProps) {
    return (
        <motion.div
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
                once: false,
                amount: 0.25,
            }}
            className="
        text-center
        mb-16
      "
        >
            <div
                className="
        text-center
      "
            >
                <h2
                    className="
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