import type { GuideArticle } from "../types";

export const article: GuideArticle = {
  slug: "preorder-volume",
  section: "analytics",
  title: "See preorder volume by variant",
  summary:
    "See how many units shoppers have preordered on each variant, and for how much, over any date range.",
  level: "pro",
  before: ["You’re on the Pro plan.", "Shoppers have placed at least one preorder."],
  steps: [
    {
      title: "Find Preorder volume on Analytics",
      body: [
        "Select **Analytics** in the Waitly menu and scroll to **Preorder volume** in the **Over time** section. It lists the 10 variants with the most units preordered.",
        "The date menu next to **Over time** sets the range, by the date each order was placed.",
      ],
      shot: {
        src: "/guide/preorder-volume/01-summary.jpg",
        width: 1267,
        height: 256,
        alt: "The Preorder volume table on Analytics, with Variant, Units and Amount columns for three variants and a View all link.",
        frame: "admin",
        highlights: [
          { x: 92.8, y: 2.4, w: 5.0, h: 9.4, label: "Open the full list" },
          { x: 69.3, y: 13.3, w: 17.7, h: 70.7, label: "Units and what shoppers paid" },
        ],
      },
      aside: {
        kind: "note",
        text: "Below Pro, the variant names show but Units and Amount are dashes.",
      },
    },
    {
      title: "Open the full list",
      body: [
        "Select **View all** to open the **Preorder volume** page. It lists every variant with preorders in the range, most units first, 50 to a page.",
        "The page has its own date menu. Select **Analytics** at the top to go back.",
      ],
      shot: {
        src: "/guide/preorder-volume/02-page.jpg",
        width: 1230,
        height: 402,
        alt: "The Preorder volume page with a date range menu and a table of variants with thumbnails, Units and Amount.",
        frame: "admin",
        highlights: [
          { x: 79.9, y: 22.5, w: 17.5, h: 9.2, label: "This page’s date range" },
          { x: 4.1, y: 2.9, w: 6.2, h: 7.2, label: "Back to Analytics" },
          { x: 68.9, y: 35.0, w: 18.3, h: 47.2, label: "Units and amount" },
        ],
      },
    },
    {
      title: "Read units and amounts",
      body: [
        "**Units** is how many units were preordered, less any cancelled or refunded. Units that have shipped still count, because they were preorder demand.",
        "**Amount** is what shoppers paid for those units. If you sell in more than one currency, each currency gets its own line, and amounts aren’t converted.",
      ],
      aside: {
        kind: "tip",
        text: "Preordered units also feed each product’s Demand Score, and unshipped ones count toward its suggested restock.",
      },
    },
  ],
  faqs: [
    {
      q: "Why does it say “No preorders in this period”?",
      a: "No preorder was placed in the date range you picked. Choose a longer range, such as All time.",
    },
    {
      q: "Is preorder volume part of recovered revenue?",
      a: "No. Preorder volume is money shoppers paid for preorders. Recovered revenue only counts sales that came after a Waitly restock alert.",
    },
  ],
  related: ["manage-preorders", "demand-score", "analytics-overview"],
};
