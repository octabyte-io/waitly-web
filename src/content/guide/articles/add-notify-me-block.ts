import type { GuideArticle } from "../types";

export const article: GuideArticle = {
  slug: "add-notify-me-block",
  section: "getting-started",
  title: "Add the Notify me block",
  summary: "Put the Notify me button on your product page from the setup guide, or add it yourself in the theme editor.",
  before: [
    "Waitly is installed.",
    "Your store uses an Online Store 2.0 theme, such as Dawn.",
  ],
  steps: [
    {
      title: "Select Add block in the setup guide",
      body: [
        "Open Waitly. The **Setup guide** is the card at the top of **Home**, and it lists two steps. Open the first one, **Add the Notify me block to your product page**, and select its **Add block** button.",
        "Your theme editor opens in a new browser tab.",
      ],
      shot: {
        src: "/guide/add-notify-me-block/01-setup-guide.jpg",
        width: 1016,
        height: 462,
        alt: "The Setup guide card on Waitly’s Home at 0 of 2 steps completed, with the first step, Add the Notify me block to your product page, open and showing its Add block button.",
        frame: "admin",
        highlights: [
          { x: 5.1, y: 38.1, w: 31.9, h: 6.0, label: "The first step" },
          { x: 6.3, y: 55.0, w: 9.3, h: 7.0, label: "Select **Add block**" },
        ],
      },
    },
    {
      title: "Find the block in the theme editor",
      body: [
        "The theme editor opens your live theme on the default product template, with the **Notify me when available** block already added to the product section. You’ll see it in the list of blocks on the left.",
      ],
      shot: {
        src: "/guide/add-notify-me-block/02-theme-editor.jpg",
        width: 1470,
        height: 757,
        alt: "The Shopify theme editor on the default product template, with the Notify me when available block listed in the product section on the left and a sold-out product previewed on the right, the Out of stock form starting below its description.",
        frame: "admin",
        highlights: [
          { x: 1.6, y: 67.2, w: 17.6, h: 5.3, label: "The **Notify me when available** block" },
          { x: 72.5, y: 80.6, w: 23.3, h: 19.0, label: "The form on a sold-out variant" },
        ],
      },
      aside: {
        kind: "tip",
        text: "The block only shows on a sold-out variant, so the preview may look empty. To see it, use the product picker at the top of the editor to preview a product whose selected variant is sold out.",
      },
    },
    {
      title: "Drag it into place",
      body: [
        "Drag **Notify me when available** up or down the block list to where you want the form. Just under the price or under the buy buttons works well, since that’s where shoppers look when a variant is sold out.",
      ],
      shot: {
        src: "/guide/add-notify-me-block/03-position.jpg",
        width: 1470,
        height: 757,
        alt: "The theme editor with the Notify me when available block moved to just below Buy buttons in the block list, and the preview showing the Out of stock form under the buy buttons of a sold-out variant.",
        frame: "admin",
        highlights: [
          { x: 1.6, y: 58.3, w: 17.6, h: 5.3, label: "Drag the block up or down" },
          { x: 72.4, y: 71.3, w: 23.6, h: 28.4, label: "The form, now under the buy buttons" },
        ],
      },
    },
    {
      title: "Save your theme",
      body: [
        "Select **Save** at the top right of the theme editor. The button now appears on every sold-out variant that uses this template.",
        "Go back to Waitly and reload **Home**. Once Waitly sees the block on your live theme, the first step of the setup guide is ticked off and the guide reads **1 of 2 steps completed**.",
      ],
      shot: {
        src: "/guide/add-notify-me-block/04-step-done.jpg",
        width: 1016,
        height: 362,
        alt: "The Setup guide on Waitly’s Home reading 1 of 2 steps completed, with a green tick beside Add the Notify me block to your product page and the second step, Test the button on a sold-out product, still open.",
        frame: "admin",
        highlights: [
          { x: 3.4, y: 28.4, w: 14.9, h: 5.9, label: "**1 of 2 steps completed**" },
          { x: 5.1, y: 48.8, w: 31.9, h: 7.3, label: "The first step is ticked off" },
        ],
      },
      aside: {
        kind: "note",
        text: "Waitly checks your published theme only. If you added the block to a theme you haven’t published yet, the step stays open until you publish it.",
      },
    },
    {
      title: "Or add it yourself",
      body: [
        "You can also add the block without the setup guide. In your Shopify admin, go to **Online Store** › **Themes** and select **Customize**. Choose **Products** › **Default product** from the menu at the top.",
        "In the product section, select **Add block**, open the **Apps** tab and choose **Notify me when available**. Drag it into place and select **Save**.",
        "If your theme has more than one product template, add the block to each one you use.",
      ],
      shot: {
        src: "/guide/add-notify-me-block/05-add-manually.jpg",
        width: 1470,
        height: 757,
        alt: "The theme editor’s Add block menu on the Apps tab, listing Waitly’s Coming soon, Notify me when available and Pre-order blocks.",
        frame: "admin",
        highlights: [
          { x: 1.6, y: 26.9, w: 17.6, h: 5.3, label: "Select **Add block**" },
          { x: 27.4, y: 30.0, w: 9.4, h: 4.9, label: "Open **Apps**" },
          { x: 19.2, y: 42.4, w: 17.8, h: 7.4, label: "Choose **Notify me when available**" },
        ],
      },
      aside: {
        kind: "tip",
        text: "**Open the theme editor** in Waitly’s **Settings**, under **Widget**, opens the editor with the block already added, just like the setup guide.",
      },
    },
  ],
  faqs: [
    {
      q: "Do I need to turn on Waitly’s app embed?",
      a: "No. Waitly also lists an app embed called Storefront runtime, but the Notify me block works on its own on an Online Store 2.0 theme. You can leave the embed off.",
    },
    {
      q: "Can I put the block on a page that isn’t a product page?",
      a: "No. The block can only be added to product templates. Leave its Product setting on the page’s own product.",
    },
    {
      q: "Does it work with an older (vintage) theme?",
      a: "Not today. A vintage theme can’t hold app blocks, so the Notify me block can’t be placed. You’ll need an Online Store 2.0 theme.",
    },
  ],
  related: ["test-notify-me", "customize-notify-me-block", "check-storefront-connection"],
};
