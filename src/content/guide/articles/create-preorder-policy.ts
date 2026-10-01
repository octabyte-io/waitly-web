import type { GuideArticle } from "../types";

export const article: GuideArticle = {
  slug: "create-preorder-policy",
  section: "preorders",
  title: "Create a preorder policy",
  summary:
    "Make a policy, choose the products it covers, and turn it on so Shopify offers them as Pre-order.",
  before: [
    "Waitly is installed. Preorders are on every plan.",
    "The Pre-order block is on your product page, or you’ll add it right after. Without it, shoppers can’t preorder.",
  ],
  steps: [
    {
      title: "Open Preorders",
      body: [
        "In your Shopify admin, open **Waitly** and choose **Preorders** in the Waitly menu.",
        "The page opens on **Policies**. A policy is a named set of rules that decides which products take preorders. Select **Create policy**.",
      ],
      shot: {
        src: "/guide/create-preorder-policy/01-preorders.jpg",
        width: 1470,
        height: 722,
        alt: "The Waitly Preorders page with the Policies view selected, a table of policies, and the Create policy button at the top right.",
        frame: "admin",
        highlights: [
          { x: 0.1, y: 79.3, w: 16.1, h: 4.8, label: "Open **Preorders**" },
          { x: 17.9, y: 19.6, w: 5.8, h: 4.8, label: "The **Policies** view" },
          { x: 88.4, y: 9.4, w: 8.1, h: 5.1, label: "Start a new policy" },
        ],
      },
    },
    {
      title: "Name the policy",
      body: [
        "Type a **Name**, such as “Winter jackets” or “Made to order”. Only you see this name. Shoppers see “Pre-order”.",
        "Names don’t have to be unique, but a clear one makes the list easier to read later.",
      ],
      shot: {
        src: "/guide/create-preorder-policy/02-name.jpg",
        width: 1014,
        height: 349,
        alt: "The Create policy page, with the Name field filled in and its help text “Only you see this name. Shoppers see “Pre-order”.”",
        frame: "admin",
        highlights: [
          { x: 3.3, y: 10.6, w: 61.0, h: 23.0, label: "Name the policy" },
        ],
      },
    },
    {
      title: "Pick the products",
      body: [
        "Under **Offer preorder on**, select **Add products** to choose products, or tick only some of a product’s variants. You can also select **Add collections**, or type a product tag and press Enter.",
        "**Products this policy covers** updates as you add things. It counts the variants and products the rule reaches and lists the first ones, each with a **View product** link.",
      ],
      shot: {
        src: "/guide/create-preorder-policy/03-offer-preorder-on.jpg",
        width: 669,
        height: 797,
        alt: "The Offer preorder on card with a tag field, Add products and Add collections buttons and two variants of one product added, then the Except card, then the Products this policy covers card showing 2 variants in 1 product.",
        frame: "admin",
        highlights: [
          { x: 56.6, y: 11.3, w: 39.3, h: 4.7, label: "Add products or collections" },
          { x: 4.2, y: 21.2, w: 91.8, h: 16.0, label: "What you’ve added" },
          { x: 4.2, y: 71.8, w: 91.8, h: 22.5, label: "What the policy reaches" },
        ],
      },
      aside: {
        kind: "tip",
        text: "To leave some products out, add them under **Except**. See “Choose products with rules and exceptions”.",
      },
    },
    {
      title: "Turn on Offer preorder",
      body: [
        "In the **Status** card on the right, turn on **Offer preorder**. A new policy starts off, so nothing changes in your store until you do.",
        "While the policy is on, Waitly lets covered variants keep selling when they’re out of stock, and switches them back when stock arrives or they leave the policy.",
      ],
      shot: {
        src: "/guide/create-preorder-policy/04-status.jpg",
        width: 1014,
        height: 282,
        alt: "The Status card with the Offer preorder switch turned on and the line “Shopify shows a Pre-order option on the products this policy covers.”",
        frame: "admin",
        highlights: [
          { x: 67.6, y: 24.2, w: 28.7, h: 22.1, label: "Turn on **Offer preorder**" },
        ],
      },
      aside: {
        kind: "note",
        text: "By default, a new policy offers preorder only while a variant is sold out. You can change that, set dates or cap units under **When preorder runs**.",
      },
    },
    {
      title: "Save the policy",
      body: [
        "Select **Save** in the bar at the top of the page. The page title changes from “Create policy” to the policy’s name. When you save a change to it later, you’ll see “Saved. Updating Shopify…”.",
        "Waitly then sets up the Pre-order purchase option in Shopify. The **In Shopify** card reads **Updating…** while it works, then **Up to date** once Shopify matches the policy.",
        "The **Summary** card sums it up: what the policy covers, how many rules and exceptions it has, **Full price, charged at checkout**, and **Orders held until you release them**.",
      ],
      shot: {
        src: "/guide/create-preorder-policy/05-in-shopify.jpg",
        width: 1014,
        height: 687,
        alt: "A saved policy: the Status card with Offer preorder on, the In Shopify card showing Up to date, and the Summary card listing Full price, charged at checkout.",
        frame: "admin",
        highlights: [
          { x: 67.8, y: 9.6, w: 28.5, h: 9.8, label: "The policy is on" },
          { x: 67.8, y: 45.3, w: 25.4, h: 8.5, label: "Shopify matches the policy" },
          { x: 67.8, y: 78.3, w: 28.8, h: 20.9, label: "What the policy does" },
        ],
      },
      aside: {
        kind: "warning",
        text: "Change a policy’s products here, not with the buttons on a product’s **Purchase options** card in Shopify. Waitly puts back anything changed there within a minute.",
      },
    },
    {
      title: "Make sure shoppers can preorder",
      body: [
        "If the Pre-order block isn’t on the product template your covered products use, a warning appears at the top of the page, with an **Add the Pre-order block** button that opens your theme editor.",
        "Until the block is placed, those products sell at zero stock as ordinary orders: not held, not tagged and not counted as preorders.",
        "The same warning shows in the **Pre-order with Waitly** window on a covered product’s page in Shopify, with a link that opens the theme editor.",
      ],
      shot: {
        src: "/guide/create-preorder-policy/06-block-warning.jpg",
        width: 740,
        height: 666,
        alt: "The Pre-order with Waitly window on a Shopify product page, with a yellow warning: The Pre-order block isn’t on the “product” product template. Products using this template sell at zero stock as ordinary orders. Under it, a link reads Add it to “product” in the theme editor.",
        caption: "The warning as it shows in the Pre-order with Waitly window on a product page.",
        frame: "admin",
        highlights: [
          { x: 3.0, y: 17.7, w: 94.0, h: 20.1, label: "The warning names the template" },
          { x: 5.0, y: 31.2, w: 38.5, h: 3.9, label: "Opens the theme editor on that template" },
        ],
      },
    },
  ],
  faqs: [
    {
      q: "How do shoppers pay for a preorder?",
      a: "In full, at checkout. Shopify then holds the order until you release it for fulfillment, so you ship it when the stock arrives.",
    },
    {
      q: "How many preorders can I take?",
      a: "20 per billing cycle on Free, 500 on Growth, and unlimited on Pro. When a cycle’s preorders are used up, preorder pauses on every product until the cycle resets or you upgrade. Preorders already placed are kept.",
    },
    {
      q: "Can one product be in two policies?",
      a: "Yes, but only one policy offers it at a time: the oldest one that’s on and open. The editor warns you when another policy already offers some of the products.",
    },
  ],
  related: ["add-preorder-block", "preorder-rules", "preorder-timing-and-limits"],
};
