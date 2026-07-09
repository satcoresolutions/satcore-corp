"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";

import {
  useLanguage,
} from "@/hooks/use-language";

import {
  blogPostsContent,
} from "../content/blog-posts.content";

import type {
  BlogCardProps,
} from "../types/blog-posts.types";

export default function BlogCard({
  post,
}: BlogCardProps) {
  const lang = useLanguage();

  const content =
    blogPostsContent[lang];

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block h-full"
    >
      <motion.div
        whileHover={{ y: -8 }}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 18,
        }}
        className="h-full"
      >
        <Card
          variant="glass"
          className="
            group
            flex
            h-full
            flex-col
            overflow-hidden
            transition-all
            duration-300
            hover:shadow-xl
          "
        >
          {/* Imagen */}
          <div className="relative h-56 overflow-hidden">

            {post.category && (
              <div className="absolute left-4 top-4 z-10">
                <Badge variant="glass">
                  {post.category}
                </Badge>
              </div>
            )}

            <Image
              src={post.image || "/blog/default.jpg"}
              alt={post.title}
              fill
              className="
                object-cover
                transition-transform
                duration-500
                group-hover:scale-105
              "
            />
          </div>

          {/* Contenido */}
          <div className="flex flex-1 flex-col p-6">

            {/* Texto */}
            <div className="space-y-3">

              <h5 className="py-2">
                {post.title}
              </h5>

              <p className="text-surface">
                {post.description}
              </p>

            </div>

            {/* Footer */}
            <div className="mt-auto flex items-center justify-between pt-6">

              <div className="flex items-center gap-3 text-xs text-primary">

                {post.date && (
                  <span>{post.date}</span>
                )}

                {post.readingTime && (
                  <span>• {post.readingTime} min</span>
                )}

              </div>

              <Button
                variant="glass"
                className="px-0"
              >
                {content.card.readMore} →
              </Button>

            </div>

          </div>
        </Card>
      </motion.div>
    </Link>
  );
}