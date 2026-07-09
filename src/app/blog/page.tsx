import HeroSection from "@/components/modules/blog/hero";
import BlogPostsSection from "@/components/modules/blog/BlogCard";

import { getAllPosts } from "@/lib/utils/blog";

import type {
  BlogPost,
} from "@/types/blog";

export default function BlogPage() {
  const posts: BlogPost[] = getAllPosts();

  return (
    <main>
      <HeroSection />

      <BlogPostsSection
        posts={posts}
      />
    </main>
  );
}