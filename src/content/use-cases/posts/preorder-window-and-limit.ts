import type { UseCasePost } from "../types";

export const post: UseCasePost = {
  slug: "preorder-window-and-limit",
  title: "How to run a Shopify preorder with a closing date and a unit limit",
  metaTitle: "A Shopify preorder with a closing date and a limit",
  description:
    "Open a preorder on a set date, close it on another, and stop at the units you can make. How to do it in Shopify alone, and what to decide first.",
  cardHeadline: "A preorder with a closing date and a unit limit",
  summary:
    "A limited preorder needs three things Shopify doesn’t give a pre-order on its own: an opening time, a closing time and a cap. Here is how to set each one, with an app or without.",
  cover: "window-preorder-page",
  published: "2026-10-05",
  answer: [
    "A limited preorder opens at a set time, closes at another, and stops at the number of units you can make or buy. Shopify can schedule a product to appear, and its inventory count can stop sales at a number, but no setting closes a pre-order on a date. Without an app you close it yourself, or with a Shopify Flow workflow.",
    "Before you open it, decide four things: the cap, the closing time, the ship date, and what the page shows once the preorder ends. The settings are the easy part.",
  ],
  sections: [
    {
      id: "decide-first",
      heading: "What to decide before a limited preorder opens",
      voice: "neutral",
      blocks: [
        "A preorder with no end and no cap is an open promise. Dates and a limit turn it into a run you can plan: you know when to place the production order and how many to place.",
        {
          type: "list",
          items: [
            "**The cap.** Use the number your supplier or workshop has confirmed, not the number you hope to sell. Every unit past it is an order you may have to refund.",
            "**The closing time, with its time zone.** “Closes Friday” means different hours to shoppers in different places. Give a date, a time and the zone, and use the same ones everywhere you announce it.",
            "**The ship date.** Shopify’s requirements for pre-orders say you [must have a reasonable basis](https://help.shopify.com/en/manual/products/purchase-options/pre-orders/setup) for any shipping time you give, that with no date you must reasonably expect to ship within 30 days, and that if you can’t ship in time you must give a revised date and explain the customer’s right to cancel or get a refund.",
            "**What the page does afterward.** Leave it up as sold out, with a way to hear about the next run, or take it down. A page that stays up keeps the links people shared working.",
          ],
        },
      ],
    },
    {
      id: "options",
      heading: "Opening, closing and capping a preorder in Shopify",
      voice: "neutral",
      blocks: [
        "Each of the three jobs has a way to do it in Shopify without an app. None of them knows about the others, so you run them side by side.",
        {
          type: "table",
          caption: "The parts of a limited preorder in Shopify without an app",
          head: ["Job", "How, in Shopify", "What to watch"],
          rows: [
            [
              "**Open on a date**",
              "[Schedule publishing](https://help.shopify.com/en/manual/shopify-admin/productivity-tools/future-publishing) to the Online Store.",
              "Whole products only, not single variants. The product must be Active at that time, or it isn’t published.",
            ],
            [
              "**Close on a date**",
              "Remove the product from the Online Store by hand, or with a [Shopify Flow scheduled workflow](https://help.shopify.com/en/manual/shopify-flow/reference/triggers/scheduled-time).",
              "The page goes away. Shoppers who arrive later have nothing to buy and nowhere to leave an email.",
            ],
            [
              "**Stop at a number**",
              "Set the available quantity to the cap and leave **Continue selling when out of stock** off.",
              "Set per variant, so you split the cap across sizes in advance. Shopify counts stock you don’t have yet.",
            ],
            [
              "**Tell the shopper**",
              "The product description, and a line in the order confirmation.",
              "The button still reads **Add to cart**, and nothing in the cart says it ships later.",
            ],
          ],
        },
      ],
    },
    {
      id: "without-an-app",
      heading: "How to run a limited preorder on Shopify without an app",
      voice: "neutral",
      blocks: [
        {
          type: "list",
          ordered: true,
          items: [
            "**Make the product and set it to Active.** Leave it unpublished from the Online Store for now.",
            "**Set the cap as stock.** On each variant, turn on inventory tracking and set the available quantity to that variant’s share of the run, such as 30 small, 50 medium, 50 large and 20 extra large. When a variant reaches zero it shows as sold out.",
            "**Write the terms at the top of the description.** “Preorder. Ships around November 20. Closes October 31 at 23:59 Eastern.” The description is what the shopper reads before **Add to cart**, so it has to carry everything.",
            "**Schedule the opening.** In the product’s **Publishing** section, choose the date and time for the Online Store and select **Schedule publishing**.",
            "**Close it on time.** At the closing time, remove the product from the Online Store, or set every variant’s quantity to zero so the page stays up as sold out. A Shopify Flow workflow with a scheduled time can do the removal for you.",
            "**Mark the orders and correct the stock.** Tag the preorder orders so you can find them when the stock arrives, and set the real count in Shopify when it lands. Until then, Shopify believes it had stock it didn’t.",
          ],
        },
        "The split by size is the weak point. If the medium sells out on the first day and the extra large never does, the run closes with units left and shoppers turned away. The other choice is one shared count, which Shopify’s inventory can’t hold across variants.",
      ],
    },
    {
      id: "after-it-closes",
      heading: "When the preorder closes or sells out",
      voice: "neutral",
      blocks: [
        "Place the production order for what was sold, not for the cap. Cancellations before the closing time can leave the two apart.",
        "Then keep the shoppers posted. A short email at the closing time, with the ship date repeated, answers most of the questions before they’re asked. If the date slips, the same Shopify requirements apply: a revised date and the right to cancel. See [what to tell customers when a preorder will ship late](/use-cases/preorder-shipping-delay/).",
        {
          type: "aside",
          kind: "tip",
          text: "Keep the page up as sold out rather than taking it down. A sold-out page with a back-in-stock form turns late arrivals into a list for the next run. See [back in stock notifications on Shopify](/use-cases/back-in-stock-notifications-shopify/).",
        },
      ],
    },
    {
      id: "open-and-close-on-dates",
      heading: "With Waitly: open and close preorder on set dates",
      voice: "waitly",
      blocks: [
        "In Waitly, a preorder policy covers the products, variants, collections or tags you choose. On the Growth and Pro plans, its **When preorder runs** card has **Between these dates**: an **Opens on** date and **Opens at** time, and a **Closes on** date and **Closes at** time. Times are 24-hour, in your store’s time zone, which the card names under the fields.",
        "Leave the opening empty to start now, or the closing empty to run until you turn the policy off. Once saved, the card says what the policy will do, such as “This policy is on, and opens on October 15 at 09:00 (America/New_York).” On the **Preorders** page, the policy’s status reads **On** with “Opens …” under it while it waits, and “Ended” once its dates have passed.",
        "Before it opens and after it closes, the policy offers nothing, as if it were off. The covered variants stop selling at zero stock, so the product page shows them as sold out. The policy stays on, and you can change the dates to run it again.",
        {
          type: "aside",
          kind: "note",
          text: "With **Offer preorder only while a variant is sold out** ticked, which is how a new policy starts, a variant with stock sells that stock first and takes preorders once it reaches zero. For a product you haven’t made yet, keep its stock at zero.",
        },
      ],
      figure: {
        scene: "window-dates",
        caption: "Example. **Between these dates** is on the Growth and Pro plans.",
      },
    },
    {
      id: "unit-limit",
      heading: "Stop preorders at the number of units you have coming",
      voice: "waitly",
      blocks: [
        "**Maximum units per product** is on the same card, on every plan. Type the size of the run, and the product stops offering preorder once it has taken that many units. The count covers all of the product’s variants together, so you don’t have to guess the size mix in advance. A cancelled or refunded unit is given back.",
        "When a product reaches its limit, a line under the field names it, such as “Harbor overshirt reached 150 units, so it no longer offers preorder.” The **Preorders** list shows a count under the policy’s status, such as “Limit reached on 1 of 3 products”. The shopper sees the variant as sold out.",
        "The count belongs to the policy and doesn’t reset when the dates pass. To run a second batch of the same product, raise the number or make a new policy.",
      ],
      figure: {
        scene: "window-limit-reached",
        caption: "Example. A limit of 150 units, reached on one of the policy’s three products.",
      },
    },
    {
      id: "what-the-shopper-sees",
      heading: "Show the ship date and the closing date on the page",
      voice: "waitly",
      blocks: [
        "The **Pre-order** block goes on your product page, above your theme’s buttons. On every plan it shows a “Pre-order” badge, “Pay in full today. This item ships later.” and “Cancel any time before it ships for a full refund.” Your theme’s **Add to cart** and **Buy it now** buy the preorder, and Shopify shows “Pre-order” under the item in the cart and at checkout.",
        "On Growth and Pro, add a **Ship estimate** to the policy: a date, a range of dates, or a time after the order. The block then reads “Pay in full today. Ships around November 20, 2026.”, and the cart line carries it too. A **Message** of up to 200 characters shows under the terms. It’s a good place for the closing date. The message is fixed text, so change it if you move the dates.",
        "Each order is held in Shopify until you release it, tagged “waitly-preorder”, and listed under **Preorders** in Waitly. On Growth, give the policy its own order tag, such as “fall-drop”, to filter this run’s orders in Shopify. On Pro, **Preorder volume** on Analytics shows how many units of each variant were preordered, which is the size mix for your production order.",
      ],
      figure: {
        scene: "window-preorder-page",
        caption: "Example. A ship estimate and a message, both on the Growth and Pro plans.",
      },
    },
  ],
  features: ["preorders"],
  level: "growth",
  setup: [
    { guide: "create-preorder-policy" },
    {
      guide: "add-preorder-block",
      note: "Do this before the opening time. Without the block, covered products sell as ordinary orders.",
    },
    {
      guide: "preorder-timing-and-limits",
      note: "The dates need Growth. The unit limit is on every plan.",
    },
    { guide: "preorder-message-and-ship-estimate", note: "Growth and Pro." },
    { guide: "manage-preorders" },
    { guide: "preorder-volume", note: "Pro." },
  ],
  limits: [
    "Payment is in full at checkout. There are no deposits, part payments, charge-later options or preorder discounts.",
    "There is no limit per customer. One shopper can buy as many units as the product has left.",
    "The limit is per product, across all its variants. You can’t give each size its own number.",
    "The limit is checked after each sale. Preorder closes about a minute after the order that reaches it, and checkouts already under way can still finish, so a busy launch can go a few units over.",
    "The block has no countdown and no count of units left. When the dates pass or the limit is reached, the shopper sees the variant as sold out, with no reason given.",
    "The opening is the same for everyone. Waitly doesn’t hide the page before it opens, give early access to some shoppers, or stop bots.",
    "Preorders count against your plan’s allowance, one per order line. Growth has 500 each billing cycle. When they’re used up, preorder pauses on every product until the cycle resets, so a large run on Growth can stop short. Pro is unlimited. See [pricing](/pricing/).",
    "A Waitly preorder is a Shopify pre-order purchase option. Shopify says customers [can’t buy pre-orders with the Shop Pay, Apple Pay or Google Pay accelerated checkouts, or with local payment methods such as Klarna](https://help.shopify.com/en/manual/products/purchase-options/pre-orders/setup), and that pre-orders work on the Online Store and custom storefronts only.",
    "The block needs an Online Store 2.0 theme and goes on product pages.",
  ],
  faqs: [
    {
      q: "Can a Shopify preorder start and end on its own?",
      a: "Shopify can publish a product at a set time, and a Shopify Flow workflow can remove it at another. In Waitly on Growth and Pro, a policy’s **Between these dates** opens and closes preorder at the times you set, and the product stays up as sold out afterward.",
    },
    {
      q: "Does the limit count each size separately?",
      a: "No. **Maximum units per product** counts all of a product’s variants together. In Shopify without an app, the inventory count is per variant, so you split the run across sizes yourself.",
    },
    {
      q: "Can I limit how many one customer preorders?",
      a: "Not in Waitly. The limit is a total for each product.",
    },
    {
      q: "What do shoppers see after the preorder closes?",
      a: "The variant shows as sold out, as if the policy were off. If the Notify me block is on the page too, its form shows on that variant, so a shopper can ask to hear when it’s back.",
    },
    {
      q: "Can I run the same preorder again later?",
      a: "Yes. Change the dates on the policy. The units already sold still count toward the limit, so raise the number, or make a new policy for the new run.",
    },
    {
      q: "Which time zone do the dates use?",
      a: "Your store’s time zone, which the card names under the time fields. Use the same time in your announcement.",
    },
  ],
  related: ["continue-selling-when-out-of-stock", "preorder-shipping-delay"],
};
