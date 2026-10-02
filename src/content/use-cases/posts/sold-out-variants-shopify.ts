import type { UseCasePost } from "../types";

export const post: UseCasePost = {
  slug: "sold-out-variants-shopify",
  title: "Should you hide sold-out sizes on Shopify, or let shoppers ask for them?",
  metaTitle: "Hide sold-out variants on Shopify, or show them?",
  description:
    "When to hide a sold-out size or color on Shopify, when to show it crossed out, how to do either without an app, and how to take signups for that size.",
  cardHeadline: "Hide sold-out sizes on Shopify, or let shoppers ask for them?",
  summary:
    "Hide a sold-out variant when it isn’t coming back, and show it crossed out when it is. Here’s how to do either in your theme, and how a visible sold-out size can collect the demand for it.",
  cover: "sold-out-notify-me",
  published: "2026-10-02",
  answer: [
    "Hide a sold-out size or color when it isn’t coming back. Show it crossed out or greyed when it restocks, so the shopper can see that it exists and that it’s gone for now. Shopify’s Dawn theme already does the second with its pill picker. Hiding takes a deleted variant or a small theme edit.",
    "A size you keep visible can do one more thing: let the shopper ask for it. Then you know how many people wanted the medium, and they hear from you when it’s back.",
  ],
  sections: [
    {
      id: "sold-out-or-unavailable",
      heading: "“Sold out” and “Unavailable” on a Shopify product page",
      voice: "neutral",
      blocks: [
        "They aren’t the same thing. In Dawn, Shopify’s free theme, [the buy button reads **Sold out**](https://github.com/Shopify/dawn/blob/main/snippets/buy-buttons.liquid) when the variant the shopper picked exists but can’t be bought. It reads **Unavailable** when the options they picked don’t match any variant, for example a color you never made in that size.",
        "A variant can’t be bought when it tracks inventory, has none left, and **Continue selling when out of stock** is off. Shopify’s help page on [selling when out of stock](https://help.shopify.com/en/manual/products/inventory/setup/selling-when-out-of-stock) covers that setting.",
        "The variant picker marks options too. With the picker’s **Style** set to **Pills**, Dawn [fades an option and puts a line through it](https://github.com/Shopify/dawn/blob/main/assets/component-product-variant-picker.css) when nothing can be bought with it. The shopper can still select it. With **Dropdown**, the same option reads “M - Unavailable”, even when the variant exists and is only sold out.",
        "If your product has two options, such as color and size, each size is marked for the color already chosen. Shopify’s Liquid reference describes [how an option value counts as available](https://shopify.dev/docs/api/liquid/objects/product_option_value). Other themes use their own wording and styles, so check yours on a product with one variant at zero.",
      ],
    },
    {
      id: "hide-or-grey-out",
      heading: "Hide sold-out variants, grey them out, or leave them",
      voice: "neutral",
      blocks: [
        "The question to ask is whether that variant is coming back.",
        {
          type: "table",
          caption: "Four ways to show a sold-out variant on a Shopify product page",
          head: ["Option", "What the shopper sees", "Your work", "Fits when"],
          rows: [
            [
              "Delete the variant",
              "The size or color is gone from the page.",
              "A few clicks in the Shopify admin.",
              "It’s discontinued and you won’t sell it again.",
            ],
            [
              "Hide it with theme code",
              "The option isn’t shown while it’s sold out, and returns when it’s restocked.",
              "A CSS or Liquid edit, checked again after each theme update.",
              "It may return, but not soon, and a row of crossed-out options makes the product look picked over.",
            ],
            [
              "Show it crossed out or greyed",
              "The option is there, marked as sold out.",
              "Often none. Dawn’s pill picker does this already.",
              "It restocks, and you want shoppers to know the size exists.",
            ],
            [
              "Show it and take signups",
              "The option is there, with a way to ask for an email when it’s back.",
              "A form you run by hand, or an app.",
              "It restocks, and you want to know how many people are waiting for it.",
            ],
          ],
        },
        "You can mix these across your catalog. Delete last season’s color, and keep this season’s sold-out sizes on show.",
      ],
    },
    {
      id: "without-an-app",
      heading: "How to hide or grey out sold-out variants without an app",
      voice: "neutral",
      blocks: [
        {
          type: "list",
          items: [
            "**Check your theme first.** Open the theme editor, go to a product page and select the variant picker block. In Dawn its only display setting is **Style**: **Dropdown** or **Pills**. Pills already cross out sold-out options. If your theme has its own setting for sold-out options, use that before you touch code, because a setting survives theme updates.",
            "**To remove a variant for good, delete it.** In the Shopify admin, open the product, select the variant and choose **Delete variant**. Shopify’s help page on [editing variants](https://help.shopify.com/en/manual/products/variants/edit-variants) has the steps. It also says that if you want to keep the variant for its history, or sell it again later, you can manage its publishing instead of deleting it.",
            "**To hide sold-out pills, use CSS.** Dawn gives a sold-out pill’s input the class “disabled”. A rule in the theme’s base.css file that sets the label after that input to display: none hides it. In [this Shopify Community thread](https://community.shopify.com/t/hide-variants-that-has-0-stock/307639) a merchant on the Studio theme confirmed that it worked, and the rule is there to copy.",
            "**To grey them out differently, use the same selector.** Change the color, the opacity or the line through the text instead of hiding the label.",
            "**For dropdowns, or a cleaner result, edit the Liquid.** In Dawn, [product-variant-options.liquid](https://github.com/Shopify/dawn/blob/main/snippets/product-variant-options.liquid) draws each option and already works out which ones can’t be bought. A developer can leave those out there instead of marking them.",
          ],
        },
        {
          type: "aside",
          kind: "warning",
          text: "Make theme edits on a duplicate of your theme, and test a product with two options. The CSS route only changes what’s displayed. The variant is still in your store, class names differ between themes, and replies in the same thread report trouble with dropdowns.",
        },
      ],
    },
    {
      id: "keep-it-visible",
      heading: "Why a sold-out size is worth keeping visible",
      voice: "neutral",
      blocks: [
        "When you hide the medium, a shopper who wears a medium sees small and large. They can’t tell whether you make their size, and you can’t tell that they came looking for it.",
        "A crossed-out medium answers the first half: the size exists and it’s gone for now. It still doesn’t tell you anything. The shopper leaves, and next time you reorder you’re guessing at the size split.",
        "To get the second half, give that option something to do. Without an app, that’s a form on the product page that asks for an email and the size, and a list you email by hand when the size returns. With an app, the form appears on the sold-out size and the email sends itself.",
      ],
    },
    {
      id: "notify-me-on-the-size",
      heading: "With Waitly: the sold-out size takes signups",
      voice: "waitly",
      blocks: [
        "Waitly adds a **Notify me when available** block to your product page. The form shows only while the variant the shopper has chosen is sold out: it tracks inventory, has none left, and isn’t set to keep selling. When they switch to a size that’s in stock, the form hides again.",
        "The shopper types their email, ticks **Email me once when this is back in stock.** and presses the button. Waitly records that exact variant and sends a confirmation straight away. When you restock that size, the alert goes out without you pressing anything.",
        "The block leaves your variant picker alone. Your theme still decides whether the sold-out size is crossed out, greyed or labelled. The one thing Waitly needs is that the shopper can select it. If the options they pick don’t match any variant, the block shows “Choose your options to see availability.” instead of the form.",
      ],
      figure: {
        scene: "sold-out-notify-me",
        caption: "Size M is sold out and still selectable, so the form appears under the sizes.",
      },
    },
    {
      id: "exact-size-or-any",
      heading: "Shoppers wait for their exact size, or for any variant",
      voice: "waitly",
      blocks: [
        "The block has one setting for this, **What a shopper waits for**, in the theme editor.",
        "**The selected variant** is the default. The shopper waits for the size or color they picked and is emailed only when that one comes back. Someone waiting for a medium doesn’t hear about a restock of the large. Use it when the difference matters, as it does with sizes.",
        "**The whole product** puts the shopper on a waitlist for the product. They’re emailed when any variant goes from sold out to in stock. Use it when any variant will do, like a color they don’t mind.",
        "The form looks the same either way. The two kinds are separate waitlists, and changing the setting only affects new signups. Shoppers already waiting keep what they signed up for.",
      ],
      figure: {
        scene: "variants-waits-for",
        caption: "The setting in the block’s sidebar in the theme editor, on its default.",
      },
    },
    {
      id: "sizes-people-ask-for",
      heading: "See which sizes people are asking for",
      voice: "waitly",
      blocks: [
        "In Waitly, **Waitlists** lists every waitlist, starting with the one that has the most shoppers waiting. Each sold-out variant with signups is its own row with a **Variant** badge. Shoppers waiting for the whole product are a separate row with an **Any variant** badge. A product with three sold-out sizes can show up three times.",
        "Type the product’s name in **Search by product** to see its sizes together. **Waiting** is how many shoppers are still due an alert for that size. That’s the number a hidden option could never give you.",
        "Select a product name to open that waitlist and see each shopper and their status. On the Pro plan the page also shows a Demand Score, the stock level and potential revenue for each row. On Free and Growth those three columns show a dash.",
      ],
      figure: {
        scene: "variants-waitlists",
        caption: "Example figures. One product’s sizes are separate waitlists, with whole-product signups on their own row.",
      },
    },
  ],
  features: ["backInStock"],
  level: "free",
  setup: [
    { guide: "add-notify-me-block" },
    {
      guide: "variant-or-whole-product",
      note: "Leave it on **The selected variant** for sizes.",
    },
    { guide: "customize-notify-me-block", note: "The form’s words, button color and corners." },
    { guide: "shopper-joins-waitlist", note: "What the shopper sees on a sold-out size." },
    { guide: "browse-waitlists" },
    { guide: "see-whos-waiting" },
    { guide: "how-restock-alerts-work", note: "Who is emailed when one size comes back." },
  ],
  limits: [
    "The Notify me block is on product pages only. It doesn’t change collection pages, the “Sold out” badge on product cards, or collection filters.",
    "It doesn’t hide, grey out or restyle your variant picker. How sold-out options look is up to your theme.",
    "The shopper has to be able to select the sold-out variant. If your theme or a code edit hides it or makes it unclickable, the form can’t show for it.",
    "The block needs an Online Store 2.0 theme. It can’t be placed on an older (vintage) theme.",
    "It sends email only, and an alert doesn’t hold a unit. When the size is back it’s first come, first served.",
    "The Free plan sends up to 100 restock alerts each billing cycle. Alerts past that aren’t sent later; those shoppers stay on the list for the next restock.",
  ],
  faqs: [
    {
      q: "What’s the difference between “sold out” and “unavailable” on Shopify?",
      a: "In Dawn, **Sold out** means the variant exists and has no stock to sell. **Unavailable** means the options the shopper picked don’t match a variant at all. Dawn’s dropdown picker blurs the two by labelling any option that can’t be bought as “Unavailable”.",
    },
    {
      q: "Can I hide sold-out products from a collection page?",
      a: "Yes, but that’s a different job from hiding a variant. Shopify’s help page on [hiding out-of-stock products](https://help.shopify.com/en/manual/products/inventory/setup/hide-out-of-stock) uses an automated collection with the condition **Inventory stock** is greater than 0. Waitly doesn’t change collection pages.",
    },
    {
      q: "Why does a product card say “Sold out” when only one size is out?",
      a: "In current Dawn it shouldn’t. [The card’s badge](https://github.com/Shopify/dawn/blob/main/snippets/card-product.liquid) appears only when the product isn’t available, and Shopify counts a product as [available while at least one variant is](https://shopify.dev/docs/api/liquid/objects/product). If yours appears sooner, your theme’s card code is different. That’s a theme fix. Waitly doesn’t touch product cards.",
    },
    {
      q: "Does the Notify me form show on a size I’ve hidden?",
      a: "No. The form shows when the shopper selects a sold-out variant. If they can’t select it, they never see the form. Keep the size visible if you want signups for it.",
    },
    {
      q: "Will the form show if a variant is set to keep selling when out of stock?",
      a: "No. A variant with **Continue selling when out of stock** turned on can still be bought, so it isn’t sold out and the form stays hidden.",
    },
    {
      q: "Can a shopper wait for any size instead of one?",
      a: "Yes, if you set **What a shopper waits for** to **The whole product**. They’re then emailed when any variant comes back. See [Wait for a variant or the whole product](/guide/variant-or-whole-product/).",
    },
  ],
  related: ["back-in-stock-notifications-shopify", "how-much-to-reorder-after-selling-out"],
};
