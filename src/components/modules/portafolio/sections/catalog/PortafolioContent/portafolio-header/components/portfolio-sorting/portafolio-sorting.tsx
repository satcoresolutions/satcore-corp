"use client";

import {
  motion,
} from "framer-motion";

import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
} from "@/components/ui/dropdown";

import {
  useLanguage,
} from "@/hooks/use-language";

import {
  portfolioSortingContent,
} from "./content/portafolio-sorting.content";

import type {
  PortfolioSortingProps,
} from "./types/portafolio-sorting.types";

export default function PortfolioSorting({
  value,
  onChange,
}: PortfolioSortingProps) {
  const lang = useLanguage();

  const content =
    portfolioSortingContent[lang];

  const selectedOption =
    content.options.find(
      (option) =>
        option.value === value
    );

  return (
    <div
      className="
        flex
        items-center
        gap-3
      "
    >
      <span
        className="
          text-xs
          uppercase
          tracking-wide
          text-primary
        "
        
      >
        {content.label}
      </span>

      <Dropdown>
        <DropdownTrigger>
          <motion.button
            type="button"
            whileHover={{
              y: -1,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              inline-flex
              items-center
              gap-2

              px-3
              py-2

              border

              bg-(--color-surface-secondary)
              border-[color-mix(in_srgb,var(--color-text-muted)_15%,transparent)]

              shadow-sm

              transition-all
              duration-200
            "
            style={{
              borderRadius:
                "var(--radius-dropdown)",
            }}
          >
            <span
              className="
                text-sm
                font-medium
                text-text-primary
              "
              
            >
              {selectedOption?.label}
            </span>

            <span
              className="
                text-xs
                text-primary
              "
            >
              ▾
            </span>
          </motion.button>
        </DropdownTrigger>

        <DropdownContent>
          {content.options.map(
            (option) => (
              <DropdownItem
                key={option.value}
                onClick={() =>
                  onChange?.(
                    option.value
                  )
                }
                className="
                  text-sm
                "
              >
                {option.label}
              </DropdownItem>
            )
          )}
        </DropdownContent>
      </Dropdown>
    </div>
  );
}