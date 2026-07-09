import PostSection from "@/components/modules/blog/post";
import PostNotFound from "@/components/modules/blog/post/components/PostNotFound";

import {
  getAllPosts,
  getPostBySlug,
} from "@/lib/utils/blog";

import {
  postContent,
} from "@/components/modules/blog/post/content/post.content";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PostPage({
  params,
}: PostPageProps) {
  const { slug } = await params;

  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <PostNotFound
        title={postContent.es.notFound.title}
      />
    );
  }

  return (
    <PostSection
      post={post}
    />
  );
}