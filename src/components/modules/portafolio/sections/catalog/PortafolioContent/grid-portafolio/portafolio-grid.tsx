"use client";

import {
  useLanguage,
} from "@/hooks/use-language";

import {
  portfolioGridContent,
} from "./content/portafolio-grid.content";

import PortfolioCard from "../portafolio-card";

import type {
  PortfolioGridProps,
} from "./types/portafolio-grid.types";

export default function PortfolioGrid({
  projects,
}: PortfolioGridProps) {
  const lang = useLanguage();

  const content =
    portfolioGridContent[lang];

  if (!projects.length) {
    return (
      <p
        className="
          text-sm
          text-primary
          text-center
          py-10
        "
      >
        {content.empty}
      </p>
    );
  }

  return (
    <div
      className="
        grid
        gap-4

        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-2
        xl:grid-cols-3
        2xl:grid-cols-4
      "
    >
      {projects.map((project) => (
        <PortfolioCard
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
}