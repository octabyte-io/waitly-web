import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Band, SectionHeading } from "@/components/site/primitives";
import { articlesIn, guidePath } from "@/content/guide";
import type { GuideSectionKey } from "@/content/guide/types";

/** The user guide's articles for one feature, listed at the foot of its feature page. */
export function GuideLinks({ sections }: { sections: GuideSectionKey[] }) {
  const articles = sections.flatMap(articlesIn);
  if (articles.length === 0) return null;
  return (
    <Band tone="paper">
      <SectionHeading
        title="How to set it up"
        intro="Step-by-step guides with screenshots from the Waitly admin."
      />
      <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((a) => (
          <li key={a.slug}>
            <Link
              href={guidePath(a.slug)}
              className="group flex h-full items-start justify-between gap-3 glass-thin rounded-2xl px-5 py-4 transition-colors hover:bg-white/80"
            >
              <span>
                <span className="font-semibold group-hover:underline">{a.title}</span>
                <span className="mt-1 block text-[0.9375rem] text-ink-soft">{a.summary}</span>
              </span>
              <ArrowRight aria-hidden="true" className="mt-1 size-4 shrink-0 text-ink-soft" />
            </Link>
          </li>
        ))}
      </ul>
    </Band>
  );
}
