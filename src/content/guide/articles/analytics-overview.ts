import type { GuideArticle } from "../types";

export const article: GuideArticle = {
  slug: "analytics-overview",
  section: "analytics",
  title: "Read your analytics",
  summary:
    "See how many shoppers are waiting, what your alerts recovered, and how the rest of the demand ended.",
  before: ["At least one shopper has joined a waitlist. Until then, Analytics shows only a setup message."],
  steps: [
    {
      title: "Open Analytics",
      body: [
        "In the Waitly menu on the left of your Shopify admin, select **Analytics**.",
        "The page reads from top to bottom: what’s true right now, the products to restock, your results, and then **Over time**, which you can filter by date.",
      ],
      shot: {
        src: "/guide/analytics-overview/01-analytics.jpg",
        width: 1512,
        height: 810,
        alt: "The Analytics page in the Shopify admin, with Analytics selected in the Waitly menu, the Right now card at the top and Variant demand below it.",
        frame: "admin",
        highlights: [
          { x: 0.1, y: 63.4, w: 14.8, h: 4.4, label: "Open Analytics" },
        ],
      },
      aside: {
        kind: "note",
        text: "Analytics is on every plan. On Free, a banner offers Growth to see what your alerts recovered. On Growth, a banner offers Pro for variant demand, trends and preorder volume. You can close either banner.",
      },
    },
    {
      title: "Read Right now",
      body: [
        "**Right now** shows **Shoppers waiting**, **Live waitlists** (items with at least one shopper waiting or still deciding) and **Alerted, still deciding** (shoppers who got an alert and are still inside the time set by **Hold a restock alert for** in Settings).",
        "These describe this moment, so the date range doesn’t change them. Select **Shoppers waiting** or **Live waitlists** to open the **Waitlists** page.",
      ],
      shot: {
        src: "/guide/analytics-overview/02-right-now.jpg",
        width: 1267,
        height: 211,
        alt: "The Right now card: Shoppers waiting 212, Live waitlists 15 and Alerted, still deciding 6, with a note that a date range does not apply.",
        frame: "admin",
        highlights: [
          { x: 2.6, y: 47.3, w: 39.9, h: 23.5, label: "Open the Waitlists page" },
          { x: 2.0, y: 29.7, w: 35.8, h: 10.2 },
        ],
      },
    },
    {
      title: "See demand by variant",
      body: [
        "On Pro, **Variant demand** lists the 10 waitlists with the most shoppers waiting (a variant, or a product shoppers will take in any variant), with their **Stock**, **Waiting**, **Demand Score** and **Potential revenue**. Select **View all** to see every waitlist.",
        "The **Potential revenue** box above it estimates what everyone waiting could spend if their items came back, based on how often your alerts have led to a sale. It starts once your store has sent 100 restock alerts.",
      ],
      shot: {
        src: "/guide/analytics-overview/03-variant-demand.jpg",
        width: 1267,
        height: 866,
        alt: "The Variant demand section: a Potential revenue box reading About $16,280 USD, then a table of ten waitlists with Stock, Waiting, Demand Score and Potential revenue, and a View all link.",
        frame: "admin",
        highlights: [
          { x: 2.2, y: 10.9, w: 95.5, h: 15.5, label: "Estimate of what waiting shoppers could spend" },
          { x: 2.1, y: 94.1, w: 5.0, h: 3.5 },
        ],
      },
      aside: {
        kind: "tip",
        text: "The **Demand Score** section below it ranks products to restock. See Plan restocks with Demand Score.",
      },
    },
    {
      title: "Read your results",
      body: [
        "On Growth and Pro, **Results** shows your **Recovered revenue**: sales from shoppers who bought what they were waiting for after a Waitly alert. It covers all time across your whole shop, less anything refunded or never collected.",
        "**How the demand ended** counts shoppers by how their wait ended: **Bought after alert**, **Bought anyway**, **Expired**, **Unsubscribed**, **Cannot be emailed** and **Removed by you**.",
      ],
      shot: {
        src: "/guide/analytics-overview/04-results.jpg",
        width: 1267,
        height: 256,
        alt: "The Results section: Recovered revenue of $11,896.40 USD, and How the demand ended with counts for Bought after alert, Bought anyway, Expired, Unsubscribed, Cannot be emailed and Removed by you.",
        frame: "admin",
        highlights: [
          { x: 2.6, y: 24.0, w: 17.8, h: 28.5, label: "Sales your alerts brought back" },
          { x: 2.2, y: 58.0, w: 95.6, h: 32.5, label: "How each wait ended" },
        ],
      },
      aside: {
        kind: "note",
        text: "On Free, Results shows dashes. Upgrade to Growth to see what your alerts recovered.",
      },
    },
    {
      title: "Choose a date range",
      body: [
        "In **Over time**, open the date menu and choose **All time**, **Last 24 hours**, **Last 7 days** or **Last 30 days**.",
        "The range applies to everything in that section: the trends, **Preorder volume** and **Restock alerts**. It doesn’t change **Right now** or **Results**.",
      ],
      shot: {
        src: "/guide/analytics-overview/05-date-range.jpg",
        width: 1267,
        height: 86,
        alt: "The Over time heading with the date range select, set to All time, on the right, and the line saying the range applies to everything in the section.",
        frame: "admin",
        highlights: [
          { x: 81.6, y: 15.7, w: 16.1, h: 36.1, label: "Choose a date range" },
        ],
      },
    },
  ],
  faqs: [
    {
      q: "When does a sale count as recovered?",
      a: "When a shopper buys the item they were waiting for within the number of days you set in Settings, Notifications, Count a sale as recovered for. The default is 7 days.",
    },
    {
      q: "Why does Recovered revenue show more than one amount?",
      a: "If your store has changed its currency, Waitly shows one total per currency rather than adding unlike amounts together.",
    },
  ],
  related: ["demand-score", "demand-over-time", "restock-alert-log"],
};
