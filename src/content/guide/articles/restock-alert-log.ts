import type { GuideArticle } from "../types";

export const article: GuideArticle = {
  slug: "restock-alert-log",
  section: "analytics",
  title: "Check how a restock alert went",
  summary:
    "Find each restock alert Waitly sent, see how many went out, and what happened to the rest.",
  before: ["At least one item shoppers were waiting for has come back in stock."],
  steps: [
    {
      title: "Find Restock alerts on Analytics",
      body: [
        "Select **Analytics** in the Waitly menu and scroll to the end of **Over time**. **Restock alerts** lists each time Waitly told shoppers an item was back, newest first, 25 to a page.",
        "The date menu next to **Over time** filters the list by when each alert started sending. Use the arrows under the table to see older pages.",
      ],
      shot: {
        src: "/guide/restock-alert-log/01-log.jpg",
        width: 1267,
        height: 552,
        alt: "The Restock alerts table on Analytics, with Sent, Item, Status, Queued, Delivered, Not sent, Held, Withheld, Failed, Bought and Rate columns and thirteen alerts, newest first.",
        frame: "admin",
        highlights: [
          { x: 2.0, y: 1.2, w: 8.3, h: 4.5 },
          { x: 2.8, y: 6.5, w: 5.1, h: 5.0, label: "When the alert started" },
        ],
      },
    },
    {
      title: "Read when, what and where it’s up to",
      body: [
        "**Sent** is when the alert started going out. Point at the header to see which time zone it’s in. **Item** is the product or variant; select it to open its waitlist. A **Launch** badge means it was a Coming Soon launch rather than a restock.",
        "**Status** is **Sending** or **Complete**. When you release stock in batches, a line under **Sending** says which batch it’s on, for example “Batch 2 of 5 · next at 14:00”. When you reserve units, it says how many are held now and when the next hold ends.",
      ],
      shot: {
        src: "/guide/restock-alert-log/02-status.jpg",
        width: 612,
        height: 266,
        alt: "The first rows of the Restock alerts table: one Sending with “Batch 3 of 4 · next at 17:19” under it, one Sending with “3 held now · next ends 13:14”, one with a Launch badge, and others marked Complete.",
        frame: "admin",
        highlights: [
          { x: 67.7, y: 17.1, w: 25.2, h: 19.6, label: "Where a batched send is up to" },
          { x: 53.0, y: 75.3, w: 10.4, h: 8.7, label: "A Coming Soon launch" },
        ],
      },
      aside: {
        kind: "note",
        text: "“Not reserved: draft-order access is missing” means your settings reserve units, but Waitly couldn’t create draft orders, so the alert went out to everyone at once. Open Settings, Restock release, and allow Waitly to create draft orders.",
      },
    },
    {
      title: "Read how many went out",
      body: [
        "**Queued** is how many alerts Waitly started to send. **Delivered** is how many of them the email service accepted.",
        "On Pro, **Not sent** counts shoppers still left when batches stopped because the item sold out or the send ran out of time. They stay on the waitlist for next time.",
      ],
    },
    {
      title: "Check held units",
      body: [
        "On Pro, when you reserve units for the first shoppers, **Held** shows how many units were held. Point at the number to see how many **sold**, **lapsed** (the time ran out and the shopper is still waiting) or were **released** (the shopper left the waitlist).",
        "A dash means the alert didn’t hold any units.",
      ],
      shot: {
        src: "/guide/restock-alert-log/03-held.jpg",
        width: 830,
        height: 200,
        alt: "A Held figure of 5 in the Restock alerts table with its tooltip reading “1 sold · 0 lapsed · 1 released”.",
        frame: "admin",
        highlights: [
          { x: 51.7, y: 47.5, w: 21.7, h: 15.0, label: "Sold, lapsed and released units" },
        ],
      },
    },
    {
      title: "Look for Withheld and Failed",
      body: [
        "These two columns only appear when at least one alert on the page has them. **Withheld** means Waitly didn’t send those alerts because your plan’s restock alerts for this billing cycle were used up. **Failed** means the email service refused an alert or it hit an error.",
      ],
      aside: {
        kind: "warning",
        text: "Withheld alerts are shoppers you didn’t reach. Check your usage under Billing, and consider a bigger plan if it happens often.",
      },
    },
    {
      title: "See what the alert sold",
      body: [
        "On Growth and Pro, **Bought** counts purchases the alert led to, and **Rate** is how many of the delivered alerts led to a purchase. **Rate** shows a dash when nothing was delivered.",
        "A held unit counts as sold whoever bought it, so the sold figure under **Held** and **Bought** can differ.",
      ],
      shot: {
        src: "/guide/restock-alert-log/04-bought.jpg",
        width: 640,
        height: 528,
        alt: "The right-hand columns of the Restock alerts table, Queued through Rate, with Bought figures such as 1 and 2 and Rates such as 20% and 50%.",
        frame: "admin",
        highlights: [
          { x: 75.0, y: 2.4, w: 14.0, h: 94.4, label: "Purchases the alert led to" },
          { x: 89.2, y: 2.4, w: 9.2, h: 94.4, label: "Share of delivered alerts that sold" },
        ],
      },
    },
  ],
  faqs: [
    {
      q: "Why is Queued bigger than Delivered?",
      a: "Queued counts every alert Waitly started to send. Some may still be sending, and some may have failed. Withheld and Not sent shoppers are counted in their own columns, not in Queued.",
    },
    {
      q: "Why don’t I see an alert I expected?",
      a: "Check the date range next to Over time. The list only shows alerts that started in that range.",
    },
  ],
  related: ["how-restock-alerts-work", "release-in-batches", "allowances-and-usage"],
};
