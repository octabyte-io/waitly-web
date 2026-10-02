import type { GuideArticle } from "../types";

export const article: GuideArticle = {
  slug: "preorder-timing-and-limits",
  section: "preorders",
  title: "Set when preorder runs and how many",
  summary:
    "Run preorder only while a variant is sold out, open and close it on set dates, and cap the units each product can take.",
  before: ["You have a preorder policy. Setting dates needs the Growth plan or higher."],
  steps: [
    {
      title: "Find When preorder runs",
      body: [
        "In Waitly, choose **Preorders**, select the policy, and scroll to the **When preorder runs** card. It holds three settings, in the order Waitly checks them: the dates, the sold-out switch, and the unit limit.",
      ],
      shot: {
        src: "/guide/preorder-timing-and-limits/01-when-preorder-runs.jpg",
        width: 669,
        height: 332,
        alt: "The When preorder runs card with Whenever this policy is on selected, the Offer preorder only while a variant is sold out checkbox ticked, and an empty Maximum units per product field.",
        frame: "admin",
        highlights: [
          { x: 4.2, y: 18.1, w: 33.9, h: 16.9, label: "The dates" },
          { x: 4.2, y: 44.9, w: 47.4, h: 8.7, label: "The sold-out switch" },
          { x: 4.2, y: 62.7, w: 91.8, h: 28.9, label: "The unit limit" },
        ],
      },
    },
    {
      title: "Choose the dates",
      body: [
        "**Whenever this policy is on** runs preorder for as long as the **Offer preorder** switch is on. Good for products you always sell ahead, like made-to-order pieces. The Pre-order block still shows only on a variant that tracks stock and has none left.",
        "**Between these dates** opens and closes preorder at a set time. Fill in **Opens on** and **Opens at**, and **Closes on** and **Closes at**. Times are 24-hour, in your store’s time zone. Leave the opening empty to start now, or the closing empty to run until you turn the policy off. **Clear** empties one end.",
        "Once saved, the card says how the policy reads, for example “This policy is on, and opens on …”.",
      ],
      shot: {
        src: "/guide/preorder-timing-and-limits/02-between-dates.jpg",
        width: 669,
        height: 424,
        alt: "Between these dates selected, with Opens on, Opens at, Closes on and Closes at filled in and the store’s time zone named under the time fields.",
        frame: "admin",
        highlights: [
          { x: 4.2, y: 20.6, w: 25.0, h: 6.9, label: "Choose **Between these dates**" },
          { x: 4.2, y: 30.5, w: 91.8, h: 19.4, label: "When preorder opens" },
          { x: 4.2, y: 60.7, w: 91.8, h: 19.4, label: "When it closes" },
        ],
      },
      aside: {
        kind: "note",
        text: "**Between these dates** is on Growth and Pro. On Free the choice is locked and shows a **Growth** badge with **Upgrade to Growth**.",
      },
    },
    {
      title: "Offer preorder only while sold out",
      body: [
        "With **Offer preorder only while a variant is sold out** ticked, a variant takes preorders only once its stock reaches zero, and goes back to normal selling when stock arrives. New policies start with it ticked.",
        "Untick it to let every covered variant keep selling when out of stock for as long as the policy runs.",
      ],
      aside: {
        kind: "note",
        text: "Sold out means the variant tracks stock in Shopify and has none left to sell online. A variant that doesn’t track stock never counts as sold out.",
      },
    },
    {
      title: "Cap the units per product",
      body: [
        "Type a number in **Maximum units per product** to stop preorders once a product has taken that many. It counts units ordered through this policy, all variants of a product together. A cancelled or refunded unit is given back.",
        "Leave it empty for no limit. To stop preorder altogether, turn the policy off instead.",
        "When a product reaches the limit, a line under the field names it, for example “Alpine parka reached 200 units, so it no longer offers preorder.”",
      ],
      shot: {
        src: "/guide/preorder-timing-and-limits/03-limit.jpg",
        width: 669,
        height: 330,
        alt: "The When preorder runs card with Maximum units per product set to 200 and its help text under the field.",
        frame: "admin",
        highlights: [
          { x: 4.2, y: 63.0, w: 91.8, h: 29.1, label: "Units each product can take" },
        ],
      },
    },
    {
      title: "Save and check the list",
      body: [
        "Select **Save** in the bar at the top.",
        "On the **Preorders** page, the **Status** column shows what each policy is doing: **On** with “Opens …” under it while it waits for its dates, **On** with “Ended” under it once they’ve passed, and “Limit reached on 2 of 12 products” when some products hit their cap.",
      ],
      shot: {
        src: "/guide/preorder-timing-and-limits/04-status-column.jpg",
        width: 1230,
        height: 157,
        alt: "The Preorders policy list with one policy: its Status shows On, next to the Preorder on, In Shopify and Created columns.",
        frame: "admin",
        highlights: [
          { x: 29.3, y: 44.0, w: 8.7, h: 37.5, label: "What the policy is doing" },
        ],
      },
    },
  ],
  faqs: [
    {
      q: "What happens when the closing date passes?",
      a: "The policy stays on but stops offering preorder, and the list shows it as Ended. Turn it off, or change the dates to run it again.",
    },
    {
      q: "I moved to Free. What happens to my dates?",
      a: "They keep working, but you can’t set or move them. You can switch back to Whenever this policy is on to remove them.",
    },
  ],
  related: ["create-preorder-policy", "preorder-message-and-ship-estimate", "turn-off-or-delete-policy"],
};
