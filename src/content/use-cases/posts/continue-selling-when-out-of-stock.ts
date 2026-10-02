import type { UseCasePost } from "../types";

export const post: UseCasePost = {
  slug: "continue-selling-when-out-of-stock",
  title: "“Continue selling when out of stock” on Shopify: backorder, preorder or waitlist?",
  metaTitle: "“Continue selling when out of stock” on Shopify",
  description:
    "What Shopify’s “Continue selling when out of stock” box does, what it doesn’t tell the shopper, and when a preorder or a waitlist is the better choice.",
  cardHeadline: "“Continue selling when out of stock”: what the box leaves out",
  summary:
    "Shopify’s checkbox lets shoppers buy at zero stock, but the page still looks in stock and nothing caps the orders. Here is how it compares with a preorder and a waitlist.",
  published: "2026-10-02",
  answer: [
    "Ticking **Continue selling when out of stock** lets shoppers buy a variant at zero stock. That’s all it does. The product page looks the same as an in-stock one, the shopper isn’t told it ships later, and nothing stops the orders at the number of units you have coming.",
    "So you have three choices. Tick the box and say the ship date yourself (a backorder). Use a preorder, which says it on the page and holds the order. Or take no money and collect emails until the stock is back (a waitlist). Which one fits depends on how sure you are of the date.",
  ],
  sections: [
    {
      id: "what-it-does",
      heading: "What “Continue selling when out of stock” does",
      voice: "neutral",
      blocks: [
        "It’s a setting on each variant, in the Inventory section of the product in your Shopify admin. In the current admin you select **Sell when out of stock**, then **Continue selling when out of stock**. You can only choose it on a variant that [tracks inventory](https://help.shopify.com/en/manual/products/inventory/setup/set-up-inventory-tracking).",
        "Without it, a tracked variant at zero can’t be bought until you add stock. With it, shoppers keep buying and the count goes below zero. Shopify [lists four reasons](https://help.shopify.com/en/manual/products/inventory/setup/selling-when-out-of-stock) to use it: preorders, stock that’s coming soon, selling first and ordering supplies later, and not tracking real quantities in Shopify.",
        "Two details from the same page. The setting doesn’t apply to Shopify POS, where staff can sell below zero anyway after a warning. And if you have several locations, a variant shows as out of stock online when the locations that fulfill online orders have none, whatever another location holds.",
      ],
    },
    {
      id: "what-the-shopper-sees",
      heading: "What the shopper sees after you tick it",
      voice: "neutral",
      blocks: [
        "Nothing new. The setting changes whether the variant can be bought, and adds no wording of its own. Unless you or your theme add some, the page has the same **Add to cart** button as a product on the shelf, and the order arrives in your admin like any other unfulfilled order.",
        {
          type: "list",
          items: [
            "**No ship date.** The shopper expects your usual delivery time.",
            "**No cap.** If 40 units are on the way and 90 people order, Shopify takes all 90 orders.",
            "**No mark on the order.** You have to remember which orders are waiting for the delivery.",
          ],
        },
        "None of this is a fault in the setting. It’s an inventory rule, and the telling is left to you.",
      ],
      figure: {
        scene: "continue-plain-listing",
        caption: "Example. With the box ticked and none in stock, the product page looks like any other.",
      },
    },
    {
      id: "backorder-preorder-waitlist",
      heading: "Backorder, preorder or waitlist: the three choices",
      voice: "neutral",
      blocks: [
        "Shopify describes a back order as a customer buying [a product that’s temporarily unavailable, for shipment at a later date](https://www.shopify.com/blog/what-is-back-order). The plain checkbox gives you that. A preorder on Shopify is a separate purchase option, and [needs a pre-order app](https://help.shopify.com/en/manual/products/purchase-options/pre-orders). A waitlist takes no order at all.",
        {
          type: "table",
          caption: "The plain checkbox, a preorder and a waitlist on Shopify, side by side",
          head: ["", "Plain checkbox (backorder)", "Preorder", "Waitlist"],
          rows: [
            [
              "**What the shopper sees**",
              "An ordinary product page, unless you add a line yourself.",
              "A pre-order label and terms before they pay.",
              "A sold-out page with a form for their email.",
            ],
            [
              "**When they pay**",
              "In full, at checkout.",
              "In full, in part or later, depending on the app.",
              "Not until the product is back and they choose to buy.",
            ],
            [
              "**Limit on orders**",
              "None while the box is ticked.",
              "Depends on the app.",
              "Not needed. Nobody has paid.",
            ],
            [
              "**Checkout**",
              "An ordinary order.",
              "Shopify says shoppers [can’t use Shop Pay, Apple Pay or Google Pay accelerated checkouts, or local payment methods such as Klarna](https://help.shopify.com/en/manual/products/purchase-options/pre-orders/setup).",
              "Nothing to check out.",
            ],
            [
              "**If the stock is late**",
              "You find the orders and email each customer.",
              "You still owe an update. Some apps send it for you.",
              "Nothing is owed. The email goes out when stock arrives.",
            ],
            [
              "**Fits when**",
              "Stock is days away and delivery will be close to normal.",
              "You have a date, the wait is longer, or you want the orders kept apart.",
              "You don’t know when, or whether, it comes back.",
            ],
          ],
        },
      ],
    },
    {
      id: "without-an-app",
      heading: "How to take backorders on Shopify without an app",
      voice: "neutral",
      blocks: [
        "The checkbox is enough for a short gap, if you do the telling yourself.",
        {
          type: "list",
          ordered: true,
          items: [
            "**Tick the box on the right variants.** It’s set per variant, so tick only the sizes or colors that have stock coming.",
            "**Write the ship date in the description.** Put it near the top: “Size M ships from November 2.” The description is shared by every variant, so name the ones it applies to. Give a date, not “soon”.",
            "**Cap the orders with inventory.** A ticked box has no limit. To stop at what’s inbound, leave the box unticked and set the variant’s available quantity to the units on the way. Sales then stop at zero. The cost is that Shopify now counts stock you don’t have yet, so correct it when the delivery lands.",
            "**Add a line to the order confirmation.** In Shopify, open **Settings**, then **Notifications**, and [edit the order confirmation template](https://help.shopify.com/en/manual/orders/notifications/edit-template). The template is used for every order, so the line has to make sense on all of them unless you add a condition in the template’s code.",
            "**Mark the orders.** Tag or note each one as it comes in, so you can find them when the stock arrives.",
            "**Untick the box afterward.** If you leave it on, the variant keeps selling below zero the next time it runs out.",
          ],
        },
        "What you can’t do this way is change the button’s label or show the date in the cart without editing your theme.",
      ],
    },
    {
      id: "when-to-use-a-waitlist",
      heading: "When a waitlist is the better choice",
      voice: "neutral",
      blocks: [
        "If you can’t name a date, don’t take the money. Shopify’s own requirements for pre-orders say you [must have a reasonable basis](https://help.shopify.com/en/manual/products/purchase-options/pre-orders/setup) for the shipping time you give, that with no date you must reasonably expect to ship within 30 days, and that if you can’t, you owe the customer a revised date and their right to cancel.",
        "A waitlist avoids all of that. The variant stays sold out, the shopper leaves an email, and they hear from you when it’s back. See [back in stock notifications on Shopify](/use-cases/back-in-stock-notifications-shopify/) for the ways to set one up, with an app or without.",
      ],
    },
    {
      id: "the-preorder-block",
      heading: "With Waitly: the page says it ships later",
      voice: "waitly",
      blocks: [
        "In Waitly you make a preorder policy and choose the products, variants, collections or tags it covers. While it’s on, Waitly sets the covered variants to keep selling when out of stock, so you don’t tick the box yourself, and adds Shopify’s Pre-order purchase option to them.",
        "The **Pre-order** block goes on your product page, above the buy buttons. On a sold-out variant it shows a “Pre-order” badge, “Pay in full today. This item ships later.” and “Cancel any time before it ships for a full refund.” In the cart and at checkout, Shopify shows “Pre-order” under the item.",
        "The block has no button of its own. Your theme’s **Add to cart** and **Buy it now** keep their labels and buy the preorder. The block’s text is fixed. On Growth and Pro you can add a ship estimate, such as “Ships around November 2, 2026”, and a message of up to 200 characters.",
        {
          type: "aside",
          kind: "warning",
          text: "The block is what makes the sale a preorder. Without it on the product template, a covered product still sells at zero stock, but as an ordinary order: not held, not tagged and not counted. Waitly warns you while it’s missing.",
        },
        "If the [Notify me block](/guide/add-notify-me-block/) is on the page too, its form still shows on that variant. A shopper who’d rather not pay yet can join the waitlist instead.",
      ],
      figure: {
        scene: "continue-preorder-panel",
        caption: "Example. The Pre-order block on the Free plan, above the theme’s own buttons.",
      },
    },
    {
      id: "sold-out-only-and-cap",
      heading: "It stops when stock arrives, or at a number you set",
      voice: "waitly",
      blocks: [
        "A new policy starts with **Offer preorder only while a variant is sold out** ticked. A variant takes preorders once its stock reaches zero and goes back to normal selling when stock arrives. There’s no box to remember to untick.",
        "**Maximum units per product** is the cap. Type the number of units you have coming, and the product stops offering preorder once it has taken that many. A cancelled or refunded unit is given back. The count covers all variants of a product together, so it can’t hold one size to its own number.",
        "On Growth and Pro you can also open and close preorder on set dates.",
      ],
      figure: {
        scene: "continue-when-preorder-runs",
        caption: "Example policy. **Between these dates** is on the Growth and Pro plans.",
      },
    },
    {
      id: "held-orders",
      heading: "Preorders are held, tagged and listed",
      voice: "waitly",
      blocks: [
        "Shopify holds every preorder order until you release it, so it can’t ship by mistake with the day’s other orders. Each one is tagged “waitly-preorder” in Shopify and listed in Waitly under **Preorders**, with its status. When the stock arrives, open the order, select **Release hold** and fulfill it as usual.",
        "The shopper gets a preorder receipt next to Shopify’s order confirmation. It says when the item is expected to ship: your ship estimate, or “within 30 days of your order” if the policy has none. Its **Keep or cancel your preorder** button opens a page on your store where they can cancel before it ships. Waitly refunds them through Shopify straight away.",
      ],
      figure: {
        scene: "continue-held-order",
        caption: "Example. A preorder in Shopify: paid, on hold and tagged.",
      },
    },
  ],
  features: ["preorders", "backInStock"],
  level: "free",
  setup: [
    { guide: "create-preorder-policy" },
    {
      guide: "add-preorder-block",
      note: "Do this straight after. Without the block, covered products sell as ordinary orders.",
    },
    { guide: "preorder-timing-and-limits", note: "The sold-out switch and the unit cap. Dates need Growth." },
    { guide: "preorder-message-and-ship-estimate", note: "Growth and Pro." },
    { guide: "shopper-preorders", note: "What the shopper sees, from the product page to the receipt." },
    { guide: "manage-preorders" },
  ],
  limits: [
    "A Waitly preorder is a Shopify pre-order purchase option, so Shopify’s restrictions on those apply. Shopify says customers [can’t buy pre-orders with the Shop Pay, Apple Pay or Google Pay accelerated checkouts, or with local payment methods such as Klarna](https://help.shopify.com/en/manual/products/purchase-options/pre-orders/setup), and that pre-orders work on the Online Store and custom storefronts only. The plain checkbox has no such restriction.",
    "Payment is in full at checkout. There are no deposits, part payments, charge-later options or preorder discounts.",
    "The block’s wording is fixed, cancel terms included, and it can’t rename your theme’s buttons. A ship estimate and your own message need Growth.",
    "With no ship estimate, which is every policy on Free, a preorder counts as promised within 30 days of the order. If it hasn’t shipped by then, Waitly asks the shopper to keep or cancel it, and refunds it if they don’t answer. On Free, use it for stock that’s less than 30 days away.",
    "The unit cap is per product, across all its variants. You can’t cap each size separately.",
    "Shoppers can cancel a preorder themselves before it ships, and the refund doesn’t wait for your approval.",
    "The Free plan takes 20 preorders each billing cycle, counted per order line. When they’re used up, preorder pauses on every product until the cycle resets. Growth has 500 and Pro is unlimited. See [pricing](/pricing/).",
    "The block needs an Online Store 2.0 theme and goes on product pages.",
  ],
  faqs: [
    {
      q: "Does “Continue selling when out of stock” tell customers the item ships later?",
      a: "No. It only allows the sale. Any ship date has to come from you, in the description or the confirmation email, or from a preorder that shows its terms on the page.",
    },
    {
      q: "Can I limit how many I sell while out of stock?",
      a: "Not with the box ticked. Without an app, leave it unticked and set the available quantity to the units you have coming. In Waitly, set **Maximum units per product** on the policy. It counts all of a product’s variants together.",
    },
    {
      q: "Is the setting per product or per variant?",
      a: "Per variant. You can keep selling the medium and leave the large sold out. A Waitly policy can also cover only some of a product’s variants.",
    },
    {
      q: "What’s the difference between a backorder and a preorder on Shopify?",
      a: "A backorder made with the checkbox is an ordinary order for something you don’t have yet. A preorder is a Shopify purchase option set up by an app: the shopper sees it labeled before paying, and the order can be held until you release it.",
    },
    {
      q: "What happens to my waitlist if I tick the box?",
      a: "In Waitly, turning it on makes the variant available, so it [counts as a restock](/guide/how-restock-alerts-work/) and the people waiting are emailed. The Notify me form then hides on that variant, because shoppers can already buy it.",
    },
    {
      q: "What if the stock arrives late?",
      a: "With the plain checkbox, you find the orders and email each customer. In Waitly on Growth and Pro, you [change the ship estimate](/guide/change-ship-date/) and the affected shoppers are sent a delay notice with a link to keep or cancel.",
    },
  ],
};
