import type { GuideArticle } from "../types";

export const article: GuideArticle = {
  slug: "variant-or-whole-product",
  section: "back-in-stock",
  title: "Wait for a variant or the whole product",
  summary: "Choose whether shoppers wait for the exact size or color they picked, or for any variant of the product.",
  before: ["The Notify me block is on your product page."],
  steps: [
    {
      title: "Open the block’s settings",
      body: [
        "In your Shopify admin, go to **Online Store** › **Themes** and select **Customize**. Choose **Products** › **Default product** from the menu at the top, then select **Notify me when available** in the block list.",
      ],
    },
    {
      title: "Choose what a shopper waits for",
      body: [
        "Set **What a shopper waits for** to one of two options:",
        "**The selected variant** (the default): the shopper waits for the exact variant they picked. They’re emailed only when that size or color comes back. Choose this when the difference matters, like shoe sizes.",
        "**The whole product**: the shopper waits for the product. They’re emailed when any variant comes back. Choose this when any variant will do, like a color they don’t mind.",
      ],
      shot: {
        src: "/guide/variant-or-whole-product/01-setting.jpg",
        width: 304,
        height: 490,
        alt: "The Notify me block’s settings in the theme editor sidebar, with the What a shopper waits for menu set to The selected variant.",
        frame: "admin",
        highlights: [
          { x: 9.5, y: 13.3, w: 82.2, h: 7.1, label: "The Notify me block, selected" },
          { x: 2.6, y: 70.0, w: 91.5, h: 9.0, label: "**What a shopper waits for**" },
        ],
      },
    },
    {
      title: "Save the theme",
      body: [
        "Select **Save**. The form looks the same either way, and it still only appears when the variant a shopper has chosen is sold out.",
        "The setting applies to new signups. Shoppers already waiting keep what they signed up for.",
      ],
    },
    {
      title: "See which kind each waitlist is",
      body: [
        "In Waitly, open **Waitlists**. A **Variant** badge means shoppers on that list are waiting for one variant. **Any variant** means they’re waiting for the whole product.",
      ],
      shot: {
        src: "/guide/variant-or-whole-product/02-badges.jpg",
        width: 1259,
        height: 699,
        alt: "The Waitlists page, with one row badged Variant and another badged Any variant.",
        frame: "admin",
        highlights: [
          { x: 20.5, y: 16.1, w: 5.5, h: 4.3, label: "Waiting for one variant" },
          { x: 17.9, y: 48.5, w: 7.3, h: 4.3, label: "Waiting for any variant" },
        ],
      },
    },
  ],
  faqs: [
    {
      q: "With “The whole product”, does an in-stock variant trigger an alert?",
      a: "No. An alert goes out when a variant comes back, meaning it goes from sold out to in stock. A variant that was already in stock doesn’t count. If every variant is already in stock when the shopper signs up, there’s nothing to wait for and the signup ends as Expired.",
    },
    {
      q: "Can a shopper wait for a variant and the whole product at once?",
      a: "Yes, if they signed up once each way, for example before and after you changed this setting. They’re two separate waitlists, and each one sends its own alert.",
    },
    {
      q: "Does a variant waitlist hear about a different variant coming back?",
      a: "No. A shopper waiting for one variant is only emailed about that variant.",
    },
  ],
  related: ["how-restock-alerts-work", "customize-notify-me-block", "browse-waitlists"],
};
