"use client";

import {
  useState,
} from "react";

export interface UsePortfolioSearchReturn {
  search: string;

  setSearch: React.Dispatch<
    React.SetStateAction<string>
  >;
}

export default function usePortfolioSearch(): UsePortfolioSearchReturn {
  const [
    search,
    setSearch,
  ] = useState<string>("");

  return {
    search,
    setSearch,
  };
}