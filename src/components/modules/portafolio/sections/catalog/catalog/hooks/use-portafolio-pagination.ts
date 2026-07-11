"use client";

import {
  useEffect,
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
  itemsPerPage,
}: UsePaginationProps): UsePaginationReturn {

  const [currentPage, setCurrentPage] = useState(1);

  const [responsiveItemsPerPage, setResponsiveItemsPerPage] =
    useState(12);

  useEffect(() => {
    const updateItems = () => {
      setResponsiveItemsPerPage(
        window.innerWidth < 640 ? 6 : 12
      );
    };

    updateItems();

    window.addEventListener(
      "resize",
      updateItems
    );

    return () =>
      window.removeEventListener(
        "resize",
        updateItems
      );
  }, []);

  const finalItemsPerPage =
    itemsPerPage ?? responsiveItemsPerPage;

  const totalPages = Math.max(
    1,
    Math.ceil(totalItems / finalItemsPerPage)
  );

  const startIndex =
    (currentPage - 1) * finalItemsPerPage;

  const endIndex =
    startIndex + finalItemsPerPage;

  return {
    currentPage,
    setCurrentPage,
    totalPages,
    startIndex,
    endIndex,
    itemsPerPage: finalItemsPerPage,
  };
}