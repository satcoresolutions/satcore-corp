"use client";

import {
    CheckCircle2,
} from "lucide-react";

import {
    motion,
    type Variants,
} from "framer-motion";

import Card
    from "@/components/ui/card";

import type {
    RequirementsCardProps,
} from "../types/requirements.types";

const item: Variants = {
    hidden: {
        opacity: 0,
        x: -30,
    },

    show: {
        opacity: 1,
        x: 0,

        transition: {
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function RequirementsCard({
    item: requirement,
}: RequirementsCardProps) {
    return (
        <motion.div
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{
                once: false,
                amount: 0.2,
            }}
            whileHover={{
                y: -6,
                scale: 1.02,
                transition: {
                    duration: 0.2,
                    ease: "easeOut",
                },
            }}
            className="h-full"
        >
            <Card
                variant="glass"
                className="
          p-5
          h-full
        "
            >
                <div
                    className="
            flex
            items-start
            gap-4
          "
                >
                    <CheckCircle2
                        className="
              h-5
              w-5
              shrink-0
              mt-0.5
              text-primary
            "
                    />

                    <div>
                        <h5
                            className="
                font-semibold
                mb-2
              "
                        >
                            {requirement.title}
                        </h5>

                        <p
                            className="
                text-sm
                text-primary
              "
                        >
                            {requirement.description}
                        </p>
                    </div>
                </div>
            </Card>
        </motion.div>
    );
}