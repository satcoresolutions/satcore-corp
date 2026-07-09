"use client";

import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";

import Section from "@/components/ui/section";
import Container from "@/components/ui/container";

import PortfolioSectionHeader from "./components/CatalogHeader";

import usePortfolioCatalog from "./hooks/use-portafolio-catalog";

import PortfolioSidebar from "../PortafolioSidebar/portafolio-sidebar";

import PortfolioSearch from "../PortafolioSidebar/portafolioSearch";
import PortfolioFilters from "../PortafolioSidebar/portafolioFilters";

import PortfolioContent from "../PortafolioContent/portafolio-content";
import PortfolioHeader from "../PortafolioContent/portafolio-header";
import PortfolioGrid from "../PortafolioContent/grid-portafolio";

import Pagination from "@/components/ui/pagination";

export default function PortfolioCatalog() {
  const {
    search,
    setSearch,
    sorting,
    setSorting,
    selectedFilters,
    handleFilterChange,
    filterGroups,
    filteredProjects,
    paginatedProjects,
    currentPage,
    totalPages,
    setCurrentPage,
  } = usePortfolioCatalog();

  const [showFilters, setShowFilters] = useState(false);

  return (
    <Section
      id="portfolio-catalog"
      variant="transparent"
      className="py-10"
    >
      <Container>

        <PortfolioSectionHeader>
          <PortfolioHeader
            count={filteredProjects.length}
            sorting={sorting}
            onSortingChange={setSorting}
          />
        </PortfolioSectionHeader>
        {/* BACKDROP (GLASS OVERLAY) */}
        {showFilters && (
          <div
            onClick={() => setShowFilters(false)}
            className="
              fixed
              inset-0
              bg-black/40
              backdrop-blur-sm
              z-40
              lg:hidden
            "
          />
        )}

        {/* MOBILE FILTER BUTTON */}
        <div className="flex items-center justify-between lg:hidden mt-4">
          <button
            onClick={() => setShowFilters(true)}
            className="
              flex
              items-center
              gap-2
              px-4
              py-2
              border
              rounded-md
              text-sm
              bg-white/10
              backdrop-blur
            "
          >
            <SlidersHorizontal size={16} />
          </button>
        </div>

        <div
          className="
            grid
            gap-12
            mt-6
            lg:grid-cols-[320px_1fr]
          "
        >
          {/* SIDEBAR DRAWER */}
          <PortfolioSidebar
            className={`
              fixed
              top-0
              left-0
              h-full
              w-[320px]
              z-50

              transform transition-transform duration-300 ease-in-out

              ${showFilters ? "translate-x-0" : "-translate-x-full"}

              lg:static
              lg:translate-x-0
              lg:h-auto
            `}
            onClose={() => setShowFilters(false)}
          >
            <PortfolioSearch
              value={search}
              onChange={setSearch}
            />

            <PortfolioFilters
              groups={filterGroups}
              selectedFilters={selectedFilters}
              onFilterChange={handleFilterChange}
            />
          </PortfolioSidebar>

          {/* CONTENT */}
          <PortfolioContent>
            <PortfolioGrid projects={paginatedProjects} />

            <div className="mt-12 flex justify-center">
              <Pagination
                variant="outlined"
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          </PortfolioContent>
        </div>
      </Container>
    </Section>
  );
}