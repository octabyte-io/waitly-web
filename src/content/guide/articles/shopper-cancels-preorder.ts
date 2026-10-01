import type { GuideArticle } from "../types";

export const article: GuideArticle = {
  slug: "shopper-cancels-preorder",
  section: "shoppers",
  title: "Keeping or cancelling a preorder",
  summary:
    "How your shoppers cancel a preorder for a full refund, and how they answer when you move a ship date later.",
  before: ["A shopper has placed an order that holds a preorder, and got the Preorder receipt."],
  steps: [
    {
      title: "The shopper opens the Keep or cancel page",
      body: [
        "The **Keep or cancel your preorder** button in the Preorder receipt, or in a delay notice, opens a page on your store, inside your theme.",
        "It’s headed with the order number and the day it was placed, followed by the terms: “Cancel any time before it ships for a full refund.” Each preordered item has its own card with a **Waiting** badge and when it ships.",
      ],
      shot: {
        src: "/guide/shopper-cancels-preorder/01-keep-or-cancel.jpg",
        width: 1000,
        height: 340,
        alt: "The Keep or cancel page on the storefront, headed Order #1054 with the day it was placed and the cancel terms, and a card for the preordered item with a Waiting badge, Ships around Nov 16, 2026 and a Cancel preorder button.",
        frame: "storefront",
        highlights: [
          { x: 33.7, y: 24.7, w: 32.7, h: 15.9, label: "Order number, date and cancel terms" },
          { x: 34.8, y: 62.0, w: 5.4, h: 4.7, label: "**Waiting** badge" },
          { x: 34.8, y: 75.6, w: 14.9, h: 12.7, label: "**Cancel preorder**" },
        ],
      },
    },
    {
      title: "The shopper cancels",
      body: [
        "They select **Cancel preorder**. The card asks them to confirm, shows how much they’ll get back, tax included, and warns that it can’t be undone.",
        "They select **Yes, cancel it**, or **Go back** to leave it as it is.",
      ],
      shot: {
        src: "/guide/shopper-cancels-preorder/02-confirm-cancel.jpg",
        width: 1040,
        height: 490,
        alt: "The Keep or cancel page for Order #1002 after Cancel preorder is selected. The item’s card asks Cancel The Videographer Snowboard? You get $885.95 USD back, tax included. This cannot be undone, with Yes, cancel it and Go back buttons.",
        caption: "This order also had a delay to answer, so the card shows that notice above the question.",
        frame: "storefront",
        highlights: [
          { x: 24.0, y: 68.6, w: 50.6, h: 5.1, label: "What they’ll get back" },
          { x: 24.0, y: 75.7, w: 14.8, h: 11.4, label: "**Yes, cancel it**" },
          { x: 39.0, y: 78.4, w: 7.1, h: 5.5, label: "**Go back** leaves it as it is" },
        ],
      },
    },
    {
      title: "Waitly cancels and refunds straight away",
      body: [
        "The card shows a **Cancelled** badge and reads “Cancelled, refund on its way. The store will email you the refund receipt.” Waitly cancels the whole line and refunds it through Shopify at once, with no approval from you. Shopify then emails the shopper the refund receipt.",
      ],
      shot: {
        src: "/guide/shopper-cancels-preorder/03-cancelled.jpg",
        width: 1040,
        height: 310,
        alt: "The Keep or cancel page for Order #1002 after cancelling: the item’s card has a Cancelled badge and a green message, Cancelled, refund on its way. The store will email you the refund receipt.",
        frame: "storefront",
        highlights: [
          { x: 67.9, y: 43.5, w: 9.6, h: 9.0, label: "**Cancelled** badge" },
          { x: 22.9, y: 54.8, w: 54.2, h: 23.9, label: "The refund is on its way" },
        ],
      },
      aside: {
        kind: "note",
        text: "Only a preorder that hasn’t shipped can be cancelled here. If part of the order has shipped, the card asks the shopper to contact you at your reply-to address instead.",
      },
    },
    {
      title: "When you move a ship date later, the shopper is told",
      body: [
        "If you change a policy’s ship estimate to a later day, Waitly emails a delay notice. Each item has a card showing **You were told** beside **Now**, and “You do not need to do anything to keep it.”",
      ],
      shot: {
        src: "/guide/shopper-cancels-preorder/04-delay-notice.jpg",
        width: 608,
        height: 570,
        alt: "The delay notice email, headed Your preorder will ship later, with a card comparing You were told and Now, and a Keep or cancel your preorder button.",
        frame: "email",
        highlights: [
          { x: 11.4, y: 36.2, w: 77.2, h: 9.6, label: "**You were told** beside **Now**" },
          { x: 11.4, y: 46.1, w: 43.3, h: 5.4, label: "Nothing to do to keep it" },
          { x: 8.6, y: 63.1, w: 38.9, h: 8.6, label: "Opens the Keep or cancel page" },
        ],
      },
    },
    {
      title: "For a long delay, the shopper must choose to keep it",
      body: [
        "If the new day is more than 30 days later than the shopper was promised, if there’s no date any more, or if the promised day passes and the item hasn’t shipped, the notice’s subject starts “Action needed” and gives a day to answer by.",
        "On the Keep or cancel page the card shows **Answer by** and a **Keep my preorder** button. Once the shopper keeps it, the card shows **Kept** and the new ship day.",
      ],
      shot: {
        src: "/guide/shopper-cancels-preorder/05-keep-asked.jpg",
        width: 608,
        height: 594,
        alt: "The Action needed delay notice email: a card for the item with Answer by Oct 8, 2026, the old and new ship dates, a line telling the shopper to choose Keep my preorder by that day or be refunded in full, and a Keep or cancel your preorder button.",
        caption: "The delay notice that asks the shopper to answer.",
        frame: "email",
        highlights: [
          { x: 11.4, y: 29.4, w: 24.9, h: 5.2, label: "The day to answer by" },
          { x: 11.4, y: 44.2, w: 77.2, h: 9.3, label: "Keep it by then, or it’s refunded" },
          { x: 8.6, y: 64.6, w: 38.9, h: 8.3, label: "Opens the Keep or cancel page" },
        ],
      },
      aside: {
        kind: "warning",
        text: "If the shopper doesn’t answer by the day given, Waitly cancels the preorder and refunds it in full, just as if they had cancelled it.",
      },
    },
  ],
  faqs: [
    {
      q: "What does the page show once everything has shipped?",
      a: "When nothing on the order is left waiting, the link shows “This link no longer works” and your contact address.",
    },
    {
      q: "Do these emails reach shoppers who unsubscribed?",
      a: "Yes. The Preorder receipt and delay notices are about an order the shopper placed, so they’re always sent, on every plan.",
    },
  ],
  related: ["change-ship-date", "manage-preorders", "shopper-preorders"],
};
