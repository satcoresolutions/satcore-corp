"use client";

import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

import type {
  PostNotFoundProps,
} from "../types/post.types";

export default function PostNotFound({
  title,
}: PostNotFoundProps) {
  return (
    <Section variant="default">

      <Container>

        <div className="py-24 text-center">

          <h2>
            {title}
          </h2>

        </div>

      </Container>

    </Section>
  );
}