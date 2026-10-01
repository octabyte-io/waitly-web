import type { GuideArticle } from "../types";

export const article: GuideArticle = {
  slug: "turn-off-or-delete-policy",
  section: "preorders",
  title: "Turn off or delete a policy",
  summary:
    "Stop taking preorders on a policy’s products, either by turning it off to use again later or by deleting it for good.",
  before: ["You have a preorder policy."],
  steps: [
    {
      title: "Open the policy",
      body: [
        "In Waitly, choose **Preorders**, then select the policy’s name.",
        "Decide which you need. Turning a policy off keeps all its settings, so you can turn it back on. Deleting it can’t be undone.",
      ],
    },
    {
      title: "Turn it off",
      body: [
        "In the **Status** card, turn off **Offer preorder**. The line under it changes to “Off keeps the policy and takes the Pre-order option off its products.”",
        "Select **Save** in the bar at the top. Waitly takes the Pre-order option off the products in Shopify, and puts back the “continue selling when out of stock” setting it changed on them.",
      ],
      shot: {
        src: "/guide/turn-off-or-delete-policy/01-switch-off.jpg",
        width: 1216,
        height: 370,
        alt: "The policy editor with the Offer preorder switch turned off in the Status card, the line “Off keeps the policy and takes the Pre-order option off its products.”, and Discard and Save in the bar at the top.",
        frame: "admin",
        highlights: [
          { x: 64.8, y: 49.4, w: 24.0, h: 16.3, label: "Turn off **Offer preorder**" },
          { x: 62.2, y: 3.5, w: 5.0, h: 8.2, label: "Then select **Save**" },
        ],
      },
    },
    {
      title: "Check the policy list",
      body: [
        "Back on **Preorders**, the policy’s **Status** reads **Off**, and **Preorder on** reads “Nothing while off” with what it would cover when on. **In Shopify** shows **Up to date** once Shopify has caught up.",
        "To start again, open the policy, turn **Offer preorder** back on, and save.",
      ],
      aside: {
        kind: "tip",
        text: "You can also turn a policy on or off from any of its products in Shopify, with **More actions** and **Pre-order with Waitly**.",
      },
    },
    {
      title: "Or delete it",
      body: [
        "At the bottom of the policy editor, select **Delete policy**. A window asks you to confirm: Waitly removes the Pre-order option from the policy’s products in your Shopify admin, and you can’t undo this.",
        "Select **Delete policy** to confirm, or **Cancel** to keep it. Waitly takes you back to the Preorders page.",
      ],
      shot: {
        src: "/guide/turn-off-or-delete-policy/03-delete-modal.jpg",
        width: 1216,
        height: 505,
        alt: "The Delete Winter 2026 pre-order? window saying Waitly removes the Pre-order option from 1 product in your Shopify admin and that you can’t undo this, with Cancel and Delete policy buttons.",
        frame: "admin",
        highlights: [
          { x: 54.1, y: 91.7, w: 9.3, h: 6.3, label: "Select **Delete policy**" },
          { x: 55.6, y: 48.7, w: 9.3, h: 6.3, label: "Confirm" },
          { x: 49.6, y: 48.7, w: 6.5, h: 6.3, label: "Or keep the policy" },
        ],
      },
      aside: {
        kind: "warning",
        text: "A deleted policy can’t be restored. To stop preorder but keep the policy’s products, dates and wording, turn it off instead.",
      },
    },
    {
      title: "Look after the preorders you already took",
      body: [
        "Turning off or deleting a policy stops new preorders only. Orders already placed stay in Shopify, held until you release them, and stay in the **Preorders** view with their status.",
        "Ship them, or cancel and refund them, in Shopify as usual. Shoppers can still cancel their own preorder before it ships.",
      ],
    },
  ],
  faqs: [
    {
      q: "What if I uninstall Waitly instead?",
      a: "Shopify removes Waitly’s Pre-order options within 48 hours. Any variant Waitly had set to keep selling when out of stock stays that way, so check those variants in Shopify.",
    },
    {
      q: "Can I stop preorder on just one product?",
      a: "Yes. Add it under Except in the policy, or open it in Shopify and use Remove this product from policy in Pre-order with Waitly.",
    },
  ],
  related: ["manage-preorders", "preorder-from-product-page", "create-preorder-policy"],
};
