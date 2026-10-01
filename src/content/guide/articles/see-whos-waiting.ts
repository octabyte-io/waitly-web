import type { GuideArticle } from "../types";

export const article: GuideArticle = {
  slug: "see-whos-waiting",
  section: "waitlists",
  title: "See who’s waiting for a product",
  summary:
    "Open one product’s waitlist, read its totals and cards, and see every shopper on it and what happened to them.",
  before: ["Waitly is installed and at least one shopper has signed up with Notify me."],
  steps: [
    {
      title: "Open the product’s waitlist",
      body: [
        "In your Shopify admin, choose **Apps** and then **Waitly**. Waitly opens on **Home**, where **Most wanted** lists the five waitlists with the most shoppers waiting.",
        "Select a product name to open its waitlist, or select **View all** to see every waitlist on the **Waitlists** page.",
      ],
      shot: {
        src: "/guide/see-whos-waiting/01-home.jpg",
        width: 1512,
        height: 810,
        alt: "Waitly Home, with Shoppers waiting, Live waitlists and Recovered revenue at the top, the Most wanted list of five waitlists with a View all button, and Restock next below it.",
        frame: "admin",
        highlights: [
          { x: 0.1, y: 56.9, w: 14.8, h: 4.2, label: "Open Waitly from Apps" },
          { x: 29.8, y: 37.8, w: 12.2, h: 3.7, label: "Select a product to open its waitlist" },
          { x: 81.3, y: 70.8, w: 5.5, h: 4.4, label: "See every waitlist" },
        ],
      },
      aside: {
        kind: "tip",
        text: "You can also reach every waitlist from **Waitlists** in the Waitly menu on the left of your Shopify admin.",
      },
    },
    {
      title: "Read the totals at the top",
      body: [
        "The page is named after the product or variant. A **Variant** badge means shoppers are waiting for that one size or color. An **Any variant** badge means they’ll take any variant of the product. **View in Shopify** opens the item in your Shopify admin.",
        "Below it are three numbers: **Waiting** (shoppers still due an alert), **Alerted, still deciding** (alerted, and still inside the time set by **Hold a restock alert for** in Settings; if they don’t buy by then, they go back to waiting) and **Bought after alert** (shoppers who bought after Waitly told them it was back).",
      ],
      shot: {
        src: "/guide/see-whos-waiting/02-waitlist.jpg",
        width: 1273,
        height: 757,
        alt: "The top of the waitlist for The Complete Snowboard - Ice: the product’s picture, name and Variant badge, a View in Shopify button, and the totals Waiting 8, Alerted, still deciding 6 and Bought after alert 3.",
        frame: "admin",
        highlights: [
          { x: 18.8, y: 14.9, w: 5.5, h: 3.8, label: "Variant or Any variant" },
          { x: 87.5, y: 1.4, w: 9.6, h: 4.6, label: "Open the item in Shopify" },
          { x: 13.5, y: 21.5, w: 72.9, h: 11.9, label: "This waitlist’s totals" },
        ],
      },
      aside: {
        kind: "note",
        text: "A **Deleted in Shopify** badge means the product is gone from your store. Waitly keeps its waitlist so you can still see what happened.",
      },
    },
    {
      title: "Check the Coming Soon card",
      body: [
        "If the product is marked Coming Soon, a **Coming Soon** card shows when it was marked and whether the form is showing on your store. On Pro it also shows how many are waiting and how they joined, **Most wanted** variants, **Units wanted** and, if you ask for it, **Shopping country**.",
        "If the mark has ended but shoppers who joined through **I want this** are still waiting, the card stays and reads **No longer marked**. Other products don’t show this card.",
      ],
      shot: {
        src: "/guide/see-whos-waiting/03-coming-soon.jpg",
        width: 961,
        height: 463,
        alt: "The Coming Soon card on a waitlist: a Form hidden badge (the product has stock for sale), the date it was marked, 22 waiting (14 I want this, 8 Notify me), and the Most wanted, Units wanted and Shopping country lists.",
        frame: "admin",
        highlights: [
          { x: 3.5, y: 12.4, w: 41.9, h: 8.8, label: "When it was marked" },
          { x: 3.5, y: 40.9, w: 93.2, h: 51.3 },
        ],
      },
    },
    {
      title: "Read the Demand Score card",
      body: [
        "On Pro, the **Demand Score** card rates how strongly shoppers want this item from 0 to 100, says what to do, and lists **What drives it**. The **Restock suggestion** beside it estimates how many units to order and shows the working.",
        "On an **Any variant** waitlist, the score covers the whole product: its variants plus the shoppers who’ll take any variant.",
      ],
      shot: {
        src: "/guide/see-whos-waiting/04-demand-score.jpg",
        width: 961,
        height: 698,
        alt: "The Demand Score card on an Any variant waitlist: a High badge with 64 / 100, Keep an eye on stock, What drives it with three reasons and Show 4 more, and a Restock suggestion box that adds up each variant’s estimate to Order 220 units.",
        frame: "admin",
        highlights: [
          { x: 3.5, y: 8.0, w: 11.9, h: 4.1, label: "Score from 0 to 100" },
          { x: 3.5, y: 19.7, w: 18.8, h: 14.8 },
          { x: 50.4, y: 8.3, w: 46.2, h: 87.9, label: "Estimated units to restock" },
        ],
      },
      aside: {
        kind: "note",
        text: "Demand Score is on Pro. On other plans the card shows one line saying what it would add.",
      },
    },
    {
      title: "See who holds a unit right now",
      body: [
        "If you reserve units for the first shoppers, a **Held now** card lists each shopper holding a unit, their **Place in line** and **Held until**. It only appears while a hold is running.",
        "To end a hold early, select **Remove** on that shopper. The unit then goes to the next shopper in line.",
      ],
      shot: {
        src: "/guide/see-whos-waiting/05-held-now.jpg",
        width: 961,
        height: 258,
        alt: "The Held now card: a short note and a table of three shoppers with their place in line, the time their hold ends, and a Remove link.",
        frame: "admin",
        highlights: [
          { x: 52.6, y: 38.9, w: 18.6, h: 45.4, label: "When each hold ends" },
          { x: 84.0, y: 50.6, w: 6.3, h: 8.6, label: "End a hold early" },
        ],
      },
    },
    {
      title: "Read the shopper list",
      body: [
        "The **Shoppers** card lists everyone who signed up, with their email, **Status**, when they **Joined**, their **Last alert** and how many **Alerts** they’ve had. Times are in your store’s time zone, which is named in the column header.",
        "On Pro, the list is in queue order and **Position** shows each shopper’s place in line. **Alert out** means they’ve been alerted and are still deciding. If you’ve turned on waitlist priority, **Why** shows what put them there: **VIP**, **High-value**, **Tagged** or **Ordered before**, and **Standard** for everyone else. **Sort** switches between **Queue order** and **Newest first**.",
      ],
      shot: {
        src: "/guide/see-whos-waiting/06-shoppers.jpg",
        width: 961,
        height: 644,
        alt: "The Shoppers card: a Search by email field, Sort button, status filters, and a table with Position, Why, Shopper, Status, Joined, Last alert, Alerts and Remove. Positions 1 to 8 are waiting, marked VIP, Ordered before or Standard, and alerted shoppers read Alert out.",
        frame: "admin",
        highlights: [
          { x: 2.3, y: 21.9, w: 16.8, h: 5.4, label: "Place in line and why" },
          { x: 89.7, y: 10.7, w: 7.5, h: 5.7, label: "Queue order or Newest first" },
          { x: 85.7, y: 4.1, w: 11.6, h: 5.5 },
        ],
      },
      aside: {
        kind: "note",
        text: "Below Pro, the list is newest first and the Position column is empty. There’s no Sort button and no Why column.",
      },
    },
    {
      title: "Filter by what happened",
      body: [
        "Use the filters above the table to show one status at a time. Each shows how many shoppers it holds, and only statuses this waitlist has are listed. Type in **Search by email** and select **Search** to find one shopper.",
        "The statuses are **Waiting**, **Alerted, still deciding**, **Bought after alert**, **Bought anyway** (bought without an alert that counts), **Unsubscribed** (the shopper stopped alerts), **Expired** (too old, or alerted as many times as your settings allow), **Cannot be emailed** (their address bounced or marked mail as spam) and **Removed by you**.",
      ],
      shot: {
        src: "/guide/see-whos-waiting/07-filters.jpg",
        width: 961,
        height: 292,
        alt: "The Shoppers card filtered to Bought after alert, with the filter row showing All, Waiting, Alerted, still deciding, Bought after alert, Bought anyway and Unsubscribed with their counts.",
        frame: "admin",
        highlights: [
          { x: 2.6, y: 36.7, w: 66.4, h: 8.4, label: "Show one status at a time" },
          { x: 2.6, y: 24.4, w: 80.5, h: 11.1, label: "Find one shopper" },
        ],
      },
      aside: {
        kind: "tip",
        text: "To download the list, see Export a waitlist as CSV. To take someone off it, see Remove a shopper from a waitlist.",
      },
    },
  ],
  faqs: [
    {
      q: "Why is a shopper listed but not counted as waiting?",
      a: "Waiting counts only shoppers still due an alert. Anyone who bought, unsubscribed, expired or was removed keeps their row so you can see what happened.",
    },
    {
      q: "Can shoppers see where they are in the line?",
      a: "On Pro, the confirmation email can show their place in line. Turn it on or off under Settings, Waitlist priority.",
    },
    {
      q: "Why did a shopper’s row disappear?",
      a: "Waitly keeps waitlist demand for the number of days you set under Settings, Data retention. Older rows are removed after that.",
    },
  ],
  related: ["export-waitlist", "remove-a-shopper", "waitlist-priority"],
};
