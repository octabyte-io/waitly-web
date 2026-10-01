import type { GuideArticle } from "../types";

export const article: GuideArticle = {
  slug: "reserve-units",
  section: "restock-release",
  title: "Hold a unit for the first shoppers",
  summary:
    "Hold one restocked unit for each of the first shoppers in line, send them a link only they can use, and see who holds a unit right now.",
  level: "pro",
  before: [
    "Your store is on the Pro plan.",
    "You can allow Waitly to create draft orders in your store. Each hold is a draft order.",
  ],
  steps: [
    {
      title: "Choose Reserve for the first shoppers",
      body: [
        "In Waitly, choose **Settings**, scroll to **Restock release** and select **Reserve for the first shoppers**.",
        "With this on, Waitly holds one unit for each shopper, in line order, and sends them a link only they can use. Units that aren’t held stay on sale to everyone.",
      ],
      shot: {
        src: "/guide/reserve-units/01-reserve-choice.jpg",
        width: 1014,
        height: 300,
        alt: "The Restock release section of Waitly Settings with Reserve for the first shoppers selected and the hold fields under it.",
        frame: "admin",
        highlights: [
          { x: 36.4, y: 51.1, w: 56.3, h: 14.9, label: "Select **Reserve for the first shoppers**" },
        ],
      },
    },
    {
      title: "Allow draft orders",
      body: [
        "The first time you choose Reserve, a banner asks you to **Allow Waitly to create draft orders**. Each hold is a draft order in your store that only one shopper can pay.",
        "Select **Allow draft orders** and approve the request in the Shopify window that opens. The banner disappears once you’ve allowed it.",
      ],
      shot: {
        src: "/guide/reserve-units/02-draft-orders-banner.jpg",
        width: 1016,
        height: 337,
        alt: "The Restock release section of Waitly Settings with Reserve for the first shoppers selected and, above the choices, a banner headed Allow Waitly to create draft orders with an Allow draft orders button.",
        frame: "admin",
        highlights: [
          { x: 36.4, y: 7.7, w: 60.2, h: 34.4, label: "The banner, the first time you choose Reserve" },
          { x: 40.0, y: 30.6, w: 13.7, h: 8.9, label: "Select **Allow draft orders**" },
        ],
      },
      aside: {
        kind: "warning",
        text: "Shopify only asks once, and Reserve can’t be saved until you allow it.",
      },
    },
    {
      title: "Set how long and how many",
      body: [
        "**Hold each unit for** is how long each shopper has to buy: 10 minutes, 30 minutes, 1 hour or 24 hours. **Most units held at once** is between 1 and 100. Units not held stay on sale to everyone.",
        "Below the fields, Waitly plays your settings out on your largest waitlist: what happens **At the restock**, **Each time a hold ends** and **When nothing is free**. It updates as you type.",
      ],
      shot: {
        src: "/guide/reserve-units/03-hold-fields.jpg",
        width: 679,
        height: 592,
        alt: "Hold each unit for set to 30 minutes and Most units held at once set to 5, with an example table for The Videographer Snowboard (7 in stock, 32 waiting) showing At the restock, Each time a hold ends and When nothing is free.",
        frame: "admin",
        highlights: [
          { x: 5.3, y: 18.5, w: 89.4, h: 14.0, label: "How long, and how many" },
          { x: 5.3, y: 33.9, w: 89.4, h: 41.2, label: "How a restock would play out" },
        ],
      },
      aside: {
        kind: "note",
        text: "Items on pre-order are never reserved. They keep selling, so their restock goes out all at once.",
      },
    },
    {
      title: "Save",
      body: [
        "Select **Save** in the bar at the top of the page. Changes apply from the next restock.",
      ],
    },
    {
      title: "What the first shoppers receive",
      body: [
        "At the restock, each shopper with a held unit gets an email that says the item is held for them, until when, and which number they were in line. The **Complete your purchase** button takes them to checkout for their held unit.",
        "Only that shopper can use the link. When the time is up it stops working, and the next shopper in line gets the unit.",
      ],
      shot: {
        src: "/guide/reserve-units/04-held-alert-email.jpg",
        width: 608,
        height: 602,
        alt: "The held alert email: a grey box reading Held for you for 30 minutes with the end time, the line You were number 3 in line, so one is set aside for you, and a Complete your purchase button.",
        frame: "email",
        highlights: [
          { x: 8.6, y: 9.4, w: 82.8, h: 13.2, label: "How long the unit is held" },
          { x: 8.6, y: 35.4, w: 55.1, h: 4.4, label: "Their place in line" },
          { x: 8.6, y: 43.1, w: 33.6, h: 8.2, label: "Checkout for the held unit" },
        ],
      },
    },
    {
      title: "See who holds a unit right now",
      body: [
        "Open the product’s waitlist from **Waitlists**. While units are held, a **Held now** card lists each **Shopper**, their **Place in line** and **Held until**, in your store’s time zone.",
        "To end a hold early, select **Remove** on the shopper’s row. The unit held for them goes to the next shopper in line.",
      ],
      shot: {
        src: "/guide/reserve-units/05-held-now.jpg",
        width: 1014,
        height: 240,
        alt: "The Held now card on a waitlist, listing three shoppers with their place in line, the time each hold ends in New York Time, and a Remove link.",
        frame: "admin",
        highlights: [
          { x: 43.7, y: 38.1, w: 8.7, h: 52.0, label: "Place in line" },
          { x: 52.6, y: 38.1, w: 18.0, h: 52.0, label: "When each hold ends" },
          { x: 83.9, y: 50.7, w: 6.7, h: 9.9, label: "End a hold early" },
        ],
      },
    },
    {
      title: "Check the results in Analytics",
      body: [
        "In **Analytics**, under **Restock alerts**, a send that’s still holding units shows a line like **3 held now · next ends 14:30**. Select it to open the waitlist.",
        "The **Held** column counts units held during the send. Point at the number to see how many **sold**, **lapsed** (the time ran out, and the shopper is still waiting) and **released** (the shopper left the waitlist).",
      ],
      shot: {
        src: "/guide/reserve-units/06-send-log-held.jpg",
        width: 1192,
        height: 220,
        alt: "The Restock alerts send log with a row for The Complete Snowboard - Ice showing Sending, 3 held now · next ends 13:14, and 5 in the Held column.",
        frame: "admin",
        highlights: [
          { x: 32.8, y: 77.6, w: 12.9, h: 16.2, label: "Units held right now" },
          { x: 67.2, y: 18.0, w: 6.7, h: 67.6, label: "Units held during the send" },
        ],
      },
    },
  ],
  faqs: [
    {
      q: "What happens to a shopper whose hold runs out?",
      a: "They stay on the waitlist. That restock won’t call them again, but a later one can.",
    },
    {
      q: "What if I never allowed draft orders?",
      a: "The restock goes out all at once instead, and the send log says “Not reserved: draft-order access is missing”.",
    },
    {
      q: "Does a hold stop other people buying the item?",
      a: "Only the held units. Units not held stay on sale to everyone while the holds run.",
    },
  ],
  related: ["waitlist-priority", "release-in-batches", "restock-alert-log"],
};
