"use client";

import {
  portfolioData,
} from "@/data/portfolio";

import {
  useLanguage,
} from "@/hooks/use-language";

import {
  catalogContent,
} from "../content/catalog.content";

import usePortfolioSearch
  from "./use-portafolio-search";

import usePortfolioFilters
  from "./use-portafolio-filters";

import usePortfolioSorting
  from "./use-portafolio-sorting";

import usePagination
  from "./use-portafolio-pagination";

import type {
  FilterGroup,
} from "../../PortafolioSidebar/portafolioFilters";

export default function usePortfolioCatalog() {
  const lang =
    useLanguage();

  const content =
    catalogContent[lang];

  const {
    search,
    setSearch,
  } = usePortfolioSearch();

  const {
    sorting,
    setSorting,
  } = usePortfolioSorting();

  const {
    selectedFilters,
    handleFilterChange,
  } = usePortfolioFilters();

  /*
  ─────────────────────────
  Dynamic filters
  ─────────────────────────
  */

  const categories =
    Array.from(
      new Set(
        portfolioData.map(
          (project) => project.category,
        ),
      ),
    );

  const types =
    Array.from(
      new Set(
        portfolioData.map(
          (project) => project.service,
        ),
      ),
    );

  const technologies =
    Array.from(
      new Set(
        portfolioData.flatMap(
          (project) =>
            project.technologies ?? [],
        ),
      ),
    );

  /*
  ─────────────────────────
  Filter groups
  ─────────────────────────
  */

  const filterGroups: FilterGroup[] = [
    {
      id: "categories",

      title:
        content.filters.categories,

      options:
        categories.map(
          (category) => ({
            id: category,
            label: category,
          }),
        ),
    },

    {
      id: "types",

      title:
        content.filters.services,

      options:
        types.map(
          (type) => ({
            id: type,
            label: type,
          }),
        ),
    },

    {
      id: "technologies",

      title:
        content.filters.technologies,

      options:
        technologies.map(
          (technology) => ({
            id: technology,
            label: technology,
          }),
        ),
    },
  ];

  /*
  ─────────────────────────
  Search + Filters
  ─────────────────────────
  */

  const filteredProjects =
    portfolioData.filter(
      (project) => {
        const translation =
          project.translations[lang];

        const matchesSearch =
          search.trim() === ""
            ? true
            : (
                `${translation.title} ${translation.description}`
              )
                .toLowerCase()
                .includes(
                  search.toLowerCase(),
                );

        const matchesCategory =
          selectedFilters.categories.length === 0 ||
          selectedFilters.categories.includes(
            project.category,
          );

        const matchesType =
          selectedFilters.types.length === 0 ||
          selectedFilters.types.includes(
            project.service,
          );

        const matchesTechnology =
          selectedFilters.technologies.length === 0 ||
          (project.technologies ?? []).some(
            (technology) =>
              selectedFilters.technologies.includes(
                technology,
              ),
          );

        return (
          matchesSearch &&
          matchesCategory &&
          matchesType &&
          matchesTechnology
        );
      },
    );

  /*
  ─────────────────────────
  Sorting
  ─────────────────────────
  */

  const sortedProjects = [
    ...filteredProjects,
  ];

  switch (sorting) {
    case "name-asc":
      sortedProjects.sort(
        (a, b) =>
          a.translations[
            lang
          ].title.localeCompare(
            b.translations[
              lang
            ].title,
          ),
      );
      break;

    case "name-desc":
      sortedProjects.sort(
        (a, b) =>
          b.translations[
            lang
          ].title.localeCompare(
            a.translations[
              lang
            ].title,
          ),
      );
      break;

    case "newest":
      sortedProjects.reverse();
      break;

    default:
      break;
  }

  /*
  ─────────────────────────
  Pagination
  ─────────────────────────
  */

  const {
    currentPage,
    totalPages,
    setCurrentPage,
    startIndex,
    endIndex,
    itemsPerPage,
  } = usePagination({
    totalItems:
      sortedProjects.length,
  });

  const paginatedProjects =
    sortedProjects.slice(
      startIndex,
      endIndex,
    );

  return {
    search,
    setSearch,

    sorting,
    setSorting,

    selectedFilters,
    handleFilterChange,

    filterGroups,

    filteredProjects,
    sortedProjects,
    paginatedProjects,

    currentPage,
    totalPages,
    setCurrentPage,

    itemsPerPage,
  };
}