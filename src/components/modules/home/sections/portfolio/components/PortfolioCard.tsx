"use client";

import Image from "next/image";
import Link from "next/link";

import {
  motion,
  type Variants,
} from "framer-motion";

import Card
  from "@/components/ui/card";

import type {
  PortfolioCardProps,
} from "../types/portfolio.types";


const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.96,
  },

  show: {
    opacity: 1,
    y: 0,
    scale: 1,

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


export default function PortfolioCard({
  project,
}: PortfolioCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      className="h-full"
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
    >
      <Link
        href={
          project.href ?? "#"
        }
        target={
          project.href
            ?.startsWith("http")
            ? "_blank"
            : undefined
        }
        rel={
          project.href
            ?.startsWith("http")
            ? "noopener noreferrer"
            : undefined
        }
        className="block h-full"
      >

        <Card
          variant="premium"
          className="
            group
            flex
            h-full
            flex-col
            overflow-hidden
          "
        >

          <div
            className="
              relative
              h-44
              w-full
              overflow-hidden
            "
          >
            <Image
              src={
                project.image
              }
              alt={
                project.imageAlt
              }
              fill
              className="
                object-cover

                transition
                duration-500

                group-hover:scale-105
              "
            />
          </div>


          <div
            className="
              flex
              flex-1
              flex-col
              p-6
            "
          >

            <h3
              className="
                font-semibold
                text-(--color-text-light)
              "
            >
              {project.title}
            </h3>


            <p
              className="
                mt-3
                line-clamp-2

                text-sm
                text-text-muted
              "
            >
              {project.description}
            </p>

          </div>

        </Card>

      </Link>
    </motion.div>
  );
}