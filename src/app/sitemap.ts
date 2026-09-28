import type { MetadataRoute } from "next";
import { featureNav, siteConfig } from "@/config/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", ...featureNav.map((item) => item.href), "/pricing/", "/setup/", "/faq/", "/privacy/", "/dpa/"];
  return paths.map((path) => ({
    url: new URL(path, siteConfig.url).toString(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
