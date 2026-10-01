"use client";

import Link from "next/link";
import { useDeferredValue, useState } from "react";
import { Search } from "lucide-react";
import { PlanBadge } from "@/components/site/primitives";
import type { Level } from "@/content/plans";
import type { GuideSectionKey } from "@/content/guide/types";

export type IndexSection = {
  key: GuideSectionKey;
  title: string;
  blurb: string;
  articles: { slug: string; title: string; summary: string; level?: Level; text: string }[];
};

/** Every article by section, with a filter that searches titles, summaries and steps. */
export function GuideIndex({ sections }: { sections: IndexSection[] }) {
  const [query, setQuery] = useState("");
  const q = useDeferredValue(query.trim().toLowerCase());

  const shown = sections
    .map((s) => ({ ...s, articles: q ? s.articles.filter((a) => a.text.includes(q)) : s.articles }))
    .filter((s) => s.articles.length > 0);

  return (
    <>
      <label className="relative mt-10 block max-w-xl">
        <span className="sr-only">Search the guide</span>
        <Search aria-hidden="true" className="pointer-events-none absolute top-1/2 left-5 z-10 size-5 -translate-y-1/2 text-ink-soft" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search, e.g. “preorder”, “logo”, “CSV”"
          className="glass-thin h-14 w-full rounded-full pr-5 pl-13 text-[1.0625rem] placeholder:text-ink-soft/80 focus:outline-2 focus:outline-offset-2 focus:outline-ink"
        />
      </label>

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {shown.map((section) => (
          <section key={section.key} id={section.key} className="glass scroll-mt-28 rounded-[1.75rem] p-6 sm:p-8">
            <h2 className="text-d3 font-semibold tracking-[-0.02em]">{section.title}</h2>
            <p className="mt-1.5 text-ink-soft">{section.blurb}</p>
            <ul className="mt-5 divide-y divide-line border-t border-line">
              {section.articles.map((a) => (
                <li key={a.slug}>
                  <Link href={`/guide/${a.slug}/`} className="group block py-3.5">
                    <span className="flex flex-wrap items-center gap-2 font-semibold group-hover:underline">
                      {a.title}
                      {a.level ? <PlanBadge level={a.level} className="h-5 px-2 text-[0.6875rem]" /> : null}
                    </span>
                    <span className="mt-0.5 block text-[0.9375rem] text-ink-soft">{a.summary}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
        {shown.length === 0 ? (
          <p className="text-lead text-ink-soft md:col-span-2">
            Nothing matches “{query}”. Try another word, or email us and we’ll point you to it.
          </p>
        ) : null}
      </div>
    </>
  );
}
