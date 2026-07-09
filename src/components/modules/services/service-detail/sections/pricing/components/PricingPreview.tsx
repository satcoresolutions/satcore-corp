"use client";

import {
  motion,
  type Variants,
} from "framer-motion";

import PricingCard from "./PricingCard";
import PricingInformation from "./PricingInformation";

import type {
  PricingPreviewProps,
} from "../types/pricing.types";

const preview: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function PricingPreview({
  plan,
  content,
  href,
  buttonLabel,
}: PricingPreviewProps) {
  return (
    <motion.div
      className="
        flex
        flex-col
        gap-8
      "
      variants={preview}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: false,
        margin: "-100px",
      }}
    >
      <PricingInformation
        name={content.title}
        description={content.description}
      />

      <PricingCard
        plan={plan}
        content={content}
        href={href}
        buttonLabel={buttonLabel}
      />
    </motion.div>
  );
}