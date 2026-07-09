"use client";

import { useMemo } from "react";

import { pillarsData } from "@/data/pillars";

import type {
  PillarSlug,
} from "@/types/common.types";

export default function usePillar(
  slug: PillarSlug,
) {
  return useMemo(
    () =>
      pillarsData.find(
        (pillar) =>
          pillar.core.pillar === slug,
      ) ?? null,
    [slug],
  );
}