import type { GuideArticle } from "../types";

export const article: GuideArticle = {
  slug: "find-your-way-around",
  section: "getting-started",
  title: "Find your way around",
  summary: "Learn what’s on Waitly’s Home page and where each page in the Waitly menu takes you.",
  before: ["Waitly is installed."],
  steps: [
    {
      title: "Open Waitly from your Shopify admin",
      body: [
        "In the left sidebar of your Shopify admin, under **Apps**, select **Waitly**. Waitly always opens on **Home**, and selecting the name Waitly takes you back there from any page.",
      ],
      shot: {
        src: "/guide/find-your-way-around/01-sidebar.jpg",
        width: 1499,
        height: 812,
        alt: "The Shopify admin with Waitly open on Home and the Waitly menu expanded in the left sidebar under Apps.",
        frame: "admin",
        highlights: [
          { x: 0.1, y: 60.0, w: 15.8, h: 4.5, label: "Select Waitly" },
        ],
      },
    },
    {
      title: "Work through the setup guide",
      body: [
        "The **Setup guide** at the top of Home shows how many of its two steps are done: add the Notify me block to your product page, then test the button on a sold-out product. Waitly ticks each step off by itself when it sees the block on your live theme and your first signup.",
        "Use the arrow button to collapse the guide, or the X button to dismiss it. It disappears for good once both steps are done.",
      ],
      shot: {
        src: "/guide/find-your-way-around/02-setup-guide.jpg",
        width: 1016,
        height: 462,
        alt: "The Setup guide card on Home showing 0 of 2 steps completed, with its two steps: Add the Notify me block to your product page, and Test the button on a sold-out product.",
        frame: "admin",
        highlights: [
          { x: 3.4, y: 22.1, w: 15.2, h: 4.9, label: "How many steps are done" },
          { x: 5.1, y: 38.1, w: 90.0, h: 50.3, label: "The two steps" },
          { x: 89.5, y: 8.3, w: 6.9, h: 6.4, label: "Dismiss or collapse the guide" },
        ],
      },
      aside: {
        kind: "note",
        text: "Dismissing the guide only hides it in this browser. On another computer it shows again until both steps are done.",
      },
    },
    {
      title: "Read your numbers",
      body: [
        "Under the guide, **Shoppers waiting** counts everyone still waiting for a product, and **Live waitlists** counts the products and variants with at least one shopper waiting. Select either to open **Waitlists**.",
        "**Recovered revenue** is the money from orders placed after a Waitly alert. It’s on Growth and Pro; on Free it shows **Growth** and an **Upgrade to Growth** link.",
      ],
      shot: {
        src: "/guide/find-your-way-around/03-metrics.jpg",
        width: 1014,
        height: 109,
        alt: "Home’s figures card with Shoppers waiting, Live waitlists and Recovered revenue.",
        frame: "admin",
        highlights: [
          { x: 3.4, y: 29.7, w: 17.4, h: 47.1 },
          { x: 35.0, y: 29.7, w: 17.4, h: 47.1 },
          { x: 66.5, y: 29.7, w: 17.5, h: 47.1, label: "Money from orders after an alert" },
        ],
      },
    },
    {
      title: "See what’s most wanted",
      body: [
        "**Most wanted** lists the five waitlists with the most shoppers waiting. Select a product to open its waitlist, or **View all** to see every waitlist.",
        "A **Variant** badge means shoppers are waiting for that one size or color. **Any variant** means they’ll take whichever variant comes back first.",
      ],
      shot: {
        src: "/guide/find-your-way-around/04-most-wanted.jpg",
        width: 1014,
        height: 434,
        alt: "The Most wanted card on Home, listing five products with their waiting counts and a View all button.",
        frame: "admin",
        highlights: [
          { x: 7.5, y: 22.4, w: 18.6, h: 5.8, label: "Open its waitlist" },
          { x: 22.0, y: 74.3, w: 9.5, h: 6.3 },
          { x: 88.6, y: 86.7, w: 8.1, h: 7.9, label: "See every waitlist" },
        ],
      },
    },
    {
      title: "Check Restock next on Pro",
      body: [
        "On Pro, **Restock next** sits under Most wanted. It lists the products shoppers want most by **Demand Score**, with a **Suggested restock** for each. **View restock planner** opens the full list.",
        "The card only appears when there’s something to restock.",
      ],
      shot: {
        src: "/guide/find-your-way-around/05-restock-next.jpg",
        width: 1013,
        height: 334,
        alt: "The Restock next card on Home, with Product, Demand Score and Suggested restock columns and a View restock planner button.",
        frame: "admin",
        highlights: [
          { x: 84.5, y: 15.9, w: 12.9, h: 56.0, label: "How many units to order" },
          { x: 81.0, y: 79.0, w: 15.6, h: 9.6, label: "View restock planner" },
        ],
      },
    },
    {
      title: "Use the Waitly menu",
      body: [
        "The Waitly menu in your Shopify admin sidebar takes you to every other page. If only some pages are listed, select **View more** to see the rest:",
        "**Waitlists**: every product shoppers are waiting for, and who’s on each list. **Analytics**: what Waitly recovered, demand over time and the log of restock alerts sent. **Preorders**: your preorder policies and the preorders shoppers placed.",
        "**Coming Soon** (Pro): products you’ve marked as not for sale yet. **Voting** (Pro): product ideas shoppers can vote on. **Settings**: the Notify me block’s connection, notification rules, emails and restock release. **Billing**: your plan and how much of this cycle’s allowance you’ve used. **Help**: a form to send a message to Waitly support.",
      ],
      shot: {
        src: "/guide/find-your-way-around/06-menu.jpg",
        width: 1499,
        height: 812,
        alt: "The Waitly menu in the Shopify admin sidebar: Waitlists, Analytics, Preorders, Coming Soon, Voting, Settings, Billing and Help.",
        frame: "admin",
        highlights: [
          { x: 0.1, y: 63.4, w: 15.8, h: 28.5, label: "Every Waitly page" },
        ],
      },
    },
  ],
  faqs: [
    {
      q: "Why can I see Coming Soon and Voting on the Free plan?",
      a: "Every page is in the menu on every plan, so you can see what each one does. Pages and figures your plan doesn’t include are shown with the plan that adds them and an upgrade link.",
    },
  ],
  related: ["add-notify-me-block", "see-whos-waiting", "analytics-overview"],
};
