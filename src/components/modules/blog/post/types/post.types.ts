import type {
  BlogPost,
} from "@/types/blog";

export interface PostSectionProps {
  post: BlogPost;
}

export interface PostHeroProps {
  post: BlogPost;
}

export interface PostCoverProps {
  title: string;
  cover?: string;
}

export interface PostContentProps {
  content: string;
}

export interface PostNotFoundProps {
  title: string;
}