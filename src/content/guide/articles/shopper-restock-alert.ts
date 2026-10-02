import type { GuideArticle } from "../types";

export const article: GuideArticle = {
  slug: "shopper-restock-alert",
  section: "shoppers",
  title: "The back-in-stock email",
  summary:
    "What your shoppers get when an item they’re waiting for comes back, and what happens after they read it.",
  before: ["A shopper has joined a waitlist, and the item has come back in stock."],
  steps: [
    {
      title: "The shopper gets the alert",
      body: [
        "When the item is back in stock, Waitly emails the shoppers waiting for it. The subject reads “The Complete Snowboard is back in stock”.",
        "Shoppers who joined through a Coming Soon page get “is now available” instead, and shoppers who voted for a product get the product’s name and “, which you voted for, is now available”.",
      ],
    },
    {
      title: "The shopper reads the email",
      body: [
        "The email is headed with the product’s name and “is back”, then says the item is available again at your shop. A quieter line tells them where they were in line, such as “You were number 3 in line for this one.”",
        "The **Buy it now** button opens the product page with their variant already chosen. The last line says the alert doesn’t hold one for them, so it’s first come, first served.",
      ],
      shot: {
        src: "/guide/shopper-restock-alert/01-restock-alert.jpg",
        width: 608,
        height: 296,
        alt: "The back-in-stock email, headed The Complete Snowboard is back: the line saying it is available again, You were number 3 in line for this one, a Buy it now button and the first come, first served line.",
        frame: "email",
        highlights: [
          { x: 8.6, y: 45.7, w: 35.2, h: 9.3, label: "The shopper’s place in line" },
          { x: 8.6, y: 61.9, w: 19.1, h: 15.4, label: "**Buy it now** opens the product page" },
          { x: 8.6, y: 84.2, w: 58.9, h: 9.3, label: "First come, first served" },
        ],
      },
      aside: {
        kind: "note",
        text: "If the product isn’t published to your online store, there’s no button. The email says “Visit” your shop “to buy it — stock can go quickly.” instead.",
      },
    },
    {
      title: "The footer lets them stop alerts",
      body: [
        "Every alert ends with a footer that says why the shopper got it and gives a **Stop alerts for** link naming the item. That link stops alerts for this one item only, and the footer says how to stop all of them.",
      ],
      shot: {
        src: "/guide/shopper-restock-alert/02-footer.jpg",
        width: 608,
        height: 204,
        alt: "The footer of the back-in-stock email, with the reason for the email, a Stop alerts for link naming the item and a line on how to stop every waitlist email.",
        frame: "email",
        highlights: [
          { x: 8.6, y: 16.1, w: 82.8, h: 18.8, label: "Why the shopper got this email" },
          { x: 8.6, y: 38.6, w: 41.5, h: 8.1, label: "Stops alerts for this item" },
          { x: 8.6, y: 50.4, w: 82.8, h: 18.8, label: "How to stop every waitlist email" },
        ],
      },
    },
    {
      title: "What happens after the alert",
      body: [
        "If the shopper buys within your **Count a sale as recovered for** window, they show on the waitlist as **Bought after alert**.",
        "If they haven’t bought when **Hold a restock alert for** runs out, they go back on the waitlist in their original place. After **Alert one shopper at most** alerts without buying, they leave the waitlist as **Expired**.",
      ],
    },
    {
      title: "On Pro, the first shoppers may get a held unit",
      body: [
        "If you use **Reserve for the first shoppers** under **Restock release**, the first shoppers in line get a different email. Its subject says one is held for them and for how long, and a box at the top shows when the hold ends.",
        "Its **Complete your purchase** button opens a checkout only that shopper can use. When the time is up, the link stops working and the next shopper in line gets the item.",
      ],
      shot: {
        src: "/guide/shopper-restock-alert/03-held-alert.jpg",
        width: 608,
        height: 602,
        alt: "The held alert email, with a Held for you for 30 minutes box at the top giving the end time, a Complete your purchase button, and a line saying only this shopper can use the link.",
        frame: "email",
        highlights: [
          { x: 8.6, y: 9.4, w: 82.8, h: 13.2, label: "When the hold ends" },
          { x: 8.6, y: 43.1, w: 33.6, h: 8.2, label: "**Complete your purchase** opens their own checkout" },
          { x: 8.6, y: 54.1, w: 82.8, h: 9.2, label: "Only this shopper can use the link" },
        ],
      },
    },
  ],
  faqs: [
    {
      q: "Why doesn’t the email show the price or a product photo?",
      a: "Waitly leaves them out on purpose. A price can change between the restock and the moment a shopper reads the email, and the product page always shows the current one.",
    },
    {
      q: "Can I change the words?",
      a: "On Growth and Pro you can write your own subject, heading, message and button label in Settings, under Email text. On every plan you can add your logo and brand color.",
    },
  ],
  related: ["how-restock-alerts-work", "customize-email-text", "shopper-unsubscribes"],
};
