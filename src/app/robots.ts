import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

/**
 * Search and AI crawlers named outright, so the site stays citable in AI
 * answers even if the catch-all rule is ever tightened.
 */
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
  "DuckAssistBot",
  "meta-externalagent",
  "MistralAI-User",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // The App Store review screencast is for Shopify's reviewers, not search.
      { userAgent: "*", allow: "/", disallow: "/review/" },
      { userAgent: AI_CRAWLERS, allow: "/", disallow: "/review/" },
    ],
    sitemap: new URL("/sitemap.xml", siteConfig.url).toString(),
  };
}
