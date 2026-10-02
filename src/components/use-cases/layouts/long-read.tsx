import { Container } from "@/components/site/primitives";
import type { UseCasePost } from "@/content/use-cases";
import { Blocks, ContentsList, PostHeader, PostTail, RelatedPosts, SceneFigure, SectionHeadingH2 } from "../post-parts";

/**
 * Layout A, the long read: one pane of glass, a contents list that stays in
 * view, and a single column of prose with the mocks set into it.
 */
export function LongRead({ post }: { post: UseCasePost }) {
  return (
    <>
      <section className="pt-10 pb-6 sm:pt-16">
        <Container>
          <PostHeader post={post} />
        </Container>
      </section>
      <Container className="py-6 sm:py-10">
        <div className="glass grid grid-cols-1 gap-12 rounded-[2rem] px-5 py-10 sm:rounded-[2.5rem] sm:px-10 sm:py-14 lg:grid-cols-[15rem_minmax(0,1fr)] lg:px-14">
          <ContentsList post={post} className="lg:sticky lg:top-28 lg:self-start" />
          <article className="measure min-w-0 space-y-14">
            {post.sections.map((section) => (
              <section key={section.id}>
                <SectionHeadingH2 section={section} />
                <Blocks blocks={section.blocks} className="mt-5" />
                {section.figure ? <SceneFigure figure={section.figure} className="mt-8" /> : null}
              </section>
            ))}
            <PostTail post={post} />
          </article>
        </div>
      </Container>
      <Container className="py-10">
        <RelatedPosts post={post} />
      </Container>
    </>
  );
}
