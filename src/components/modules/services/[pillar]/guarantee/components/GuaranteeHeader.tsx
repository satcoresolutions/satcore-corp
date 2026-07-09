"use client";

import {
    motion,
} from "framer-motion";

import type {
    GuaranteeHeaderProps,
} from "../types/guarantee.types";

export default function GuaranteeHeader({
    title,
    description,
}: GuaranteeHeaderProps) {
    return (
        <motion.div
            className="
        text-center
        mb-16
      "
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
                once: false,
            }}
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
          text-surface
        "
                >
                    {description}
                </p>
            </div>
        </motion.div>
    );
}