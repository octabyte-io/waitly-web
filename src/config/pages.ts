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
  /** Short name, used in breadcrumbs, llms.txt links and the title tag when there is no `metaTitle`. */
  title: string;
  /**
   * The title tag, when it should carry the search phrase and the short name can't.
   * At most 60 characters. The layout adds " | Waitly" unless it already names Waitly.
   */
  metaTitle?: string;
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
    metaTitle: "Waitly: waitlist, back in stock and preorder app for Shopify",
    headline: "Sold out is where the next sale starts.",
    description: siteConfig.description,
    lastModified: "2026-11-05",
  },
  backInStock: {
    path: "/features/back-in-stock/",
    title: "Back in stock alerts",
    metaTitle: "Back in stock alerts app for Shopify: a Notify me button",
    headline: "A Notify me button on every sold-out variant",
    description:
      "Add a Notify me button to sold-out Shopify variants. Waitly spots the restock and emails every shopper on the waitlist, in your brand. Free plan to start.",
    lastModified: "2026-11-05",
  },
  preorders: {
    path: "/features/preorders/",
    title: "Preorders",
    metaTitle: "Preorder app for Shopify: full-payment preorders",
    headline: "Full-payment preorders for Shopify",
    description:
      "Take full-payment preorders on Shopify with Waitly: policies by rule, a sold-out switch, date windows, unit limits, ship estimates and delay notices.",
    lastModified: "2026-11-05",
  },
  restockRelease: {
    path: "/features/restock-release/",
    title: "Restock release and waitlist priority",
    metaTitle: "Waitlist priority and restock release for Shopify",
    headline: "Decide who hears about a restock first",
    description:
      "Put VIPs and top spenders first on the waitlist, send restock alerts in batches until it sells out, or hold a unit for the first shoppers. On Waitly Pro.",
    lastModified: "2026-11-05",
  },
  analytics: {
    path: "/features/analytics/",
    title: "Demand analytics",
    metaTitle: "Waitlist demand analytics and restock planning for Shopify",
    headline: "Know what to restock, and how much",
    description:
      "See what Waitly alerts recover, score every waiting product from 0 to 100, and get a restock suggestion for Shopify built from demand, preorders and sales.",
    lastModified: "2026-11-05",
  },
  comingSoon: {
    path: "/features/coming-soon/",
    title: "Coming soon products and product voting",
    metaTitle: "Coming soon products and product voting for Shopify",
    headline: "Find out what sells before you make it",
    description:
      "Mark a sold-out Shopify product Coming soon to take “I want this” signups, or let shoppers vote on ideas. Waitly emails everyone the moment it goes on sale.",
    lastModified: "2026-11-05",
  },
  pricing: {
    path: "/pricing/",
    title: "Pricing",
    metaTitle: "Waitly pricing: Free, Growth $19 and Pro $49 a month",
    headline: "Free to start. Growth $19, Pro $49 a month.",
    description:
      "Waitly is free to start. Growth is $19 a month and Pro is $49 a month, each with a 14-day free trial and billed through Shopify. Compare every feature.",
    lastModified: "2026-11-05",
  },
  setup: {
    path: "/setup/",
    title: "Setup guide",
    metaTitle: "How to set up Waitly on Shopify in two steps",
    headline: "Set up Waitly in two steps, with no code",
    description:
      "Set up Waitly in two steps: add the Notify me block to your product page and test it on a sold-out product. No code, any Online Store 2.0 theme.",
    lastModified: "2026-11-05",
  },
  guide: {
    path: "/guide/",
    title: "User guide",
    metaTitle: "Waitly user guide: how to use every feature",
    headline: "How to use every part of Waitly",
    description:
      "Step-by-step Waitly help with screenshots: Notify me, waitlists, preorders, restock release, Coming soon, voting, analytics, emails, settings and billing.",
    lastModified: "2026-11-05",
  },
  useCases: {
    path: "/use-cases/",
    title: "Use cases",
    metaTitle: "What to do when a Shopify product is out of stock",
    headline: "What to do when a product is sold out, late or not launched yet",
    description:
      "Answers for Shopify stores: back in stock notifications, sold-out sizes, selling while out of stock, late preorders, small restocks and how much to reorder.",
  },
  faq: {
    path: "/faq/",
    title: "Questions and answers",
    metaTitle: "Waitly FAQ: setup, back in stock alerts and preorders",
    description:
      "Answers about Waitly: setup and themes, how back in stock alerts are sent, preorder payment and cancelling, plans and billing, and what shopper data is kept.",
    lastModified: "2026-11-05",
  },
  privacy: {
    path: "/privacy/",
    title: "Privacy policy",
    description:
      "What data Waitly collects, why, where it is processed, how long it is kept and how to have it removed.",
    lastModified: "2026-09-29",
  },
  dpa: {
    path: "/dpa/",
    title: "Data protection agreement",
    description: "The data protection agreement between OctaByte and merchants who install Waitly.",
    lastModified: "2026-09-29",
  },
} satisfies Record<string, PageEntry>;

export type PageKey = keyof typeof pages;
