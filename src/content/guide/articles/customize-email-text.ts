import type { GuideArticle } from "../types";

export const article: GuideArticle = {
  slug: "customize-email-text",
  section: "emails-settings",
  title: "Write your own email text",
  summary:
    "Change the subject, heading, message and button of the back-in-stock alert, the launch alert and the waitlist confirmation.",
  level: "growth",
  before: ["Your store is on the Growth or Pro plan."],
  steps: [
    {
      title: "Open the Email text section",
      body: [
        "In Waitly, choose **Settings** and scroll to **Email text**. It holds three emails: **Back-in-stock alert**, **Launch alert** and **Waitlist confirmation**.",
        "A badge beside each one reads **Using Waitly’s wording**, or **Customized** once you’ve written your own.",
      ],
      shot: {
        src: "/guide/customize-email-text/01-email-text.jpg",
        width: 1015,
        height: 274,
        alt: "The Email text group in Waitly Settings, listing Back-in-stock alert, Launch alert and Waitlist confirmation, each with a badge and an Edit button.",
        frame: "admin",
        highlights: [
          { x: 50.7, y: 19.5, w: 15.8, h: 10.0, label: "Waitly’s wording or **Customized**" },
          { x: 87.9, y: 18.7, w: 7.1, h: 11.4, label: "Open an email’s fields" },
        ],
      },
      aside: {
        kind: "note",
        text: "On the Free plan the button reads **Show** and the fields can’t be changed. Your emails use Waitly’s wording and end with a “Sent with Waitly” line.",
      },
    },
    {
      title: "Open the email you want to change",
      body: [
        "Select **Edit** beside an email to open its fields. The button then reads **Hide**.",
        "**Back-in-stock alert** and **Launch alert** each have **Subject**, **Heading**, **Message** and **Button label**. The **Launch alert** goes instead of the back-in-stock alert to shoppers who joined the waitlist of a product you marked Coming Soon.",
        "**Waitlist confirmation** has **Subject**, **Heading** and **Message**. It has no button, because the item is still sold out when it’s sent.",
      ],
      shot: {
        src: "/guide/customize-email-text/02-alert-fields.jpg",
        width: 1015,
        height: 496,
        alt: "The Back-in-stock alert block opened, with Subject, Heading, Message and Button label fields. Subject, Heading and Button label show Waitly’s wording in gray, with Blue Hoodie as the example item.",
        frame: "admin",
        highlights: [
          { x: 37.4, y: 19.0, w: 58.1, h: 74.6, label: "Type your own words" },
          { x: 87.7, y: 10.1, w: 7.3, h: 6.8, label: "**Hide** closes the fields" },
        ],
      },
    },
    {
      title: "Write your words",
      body: [
        "An empty **Subject**, **Heading** or **Button label** shows Waitly’s own wording in gray. In the two alerts, “Blue Hoodie” stands in for the item’s name. Leave a field empty to keep Waitly’s wording, or type your own.",
        "Type {item} where the item’s name should go, for example “Good news: {item} is back”. It fills in with what the shopper is waiting for, such as “The Complete Snowboard - Powder”.",
        "Your **Message** appears after the line that names the item. Each line you write becomes its own paragraph.",
      ],
      aside: {
        kind: "note",
        text: "Some lines always stay, whatever you write: the line naming the item, the “first come, first served” line, the shopper’s place in line, and the unsubscribe footer. On Pro, an alert that holds a unit for the shopper uses your heading and message, but keeps Waitly’s subject and its **Complete your purchase** button.",
      },
    },
    {
      title: "Save and see the result",
      body: [
        "Select **Save** in the bar at the top of the page. The email’s badge changes to **Customized**, and the next emails go out with your words around Waitly’s fixed lines.",
      ],
      shot: {
        src: "/guide/customize-email-text/03-customized.jpg",
        width: 608,
        height: 576,
        alt: "A back-in-stock email with the merchant’s own heading, “Good news: The Complete Snowboard - Powder is back”, a two-line message and a Get yours button, around Waitly’s fixed lines.",
        frame: "email",
        highlights: [
          { x: 8.6, y: 9.5, w: 79.8, h: 6.1, label: "Your heading, with {item} filled in" },
          { x: 8.6, y: 23.2, w: 51.9, h: 12.0, label: "Your message, one paragraph per line" },
          { x: 8.6, y: 44.7, w: 18.1, h: 8.5, label: "Your button label" },
        ],
      },
    },
    {
      title: "Go back to Waitly’s wording",
      body: [
        "To undo your changes, open the email, clear every field in it and select **Save**. The badge goes back to **Using Waitly’s wording**.",
        "You can also clear just one field. That part goes back to Waitly’s wording and the rest keeps yours.",
      ],
      aside: {
        kind: "tip",
        text: "If you move to the Free plan, Waitly keeps your words but stops using them. They come back if you upgrade again.",
      },
    },
  ],
  faqs: [
    {
      q: "Can I use other placeholders, like my shop name?",
      a: "No. {item} is the only one. Type your shop name as plain text.",
    },
    {
      q: "How long can each field be?",
      a: "Subject up to 150 characters, heading up to 100, message up to 1,000 and button label up to 40. Subject, heading and button label must fit on one line.",
    },
    {
      q: "Can I change the preorder or vote emails?",
      a: "No. The preorder receipt, delay notices and the vote confirmation always use Waitly’s wording. Your logo and brand color still appear on them.",
    },
  ],
  related: ["brand-your-emails", "shopper-restock-alert", "shopper-joins-waitlist"],
};
