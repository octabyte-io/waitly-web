import { Container } from "@/components/site/primitives";
import type { UseCasePost } from "@/content/use-cases";
import {
  Blocks,
  ContentsList,
  GlanceCard,
  PostHeader,
  PostTail,
  RelatedPosts,
  SceneFigure,
  SectionHeadingH2,
} from "../post-parts";

/**
 * Layout C, the glance rail: the article in one column, and beside it a card
 * that stays in view with the plan, the features and the install button.
 */
export function GlanceRail({ post }: { post: UseCasePost }) {
  return (
    <Container className="grid grid-cols-1 gap-10 pt-10 pb-16 sm:pt-16 lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-14">
      <PostHeader post={post} className="lg:col-span-2" />

      <aside className="space-y-8 lg:sticky lg:top-28 lg:order-2 lg:self-start">
        <GlanceCard post={post} />
        <ContentsList post={post} className="hidden px-1 lg:block" />
      </aside>

      <article className="min-w-0 space-y-14 lg:order-1">
        {post.sections.map((section) => (
          <section key={section.id}>
            <SectionHeadingH2 section={section} />
            <Blocks blocks={section.blocks} className="mt-5 measure" />
            {section.figure ? <SceneFigure figure={section.figure} className="mt-8 max-w-2xl" /> : null}
          </section>
        ))}
        <PostTail post={post} className="measure" />
        <RelatedPosts post={post} />
      </article>
    </Container>
  );
}
