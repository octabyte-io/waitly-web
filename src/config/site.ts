/**
 * Everything about the site that changes at launch lives here.
 *
 * - `url`: the public domain, used for canonical URLs, the sitemap and Open Graph.
 * - `installUrl`: swap for the Shopify App Store listing once it is live.
 * - `legal`: fill these in and every legal page updates. `null` renders a
 *   visible placeholder so an unfinished page cannot pass for a finished one.
 */
export const siteConfig = {
  name: "Waitly",
  company: "OctaByte",
  url: "https://waitly.octabyte.io",
  installUrl: "https://apps.shopify.com/search?q=waitly",
  supportEmail: "support@octabyte.io",
  description:
    "Waitly adds Notify me, preorders, Coming Soon pages and product voting to your Shopify store, emails shoppers the moment stock returns, and shows you what to restock next.",
  legal: {
    legalName: "OctaByte" as string | null,
    lastUpdated: "29 September 2026" as string | null,
  },
} as const;

export type NavItem = { href: string; label: string; blurb: string };

export const featureNav: NavItem[] = [
  {
    href: "/features/back-in-stock/",
    label: "Back in stock",
    blurb: "A Notify me button on sold-out products, and an email when they return.",
  },
  {
    href: "/features/preorders/",
    label: "Preorders",
    blurb: "Keep selling while you wait for stock, paid in full at checkout.",
  },
  {
    href: "/features/restock-release/",
    label: "Restock release",
    blurb: "Decide who hears first, and release stock in batches or held units.",
  },
  {
    href: "/features/analytics/",
    label: "Demand analytics",
    blurb: "Recovered revenue, Demand Score and how much to reorder.",
  },
  {
    href: "/features/coming-soon/",
    label: "Coming Soon and voting",
    blurb: "Collect demand before launch, and let shoppers pick what you make next.",
  },
];

export const mainNav: { href: string; label: string }[] = [
  { href: "/pricing/", label: "Pricing" },
  { href: "/use-cases/", label: "Use cases" },
  { href: "/setup/", label: "Setup" },
  { href: "/guide/", label: "Guide" },
  { href: "/faq/", label: "FAQ" },
];
