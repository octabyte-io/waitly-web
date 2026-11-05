import Link from "next/link";
import { SceneThumb } from "@/components/use-cases/scene-cover";
import { STRETCHED } from "@/components/use-cases/use-case-links";
import type { GuideArticle } from "@/content/guide/types";
import { postBySlug, postPath, postsForGuide } from "@/content/use-cases";
import { cn } from "@/lib/utils";

/**
 * "Where this helps" on a guide article: the use-case posts whose setup steps
 * send readers here, then any the article names itself in `useCases`.
 * Mirrors `UseCasesForGuide` in `components/use-cases/use-case-links.tsx`.
 */
export function GuideUseCases({ article, className }: { article: GuideArticle; className?: string }) {
  const named = (article.useCases ?? []).map(postBySlug).filter((p) => p !== undefined);
  const posts = [...new Set([...postsForGuide(article.slug), ...named])];
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
