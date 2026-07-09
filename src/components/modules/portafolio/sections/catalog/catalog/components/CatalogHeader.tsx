"use client";

import {
  useTranslation,
} from "@/hooks/use-translation";

import {
  catalogContent,
} from "../content/catalog.content";

import type {
  PortfolioSectionHeaderProps,
} from "../types/catalog.types";

export default function PortfolioSectionHeader({
  children,
}: PortfolioSectionHeaderProps) {
  const content =
    useTranslation(
      catalogContent,
    );

  return (
    <div
      className="
        mx-auto
        mb-10
        max-w-3xl
        text-center
      "
    >
      <h2
        className="
          text-4xl
          font-bold
          md:text-5xl
        "
      >
        {content.title}
      </h2>

      <p
        className="
          mt-4
          text-lg
          text-surface
        "
      >
        {content.description}
      </p>

      {children && (
        <div
          className="
            mt-8
          "
        >
          {children}
        </div>
      )}
    </div>
  );
}