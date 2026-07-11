"use client";

import { useMemo, useState } from "react";

import Section from "@/components/ui/section";
import Container from "@/components/ui/container";
import Pagination from "@/components/ui/pagination";

import { useLanguage } from "@/hooks/use-language";

import BlogEmptyState from "./components/BlogEmptyState";
import BlogGridList from "./components/BlogGridList";

import {
  blogPostsContent,
} from "./content/blog-posts.content";

import type {
  BlogPostsSectionProps,
} from "./types/blog-posts.types";

export default function BlogPostsSection({
  posts,
}: BlogPostsSectionProps) {
  const lang = useLanguage();

  const {
    title,
    itemsPerPage,
  } = blogPostsContent[lang];

  const [currentPage, setCurrentPage] =
    useState(1);

  const totalPages = Math.ceil(
    posts.length / itemsPerPage,
  );

  const safePage = Math.min(
    currentPage,
    totalPages || 1,
  );

  const paginatedPosts = useMemo(() => {
    const start =
      (safePage - 1) * itemsPerPage;

    return posts.slice(
      start,
      start + itemsPerPage,
    );
  }, [
    posts,
    safePage,
    itemsPerPage,
  ]);

  const handlePageChange = (
    page: number,
  ) => {
    if (
      page < 1 ||
      page > totalPages
    ) {
      return;
    }

    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!posts.length) {
    return <BlogEmptyState />;
  }

  return (
    <Section
      id="articles"
      variant="default"
      className="py-10"
    >
      <Container>

        <h2 className="pb-10 text-center">
          {title}
        </h2>

        <BlogGridList
          posts={paginatedPosts}
        />

        {totalPages > 1 && (
          <Pagination
            currentPage={safePage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            className="mt-12 justify-center"
          />
        )}

      </Container>
    </Section>
  );
}