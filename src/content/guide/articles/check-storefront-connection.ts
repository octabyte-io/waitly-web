import type { GuideArticle } from "../types";

export const article: GuideArticle = {
  slug: "check-storefront-connection",
  section: "back-in-stock",
  title: "Check the storefront connection",
  summary: "Confirm that the Notify me block can send signups to Waitly, and fix it when Waitly can’t confirm the connection.",
  before: ["Waitly is installed."],
  steps: [
    {
      title: "Open the Widget settings",
      body: [
        "Open Waitly and go to **Settings**. The **Widget** card at the top has a **Storefront connection** line. It shows **Checking…** while Waitly tries to reach your store, then one of three results.",
        "The Notify me block sends each signup through a path on your store, /apps/waitly, which Shopify passes on to Waitly. This check makes sure that path works.",
      ],
      shot: {
        src: "/guide/check-storefront-connection/01-widget.jpg",
        width: 1013,
        height: 234,
        alt: "The Widget card at the top of Waitly Settings, with the Storefront connection line, its status badge and the Open the theme editor button.",
        frame: "admin",
        highlights: [
          { x: 36.1, y: 35.7, w: 26.9, h: 11.0, label: "The connection check" },
        ],
      },
    },
    {
      title: "Connected: nothing to do",
      body: [
        "**Connected** means Waitly reached your store through that path, so the Notify me block can send signups.",
      ],
    },
    {
      title: "Can’t check yet: remove the password when you launch",
      body: [
        "**Can’t check yet** means your storefront password is on. The password page answers every request, so the check can’t get through. Nothing is wrong with your block.",
        "Once you remove the password in your Shopify admin under **Online Store** › **Preferences**, open Waitly’s **Settings** again and the check runs.",
      ],
      shot: {
        src: "/guide/check-storefront-connection/02-cant-check-yet.jpg",
        width: 676,
        height: 105,
        alt: "The Storefront connection line with a Can’t check yet badge, explaining that the storefront password is on.",
        frame: "admin",
        highlights: [
          { x: 26.3, y: 15.6, w: 17.8, h: 23.1, label: "Storefront password is on" },
        ],
      },
    },
    {
      title: "Not confirmed: check the app proxy",
      body: [
        "**Not confirmed** comes with a warning, **Waitly could not confirm the connection to your storefront**. The most likely cause is that the path Waitly uses was renamed.",
        "In your Shopify admin, go to **Settings** › **Apps and sales channels** › **Waitly** and look at **App proxy**. The URL should end in /apps/waitly. If it was changed, set it back.",
      ],
      aside: {
        kind: "warning",
        text: "While the path is renamed, the Notify me block can’t send signups and shoppers see “Something went wrong” when they press the button.",
      },
    },
    {
      title: "Check again",
      body: [
        "The check runs each time you open **Settings**. After a fix, reload the page and look for **Connected**.",
        "If the line doesn’t appear at all, the check itself couldn’t run that time. Reload the page to try again.",
      ],
    },
  ],
  faqs: [
    {
      q: "Does this check whether the block is on my theme?",
      a: "No. It only checks the connection. The setup guide on Home checks that the Notify me block is on your published theme.",
    },
  ],
  related: ["add-notify-me-block", "test-notify-me", "notification-rules"],
};
