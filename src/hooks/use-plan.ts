"use client";

import { useMemo } from "react";

import usePlans from "./use-plans";

const usePlan = (
  slug: string,
) => {

  const plans =
    usePlans();

  return useMemo(
    () =>
      plans.find(
        plan =>
          plan.core.slug === slug
      ) ?? null,
    [plans, slug],
  );

};

export default usePlan;