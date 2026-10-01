import type { GuideArticle } from "../types";

export const article: GuideArticle = {
  slug: "tag-recovered-customers",
  section: "emails-settings",
  title: "Tag customers an alert brought back",
  summary:
    "Have Waitly add a Shopify customer tag to every buyer a Waitly alert brought back, so you can find them in Customers.",
  level: "growth",
  before: ["Your store is on the Growth or Pro plan."],
  steps: [
    {
      title: "Open the Customer tag settings",
      body: [
        "In Waitly, choose **Settings** and scroll to **Customer tag**, the last group on the page.",
      ],
      shot: {
        src: "/guide/tag-recovered-customers/01-customer-tag.jpg",
        width: 1015,
        height: 200,
        alt: "The Customer tag group in Waitly Settings, with the Tag buyers that a Waitly alert brought back checkbox ticked and the Tag field set to waitly-recovered.",
        frame: "admin",
        highlights: [
          { x: 36.4, y: 21.4, w: 30.2, h: 11.2, label: "Turn tagging on or off" },
          { x: 36.4, y: 42.4, w: 60.2, h: 38.2, label: "The tag Waitly adds" },
        ],
      },
      aside: {
        kind: "note",
        text: "On the Free plan both fields are grayed out, with a **Growth** badge and an **Upgrade to Growth** link. Free doesn’t tag customers.",
      },
    },
    {
      title: "Turn tagging on",
      body: [
        "Tick **Tag buyers that a Waitly alert brought back**. It’s ticked from the start, so there’s usually nothing to do here. Untick it to stop tagging.",
      ],
    },
    {
      title: "Choose the tag",
      body: [
        "Type the tag in **Tag**. It starts as waitly-recovered. Use one word or phrase, with no commas, up to 40 characters.",
      ],
    },
    {
      title: "Save your changes",
      body: [
        "Select **Save** in the bar at the top of the page. From then on, when a shopper buys after a Waitly alert, Waitly adds the tag to their customer record in Shopify.",
      ],
      aside: {
        kind: "note",
        text: "Waitly never removes a tag. If you change the tag, the new one goes on new orders only, and customers tagged before keep the old one.",
      },
    },
    {
      title: "Find tagged customers in Shopify",
      body: [
        "In your Shopify admin, open **Customers** and filter by the tag to see everyone a Waitly alert brought back.",
      ],
    },
  ],
  faqs: [
    {
      q: "Which buyers get the tag?",
      a: "Only buyers counted as Bought after alert: they bought within the Count a sale as recovered for window after a Waitly alert. A shopper who bought without an alert isn’t tagged.",
    },
  ],
  related: ["notification-rules", "analytics-overview", "choose-a-plan"],
};
