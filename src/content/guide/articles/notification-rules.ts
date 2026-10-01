import type { GuideArticle } from "../types";

export const article: GuideArticle = {
  slug: "notification-rules",
  section: "emails-settings",
  title: "Set alert and attribution rules",
  summary:
    "Choose how long an alert holds a shopper’s place, how many alerts one shopper gets, and how long a sale counts as recovered.",
  before: ["Waitly is installed. These settings are on every plan."],
  steps: [
    {
      title: "Open the Notifications settings",
      body: [
        "In Waitly, choose **Settings** and find the **Notifications** group. It has three numbers, each with its allowed range written under it.",
      ],
      shot: {
        src: "/guide/notification-rules/01-notifications.jpg",
        width: 1015,
        height: 372,
        alt: "The Notifications group in Waitly Settings, with Hold a restock alert for set to 48 hours, Alert one shopper at most set to 3 alerts and Count a sale as recovered for set to 7 days.",
        frame: "admin",
        highlights: [
          { x: 36.4, y: 10.7, w: 60.2, h: 25.4, label: "How long an alert holds" },
          { x: 36.4, y: 39.7, w: 60.2, h: 25.4, label: "Most alerts per shopper" },
          { x: 36.4, y: 68.8, w: 60.2, h: 21.1, label: "Days a sale counts as recovered" },
        ],
      },
    },
    {
      title: "Choose how long an alert holds",
      body: [
        "**Hold a restock alert for** sets how long a shopper has to buy after their alert, from 1 to 168 hours. The default is 48 hours.",
        "During that time the shopper shows as **Alerted, still deciding** on the waitlist. If they haven’t bought when it ends, they go back on the waitlist and keep their original place in the queue.",
      ],
      aside: {
        kind: "note",
        text: "While a shopper is still deciding, they aren’t alerted again, even if the item restocks a second time. A long hold keeps them out of the next restock’s alerts until it ends.",
      },
    },
    {
      title: "Limit how many alerts one shopper gets",
      body: [
        "**Alert one shopper at most** sets how many alerts a shopper can get for the same product, from 1 to 10. The default is 3.",
        "Once a shopper has had that many alerts without buying, they leave the waitlist and their status becomes **Expired**.",
      ],
      aside: {
        kind: "tip",
        text: "Every alert counts toward your plan’s restock alerts for the billing cycle, so a lower limit also saves allowance.",
      },
    },
    {
      title: "Choose when a sale counts as recovered",
      body: [
        "**Count a sale as recovered for** sets how many days after an alert a purchase is credited to Waitly, from 1 to 30. The default is 7 days.",
        "A shopper who buys within that time shows as **Bought after alert**, and on Growth and Pro the order counts toward **Recovered revenue** in your reports. A shopper who buys later, or without an alert, shows as **Bought anyway**.",
      ],
    },
    {
      title: "Save your changes",
      body: [
        "Select **Save** in the bar at the top of the page. Waitly shows **Settings saved** when it’s done. If a number is outside its range, the field says so and nothing is saved until you fix it.",
      ],
    },
  ],
  faqs: [
    {
      q: "Why can’t the recovered window be longer than 30 days?",
      a: "Waitly keeps waitlist history for at least 30 days. A longer window could outlive the record of the alert it’s meant to credit.",
    },
    {
      q: "Does the Customer tag use the same window?",
      a: "Yes. On Growth and Pro, only buyers counted as Bought after alert get the customer tag.",
    },
  ],
  related: ["how-restock-alerts-work", "tag-recovered-customers", "allowances-and-usage"],
};
