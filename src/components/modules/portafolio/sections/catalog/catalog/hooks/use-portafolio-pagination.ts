"use client";

import {
  useState,
} from "react";

export interface UsePaginationProps {
  totalItems: number;

  itemsPerPage?: number;
}

export interface UsePaginationReturn {
  currentPage: number;

  setCurrentPage: React.Dispatch<
    React.SetStateAction<number>
  >;

  totalPages: number;

  startIndex: number;

  endIndex: number;

  itemsPerPage: number;
}

export default function usePagination({
  totalItems,
  itemsPerPage = 6,
}: UsePaginationProps): UsePaginationReturn {
  const [
    currentPage,
    setCurrentPage,
  ] = useState(1);

  const totalPages = Math.max(
    1,
    Math.ceil(
      totalItems / itemsPerPage
    )
  );

  const startIndex =
    (currentPage - 1) *
    itemsPerPage;

  const endIndex =
    startIndex +
    itemsPerPage;

  return {
    currentPage,
    setCurrentPage,

    totalPages,

    startIndex,
    endIndex,

    itemsPerPage,
  };
}