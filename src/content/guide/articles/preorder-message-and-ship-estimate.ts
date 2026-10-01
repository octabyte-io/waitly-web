import type { GuideArticle } from "../types";

export const article: GuideArticle = {
  slug: "preorder-message-and-ship-estimate",
  section: "preorders",
  title: "Add a message and ship estimate",
  summary:
    "Tell shoppers when their preorder ships, add a short message of your own, and tag preorder orders by policy.",
  level: "growth",
  before: [
    "You’re on the Growth or Pro plan.",
    "You have a preorder policy, and the Pre-order block is on your product page.",
  ],
  steps: [
    {
      title: "Open What shoppers see",
      body: [
        "In Waitly, choose **Preorders**, select the policy, and scroll to **What shoppers see**.",
        "On every plan, the product page shows the “Pre-order” badge and “Pay in full today. This item ships later.” On Growth you can add a message and a ship estimate.",
      ],
      shot: {
        src: "/guide/preorder-message-and-ship-estimate/01-what-shoppers-see.jpg",
        width: 669,
        height: 468,
        alt: "The What shoppers see card with a message typed in the Message box, its character counter, and the Ship estimate menu.",
        frame: "admin",
        highlights: [
          { x: 4.2, y: 35.7, w: 91.8, h: 31.5, label: "Your message, up to 200 characters" },
          { x: 4.2, y: 69.5, w: 91.8, h: 13.0, label: "Choose a ship estimate" },
        ],
      },
    },
    {
      title: "Write a message",
      body: [
        "Type up to 200 characters in **Message**, for example what the preorder includes or why it’s worth the wait. It shows under the Pre-order terms on the product page.",
        "Don’t write prices. They don’t change with the shopper’s currency.",
      ],
    },
    {
      title: "Choose a ship estimate",
      body: [
        "Pick one in **Ship estimate**:",
        "**A date** — fill in **Ships around**. Shoppers read “Ships around October 15, 2026.”",
        "**A range of dates** — fill in **From** and **To**. Shoppers read “Ships October 10, 2026 – October 20, 2026.”",
        "**A time after the order** — a number in **From**, optionally one in **To (optional)**, and **days after the order** or **weeks after the order**. Shoppers read “Ships 3–4 weeks after you order.” Good for made-to-order goods.",
      ],
      shot: {
        src: "/guide/preorder-message-and-ship-estimate/02-ship-estimate.jpg",
        width: 669,
        height: 314,
        alt: "Ship estimate set to A range of dates, with From and To date fields filled in.",
        frame: "admin",
        highlights: [
          { x: 4.2, y: 50.4, w: 91.8, h: 18.7, label: "Choose the kind of estimate" },
          { x: 4.2, y: 73.3, w: 91.8, h: 18.7, label: "Fill in the dates" },
        ],
      },
      aside: {
        kind: "note",
        text: "With **None**, Shopify requires that you expect to ship each order within 30 days. Waitly treats those preorders as promised 30 days after the order.",
      },
    },
    {
      title: "Add an order tag",
      body: [
        "Every order with a preorder is tagged “waitly-preorder” in Shopify. In the **Order tag** card, add this policy’s own **Tag** beside it, so you can filter its orders in Shopify.",
        "Use one word or phrase, with no commas. Waitly never removes a tag, and a changed tag applies to new orders only.",
      ],
      shot: {
        src: "/guide/preorder-message-and-ship-estimate/03-order-tag.jpg",
        width: 669,
        height: 216,
        alt: "The Order tag card explaining the waitly-preorder tag, with a policy tag typed in the Tag field.",
        frame: "admin",
        highlights: [
          { x: 4.2, y: 51.7, w: 91.8, h: 35.9, label: "This policy’s own tag" },
        ],
      },
    },
    {
      title: "Save and check the product page",
      body: [
        "Select **Save** in the bar at the top. Open a covered, sold-out product in your store: the Pre-order block now shows the estimate and your message.",
        "When a shopper adds it to the cart, the line carries **Ships** with the estimate, so it also appears in the order.",
      ],
      shot: {
        src: "/guide/preorder-message-and-ship-estimate/04-storefront.jpg",
        width: 492,
        height: 812,
        alt: "A product page on a phone. Under the Add to cart and Buy it now buttons, the Pre-order block reads Pay in full today. Ships around January 15, 2027, then Cancel any time before it ships for a full refund, then the message Ships from our next delivery.",
        frame: "phone",
        highlights: [
          { x: 7.5, y: 78.8, w: 81.3, h: 3.4, label: "Your ship estimate" },
          { x: 7.5, y: 89.4, w: 48.2, h: 3.4, label: "Your message" },
        ],
      },
    },
  ],
  faqs: [
    {
      q: "What happens when the ship estimate passes?",
      a: "Shoppers stop seeing the date and read “This item ships later.” instead, and the Preorders page warns you. Waitly sends a late notice to shoppers whose preorder hasn’t shipped. Set a new estimate to tell them when it ships.",
    },
    {
      q: "What if I change the estimate after taking preorders?",
      a: "If the new date is later, Waitly emails the affected shoppers a delay notice. See “Change a ship date and notify shoppers”.",
    },
    {
      q: "What happens to my message if I move to Free?",
      a: "Waitly keeps it, but shoppers see only the standard Pre-order text until you’re back on Growth.",
    },
  ],
  related: ["change-ship-date", "add-preorder-block", "shopper-preorders"],
};
