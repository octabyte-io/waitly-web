import type { GuideArticle } from "../types";

export const article: GuideArticle = {
  slug: "how-restock-alerts-work",
  section: "back-in-stock",
  title: "How restock alerts are sent",
  summary:
    "Understand when Waitly sends a restock alert, who gets it, how long an alert holds a shopper, and when an alert is held back.",
  before: ["The Notify me block is on your product page and shoppers are waiting."],
  steps: [
    {
      title: "Restock as you normally would",
      body: [
        "You don’t press anything in Waitly. Shopify tells Waitly whenever an inventory level changes. When a variant shoppers are waiting for goes from sold out to available to sell online, Waitly counts it as a restock and starts sending.",
        "Setting the quantity above 0 is the usual way. Turning **Sell when out of stock** on also makes a variant available, so it counts as a restock too.",
      ],
    },
    {
      title: "Know who gets the alert",
      body: [
        "Everyone waiting for that variant gets the alert, and so does everyone waiting for the whole product. A shopper waiting for a different variant of the same product doesn’t.",
        "Only shoppers who signed up before the restock are included. Shoppers who unsubscribed, can’t be emailed, or are still holding an earlier alert are left out.",
        "If the variant sells out again before the send starts, or the send can’t start within 24 hours of the restock, Waitly doesn’t send it.",
      ],
      aside: {
        kind: "note",
        text: "Alerts go out in line order. By default everyone is alerted at once. On Pro you can send them in batches or hold a unit for the first shoppers instead, under **Settings** › **Restock release**.",
      },
    },
    {
      title: "Set how long an alert holds a shopper",
      body: [
        "Open **Settings** and find **Notifications**. **Hold a restock alert for** sets how long a shopper has to buy after an alert: from 1 to 168 hours, 48 by default.",
        "During that time the shopper shows as **Alerted, still deciding** and isn’t alerted again. If they haven’t bought when it ends, they go back to **Waiting** in their original place in line, ready for the next restock.",
      ],
      shot: {
        src: "/guide/how-restock-alerts-work/01-notifications.jpg",
        width: 1013,
        height: 348,
        alt: "The Notifications card in Waitly Settings, with Hold a restock alert for, Alert one shopper at most, and Count a sale as recovered for.",
        frame: "admin",
        highlights: [
          { x: 36.1, y: 8.0, w: 60.7, h: 27.1, label: "Time to buy after an alert" },
          { x: 36.1, y: 39.1, w: 60.7, h: 27.1, label: "Most alerts per shopper" },
        ],
      },
      aside: {
        kind: "note",
        text: "An alert doesn’t hold stock. The email tells shoppers it’s first come, first served.",
      },
    },
    {
      title: "Limit how many alerts one shopper gets",
      body: [
        "**Alert one shopper at most** sets how many alerts a shopper can get for the same item without buying: from 1 to 10, 3 by default.",
        "When the hold on their last alert ends and they still haven’t bought, they leave the waitlist and show as **Expired**. Select **Save** after changing either setting.",
      ],
    },
    {
      title: "Keep an eye on your alert allowance",
      body: [
        "Each restock alert counts toward your plan’s allowance for the billing cycle: 100 on Free, 5,000 on Growth and 20,000 on Pro. Confirmation emails aren’t counted against it.",
        "**Billing** shows how many you’ve used under **This billing cycle**, and a banner warns you when they’re nearly used.",
        "Once they’re used up, further alerts are withheld: Waitly doesn’t send them, and doesn’t send them later either. Those shoppers stay **Waiting** and get the alert at the next restock, once you have allowance again.",
      ],
      shot: {
        src: "/guide/how-restock-alerts-work/02-billing-cycle.jpg",
        width: 677,
        height: 220,
        alt: "The This billing cycle card on the Billing page, showing restock alerts and preorders used against the plan’s allowance.",
        frame: "admin",
        highlights: [
          { x: 6.3, y: 24.4, w: 42.1, h: 44.4, label: "Alerts used this cycle" },
        ],
      },
      aside: {
        kind: "warning",
        text: "Withheld alerts are gone for that restock. If a big restock is coming and you’re close to your allowance, upgrade first.",
      },
    },
    {
      title: "Check what was sent",
      body: [
        "Open **Analytics** and scroll to **Restock alerts**. Each row is one restock’s send: the item, its **Status** (**Sending** or **Complete**), and how many alerts were **Queued** and **Delivered**.",
        "A **Withheld** column appears when a send had alerts held back by your allowance, and **Failed** when an email couldn’t be sent.",
      ],
      shot: {
        src: "/guide/how-restock-alerts-work/03-send-log.jpg",
        width: 1212,
        height: 520,
        alt: "The Restock alerts log on the Analytics page, listing sends with their item, status, and Queued, Delivered and Withheld counts.",
        frame: "admin",
        highlights: [
          { x: 33.3, y: 6.7, w: 14.4, h: 93.1 },
          { x: 75.0, y: 6.7, w: 6.6, h: 93.1, label: "Held back by your allowance" },
        ],
      },
    },
  ],
  faqs: [
    {
      q: "Does a shopper who buys without clicking the alert count?",
      a: "If they buy within the time set in Count a sale as recovered for (7 days by default), it counts as Bought after alert. A shopper who buys without an alert, or after that time, shows as Bought anyway.",
    },
    {
      q: "What happens to the shoppers a send didn’t reach?",
      a: "They stay on the waitlist as Waiting, keep their place in line, and are included in the next restock.",
    },
  ],
  related: ["notification-rules", "release-in-batches", "allowances-and-usage"],
};
