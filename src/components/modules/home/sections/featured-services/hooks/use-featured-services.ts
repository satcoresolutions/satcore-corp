"use client";

import type {
  Pillar,
} from "@/types/pillar.types";

import usePillars
  from "@/hooks/use-pillars";

export default function useFeaturedServices(
  limit = 4,
): Pillar[] {

  const pillars =
    usePillars();

  return pillars.slice(0, limit);
}