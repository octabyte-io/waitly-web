"use client";

import Link from "next/link";
import { useDeferredValue, useMemo, useState } from "react";
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

/** Lowercase, and without hyphens, so “pre-order” finds “preorder”. */
const fold = (s: string) => s.toLowerCase().replace(/[-‐‑]/g, "");

/** The words of a query. A trailing “s” is dropped so “waitlists” finds “waitlist”. */
const wordsOf = (query: string) =>
  fold(query)
    .split(/[^\p{L}\p{N}]+/u)
    .filter(Boolean)
    .map((w) => (w.length > 3 && w.endsWith("s") ? w.slice(0, -1) : w));

/**
 * Every article by section. Typing in the search box swaps the sections for
 * one list of the articles that contain every word, best match first.
 */
export function GuideIndex({ sections }: { sections: IndexSection[] }) {
  const [query, setQuery] = useState("");
  const words = wordsOf(useDeferredValue(query));
  const searching = words.length > 0;

  const index = useMemo(
    () =>
      sections.flatMap((s) =>
        s.articles.map((a) => ({
          ...a,
          section: s.title,
          inTitle: fold(a.title),
          inSummary: fold(a.summary),
          inText: fold(a.text),
        })),
      ),
    [sections],
  );

  // A word in the title counts for more than one in the summary or the steps.
  const results = searching
    ? index
        .filter((a) => words.every((w) => a.inText.includes(w)))
        .map((a) => ({
          ...a,
          score: words.reduce(
            (n, w) => n + (a.inTitle.includes(w) ? 4 : a.inSummary.includes(w) ? 2 : 1),
            0,
          ),
        }))
        .sort((a, b) => b.score - a.score)
    : [];

  return (
    <>
      <label className="relative mt-10 block max-w-xl">
        <span className="sr-only">Search the guide</span>
        <Search aria-hidden="true" className="pointer-events-none absolute top-1/2 left-5 z-10 size-5 -translate-y-1/2 text-ink-soft" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setQuery("");
          }}
          placeholder="Search, e.g. “preorder”, “logo”, “CSV”"
          className="glass-thin h-14 w-full rounded-full pr-5 pl-13 text-[1.0625rem] placeholder:text-ink-soft/80 focus:outline-2 focus:outline-offset-2 focus:outline-ink"
        />
      </label>

      {searching ? (
        <section aria-live="polite" className="glass mt-8 rounded-[1.75rem] p-6 sm:p-8">
          {results.length > 0 ? (
            <>
              <h2 className="text-d3 font-semibold tracking-[-0.02em]">
                {results.length} {results.length === 1 ? "guide" : "guides"} for “{query.trim()}”
              </h2>
              <ul className="mt-5 divide-y divide-line border-t border-line">
                {results.map((a) => (
                  <li key={a.slug}>
                    <Link href={`/guide/${a.slug}/`} className="group block py-3.5">
                      <span className="block text-[0.8125rem] text-ink-soft">{a.section}</span>
                      <span className="flex flex-wrap items-center gap-2 font-semibold group-hover:underline">
                        {a.title}
                        {a.level ? <PlanBadge level={a.level} className="h-5 px-2 text-[0.6875rem]" /> : null}
                      </span>
                      <span className="mt-0.5 block text-[0.9375rem] text-ink-soft">{a.summary}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="text-lead text-ink-soft">
              Nothing matches “{query.trim()}”. Try another word, or email us and we’ll point you to it.
            </p>
          )}
        </section>
      ) : (
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {sections.map((section) => (
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
        </div>
      )}
    </>
  );
}
