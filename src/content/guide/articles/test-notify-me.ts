import type { GuideArticle } from "../types";

export const article: GuideArticle = {
  slug: "test-notify-me",
  section: "getting-started",
  title: "Test it on a sold-out product",
  summary:
    "Sell out a variant, join its waitlist with your own email, see the signup in Waitly, then restock it and get the alert.",
  before: [
    "The Notify me block is on your live theme’s product page.",
    "A product you can change the stock of. A test product is best, because restocking it emails everyone waiting.",
  ],
  steps: [
    {
      title: "Make a variant sold out",
      body: [
        "In your Shopify admin, open **Products**, choose a product and open one of its variants. In the **Inventory** card, make sure **Inventory tracked** is on and **Sell when out of stock** is **Off**. Set the quantity so **Available** reads 0, and select **Save**.",
      ],
      shot: {
        src: "/guide/test-notify-me/01-sold-out-variant.jpg",
        width: 1499,
        height: 812,
        alt: "A variant’s page in the Shopify admin, with Inventory tracked on, 0 available at the shop location and Sell when out of stock set to Off.",
        frame: "admin",
        highlights: [
          { x: 78.9, y: 58.8, w: 10.4, h: 3.9, label: "Inventory tracked on" },
          { x: 75.1, y: 69.8, w: 5.2, h: 4.9, label: "Available is 0" },
          { x: 56.8, y: 82.4, w: 13.9, h: 4.6, label: "Leave this off" },
        ],
      },
      aside: {
        kind: "warning",
        text: "The button never shows on a variant that doesn’t track quantity or keeps selling when out of stock. Shoppers can already buy it, so there’s nothing to wait for.",
      },
    },
    {
      title: "Open it on your storefront",
      body: [
        "Open the product on your online store and choose the sold-out variant. The Notify me form appears where you placed the block: an **Out of stock** heading, an email field, a consent checkbox and a **Notify me when available** button.",
        "Pick a variant that’s in stock and the form disappears again.",
      ],
      shot: {
        src: "/guide/test-notify-me/02-storefront-form.jpg",
        width: 1320,
        height: 620,
        alt: "A product page with a sold-out variant selected, showing the Out of stock heading, an Email field, the consent checkbox and the Notify me when available button.",
        frame: "storefront",
        highlights: [
          { x: 68.8, y: 15.5, w: 6.2, h: 6.5, label: "Choose the sold-out variant" },
          { x: 62.7, y: 62.3, w: 35.5, h: 32.7 },
        ],
      },
      aside: {
        kind: "note",
        text: "If your store is password protected, enter the storefront password first.",
      },
    },
    {
      title: "Sign up with your own email",
      body: [
        "Type your email address, tick the consent box and select **Notify me when available**. The form is replaced by “You are on the list. We will email you once this is back.”",
      ],
      shot: {
        src: "/guide/test-notify-me/03-signed-up.jpg",
        width: 500,
        height: 140,
        alt: "The product page after signing up, with the form replaced by the message You are on the list. We will email you once this is back.",
        frame: "storefront",
        highlights: [
          { x: 4.2, y: 45.8, w: 87.8, h: 21.2, label: "You’re signed up" },
        ],
      },
    },
    {
      title: "Check your confirmation email",
      body: [
        "You’ll get an email with the subject “You are on the list for” followed by the product and variant name. It comes from your store’s name, and a reply goes to your store’s contact address.",
      ],
      shot: {
        src: "/guide/test-notify-me/04-confirmation-email.jpg",
        width: 609,
        height: 426,
        alt: "The waitlist confirmation email, headed You are on the list, saying the store will email as soon as the item is available again.",
        frame: "email",
        highlights: [
        ],
      },
    },
    {
      title: "Find your signup in Waitly",
      body: [
        "Open Waitly. On **Home**, the second step of the setup guide is now done (with both steps done, the guide goes away), and the product shows in **Most wanted**.",
        "Select it to open its waitlist. You’re in the **Shoppers** list with the status **Waiting**.",
      ],
      shot: {
        src: "/guide/test-notify-me/05-waitlist.jpg",
        width: 1013,
        height: 635,
        alt: "The Shoppers list on a variant’s waitlist in Waitly, with each shopper’s email, status Waiting, join date and alert count.",
        frame: "admin",
        highlights: [
          { x: 2.1, y: 69.2, w: 96.0, h: 7.8, label: "A signup, Waiting" },
        ],
      },
    },
    {
      title: "Restock it and get the alert",
      body: [
        "Back in the Shopify admin, set the variant’s quantity above 0 and select **Save**. Waitly sees the change and emails everyone waiting. You’ll get an email titled with the product name and “is back in stock”, with a **Buy it now** button.",
        "In Waitly, your status on the waitlist changes to **Alerted, still deciding**.",
      ],
      shot: {
        src: "/guide/test-notify-me/06-restock-alert.jpg",
        width: 609,
        height: 492,
        alt: "The restock alert email, saying the product is back, with a Buy it now button.",
        frame: "email",
        highlights: [
          { x: 8.8, y: 35.4, w: 19.1, h: 9.7 },
        ],
      },
      aside: {
        kind: "warning",
        text: "Restocking emails every shopper waiting for that variant, not only you. On a real product with real shoppers, only restock when you mean it.",
      },
    },
  ],
  faqs: [
    {
      q: "I don’t see the button on my sold-out variant. What should I check?",
      a: "Check that the variant has inventory tracked, 0 available and Sell when out of stock set to Off. Then check that the block is saved on your published theme, on the product template this product uses. On Pro, a product marked Coming Soon shows the Coming soon form instead.",
    },
    {
      q: "What if I sign up twice with the same email?",
      a: "Nothing changes. You’re already on that waitlist, so Waitly doesn’t add a second entry or send a second confirmation.",
    },
    {
      q: "I restocked but got no alert. Why?",
      a: "An alert goes only to shoppers who signed up before the restock, and only if the variant is still in stock when the send starts. Check your spam folder, then look for the send under Restock alerts on the Analytics page.",
    },
  ],
  related: ["how-restock-alerts-work", "see-whos-waiting", "check-storefront-connection"],
};
