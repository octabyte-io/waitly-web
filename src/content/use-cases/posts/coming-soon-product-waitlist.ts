import type { UseCasePost } from "../types";

export const post: UseCasePost = {
  slug: "coming-soon-product-waitlist",
  title: "A “coming soon” product with a waitlist on a live Shopify store",
  metaTitle: "A coming soon product with a waitlist on Shopify",
  description:
    "Put one unreleased product on your live Shopify store, take emails from shoppers who want it, and tell them all on launch day. With an app or without.",
  cardHeadline: "A coming soon product with a waitlist",
  summary:
    "Shopify’s coming soon page hides the whole store. For one new product on a live store, you need a product page that takes emails instead of orders, and a way to tell everyone when it goes on sale.",
  cover: "soon-product-page",
  published: "2026-10-09",
  answer: [
    "Shopify’s own “coming soon” page is a password page, and it hides your whole store. To announce one product on a store that’s already selling, publish the product with no stock, so it shows as sold out, and put an email form on its page. When the stock arrives, email everyone who signed up.",
    "Without an app, that is a sign-up form on the product page and an email you send by hand on launch day. An app can swap the sold-out page for a “coming soon” form and send the launch email when you add stock.",
  ],
  sections: [
    {
      id: "store-or-product",
      heading: "A Shopify coming soon page, or one coming soon product",
      voice: "neutral",
      blocks: [
        "Most guides to a Shopify “coming soon page” are about a store that hasn’t opened. Shopify’s [password page](https://help.shopify.com/en/manual/online-store/themes/password-page) does that job: while it’s on, all of the online store’s pages are hidden from visitors and search engines, and the page can carry an email sign-up banner. It’s the right tool before your first launch.",
        "It doesn’t work for one product. On a live store, you want the rest of the catalog on sale while one page says “not yet” and takes names. That page is also worth having for its own sake. You can link to it from an announcement, people can share it, and search engines can find it before launch day.",
      ],
    },
    {
      id: "options",
      heading: "Ways to take signups for a product that isn’t out yet",
      voice: "neutral",
      blocks: [
        "Each way below collects an email. They differ in where the form sits, what the shopper agrees to, and who sends the launch email.",
        {
          type: "table",
          caption: "Taking signups before launch on Shopify",
          head: ["Approach", "Good for", "What to watch"],
          rows: [
            [
              "**Password page with an email banner**",
              "A store that hasn’t opened.",
              "Hides every page. Signups are for your marketing in general, not for one product.",
            ],
            [
              "**Product page with a sign-up form**",
              "One new product on a live store.",
              "The theme still shows its sold-out button. You send the launch email yourself.",
            ],
            [
              "**A newsletter or landing page**",
              "A launch you promote mostly off your store.",
              "The product page itself can’t take a signup, so shoppers who find it there have nowhere to go.",
            ],
            [
              "**Preorder**",
              "A product with a firm ship date and units on order.",
              "Takes payment now, and comes with a shipping promise. See [continue selling when out of stock](/use-cases/continue-selling-when-out-of-stock/).",
            ],
          ],
        },
      ],
    },
    {
      id: "without-an-app",
      heading: "How to add a coming soon product to Shopify without an app",
      voice: "neutral",
      blocks: [
        "Shopify’s free [Shopify Forms](https://help.shopify.com/en/manual/promoting-marketing/create-marketing/forms-app) app is enough to collect the emails. The steps below put a form on one product’s page only.",
        {
          type: "list",
          ordered: true,
          items: [
            "**Create the product and publish it to the Online Store.** Track its inventory, keep the quantity at zero, and leave **Continue selling when out of stock** off. Nobody can buy it, and your theme shows it as sold out.",
            "**Make a template for this product.** In the theme editor, [create a new product template](https://help.shopify.com/en/manual/online-store/themes/theme-structure/templates#create-a-new-template) based on your usual one. A form added to a template shows on every page that uses it, so a template of its own keeps the form off your other products.",
            "**Add the form to it.** In Shopify Forms, create an inline form and enter a tag in its **Tags** field, such as “launch-field-jacket”, which [the app adds to each customer who submits it](https://help.shopify.com/en/manual/promoting-marketing/create-marketing/forms-app/create). Then, in the theme editor, add the form to your new template as an app block.",
            "**Assign the template to the product.** On the product’s page in your admin, choose it under [**Theme template**](https://help.shopify.com/en/manual/online-store/themes/theme-structure/templates#apply-a-new-template-to-a-product).",
            "**Say it’s coming in the description.** “Coming in November. Leave your email below and we’ll tell you the day it goes on sale.” The button above still reads **Sold out**, so the text has to explain it.",
            "**On launch day, add stock and email the list.** Set the quantity, switch the product back to your usual template, and send one email to the customers with your tag.",
          ],
        },
        "The weak points are the sold-out label, which tells a shopper the product has been and gone, and the launch email, which depends on you remembering to send it on the right day. If you collect sizes or colors, you also have to sort the list yourself.",
      ],
    },
    {
      id: "waitlist-or-preorder",
      heading: "Waitlist or preorder for a new product",
      voice: "neutral",
      blocks: [
        "A waitlist asks for an email. A preorder asks for money, and with it you take on a ship date. Shopify’s [requirements for pre-orders](https://help.shopify.com/en/manual/products/purchase-options/pre-orders/setup) say you must have a reasonable basis for any shipping time you give.",
        {
          type: "list",
          items: [
            "**Take a waitlist** when you don’t yet know the date or the quantity, or you want to see how many people want it before you order.",
            "**Take preorders** when the units are made or ordered and you can name a ship date. See [how to run a preorder with a closing date and a unit limit](/use-cases/preorder-window-and-limit/).",
          ],
        },
        "Many launches use both, one after the other: a waitlist while you decide how many to make, then preorders once the date is firm.",
      ],
    },
    {
      id: "i-want-this-form",
      heading: "With Waitly: an “I want this” form on the product page",
      voice: "waitly",
      blocks: [
        "On the Pro plan, Waitly’s **Coming Soon** page has **Mark a product**. Pick the product in Shopify’s product picker, and its page shows the **Coming soon** block in place of the usual **Notify me** form. By default it reads “Coming soon” and “Want this when it launches?”, names the option the shopper picked, and asks for an email with an **I want this** button. The shopper ticks “Email me once when this goes on sale.” to agree to one email.",
        "Only a product with no stock for sale can be marked, because stock arriving is what launches it. The form shows on a variant that tracks stock, stops selling at zero and has none, on a product published to the Online Store. If a form is hidden, the **Form** column on the **Coming Soon** page says why.",
        "Every form asks which option the shopper wants, and offers “Any size or color is fine” on a product with more than one variant. Under **Form fields** you can also ask how many they want, from 1 to 10, and show the shopper’s country. You can reword everything in the block’s settings in the theme editor. The shopper gets a confirmation email headed “Coming soon, and you’re on the list”.",
        {
          type: "aside",
          kind: "note",
          text: "Your theme’s sold-out button still shows above the block. Place the **Coming soon** block below **Buy buttons** so the form reads as the answer to it.",
        },
      ],
      figure: {
        scene: "soon-product-page",
        caption: "Example. The quantity and country lines show only when you turn them on.",
      },
    },
    {
      id: "see-who-wants-it",
      heading: "See how many want it, and in which size",
      voice: "waitly",
      blocks: [
        "**Marked products** on the **Coming Soon** page lists each marked product with **Waiting**, **Units wanted** and **Potential revenue**. Potential revenue is an estimate of what the shoppers waiting could spend, from the price and your store’s past rate of buying after an alert. It shows once your store has sent enough alerts to have a rate.",
        "Select the product to open its waitlist. Its **Coming Soon** card shows the **Most wanted** variants, **Units wanted** and, if you ask for it, **Shopping country**. That is the size mix for your first order, from people who asked.",
        "Signups are counts of interest, not orders. Nobody has paid, and some of the list won’t buy on the day.",
      ],
      figure: {
        scene: "soon-demand",
        caption: "Example. A product marked Coming Soon, with the demand so far.",
      },
    },
    {
      id: "launch-email",
      heading: "Launch by adding stock: one email to everyone who asked",
      voice: "waitly",
      blocks: [
        "There is no launch button. When you add stock in Shopify, the product launches: Waitly emails the shoppers waiting, the mark ends by itself, and the product moves to **Launched**, which lists launches from the last 90 days with **Alerted**, **Bought after alert** and **Recovered revenue**.",
        "The email says the product “is now available”, never “back in stock”, because it never sold before. It has a **Buy it now** button and the shopper’s place in line. On Growth and Pro you can write your own subject, heading, message and button under **Launch alert** in Settings.",
        "Each shopper is emailed when the variant they asked for gets stock. A shopper who ticked “Any size or color is fine” is emailed when the first variant does. So add stock to every variant you’re launching at the same time, or the shoppers waiting for the rest hear later. The mark ends with the first variant’s stock, and sizes still at zero show the **Notify me** form, if that block is on the page.",
        "The email reserves nothing, so it is first come, first served. If the list is longer than the stock, your Pro release settings apply as they do to any restock: alerts in batches, and priority rules that put tagged or returning customers first. See [when a restock sells out before your waitlist can buy](/use-cases/restock-sells-out-before-waitlist/).",
      ],
      figure: {
        scene: "soon-launch-email",
        caption: "Example. Waitly’s own wording for the launch email.",
      },
    },
  ],
  features: ["comingSoon"],
  level: "pro",
  setup: [
    {
      guide: "coming-soon-block-and-fields",
      note: "Keep the **Notify me** block on the page too. Coming Soon takes its place only on marked products.",
    },
    { guide: "mark-coming-soon", note: "The product must have no stock for sale." },
    { guide: "see-whos-waiting" },
    { guide: "customize-email-text", note: "Optional. Word the **Launch alert** your way." },
    { guide: "release-in-batches", note: "Optional, for a list longer than your first stock." },
  ],
  limits: [
    "Coming Soon is on the Pro plan only. If you leave Pro, your marks are kept, but the page shows **Notify me** in place of the Coming Soon form. Shoppers already waiting still get their launch email.",
    "There is no scheduled launch time. The product launches when stock is added in Shopify, whenever that is.",
    "The product page is public. Waitly doesn’t hide it, put it behind a password, give early access to some shoppers, or stop bots.",
    "Your theme’s own button still says **Sold out** above the form. Waitly doesn’t change the theme’s buttons.",
    "Signups are for one email about this product. They don’t join your marketing list, and Waitly doesn’t pass them to Klaviyo or Mailchimp. Waitly sends email only, no SMS.",
    "The block needs an Online Store 2.0 theme and goes on product pages. There is no countdown and no public count of signups.",
    "Each launch email uses one of your plan’s restock alerts. Pro has 20,000 each billing cycle. See [pricing](/pricing/).",
  ],
  faqs: [
    {
      q: "Can I make a coming soon page for one product without hiding my store?",
      a: "Yes. Shopify’s password page hides the whole store, so leave it off. Publish the product with no stock and put a sign-up form on its page, with an app or with a form on a template of its own.",
    },
    {
      q: "Will the product page show “Sold out”?",
      a: "Your theme decides that, and most say **Sold out** for a product with no stock. With Waitly, the Coming Soon form shows below the theme’s buttons and is headed “Coming soon”.",
    },
    {
      q: "Can Waitly launch the product at a set time?",
      a: "No. The product launches when you add stock in Shopify. Add it at the time you announced.",
    },
    {
      q: "What if a shopper signs up twice?",
      a: "Their answers are updated rather than added again, and they see a message saying so.",
    },
    {
      q: "Can shoppers who signed up get a discount or early access?",
      a: "Not a discount. Everyone waiting gets the same launch email when the stock arrives. On Pro, priority rules can alert tagged or returning customers first, and alerts in batches give them time to buy before the next group hears.",
    },
    {
      q: "Can I use the list for marketing afterward?",
      a: "Shoppers agreed to one email when the product goes on sale, not to marketing. Ask them separately, for example in your store’s newsletter sign-up.",
    },
  ],
  related: ["back-in-stock-notifications-shopify", "preorder-window-and-limit"],
};
