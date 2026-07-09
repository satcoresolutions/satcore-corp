"use client";

import Link from "next/link";

import {
  ChevronRight,
} from "lucide-react";

import type {
  BreadcrumbItemProps,
} from "./breadcrumb.types";

export default function BreadcrumbItem({
  item,
}: BreadcrumbItemProps) {
  return (
    <>
      {item.isLast ? (
        <span
          className="
            font-medium
            text-primary
          "
        >
          {item.label}
        </span>
      ) : (
        <Link
          href={item.href}
        >
          {item.label}
        </Link>
      )}

      {!item.isLast && (
        <ChevronRight
          className="
            h-4
            w-4
          "
        />
      )}
    </>
  );
}