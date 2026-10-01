import type { GuideArticle } from "../types";

export const article: GuideArticle = {
  slug: "coming-soon-block-and-fields",
  section: "coming-soon",
  title: "Set up the Coming soon form",
  summary:
    "Add the Coming soon block to your product page, word it your way, and choose whether it asks for quantity and country.",
  level: "pro",
  before: ["Your store is on the Pro plan."],
  steps: [
    {
      title: "Open the theme editor from Coming Soon",
      body: [
        "In Waitly, choose **Coming Soon**. Until the block is on your product page, a banner reads **Add the Coming Soon block to your theme**.",
        "Select **Open theme editor**. Your theme editor opens on the product page with the block ready to add.",
      ],
      shot: {
        src: "/guide/coming-soon-block-and-fields/01-add-block-banner.jpg",
        width: 1215,
        height: 175,
        alt: "The banner at the top of the Coming Soon page headed Add the Coming Soon block to your theme, with an Open theme editor button and a Setup guide button.",
        frame: "admin",
        highlights: [
          { x: 1.4, y: 12.5, w: 97.2, h: 74.3, label: "Shows until the block is on your theme" },
          { x: 2.7, y: 61.1, w: 12.0, h: 16.1, label: "Select **Open theme editor**" },
        ],
      },
    },
    {
      title: "Place the block and save",
      body: [
        "In the sidebar, keep the **Coming soon** block in the same section as **Buy buttons** and below it, so the form shows under your theme’s sold-out button. Then select **Save** in the theme editor.",
        "The block only shows on products you mark in Waitly under **Coming Soon**. There it takes the place of **Notify me**, so you can keep both blocks on the page.",
      ],
      shot: {
        src: "/guide/coming-soon-block-and-fields/02-theme-editor.jpg",
        width: 1470,
        height: 757,
        alt: "The Shopify theme editor on a product page, with the Coming soon block listed under Product information in the sidebar, below Buy buttons and Notify me when available.",
        frame: "admin",
        highlights: [
          { x: 2.9, y: 71.9, w: 16.7, h: 4.9, label: "The **Coming soon** block" },
          { x: 2.9, y: 54.0, w: 16.7, h: 4.9, label: "Keep it below **Buy buttons**" },
          { x: 93.5, y: 1.1, w: 6.4, h: 5.2, label: "Save the theme" },
        ],
      },
    },
    {
      title: "Change the wording and style if you like",
      body: [
        "Select the block to see its settings. Under **Text** you can change the **Badge**, **Heading**, **Chosen option**, **Any option checkbox**, **Quantity field label**, **Country line**, **Consent checkbox**, **Button** and the messages shoppers see after they sign up.",
        "Leave a field empty to use Waitly’s wording, which is in English. In **Chosen option**, **{variant}** stands for the size or color the shopper picked; in **Country line**, **{country}** stands for their country.",
        "Under **Style**, set the **Button color**, **Button text color** and **Corner radius**. **Style (Growth)** adds **Background**, **Border**, **Button style** and **Full-width button**, which work on Growth and Pro.",
      ],
      shot: {
        src: "/guide/coming-soon-block-and-fields/03-block-settings.jpg",
        width: 1470,
        height: 757,
        alt: "The Coming soon block’s settings in the theme editor, with the Badge, Heading, Chosen option and Any option checkbox fields under Text.",
        frame: "admin",
        highlights: [
          { x: 1.6, y: 16.4, w: 17.6, h: 5.0, label: "Select the block" },
          { x: 0.2, y: 43.8, w: 19.6, h: 48.4, label: "Leave empty for Waitly’s wording" },
        ],
      },
    },
    {
      title: "Choose the form fields in Waitly",
      body: [
        "Back in Waitly, on **Coming Soon**, find **Form fields**. Every Coming Soon form asks for an email and which option the shopper wants. Two more questions are up to you:",
        "**Ask how many they want** adds a number from 1 to 10, and you see **Units wanted** beside shoppers waiting. **Show the shopper's country** shows a line like “Shopping from United Kingdom”, from the country the shopper chose in your store, and you see where demand comes from.",
        "Select **Save** in the bar at the top. You’ll see **Form fields saved**.",
      ],
      shot: {
        src: "/guide/coming-soon-block-and-fields/04-form-fields.jpg",
        width: 1215,
        height: 248,
        alt: "The Form fields card on the Coming Soon page with the Ask how many they want and Show the shopper’s country switches turned on.",
        frame: "admin",
        highlights: [
          { x: 2.7, y: 42.9, w: 63.3, h: 18.1, label: "Ask for a quantity" },
          { x: 2.7, y: 67.1, w: 63.3, h: 18.1, label: "Show the shopper’s country" },
        ],
      },
      aside: {
        kind: "note",
        text: "These switches apply to every Coming Soon form in your store. The block’s own Quantity field label and Country line only show when the matching switch is on.",
      },
    },
    {
      title: "Check it on your store",
      body: [
        "Open a marked, sold-out product on your store. You should see the **Coming soon** badge, the heading, the questions you chose and the **I want this** button.",
        "If the form isn’t there, look at the **Form** column on the **Coming Soon** page. It says why a form is hidden.",
      ],
    },
  ],
  faqs: [
    {
      q: "Can shoppers pick “any option”?",
      a: "Yes, on a product with more than one variant. The form shows a checkbox worded “Any size or color is fine” unless you change it, for shoppers who’ll take any variant.",
    },
    {
      q: "What if a shopper signs up twice?",
      a: "Their answers are updated rather than added again, and in the same browser they see a “Signed up again” message you can reword in the block.",
    },
  ],
  related: ["mark-coming-soon", "customize-notify-me-block", "add-notify-me-block"],
};
