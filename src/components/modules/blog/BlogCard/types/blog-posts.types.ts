import type { BlogPost } from "@/types/blog";

export type BlogCardData = Pick<
  BlogPost,
  | "title"
  | "description"
  | "slug"
  | "image"
  | "category"
  | "date"
  | "readingTime"
>;

export interface BlogPostsSectionProps {
  posts: BlogPost[];
}

export interface BlogCardProps {
  post: BlogCardData;
}

export interface BlogGridListProps {
  posts: BlogCardData[];
}

export interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}