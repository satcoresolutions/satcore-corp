import { MDXRemote } from "next-mdx-remote/rsc";

import Container from "@/components/ui/container";

import Button from "@/components/ui/button";

import type {
  PostContentProps,
} from "../types/post.types";

const components = {
  Button,
};

export default function PostContent({
  content,
}: PostContentProps) {
  return (
    <Container className="mt-20 max-w-3xl">

      <div className="border-t border-border" />

      <article className="article">
        <MDXRemote source={content} components={components}/>
      </article>

    </Container>
  );
}