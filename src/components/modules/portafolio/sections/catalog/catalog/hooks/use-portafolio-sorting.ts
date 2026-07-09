"use client";

import {
  useState,
} from "react";

export type PortfolioSorting =
  | "featured"
  | "name-asc"
  | "name-desc"
  | "newest";

export interface UsePortfolioSortingReturn {
  sorting: PortfolioSorting;

  setSorting: React.Dispatch<
    React.SetStateAction<PortfolioSorting>
  >;
}

export default function usePortfolioSorting(): UsePortfolioSortingReturn {
  const [
    sorting,
    setSorting,
  ] = useState<PortfolioSorting>(
    "featured"
  );

  return {
    sorting,
    setSorting,
  };
}