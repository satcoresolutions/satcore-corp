"use client";

import {
  motion,
  type Variants,
} from "framer-motion";

import PortfolioCard
  from "./PortfolioCard";

import type {
  PortfolioGridProps,
} from "../types/portfolio.types";


const containerVariants: Variants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};


export default function PortfolioGrid({
  projects,
  animationKey,
}: PortfolioGridProps) {
  return (
    <motion.div
      key={animationKey}
      className="
        grid
        grid-cols-1
        gap-6

        sm:grid-cols-2
        md:grid-cols-3

        items-stretch
      "
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: false,
        amount: 0.2,
      }}
    >
      {projects.map((project) => (
        <PortfolioCard
          key={project.id}
          project={project}
        />
      ))}
    </motion.div>
  );
}