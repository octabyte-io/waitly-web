import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Band, SectionHeading } from "@/components/site/primitives";
import { postPath, postsForFeature, postsForGuide, type FeatureKey } from "@/content/use-cases";

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
      <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={postPath(post.slug)}
              className="group flex h-full items-start justify-between gap-3 glass-thin rounded-2xl px-5 py-4 transition-colors hover:bg-white/80"
            >
              <span>
                <span className="font-semibold group-hover:underline">{post.title}</span>
                <span className="mt-1 block text-[0.9375rem] text-ink-soft">{post.summary}</span>
              </span>
              <ArrowRight aria-hidden="true" className="mt-1 size-4 shrink-0 text-ink-soft" />
            </Link>
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
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={postPath(post.slug)}
              className="block h-full glass-thin rounded-2xl px-5 py-4 transition-colors hover:bg-white/80"
            >
              <span className="font-semibold">{post.title}</span>
              <span className="mt-1 block text-[0.9375rem] text-ink-soft">{post.summary}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
