import type { MetadataRoute } from "next";
import { pages, type PageEntry } from "@/config/pages";
import { siteConfig } from "@/config/site";
import { guideEntries } from "@/content/guide";
import { useCaseEntries } from "@/content/use-cases";

export const dynamic = "force-static";

const newest = (dates: (string | undefined)[]) =>
  dates.filter((date): date is string => Boolean(date)).sort().at(-1);

/** A hub changes whenever one of its pages does, so it carries the newest date among them. */
const hubDates: Record<string, string | undefined> = {
  [pages.useCases.path]: newest(useCaseEntries.map((entry) => entry.lastModified)),
  [pages.guide.path]: newest([pages.guide.lastModified, ...guideEntries.map((entry) => entry.lastModified)]),
};

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: PageEntry[] = [...Object.values(pages), ...guideEntries, ...useCaseEntries];
  return entries.map((page) => {
    const lastModified = hubDates[page.path] ?? page.lastModified;
    return {
      url: new URL(page.path, siteConfig.url).toString(),
      ...(lastModified ? { lastModified } : {}),
      changeFrequency: "monthly",
      priority: page.path === "/" ? 1 : 0.7,
    };
  });
}
