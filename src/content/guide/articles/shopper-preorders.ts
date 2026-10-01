import type { GuideArticle } from "../types";

export const article: GuideArticle = {
  slug: "shopper-preorders",
  section: "shoppers",
  title: "Buying on preorder",
  summary:
    "What your shoppers see when they preorder a sold-out item, from the product page to the Preorder receipt email.",
  before: [
    "A preorder policy that’s on covers the product.",
    "The Pre-order block is on your product page, above Add to cart.",
    "The chosen variant is sold out.",
  ],
  steps: [
    {
      title: "The shopper sees the Pre-order panel",
      body: [
        "On a sold-out variant your policy covers, a panel appears above the buy buttons. It has a **Pre-order** badge, the line “Pay in full today. This item ships later.” and your terms: “Cancel any time before it ships for a full refund.”",
        "On Growth and Pro, the line gives your ship estimate instead, such as “Pay in full today. Ships around” a date, and your own message shows under the terms.",
      ],
      shot: {
        src: "/guide/shopper-preorders/01-preorder-panel.jpg",
        width: 1828,
        height: 862,
        alt: "A sold-out product page with the Pre-order panel under the product: a Pre-order badge, Pay in full today. Ships around November 2, 2026, Cancel any time before it ships for a full refund, and the store’s message, Ships from our next delivery.",
        frame: "storefront",
        highlights: [
          { x: 3.5, y: 78.0, w: 22.5, h: 8.1, label: "The badge and the ship estimate" },
          { x: 3.5, y: 86.8, w: 21.2, h: 3.6, label: "The cancel terms" },
          { x: 3.5, y: 92.4, w: 13.0, h: 3.6, label: "Your message" },
        ],
      },
      aside: {
        kind: "note",
        text: "The block has no button of its own. Your theme’s usual buttons buy the preorder, with their usual labels. The Notify me form doesn’t show on a variant that can be preordered.",
      },
    },
    {
      title: "The shopper adds it to the cart and checks out",
      body: [
        "In the cart and at checkout, Shopify shows “Pre-order” under the item, so the shopper can see what they’re buying. If the policy has a ship estimate, a **Ships** line shows with it. They pay the full price at checkout.",
      ],
      shot: {
        src: "/guide/shopper-preorders/02-cart.jpg",
        width: 1868,
        height: 385,
        alt: "The cart with one item, The Videographer Snowboard, and the lines Ships: around November 2, 2026 and Pre-order under its name, next to the estimated total and the Check out button.",
        frame: "storefront",
        highlights: [
          { x: 11.1, y: 30.4, w: 14.6, h: 14.0, label: "The ship estimate and **Pre-order**" },
        ],
      },
    },
    {
      title: "The shopper gets a Preorder receipt",
      body: [
        "Alongside Shopify’s order confirmation, Waitly emails a Preorder receipt headed **Thanks for your preorder**. It names each preordered item with when it’s expected to ship: your ship estimate, or “within 30 days of your order” if the policy has none.",
        "It repeats the cancel terms and has a **Keep or cancel your preorder** button, which opens a page on your store where the shopper can cancel.",
      ],
      shot: {
        src: "/guide/shopper-preorders/03-preorder-receipt.jpg",
        width: 608,
        height: 482,
        alt: "The Preorder receipt email, headed Thanks for your preorder, with a card for the item and its expected ship date, the cancel terms and a Keep or cancel your preorder button.",
        frame: "email",
        highlights: [
          { x: 8.6, y: 27.8, w: 82.8, h: 17.4, label: "The item and when it should ship" },
          { x: 8.6, y: 46.5, w: 52.2, h: 6.2, label: "The cancel terms" },
          { x: 8.6, y: 56.5, w: 38.9, h: 9.9, label: "Opens the Keep or cancel page" },
        ],
      },
      aside: {
        kind: "note",
        text: "The receipt is sent on every plan, never uses an allowance, and reaches shoppers who unsubscribed from waitlist emails, because it’s about an order they placed.",
      },
    },
    {
      title: "The order arrives in your admin",
      body: [
        "In Shopify, the order is tagged waitly-preorder, and in Waitly it appears under **Preorders**. Shopify holds it until you’re ready to ship.",
      ],
    },
  ],
  faqs: [
    {
      q: "What happens when I run out of preorders on my plan?",
      a: "Preorder pauses on every product until your allowance resets, so the Pre-order panel doesn’t appear. Preorders already placed are kept.",
    },
    {
      q: "Can a shopper cancel?",
      a: "Yes, any time before the item ships, from the link in their receipt. Waitly cancels and refunds it straight away.",
    },
  ],
  related: ["add-preorder-block", "shopper-cancels-preorder", "manage-preorders"],
};
