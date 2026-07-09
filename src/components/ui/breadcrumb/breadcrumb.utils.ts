import type {
  BreadcrumbItemData,
} from "./breadcrumb.types";

/**
 * landing-page-basic
 * ↓
 * Landing Page Basic
 */
export function humanizeSegment(
  segment: string,
): string {
  return segment
    .split("-")
    .map(
      (word) =>
        word.charAt(0)
          .toUpperCase() +
        word.slice(1),
    )
    .join(" ");
}

/**
 * Genera:
 *
 * services
 * software
 * landing-pages
 *
 * ↓
 *
 * /services
 * /services/software
 * /services/software/landing-pages
 */
export function buildHref(
  segments: string[],
  index: number,
): string {
  return `/${segments
    .slice(
      0,
      index + 1,
    )
    .join("/")}`;
}

/**
 * Construye todos los items del breadcrumb.
 */
export function buildBreadcrumbItems(
  pathname: string,
  currentLabel?: string,
): BreadcrumbItemData[] {
  const segments =
    pathname
      .split("/")
      .filter(Boolean);

  return segments.map(
    (
      segment,
      index,
    ) => {
      const isLast =
        index ===
        segments.length - 1;

      return {
        label:
          isLast &&
          currentLabel
            ? currentLabel
            : humanizeSegment(
                segment,
              ),

        href:
          buildHref(
            segments,
            index,
          ),

        isLast,
      };
    },
  );
}