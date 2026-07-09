"use client";

import {
    ShieldCheck,
    Wrench,
} from "lucide-react";

import {
    motion,
    type Variants,
} from "framer-motion";

import Card
    from "@/components/ui/card";

import type {
    GuaranteeCardProps,
} from "../types/guarantee.types";

const leftItem: Variants = {
    hidden: {
        opacity: 0,
        x: -60,
    },

    show: {
        opacity: 1,
        x: 0,

        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const rightItem: Variants = {
    hidden: {
        opacity: 0,
        x: 60,
    },

    show: {
        opacity: 1,
        x: 0,

        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const icons = {
    "shield-check": ShieldCheck,

    wrench: Wrench,
} as const;

export default function GuaranteeCard({
    card,
}: GuaranteeCardProps) {
    const Icon =
        icons[card.icon];

    return (
        <motion.div
            variants={
                card.icon === "shield-check"
                    ? leftItem
                    : rightItem
            }
            initial="hidden"
            whileInView="show"
            viewport={{
                once: false,
                amount: 0.25,
            }}
            whileHover={{
                y: -6,
                scale: 1.02,
            }}
            className="h-full"
        >
            <Card
                variant="glass"
                className="
    h-full
    p-8
    flex
    flex-col
    items-center
    text-center
    justify-center
  "
            >
                <Icon
                    className="
      h-12
      w-12
      mb-6
      text-primary
    "
                />

                <h5
                    className="
      text-xl
      font-semibold
      mb-3
    "
                >
                    {card.title}
                </h5>

                <p
                    className="
      text-text-primary
    "
                >
                    {card.description}
                </p>
            </Card>
        </motion.div>
    );
}