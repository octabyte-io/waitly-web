import type { GuideArticle } from "../types";

export const article: GuideArticle = {
  slug: "shopper-joins-waitlist",
  section: "shoppers",
  title: "Joining a waitlist",
  summary:
    "What your shoppers see when they sign up with Notify me, and the confirmation email they get.",
  before: [
    "The Notify me block is on your product page.",
    "The product has a sold-out variant that tracks inventory.",
  ],
  steps: [
    {
      title: "The shopper picks a sold-out variant",
      body: [
        "The Notify me form appears on the product page only while the chosen variant is sold out: it tracks inventory, has none left, and isn’t set to keep selling when out of stock. By default it’s headed **Out of stock**.",
        "If the shopper switches to a variant that’s in stock, the form hides again. If their choice of options matches no variant, they see “Choose your options to see availability.”",
      ],
      shot: {
        src: "/guide/shopper-joins-waitlist/01-notify-me-form.jpg",
        width: 1455,
        height: 757,
        alt: "The Gift Card product page with the sold-out $25 option selected and the Notify me form under the Sold out and Buy it now buttons: an Out of stock heading, an Email field, a consent checkbox and a Notify me when available button.",
        frame: "storefront",
        highlights: [
          { x: 71.4, y: 34.3, w: 5.8, h: 5.7, label: "A sold-out variant is chosen" },
          { x: 66.1, y: 48.5, w: 31.0, h: 7.4, label: "The theme’s button reads **Sold out**" },
          { x: 66.1, y: 72.7, w: 31.0, h: 26.6, label: "The Notify me form" },
        ],
      },
    },
    {
      title: "The shopper enters their email and agrees",
      body: [
        "They type their address in **Email** and tick **Email me once when this is back in stock.** The form won’t send without the tick, because it’s the shopper’s consent to be emailed.",
        "Then they select **Notify me when available**.",
      ],
      shot: {
        src: "/guide/shopper-joins-waitlist/02-form-filled.jpg",
        width: 530,
        height: 657,
        alt: "The Notify me form on the product page, with shopper@example.com typed in the Email field and the consent box ticked, above the Notify me when available button.",
        frame: "storefront",
        highlights: [
          { x: 8.1, y: 79.0, w: 83.1, h: 7.6, label: "The shopper’s address in **Email**" },
          { x: 8.1, y: 86.2, w: 67.0, h: 5.6, label: "The consent tick" },
          { x: 8.1, y: 91.3, w: 83.1, h: 7.7, label: "**Notify me when available**" },
        ],
      },
    },
    {
      title: "The shopper sees they’re on the list",
      body: [
        "The form is replaced by “You are on the list. We will email you once this is back.”",
        "If the address doesn’t look right, the form asks them to check it. If many signups come from the same place at once, it asks them to try again shortly.",
      ],
      shot: {
        src: "/guide/shopper-joins-waitlist/03-success.jpg",
        width: 530,
        height: 448,
        alt: "The Gift Card product page after signing up: the Notify me form is gone and in its place is the message You are on the list. We will email you once this is back.",
        frame: "storefront",
        highlights: [
          { x: 6.9, y: 81.5, w: 82.9, h: 7.4, label: "The message that replaces the form" },
        ],
      },
      aside: {
        kind: "tip",
        text: "You can change every word on the form, including the success message, in the block’s settings in the theme editor.",
      },
    },
    {
      title: "The shopper gets a confirmation email",
      body: [
        "Waitly emails the shopper straight away. The subject is “You are on the list for” and the item, and the email says your shop will email them as soon as it’s available again.",
        "It ends with “Joining the list does not hold one for you, so it is first come, first served when the email arrives.” There’s no Buy button, because the item is still sold out.",
      ],
      shot: {
        src: "/guide/shopper-joins-waitlist/04-confirmation-email.jpg",
        width: 608,
        height: 434,
        alt: "The waitlist confirmation email, headed You are on the list, naming the item, with the first come, first served line and an unsubscribe footer.",
        frame: "email",
        highlights: [
          { x: 8.6, y: 13.2, w: 82.8, h: 6.5, label: "The heading, **You are on the list**" },
          { x: 8.6, y: 36.5, w: 82.8, h: 12.3, label: "First come, first served" },
          { x: 8.6, y: 70.8, w: 41.2, h: 4.4, label: "The link to stop alerts" },
        ],
      },
      aside: {
        kind: "note",
        text: "On Growth and Pro you can write your own subject, heading and message for this email.",
      },
    },
    {
      title: "On Pro, the shopper learns their place in line",
      body: [
        "If your store is on Pro and you’ve ticked **And tell each shopper their place in the line, in the email confirming they joined.** under **Waitlist priority** in Settings, the confirmation adds a line such as “Right now you are number 7 in line for this one.”",
      ],
      shot: {
        src: "/guide/shopper-joins-waitlist/05-place-in-line.jpg",
        width: 608,
        height: 472,
        alt: "The confirmation email with the line Right now you are number 7 in line for this one.",
        frame: "email",
        highlights: [
          { x: 8.6, y: 33.5, w: 43.1, h: 6.3, label: "The shopper’s place in line" },
        ],
      },
    },
    {
      title: "The shopper appears on your waitlist",
      body: [
        "In Waitly, the shopper now shows on the product’s waitlist as **Waiting**. They’ll get a restock alert when the variant comes back.",
      ],
      shot: {
        src: "/guide/shopper-joins-waitlist/06-on-waitlist.jpg",
        width: 1016,
        height: 208,
        alt: "The Shoppers card on the Gift Card - $25 waitlist in Waitly, with one row: shopper@example.com, status Waiting, the time they joined and 0 alerts.",
        frame: "admin",
        highlights: [
          { x: 2.6, y: 79.7, w: 94.7, h: 16.6, label: "The new signup, **Waiting**" },
        ],
      },
    },
  ],
  faqs: [
    {
      q: "What if a shopper signs up twice for the same item?",
      a: "They stay on the waitlist once, with their first place in line. The form still tells them they’re on the list.",
    },
    {
      q: "Do confirmation emails use up my restock alerts?",
      a: "No. Confirmations have their own, much larger safety cap and never touch your restock alerts.",
    },
  ],
  related: ["add-notify-me-block", "customize-notify-me-block", "shopper-restock-alert"],
};
