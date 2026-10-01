import type { GuideArticle } from "../types";

export const article: GuideArticle = {
  slug: "customize-notify-me-block",
  section: "back-in-stock",
  title: "Change the Notify me block’s words and style",
  summary: "Edit the Notify me block’s text, button colors and corners in the theme editor, and on Growth its background, border and button style.",
  before: ["The Notify me block is on your product page."],
  steps: [
    {
      title: "Open the block in the theme editor",
      body: [
        "In your Shopify admin, go to **Online Store** › **Themes** and select **Customize**. Choose **Products** › **Default product** from the menu at the top, then select **Notify me when available** in the block list on the left. Its settings open in the sidebar.",
        "Every change shows in the preview straight away. Waitly doesn’t keep a second copy of these settings, so the theme editor is the only place to change them.",
      ],
      shot: {
        src: "/guide/customize-notify-me-block/01-block-settings.jpg",
        width: 1470,
        height: 757,
        alt: "The theme editor with the Notify me when available block selected and its settings open in the sidebar, next to a preview of a sold-out product.",
        frame: "admin",
        highlights: [
          { x: 1.6, y: 16.4, w: 17.6, h: 5.2, label: "Select **Notify me when available**" },
          { x: 0.1, y: 26.0, w: 20.5, h: 73.6, label: "The block’s settings" },
          { x: 72.0, y: 41.7, w: 24.3, h: 31.2, label: "Changes show in the preview" },
        ],
      },
      aside: {
        kind: "tip",
        text: "The form only shows on a sold-out variant. Use the product picker at the top of the editor to preview a sold-out product, so you can see your changes.",
      },
    },
    {
      title: "Change the words",
      body: [
        "Under **Text** you can change everything the form says: **Heading**, **Email field label**, **Email field placeholder**, **Consent checkbox** and **Button**.",
        "You can also change the messages a shopper sees after pressing the button: **Signed up**, **Email rejected**, **Too many sign-ups**, **Something went wrong** and **No variant chosen**.",
        "Every field starts empty. Leave a field empty to keep Waitly’s wording, which you can see in the preview. Waitly’s wording is translated into your store’s languages for you.",
      ],
      shot: {
        src: "/guide/customize-notify-me-block/02-text-settings.jpg",
        width: 304,
        height: 697,
        alt: "The Text settings of the Notify me block in the theme editor sidebar: empty Heading, Email field label, Email field placeholder, Consent checkbox and Button fields.",
        frame: "admin",
        highlights: [
          { x: 2.0, y: 32.1, w: 93.0, h: 59.5, label: "The words on the form" },
        ],
      },
      aside: {
        kind: "note",
        text: "Anything you type here can be translated per language in Shopify’s Translate & Adapt app.",
      },
    },
    {
      title: "Set the button colors and corners",
      body: [
        "Under **Style**, choose a **Button color** and a **Button text color**, and set the **Corner radius** from 0 to 32 px. These three settings work on every plan.",
      ],
      shot: {
        src: "/guide/customize-notify-me-block/03-style.jpg",
        width: 304,
        height: 216,
        alt: "The Style settings of the Notify me block: Button color, Button text color and a Corner radius slider.",
        frame: "admin",
        highlights: [
          { x: 2.6, y: 32.4, w: 91.5, h: 41.7, label: "Button colors" },
          { x: 2.6, y: 77.8, w: 91.5, h: 18.5, label: "**Corner radius**" },
        ],
      },
    },
    {
      title: "Use the Growth style settings",
      body: [
        "Under **Style (Growth)** there are four more settings: **Background** and **Border** colors for the whole form, **Button style** (**Filled** or **Outlined**) and **Full-width button**.",
        "They only take effect while your store is on Growth or Pro. On Free the block ignores them and keeps the three settings above.",
      ],
      shot: {
        src: "/guide/customize-notify-me-block/04-growth-style.jpg",
        width: 304,
        height: 291,
        alt: "The Style (Growth) settings of the Notify me block: Background, Border, Button style and Full-width button.",
        frame: "admin",
        highlights: [
          { x: 2.6, y: 40.9, w: 91.5, h: 31.6, label: "Colors for the whole form" },
          { x: 2.6, y: 73.9, w: 91.5, h: 25.8, label: "Button style and width" },
        ],
      },
    },
    {
      title: "Save and check your store",
      body: [
        "Select **Save**, then open a sold-out variant on your storefront to see the result.",
        "On Free, a small “Powered by Waitly” line shows under the form. Growth and Pro remove it.",
      ],
      shot: {
        src: "/guide/customize-notify-me-block/05-styled-block.jpg",
        width: 495,
        height: 542,
        alt: "A sold-out variant on a storefront, with the Notify me form below the product description: Out of stock heading, Email field, consent checkbox and Notify me when available button, and no Powered by Waitly line.",
        frame: "storefront",
        highlights: [
          { x: 3.6, y: 60.3, w: 93.2, h: 37.2, label: "The Notify me form" },
        ],
      },
    },
  ],
  faqs: [
    {
      q: "How do I remove “Powered by Waitly”?",
      a: "Move to Growth or Pro. The line disappears by itself; there’s no setting to change. Waitly’s Settings page, under Widget, says whether your plan includes it.",
    },
    {
      q: "When does the “Too many sign-ups” message show?",
      a: "Only when your store has taken an unusual number of signups in the last hour. It protects the address every store’s email is sent from.",
    },
    {
      q: "What is the Product setting at the top?",
      a: "It tells the block which product it belongs to. Leave it on the page’s own product.",
    },
  ],
  related: ["variant-or-whole-product", "add-notify-me-block", "shopper-joins-waitlist"],
};
