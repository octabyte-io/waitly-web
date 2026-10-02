import type { UseCasePost } from "../types";

export const post: UseCasePost = {
  slug: "restock-sells-out-before-waitlist",
  title: "When a restock sells out before your waitlist can buy",
  metaTitle: "A restock sells out before your waitlist can buy",
  description:
    "Ten units back, forty people waiting. Why a restock email turns into a race, and how to alert in batches, put the first in line first, or reserve a unit.",
  cardHeadline: "When a restock sells out before your waitlist can buy",
  summary:
    "A small restock and a long waitlist turn one email into a race. Here is why it happens, what you can do by hand, and how batches and held units change who gets the stock.",
  published: "2026-10-02",
  answer: [
    "A back-in-stock email doesn’t set anything aside. If ten units come back and forty people are waiting, all forty get the same email, the ten fastest buy, and the other thirty click through to a sold-out page. How long someone waited makes no difference.",
    "You can change that in three ways: tell fewer people at a time, starting with the first in line; hold a unit for each of the first shoppers; or take preorders so there’s no small restock to fight over. The first you can do by hand. The second needs a draft order for each shopper, or an app that makes them for you.",
  ],
  sections: [
    {
      id: "why-it-happens",
      heading: "Why a restock sells out before the waitlist can buy",
      voice: "neutral",
      blocks: [
        "An alert is only an email. Nothing is kept for the shopper while they open it, find their card and check out.",
        "Shopify’s [inventory states](https://help.shopify.com/en/manual/products/inventory/fundamentals/inventory-states) show when a unit is set aside: it’s committed once it’s in an unfulfilled order or reserved in a draft order. Until then it’s available, and it goes to whoever completes an order first.",
        "So when the whole list is emailed at once, the shopper who signed up six weeks ago has the same chance as the one who signed up yesterday. Most of the list arrives after the stock has gone, to the second sold-out page they’ve seen for the same product.",
        "Two shoppers paying for the last unit at the same moment is a separate problem. Shopify notes that external payment providers [can result in overselling](https://help.shopify.com/en/manual/promoting-marketing/sales/flash-sales), because of the time it takes to send the checkout to the provider and back. No change to who you email fixes that.",
      ],
    },
    {
      id: "options",
      heading: "Five ways to handle ten units and forty people waiting",
      voice: "neutral",
      blocks: [
        {
          type: "table",
          caption: "Five ways to handle a restock that’s smaller than the waitlist",
          head: ["Option", "What the shopper gets", "Your work", "Fits when"],
          rows: [
            [
              "Email everyone, and say it’s limited",
              "A fair warning. Most still arrive too late.",
              "One line in the email.",
              "The list is only a little longer than the stock, or more is coming soon.",
            ],
            [
              "Email the first few by hand, in order",
              "The people who waited longest hear first.",
              "You sort the list, send in groups and watch the stock.",
              "One or two products, and you can be at your desk for the restock.",
            ],
            [
              "Hold a unit for each of the first shoppers",
              "A unit that’s theirs for a set time.",
              "One draft order per shopper, or an app that creates them.",
              "The product is scarce and missing out twice would cost you the customer.",
            ],
            [
              "Add the stock in small amounts",
              "Several chances to buy instead of one.",
              "You raise the quantity a few units at a time.",
              "You email in groups as well. Without that, it’s the same race, repeated.",
            ],
            [
              "Take preorders instead",
              "They can buy now and wait for delivery.",
              "You tell them when it ships, and deal with it if the stock is late.",
              "A larger delivery is ordered and you know roughly when it arrives.",
            ],
          ],
        },
        "The first option is the honest minimum. If you’re going to email everyone, say how few came back.",
      ],
    },
    {
      id: "by-hand",
      heading: "How to notify only the first 10 in line, without an app",
      voice: "neutral",
      blocks: [
        "Merchants ask for exactly this: an email to [“just the first 10 on the line”](https://community.shopify.com/t/waitlist-app-with-batch-alert-send-feature/233396) instead of the whole list. By hand, it looks like this.",
        {
          type: "list",
          ordered: true,
          items: [
            "**Sort your list by signup date.** You need the date each person asked, not only their email.",
            "**Make sure nothing emails the whole list for you.** If a tool sends an alert the moment the quantity goes above zero, switch that off for this product first.",
            "**Email the first group.** Match it to the stock: about ten people for ten units.",
            "**Wait, then check the stock.** If units are left after an hour or two, email the next group. Stop when it’s sold out.",
            "**Keep everyone else on the list,** in the same order, for the next restock.",
          ],
        },
        "This puts the first in line first, but it reserves nothing. Anyone who visits the product page can buy those units while your first group is reading the email.",
        "To really hold a unit, create a draft order for the shopper. Shopify lets you [reserve inventory on a draft order](https://help.shopify.com/en/manual/fulfillment/managing-orders/create-orders/create-draft) until a date and time you pick. Those units can’t be bought by other customers, and the invoice you send has a link to a checkout the customer can pay through. It’s one draft order per shopper, and you have to offer the unit to the next person when one isn’t paid.",
      ],
    },
    {
      id: "preorders-instead",
      heading: "When to take preorders instead of a small restock",
      voice: "neutral",
      blocks: [
        "If the ten units are a stopgap and a full delivery is on its way, the race may not be worth running. Each variant in Shopify has a **Continue selling when out of stock** setting, and Shopify lists “You have stock coming soon and you want to continue selling before it arrives” as [one reason to use it](https://help.shopify.com/en/manual/products/inventory/setup/selling-when-out-of-stock).",
        "With that on, everyone who wants one can order, and the question becomes when it ships, not who was fastest. Only do this when you can give a date.",
      ],
    },
    {
      id: "first-in-line",
      heading: "Who is first in line on a Waitly waitlist",
      voice: "waitly",
      blocks: [
        "On every plan, Waitly sends alerts in the order shoppers joined, and by default everyone waiting is alerted at once. The email tells each shopper where they were in line, and that the alert doesn’t hold one for them. On Free and Growth, that’s what a restock looks like.",
        "On Pro, **Waitlist priority** lets you put some shoppers ahead of join order. There are four rules, each off until you switch it on: shoppers with your VIP tag, then shoppers who have spent at least an amount you set, then shoppers with up to 20 other tags, then shoppers who have ordered from you before. Everyone else waits in the order they joined.",
        "You choose which rules apply, but not their order. Switching a rule on or off reorders the shoppers who joined while your store was on Pro straight away, including those already waiting. Priority only decides the order, so it matters most when you also send in batches or reserve units.",
      ],
      figure: {
        scene: "race-line-order",
        caption:
          "Example. A waitlist on Pro with priority rules on: **Position** is the place in line and **Why** is the rule that set it.",
      },
    },
    {
      id: "send-in-batches",
      heading: "Send restock alerts in batches",
      voice: "waitly",
      blocks: [
        "On Pro, under **Settings**, **Restock release**, choose **In batches**. Waitly then alerts a few shoppers at a time, in line order, until the item sells out.",
        {
          type: "list",
          items: [
            "**Shoppers per batch**: between 1 and 1,000.",
            "**Time between batches**: 15 minutes, 30 minutes, 1 hour or 2 hours.",
            "**Most batches**: between 2 and 10. The last batch alerts everyone still waiting.",
          ],
        },
        "Take ten units and forty shoppers, with batches of 10, an hour apart, four at most. The first ten in line are emailed at the restock. If the item sells out, the send stops there, and the other thirty keep their place for next time. If units are left after an hour, the next ten are told.",
        "The settings page plays your numbers out on your largest waitlist before you save.",
        {
          type: "aside",
          kind: "warning",
          text: "A batch reserves nothing. The units are on sale to anyone who visits the product page, so a shopper in the first batch can still miss out.",
        },
      ],
      figure: {
        scene: "race-batch-schedule",
        caption:
          "Example: 40 shoppers waiting, in batches of 10. The send stops as soon as the item sells out, so later batches may never go.",
      },
    },
    {
      id: "reserve-a-unit",
      heading: "Reserve a unit for each of the first shoppers",
      voice: "waitly",
      blocks: [
        "The third choice under **Restock release**, also on Pro, is **Reserve for the first shoppers**. Waitly holds one unit for each shopper, in line order, and sends each of them a link only they can use.",
        "The email’s subject says one is held and for how long, and the **Complete your purchase** button opens a checkout for their held unit. When the time is up, the link stops working and the next shopper in line gets the unit.",
        {
          type: "list",
          items: [
            "**Hold each unit for**: 10 minutes, 30 minutes, 1 hour or 24 hours.",
            "**Most units held at once**: between 1 and 100. Units that aren’t held stay on sale to everyone.",
          ],
        },
        "With ten units back, set **Most units held at once** to 10 and the first ten shoppers each get one. Set it to 5 and five are held while the other five are open to anyone on your store.",
        "Each hold is a draft order in your store, so this mode needs one extra permission: the first time you choose it, Waitly asks you to **Allow draft orders**, and it can’t be saved until you do.",
      ],
      figure: {
        scene: "race-held-email",
        caption: "The email a shopper gets when a unit is held for them. The times are an example.",
      },
    },
    {
      id: "what-you-see",
      heading: "See who holds a unit, and who wasn’t reached",
      voice: "waitly",
      blocks: [
        "While holds are running, the product’s waitlist shows a **Held now** card: each shopper, their place in line and when their hold ends. Removing a shopper there ends their hold, and the unit goes to the next shopper in line.",
        "In **Analytics**, under **Restock alerts**, a batched send shows which batch it’s on and when the next one goes. **Not sent** counts the shoppers the batches never reached. They’re still on the waitlist. For a reserved send, **Held** counts the units held, and pointing at it shows how many sold, lapsed or were released.",
      ],
      figure: {
        scene: "race-held-now",
        caption: "Example: ten units held just after a restock, one for each of the first ten shoppers in line.",
      },
    },
  ],
  features: ["restockRelease", "backInStock"],
  level: "pro",
  setup: [
    { guide: "how-restock-alerts-work", note: "What counts as a restock, and what every plan does by default." },
    { guide: "waitlist-priority", note: "Optional. Skip it to keep the order shoppers joined in." },
    { guide: "release-in-batches" },
    { guide: "reserve-units", note: "Use this instead of batches when a unit should be held. You pick one mode." },
    { guide: "restock-alert-log", note: "Where to see batches, held units and shoppers not reached." },
  ],
  limits: [
    "Waitly doesn’t control Shopify’s checkout. If two people pay for the last unit that isn’t held at the same moment, Waitly can’t stop it.",
    "Batches reserve nothing. Only **Reserve for the first shoppers** holds stock, and it holds one unit per shopper.",
    "Batches, held units and priority rules are on Pro. On Free and Growth, everyone waiting is alerted at once, in the order they joined.",
    "There’s no bot protection, no purchase limit per customer and no raffle or draw. Shopify’s own [bot protection](https://help.shopify.com/en/manual/checkout-settings/bot-protection) is for stores on Shopify Plus.",
    "The release settings apply to every restock in your store. You can’t set a different batch size or hold time for one product or variant.",
    "A batched send ends when the restock is more than 24 hours old, or when a newer restock happens. Anyone it didn’t reach stays on the waitlist.",
    "Items on preorder are never reserved. They keep selling, so their restock goes out all at once.",
    "It sends email only. There’s no SMS or push notification.",
  ],
  faqs: [
    {
      q: "Can I notify only the first 10 people on my waitlist?",
      a: "Yes. By hand, sort your list by signup date and email the first ten. In Waitly on Pro, choose **In batches** and set **Shoppers per batch** to 10. The next ten are only emailed if stock is left when the next batch is due.",
    },
    {
      q: "Does a back-in-stock email reserve the item?",
      a: "No. An ordinary alert holds nothing, and Waitly’s email says so. The exception is **Reserve for the first shoppers** on Pro, where each of the first shoppers gets one unit held and [a checkout link only they can use](/guide/reserve-units/).",
    },
    {
      q: "Who counts as first in line?",
      a: "The shopper who joined the waitlist first. On Pro you can put tagged customers, bigger spenders and returning customers ahead with [waitlist priority](/guide/waitlist-priority/). A shopper who isn’t a customer in your store yet can’t match a tag or spend rule, so they wait in join order.",
    },
    {
      q: "What happens to the shoppers who weren’t emailed?",
      a: "They stay on the waitlist and keep their place for the next restock. The send log counts them as **Not sent**.",
    },
    {
      q: "What if a shopper with a held unit doesn’t buy?",
      a: "The hold ends, the link stops working, and the unit goes to the next shopper in line. The first shopper stays on the waitlist. That restock won’t call them again, but a later one can.",
    },
    {
      q: "Can I use a different batch size for each product?",
      a: "Not in Waitly. Batch size, the gap between batches and the hold time are set once under **Settings** and apply to every restock.",
    },
  ],
  related: ["back-in-stock-notifications-shopify", "how-much-to-reorder-after-selling-out"],
};
