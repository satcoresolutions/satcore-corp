"use client";

import Image from "next/image";

import Container from "@/components/ui/container";

import type {
  PostCoverProps,
} from "../types/post.types";

export default function PostCover({
  cover,
  title,
}: PostCoverProps) {
  if (!cover) {
    return null;
  }

  return (
    <Container className="mt-12 max-w-5xl">

      <div className="relative h-112 overflow-hidden rounded-3xl">

        <Image
          src={cover}
          alt={title}
          fill
          priority
          className="object-cover"
        />

        <div
          className="
            absolute inset-0
            bg-linear-to-t
            from-black/20
            to-transparent
          "
        />

      </div>

    </Container>
  );
}