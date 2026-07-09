export type PortfolioSorting =
  | "featured"
  | "name-asc"
  | "name-desc"
  | "newest";

export interface PortfolioSortingOption {
  label: string;

  value: PortfolioSorting;
}

export interface PortfolioSortingProps {
  value: PortfolioSorting;

  onChange: (
    value: PortfolioSorting,
  ) => void;
}