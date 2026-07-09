"use client";

import { useMemo } from "react";

import useServices from "./use-services";

import type {
  PillarSlug,
} from "@/types/common.types";

const useServicesByPillar = (
  pillar: PillarSlug,
) => {

  const services =
    useServices();

  return useMemo(
    () =>
      services.filter(
        service =>
          service.core.pillar === pillar
      ),
    [services, pillar],
  );

};

export default useServicesByPillar;