import type { GuideArticle } from "../types";

export const article: GuideArticle = {
  slug: "demand-score",
  section: "analytics",
  title: "Plan restocks with Demand Score",
  summary:
    "See which products shoppers want most, what Waitly suggests you do, and roughly how many units to restock.",
  level: "pro",
  before: [
    "You’re on the Pro plan.",
    "Shoppers are waiting on at least one product, or have preorders that haven’t shipped.",
  ],
  steps: [
    {
      title: "Find the Demand Score section",
      body: [
        "Select **Analytics** in the Waitly menu and scroll to **Demand Score**. It lists the 10 products shoppers want most right now, highest first.",
        "Each row shows the **Product**, its **Demand Score**, **What to do** and a **Suggested restock**.",
      ],
      shot: {
        src: "/guide/demand-score/01-section.jpg",
        width: 1215,
        height: 482,
        alt: "The Demand Score section on Analytics: a table of seven products with a score badge such as High 64, a What to do line, a Suggested restock number, and a View all link.",
        frame: "admin",
        highlights: [
          { x: 37.6, y: 25.5, w: 9.1, h: 6.4, label: "Score and its band" },
          { x: 85.0, y: 18.7, w: 11.9, h: 59.3, label: "Units to restock" },
          { x: 2.7, y: 88.4, w: 5.3, h: 6.2, label: "Open the full list" },
        ],
      },
    },
    {
      title: "Read the score",
      body: [
        "The score runs from 0 to 100, and the badge names its band: **Low** (0–29), **Medium** (30–49), **High** (50–69), **Very high** (70–84) and **Critical** (85–100).",
        "It weighs, from most to least: how many shoppers are waiting, units preordered in the last 90 days, sales per day while in stock, restocks in the last 90 days, whether signups are growing (the last 14 days against the 14 before), how many shoppers bought after an alert, and shoppers who came back to wait again.",
        "Every product is measured on the same fixed scale, so a score doesn’t drop just because another product got busier. Anything Waitly can’t know yet, like sales for a product that has never had a full stretch in stock, is left out rather than guessed.",
      ],
    },
    {
      title: "Act on What to do",
      body: [
        "**What to do** is one short line based on the band and whether the product is in stock. Out of stock, it runs from **Restock now.** (Critical) through **Restock soon.**, **Plan a restock.** and **Restock when convenient.** to **No action needed.** (Low).",
        "In stock, it reads **Order more before it sells out.**, **Order more soon.**, **Keep an eye on stock.** or **No action needed.**",
      ],
    },
    {
      title: "Read the suggested restock",
      body: [
        "**Suggested restock** estimates how many units to order. Waitly adds up the waiting shoppers likely to buy, preordered units not shipped yet, and 30 days of sales at the pace the product sells while in stock. Then it takes off the stock you have now and rounds up.",
        "How many waiting shoppers are likely to buy comes from this product’s own alerts once it has sent 20, or from your whole store’s once it has sent 100. **Covered by stock** means you already have enough. **Not enough data yet** means Waitly hasn’t seen enough to estimate.",
      ],
      aside: {
        kind: "note",
        text: "Suggested restocks are estimates from what Waitly has seen. They aren’t a promise of sales, so check them against what you know.",
      },
    },
    {
      title: "Open the restock planner",
      body: [
        "Select **View all** under the section to open the **Restock planner**. It lists every product shoppers are waiting on or have unshipped preorders for, 25 to a page.",
        "Search with **Search by product**, and use **Sort** to order by **Demand Score**, **Suggested restock** or **Waiting**. Point at the **Demand Score** or **Suggested restock** header for a short explanation.",
      ],
      shot: {
        src: "/guide/demand-score/02-planner.jpg",
        width: 1230,
        height: 662,
        alt: "The Restock planner page: a Search by product field, the Sort menu open on Demand Score, Suggested restock and Waiting, and a table with Product, Demand Score, What to do, Suggested restock and Waiting.",
        frame: "admin",
        highlights: [
          { x: 2.0, y: 26.9, w: 84.2, h: 5.7, label: "Search by product" },
          { x: 92.0, y: 26.9, w: 5.7, h: 5.6, label: "Choose the order" },
          { x: 35.7, y: 33.2, w: 10.5, h: 4.7, label: "Point here for an explanation" },
        ],
      },
    },
    {
      title: "See why an item scored what it did",
      body: [
        "Open the item’s waitlist from **Waitlists**. Under the totals, the **Demand Score** card lists **What drives it**, with the figures behind the score. If there are more than three reasons, a button such as **Show 2 more** lists the rest. **Not known yet** lists anything left out.",
        "The **Restock suggestion** box shows the working line by line: **Waiting, likely to buy**, **Preordered, not shipped**, **Sales in 30 days**, **In stock**, and the **Suggested** total.",
      ],
      shot: {
        src: "/guide/demand-score/03-card.jpg",
        width: 961,
        height: 490,
        alt: "A waitlist’s Demand Score card: Medium 42 / 100, the line No action needed, What drives it with three reasons such as “8 waiting” and a Show 4 more button, and a Restock suggestion box with its working and an Estimate badge.",
        frame: "admin",
        highlights: [
          { x: 3.5, y: 11.4, w: 13.6, h: 5.0, label: "Score out of 100" },
          { x: 3.4, y: 22.2, w: 28.4, h: 27.4, label: "The figures behind the score" },
          { x: 50.4, y: 11.2, w: 46.2, h: 82.9, label: "The working, line by line" },
        ],
      },
    },
    {
      title: "Check Restock next on Home",
      body: [
        "On Pro, Waitly’s **Home** shows **Restock next**: up to three of your highest-scoring products that have a number of units to order. Select **View restock planner** to see the full list.",
      ],
      shot: {
        src: "/guide/demand-score/04-restock-next.jpg",
        width: 1014,
        height: 305,
        alt: "The Restock next card on Waitly Home: three products with their Demand Score and Suggested restock, and a View restock planner button.",
        frame: "admin",
        highlights: [
          { x: 53.0, y: 31.5, w: 10.6, h: 10.7, label: "Demand Score" },
          { x: 84.6, y: 31.5, w: 12.7, h: 10.7, label: "Units to order" },
          { x: 81.2, y: 88.3, w: 15.4, h: 10.1, label: "Open the full list" },
        ],
      },
    },
  ],
  faqs: [
    {
      q: "Why doesn’t a variant have its own row in the planner?",
      a: "The planner scores whole products: every variant plus the shoppers who’ll take any variant. To see a single variant’s score, open its waitlist, or check Variant demand on Analytics.",
    },
    {
      q: "Does the date range on Analytics change the score?",
      a: "No. The score describes right now. Preorders and restocks always look back 90 days, and signup growth compares the last 14 days with the 14 before.",
    },
  ],
  related: ["analytics-overview", "browse-waitlists", "preorder-volume"],
};
