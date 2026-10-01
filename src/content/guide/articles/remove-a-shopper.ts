import type { GuideArticle } from "../types";

export const article: GuideArticle = {
  slug: "remove-a-shopper",
  section: "waitlists",
  title: "Remove a shopper from a waitlist",
  summary:
    "Take one shopper off one waitlist so they don’t get the alert when it’s back in stock.",
  before: ["The shopper is on the waitlist and hasn’t already bought, unsubscribed or expired."],
  steps: [
    {
      title: "Find the shopper",
      body: [
        "Open the waitlist from **Waitlists** in the Waitly menu and scroll to the **Shoppers** card.",
        "Type their email address in **Search by email** and select **Search**. Or select the **Waiting** filter to see only shoppers who are still due an alert.",
      ],
      shot: {
        src: "/guide/remove-a-shopper/01-search.jpg",
        width: 961,
        height: 222,
        alt: "The Shoppers card searched for bram.brooks@example.com, showing a single Waiting shopper at position 25 with a Remove link at the end of the row.",
        frame: "admin",
        highlights: [
          { x: 2.6, y: 32.3, w: 80.5, h: 14.3, label: "Search by email" },
          { x: 90.0, y: 76.4, w: 6.6, h: 9.8, label: "Select Remove" },
        ],
      },
    },
    {
      title: "Select Remove",
      body: [
        "Select **Remove** at the end of the shopper’s row. Nothing changes yet: Waitly asks you to confirm first.",
        "Only shoppers still on the list have **Remove**. Rows that have already ended, for example **Bought after alert** or **Unsubscribed**, have nothing to remove.",
      ],
    },
    {
      title: "Confirm in the Remove shopper? window",
      body: [
        "The **Remove shopper?** window names the shopper and says they won’t get an alert for this product, and that they can join again from your store.",
        "Select **Remove** to take them off, or **Cancel** to keep them.",
      ],
      shot: {
        src: "/guide/remove-a-shopper/02-modal.jpg",
        width: 1273,
        height: 703,
        alt: "The Remove shopper? window: “bram.brooks@example.com won’t get an alert for this product. They can join again from your store.” with Cancel and Remove buttons.",
        frame: "admin",
        highlights: [
          { x: 57.1, y: 55.4, w: 6.4, h: 4.9, label: "Confirm the removal" },
          { x: 51.7, y: 55.4, w: 5.9, h: 4.9 },
        ],
      },
    },
    {
      title: "Check the shopper’s new status",
      body: [
        "A **Shopper removed** message appears at the bottom of the screen, and the shopper’s status changes to **Removed by you**. They stay on the list so you can see what happened, but they no longer count as **Waiting**.",
      ],
      shot: {
        src: "/guide/remove-a-shopper/03-removed.jpg",
        width: 1273,
        height: 703,
        alt: "The shopper’s row now showing the status Removed by you with no Remove link, a new Removed by you 1 filter, and the Waiting filter now at 24.",
        frame: "admin",
        highlights: [
          { x: 39.7, y: 90.2, w: 9.4, h: 4.0, label: "New status" },
        ],
      },
      aside: {
        kind: "warning",
        text: "You can’t undo a removal. The only way back is for the shopper to join the waitlist again from your store.",
      },
    },
  ],
  faqs: [
    {
      q: "Does removing a shopper stop all their Waitly emails?",
      a: "No. It takes them off this one waitlist only. If they’re waiting for other products, they still get those alerts.",
    },
    {
      q: "What if the shopper is holding a reserved unit?",
      a: "On Pro, when you reserve units for the first shoppers, the Remove shopper? window also says the held unit goes to the next shopper in line. Removing them ends the hold straight away. You can also do this from the Held now card.",
    },
    {
      q: "Is removing the same as the shopper unsubscribing?",
      a: "No. Unsubscribed means the shopper stopped the alerts themselves. Removed by you means you took them off.",
    },
  ],
  related: ["see-whos-waiting", "reserve-units", "shopper-unsubscribes"],
};
