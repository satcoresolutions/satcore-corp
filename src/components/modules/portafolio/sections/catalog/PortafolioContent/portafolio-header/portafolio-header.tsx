import ResultsCount
  from "./components/results-count";

import PortfolioSorting
  from "./components/portfolio-sorting";

import type {
  PortfolioHeaderProps,
} from "./types/services-header.types";

export default function ServicesHeader({
  count,
  sorting,
  onSortingChange,
}: PortfolioHeaderProps) {
  return (
    <div
      className="
        mb-8
        flex
        flex-col
        gap-4

        sm:flex-row
        sm:items-center
        sm:justify-between
      "
    >
      <ResultsCount
        count={count}
      />

      <PortfolioSorting
        value={sorting}
        onChange={
          onSortingChange
        }
      />
    </div>
  );
}