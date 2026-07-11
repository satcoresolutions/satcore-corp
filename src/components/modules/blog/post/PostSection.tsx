import Section from "@/components/ui/section";



import PostHero from "@/components/modules/blog/post/components/PostHero";
import PostCover from "@/components/modules/blog/post/components/PostCover";
import PostContent from "@/components/modules/blog/post/components/PostContent";



import type {
    PostSectionProps,
} from "@/components/modules/blog/post/types/post.types";

export default function PostSection({
    post,
}: PostSectionProps) {



    return (
        <Section variant="glass" className="pt-20 px-10">

            <PostHero
                post={post}
            />

            <PostCover
                title={post.title}
                cover={post.cover}
            />

            <PostContent
                content={post.content}
            />

        </Section>
    );
}