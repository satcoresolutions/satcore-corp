"use client";

import { motion, type Variants } from "framer-motion";

import Card from "@/components/ui/card";

import type {
  TermContent,
} from "../types/terms.types";

const variants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

interface TermsGridProps {
  readonly content:
    readonly TermContent[];
}

export default function TermsGrid({
  content,
}: TermsGridProps) {
  return (
    <div
      className="
        grid
        gap-6
        md:grid-cols-2
        lg:grid-cols-3
      "
    >
      {content.map((term, index) => {
        const Icon = term.icon;

        return (
          <motion.div
            key={index}
            variants={variants}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: false,
              amount: 0.15,
            }}
          >
            <Card
              variant="featured"
              className="flex h-full flex-col items-center p-8 text-center"
            >
              <div
                className="
                  mb-6
                  flex
                  size-20
                  items-center
                  justify-center
                  rounded-2xl
                  bg-primary/40
                "
              >
                <Icon className="size-10 text-accent" />
              </div>

              <h3 className="mb-4">
                {term.title}
              </h3>

              <p className="text-text-muted">
                {term.content}
              </p>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}