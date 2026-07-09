"use client";

import {
  motion,
  type Variants,
} from "framer-motion";

import type {
  WhySatCoreItemProps,
} from "../types/why-satcore.types";


const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
    scale: 0.98,
  },

  show: {
    opacity: 1,
    x: 0,
    scale: 1,

    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


export default function WhySatCoreItem({
  item,
}: WhySatCoreItemProps) {
  const Icon = item.icon;

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{
        x: 6,
      }}
      className="
        group
        flex
        items-center
        gap-4
        transition
      "
    >

      <div
        className="
          flex
          h-11
          w-11
          items-center
          justify-center

          rounded-xl

          border
          border-white/10

          bg-white/5

          transition

          group-hover:border-accent/30
          group-hover:bg-accent/10
        "
      >
        <Icon
          className="
            h-5
            w-5

            text-gray-300

            transition

            group-hover:text-primary
          "
        />
      </div>


      <p
        className="
          text-base
          font-medium

          text-tertiary

          transition

          md:text-lg

          group-hover:text-primary
        "
      >
        {item.title}
      </p>

    </motion.div>
  );
}