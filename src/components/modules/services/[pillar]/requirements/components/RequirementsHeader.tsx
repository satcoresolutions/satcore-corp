"use client";

import {
    motion,
} from "framer-motion";

import type {
    RequirementsHeaderProps,
} from "../types/requirements.types";

export default function RequirementsHeader({
    title,
    description,
}: RequirementsHeaderProps) {
    return (
        <motion.div
            className="
        text-center
        mb-16
      "
            initial={{
                opacity: 0,
                y: 20,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.6,
            }}
            viewport={{
                once: false,
                amount: 0.25,
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