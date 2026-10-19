import type { UseCasePost } from "../types";

export const post: UseCasePost = {
  slug: "made-to-order-production-time",
  title: "Made-to-order products on Shopify: how to show the production time",
  metaTitle: "Made-to-order products on Shopify: show the production time",
  description:
    "Shopify has no made-to-order setting. How to sell an item you make after the order, show how long it takes, and keep each order’s promise.",
  cardHeadline: "Made-to-order products: show the production time",
  summary:
    "Shopify has no setting for goods you make after the order. Here is how to keep them on sale, say how long they take where the shopper will read it, and keep track of what you promised each order.",
  cover: "mto-product-page",
  published: "2026-10-19",
  answer: [
    "Shopify has no made-to-order setting. You keep the product on sale at zero stock, either by not tracking its inventory or by tracking it with **Continue selling when out of stock** turned on, and you say the production time yourself: in the description, in the order confirmation, and wherever else the shopper looks.",
    "The production time is a promise. In the US, if you state none, you must expect to ship within 30 days. State a time you can keep on a busy week, not a quiet one, and know what you’ll do when an order runs over.",
  ],
  sections: [
    {
      id: "selling-at-zero",
      heading: "How to add made to order on Shopify",
      voice: "neutral",
      blocks: [
        "Shopify stops selling a variant when its tracked stock reaches zero. A made-to-order piece has no stock until you make it, so you need one of two settings on each of its variants.",
        {
          type: "table",
          caption: "Two ways to keep a made-to-order variant on sale in Shopify",
          head: ["Setting", "What happens", "What to watch"],
          rows: [
            [
              "**Inventory not tracked**",
              "The variant is always for sale. Shopify keeps no count.",
              "Nothing tells you how many are owed. Ready-made pieces and made-to-order ones look the same.",
            ],
            [
              "**Inventory tracked, with [Continue selling when out of stock](https://help.shopify.com/en/manual/products/inventory/setup/selling-when-out-of-stock)**",
              "Ready-made units sell first. Past zero, the variant keeps selling, and the count goes below zero by the number owed.",
              "Set per variant. Shopify says the setting doesn’t apply to orders placed from Shopify POS.",
            ],
          ],
        },
        "Tracking with the setting turned on is usually the better choice. The count below zero is your queue, and if you keep a few finished pieces, they go out first.",
        "Either way, the product page looks like any in-stock listing. The button reads **Add to cart**, and nothing says the piece doesn’t exist yet. That is the part you have to add.",
      ],
    },
    {
      id: "where-to-show-it",
      heading: "Where to show the production time",
      voice: "neutral",
      blocks: [
        "Shoppers miss a production time stated in one place only. Put it where they decide, where they pay, and where they look afterward.",
        {
          type: "list",
          items: [
            "**The product description**, near the top: “Made to order. Ships 3–4 weeks after you order.” Give the time to ship, not the time to make, since that’s what the shopper is waiting for.",
            "**The order confirmation.** Edit Shopify’s notification so the email repeats the time. It’s what the shopper will search for when they wonder where their order is.",
            "**Your shipping policy and FAQ page**, for shoppers who check before they buy.",
          ],
        },
        "Shopify can show delivery dates at checkout, from a **Fulfillment time** you set under **Settings**, **Shipping and delivery**, **Estimated delivery dates**. It doesn’t help here: Shopify says [expected delivery dates are displayed at checkout if a product’s inventory exceeds 0](https://help.shopify.com/en/manual/fulfillment/setup/delivery-expectations/manual-delivery-dates), and that they don’t work with shipping rates from third-party apps.",
      ],
    },
    {
      id: "how-long",
      heading: "How long a production time can you give?",
      voice: "neutral",
      blocks: [
        "Any time you can keep. In the US, the [Mail, Internet, or Telephone Order Merchandise Rule](https://www.ecfr.gov/current/title-16/chapter-I/subchapter-D/part-435) says you need a reasonable basis to expect to ship within the time you state, or within 30 days of the order if you state none. If you can’t, you must offer the customer the choice to agree to the delay or cancel for a prompt refund. Shopify’s [requirements for pre-orders](https://help.shopify.com/en/manual/products/purchase-options/pre-orders/setup) say the same for pre-orders sold through its purchase options.",
        "So a made-to-order item with no stated time is, in the US, a 30-day promise. Six weeks is fine if you say six weeks before the order.",
        "Give a range rather than a single number, and base the far end on your busiest weeks. A range of 3–4 weeks that you meet reads better than 2 weeks that you miss.",
        {
          type: "aside",
          kind: "note",
          text: "In the UK, the 14-day right to cancel an online order doesn’t apply to [goods made to the consumer’s specifications or clearly personalised](https://www.legislation.gov.uk/uksi/2013/3134/regulation/28). A standard piece you make after the order isn’t excluded just because you make it later. This isn’t legal advice.",
        },
      ],
    },
    {
      id: "capacity",
      heading: "Limiting how many orders you take each week",
      voice: "neutral",
      blocks: [
        "Continue selling has no ceiling. If a product is shared widely, the queue can grow past what you can make in the time you promised.",
        "Shopify’s own stock count can stand in for capacity. Track inventory, leave **Continue selling when out of stock** off, and set the quantity to the number of slots you have. When they’re taken, the variant shows as sold out. Top the number up each week by hand. The count is per variant, so you split the week’s slots across colors or sizes in advance.",
        "The other way is to lengthen the production time as the queue grows. Change the description, and treat orders already placed by the time you told them.",
      ],
    },
    {
      id: "show-production-time",
      heading: "With Waitly: “Ships 3–4 weeks after you order” on the product page",
      voice: "waitly",
      blocks: [
        "In Waitly, a preorder policy covers the products, variants, collections or tags you choose. A “made-to-order” product tag is a good rule: every product you tag later is covered too. Choose **Whenever this policy is on** under **When preorder runs**, and the policy offers preorder for as long as it’s switched on.",
        "On the Growth and Pro plans, set **Ship estimate** to **A time after the order**: a number in **From**, an optional one in **To (optional)**, and **days after the order** or **weeks after the order**. Add a **Message** of up to 200 characters, such as what the shopper is waiting for.",
        "Keep inventory tracked on each covered variant, at zero for a piece you make only to order. Waitly’s Pre-order block shows only on a variant that tracks stock and has none left. A variant that doesn’t track stock never counts as sold out.",
      ],
      figure: {
        scene: "mto-policy-settings",
        caption: "Example. **Ship estimate** and **Message** are on the Growth and Pro plans.",
      },
    },
    {
      id: "what-the-shopper-sees",
      heading: "Show the production time in the cart and the receipt too",
      voice: "waitly",
      blocks: [
        "The **Pre-order** block goes above your theme’s buttons. It shows a “Pre-order” badge, “Pay in full today. Ships 3–4 weeks after you order.”, “Cancel any time before it ships for a full refund.” and your message. Your theme’s **Add to cart** and **Buy it now** buy the piece.",
        "In the cart and at checkout, Shopify shows “Pre-order” under the item with a **Ships** line, “3–4 weeks after order”, and the line is part of the order. Alongside Shopify’s confirmation, Waitly emails a Preorder receipt that names each item with when it’s expected to ship, and links to a page where the shopper can cancel.",
        "To sell ready-made pieces first, leave **Offer preorder only while a variant is sold out** ticked, which is how a new policy starts. Set the stock to what you have finished. Those sell as ordinary orders, with the block hidden, and the variant switches to made to order when the count reaches zero.",
      ],
      figure: {
        scene: "mto-product-page",
        caption: "Example. On the Free plan the block reads “Pay in full today. This item ships later.” with no message.",
      },
    },
    {
      id: "each-order-promise",
      heading: "Keep track of when each order is due",
      voice: "waitly",
      blocks: [
        "With a time after the order, each order gets its own date: the day it was placed plus the larger number. An order placed on October 6 with “3–4 weeks” is due by November 3. Each order is held in Shopify until you release it, tagged “waitly-preorder”, and listed under **Preorders** in Waitly with the estimate the shopper saw.",
        "If an order’s date passes and it hasn’t shipped, Waitly emails the shopper the next day. The email asks them to keep or cancel by a date at least 7 days away. A shopper who chooses **Keep my preorder** stays in line. One who doesn’t answer by then is cancelled and refunded in full, automatically.",
        "If the queue grows, lengthen the estimate before you fall behind. Orders whose date moves later get a delay notice with **You were told** and **Now**. If the new date is more than 30 days past the first, the shopper must agree to wait. Before you save, a banner counts who will be told.",
      ],
      figure: {
        scene: "mto-preorders-list",
        caption: "Example. The **Ships** column shows the estimate each shopper saw.",
      },
    },
  ],
  features: ["preorders"],
  level: "growth",
  setup: [
    {
      guide: "create-preorder-policy",
      note: "Name it something like “Made to order”, and cover the products with a tag.",
    },
    { guide: "preorder-timing-and-limits", note: "Choose **Whenever this policy is on**." },
    { guide: "add-preorder-block", note: "Without the block, covered products sell as ordinary orders." },
    { guide: "preorder-message-and-ship-estimate", note: "Growth and Pro. Choose **A time after the order**." },
    { guide: "manage-preorders" },
    { guide: "change-ship-date", note: "When the production time gets longer." },
  ],
  limits: [
    "There is no weekly or monthly capacity. **Maximum units per product** is a total for the policy that never resets, so it can’t stand in for a week’s slots.",
    "A shopper can cancel any time before the piece ships, from the link in their receipt, and Waitly refunds them in full at once, with no approval from you. That holds after you’ve started work, and you can’t turn it off.",
    "Waitly adds no fields for engraving, measurements or other personal details, and no option to charge for them.",
    "Payment is in full at checkout. There are no deposits, part payments or balances due on shipping.",
    "One ship estimate per policy. Products with different production times need a policy each, and a variant takes preorder from one policy only.",
    "Every made-to-order order is a preorder, counted one per order line against your plan’s allowance: 20 each billing cycle on Free and 500 on Growth. When they’re used up, preorder pauses on every product until the cycle resets. Pro is unlimited. See [pricing](/pricing/).",
    "On the Free plan there is no ship estimate. Shoppers read “This item ships later.”, and Waitly treats each order as promised 30 days after it was placed.",
    "A Waitly preorder is a Shopify pre-order purchase option. Shopify says customers [can’t buy pre-orders with the Shop Pay, Apple Pay or Google Pay accelerated checkouts, or with local payment methods such as Klarna](https://help.shopify.com/en/manual/products/purchase-options/pre-orders/setup).",
    "The block needs an Online Store 2.0 theme and goes on product pages.",
  ],
  faqs: [
    {
      q: "Should I turn off inventory tracking for made-to-order products?",
      a: "Without an app, either way works, though tracking with **Continue selling when out of stock** shows how many you owe. With Waitly, keep tracking on: the Pre-order block shows only on a variant that tracks stock and has none left.",
    },
    {
      q: "Can I stop taking orders when I’m fully booked?",
      a: "Not on a weekly basis in Waitly. In Shopify, set each variant’s stock to the slots you have, leave **Continue selling when out of stock** off, and top it up each week.",
    },
    {
      q: "Can a customer cancel a made-to-order item?",
      a: "With Waitly, yes, any time before it ships, for a full refund. Without an app, cancellations follow your own policy and the law where you sell. In the UK, goods made to the customer’s specifications are excluded from the 14-day right to cancel.",
    },
    {
      q: "What happens if an order takes longer than the time I gave?",
      a: "With Waitly, the day after an order’s date passes unshipped, the shopper is asked to keep or cancel. If they don’t answer by the date given, the order is cancelled and refunded. Lengthen the estimate before then to tell them in advance.",
    },
    {
      q: "Can different products have different production times?",
      a: "Yes, with a policy for each. Each policy has one ship estimate, and covers its own products, collections or tags.",
    },
    {
      q: "Does the production time show at checkout?",
      a: "With Waitly on Growth or Pro, yes: the item carries a **Ships** line in the cart and at checkout. Shopify’s own delivery dates show only for products with inventory above zero.",
    },
  ],
  related: ["continue-selling-when-out-of-stock", "preorder-shipping-delay"],
};
