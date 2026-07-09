"use client";

import Container
    from "../container";

import Section
    from "../section";

import BreadcrumbItem
    from "./BreadcrumbItem";

import useBreadcrumb
    from "@/components/ui/breadcrumb/use-breadcrumb";

import type {
    BreadcrumbItemData,
    BreadcrumbProps,
} from "./breadcrumb.types";

export default function Breadcrumb({
    currentLabel,
    className = "",
}: BreadcrumbProps) {
    const items =
        useBreadcrumb(
            currentLabel,
        );

    if (
        items.length === 0
    ) {
        return null;
    }

    return (
        <Section
            variant="surface"
             style={{ paddingTop: 5, paddingBottom: 5 }}
        >
            <Container>
                <nav
                    aria-label="Breadcrumb"
                >
                    <ol
                        className="
              flex
              flex-wrap
              items-center
              gap-2
              text-sm
              text-text-primary
            "
                    >
                        {items.map(
                            (item: BreadcrumbItemData) => (
                                <li
                                    key={item.href}
                                    className="
                    flex
                    items-center
                    gap-2
                  "
                                >
                                    <BreadcrumbItem
                                        item={item}
                                    />
                                </li>
                            ),
                        )}
                    </ol>
                </nav>
            </Container>
        </Section>
    );
}