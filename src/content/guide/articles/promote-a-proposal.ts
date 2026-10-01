import type { GuideArticle } from "../types";

export const article: GuideArticle = {
  slug: "promote-a-proposal",
  section: "coming-soon",
  title: "Turn a winning proposal into a product",
  summary:
    "Promote a proposal to a new Shopify product, or link it to one you already have, so every voter hears when it launches.",
  level: "pro",
  before: [
    "Your store is on the Pro plan.",
    "The proposal is Open or Closed and has votes.",
  ],
  steps: [
    {
      title: "Find the winner",
      body: [
        "In Waitly, choose **Voting**. **Proposals** are ranked by votes, with **Last 7 days** and **Potential revenue** beside each one.",
        "Select the proposal’s title to open it.",
      ],
      shot: {
        src: "/guide/promote-a-proposal/01-proposals-ranked.jpg",
        width: 1230,
        height: 457,
        alt: "The Proposals table on the Voting page, ranked by votes, with votes in the last 7 days and potential revenue for each proposal.",
        frame: "admin",
        highlights: [
          { x: 5.9, y: 34.2, w: 9.3, h: 5.6, label: "Select the title to open it" },
          { x: 57.9, y: 25.7, w: 40.2, h: 69.7, label: "Votes, last 7 days, potential revenue" },
        ],
      },
    },
    {
      title: "Promote it to a new product",
      body: [
        "Select **Promote**. Waitly will create the product in Shopify with one variant, your title, description and image, and 0 in stock. Its votes move to the product, and it becomes Coming Soon.",
        "Enter the product’s **Price**. It starts as your planned price, if you set one. Then select **Promote**.",
        "If Shopify asks you to let Waitly publish products, allow it so the product goes on your Online Store with its Coming Soon form. If you say no, publish it yourself in Shopify.",
      ],
      shot: {
        src: "/guide/promote-a-proposal/02-promote-modal.jpg",
        width: 1230,
        height: 701,
        alt: "The Promote Splitboard 2027 window, explaining what Waitly creates in Shopify, with a Price field and Link a product instead, Cancel and Promote buttons.",
        frame: "admin",
        highlights: [
          { x: 15.2, y: 47.2, w: 49.0, h: 11.9, label: "Set the product’s price" },
          { x: 57.0, y: 70.3, w: 7.1, h: 5.3, label: "Create the product" },
          { x: 38.3, y: 70.3, w: 13.5, h: 5.3, label: "Or link an existing product" },
        ],
      },
      aside: {
        kind: "note",
        text: "Voters aren’t emailed when you promote. They hear when the product is in stock. Add sizes, colors, SKU and weight in Shopify afterwards.",
      },
    },
    {
      title: "Or link it to a product you already have",
      body: [
        "If the product already exists in Shopify, select **Link to existing product** instead (or **Link a product instead** in the Promote window). Search, choose the product and select **Link product**.",
        "It must be sold out and published to the Online Store. Products Waitly can’t use are greyed out with the reason, for example “Has 50 in stock, so it is already on sale.” Waitly doesn’t change the product. It marks it Coming Soon and moves the votes to it.",
      ],
      shot: {
        src: "/guide/promote-a-proposal/03-link-modal.jpg",
        width: 1230,
        height: 701,
        alt: "The Link Splitboard 2027 to a product window, with a product search, a list of products where most are greyed out with a reason such as “Has 50 in stock, so it is already on sale.”, and a Link product button.",
        frame: "admin",
        highlights: [
          { x: 15.2, y: 28.6, w: 48.2, h: 5.5, label: "Search your products" },
          { x: 15.2, y: 47.3, w: 48.2, h: 7.2, label: "Greyed out, with the reason" },
          { x: 55.2, y: 88.8, w: 9.0, h: 5.2, label: "Link the chosen product" },
        ],
      },
    },
    {
      title: "Follow it in Promoted",
      body: [
        "Waitly takes you back to **Voting**. The proposal moves to **Promoted**, which shows the **Product**, **How** it was promoted (**Created** or **Linked**), **Votes moved** and **Promoted on**.",
        "While Waitly works, the product reads “Creating the product in Shopify…”. If it’s not published yet, you’ll see “Publish in Shopify to show the Coming Soon form.”",
      ],
      shot: {
        src: "/guide/promote-a-proposal/04-promoted-section.jpg",
        width: 1230,
        height: 169,
        alt: "The Promoted section of the Voting page: Minimal all-mountain board, linked to The Minimal Snowboard with the note Publish in Shopify to show the Coming Soon form, 9 votes moved, promoted on Sep 7, 2026.",
        frame: "admin",
        highlights: [
          { x: 25.0, y: 59.8, w: 25.2, h: 22.5, label: "The product, and what’s left to do" },
          { x: 64.4, y: 40.8, w: 6.1, h: 41.4, label: "**Created** or **Linked**" },
          { x: 76.6, y: 40.8, w: 9.3, h: 41.4, label: "Votes moved" },
        ],
      },
      aside: {
        kind: "tip",
        text: "If a row shows **Promotion not finished**, select **Retry promotion** to try again.",
      },
    },
    {
      title: "Launch it and tell your voters",
      body: [
        "Get the product ready in Shopify, then add stock. That launches it: every voter gets an email saying the product they voted for is now available.",
        "Shoppers who signed up on the product’s Coming Soon form in the meantime get the launch email too, in their own wording.",
      ],
      shot: {
        src: "/guide/promote-a-proposal/05-launch-email.jpg",
        width: 608,
        height: 500,
        alt: "The launch email a voter receives, headed “The Splitboard 2027 you voted for is now available”, with a Buy it now button.",
        frame: "email",
        highlights: [
          { x: 8.6, y: 11.0, w: 74.1, h: 6.8, label: "Names the product they voted for" },
          { x: 8.6, y: 36.4, w: 19.1, h: 9.6, label: "Opens the product page" },
        ],
      },
    },
  ],
  faqs: [
    {
      q: "What happens to the votes?",
      a: "Each vote becomes a place on the product’s waitlist, keeping the date the shopper voted. A voter already waiting for that product keeps their existing place instead.",
    },
    {
      q: "Can I undo a promotion?",
      a: "No. A promoted proposal can’t be changed or deleted. It’s off the Voting block for good, and its votes live on the product’s waitlist.",
    },
  ],
  related: ["create-a-proposal", "mark-coming-soon", "shopper-votes"],
};
