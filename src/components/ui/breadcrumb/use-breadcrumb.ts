"use client";

import {
  useMemo,
} from "react";

import {
  usePathname,
} from "next/navigation";

import {
  buildBreadcrumbItems,
} from "./breadcrumb.utils";

export default function useBreadcrumb(
  currentLabel?: string,
) {
  const pathname =
    usePathname();

  return useMemo(
    () =>
      buildBreadcrumbItems(
        pathname,
        currentLabel,
      ),
    [
      pathname,
      currentLabel,
    ],
  );
}