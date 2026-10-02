import type { UseCasePost } from "../types";

export const post: UseCasePost = {
  slug: "back-in-stock-notifications-shopify",
  title: "Back in stock notifications on Shopify: with an app, without one, or not at all",
  metaTitle: "Back in stock notifications on Shopify",
  description:
    "Shopify has no built-in “notify me when available” email. Compare doing it by hand, selling while sold out, and using an app, and see when each one fits.",
  cardHeadline: "Back in stock notifications on Shopify, with an app or without",
  summary:
    "Shopify doesn’t email shoppers when a sold-out product returns. Here are the ways to do it, with and without an app, and how to tell which one your store needs.",
  published: "2026-10-02",
  answer: [
    "Shopify doesn’t have a built-in way to email a shopper when a sold-out product comes back. You can collect emails with a form and send the news yourself, keep selling while you’re out of stock, or add an app that does both steps for you.",
    "Doing it by hand works for a few products and a few signups. Past that, the work is in matching each person to the exact size or color they wanted, and emailing them while the stock is still there.",
  ],
  sections: [
    {
      id: "what-shopify-does",
      heading: "What Shopify does when a product sells out",
      voice: "neutral",
      blocks: [
        "When a variant that tracks inventory reaches zero, your theme shows it as sold out and switches off the buy button. That’s all. The shopper has nothing to do on the page, so they leave, and you have no record that they wanted it.",
        "Shopify Flow does have a [Product variant back in stock](https://changelog.shopify.com/posts/shopify-flow-new-triggers-for-product-variant-back-in-stock-and-out-of-stock) trigger. It’s meant for jobs inside your store, such as publishing a product again when stock returns. It doesn’t know which shoppers were waiting, so by itself it can’t tell them.",
      ],
    },
    {
      id: "options",
      heading: "Four ways to handle a sold-out product",
      voice: "neutral",
      blocks: [
        {
          type: "table",
          caption: "Four ways to handle a sold-out product on Shopify",
          head: ["Option", "What the shopper gets", "Your work", "Fits when"],
          rows: [
            [
              "Leave it sold out",
              "A sold-out page and nothing else.",
              "None.",
              "The product isn’t coming back, or hardly anyone asks for it.",
            ],
            [
              "Collect emails yourself",
              "A form on the page, and an email from you when it’s back.",
              "You keep the list, match people to products and send each email.",
              "A few products sell out, and a few people sign up for each.",
            ],
            [
              "Keep selling while sold out",
              "They can buy now and wait for delivery.",
              "You tell them when it ships, and deal with it if the stock is late.",
              "The stock is ordered and you know roughly when it arrives.",
            ],
            [
              "Use a back-in-stock app",
              "A “Notify me” form on the sold-out variant, and an email when it’s back.",
              "You set it up once. After that you restock as usual.",
              "Products sell out often, or in many sizes and colors.",
            ],
          ],
        },
        "These aren’t exclusive. Plenty of stores take preorders on the products with a firm delivery date and collect emails on the rest.",
      ],
    },
    {
      id: "without-an-app",
      heading: "How to set up back in stock notifications without an app",
      voice: "neutral",
      blocks: [
        "You need three things: a way to collect the email, a record of what each person wanted, and a way to email them when it’s back.",
        {
          type: "list",
          ordered: true,
          items: [
            "**Add a form to the product page.** Shopify Forms or your theme’s contact form will do. Ask for an email address, and make sure the form records which product the shopper was looking at.",
            "**Ask for the size or color too.** A form that only records the product can’t tell you whether someone wanted the medium or the large.",
            "**Say what they’re signing up for.** “Email me when this is back” is permission for that one email. It isn’t permission to add them to your newsletter.",
            "**Keep the list somewhere you’ll check.** A spreadsheet with one row per person, product and variant is enough.",
            "**Email them when you restock.** Send it the same day. If you wait, the stock may be gone before they read it.",
            "**Take people off the list** once you’ve emailed them, and when they ask you to stop.",
          ],
        },
        "The catch is the middle step. Merchants who try to automate it with Shopify Flow run into the same wall: Flow can see that a variant is back, but [it can’t match each signup to that variant and email that person](https://community.shopify.com/t/how-can-i-set-up-a-back-in-stock-notification-without-external-apps-in-shopify/409277) without extra tools or custom code. So the matching stays with you.",
        {
          type: "aside",
          kind: "note",
          text: "If you already pay for an email platform, check whether it has a back-in-stock flow before adding another app. Klaviyo has one, for example.",
        },
      ],
    },
    {
      id: "keep-selling",
      heading: "When to keep selling instead",
      voice: "neutral",
      blocks: [
        "Each variant in Shopify has a **Continue selling when out of stock** setting in its Inventory section. With it on, shoppers can buy at zero stock. Shopify lists “You have stock coming soon and you want to continue selling before it arrives” as [one reason to use it](https://help.shopify.com/en/manual/products/inventory/setup/selling-when-out-of-stock).",
        "It’s the better choice when you’ve ordered the stock and can give a date. It’s the worse one when you don’t know if or when the product returns, because you’ve taken money for something you may not be able to send.",
        "Be clear on the page. With that setting on, your product page looks exactly like an in-stock one unless you say otherwise. Add a line about when it ships, or use a [preorder](/features/preorders/) so the shopper sees it before they pay.",
      ],
    },
    {
      id: "the-form",
      heading: "With Waitly: a form on the sold-out variant",
      voice: "waitly",
      blocks: [
        "Waitly adds a **Notify me when available** block to your product page. It shows only while the variant the shopper picked is sold out, and hides again when they switch to one that’s in stock.",
        "The shopper types their email and ticks **Email me once when this is back in stock.** Waitly records the exact variant, puts them on that variant’s waitlist, and sends a confirmation straight away.",
        "You can change every word on the form in the theme editor, and the button’s color and corners.",
      ],
      figure: {
        scene: "sold-out-notify-me",
        caption: "The form appears under the sizes when the shopper picks one that’s sold out.",
      },
    },
    {
      id: "the-email",
      heading: "The email goes out when you restock",
      voice: "waitly",
      blocks: [
        "There’s nothing to press. Shopify tells Waitly whenever an inventory level changes. When a variant people are waiting for becomes available again, Waitly emails them in the order they joined.",
        "The email comes from your store’s name, with your logo and color. Its **Buy it now** button opens the product page with their size already chosen.",
        "It also tells them the truth about stock: an alert doesn’t hold one for them, so it’s first come, first served.",
      ],
      figure: {
        scene: "restock-alert-email",
        caption: "The back-in-stock email, with a link to stop alerts for that item.",
      },
    },
    {
      id: "what-you-see",
      heading: "You see who’s waiting, and what happened next",
      voice: "waitly",
      blocks: [
        "Each product and variant has a waitlist in Waitly, with every shopper and their status: waiting, alerted, bought, unsubscribed. The busiest ones are listed on the home page, so you can see what to reorder first.",
        "After a restock, the send log shows how many alerts were queued and delivered. On Growth and Pro it also shows how many of those shoppers bought, and the revenue that came back.",
      ],
      figure: {
        scene: "send-log",
        caption: "Example figures. The **Bought** column is on the Growth and Pro plans.",
      },
    },
  ],
  features: ["backInStock"],
  level: "free",
  setup: [
    { guide: "add-notify-me-block" },
    { guide: "test-notify-me" },
    { guide: "how-restock-alerts-work", note: "When an alert is sent, who gets it, and when one is held back." },
    { guide: "brand-your-emails" },
  ],
  limits: [
    "It sends email only. There’s no SMS or push notification.",
    "The form goes on product pages, on an Online Store 2.0 theme. It can’t go on collection pages or older (vintage) themes.",
    "An ordinary alert doesn’t reserve stock. Holding a unit for the first shoppers in line is a [Pro feature](/features/restock-release/).",
    "The Free plan sends up to 100 restock alerts each billing cycle. Alerts past that aren’t sent later; those shoppers stay on the list for the next restock.",
    "It doesn’t connect to Klaviyo or Shopify Flow. On Growth and Pro you can export a waitlist as a CSV file.",
  ],
  faqs: [
    {
      q: "Can I add back in stock notifications to Shopify for free?",
      a: "Yes, two ways. You can collect emails with a form and send them yourself, which costs time rather than money. Or you can use an app with a free plan: Waitly’s covers the form, the confirmation and up to 100 restock alerts each billing cycle. See [pricing](/pricing/).",
    },
    {
      q: "How does the app know a product is back in stock?",
      a: "Shopify tells it. When you raise a variant’s quantity above zero, or turn on **Continue selling when out of stock**, Waitly treats that as a restock and starts sending.",
    },
    {
      q: "Can shoppers sign up for one size or color?",
      a: "Yes. By default each shopper waits for the exact variant they picked, and only hears about that one. You can switch the form to wait for [any variant of the product](/guide/variant-or-whole-product/) instead.",
    },
    {
      q: "Can I use these emails for my newsletter?",
      a: "Not by default. The shopper agreed to one email about one product. If you want them on your marketing list, ask for that separately.",
    },
    {
      q: "What if I’d rather take the order now?",
      a: "Then use a preorder instead of a waitlist. Waitly has [preorders](/features/preorders/) on every plan, paid in full at checkout.",
    },
  ],
};
