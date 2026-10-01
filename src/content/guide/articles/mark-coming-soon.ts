import type { GuideArticle } from "../types";

export const article: GuideArticle = {
  slug: "mark-coming-soon",
  section: "coming-soon",
  title: "Mark a product Coming Soon",
  summary:
    "Mark a sold-out product so its page takes “I want this” signups, then email everyone waiting when you add stock.",
  level: "pro",
  before: [
    "Your store is on the Pro plan.",
    "The product exists in Shopify and has no stock for sale.",
    "The Coming soon block is on your product page. See “Set up the Coming soon form”.",
  ],
  steps: [
    {
      title: "Open Coming Soon",
      body: [
        "In your Shopify admin, open Waitly and choose **Coming Soon** in the menu.",
        "**Marked products** lists every product you’ve marked. Until you mark one, it’s empty.",
      ],
      shot: {
        src: "/guide/mark-coming-soon/01-coming-soon-page.jpg",
        width: 1470,
        height: 757,
        alt: "The Coming Soon page in Waitly, with the Mark a product button at the top right, an empty Marked products card, the Form fields card and the Launched list below.",
        frame: "admin",
        highlights: [
          { x: 0.1, y: 79.2, w: 16.1, h: 4.9, label: "Open **Coming Soon**" },
          { x: 87.7, y: 8.9, w: 8.8, h: 4.9, label: "Mark a product" },
          { x: 17.4, y: 17.5, w: 80.6, h: 31.3, label: "Marked products, empty at first" },
        ],
      },
    },
    {
      title: "Mark a product",
      body: [
        "Select **Mark a product**, tick the product in Shopify’s product picker and select **Add**. A message says the product is marked Coming Soon, and the product joins the list.",
        "Its product page now shows an “I want this” form in place of **Notify me**.",
      ],
      shot: {
        src: "/guide/mark-coming-soon/02-product-picker.jpg",
        width: 1230,
        height: 701,
        alt: "Shopify’s Add product picker open over the Coming Soon page, with The Collection Snowboard: Hydrogen ticked and the Add button ready.",
        frame: "admin",
        highlights: [
          { x: 15.7, y: 60.0, w: 49.4, h: 8.9, label: "Tick the product" },
          { x: 59.6, y: 77.4, w: 5.1, h: 5.2, label: "Select **Add**" },
        ],
      },
    },
    {
      title: "Know which products can be marked",
      body: [
        "Only a product with no stock for sale can be marked, because stock arriving is what launches it. A product that sold before and is now sold out is fine; anyone already waiting for it to come back stays on the waitlist.",
        "If the product has stock, Waitly shows **This product cannot be marked** and tells you how many are in stock.",
      ],
      shot: {
        src: "/guide/mark-coming-soon/03-cannot-be-marked.jpg",
        width: 1215,
        height: 128,
        alt: "A red banner on the Coming Soon page headed This product cannot be marked, saying The Collection Snowboard: Hydrogen has 50 in stock, so it is already on sale, and that Waitly can mark only a product that is sold out.",
        frame: "admin",
        highlights: [
          { x: 1.4, y: 8.8, w: 97.2, h: 73.1, label: "Why the product wasn’t marked" },
        ],
      },
    },
    {
      title: "Check that the form is showing",
      body: [
        "The **Form** column tells you what shoppers see. **Form showing** means the form is on the product page. **Partly on preorder** means some variants take preorders instead.",
        "**Form hidden** comes with the reason, for example the product isn’t published to the Online Store, Shopify doesn’t track its stock, or it keeps selling when out of stock. Fix that in Shopify and the form appears.",
        "**Waiting**, **Units wanted** and **Potential revenue** show the demand so far. Select a product name to open its waitlist, where a **Coming Soon** card shows the most wanted options, units wanted and shopping countries.",
      ],
      shot: {
        src: "/guide/mark-coming-soon/04-marked-products.jpg",
        width: 1215,
        height: 193,
        alt: "The Marked products card on the Coming Soon page with one row, The Out of Stock Snowboard, showing a green Form showing badge, 0 waiting, 0 units wanted, no potential revenue yet and a Remove button.",
        frame: "admin",
        highlights: [
          { x: 28.4, y: 75.0, w: 9.3, h: 14.2, label: "What shoppers see" },
          { x: 44.3, y: 55.9, w: 41.0, h: 33.3, label: "Demand so far" },
          { x: 85.8, y: 75.6, w: 6.1, h: 13.6, label: "**Remove** the mark" },
        ],
      },
      aside: {
        kind: "tip",
        text: "The form only shows on a variant that tracks stock, stops selling at zero and has none. A variant a preorder policy covers keeps selling, so it shows the pre-order button instead.",
      },
    },
    {
      title: "Remove a mark if you change your mind",
      body: [
        "Select **Remove** on the product’s row. You’ll see **Mark removed**, and the product page goes back to **Notify me**.",
        "Shoppers who already signed up stay on the waitlist and still get an email when the product comes into stock.",
      ],
    },
    {
      title: "Launch by adding stock",
      body: [
        "When you add stock in Shopify, the product launches. Waitly emails everyone waiting that it’s now available, and the mark ends by itself.",
        "The product then moves to **Launched**, which lists launches from the last 90 days with **Alerted**, **Bought after alert** and **Recovered revenue**.",
      ],
      shot: {
        src: "/guide/mark-coming-soon/05-launched.jpg",
        width: 1215,
        height: 197,
        alt: "The Launched section of the Coming Soon page: The Collection Snowboard: Oxygen, launched Sep 26, with 4 shoppers alerted, 2 who bought after the alert and $2,050.00 USD of recovered revenue.",
        frame: "admin",
        highlights: [
          { x: 2.4, y: 72.0, w: 95.4, h: 15.4, label: "A launched product" },
          { x: 48.0, y: 57.8, w: 49.8, h: 12.4, label: "What the launch brought in" },
        ],
      },
    },
  ],
  faqs: [
    {
      q: "What do shoppers get when the product launches?",
      a: "An email saying the product is now available, never “back in stock”, because it was never on sale before. Shoppers who joined with Notify me before you marked it get the usual back-in-stock wording.",
    },
    {
      q: "What happens to my marks if I leave Pro?",
      a: "They’re kept, but the product page shows Notify me in place of the Coming Soon form. Shoppers already waiting still get their launch email.",
    },
  ],
  related: ["coming-soon-block-and-fields", "promote-a-proposal", "see-whos-waiting"],
};
