import type { GuideArticle } from "../types";

export const article: GuideArticle = {
  slug: "manage-preorders",
  section: "preorders",
  title: "Track the preorders you’ve taken",
  summary:
    "See every preorder with its ship estimate and status, spot the ones that need you, and ship, cancel or refund them in Shopify.",
  before: ["You have a preorder policy that has taken at least one order."],
  steps: [
    {
      title: "Open the Preorders view",
      body: [
        "In Waitly, choose **Preorders**, then select **Preorders** with its count at the top of the table (next to **Policies**).",
        "Each row is one preordered product on one order, newest first, 50 to a page. Every plan sees this list.",
      ],
      shot: {
        src: "/guide/manage-preorders/01-preorders-view.jpg",
        width: 1216,
        height: 597,
        alt: "The Preorders view: a Policies and Preorders (15) switch, the All, Waiting, Shipped and Cancelled filters, and a table with Order, Product, Qty, Customer, Ships and Status columns.",
        frame: "admin",
        highlights: [
          { x: 7.7, y: 14.5, w: 9.8, h: 5.6, label: "Select **Preorders**" },
          { x: 75.6, y: 14.5, w: 22.3, h: 5.6, label: "Filter by status" },
        ],
      },
    },
    {
      title: "Filter by status",
      body: [
        "Use the filters at the top right of the table: **All**, **Waiting**, **Shipped** or **Cancelled**.",
        "**Waiting** includes preorders that are **Partly shipped**, because units are still owed on them.",
      ],
    },
    {
      title: "Read a row",
      body: [
        "**Order** links to the order in Shopify, with the time it was placed. **Product** shows the variant under it. **Customer** links to the customer, or reads “Guest”. **Ships** is the ship estimate the shopper saw.",
        "**Status** is one of four: **Waiting** (nothing shipped yet), **Partly shipped**, **Shipped** or **Cancelled**. When a line has several units or a refund, the counts show underneath, like “1 shipped · 1 refunded · 1 to ship”. Lines such as “Delay notice sent Sep 14” or “Agreed to wait” show what the shopper has been told.",
      ],
      shot: {
        src: "/guide/manage-preorders/02-status-column.jpg",
        width: 1192,
        height: 462,
        alt: "Rows of the Preorders list with Shipped, Waiting, Cancelled and Partly shipped badges in the Status column, unit counts such as 1 shipped · 2 to ship, and the lines Delay notice sent Sep 18 and Agreed to wait.",
        frame: "admin",
        highlights: [
          { x: 61.5, y: 0.5, w: 29.6, h: 99.3, label: "Status and unit counts" },
          { x: 61.8, y: 5.2, w: 13.7, h: 8.3, label: "What the shopper was told" },
        ],
      },
    },
    {
      title: "Check the preorders that need you",
      body: [
        "A second badge next to the status means something needs your attention:",
        "**Refund due** — the shopper didn’t agree to wait after a long delay, and Waitly couldn’t refund it automatically. Cancel it in Shopify.",
        "**Waiting for the shopper** — they’ve been asked to keep or cancel, and have until the date shown.",
        "**Reaches 30 days** — a preorder with no ship estimate is getting close to 30 days after its order. Ship it before that date if you can.",
      ],
      shot: {
        src: "/guide/manage-preorders/03-marks.jpg",
        width: 1192,
        height: 743,
        alt: "The Preorders list filtered to Waiting. One row has a Waiting for the shopper badge with the line until Oct 8, one has a Refund due badge, and one has a Reaches 30 days badge with the line Reaches 30 days on Oct 5.",
        frame: "admin",
        highlights: [
          { x: 68.0, y: 11.9, w: 15.3, h: 3.9, label: "The shopper hasn’t answered yet" },
          { x: 68.0, y: 62.4, w: 9.4, h: 3.9, label: "Cancel this one in Shopify" },
          { x: 68.0, y: 89.7, w: 12.1, h: 3.9, label: "Ship before this date" },
        ],
      },
    },
    {
      title: "Ship the preorder in Shopify",
      body: [
        "Shopify holds every preorder order until you release it, so nothing ships early. When the stock arrives, select the order name to open it in Shopify, select **Release hold**, and fulfill it as usual.",
        "Waitly reads the shipment from Shopify, and the row changes to **Shipped**, or **Partly shipped** if you sent some of the units.",
      ],
      shot: {
        src: "/guide/manage-preorders/04-held-order.jpg",
        width: 670,
        height: 315,
        alt: "The fulfillment card of a Shopify order, marked On hold, with Add hold and Release hold buttons and the item The Collection Snowboard: Liquid carrying a Pre-order label.",
        frame: "admin",
        highlights: [
          { x: 79.8, y: 8.3, w: 16.0, h: 10.1, label: "Release it when the stock arrives" },
          { x: 6.0, y: 79.4, w: 13.4, h: 7.5, label: "The Pre-order option on the item" },
        ],
      },
    },
    {
      title: "Handle cancellations and refunds",
      body: [
        "Shoppers can cancel a preorder themselves, any time before it ships, from the link in their preorder receipt email. Waitly refunds that product in full through Shopify, with the note “Cancelled by the shopper through Waitly”, and the row reads **Cancelled**.",
        "You can also cancel or refund in Shopify as usual. Waitly picks up the change, and refunded units stop counting toward the policy’s unit limit.",
      ],
      aside: {
        kind: "note",
        text: "Every action on an order happens in Shopify. The Waitly list is read-only, so it always matches your orders.",
      },
    },
  ],
  faqs: [
    {
      q: "Do preorders from a deleted policy still show?",
      a: "Yes. The list has no policy column, so preorders from a deleted or turned-off policy show like any other.",
    },
    {
      q: "Why does a customer show as “View customer” instead of a name?",
      a: "Waitly couldn’t read the name from Shopify just then. The link still opens the customer.",
    },
  ],
  related: ["change-ship-date", "shopper-cancels-preorder", "preorder-volume"],
};
