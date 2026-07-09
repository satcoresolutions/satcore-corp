"use client";

import {
  portfolioFiltersContent,
} from "./content/portafolio-filters.content";

import {
  useLanguage,
} from "@/hooks/use-language";

import type {
  PortfolioFiltersProps,
} from "./types/portafolio-filters.types";

export default function ServicesFilters({
  groups,
  selectedFilters,
  onFilterChange,
}: PortfolioFiltersProps) {
  const lang = useLanguage();

  const content =
    portfolioFiltersContent[lang];

  return (
    <div
      className="
        flex
        flex-col
        gap-8
      "
    >
      <h2
        className="
          text-lg
          font-medium
        "
      >
        {content.title}
      </h2>

      {groups.map((group) => (
        <div key={group.id}>
          <h3
            className="
              mb-3
              font-medium
            "
          >
            {group.title}
          </h3>

          <div
            className="
              flex
              flex-col
              gap-2
            "
          >
            {group.options.map((option) => {
              const isChecked =
                selectedFilters[
                  group.id
                ]?.includes(option.id);

              return (
                <label
                  key={option.id}
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() =>
                      onFilterChange(
                        group.id,
                        option.id
                      )
                    }
                  />

                  <span>
                    {option.label}
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}