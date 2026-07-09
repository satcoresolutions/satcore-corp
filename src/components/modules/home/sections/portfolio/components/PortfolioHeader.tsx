"use client";

import type {
  PortfolioHeaderProps,
} from "../types/portfolio.types";

export default function PortfolioHeader({
  content,
}: PortfolioHeaderProps) {
  return (
    <header
      className="
        mb-12
        max-w-2xl
      "
    >
      <h2
        className="
          text-3xl
          font-bold
          text-(--color-text-light)

          md:text-4xl
        "
      >
        {content.title}
      </h2>

      <p
        className="
          mt-3
          text-surface
        "
      >
        {content.description}
      </p>
    </header>
  );
}