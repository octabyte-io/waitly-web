import type { GuideArticle } from "../types";

export const article: GuideArticle = {
  slug: "allowances-and-usage",
  section: "billing",
  title: "Track your monthly allowances",
  summary:
    "See how many restock alerts and preorders you’ve used this billing cycle, and what happens when one runs out.",
  before: ["Waitly is installed."],
  steps: [
    {
      title: "Open This billing cycle",
      body: [
        "In Waitly, choose **Billing** and find the **This billing cycle** card. **Restock alerts** and **Preorders** each show how many you’ve used out of your plan’s allowance, for example “120 of 5,000”.",
        "On Pro, preorders show a count with **Unlimited on your plan** under it. The line at the bottom gives the day your allowances reset.",
      ],
      shot: {
        src: "/guide/allowances-and-usage/01-this-cycle.jpg",
        width: 1000,
        height: 225,
        alt: "The This billing cycle card on Waitly’s Billing page: Restock alerts at 16 of 20,000 with a note that Waitly held back 1 alert this cycle, Preorders at 5 with Unlimited on your plan, and the line Your allowances reset on October 16, 2026.",
        frame: "admin",
        highlights: [
          { x: 20.1, y: 27.0, w: 29.0, h: 21.4, label: "Restock alerts used, out of your allowance" },
          { x: 51.3, y: 27.0, w: 23.8, h: 32.8, label: "Preorders used" },
          { x: 19.5, y: 76.7, w: 28.2, h: 9.6, label: "The day your allowances reset" },
        ],
      },
    },
    {
      title: "Know what counts",
      body: [
        "Each back-in-stock or launch alert email Waitly sends uses one restock alert. Each line of an order placed through one of your preorder policies uses one preorder, whatever its quantity: three of the same jacket on one line count as one.",
        "Waitlist confirmations, preorder receipts and delay notices don’t use either allowance. A preorder receipt or delay notice is never held back, because it’s about an order the shopper already placed.",
      ],
    },
    {
      title: "Watch for Nearly used",
      body: [
        "When you’ve used 80% of an allowance, it gets a **Nearly used** badge and a warning banner appears at the top of the page, such as “250 restock alerts left this cycle”.",
        "Nothing stops yet. It’s your chance to change plan before the allowance runs out.",
      ],
      shot: {
        src: "/guide/allowances-and-usage/02-nearly-used.jpg",
        width: 1000,
        height: 501,
        alt: "Waitly’s Billing page with a warning banner, 3,600 restock alerts left this cycle, and a Nearly used badge beside 16,400 of 20,000 under Restock alerts.",
        frame: "admin",
        highlights: [
          { x: 17.9, y: 3.2, w: 64.2, h: 16.0, label: "How many alerts are left" },
          { x: 32.6, y: 71.3, w: 9.8, h: 5.2, label: "**Nearly used** badge" },
        ],
      },
    },
    {
      title: "Know what happens when alerts run out",
      body: [
        "At 100%, **Restock alerts** shows **Used up** and a red banner reads **Waitly is holding back your restock alerts**. Shoppers are no longer told when an item comes back.",
        "Alerts held back aren’t sent later. Those shoppers stay on the waitlist and are reached by the next restock after your allowance resets or grows. The card counts how many alerts Waitly held back this cycle, and the send log in Analytics shows them as **Withheld**.",
      ],
      shot: {
        src: "/guide/allowances-and-usage/03-used-up.jpg",
        width: 1000,
        height: 541,
        alt: "Waitly’s Billing page with a red banner, Waitly is holding back your restock alerts, a Used up badge beside 20,000 of 20,000 under Restock alerts, and the count of alerts held back this cycle.",
        frame: "admin",
        highlights: [
          { x: 17.9, y: 2.9, w: 64.2, h: 22.3, label: "Alerts are being held back" },
          { x: 32.6, y: 73.3, w: 7.6, h: 4.9, label: "**Used up** badge" },
          { x: 20.1, y: 78.3, w: 28.6, h: 8.2, label: "Alerts held back this cycle" },
        ],
      },
    },
    {
      title: "Know what happens when preorders run out",
      body: [
        "At 100% of your preorders, a red banner reads **Preorder is paused on every product**. Shoppers can’t preorder anything until your allowance resets. Preorders already placed are kept.",
        "The same banner shows on the **Preorders** page, with a **See plans** button that opens Billing.",
      ],
      shot: {
        src: "/guide/allowances-and-usage/04-preorders-paused.jpg",
        width: 1000,
        height: 301,
        alt: "Waitly’s Billing page on the Free plan with a red banner above the Your plan card: Preorder is paused on every product, saying all 20 preorders for this cycle are used and giving the day preorder starts again.",
        frame: "admin",
        highlights: [
          { x: 17.9, y: 5.4, w: 64.2, h: 32.4, label: "Preorder is paused until the reset day" },
        ],
      },
    },
    {
      title: "Get more room",
      body: [
        "Wait for the reset day shown on the card, or select **Change plan** to move to a plan with a larger allowance. A larger plan takes effect as soon as Shopify confirms it.",
      ],
    },
  ],
  faqs: [
    {
      q: "Is there a limit on waitlist confirmations?",
      a: "Yes, a safety cap of 500, 10,000 or 40,000 a cycle depending on your plan. It’s set high enough that ordinary stores never reach it, and it isn’t shown on Billing. If it’s reached, shoppers still join the waitlist; only the confirmation email is skipped.",
    },
    {
      q: "Does a cancelled preorder give its allowance back?",
      a: "No. The allowance counts preorders placed in the cycle.",
    },
  ],
  related: ["choose-a-plan", "restock-alert-log", "notification-rules"],
};
