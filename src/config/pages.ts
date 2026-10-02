/**
 * Every indexable page, in one place.
 *
 * Feeds each page's `<head>` (see `pageMetadata`), its structured data,
 * the sitemap and `/llms.txt`, so a page's title and summary only have to
 * be written once.
 */
import { siteConfig } from "@/config/site";

export type PageEntry = {
  path: string;
  /** Short name, used in the title tag, breadcrumbs and llms.txt links. */
  title: string;
  description: string;
  /** The heading on the share card, when it should read differently from the title. */
  headline?: string;
  /** The small line above the share card's heading, in place of the title. */
  eyebrow?: string;
  /** The share card's file name, for a page whose last path segment isn't unique on the site. */
  ogName?: string;
  /** The day the page last changed, as YYYY-MM-DD, for the sitemap. Only set it from a real date. */
  lastModified?: string;
};

export const pages = {
  home: {
    path: "/",
    title: "Waitly: back in stock alerts and preorders for Shopify",
    headline: "Sold out is where the next sale starts.",
    description: siteConfig.description,
  },
  backInStock: {
    path: "/features/back-in-stock/",
    title: "Back in stock alerts",
    headline: "A Notify me button on every sold-out variant",
    description:
      "Add a Notify me button to sold-out Shopify products. Waitly detects restocks automatically and emails every shopper waiting, in your brand.",
  },
  preorders: {
    path: "/features/preorders/",
    title: "Preorders",
    headline: "Full-payment preorders for Shopify",
    description:
      "Take full-payment preorders on Shopify with Waitly. Rule-based policies, sold-out-only or date windows, unit limits, ship estimates and automatic order tags.",
  },
  restockRelease: {
    path: "/features/restock-release/",
    title: "Restock release and waitlist priority",
    headline: "Decide who hears about a restock first",
    description:
      "Decide who hears about a restock first. Waitly Pro puts VIPs and top spenders at the front, sends alerts in batches until sold out, or holds a unit for each of the first shoppers.",
  },
  analytics: {
    path: "/features/analytics/",
    title: "Demand analytics",
    headline: "Know what to restock, and how much",
    description:
      "See what Waitly alerts recover, score every waiting product from 0 to 100, and get a restock suggestion built from real demand, preorders and sales.",
  },
  comingSoon: {
    path: "/features/coming-soon/",
    title: "Coming Soon pages and product voting",
    headline: "Find out what sells before you make it",
    description:
      "Collect “I want this” signups before launch and let shoppers vote on what you make next. Waitly emails everyone the moment it goes on sale.",
  },
  pricing: {
    path: "/pricing/",
    title: "Pricing",
    headline: "Free to start. Growth $19, Pro $49 a month.",
    description:
      "Waitly is free to start. Growth is $19 a month and Pro is $49 a month, each with a 14-day free trial, billed through Shopify.",
  },
  setup: {
    path: "/setup/",
    title: "Setup guide",
    headline: "Set up Waitly in two steps, with no code",
    description:
      "Set up Waitly in two steps: add the Notify me block to your product page and test it on a sold-out product. No code, any Online Store 2.0 theme.",
  },
  guide: {
    path: "/guide/",
    title: "User guide",
    headline: "How to use every part of Waitly",
    description:
      "Step-by-step guides with screenshots for every Waitly feature: Notify me, waitlists, preorders, restock release, Coming Soon, voting, analytics, emails, settings and billing.",
  },
  useCases: {
    path: "/use-cases/",
    title: "Use cases",
    headline: "What to do when a product is sold out, late or not launched yet",
    description:
      "Practical answers for Shopify stores: back in stock notifications, sold-out sizes, selling while out of stock, late preorders, small restocks and how much to reorder.",
  },
  faq: {
    path: "/faq/",
    title: "Questions and answers",
    description: "Answers about Waitly setup, back in stock alerts, preorders, billing and privacy.",
  },
  privacy: {
    path: "/privacy/",
    title: "Privacy policy",
    description:
      "What data Waitly collects, why, where it is processed, how long it is kept and how to have it removed.",
  },
  dpa: {
    path: "/dpa/",
    title: "Data protection agreement",
    description: "The data protection agreement between OctaByte and merchants who install Waitly.",
  },
} satisfies Record<string, PageEntry>;

export type PageKey = keyof typeof pages;
