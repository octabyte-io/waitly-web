import type { GuideArticle } from "../types";

export const article: GuideArticle = {
  slug: "shopper-unsubscribes",
  section: "shoppers",
  title: "Stopping alerts",
  summary:
    "How your shoppers leave one waitlist or stop every waitlist email from your store.",
  before: ["A shopper has had an email from Waitly: a confirmation or an alert."],
  steps: [
    {
      title: "The shopper opens the link in the footer",
      body: [
        "Every waitlist email ends with a **Stop alerts for** link that names the item. It opens a small **Email preferences** page.",
        "Opening the link on its own changes nothing. The shopper has to confirm on the page, so a mail scanner that follows links can’t unsubscribe anyone by accident.",
      ],
      aside: {
        kind: "note",
        text: "Mail apps like Gmail also show their own Unsubscribe button next to the sender. That button stops alerts for the item in one step, with no page.",
      },
    },
    {
      title: "The shopper stops alerts for the item",
      body: [
        "The page asks **Stop alerts for this item?** and explains that the shopper asked to be told when an item came back. They select **Stop alerts for this item**.",
      ],
      shot: {
        src: "/guide/shopper-unsubscribes/01-stop-item.jpg",
        width: 624,
        height: 236,
        alt: "The Email preferences page asking Stop alerts for this item?, with a Stop alerts for this item button.",
        frame: "storefront",
        highlights: [
          { x: 5.8, y: 16.3, w: 39.7, h: 13.9, label: "The page asks before changing anything" },
          { x: 5.8, y: 63.0, w: 34.7, h: 20.7, label: "**Stop alerts for this item**" },
        ],
      },
    },
    {
      title: "The shopper can stop everything",
      body: [
        "The page now reads **You will not get alerts for this item** and says any other items they’re waiting for are unaffected.",
        "To stop all of them, they select **Stop all waitlist emails from this store**.",
      ],
      shot: {
        src: "/guide/shopper-unsubscribes/02-stop-all.jpg",
        width: 624,
        height: 205,
        alt: "The Email preferences page after leaving one waitlist, reading You will not get alerts for this item, with a Stop all waitlist emails from this store button.",
        frame: "storefront",
        highlights: [
          { x: 5.8, y: 18.9, w: 54.4, h: 15.8, label: "Alerts for this item have stopped" },
          { x: 5.8, y: 57.4, w: 51.5, h: 23.6, label: "**Stop all waitlist emails from this store**" },
        ],
      },
    },
    {
      title: "Every waitlist email stops",
      body: [
        "The page reads **You will not get any more waitlist emails from this store**, and says any items they were waiting for have been cancelled.",
        "This stops only what Waitly sends. It doesn’t touch your own newsletter or Shopify’s order emails.",
      ],
      shot: {
        src: "/guide/shopper-unsubscribes/03-all-stopped.jpg",
        width: 624,
        height: 166,
        alt: "The Email preferences page confirming You will not get any more waitlist emails from this store.",
        frame: "storefront",
        highlights: [
          { x: 5.8, y: 23.5, w: 87.3, h: 19.3, label: "Every waitlist email has stopped" },
        ],
      },
      aside: {
        kind: "note",
        text: "A shopper who has placed a preorder still gets its receipt and any delay notice. Those emails are about an order they placed, not a waitlist.",
      },
    },
    {
      title: "You see it on the waitlist",
      body: [
        "In Waitly, the shopper’s row on that item’s waitlist shows **Unsubscribed**. They won’t get a restock alert for it.",
      ],
    },
  ],
  faqs: [
    {
      q: "What if the link doesn’t work?",
      a: "The page says “This link is no longer valid” and that it may already have been used, or the shop may no longer be using Waitly. It suggests the shopper replies to one of your emails, which reaches your reply-to address.",
    },
  ],
  related: ["shopper-restock-alert", "see-whos-waiting", "remove-a-shopper"],
};
