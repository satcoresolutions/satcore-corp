"use client";

import type {
  PricingSelectorItemProps,
} from "../types/pricing.types";

export default function PricingSelectorItem({
  content,
  active,
  onClick,
}: PricingSelectorItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        group
        flex
        w-full
        items-center
        gap-3
        rounded-xl
        px-3
        py-3
        text-left
        transition-all
        duration-300
        hover:bg-muted/60
      "
    >
      <span
        className={`
          h-3
          w-3
          rounded-full
          border-2
          transition-all
          duration-300
          ${
            active
              ? "border-primary bg-primary"
              : "border-accent bg-transparent group-hover:border-primary"
          }
        `}
      />

      <span
        className={`
          text-sm
          font-medium
          transition-colors
          duration-300
          ${
            active
              ? "text-primary"
              : "text-accent group-hover:text-accent"
          }
        `}
      >
        {content.title}
      </span>
    </button>
  );
}