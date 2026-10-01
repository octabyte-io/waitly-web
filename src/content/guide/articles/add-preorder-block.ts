import type { GuideArticle } from "../types";

export const article: GuideArticle = {
  slug: "add-preorder-block",
  section: "preorders",
  title: "Add the Pre-order block to your theme",
  summary:
    "Put the Pre-order block above Add to cart so shoppers see the Pre-order badge, the ship estimate and the terms, and can buy.",
  before: [
    "You use an Online Store 2.0 theme, such as Dawn or Horizon.",
    "You have a preorder policy. The block shows only on products a policy covers.",
  ],
  steps: [
    {
      title: "Open the theme editor from Waitly",
      body: [
        "In Waitly, choose **Preorders**. While a policy is on and the block is missing, a warning names the product template that needs it. Select **Add the Pre-order block** to open your theme editor on that template.",
        "If the warning lists several templates, select **Add it to** next to each one in turn.",
        "The same warning shows in the **Pre-order with Waitly** window on a covered product’s page in Shopify. There, select the **Add it to** link.",
      ],
      shot: {
        src: "/guide/add-preorder-block/01-block-warning.jpg",
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
      aside: {
        kind: "tip",
        text: "You can also get there yourself: in Shopify, choose **Online Store**, then **Themes**, then **Customize**, and open a product template.",
      },
    },
    {
      title: "Add the Pre-order block",
      body: [
        "In the product information section, select **Add block**, open the **Apps** tab, and choose **Pre-order**.",
      ],
      shot: {
        src: "/guide/add-preorder-block/02-add-block.jpg",
        width: 1470,
        height: 757,
        alt: "The Shopify theme editor’s Add block menu with the Apps tab open, listing Waitly’s Coming soon, Notify me when available and Pre-order blocks.",
        frame: "admin",
        highlights: [
          { x: 1.8, y: 46.0, w: 17.3, h: 4.9, label: "Select **Add block**" },
          { x: 27.4, y: 29.9, w: 9.4, h: 4.9, label: "Open **Apps**" },
          { x: 19.1, y: 49.7, w: 17.8, h: 7.3, label: "Choose **Pre-order**" },
        ],
      },
    },
    {
      title: "Place it above Add to cart",
      body: [
        "The new block lands at the top of the section’s block list. Drag it down so it sits just above the buy buttons. The block has no button of its own: it switches your theme’s own **Add to cart** and **Buy it now** to buy through the Pre-order option, so shoppers read the terms before they press them.",
        "In the editor the block shows a sample, so you can see where it lands even on an in-stock product.",
      ],
      shot: {
        src: "/guide/add-preorder-block/03-placed.jpg",
        width: 1470,
        height: 757,
        alt: "The theme editor just after adding the Pre-order block: it is selected at the top of the block list, its settings say to place it above Add to cart, and the preview shows its sample Pre-order badge, pay-in-full line, cancel terms and message.",
        frame: "admin",
        highlights: [
          { x: 1.6, y: 16.4, w: 17.6, h: 5.0, label: "The new block, at the top of the list" },
          { x: 72.5, y: 21.5, w: 23.4, h: 32.9, label: "Its sample in the preview" },
          { x: 0.0, y: 52.9, w: 20.5, h: 12.4, label: "Where the block belongs" },
        ],
      },
    },
    {
      title: "Save the theme",
      body: [
        "Select **Save** in the theme editor. Waitly checks your live theme, so the block must be on the published theme for the warning to clear.",
      ],
    },
    {
      title: "Check a sold-out product",
      body: [
        "Open a product your policy covers and pick a sold-out variant. You’ll see the “Pre-order” badge, “Pay in full today. This item ships later.” and “Cancel any time before it ships for a full refund.” On Growth, your ship estimate and message show too.",
        "Pick an in-stock variant and the block hides, so that variant sells as usual.",
      ],
      shot: {
        src: "/guide/add-preorder-block/04-storefront.jpg",
        width: 1908,
        height: 914,
        alt: "A sold-out product page on a Horizon theme store, with Add to cart and Buy it now buttons and the Pre-order block: a Pre-order badge, Pay in full today. Ships around November 2, 2026, Cancel any time before it ships for a full refund, and the message Ships from our next delivery.",
        caption: "This store is on a plan with a ship estimate and message, so both show in the block.",
        frame: "storefront",
        highlights: [
          { x: 4.7, y: 77.9, w: 90.6, h: 19.8, label: "The Pre-order block" },
          { x: 66.6, y: 28.6, w: 28.7, h: 15.1, label: "Your theme’s buttons buy the preorder" },
        ],
      },
      aside: {
        kind: "warning",
        text: "Without the block, covered products still sell at zero stock, but as ordinary orders: not held, not tagged and not counted as preorders.",
      },
    },
  ],
  faqs: [
    {
      q: "Waitly says my theme can’t show the Pre-order block. What now?",
      a: "That template isn’t a JSON template, so it can’t hold app blocks. Use an Online Store 2.0 theme, such as Dawn or Horizon.",
    },
    {
      q: "Why does a collection page say “Choose” instead of “Add to cart”?",
      a: "On Horizon themes, a product with preorder shows “Choose” on collection pages and opens the product page, where the shopper sees the Pre-order terms.",
    },
    {
      q: "Where do I change the block’s text?",
      a: "In Waitly, not the theme editor. The badge and terms are fixed; on Growth you add a message and ship estimate to the policy.",
    },
  ],
  related: ["create-preorder-policy", "preorder-message-and-ship-estimate", "shopper-preorders"],
};
