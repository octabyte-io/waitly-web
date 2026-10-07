import type { UseCasePost } from "../types";

export const post: UseCasePost = {
  slug: "back-in-stock-email-conversion-rate",
  title: "Back in stock email conversion rate: what counts, and how to measure yours",
  metaTitle: "Back in stock email conversion rate: how to measure it",
  description:
    "A back in stock conversion rate depends on what you divide by, how long you wait and whether refunds count. How to measure your own on Shopify.",
  cardHeadline: "Back in stock email conversion rate, and how to measure it",
  summary:
    "A conversion rate for back-in-stock emails is only as good as its definition. Here is what to count, what to divide by, and how to measure yours on Shopify, with an app or without.",
  cover: "rate-log",
  published: "2026-10-07",
  answer: [
    "A back in stock email conversion rate is the share of shoppers who bought the item after you told them it was back. The number changes a lot with three choices: what you divide by (signups, emails delivered, opens or clicks), how many days after the email a purchase still counts, and whether refunded orders come off.",
    "Published rates rarely state all three, so they don’t compare with each other or with yours. Pick one definition, write it down, and track it across your own restocks. A change from one restock to the next tells you more than any outside figure.",
  ],
  sections: [
    {
      id: "what-it-measures",
      heading: "What a back in stock email conversion rate measures",
      voice: "neutral",
      blocks: [
        "Every conversion rate is one count divided by another. For a back-in-stock email, the top is usually purchases of the item that came back. The bottom is where definitions split.",
        {
          type: "table",
          caption: "The same restock, divided by different counts",
          head: ["Divide purchases by", "What it tells you", "What to watch"],
          rows: [
            [
              "**Signups**",
              "How much of the demand you collected turned into sales.",
              "Includes shoppers you never emailed, such as those who unsubscribed or whose address bounced.",
            ],
            [
              "**Emails delivered**",
              "How well the email and the restock did with the people who got it.",
              "“Delivered” means the receiving server accepted it, not that the shopper saw it.",
            ],
            [
              "**Opens**",
              "Little you can rely on now.",
              "Apple’s Mail Privacy Protection [downloads remote content in the background](https://www.apple.com/legal/privacy/data/en/mail-privacy-protection/), whether or not the shopper reads the email, so opens are overcounted.",
            ],
            [
              "**Clicks**",
              "How well the product page and price did with shoppers who came to look.",
              "Leaves out shoppers who read the email and then came back another way, such as a search.",
            ],
          ],
        },
        "The smaller the bottom count, the bigger the rate. A rate per click can be several times a rate per signup for the same restock, with nothing else different.",
      ],
    },
    {
      id: "window-and-refunds",
      heading: "The attribution window, and what to do about refunds",
      voice: "neutral",
      blocks: [
        "The window is how long after the email a purchase still counts. A shopper who buys within an hour almost certainly bought because of it. One who buys three weeks later may have seen an ad, a post or the product in a shop window. A longer window counts more sales and gives a higher rate.",
        "Choose the window from how fast the item sells. If a restock usually sells out in two days, a 30-day window adds little. For an expensive item people think about, a week or more is fair.",
        "Then decide what a sale is. Count a refunded or cancelled order and the rate looks better than the money you kept. Count the item’s price, not the whole order, if you want the figure to mean what the alert sold rather than what the shopper added to the cart.",
        {
          type: "aside",
          kind: "note",
          text: "Some shoppers on the list would have bought anyway. They checked the page every day and would have found the restock without an email. A conversion rate counts them too. Knowing that share for sure means keeping the email from some shoppers who asked for it, which most stores won’t do.",
        },
      ],
    },
    {
      id: "benchmarks",
      heading: "Why back in stock benchmarks don’t agree",
      voice: "neutral",
      blocks: [
        "Rates published by email and app companies for back-in-stock messages range widely. The ones we checked come from each publisher’s own customers, and rarely say which count they divide by, how long the window is, or whether refunds were taken off.",
        "That’s why we don’t quote one here. A figure measured per click against a 30-day window can’t tell you whether your rate per delivered email over 7 days is good. Your own first restock, measured carefully, is the baseline that matters.",
      ],
    },
    {
      id: "measure-without-an-app",
      heading: "How to measure your back in stock conversion rate on Shopify without an app",
      voice: "neutral",
      blocks: [
        "If you send restock emails yourself, from a list you collected with a form, you can measure each send in two ways.",
        {
          type: "h3",
          text: "With tagged links and Shopify’s reports",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "**Tag every link in the email.** Add UTM parameters to the product link: a source such as restock, the medium email, and a campaign name that is new for each restock, such as overshirt-oct.",
            "**Read Shopify’s marketing reports.** Shopify’s [marketing reports](https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/report-types/default-reports/marketing-reports) include **Sales attributed to marketing** and **Performance by marketing campaign**, which list sales by UTM campaign.",
            "**Know which model you’re reading.** Shopify credits a sale by an attribution model. The default is last non-direct click, which gives the sale to the last channel the customer came from, not counting direct visits. A shopper who read the email but came back through a search is credited to the search.",
          ],
        },
        {
          type: "h3",
          text: "With your list and your orders",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "**Keep the list you emailed and the time you sent it.**",
            "**Export the orders for that product** from the send time to the end of your window.",
            "**Match the two on email address** in a spreadsheet. Keep only lines for the item that came back, and take refunded orders off.",
            "**Divide** the matched buyers by the number of emails delivered, and write down the window you used.",
          ],
        },
        "The second way catches shoppers who didn’t click, but misses anyone who checks out with a different address. Both take time for each restock, which is the work an app does for you.",
      ],
    },
    {
      id: "rate-per-restock",
      heading: "Your conversion rate for each restock, in Waitly",
      voice: "waitly",
      blocks: [
        "Waitly sends the restock alert by email when a variant shoppers are waiting for comes back, and records what happened. On the **Analytics** page, **Restock alerts** lists each send, newest first: when it went out, the item, how many alerts were **Queued**, and how many the email service accepted as **Delivered**.",
        "On Growth and Pro, two more columns fill in. **Bought** counts the purchases the alert led to. **Rate** is Bought divided by Delivered, so Waitly’s rate is per email delivered. A send with nothing delivered shows a dash, not zero.",
        "The date menu next to **Over time** filters the list by when each send started: **All time**, **Last 24 hours**, **Last 7 days** or **Last 30 days**. Reading down the Rate column is the comparison that matters: the same product last time, or one product against another.",
      ],
      figure: {
        scene: "rate-log",
        caption: "Example. **Bought** and **Rate** are on the Growth and Pro plans.",
      },
    },
    {
      id: "what-counts",
      heading: "What Waitly counts as a sale after an alert",
      voice: "waitly",
      blocks: [
        "A sale counts when the shopper buys the item they were waiting for within the window you set. The order is matched to the shopper by the email address they signed up with. They don’t need to click the alert.",
        {
          type: "list",
          items: [
            "**The item.** A shopper waiting for one variant must buy that variant. A shopper waiting for the whole product can buy any of its variants.",
            "**The window.** **Count a sale as recovered for**, under **Settings**, **Notifications**, is from 1 to 30 days. The default is 7 days. It’s on every plan.",
            "**Which alert.** If a shopper had more than one alert, the most recent one gets the credit.",
          ],
        },
        "A shopper who buys within the window shows on the waitlist as **Bought after alert**. One who buys later, or without an alert, shows as **Bought anyway** and isn’t counted. So the window you choose here is the window behind every Bought and Rate figure.",
      ],
      figure: {
        scene: "rate-settings",
        caption: "The default window is 7 days. Change it before your next restock, not after, so sends compare.",
      },
    },
    {
      id: "recovered-revenue",
      heading: "Recovered revenue, with refunds taken off",
      voice: "waitly",
      blocks: [
        "On Growth and Pro, **Results** on the **Analytics** page shows **Recovered revenue**: the sales from shoppers who bought what they were waiting for after a Waitly alert. It counts the item’s line in the order, its price times the quantity less any discount on that line, not the rest of the cart. Anything later refunded or never collected comes off.",
        "Recovered revenue covers all time across your whole shop. The date range doesn’t change it, and it isn’t split by product or by send. If your store has changed its currency, it shows one total per currency.",
        "Beside it, **How the demand ended** counts shoppers by how their wait ended: **Bought after alert**, **Bought anyway**, **Expired**, **Unsubscribed**, **Cannot be emailed** and **Removed by you**. Bought after alert against Bought anyway is a rough check on the “would have bought anyway” question: it shows how many buyers came without an alert, or after the window.",
        "To find those buyers in Shopify, use **Tag buyers that a Waitly alert brought back** in Settings. It’s on from the start on Growth and Pro: Waitly adds a customer tag, waitly-recovered unless you change it, to each buyer counted as Bought after alert.",
      ],
      figure: {
        scene: "rate-results",
        caption: "Example. **Results** is on the Growth and Pro plans. On Free it shows dashes.",
      },
    },
  ],
  features: ["backInStock", "analytics"],
  level: "growth",
  setup: [
    {
      guide: "notification-rules",
      note: "Set **Count a sale as recovered for** first. Every plan.",
    },
    { guide: "restock-alert-log", note: "Bought and Rate need Growth." },
    { guide: "analytics-overview", note: "Results needs Growth." },
    { guide: "tag-recovered-customers", note: "Growth and Pro." },
  ],
  limits: [
    "Waitly doesn’t track opens or clicks, and doesn’t add UTM parameters to the links in its emails. Its rate is per email delivered, and Shopify’s marketing reports don’t show alerts as their own campaign.",
    "A sale is matched by email address. A shopper who checks out with a different address than the one they signed up with, or an in-person sale with no email, isn’t counted.",
    "Refunds come off Recovered revenue, but not off **Bought** or **Rate**. A send’s rate counts the purchase even if it was later refunded.",
    "Recovered revenue is one all-time figure for the whole shop. There’s no revenue per send, per product or per date range.",
    "Waitly can’t tell which buyers would have bought without the alert, and has no control group.",
    "On the Free plan, the log shows what was sent but not **Bought** or **Rate**, and Results shows dashes.",
    "Restock alerts are email only. There are no text or push messages to measure.",
  ],
  faqs: [
    {
      q: "What is a good back in stock email conversion rate?",
      a: "There’s no reliable answer, because published rates divide by different counts over different windows. Measure your own per email delivered, with a fixed window, and compare restocks of the same product over time.",
    },
    {
      q: "Does a shopper have to click the alert for the sale to count?",
      a: "Not in Waitly. A purchase of the item they were waiting for, with the email address they signed up with, counts if it falls within **Count a sale as recovered for**.",
    },
    {
      q: "How long should the attribution window be?",
      a: "Long enough to cover how people buy that item, and no longer. Waitly’s default is 7 days, and you can set 1 to 30. Keep it the same between restocks you want to compare.",
    },
    {
      q: "Are refunds taken off?",
      a: "In Waitly, refunded and uncollected amounts come off **Recovered revenue**. The **Bought** count and **Rate** for a send don’t change.",
    },
  ],
  related: ["back-in-stock-notifications-shopify", "restock-sells-out-before-waitlist"],
};
