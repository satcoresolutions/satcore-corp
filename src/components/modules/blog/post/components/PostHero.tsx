"use client";

import Badge from "@/components/ui/badge";
import Container from "@/components/ui/container";

import type {
  PostHeroProps,
} from "../types/post.types";

export default function PostHero({
  post,
}: PostHeroProps) {
  return (
    <Container className="max-w-4xl">

      <div className="space-y-6">

        <div className="flex flex-wrap items-center gap-3">

          {post.category && (
            <Badge variant="primary">
              {post.category}
            </Badge>
          )}

          {post.date && (
            <span className="text-sm text-muted">
              {post.date}
            </span>
          )}

        </div>

        <h2
          className="text-center"
          style={{
            color: "var(--color-primary)",
          }}
        >
          {post.title}
        </h2>

        {post.description && (
          <p className="text-lg text-surface">
            {post.description}
          </p>
        )}

        {post.author && (
          <div className="text-sm text-text-muted">
            {post.author.name}
            {" • "}
            {post.author.role}
          </div>
        )}

      </div>

    </Container>
  );
}