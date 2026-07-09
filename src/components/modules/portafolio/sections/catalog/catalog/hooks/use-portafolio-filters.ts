"use client";

import {
  useState,
} from "react";

export interface PortfolioSelectedFilters {
  categories: string[];

  types: string[];

  technologies: string[];
}

export interface UsePortfolioFiltersReturn {
  selectedFilters: PortfolioSelectedFilters;

  handleFilterChange: (
    groupId: keyof PortfolioSelectedFilters,
    filterId: string
  ) => void;
}

export default function usePortfolioFilters(): UsePortfolioFiltersReturn {
  const [
    selectedFilters,
    setSelectedFilters,
  ] = useState<PortfolioSelectedFilters>({
    categories: [],
    types: [],
    technologies: [],
  });

  const handleFilterChange = (
    groupId: keyof PortfolioSelectedFilters,
    filterId: string
  ) => {
    setSelectedFilters((prev) => ({
      ...prev,

      [groupId]: prev[
        groupId
      ].includes(filterId)
        ? prev[groupId].filter(
            (id) => id !== filterId
          )
        : [
            ...prev[groupId],
            filterId,
          ],
    }));
  };

  return {
    selectedFilters,
    handleFilterChange,
  };
}