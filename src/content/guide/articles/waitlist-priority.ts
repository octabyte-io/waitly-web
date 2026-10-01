import type { GuideArticle } from "../types";

export const article: GuideArticle = {
  slug: "waitlist-priority",
  section: "restock-release",
  title: "Put VIPs first with waitlist priority",
  summary:
    "Choose which shoppers hear about a restock first, and see each shopper’s place in line on the waitlist.",
  level: "pro",
  before: [
    "Your store is on the Pro plan.",
    "For the tag rules, your best customers already carry a tag in Shopify, like VIP.",
  ],
  steps: [
    {
      title: "Open Waitlist priority in Settings",
      body: [
        "In Waitly, choose **Settings** and scroll to **Waitlist priority**.",
        "The rules read as one sentence, from the first shoppers to be alerted to the last. Every rule starts switched off, so until you switch one on, everyone waits in the order they joined.",
      ],
      shot: {
        src: "/guide/waitlist-priority/01-priority-section.jpg",
        width: 1014,
        height: 587,
        alt: "The Waitlist priority section of Waitly Settings, with four rule checkboxes, the VIP tag, Lifetime spend (USD) and Other tags fields, and the place-in-line checkbox.",
        frame: "admin",
        highlights: [
          { x: 1.8, y: 2.8, w: 10.8, h: 4.1, label: "Scroll to **Waitlist priority**" },
          { x: 34.8, y: 2.5, w: 63.4, h: 96.6, label: "The rules, first to last" },
        ],
      },
    },
    {
      title: "Switch on the rules that fit your shop",
      body: [
        "Tick each rule you want. Shoppers who match a higher rule are alerted before shoppers who match a lower one:",
        "**First, shoppers tagged…** puts customers with one tag at the front. Type it in **VIP tag**. It’s **VIP** unless you change it. **Then, shoppers who have spent at least…** comes next. Enter the amount in **Lifetime spend**, which is what a customer has spent with you in total, as Shopify reports it.",
        "**Then, shoppers tagged…** takes up to 20 more tags in **Other tags**, separated by commas, like wholesale, press. **Then, shoppers who have ordered from you before.** puts returning customers ahead of first-time shoppers. Everyone else waits in the order they joined.",
      ],
      shot: {
        src: "/guide/waitlist-priority/02-priority-rules.jpg",
        width: 679,
        height: 479,
        alt: "The Waitlist priority card with the First, shoppers tagged… and Then, shoppers who have ordered from you before. rules ticked, the VIP tag field set to VIP and the Lifetime spend field showing 500.00.",
        frame: "admin",
        highlights: [
          { x: 5.3, y: 5.9, w: 89.4, h: 24.6, label: "VIPs first, by this tag" },
          { x: 5.3, y: 32.8, w: 89.4, h: 24.4, label: "Then big spenders (off here)" },
          { x: 5.3, y: 86.2, w: 52.2, h: 5.6, label: "Then returning customers" },
        ],
      },
      aside: {
        kind: "note",
        text: "You choose which rules apply, but not their order. The order is fixed, so a place already given to a shopper can’t become wrong. A shopper who matches several rules takes the highest one.",
      },
    },
    {
      title: "Choose whether to tell shoppers their place in line",
      body: [
        "Tick **And tell each shopper their place in the line, in the email confirming they joined.** to add a line like “Right now you are number 4 in line for this one.” to the confirmation email.",
        "The number is a snapshot of the moment they joined. It can change as shoppers ahead of them buy or leave, or as higher-priority shoppers join.",
      ],
      shot: {
        src: "/guide/waitlist-priority/03-confirmation-email.jpg",
        width: 608,
        height: 472,
        alt: "A waitlist confirmation email headed You are on the list, with the line Right now you are number 7 in line for this one.",
        frame: "email",
        highlights: [
          { x: 8.6, y: 33.9, w: 43.6, h: 5.4, label: "Their place in line" },
        ],
      },
    },
    {
      title: "Save your changes",
      body: [
        "Select **Save** in the bar at the top of the page. You’ll see **Settings saved**.",
        "Switching a rule on or off reorders the shoppers who joined while your store was on Pro straight away, including those already waiting. Changing only the tag or the amount doesn’t reorder shoppers already waiting. Shoppers who joined before your store was on Pro keep their place by the date they joined.",
      ],
    },
    {
      title: "See the order on a waitlist",
      body: [
        "Open any waitlist from **Waitlists**. In the **Shoppers** card, **Position** shows each waiting shopper’s place in line, and the list is sorted by it.",
        "**Why** shows the rule that put them there: **VIP**, **High-value**, **Tagged** or **Ordered before**. A shopper no rule matched reads **Standard**. The **Why** column only appears once at least one rule is on.",
        "A shopper who has an alert and is still deciding shows **Alert out** instead of a number. A dash means they’re no longer waiting.",
      ],
      shot: {
        src: "/guide/waitlist-priority/04-waitlist-position.jpg",
        width: 1014,
        height: 540,
        alt: "A waitlist’s Shoppers table with Position numbers 1 to 8 in the first column and Why reasons VIP, Ordered before and Standard in the second. A shopper who bought shows a dash, and alerted shoppers show Alert out.",
        frame: "admin",
        highlights: [
          { x: 2.1, y: 8.3, w: 7.3, h: 58.1, label: "Place in line" },
          { x: 9.6, y: 8.3, w: 9.2, h: 58.1, label: "The rule that put them there" },
          { x: 2.1, y: 73.5, w: 5.5, h: 7.9, label: "Alerted, still deciding" },
        ],
      },
    },
    {
      title: "Check for a paused rule",
      body: [
        "If Shopify stops letting Waitly read your customers, a rule you switched on shows **Paused** under it in Settings. You didn’t switch anything off: the rule simply isn’t applied to new sign-ups for now. While a rule is paused, **Why** reads **Standard** for every waiting shopper, and shoppers already ranked keep their place.",
        "A paused rule starts again by itself once Shopify answers. You don’t need to do anything.",
      ],
    },
  ],
  faqs: [
    {
      q: "Does switching a rule on or off reorder shoppers already waiting?",
      a: "Yes, for shoppers who joined while your store was on Pro. Waitly remembers which rules each of them matched, so the line is reordered straight away without asking Shopify again.",
    },
    {
      q: "Who counts as a VIP?",
      a: "A shopper whose Shopify customer record carries the tag you typed in VIP tag. Shoppers who aren’t customers in your store yet can’t match a tag or spend rule, so they wait in the order they joined.",
    },
    {
      q: "Does priority take anyone off the waitlist?",
      a: "No. Priority only decides the order. It matters most when you also release in batches or reserve units, where the first shoppers in line get the first chance to buy.",
    },
  ],
  related: ["release-in-batches", "reserve-units", "see-whos-waiting"],
};
