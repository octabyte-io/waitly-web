import { Band, Container } from "@/components/site/primitives";
import type { UseCasePost } from "@/content/use-cases";
import { cn } from "@/lib/utils";
import { Blocks, PostHeader, PostTail, RelatedPosts, SceneFigure, SectionHeadingH2 } from "../post-parts";

/**
 * Layout B, in two parts: the general answer is plain prose on the page, and
 * each thing Waitly does is a pane of glass with its mock beside the words.
 * The change of surface marks where the advice ends and the product begins.
 */
export function TwoPart({ post }: { post: UseCasePost }) {
  let panes = 0;
  return (
    <>
      <section className="pt-10 pb-6 sm:pt-16">
        <Container>
          <PostHeader post={post} />
        </Container>
      </section>

      {post.sections.map((section) => {
        if (section.voice === "neutral") {
          return (
            <section key={section.id} className="py-8 sm:py-10">
              <Container
                className={cn(
                  "grid grid-cols-1 items-start gap-10",
                  section.figure && "lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)]",
                )}
              >
                <div className="measure">
                  <SectionHeadingH2 section={section} />
                  <Blocks blocks={section.blocks} className="mt-5" />
                </div>
                {section.figure ? <SceneFigure figure={section.figure} /> : null}
              </Container>
            </section>
          );
        }
        const flip = panes++ % 2 === 1;
        return (
          <Band key={section.id} tone={flip ? "sky" : "mist"}>
            <div
              className={cn(
                "grid grid-cols-1 items-center gap-10 lg:gap-14",
                section.figure && "lg:grid-cols-2",
              )}
            >
              <div className={cn("measure", flip && section.figure && "lg:order-2")}>
                <SectionHeadingH2 section={section} />
                <Blocks blocks={section.blocks} className="mt-5" />
              </div>
              {section.figure ? <SceneFigure figure={section.figure} /> : null}
            </div>
          </Band>
        );
      })}

      <Container className="py-14 sm:py-20">
        <PostTail post={post} className="measure" />
        <RelatedPosts post={post} className="mt-14 max-w-3xl" />
      </Container>
    </>
  );
}
