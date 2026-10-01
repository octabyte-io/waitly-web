import type { GuideArticle } from "../types";

export const article: GuideArticle = {
  slug: "browse-waitlists",
  section: "waitlists",
  title: "Browse every waitlist",
  summary:
    "Search and sort all your waitlists on one page, and see which products shoppers want most.",
  before: ["Waitly is installed and at least one shopper has signed up with Notify me."],
  steps: [
    {
      title: "Open Waitlists",
      body: [
        "In the Waitly menu on the left of your Shopify admin, select **Waitlists**. You can also select **View all** under **Most wanted** on Home.",
        "Each row is one waitlist. A variant and its product are separate rows, so a product with three sold-out sizes can show up three times. The list starts with the waitlists that have the most shoppers waiting.",
      ],
      shot: {
        src: "/guide/browse-waitlists/01-waitlists.jpg",
        width: 1512,
        height: 810,
        alt: "The Waitlists page in the Shopify admin, with the Waitlists item selected in the Waitly menu and a table of waitlists sorted by Waiting, The Videographer Snowboard first with 32.",
        frame: "admin",
        highlights: [
          { x: 0.1, y: 60.1, w: 14.8, h: 4.3, label: "Open Waitlists" },
          { x: 15.9, y: 24.3, w: 82.2, h: 7.7 },
        ],
      },
    },
    {
      title: "Read the columns",
      body: [
        "**Waitlist** shows the product or variant with a **Variant** or **Any variant** badge. **Any variant** means shoppers will take any version of the product. **Waiting** is how many shoppers are still due an alert.",
        "**Alerted, still deciding** counts shoppers who got an alert and haven’t bought yet. If they don’t buy within the time set by **Hold a restock alert for** in Settings, they go back to waiting. **Bought after alert** counts shoppers who bought after an alert. **Last joined** is the day the newest shopper signed up.",
      ],
      shot: {
        src: "/guide/browse-waitlists/02-columns.jpg",
        width: 1244,
        height: 358,
        alt: "The header and first six rows of the Waitlists table: product thumbnails, Variant and Any variant badges, and the Waiting, Demand Score, Stock, Potential revenue, Alerted, still deciding, Bought after alert and Last joined columns.",
        frame: "admin",
        highlights: [
          { x: 16.0, y: 72.9, w: 7.1, h: 7.1, label: "Variant or any variant" },
          { x: 35.3, y: 1.6, w: 5.4, h: 97.3, label: "Shoppers still due an alert" },
          { x: 40.4, y: 1.6, w: 27.1, h: 97.3, label: "Pro columns" },
        ],
      },
      aside: {
        kind: "note",
        text: "A **Deleted in Shopify** badge means the product is no longer in your store. Its row stays so you can still see its history.",
      },
    },
    {
      title: "Read the Pro columns",
      body: [
        "On Pro, three more columns fill in. **Demand Score** rates from 0 to 100 how strongly shoppers want the item. **Stock** is what Shopify last reported; a minus number means it’s oversold. **Potential revenue** estimates what the shoppers waiting could spend if the item came back, based on how often your alerts have led to a sale.",
        "**Potential revenue** shows a dash until your store has sent 100 restock alerts. Point at the column header to see how many have gone out so far.",
      ],
      aside: {
        kind: "note",
        text: "On Free and Growth these columns show a dash with a Pro badge on the header, and a banner at the top of the page explains what Pro adds.",
      },
    },
    {
      title: "Search for a product",
      body: [
        "Type part of a product’s name in **Search by product** and select **Search**. The list narrows to that product’s waitlists.",
        "If nothing matches, select **Clear search** to see every waitlist again.",
      ],
      shot: {
        src: "/guide/browse-waitlists/03-search.jpg",
        width: 1273,
        height: 703,
        alt: "The Waitlists page searched for “snowboard”, listing the matching snowboard waitlists.",
        frame: "admin",
        highlights: [
          { x: 1.8, y: 3.7, w: 85.5, h: 5.5, label: "Search by product name" },
          { x: 86.7, y: 3.7, w: 6.0, h: 5.5 },
        ],
      },
    },
    {
      title: "Change the order",
      body: [
        "Select **Sort** and choose **Waiting**, **Alerted, still deciding**, **Bought after alert** or **Last joined**. On Pro you can also sort by **Demand Score** to see what to restock first.",
        "Your search stays in place when you change the order.",
      ],
      shot: {
        src: "/guide/browse-waitlists/04-sort.jpg",
        width: 1273,
        height: 703,
        alt: "The Sort menu open on the Waitlists page, listing Waiting, Alerted, still deciding, Bought after alert, Last joined and Demand Score, with a check next to Waiting.",
        frame: "admin",
        highlights: [
          { x: 92.1, y: 3.7, w: 5.9, h: 5.5, label: "Change the order" },
          { x: 86.0, y: 25.4, w: 13.0, h: 4.5, label: "Pro: what to restock first" },
        ],
      },
    },
    {
      title: "Page through and open a waitlist",
      body: [
        "Each page shows 50 waitlists. Use the arrows under the table to move between pages.",
        "Select a product name to open its waitlist and see every shopper on it.",
      ],
    },
  ],
  faqs: [
    {
      q: "Why is the page empty?",
      a: "It shows “No demand captured yet” until a shopper presses Notify me. The Waitly block has to be on your product page first. Select Set up the widget to add it.",
    },
    {
      q: "Why does my search say only some products were searched?",
      a: "A search looks at the first 250 products whose titles match. If you see that note, add more words to narrow it down.",
    },
  ],
  related: ["see-whos-waiting", "demand-score", "add-notify-me-block"],
};
