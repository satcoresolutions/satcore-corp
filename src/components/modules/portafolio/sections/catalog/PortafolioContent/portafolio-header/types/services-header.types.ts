import type { PortfolioSorting } from "@/components/modules/portafolio/sections/catalog/catalog/hooks/use-portafolio-sorting";

export interface PortfolioHeaderProps {
  count: number;

  sorting: PortfolioSorting;

  onSortingChange: React.Dispatch<
    React.SetStateAction<PortfolioSorting>
  >;
}