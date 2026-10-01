import type { GuideArticle } from "../types";

export const article: GuideArticle = {
  slug: "data-retention",
  section: "emails-settings",
  title: "Choose how long to keep demand",
  summary:
    "Set how long Waitly keeps waitlist signups that have gone quiet or ended, from 30 to 365 days.",
  before: ["Waitly is installed. This setting is on every plan."],
  steps: [
    {
      title: "Open the Data retention settings",
      body: [
        "In Waitly, choose **Settings** and find **Data retention**, near the top of the page.",
      ],
      shot: {
        src: "/guide/data-retention/01-retention.jpg",
        width: 1015,
        height: 188,
        alt: "The Data retention group in Waitly Settings, with the Keep waitlist demand for field set to 365 days.",
        frame: "admin",
        highlights: [
          { x: 36.4, y: 21.7, w: 60.2, h: 29.9, label: "Type 30 to 365 days" },
        ],
      },
    },
    {
      title: "Choose the number of days",
      body: [
        "Type a number between 30 and 365 in **Keep waitlist demand for**. It starts at 365, which is also the most you can choose, so you can only make it shorter.",
      ],
    },
    {
      title: "Know what gets removed",
      body: [
        "The same number of days works in two ways. A shopper who has been waiting with no activity for that long leaves the waitlist, and their status becomes **Expired**.",
        "A signup that has ended, for example because the shopper bought or it expired, is deleted that many days after it ended. It then drops out of your waitlists, the shopper counts in Analytics and the charts under **Over time**. **Recovered revenue** and the totals for each restock alert you’ve sent stay as they were. Waitly checks once a day.",
      ],
      aside: {
        kind: "warning",
        text: "A short window removes history sooner. Your waitlists, shopper counts and charts only count what’s still kept, and a deleted signup can’t be brought back.",
      },
    },
    {
      title: "Know what stays",
      body: [
        "Shoppers’ email addresses aren’t removed by this setting. An address stays for as long as Waitly is installed.",
        "An address goes when the customer asks you, through Shopify, to erase their data, or when you uninstall Waitly. Shopify asks Waitly to erase your store’s data 48 hours after you uninstall.",
      ],
    },
    {
      title: "Save your changes",
      body: [
        "Select **Save** in the bar at the top of the page. Waitly shows **Settings saved** when it’s done.",
      ],
    },
  ],
  faqs: [
    {
      q: "Why is the lowest setting 30 days?",
      a: "A sale can count as recovered for up to 30 days after an alert. A shorter retention window could delete the signup before the sale that it earned is counted.",
    },
    {
      q: "Can I keep data forever?",
      a: "No. 365 days is the longest. It keeps shoppers’ data from being held for longer than it’s useful.",
    },
  ],
  related: ["notification-rules", "see-whos-waiting", "remove-a-shopper"],
};
