import type { GuideArticle } from "../types";

export const article: GuideArticle = {
  slug: "shopper-votes",
  section: "shoppers",
  title: "Voting for a product",
  summary:
    "What your shoppers see when they vote on your next products, and the thank-you email they get.",
  level: "pro",
  before: [
    "Your store is on Pro.",
    "The Product voting block is on your home page or a page of its own.",
    "At least one proposal is open in Waitly, under Voting.",
  ],
  steps: [
    {
      title: "The shopper sees the voting block",
      body: [
        "The block is headed “Vote for what we make next”, with “Tick the ones you’d buy. We’ll only email you about those.” under it.",
        "Each open proposal shows its image, title, description and planned price, with a box to tick. Shoppers never see how many votes a proposal has.",
      ],
      shot: {
        src: "/guide/shopper-votes/01-voting-block.jpg",
        width: 1455,
        height: 580,
        alt: "The Product voting block on the storefront, headed Vote for what we make next, listing three proposals with an image placeholder, title, description, planned price and a tick box each, then an Email field and a Vote button.",
        frame: "storefront",
        highlights: [
          { x: 2.8, y: 2.8, w: 31.8, h: 11.9, label: "The block’s heading and subheading" },
          { x: 94.2, y: 21.0, w: 2.9, h: 41.2, label: "A box to tick for each product" },
          { x: 2.8, y: 69.2, w: 94.3, h: 27.4, label: "**Email**, the consent line and **Vote**" },
        ],
      },
    },
    {
      title: "The shopper ticks products and votes",
      body: [
        "They tick one or more products, type their address in **Email** and select **Vote**. The line under the email field says that by voting they agree to get emails about these products and can unsubscribe at any time.",
        "If they haven’t ticked anything, the block asks them to choose at least one product.",
      ],
      shot: {
        src: "/guide/shopper-votes/02-vote-filled.jpg",
        width: 1455,
        height: 580,
        alt: "The voting block with two proposals ticked, Carbon Race Board and Splitboard 2027, and shopper@example.com typed in the Email field above the Vote button.",
        frame: "storefront",
        highlights: [
          { x: 94.2, y: 21.5, w: 2.9, h: 40.7, label: "Two products ticked" },
          { x: 2.8, y: 74.6, w: 94.3, h: 8.6, label: "The shopper’s address in **Email**" },
          { x: 2.8, y: 88.0, w: 94.3, h: 8.6, label: "**Vote**" },
        ],
      },
    },
    {
      title: "The shopper sees their thanks",
      body: [
        "The block thanks them and lists what they voted for: “If we make one, we will email you when it is available.” Each product they voted for is marked **You voted** in that browser.",
        "If they vote again for products they already voted for, the block says “You already voted for these.”",
      ],
      aside: {
        kind: "tip",
        text: "You can change the block’s heading, subheading, button and messages in the theme editor. The consent line is fixed.",
      },
    },
    {
      title: "The shopper gets a vote confirmation",
      body: [
        "Waitly emails a thank-you with the subject “Thanks for voting at” your shop. It lists each product they voted for, each with a **Remove my vote** link, and ends with “If we make one, we will email you when it is available.”",
      ],
      shot: {
        src: "/guide/shopper-votes/04-vote-confirmation.jpg",
        width: 608,
        height: 460,
        alt: "The vote confirmation email, headed Thanks for voting, listing two products each with a Remove my vote link.",
        frame: "email",
        highlights: [
          { x: 8.6, y: 29.2, w: 37.4, h: 12.9, label: "**Remove my vote** beside each product" },
          { x: 8.6, y: 45.3, w: 56.3, h: 6.4, label: "They’ll hear when one is made" },
        ],
      },
    },
    {
      title: "The shopper can take a vote back",
      body: [
        "**Remove my vote** opens the same **Email preferences** page shoppers use to stop alerts. They confirm with **Stop alerts for this item**, and the vote no longer counts.",
      ],
    },
    {
      title: "When you make it, voters hear first",
      body: [
        "When you promote a proposal into a real product and it goes on sale, everyone who voted for it gets an alert: “The” product “you voted for is now available”, with a **Buy it now** button.",
      ],
    },
  ],
  faqs: [
    {
      q: "Can a shopper vote more than once for the same product?",
      a: "No. Voting again with the same email doesn’t add a second vote.",
    },
  ],
  related: ["add-voting-block", "create-a-proposal", "promote-a-proposal"],
};
