import type { UseCasePost } from "../types";

export const post: UseCasePost = {
  slug: "how-much-to-reorder-after-selling-out",
  title: "How much inventory to reorder after a product sells out",
  metaTitle: "How much to reorder after a product sells out",
  description:
    "Sales history undercounts demand for a product that sold out. Here’s how to correct the number by hand, and what a waitlist adds to it.",
  cardHeadline: "How much to reorder after a product sells out",
  summary:
    "A sold-out product records no sales, so your sales history says to order too little. Here’s how to correct the number by hand, and how a waitlist fills in the part you can’t see.",
  cover: "reorder-score-card",
  published: "2026-10-02",
  answer: [
    "The usual way to size a reorder is to multiply your average daily sales by the number of days the order has to last, then add a buffer. After a sellout that number comes out too low, because every sold-out day counts as a day when nobody wanted the product.",
    "Correct it in two steps. Average your sales over the days the product was in stock, not the whole period. Then add the people who asked for it while it was gone, counted cautiously, because someone who asks hasn’t paid.",
  ],
  sections: [
    {
      id: "usual-method",
      heading: "How to calculate how much inventory to reorder",
      voice: "neutral",
      blocks: [
        "Most advice starts from the reorder point. Shopify gives the formula as [daily sales velocity × lead time + safety stock](https://www.shopify.com/blog/reorder-point). Daily sales velocity is how many you sell each day. Lead time is how long your supplier takes to deliver. Safety stock is the extra you keep in case a shipment is late.",
        "Strictly, a reorder point tells you when to order: it’s the stock level at which you place the order. How much to order is the same arithmetic over a longer stretch. Multiply your daily sales by the number of days you want the new stock to last, and take off what you still have.",
        "Both answers rest on one figure, your daily sales. That’s the figure a stockout spoils.",
      ],
    },
    {
      id: "why-sales-undercount",
      heading: "Why sales history undercounts demand after a stockout",
      voice: "neutral",
      blocks: [
        "A sold-out product can’t record a sale. In your reports, a day with no stock looks the same as a day with no interest.",
        "Shopify’s own reports work this way. The **Inventory sold daily by product** report takes the quantity sold and [divides it by the number of days in the period](https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/report-types/default-reports/inventory-reports). The **Inventory remaining per product** report estimates how long your stock will last from each variant’s average sales. Neither description says sold-out days are left out.",
        {
          type: "aside",
          kind: "note",
          text: "An example with made-up numbers. A product sold 60 units in the last 30 days, and was sold out for 10 of them. Over 30 days that’s 2 a day. Over the 20 days it was in stock, it’s 3 a day. To cover the next 30 days, the first figure says order 60 and the second says 90.",
        },
        "There’s a second gap. The shoppers who came during those 10 days found a sold-out page and left. They aren’t in either figure.",
        {
          type: "table",
          caption: "Where a demand figure can come from after a sellout, and what each one misses",
          head: ["Figure", "What it tells you", "What it misses"],
          rows: [
            [
              "Sales over the whole period",
              "How fast it sold, sold-out days included.",
              "Reads low after any stockout.",
            ],
            [
              "Sales over in-stock days only",
              "How fast it sells when shoppers can buy it.",
              "Everyone who came while it was sold out.",
            ],
            [
              "“When is it back?” messages",
              "That some of those shoppers exist.",
              "Most shoppers don’t write. Those who do haven’t ordered.",
            ],
            [
              "Signups on a waitlist form",
              "A count for each size or color.",
              "Shoppers who didn’t sign up. A signup isn’t an order either.",
            ],
          ],
        },
      ],
    },
    {
      id: "correct-by-hand",
      heading: "How to correct the number without an app",
      voice: "neutral",
      blocks: [
        {
          type: "list",
          ordered: true,
          items: [
            "**Find the days it was in stock.** Your own note of the restock date and the day it sold out is enough. Shopify’s **Inventory adjustment changes** report lists every adjustment in a period, including order fulfillments and manual changes.",
            "**Divide sales by those days only.** This is your pace while shoppers could buy.",
            "**Count the people who asked.** Emails, chat, social messages and comments asking when it’s back. Keep one tally per product, and per size or color if they said.",
            "**Discount that count.** An ask is interest. If you’ve told people about a restock before, use the share who went on to buy. If you haven’t, add only a small part of it.",
            "**Do the sum.** In-stock daily sales times the days to cover, plus the askers you expect to buy, minus the stock you have.",
            "**Then apply lead time and safety stock** as you normally would. The correction changes the daily figure, not the method.",
          ],
        },
        "This works for a handful of products. It gets slow with many variants, and the tally in step 3 is only as good as your habit of keeping it.",
      ],
    },
    {
      id: "when-something-else-fits",
      heading: "When a different approach fits better",
      voice: "neutral",
      blocks: [
        {
          type: "list",
          items: [
            "**You need to know when to reorder, not how much.** That’s lead time and safety stock for each supplier. Use the reorder point formula in a spreadsheet, or an inventory planning tool.",
            "**You want a firm number.** Take preorders. A preorder is paid for, so it’s an order and not an estimate.",
            "**The product is seasonal or tied to a trend.** Last month’s pace and last month’s askers say little about next season. That call is yours.",
            "**The product rarely sells out.** Then your sales history is complete and the plain formula is fine.",
          ],
        },
      ],
    },
    {
      id: "waitlist-count",
      heading: "With Waitly: a count of shoppers waiting for each variant",
      voice: "waitly",
      blocks: [
        "Waitly puts a **Notify me** form on a sold-out product page. Each shopper who signs up joins a waitlist, so the people who used to leave without a trace become a number.",
        "The **Waitlists** page lists every waitlist, starting with the one that has the most shoppers waiting. A variant and its product are separate rows, so a product with three sold-out sizes shows up three times, each with its own **Waiting** count. This is on every plan.",
        "**Bought after alert** counts the shoppers who bought after Waitly told them the item was back. After your first restock or two, that’s your own evidence of how many signups turn into orders.",
      ],
      figure: {
        scene: "reorder-waitlists",
        caption: "Example figures. Each sold-out size has its own row and its own count.",
      },
    },
    {
      id: "demand-score",
      heading: "On Pro: a Demand Score and a suggested restock",
      voice: "waitly",
      blocks: [
        "On the Pro plan, Waitly rates how strongly shoppers want an item from 0 to 100 and names the band: **Low** (0–29), **Medium** (30–49), **High** (50–69), **Very high** (70–84) or **Critical** (85–100). It weighs, from most to least: shoppers waiting, units preordered in the last 90 days, sales per day while in stock, restocks in the last 90 days, whether signups are growing, how many shoppers bought after an alert, and shoppers who came back to wait again.",
        "Next to the score is one line, **What to do**. For a sold-out item it runs from **Restock now.** at Critical to **No action needed.** at Low.",
        "**Suggested restock** estimates how many units to order. Waitly adds up the waiting shoppers likely to buy, preordered units not shipped yet, and 30 days of sales at the pace the product sells while in stock. Then it takes off the stock you have now and rounds up. Those are the two corrections from the by-hand method: sales are measured over in-stock time, and the waitlist is discounted before it’s added.",
        "How many waiting shoppers are likely to buy comes from the product’s own alerts once it has sent 20, or from your whole store’s once it has sent 100. Until Waitly has seen enough, it says **Not enough data yet** instead of guessing. If your stock already covers the demand, it says **Covered by stock**.",
        {
          type: "aside",
          kind: "note",
          text: "Suggested restocks are estimates from what Waitly has seen. They aren’t a promise of sales, so check them against what you know.",
        },
      ],
      figure: {
        scene: "reorder-score-card",
        caption:
          "Example figures, on the Pro plan. A waitlist’s **Demand Score** card, with the **Restock suggestion** and its working line by line.",
      },
    },
    {
      id: "restock-planner",
      heading: "The restock planner: every product to reorder, in one list",
      voice: "waitly",
      blocks: [
        "Also on Pro, the **Demand Score** section on **Analytics** lists the 10 products shoppers want most. **View all** opens the **Restock planner**: every product shoppers are waiting on or have unshipped preorders for, 25 to a page. You can search it and sort by **Demand Score**, **Suggested restock** or **Waiting**.",
        "The planner scores whole products: every variant, plus the shoppers who’ll take any variant. To see one size or color, open its waitlist. Its **Restock suggestion** box shows the working: **Waiting, likely to buy**, **Preordered, not shipped**, **Sales in 30 days**, **In stock** and the **Suggested** total.",
        "Waitly’s **Home** shows **Restock next**, up to three of your highest-scoring products that have a number of units to order. Under **Over time** on Analytics, the **New signups** and **Open demand** charts show whether interest in your sold-out products is growing or fading. They show what has happened. They don’t project it forward.",
      ],
      figure: {
        scene: "reorder-planner",
        caption:
          "Example figures, on the Pro plan. One row per product, with **Not enough data yet** where Waitly can’t estimate.",
      },
    },
  ],
  features: ["analytics", "backInStock"],
  level: "pro",
  setup: [
    { guide: "add-notify-me-block", note: "The count starts when the form is on your product page." },
    { guide: "browse-waitlists", note: "The **Waiting** count for each variant, on every plan." },
    { guide: "demand-score", note: "The score, **What to do**, the suggested restock and the planner. Pro." },
    { guide: "demand-over-time", note: "New signups and open demand by day or week. Pro." },
    { guide: "data-retention", note: "How long signups are kept." },
  ],
  limits: [
    "It doesn’t tell you when to reorder. Waitly has no lead time and no safety stock, so it can’t work out a reorder point.",
    "It has no purchase orders and no supplier management. You place the order yourself.",
    "It doesn’t forecast seasons or trends. The suggestion uses shoppers waiting, unshipped preorders, 30 days of sales at your in-stock pace and your current stock, and nothing else.",
    "A suggestion is an estimate from what Waitly has seen. Until a product has sent 20 alerts, or your store has sent 100, Waitly doesn’t know how many waiting shoppers are likely to buy.",
    "A signup isn’t a sale. The **Waiting** count is interest, and only from shoppers who filled in the form. Anyone who came before the form was on the page isn’t counted.",
    "Signups are kept for 365 days at most. A shopper who has waited that long with no activity expires and leaves the count, and a signup that has ended is deleted that many days after it ended.",
    "The restock planner lists whole products, not variants. A variant’s own score and suggestion are on its waitlist.",
    "Demand Score, the suggested restock, the restock planner and Restock next are on the [Pro plan](/pricing/). The count of shoppers waiting is on every plan.",
  ],
  faqs: [
    {
      q: "What’s the difference between a reorder point and a reorder quantity?",
      a: "A reorder point is when to order: the stock level at which you place the order. The reorder quantity is how much to order. Both are built on your daily sales, so both come out low if a stockout is hiding in that figure. Waitly helps with how much. It doesn’t calculate a reorder point.",
    },
    {
      q: "Which Shopify report shows how fast a product sells?",
      a: "**Inventory sold daily by product** shows the average number sold per day for each variant, and **Inventory remaining per product** estimates how many days of stock are left. Shopify says historical data for these [inventory reports](https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/report-types/default-reports/inventory-reports) goes back only to October 1, 2023.",
    },
    {
      q: "Does a waitlist signup mean the shopper will buy?",
      a: "No. It means they wanted to hear when it’s back. Some will have bought elsewhere or changed their mind. That’s why Waitly’s suggestion counts only the waiting shoppers likely to buy, based on the share who bought after your past alerts.",
    },
    {
      q: "Can I see demand for one size or color?",
      a: "Yes. Each variant has its own waitlist and **Waiting** count, on every plan. On Pro, a variant’s waitlist also shows its own Demand Score and restock suggestion. The restock planner adds a product’s variants together. See [Browse every waitlist](/guide/browse-waitlists/).",
    },
    {
      q: "How long does Waitly keep waitlist signups?",
      a: "For the number of days you set under **Data retention** in Settings, from 30 to 365. It starts at 365, which is also the most. A shopper who has waited that long with no activity expires. See [Choose how long to keep demand](/guide/data-retention/).",
    },
    {
      q: "Do I need the Pro plan to use the waitlist for reordering?",
      a: "No. The count of shoppers waiting for each variant is on every plan, including Free, and you can do the rest of the sum by hand. Pro adds the Demand Score, the suggested restock and the planner. See [pricing](/pricing/).",
    },
  ],
  related: ["restock-sells-out-before-waitlist", "sold-out-variants-shopify"],
};
