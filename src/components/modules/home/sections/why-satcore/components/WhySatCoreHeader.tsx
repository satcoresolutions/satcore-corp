"use client";

import type {
  WhySatCoreHeaderProps,
} from "../types/why-satcore.types";

export default function WhySatCoreHeader({
  content,
}: WhySatCoreHeaderProps) {
  return (
    <header
      className="
        mb-10
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