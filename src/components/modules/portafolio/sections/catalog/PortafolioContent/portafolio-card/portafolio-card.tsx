"use client";

import Link from "next/link";

import Card from "@/components/ui/card";
import Image from "@/components/ui/image";

import {
  useLanguage,
} from "@/hooks/use-language";

import {
  portfolioCardContent,
} from "./content/portafolio-card.content";

import type {
  PortfolioCardProps,
} from "./types/portafolio-card.types";

export default function PortfolioCard({
  project,
}: PortfolioCardProps) {
  const lang = useLanguage();

  const content =
    portfolioCardContent[lang];

  const translation =
    project.translations[lang];

  return (
    <Card
      variant="glass"
      className="
    group
    flex
    h-full
    flex-col
    overflow-hidden

    transition-all
    duration-300

    hover:-translate-y-1
    hover:shadow-lg
  "
    >
      {/* IMAGE */}
      <div
        className="
      relative
      overflow-hidden
    "
      >
        <Image
          src={project.image}
          alt={translation.imageAlt}
          variant="card"
          className="
        h-full
        w-full
        object-cover

        transition-transform
        duration-500

        group-hover:scale-105
      "
        />
      </div>

      {/* CONTENT */}
      <div
        className="
      flex
      flex-1
      flex-col
      p-5
    "
      >
        <span
          className="
        text-[11px]
        uppercase
        tracking-[0.2em]
        text-primary
      "
        >
          {translation.category}
        </span>

        <h5
          className="
        mt-2
        text-lg
        font-semibold
        leading-snug
      "
        >
          {translation.title}
        </h5>

        <p
          className="
        mt-3
        line-clamp-2
        text-sm
        text-surface
      "
        >
          {translation.description}
        </p>

        {project.href && (
          <div
            className="
          mt-auto
          flex
          justify-end
          pt-6
        "
          >
            <Link
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="
            inline-flex
            items-center
            gap-2

            text-sm
            italic

            text-primary

            transition-all
            duration-300

            hover:gap-3
            hover:underline
          "
            >
              {content.viewDetails}

              <span
                aria-hidden
                className="
              transition-transform
              duration-300

              group-hover:translate-x-1
            "
              >
                →
              </span>
            </Link>
          </div>
        )}
      </div>
    </Card>
  );
}