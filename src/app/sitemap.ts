import type { MetadataRoute } from "next";
import { pages } from "@/config/pages";
import { siteConfig } from "@/config/site";
import { guideEntries } from "@/content/guide";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [...Object.values(pages), ...guideEntries].map((page) => ({
    url: new URL(page.path, siteConfig.url).toString(),
    changeFrequency: "monthly",
    priority: page.path === "/" ? 1 : 0.7,
  }));
}
