import type { GuideArticle } from "../types";

export const article: GuideArticle = {
  slug: "add-voting-block",
  section: "coming-soon",
  title: "Add the voting block to your store",
  summary:
    "Put the Product voting block on your home page or a page of its own, and word it your way.",
  level: "pro",
  before: [
    "Your store is on the Pro plan.",
    "At least one proposal is open, or the block has nothing to show. See “Let shoppers vote on a product idea”.",
  ],
  steps: [
    {
      title: "Open the theme editor from Voting",
      body: [
        "In Waitly, choose **Voting**. Until the block is on your store, a banner reads **Add the Voting block to your theme**.",
        "Select **Open theme editor**. Your theme editor opens on your home page with the block ready to add.",
      ],
      shot: {
        src: "/guide/add-voting-block/01-add-block-banner.jpg",
        width: 1230,
        height: 175,
        alt: "The banner at the top of the Voting page headed Add the Voting block to your theme, saying shoppers vote on a page you choose, with an Open theme editor button.",
        frame: "admin",
        highlights: [
          { x: 1.4, y: 12.5, w: 97.3, h: 74.3, label: "Shows until the block is on your store" },
          { x: 2.7, y: 61.1, w: 11.9, h: 16.1, label: "Select **Open theme editor**" },
        ],
      },
    },
    {
      title: "Place the block and save",
      body: [
        "Move the **Product voting** block to where you want it on the page, then select **Save** in the theme editor.",
        "To use a page of its own instead, create a page such as “Vote” in **Online Store** › **Pages** first. Then open that page in the theme editor and add the **Product voting** block there.",
      ],
      shot: {
        src: "/guide/add-voting-block/02-theme-editor.jpg",
        width: 1470,
        height: 757,
        alt: "The Shopify theme editor on the home page, with the Product voting block under Apps in the sidebar and, in the preview, three proposals with tick boxes, an email field and a Vote button.",
        frame: "admin",
        highlights: [
          { x: 2.9, y: 59.4, w: 16.7, h: 4.9, label: "The **Product voting** block" },
          { x: 23.5, y: 18.2, w: 72.4, h: 71.6, label: "How it looks on the page" },
          { x: 93.5, y: 1.1, w: 6.4, h: 5.2, label: "Save the theme" },
        ],
      },
      aside: {
        kind: "tip",
        text: "A block added to a page template shows on every page that uses that template. Give your Vote page its own template if other pages share the default one.",
      },
    },
    {
      title: "Change the wording and style if you like",
      body: [
        "Select the block to see its settings. Under **Text** you can change the **Heading**, **Subheading**, **Email field label**, **Email field placeholder**, **Button** and the messages shoppers see: **Voted**, **Voted before**, **Voted tag** and **Nothing ticked**. In **Voted**, **{items}** stands for the names of the proposals the shopper voted for.",
        "Leave a field empty to use Waitly’s wording, which is in English. Under **Style**, set the **Button color**, **Button text color** and **Corner radius**; **Style (Growth)** adds four more settings.",
      ],
      shot: {
        src: "/guide/add-voting-block/03-block-settings.jpg",
        width: 1470,
        height: 757,
        alt: "The Product voting block’s settings in the theme editor, with the Heading, Subheading and Email field label fields under Text, and the block outlined in the preview.",
        frame: "admin",
        highlights: [
          { x: 1.6, y: 16.4, w: 17.6, h: 5.0, label: "Select the block" },
          { x: 0.2, y: 69.7, w: 19.6, h: 30.3, label: "Reword the text here" },
        ],
      },
      aside: {
        kind: "note",
        text: "The consent line under the email field can’t be changed. It’s the wording Waitly records as the shopper’s agreement to hear about the products they vote for.",
      },
    },
    {
      title: "Check it on your store",
      body: [
        "Open the page on your store. The block lists your open proposals, the most recently opened first, each with its image, title, description and planned price. A proposal with no image shows a gray square, as here.",
        "Shoppers tick the ones they’d buy, enter their email and select **Vote**. They never see how many votes a proposal has.",
      ],
      shot: {
        src: "/guide/add-voting-block/04-storefront-block.jpg",
        width: 1455,
        height: 705,
        alt: "The Product voting block on the store’s home page, with three proposals to tick, each with a title, description and planned price, an email field, the consent line and a Vote button.",
        frame: "storefront",
        highlights: [
          { x: 94.0, y: 29.9, w: 3.5, h: 34.5, label: "Tick the ones you’d buy" },
          { x: 2.8, y: 74.0, w: 94.3, h: 7.3, label: "Enter an email" },
          { x: 2.8, y: 85.1, w: 94.3, h: 7.3, label: "Send the votes" },
        ],
      },
    },
  ],
  faqs: [
    {
      q: "Why don’t I see the block on my store?",
      a: "It shows only while your store is on Pro and at least one proposal is open. In the theme editor, an empty block says why, so you can still place it.",
    },
    {
      q: "Do I need to update the block when I open or close a proposal?",
      a: "No. The block always shows whatever is open in Waitly right now.",
    },
  ],
  related: ["create-a-proposal", "shopper-votes", "promote-a-proposal"],
};
