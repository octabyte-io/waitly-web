import type { GuideArticle } from "../types";

export const article: GuideArticle = {
  slug: "preorder-from-product-page",
  section: "preorders",
  title: "Manage preorder from a Shopify product page",
  summary:
    "Add a product or variant to a policy, start a new policy, turn a policy on or off, or take a product out, without leaving the product in Shopify.",
  before: ["Waitly is installed. Preorders are on every plan."],
  steps: [
    {
      title: "Open Pre-order with Waitly",
      body: [
        "In your Shopify admin, open **Products** and select a product. At the top of the page, select **More actions**, then **Pre-order with Waitly**.",
        "To work on one variant only, open that variant’s page and use its **More actions** menu. The window then says “One variant:” and the variant’s name.",
      ],
      shot: {
        src: "/guide/preorder-from-product-page/01-more-actions.jpg",
        width: 1470,
        height: 757,
        alt: "A Shopify product page for The Videographer Snowboard with the More actions menu open and Pre-order with Waitly listed under Duplicate, Archive and Delete product.",
        frame: "admin",
        highlights: [
          { x: 77.2, y: 8.9, w: 9.0, h: 4.9, label: "Select **More actions**" },
          { x: 76.1, y: 25.7, w: 12.8, h: 4.6, label: "Then **Pre-order with Waitly**" },
        ],
      },
      aside: {
        kind: "tip",
        text: "Once a product has a Pre-order option, you can also open the same window from the product’s **Purchase options** card.",
      },
    },
    {
      title: "Add the product to a policy",
      body: [
        "If the product isn’t in a policy yet, the window lists your policies under **Add this product to a policy**, each with an **On** or **Off** badge and its ship estimate.",
        "Select the **Add to** button that names the policy you want. The window confirms it, for example “Added this product to Spring drop’s rule.”",
      ],
      shot: {
        src: "/guide/preorder-from-product-page/02-add-to-policy.jpg",
        width: 668,
        height: 562,
        alt: "The Pre-order with Waitly window for a product in no policy: Add this product to a policy, the policy Winter 2026 pre-order with an On badge and Ships around Nov 16, 2026, an Add to Winter 2026 pre-order button, and a New policy button. A warning above says the Pre-order block isn’t on the product template yet.",
        frame: "admin",
        highlights: [
          { x: 5.4, y: 48.7, w: 29.5, h: 9.6, label: "A policy, its state and ship estimate" },
          { x: 5.4, y: 58.7, w: 30.4, h: 6.2, label: "Add this product to it" },
          { x: 5.4, y: 66.5, w: 14.4, h: 6.2, label: "Or start a new policy" },
        ],
      },
    },
    {
      title: "Or start a new policy",
      body: [
        "Select **New policy**, type a **Name**, and on Growth or Pro pick a date in **Ships on (optional)**. Select **Create**.",
        "The new policy holds just this product and starts off. Select the **Turn on** button that names the policy when you’re ready to sell.",
      ],
      shot: {
        src: "/guide/preorder-from-product-page/03-new-policy.jpg",
        width: 668,
        height: 642,
        alt: "The New policy form in the window, with a Name field, a Ships on (optional) date field, the line The new policy starts off, and Create and Cancel buttons.",
        frame: "admin",
        highlights: [
          { x: 5.4, y: 42.7, w: 89.2, h: 9.8, label: "Name the policy" },
          { x: 5.4, y: 53.9, w: 89.2, h: 9.8, label: "Ship date, on Growth or Pro" },
          { x: 5.4, y: 70.6, w: 10.5, h: 5.6, label: "Create it" },
        ],
      },
    },
    {
      title: "See how a product in a policy is doing",
      body: [
        "For a product already in a policy, the window shows the policy’s name with **On** or **Off**, its ship estimate, and a line for each variant, such as **Offered**, **Offered when it sells out**, **Paused — limit reached** or **Covered — policy is off**.",
      ],
      shot: {
        src: "/guide/preorder-from-product-page/04-in-a-policy.jpg",
        width: 668,
        height: 670,
        alt: "The window for a product in a policy: Winter 2026 pre-order with an On badge, Ships around Nov 16, 2026, three variants each marked Offered, and the buttons Turn off Winter 2026 pre-order, Remove this product from policy and Open Winter 2026 pre-order in Waitly.",
        frame: "admin",
        highlights: [
          { x: 5.4, y: 35.4, w: 29.2, h: 4.2, label: "The policy, on or off" },
          { x: 5.4, y: 46.1, w: 37.7, h: 12.5, label: "Each variant’s state" },
          { x: 5.4, y: 59.7, w: 37.7, h: 17.6, label: "Turn off, remove or open" },
        ],
      },
    },
    {
      title: "Turn the policy on or off, or remove the product",
      body: [
        "Select **Turn on** or **Turn off** with the policy’s name to switch the whole policy.",
        "Select **Remove this product from policy** to take just this product out. If a collection or tag in the policy still covers it, Waitly adds an exception for it instead, so the rest of the collection stays in.",
        "Select **Open** with the policy’s name and **in Waitly** to edit everything else in the policy editor. Select **Done** to close the window.",
      ],
      aside: {
        kind: "warning",
        text: "**Turn off** stops preorder on every product in the policy, not just this one. To stop only this product, remove it.",
      },
    },
  ],
  faqs: [
    {
      q: "Can I use the Purchase options card’s own buttons instead?",
      a: "No. Waitly undoes changes made with the card’s own buttons, because the policy decides which products get preorder. Use Pre-order with Waitly, or the policy editor.",
    },
    {
      q: "Why doesn’t the window let me set a ship date?",
      a: "Ship estimates are on Growth and Pro. On Free, the New policy form asks only for a name.",
    },
  ],
  related: ["create-preorder-policy", "preorder-rules", "turn-off-or-delete-policy"],
};
