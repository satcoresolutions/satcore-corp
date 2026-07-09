"use client";

import { useMemo, useState } from "react";

import {
  motion,
  type Variants,
} from "framer-motion";

import Pagination from "@/components/ui/pagination";

import ServiceCatalogCard from "./ServiceCatalogCard";

import type {
  ServiceCatalogGridProps,
} from "../types/service-catalog.types";

const ITEMS_PER_PAGE = 6;

const container: Variants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function ServiceCatalogGrid({
  services,
}: ServiceCatalogGridProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(
    services.length / ITEMS_PER_PAGE,
  );

  const visibleServices = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;

    return services.slice(
      start,
      start + ITEMS_PER_PAGE,
    );
  }, [
    currentPage,
    services,
  ]);

  return (
    <>
      <motion.div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
        "
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: false,
        }}
      >
        {visibleServices.map((service) => (
          <ServiceCatalogCard
            key={service.core.id}
            service={service}
          />
        ))}
      </motion.div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-12">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </>
  );
}