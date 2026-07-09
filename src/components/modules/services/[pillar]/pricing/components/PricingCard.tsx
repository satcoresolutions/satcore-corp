"use client";

import {
    DollarSign,
    Clock,
} from "lucide-react";

import {
    motion,
    Variants,
} from "framer-motion";

import Card from "@/components/ui/card";

import type {
    PricingCardProps,
} from "../types/pricing.types";

const item: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
        scale: 0.96,
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

export default function PricingCard({
    plan,
}: PricingCardProps) {
    return (
        <motion.div
            variants={item}
            initial="hidden"
            whileInView="show"
            whileHover={{
                y: -8,
                scale: 1.03,
                transition: {
                    duration: 0.25,
                },
            }}
            viewport={{
                once: false,
                amount: 0.25,
            }}
        >
            <Card
                variant="glass"
                className="
          p-6
          h-full
        "
            >
                <h5
                    className="
            text-xl
            font-semibold
            mb-6
          "
                >
                    {plan.title}
                </h5>

                <div
                    className="
            flex
            items-center
            gap-3
            mb-4
          "
                >
                    <DollarSign
                        className="
              h-5
              w-5
              text-primary
            "
                    />

                    <span
                        className="
              text-lg
              font-semibold
            "
                    >
                        {plan.price}
                    </span>
                </div>

                <div
                    className="
            flex
            items-center
            gap-2
            text-sm
            text-text-primary
          "
                >
                    <Clock
                        className="
              h-4
              w-4
            "
                    />

                    <span>
                        {plan.time}
                    </span>
                </div>
            </Card>
        </motion.div>
    );
}