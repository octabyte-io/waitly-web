export type Faq = { q: string; a: string[]; home?: boolean };

export type FaqGroup = { title: string; items: Faq[] };

export const FAQ: FaqGroup[] = [
  {
    title: "Getting started",
    items: [
      {
        q: "How long does setup take?",
        home: true,
        a: [
          "Two steps. Install Waitly, then press “Add block” in the setup guide on the Waitly home page. It opens your theme editor with the block already placed on your product page. Save the theme and test it on a sold-out product.",
          "No code, no theme files to edit, and nothing to paste.",
        ],
      },
      {
        q: "Does it work with my theme?",
        a: [
          "Waitly uses Shopify theme app blocks, so it works with any Online Store 2.0 theme. The blocks take their font and text size from your theme. On the Notify me, Coming soon and voting blocks you can set the button color, button text color and corner radius to match.",
        ],
      },
      {
        q: "Will Waitly slow my store down?",
        a: [
          "Waitly’s storefront scripts are plain JavaScript kept to about 10 KB each, with no framework to download. The Notify me form only appears on variants that are sold out.",
        ],
      },
      {
        q: "Can I show Waitly in other languages?",
        a: [
          "Partly. Waitly’s own wording is in English. On the Notify me, Coming soon and voting blocks you can type your own words in the block settings, and translate what you type per language in Shopify’s Translate & Adapt app. The Pre-order block’s fixed lines can’t be changed or translated.",
        ],
      },
    ],
  },
  {
    title: "Back in stock alerts",
    items: [
      {
        q: "How does Waitly know a product is back in stock?",
        home: true,
        a: [
          "Shopify tells Waitly every time an inventory level changes. When a product or variant goes from unavailable to available, Waitly treats it as a restock and starts emailing the people waiting for it. You don’t press anything.",
        ],
      },
      {
        q: "Do alerts go out by SMS or push?",
        home: true,
        a: [
          "Not today. Waitly sends email only, from alerts@waitly.octabyte.app with your store’s name as the sender and your contact address as the reply-to.",
        ],
      },
      {
        q: "What stops a shopper being emailed over and over?",
        a: [
          "After an alert, Waitly gives a shopper 48 hours by default to buy (you can set 1 to 168). If they don’t, they go back on the waitlist and keep their original place in the queue. Once a shopper has had 3 alerts for the same product without buying (you can set 1 to 10), they leave the waitlist.",
          "Every waitlist email has a link to stop alerts, and addresses that bounce or mark mail as spam are stopped automatically.",
        ],
      },
      {
        q: "Does an alert reserve the item for the shopper?",
        a: [
          "A normal alert doesn’t. The email says so plainly: first come, first served. On Pro you can choose “Reserve for the first shoppers”, which holds one unit for each shopper at the front of the line for 10 minutes, 30 minutes, 1 hour or 24 hours.",
        ],
      },
      {
        q: "What counts as a recovered sale?",
        a: [
          "An order for the item from a shopper Waitly alerted, placed within the attribution window after the alert (7 days by default, adjustable from 1 to 30). Refunds and unpaid cancellations are subtracted from recovered revenue.",
        ],
      },
    ],
  },
  {
    title: "Preorders",
    items: [
      {
        q: "How do shoppers pay for a preorder?",
        home: true,
        a: [
          "In full, at checkout, through Shopify’s own selling plans. The product page says “Pay in full today. This item ships later.” and Shopify holds the order for fulfillment until you ship it.",
        ],
      },
      {
        q: "Can I take a deposit or partial payment?",
        a: [
          "Not today. Waitly preorders are paid in full. We chose that because it keeps refunds, taxes and fulfillment inside Shopify’s normal order flow.",
        ],
      },
      {
        q: "Can shoppers cancel a preorder?",
        a: [
          "Yes, any time before it ships, for a full refund. The Pre-order block says so before they buy, and every preorder order gets a Preorder receipt email with a link to keep or cancel. A cancel refunds that line straight away through Shopify; there’s no approval step. This is on every plan.",
        ],
      },
      {
        q: "What happens if a ship date slips?",
        a: [
          "When you save a later ship estimate, Waitly emails each affected shopper a Delay notice 30 minutes after your last save. If you correct the date in that time, shoppers get one notice with the final date, or none if you move it back. A shopper whose promised date passes is told too.",
          "If the new date is more than 30 days past what the shopper was promised, or there’s no date at all, the notice asks them to agree to wait. Anyone who doesn’t agree by the deadline, at least 7 days after the notice, is cancelled and refunded automatically, unless part of their preorder has already shipped. A preorder with no ship estimate is promised within 30 days of the order.",
        ],
      },
      {
        q: "Can I stop overselling a preorder?",
        a: [
          "Yes. Set a maximum number of units per product on any policy. Cancelled or refunded preorders give their units back. You can also offer preorder only while a variant is sold out, so it turns itself off when stock arrives.",
        ],
      },
    ],
  },
  {
    title: "Plans and billing",
    items: [
      {
        q: "How am I billed?",
        a: [
          "Through Shopify, on your normal Shopify invoice. Plans are monthly. Growth and Pro each start with a 14-day free trial.",
        ],
      },
      {
        q: "What happens if I reach my plan’s limit?",
        home: true,
        a: [
          "Waitly shows a banner when you have used 80% of a cycle’s allowance. At 100%, further restock alerts are held back rather than sent, and shoppers stay on the waitlist. Nothing is deleted. Upgrade, or wait for the next cycle to begin.",
        ],
      },
      {
        q: "Is there an annual plan?",
        a: ["Not yet. Every plan is billed monthly and you can change or cancel at any time from Shopify."],
      },
      {
        q: "Do you integrate with Klaviyo or Shopify Flow?",
        a: [
          "Not today. Waitly sends its own emails and keeps its own waitlists. You can export any waitlist as CSV on Growth and Pro, and tag customers an alert brought back so they show up in your other tools.",
        ],
      },
    ],
  },
  {
    title: "Privacy",
    items: [
      {
        q: "What shopper data does Waitly keep?",
        a: [
          "An email address, what the shopper is waiting for, and a record of their consent. That’s the only protected customer field Waitly asks Shopify for. A waitlist signup with no activity expires after 365 days by default, and you can shorten that to as little as 30. Ended signups are deleted after the same period.",
        ],
      },
      {
        q: "What happens to my data if I uninstall?",
        a: [
          "Waitly answers Shopify’s privacy requests automatically. When you uninstall, your store’s data is erased 48 hours later.",
        ],
      },
    ],
  },
];
