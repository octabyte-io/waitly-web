import type { GuideArticle } from "../types";

export const article: GuideArticle = {
  slug: "preorder-rules",
  section: "preorders",
  title: "Choose products with rules and exceptions",
  summary:
    "Cover products by tag, product, variant or collection, leave some out, and check exactly what the policy reaches before you save.",
  before: ["You have a preorder policy, or you’re creating one."],
  steps: [
    {
      title: "Open the policy",
      body: [
        "In Waitly, choose **Preorders**, then select the policy’s name. For a new one, select **Create policy**.",
        "Two cards decide the products: **Offer preorder on** (any product or variant that matches one of these) and **Except** (leave out anything that matches one of these, even if it matches above).",
      ],
    },
    {
      title: "Add a tag",
      body: [
        "Under **Offer preorder on**, type a product tag in the tag field and press Enter. Every product with that tag is covered, including ones you tag later.",
        "Tags are a good fit when products come and go, like a “preorder” tag you add in Shopify as new items are announced.",
      ],
      shot: {
        src: "/guide/preorder-rules/01-add-tag.jpg",
        width: 669,
        height: 392,
        alt: "The Offer preorder on card with a tag typed in the tag field, the Add products and Add collections buttons beside it, and a row for the tag “preorder” under two variant rows.",
        frame: "admin",
        highlights: [
          { x: 4.2, y: 23.1, w: 52.3, h: 9.4, label: "Type a tag, press Enter" },
          { x: 4.2, y: 77.0, w: 91.8, h: 14.7, label: "The tag becomes a rule" },
        ],
      },
    },
    {
      title: "Add products, variants or collections",
      body: [
        "Select **Add products** to open Shopify’s product picker. Tick a product to cover all its variants, or tick only the variants you want. Draft and archived products are listed too.",
        "Select **Add collections** to cover every product in a collection.",
        "Each rule gets a row with its name, what it is, and how many variants it reaches. Select ✕ at the end of a row to remove it.",
      ],
      shot: {
        src: "/guide/preorder-rules/02-product-picker.jpg",
        width: 1115,
        height: 567,
        alt: "Shopify’s product picker open over the policy editor, with one product ticked and two of its variants selected.",
        frame: "admin",
        highlights: [
          { x: 20.0, y: 44.7, w: 7.9, h: 12.8, label: "Tick only the variants you want" },
          { x: 65.9, y: 85.8, w: 5.5, h: 6.1, label: "Add them to the policy" },
        ],
      },
    },
    {
      title: "Leave some products out",
      body: [
        "Use **Except** the same way: a tag, **Add products** or **Add collections**. Anything listed here is left out, even if a rule above covers it.",
        "For example, cover a collection and add one of its boards under **Except** to keep it selling normally.",
      ],
      shot: {
        src: "/guide/preorder-rules/03-except.jpg",
        width: 669,
        height: 509,
        alt: "The Except card with The Collection Snowboard: Liquid added as an exception, under an Offer preorder on card holding the Hydrogen collection.",
        frame: "admin",
        highlights: [
          { x: 4.2, y: 34.0, w: 91.8, h: 10.6, label: "The collection is covered" },
          { x: 56.6, y: 67.4, w: 39.3, h: 6.7, label: "Add an exception" },
          { x: 4.2, y: 83.3, w: 91.8, h: 10.6, label: "This product is left out" },
        ],
      },
    },
    {
      title: "Check what the policy covers",
      body: [
        "**Products this policy covers** shows the result as you edit, before you save: a count such as “12 variants in 4 products”, and a list of products with how many of their variants are in and a **View product** link.",
        "If the policy is off, the card says none of these has a Pre-order option yet.",
      ],
      shot: {
        src: "/guide/preorder-rules/04-coverage.jpg",
        width: 669,
        height: 271,
        alt: "The Products this policy covers card with the count 2 variants in 1 product, a note that the policy is off, and the product with its Variants line and a View product link.",
        frame: "admin",
        highlights: [
          { x: 4.2, y: 20.1, w: 22.0, h: 8.9, label: "Variants and products covered" },
          { x: 4.2, y: 50.0, w: 91.8, h: 32.2, label: "How many of its variants are in" },
        ],
      },
    },
    {
      title: "Watch for overlapping policies",
      body: [
        "A variant gets preorder from one policy only: the oldest one that is on and open. If an older policy already offers some of these products, the coverage card shows **Another policy already offers some of these** and names it. Those variants stay with the older policy.",
        "If you turn on an older policy that covers products a newer one offers, the **Status** card warns **Turning this on moves products** before you save.",
      ],
      shot: {
        src: "/guide/preorder-rules/05-overlap.jpg",
        width: 669,
        height: 441,
        alt: "An orange banner in the coverage card reading Another policy already offers some of these, naming the older policy and how many variants it keeps.",
        frame: "admin",
        highlights: [
          { x: 4.2, y: 20.3, w: 91.8, h: 18.4, label: "These stay with the older policy" },
        ],
      },
      aside: {
        kind: "tip",
        text: "Policies are listed oldest first on the Preorders page, so the policy nearer the top wins when two cover the same variant.",
      },
    },
    {
      title: "Save",
      body: [
        "Select **Save** in the bar at the top. Waitly updates the Pre-order option in Shopify, and the **In Shopify** card shows **Up to date** when it’s done.",
      ],
    },
  ],
  faqs: [
    {
      q: "What happens if a product in my rule is deleted in Shopify?",
      a: "Its row stays and shows “Deleted in Shopify — matches nothing”. Waitly never changes your rules behind your back, so remove the row when you’re ready.",
    },
    {
      q: "Is there a limit to how many products a policy can cover?",
      a: "Yes. A rule that covers more than 25,000 products can’t be applied, because Shopify can’t list that many. Narrow the rule, or split it into two policies.",
    },
  ],
  related: ["create-preorder-policy", "preorder-from-product-page", "preorder-timing-and-limits"],
};
