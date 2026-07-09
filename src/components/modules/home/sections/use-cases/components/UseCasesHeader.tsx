"use client";

import type {
  UseCasesHeaderProps,
} from "../types/use-cases.types";

export default function UseCasesHeader({
  content,
}: UseCasesHeaderProps) {
  return (
    <header
      className="
        mb-12
        text-center
      "
    >
      <h2
        className="
          text-3xl
          font-bold
          md:text-4xl
        "
      >
        {content.title}
      </h2>
    </header>
  );
}