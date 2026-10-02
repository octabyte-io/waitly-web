import type { UseCasePost } from "../types";

const RULE = "https://www.ecfr.gov/current/title-16/chapter-I/subchapter-D/part-435";
const FTC_GUIDE =
  "https://www.ftc.gov/business-guidance/resources/business-guide-ftcs-mail-internet-or-telephone-order-merchandise-rule";

export const post: UseCasePost = {
  slug: "preorder-shipping-delay",
  title: "Your preorder will ship late: what to tell customers, and what the rules require",
  metaTitle: "Preorder shipping delay: what to tell customers",
  description:
    "Your supplier is late and a preorder won’t ship on time. What to tell customers, what the US 30-day rule requires, and how to send the notice from Shopify.",
  cardHeadline: "Your preorder will ship late: what to tell customers",
  summary:
    "A supplier is late and orders you’ve already taken won’t ship on time. Here is what to tell customers, what the US FTC rule and UK law require, how to do it by hand in Shopify, and what Waitly does for its own preorders.",
  published: "2026-10-02",
  answer: [
    "Tell every affected customer as soon as you know, and before the date you promised. Give a new ship date if you have one, and offer a plain choice: wait, or cancel for a full refund. For online orders in the US, that choice is required by an FTC rule.",
    "What happens when a customer doesn’t reply depends on the delay. Under the US rule, a first delay of 30 days or less can go ahead unless the customer cancels. A longer delay, a delay with no date, or a second delay needs the customer to say yes. Without a yes, you refund them.",
  ],
  sections: [
    {
      id: "what-to-do-today",
      heading: "What to do today when an order is going to ship late",
      voice: "neutral",
      blocks: [
        {
          type: "list",
          ordered: true,
          items: [
            "**List the orders affected.** Every unshipped order for the late product, whether it was a preorder or a backorder taken while you were out of stock.",
            "**Get a date you can stand behind.** Ask your supplier for one and add your own handling time. If you can’t get one, say so, and say why.",
            "**Tell customers before the promised date.** A notice sent after the date has passed is late, and under the US rule it’s too late.",
            "**Offer the choice in the same message.** Wait for the new date, or cancel for a full refund. Don’t make them ask.",
            "**Refund quickly.** Anyone who cancels gets their money back, without having to chase you.",
            "**Keep a record.** Who you told, when, and what each person answered.",
          ],
        },
        {
          type: "aside",
          kind: "note",
          text: "This is a summary for merchants, not legal advice. The rules differ by country, and by state in the US. For anything that matters to your business, read the source or ask a lawyer.",
        },
      ],
    },
    {
      id: "ftc-30-day-rule",
      heading: "What the US rule requires: the FTC’s 30-day rule",
      voice: "neutral",
      blocks: [
        `The rule is the [Mail, Internet, or Telephone Order Merchandise Rule](${RULE}), 16 CFR Part 435. The FTC explains it for sellers in its [business guide](${FTC_GUIDE}). In plain steps:`,
        {
          type: "list",
          ordered: true,
          items: [
            "**Ship when you said you would.** You need a reasonable basis for the time you state. If you state none, the rule gives you 30 days: “within thirty (30) days after receipt of a properly completed order”.",
            "**If you can’t, offer the choice.** The customer may consent to the delay, or cancel and get a prompt refund. You make the offer without being asked, and “in no event later than said applicable time”, which is the date you promised.",
            "**Give a new date, or say you have none.** With no new date, the notice must also give “the reason or reasons for the delay”.",
            "**Say what silence means.** This depends on the delay. See the table.",
            "**Give a way to answer at your expense.** The FTC’s examples are a toll-free number, a prepaid reply card or a website.",
            "**Refund promptly.** For most ways of paying, that means “within seven (7) working days”.",
          ],
        },
        {
          type: "table",
          caption: "What a customer’s silence means under the US rule",
          head: ["The delay", "If the customer doesn’t reply", "What the notice must say"],
          rows: [
            [
              "First delay, new date 30 days or less after the promised date",
              "They’re treated as agreeing to the new date.",
              "That not replying counts as agreeing. The FTC’s guide: “you must inform customers that their non-response will be treated as a consent to the delay.”",
            ],
            [
              "First delay, new date more than 30 days later, or no date",
              "The order is cancelled and refunded, unless you ship within 30 days of the promised date.",
              "That the order will be cancelled automatically unless they agree. If they agree to wait with no date, that they have a “continuing right to cancel” until it ships.",
            ],
            [
              "A second or later delay, of any length",
              "The order is cancelled and refunded if you can’t ship by the last date you gave.",
              "That they must agree to the further delay. The guide: “the customer’s silence may not be treated as a consent to delay.”",
            ],
          ],
        },
        "Two details are easy to miss. The rule counts to shipment, which it defines as “the act by which the merchandise is physically placed in the possession of the carrier”. And email is allowed: the FTC’s guide answers “Can we send the delay option notice to the customer’s e-mail address?” with “Yes.”",
        "Shopify repeats the core of this in its own [requirements for pre-orders](https://help.shopify.com/en/manual/products/purchase-options/pre-orders/setup): “If you’re unable to ship within the promised time, then you must provide a revised shipment date and explain the customer’s right to cancel or obtain a refund.”",
      ],
    },
    {
      id: "uk-law",
      heading: "If you sell to customers in the UK",
      voice: "neutral",
      blocks: [
        "UK law counts to delivery, not shipment. Under [section 28 of the Consumer Rights Act 2015](https://www.legislation.gov.uk/ukpga/2015/15/section/28), unless you and the customer agreed a time, you must deliver without undue delay and “not more than 30 days after the day on which the contract is entered into”.",
        "If you miss it, the customer can set a further period that’s appropriate, and if you miss that too they “may treat the contract as at an end”. Where delivery by the agreed time was essential, they can end it at once. You then “must without undue delay reimburse all payments made under the contract”.",
      ],
    },
    {
      id: "in-shopify-by-hand",
      heading: "How to send a shipping delay email from Shopify by hand",
      voice: "neutral",
      blocks: [
        "Shopify has no button that emails every customer whose order is late. Merchants on the Shopify forum [do it with a tag and an export](https://community.shopify.com/t/how-to-email-50-customers-their-order-is-late/117308), and that works.",
        {
          type: "list",
          ordered: true,
          items: [
            "**Tag the orders.** On the Orders page, select the affected orders and [add a tag in bulk](https://help.shopify.com/en/manual/shopify-admin/productivity-tools/using-tags), such as “delay-nov”.",
            "**Export them.** Filter the Orders page by that tag and select **Export**. The [CSV file](https://help.shopify.com/en/manual/fulfillment/managing-orders/exporting-orders) has each order’s name and the customer’s email.",
            "**Send the email.** Use your own mailbox or an email tool, one message per customer. Check that the tool will send to people who never subscribed to marketing, because this notice has to reach every one of them.",
            "**Track the replies.** Add a second tag as each customer answers, such as “delay-agreed” or “delay-cancel”, and note the date you gave them to answer by.",
            "**Refund from the order.** Open the order and select [**Refund**](https://help.shopify.com/en/manual/fulfillment/managing-orders/refunding-orders). Do the same on the deadline for anyone who had to agree and didn’t.",
          ],
        },
        "This is fine for one late product and a few dozen orders. The weak point is the deadline: nothing reminds you that order 37 never answered.",
      ],
    },
    {
      id: "what-the-email-says",
      heading: "What a shipping delay email should say",
      voice: "neutral",
      blocks: [
        {
          type: "list",
          items: [
            "The order number and the item that’s late.",
            "The date you promised, and the new date. If you have no date, say that, and give the reason.",
            "That they can cancel for a full refund, and how: a link, a reply, a phone number.",
            "What happens if they don’t reply. Use the row of the table that fits your delay.",
            "The date to answer by, if they need to agree.",
            "How soon a refund reaches them.",
          ],
        },
        `For a short first delay, the FTC’s [sample notice](${FTC_GUIDE}) ends: “If we do not hear from you before we ship the merchandise to you, we will assume that you have agreed to this shipment delay.” Keep the email to the order. It isn’t the place for a discount code or your newsletter.`,
      ],
    },
    {
      id: "change-the-date",
      heading: "With Waitly: change the ship date and the delay notice goes out",
      voice: "waitly",
      blocks: [
        "This part covers preorders taken through a Waitly [preorder policy](/features/preorders/). On the Growth and Pro plans a policy has a ship estimate, and each preorder remembers the date its shopper was told.",
        "When the supplier is late, you move the estimate later. Before you save, a banner says what saving will do, for example **Saving tells 12 shoppers their preorder is delayed**, and counts who must agree to wait. Notices go 30 minutes after your last save, so a corrected typo doesn’t send two.",
        "Each order gets one **Delay notice** email. For a new date 30 days or less after the one promised, each item’s card reads “No action needed”, shows **You were told** beside **Now**, and says “You do not need to do anything to keep it.” Under the cards: “Cancel any time before it ships for a full refund.” and a **Keep or cancel your preorder** button. The wording is fixed, and it’s all the notice says.",
      ],
      figure: {
        scene: "delay-notice-email",
        caption: "Example dates. The Delay notice for a new date 30 days or less after the one promised.",
      },
    },
    {
      id: "long-delay",
      heading: "A delay of more than 30 days: the shopper has to answer",
      voice: "waitly",
      blocks: [
        "The email changes when the new date is more than 30 days after the date the shopper was first promised, or the date they last agreed to. It also changes when you remove the estimate, and the card then reads “The store has no new date yet”. The subject becomes “Action needed: keep or cancel your preorder by” a date, at least 7 days after the notice. The card says: “To keep it, choose Keep my preorder by” that date. “If you do not,” your store “will cancel it and refund you in full.”",
        "The button opens a page on your store with two choices. **Keep my preorder** keeps their place, and they can still cancel until it ships. **Cancel preorder** refunds that item in full through Shopify at once, with no approval from you. If they don’t answer by the date, Waitly cancels and refunds it the same way.",
        "A shopper who agrees to wait with no date isn’t asked again when you name one. If a promised date passes and the preorder hasn’t shipped, Waitly sends a late notice the day after, on every plan, and asks shoppers still waiting to keep or cancel.",
      ],
      figure: {
        scene: "delay-keep-or-cancel-page",
        caption: "Example dates. The Keep or cancel page when the shopper has been asked to answer.",
      },
    },
    {
      id: "who-answered",
      heading: "See who was told, who agreed and who needs you",
      voice: "waitly",
      blocks: [
        "The preorders list in Waitly shows what each shopper has been told: “Delay notice sent” with the date, and “Agreed to wait” once they keep it. A second badge marks the ones to watch.",
        {
          type: "list",
          items: [
            "**Waiting for the shopper**: asked to keep or cancel, with the date they have until.",
            "**Refund due**: the shopper didn’t agree and Shopify refused the automatic refund. Cancel that order in Shopify.",
            "**Reaches 30 days**: a preorder with no ship estimate is close to 30 days after its order. Ship it before that date if you can.",
          ],
        },
        "Every plan sees this list. Delay notices don’t count toward your plan’s email allowance, and they reach shoppers who unsubscribed from alerts, because they’re about an order.",
      ],
      figure: {
        scene: "delay-preorders-list",
        caption: "Example orders. A second badge beside the status marks a preorder that needs attention.",
      },
    },
  ],
  features: ["preorders"],
  level: "growth",
  setup: [
    {
      guide: "preorder-message-and-ship-estimate",
      note: "Give the policy a ship estimate first. It’s the date a delay is measured from. Growth and Pro.",
    },
    { guide: "change-ship-date", note: "Move the date, read the banner, save. Growth and Pro." },
    { guide: "shopper-cancels-preorder", note: "What the shopper sees when they keep or cancel." },
    { guide: "manage-preorders", note: "The badges to check after the notices go out." },
  ],
  limits: [
    "It covers only preorders placed through a Waitly preorder policy. Ordinary orders, backorders taken with **Continue selling when out of stock** and preorders from another app get no notice. Use the manual steps for those.",
    "The notice’s wording is fixed. There’s no field for the reason for the delay, and the US rule asks for a reason when you can’t give a new date. Send that part yourself.",
    "The notice for a delay of 30 days or less says “You do not need to do anything to keep it” and gives the cancel terms. It doesn’t say in so many words that not replying counts as agreeing to the new date. Compare it with the rule and add your own message if you want that sentence.",
    "A second delay isn’t treated differently. Waitly counts the 30 days from the date first promised, or from a date the shopper agreed to. A second move that stays inside those 30 days sends another “No action needed” notice. The US rule asks for the customer’s yes to any further delay, so handle that case yourself: ask those shoppers directly and refund the ones who don’t agree.",
    "It sends when you save. Telling customers before the promised date is up to you. If the date passes first, the late notice goes the day after.",
    "It uses the same 30-day test for every shopper, whatever their country, and counts to the day you ship. UK law counts to delivery.",
    "Changing a ship date needs a ship estimate, which is on Growth and Pro. On Free, a preorder is treated as promised 30 days after the order. The late notice and the shopper’s own cancel work on every plan.",
    "An automatic refund can’t be undone. A preorder that has partly shipped is never refunded automatically: the shopper is asked to contact you.",
    "It sends email only, and an order placed without an email address can’t be told.",
  ],
  faqs: [
    {
      q: "Is there a legal maximum wait for a preorder?",
      a: `The US rule sets no maximum. It holds you to the time you state, and you need a reasonable basis for it. The 30 days apply when you state [no time at all](${RULE}). UK law works the same way: 30 days to deliver unless you agreed another time with the customer.`,
    },
    {
      q: "Does a customer’s silence count as agreement to a delay?",
      a: "Under the US rule, only for a first delay of 30 days or less, and only if your notice said so. For a longer delay, no date, or a second delay, silence means the order is cancelled and refunded if you haven’t shipped by the time the rule sets.",
    },
    {
      q: "Can I give store credit instead of a refund?",
      a: `Not for a refund the US rule requires. The FTC’s [guide](${FTC_GUIDE}) says “you cannot substitute credit toward future purchases, credit vouchers, or scrip.”`,
    },
    {
      q: "Can a shopper cancel a Waitly preorder without contacting me?",
      a: "Yes, on every plan. The link in their preorder receipt, and in a delay notice, opens a page where they can cancel any time before it ships. Waitly refunds that item in full through Shopify. See [Keeping or cancelling a preorder](/guide/shopper-cancels-preorder/).",
    },
    {
      q: "What if the ship date passes and I haven’t changed it?",
      a: "For a Waitly preorder, the day after it passes Waitly sends a late notice to every shopper whose preorder hasn’t shipped, and asks those still waiting to keep or cancel. Set a new estimate to tell them when it ships. See [Change a ship date and notify shoppers](/guide/change-ship-date/).",
    },
  ],
  related: ["continue-selling-when-out-of-stock"],
};
