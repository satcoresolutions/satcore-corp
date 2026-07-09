"use client";

import { useMemo } from "react";

import useServices from "./use-services";

const useService = (
  slug: string,
) => {

  const services =
    useServices();

  return useMemo(
    () =>
      services.find(
        service =>
          service.core.slug === slug
      ) ?? null,
    [services, slug],
  );

};

export default useService;