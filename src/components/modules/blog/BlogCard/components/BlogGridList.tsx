"use client";

import BlogCard from "./BlogCard";

import type {
  BlogGridListProps,
} from "../types/blog-posts.types";

export default function BlogGridList({
  posts,
}: BlogGridListProps) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {posts.map((post) => (
        <BlogCard
          key={post.slug}
          post={post}
        />
      ))}
    </div>
  );
}