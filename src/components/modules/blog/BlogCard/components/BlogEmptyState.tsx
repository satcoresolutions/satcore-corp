"use client";

import Link from "next/link";

import {
  useLanguage,
} from "@/hooks/use-language";

import {
  blogPostsContent,
} from "../content/blog-posts.content";

export default function BlogEmptyState() {
  const lang = useLanguage();

  const { emptyState } = blogPostsContent[lang];

  return (
    <div className="mx-auto max-w-6xl px-6 py-24 text-center">
      <h2>
        {emptyState.title}
      </h2>

      <p className="mx-auto mt-4 max-w-xl text-primary">
        {emptyState.description}
      </p>

      <p className="mt-2 text-primary">
        {emptyState.subtitle}
      </p>

      <Link
        href="/#contacto"
        className="
          mt-6 inline-block rounded-xl
          bg-accent px-6 py-3
          text-sm font-medium text-black
          transition hover:opacity-90
        "
      >
        {emptyState.button}
      </Link>
    </div>
  );
}