"use client";

import {
    motion,
    type Variants,
} from "framer-motion";

import Card
    from "@/components/ui/card";

import type {
    LegalCardProps,
} from "../types/legal.types";

const cardVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 32,
        scale: 0.97,
    },

    show: {
        opacity: 1,
        y: 0,
        scale: 1,

        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function LegalCard({
    item,
}: LegalCardProps) {
    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{
                once: false,
                amount: 0.15,
            }}
            whileHover={{
                y: -6,
                scale: 1.02,
                transition: {
                    duration: 0.22,
                    ease: [0.22, 1, 0.36, 1],
                },
            }}
            whileTap={{
                scale: 0.99,
            }}
            className="h-full"
        >
            <Card
                variant="outlined"
                className="
    p-6
  "
            >
                <div
                    className="
      grid
      gap-6
      md:grid-cols-3
      items-center
      text-center
    "
                >
                    <div
                        className="
        font-medium
        text-primary
      "
                    >
                        {item.element}
                    </div>

                    <div
                        className="
        text-text-primary
      "
                    >
                        {item.owner}
                    </div>

                    <div
                        className="
        text-primary
      "
                    >
                        {item.license}
                    </div>
                </div>
            </Card>
        </motion.div>
    );
}