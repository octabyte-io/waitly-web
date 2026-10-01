import type { GuideArticle } from "../types";

export const article: GuideArticle = {
  slug: "choose-a-plan",
  section: "billing",
  title: "Choose or change your plan",
  summary:
    "See which plan you’re on, compare what Growth and Pro add, and change plan through Shopify.",
  before: ["Waitly is installed. Every store starts on the Free plan."],
  steps: [
    {
      title: "Open Billing",
      body: [
        "In Waitly, choose **Billing**, the last item in the menu on the left of your Shopify admin.",
      ],
      shot: {
        src: "/guide/choose-a-plan/01-billing.jpg",
        width: 1470,
        height: 757,
        alt: "The Shopify admin with Waitly’s Billing page open and Billing selected in the Waitly menu.",
        frame: "admin",
        highlights: [
          { x: 0.1, y: 86.6, w: 16.1, h: 4.9, label: "Choose **Billing**" },
        ],
      },
    },
    {
      title: "Check your current plan",
      body: [
        "The **Your plan** card shows your plan’s name with a badge: **Active** for a plan you’re paying for or on Free, **Free trial** while a trial runs, **Confirming** while Shopify confirms a change, and **Paused by Shopify** if Shopify has paused billing for the app.",
        "Under it, a line says how many restock alerts and preorders your plan includes each billing cycle. During a trial, another line gives the day it ends and Shopify starts charging.",
      ],
      shot: {
        src: "/guide/choose-a-plan/02-your-plan.jpg",
        width: 1000,
        height: 196,
        alt: "The Your plan card on Waitly’s Billing page: the plan name Pro with an Active badge, the line saying the plan includes 20,000 restock alerts and unlimited preorders for each billing cycle, and a Change plan button.",
        frame: "admin",
        highlights: [
          { x: 19.5, y: 31.0, w: 9.6, h: 11.4, label: "Your plan and its badge" },
          { x: 19.5, y: 49.4, w: 54.8, h: 11.9, label: "What the plan includes each cycle" },
          { x: 19.5, y: 67.8, w: 10.9, h: 15.5, label: "**Change plan** opens Shopify’s plan page" },
        ],
      },
    },
    {
      title: "Compare what a higher plan adds",
      body: [
        "Below your plan, a card for each plan above yours lists what it adds. **Growth adds** 5,000 restock alerts and 500 preorders each billing cycle, plus analytics, CSV export, your own email text and widget styles, and the customer tag.",
        "**Pro adds** 20,000 restock alerts, unlimited preorders, waitlist priority, alerts in batches, demand by variant, Demand Score and restock suggestions, Coming Soon pages and product voting.",
      ],
      shot: {
        src: "/guide/choose-a-plan/03-upgrade-cards.jpg",
        width: 1000,
        height: 500,
        alt: "The Growth adds and Pro adds cards on Waitly’s Billing page for a store on the Free plan, each listing what the plan adds, with an Upgrade to Growth and an Upgrade to Pro button.",
        frame: "admin",
        highlights: [
          { x: 17.9, y: 1.0, w: 64.2, h: 35.6, label: "What **Growth** adds" },
          { x: 17.9, y: 38.6, w: 64.2, h: 59.6, label: "What **Pro** adds" },
        ],
      },
      aside: {
        kind: "note",
        text: "On Pro there’s nothing above your plan, so these cards don’t appear.",
      },
    },
    {
      title: "Change your plan in Shopify",
      body: [
        "Select **Change plan**, or **Upgrade to Growth** or **Upgrade to Pro** on a card. Shopify opens its own **Select a plan** page for Waitly, with each plan’s price and a **Current** badge on the plan you’re on.",
        "Choose a plan. Growth and Pro each start with a 14-day free trial.",
      ],
      shot: {
        src: "/guide/choose-a-plan/04-shopify-plans.jpg",
        width: 1000,
        height: 638,
        alt: "Shopify’s Select a plan page for Waitly, with a card each for Free, Growth and Pro showing its price and what it includes, and a Current badge on Pro.",
        caption: "This is a test store, so Shopify shows each plan as free to test, with its normal price crossed out.",
        frame: "admin",
        highlights: [
          { x: 13.8, y: 24.8, w: 72.4, h: 75.2, label: "Each plan with its price" },
          { x: 77.4, y: 27.3, w: 7.2, h: 4.3, label: "**Current** marks your plan" },
        ],
      },
    },
    {
      title: "Approve the charge",
      body: [
        "Shopify shows its **Approve charge** page, with the plan you chose and what your next bill will be. Select **Approve**.",
        "Shopify bills you on your normal Shopify invoice, so there’s no card to enter in Waitly.",
      ],
      shot: {
        src: "/guide/choose-a-plan/05-approve.jpg",
        width: 1380,
        height: 580,
        alt: "Shopify’s Approve charge page for Waitly by OctaByte: the plan Pro, its subscription details, a Your next bill box and an Approve button. A Free to test banner says You will not be billed for this test charge.",
        caption: "This is a test store, so Shopify says the charge is free to test.",
        frame: "admin",
        highlights: [
          { x: 1.7, y: 52.1, w: 6.8, h: 5.2, label: "The plan you chose" },
          { x: 70.9, y: 2.6, w: 27.1, h: 17.2, label: "Your next bill" },
          { x: 72.0, y: 21.9, w: 24.8, h: 6.6, label: "Select **Approve**" },
        ],
      },
    },
    {
      title: "Wait for Shopify to confirm",
      body: [
        "Back in Waitly, the badge may read **Confirming** for a moment. Until Shopify confirms, you keep your current plan’s allowance, and nothing you’ve sent is lost.",
        "Once it’s confirmed, the badge changes to **Free trial** or **Active**, and the new plan’s features unlock. If a change is set for later, the card says “Your plan changes to” the new plan and gives the day.",
      ],
      shot: {
        src: "/guide/choose-a-plan/06-confirming.jpg",
        width: 1000,
        height: 283,
        alt: "The Your plan card just after approving Pro: the plan still reads Free with a Confirming badge, and a line says Shopify is confirming your change to Pro, and that until it is confirmed you are on the Free allowance and nothing you have sent is lost.",
        frame: "admin",
        highlights: [
          { x: 18.2, y: 20.8, w: 10.2, h: 9.9, label: "**Confirming** badge" },
          { x: 13.9, y: 36.4, w: 71.2, h: 18.4, label: "You keep your current allowance meanwhile" },
        ],
      },
      aside: {
        kind: "tip",
        text: "Moving to a lower plan keeps your settings, such as your email text and customer tag. The features lock with a plan badge and come back if you upgrade again.",
      },
    },
  ],
  faqs: [
    {
      q: "What does “Paused by Shopify” mean?",
      a: "Shopify has paused billing for the app. Waitly uses the Free allowance until you check your billing details in Shopify and your plan starts again. Your waitlists keep collecting shoppers.",
    },
    {
      q: "Is there annual billing?",
      a: "Not yet. Every plan is billed monthly through Shopify.",
    },
  ],
  related: ["allowances-and-usage", "install-waitly", "brand-your-emails"],
};
