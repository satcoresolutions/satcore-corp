"use client";

import { motion, type Variants } from "framer-motion";

import Card from "@/components/ui/card";

import type {
  MissionVisionCardContent,
} from "../types/mission-vision.types";

const leftCardVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const rightCardVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

interface MissionVisionGridProps {
  readonly content:
    readonly MissionVisionCardContent[];
}

export default function MissionVisionGrid({
  content,
}: MissionVisionGridProps) {
  return (
    <div className="grid gap-20 md:grid-cols-2">
      {content.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={card.title}
            className="h-full"
            variants={
              index === 0
                ? leftCardVariants
                : rightCardVariants
            }
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
          >
            <Card
              variant="glass"
              className="h-full px-10 py-4 text-center"
            >
              <div className="mb-6 flex flex-col items-center">
                <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-background/40">
                  <Icon className="size-10 text-primary" />
                </div>

                <h5>{card.title}</h5>
              </div>

              <p>{card.description}</p>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}