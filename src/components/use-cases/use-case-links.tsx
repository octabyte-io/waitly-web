import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Band, SectionHeading } from "@/components/site/primitives";
import { SceneThumb } from "./scene-cover";
import { postPath, postsForFeature, postsForGuide, type FeatureKey } from "@/content/use-cases";
import { cn } from "@/lib/utils";

/**
 * A card's link covers the whole card, but only the post title is inside the
 * <a>, so the link's text is the title and not the words in the mock.
 * Give the overlay the card's corner radius alongside this.
 */
export const STRETCHED =
  "after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:after:outline-3 focus-visible:after:outline-offset-3 focus-visible:after:outline-ink";

/** The use-case posts about one feature, listed near the foot of its feature page. */
export function UseCaseLinks({ features }: { features: FeatureKey[] }) {
  const posts = [...new Set(features.flatMap(postsForFeature))];
  if (posts.length === 0) return null;
  return (
    <Band tone="paper">
      <SectionHeading
        title="When you’d use it"
        intro="Situations this helps with, and what to do in each one, with Waitly or without."
      />
      <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <li
            key={post.slug}
            className="group relative h-full glass-thin rounded-2xl p-4 transition-colors hover:bg-white/80"
          >
            <SceneThumb scene={post.cover} zoom={0.6} />
            <div className="mt-4 flex items-start justify-between gap-3 px-1">
              <div>
                <Link
                  href={postPath(post.slug)}
                  className={cn("font-semibold group-hover:underline", STRETCHED, "after:rounded-2xl")}
                >
                  {post.title}
                </Link>
                <p className="mt-1 text-[0.9375rem] text-ink-soft">{post.summary}</p>
              </div>
              <ArrowRight aria-hidden="true" className="mt-1 size-4 shrink-0 text-ink-soft" />
            </div>
          </li>
        ))}
      </ul>
    </Band>
  );
}

/** The use-case posts that send readers to one guide article, shown on that article. */
export function UseCasesForGuide({ guide, className }: { guide: string; className?: string }) {
  const posts = postsForGuide(guide);
  if (posts.length === 0) return null;
  return (
    <section className={className}>
      <h2 className="text-d3 font-semibold tracking-[-0.02em]">Where this helps</h2>
      <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {posts.map((post) => (
          <li
            key={post.slug}
            className="relative h-full glass-thin rounded-2xl p-4 transition-colors hover:bg-white/80"
          >
            <SceneThumb scene={post.cover} zoom={0.6} />
            <Link
              href={postPath(post.slug)}
              className={cn("mt-4 block px-1 font-semibold", STRETCHED, "after:rounded-2xl")}
            >
              {post.title}
            </Link>
            <p className="mt-1 px-1 text-[0.9375rem] text-ink-soft">{post.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
