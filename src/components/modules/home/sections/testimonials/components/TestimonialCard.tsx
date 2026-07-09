"use client";

import {
  Quote,
} from "lucide-react";

import {
  motion,
  type Variants,
} from "framer-motion";

import Card
  from "@/components/ui/card";

import type {
  TestimonialCardProps,
} from "../types/testimonials.types";

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.55,
      ease: [
        0.22,
        1,
        0.36,
        1,
      ],
    },
  },
};

export default function TestimonialCard({
  item,
}: TestimonialCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{
        y: -6,
      }}
    >
      <Card
        variant="glass"
        className="
          flex
          items-start
          gap-4
          p-6
        "
      >
        <div
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-surface
          "
        >
          <Quote
            className="
              h-5
              w-5
              text-text-secondary
            "
          />
        </div>

        <p
          className="
            italic
            leading-relaxed
            text-primary
          "
        >
          &ldquo;
          {item.quote}
          &rdquo;
        </p>
      </Card>
    </motion.div>
  );
}