import type { UseCasePost } from "../types";

export const post: UseCasePost = {
  slug: "vip-first-on-restock",
  title: "Give VIP customers the first chance at a restock",
  metaTitle: "Give VIP customers first chance at a Shopify restock",
  description:
    "Let your best Shopify customers hear about a restock before everyone else: who counts as a VIP, how to give them a real head start, and what it can’t do.",
  cardHeadline: "Give VIP customers the first chance at a restock",
  summary:
    "When a sold-out product comes back in small numbers, you can let your best customers go first. How to pick them, how to give them a head start by hand, and how a waitlist can do it in order.",
  cover: "vip-priority-rules",
  published: "2026-10-16",
  answer: [
    "Decide who counts as a VIP, mark them in Shopify with a customer tag, and when the product comes back, tell them before you tell anyone else. A head start only means something if there’s a gap: an hour, a day, or a unit set aside for each of them.",
    "By hand, that is one email to your VIPs, a wait, then one to everyone else. A waitlist app can put tagged customers at the front of the line, alert them first and, if you want, hold a unit for each.",
  ],
  sections: [
    {
      id: "first-chance-or-early-access",
      heading: "First chance at a restock, or early access?",
      voice: "neutral",
      blocks: [
        "Two different things go by the name “VIP early access”, and they need different tools.",
        {
          type: "list",
          items: [
            "**First chance at a restock.** A sold-out product comes back, and your best customers hear about it before everyone else. The product is on sale to all; the VIPs simply know first. This is about the order you tell people in.",
            "**Early access to a launch or a sale.** For a set time, only VIPs can see or buy the product. This is about locking a page or a checkout, and it usually needs theme code or an app built for it.",
          ],
        },
        "This article is about the first. It matters most when the restock is smaller than the number of people waiting. If 50 come back and 20 are waiting, everyone who wants one gets one, and the order you tell them in changes little.",
      ],
    },
    {
      id: "who-counts-as-vip",
      heading: "Who counts as a VIP customer on Shopify",
      voice: "neutral",
      blocks: [
        "Pick a rule you could explain to a customer who asks. Most stores use one of these:",
        {
          type: "list",
          items: [
            "**What they’ve spent.** Everyone above a lifetime total you choose.",
            "**How often they order.** Two orders or more, for example.",
            "**A list you keep.** Wholesale buyers, press, members of your loyalty program, the customers who wrote to you about this product.",
          ],
        },
        "Whatever the rule, the usual way to mark these customers in Shopify is a customer tag such as VIP. You can [add a tag to several customers at once](https://help.shopify.com/en/manual/customers/manage-customers/customer-tags) from the customer list, and tags are not case sensitive.",
        "To find them, a customer segment does the filtering. Shopify’s segment editor has filters such as [amount spent and number of orders](https://help.shopify.com/en/manual/customers/customer-segmentation/reference-guide/components). To keep the tag up to date as people buy, [Shopify Flow](https://help.shopify.com/en/manual/shopify-flow), a free app on the Basic, Grow, Advanced and Plus plans, can add a tag when a customer’s total spent passes an amount. Shopify’s own Flow help uses [a Gold, Silver and Bronze tag by amount spent](https://help.shopify.com/en/manual/shopify-flow/reference/conditions) as its example.",
      ],
    },
    {
      id: "options",
      heading: "Ways to give VIPs a head start on a restock",
      voice: "neutral",
      blocks: [
        {
          type: "table",
          caption: "Giving VIP customers a head start on a restock",
          head: ["Approach", "What the VIP gets", "What to watch"],
          rows: [
            [
              "**Email VIPs first, everyone later**",
              "Time to buy before the rest of the list hears.",
              "The product is on sale to anyone who finds the page in the meantime.",
            ],
            [
              "**Keep the product Unlisted, send VIPs the link**",
              "A product page most shoppers won’t find.",
              "Shopify’s [Unlisted status](https://changelog.shopify.com/posts/new-unlisted-product-status-1) hides it from your collections, search and sales channels, but anyone with the address can still buy, and links get shared.",
            ],
            [
              "**Hold a unit for each VIP**",
              "A unit that’s theirs for a set time.",
              "One draft order per customer, made by hand or by an app. See [holding a unit with a draft order](/use-cases/restock-sells-out-before-waitlist/).",
            ],
            [
              "**Lock the page to a customer tag**",
              "A real early-access window.",
              "Needs theme code or an app, and VIPs must be logged in to their account.",
            ],
          ],
        },
        "Whichever you choose, say so somewhere public, for example on the product page or in your FAQ: “Customers tagged VIP hear about restocks first.” Shoppers who wait and miss out take it better when the rule was written down before the restock.",
      ],
    },
    {
      id: "by-hand",
      heading: "How to let VIPs shop a restock first, without an app",
      voice: "neutral",
      blocks: [
        {
          type: "list",
          ordered: true,
          items: [
            "**Tag your VIPs before the restock,** not on the day, so the list is ready.",
            "**Switch off anything that emails the whole waitlist** the moment the quantity goes above zero, for this product.",
            "**Add the stock and email your VIPs.** Say how many came back and how long they have before you tell everyone else.",
            "**Wait the time you promised,** then check the stock.",
            "**Email the rest of the waitlist** if units are left, in the order they signed up. If none are, tell them that too, and keep them on the list.",
          ],
        },
        "This works for one product now and then. It needs you at your desk at the restock and again when the head start ends, and it reserves nothing: a VIP who opens the email late can still find it sold out.",
      ],
    },
    {
      id: "priority-rules",
      heading: "With Waitly: put VIPs at the front of the waitlist",
      voice: "waitly",
      blocks: [
        "On the Pro plan, Waitly’s **Settings** page has a **Waitlist priority** section. Its rules read as one sentence, from the first shoppers alerted to the last:",
        {
          type: "list",
          items: [
            "**First, shoppers tagged…** the tag you type in **VIP tag**, which is VIP unless you change it.",
            "**Then, shoppers who have spent at least…** the amount in **Lifetime spend**, as Shopify reports it.",
            "**Then, shoppers tagged…** any of up to 20 **Other tags**, such as wholesale or press.",
            "**Then, shoppers who have ordered from you before.**",
          ],
        },
        "Everyone else waits in the order they joined. Every rule starts switched off, and you choose which apply but not their order. A shopper who matches several rules takes the highest.",
        "Waitly matches a shopper by the email they type into the **Notify me** form. If it belongs to a customer in your store, their tags, spend and orders count. A shopper who isn’t a customer yet, or who signs up with a different address, waits in the order they joined.",
        {
          type: "aside",
          kind: "warning",
          text: "Waitly reads a shopper’s tags and spend when they join. Tag your VIPs before the waitlist fills up: a tag added later may not move a shopper who is already waiting.",
        },
      ],
      figure: {
        scene: "vip-priority-rules",
        caption: "Example. VIPs first, then customers who have spent $500 or more, then returning customers.",
      },
    },
    {
      id: "see-the-line",
      heading: "See who is first in line, and why",
      voice: "waitly",
      blocks: [
        "Open a product’s waitlist and the **Shoppers** card lists everyone waiting by **Position**. **Why** shows the rule that put each one there: **VIP**, **High-value**, **Tagged** or **Ordered before**. A shopper no rule matched reads **Standard**.",
        "Switching a rule on or off reorders the shoppers already waiting straight away, as long as they joined while your store was on Pro. Changing only the tag name or the amount doesn’t reorder them. Shoppers who joined before you moved to Pro keep their place by the date they joined.",
        "Shoppers are never told they are a VIP. If you tick **And tell each shopper their place in the line, in the email confirming they joined.**, the confirmation says “Right now you are number 4 in line for this one.”, and the restock alert says which number they were.",
      ],
      figure: {
        scene: "vip-waitlist-why",
        caption: "Example. Two VIPs at the front, ahead of shoppers who joined earlier.",
      },
    },
    {
      id: "head-start",
      heading: "Turn first in line into a real head start",
      voice: "waitly",
      blocks: [
        "Priority sets the order. On its own it gives VIPs no time: with the default **All at once**, everyone waiting is emailed at the restock. What gives them time is the **Restock release** setting, also on Pro.",
        {
          type: "list",
          items: [
            "**In batches** alerts a few shoppers at a time, in line order, with 15 minutes to 2 hours between batches. Set **Shoppers per batch** to about the number of VIPs, and they get the first batch to themselves. Batches stop when the item sells out.",
            "**Reserve for the first shoppers** holds one unit for each of the first shoppers in line, for 10 minutes up to 24 hours, and sends each a link only they can use. Up to 100 units can be held at once. Units not held stay on sale to everyone.",
          ],
        },
        "With priority and **Reserve** together, the first shoppers in line, VIPs first, each get an email saying one is held for them and until when. If a shopper doesn’t buy in time, the link stops working and the unit goes to the next shopper in line.",
      ],
      figure: {
        scene: "race-held-email",
        caption: "The email a shopper gets when a unit is held for them. The times are an example.",
      },
    },
  ],
  features: ["restockRelease", "backInStock"],
  level: "pro",
  setup: [
    { guide: "waitlist-priority", note: "Tag your VIPs in Shopify first." },
    { guide: "release-in-batches", note: "For a head start in time. Pick this or Reserve." },
    { guide: "reserve-units", note: "For a unit held for each of the first shoppers." },
    { guide: "see-whos-waiting" },
  ],
  limits: [
    "Waitlist priority, batches and held units are on the Pro plan. On Free and Growth, everyone waiting is alerted at once, in the order they joined.",
    "Priority alone gives no head start. With **All at once**, every shopper is emailed at the restock.",
    "Waitly can’t lock a product page, a collection or a checkout to VIPs. Once a product is in stock, anyone who visits the page can buy it.",
    "A shopper counts as a VIP only if the email they sign up with belongs to a customer in your store carrying your tag. Waitly doesn’t ask shoppers to log in.",
    "Tags and spend are read when a shopper joins. A tag you add later may not move a shopper already waiting, and changing the VIP tag or the amount in Settings doesn’t reorder anyone already waiting.",
    "The order of the rules is fixed, and the settings apply to every product. You can’t make VIPs first on one product and not another.",
    "There are no VIP discounts, purchase limits per customer or bot protection. Waitly sends email only, no SMS.",
  ],
  faqs: [
    {
      q: "Can I give VIPs early access to a product before it goes on sale?",
      a: "Not with Waitly. It decides who hears first and can hold a unit for them, but it can’t hide a product from other shoppers. For a locked early-access window, you need theme code or an app that gates pages by customer tag.",
    },
    {
      q: "How do I tag VIP customers in Shopify?",
      a: "Select them in the customer list and choose **Add tags**. To find them first, build a segment on what they’ve spent or how often they’ve ordered. To tag new VIPs as they qualify, use a Shopify Flow workflow.",
    },
    {
      q: "Do other shoppers know VIPs were alerted first?",
      a: "Waitly doesn’t tell them. Their emails give only their number in line. It’s still worth saying on your store that VIPs hear first, so nobody feels misled.",
    },
    {
      q: "What if a VIP signed up with a different email?",
      a: "Waitly can’t match them, so they wait in the order they joined. Ask VIPs to use the email on their customer account.",
    },
    {
      q: "Does a VIP get a unit held for them?",
      a: "Only with **Reserve for the first shoppers** on. Otherwise their alert holds nothing, and it is first come, first served once the email arrives.",
    },
  ],
  related: ["restock-sells-out-before-waitlist", "back-in-stock-notifications-shopify"],
};
