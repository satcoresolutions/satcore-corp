"use client";

import type {
  LegalTableHeaderProps,
} from "../types/legal.types";

export default function LegalTableHeader({
  element,
  owner,
  license,
}: LegalTableHeaderProps) {
  return (
    <div
      className="
        hidden
        md:grid

        grid-cols-3
        gap-4

        mb-4
        px-4

        text-sm
        font-medium
        text-text-muted
        text-center
      "
    >
      <span>
        {element}
      </span>

      <span>
        {owner}
      </span>

      <span>
        {license}
      </span>
    </div>
  );
}