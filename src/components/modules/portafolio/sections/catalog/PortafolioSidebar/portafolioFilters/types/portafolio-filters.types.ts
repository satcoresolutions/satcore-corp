export interface FilterOption {
  id: string;
  label: string;
}

export interface FilterGroup {
  id:
    | "categories"
    | "types"
    | "technologies";

  title: string;

  options: readonly FilterOption[];
}

export interface SelectedPortfolioFilters {
  categories: string[];
  types: string[];
  technologies: string[];
}

export interface PortfolioFiltersProps {
  groups: readonly FilterGroup[];

  selectedFilters: SelectedPortfolioFilters;

  onFilterChange: (
    groupId: keyof SelectedPortfolioFilters,
    filterId: string,
  ) => void;
}