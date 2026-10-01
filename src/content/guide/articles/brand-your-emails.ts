import type { GuideArticle } from "../types";

export const article: GuideArticle = {
  slug: "brand-your-emails",
  section: "emails-settings",
  title: "Add your logo and color to emails",
  summary:
    "Set the sender name and reply-to address, and put your logo and brand color on every email Waitly sends for you.",
  before: ["Waitly is installed. Logo and brand color are on every plan, Free included."],
  steps: [
    {
      title: "Open Settings",
      body: [
        "In Waitly, choose **Settings** in the menu on the left of your Shopify admin.",
        "The email settings sit in two groups: **Emails to your shoppers** holds who the emails come from, and **Email branding** holds how they look.",
      ],
    },
    {
      title: "Set the sender name and reply-to address",
      body: [
        "**Sender name** is the name shoppers see as the sender of every Waitly email. It starts as your shop name.",
        "**Reply-to address** is where a shopper’s reply goes. It starts as your Shopify contact address. Both fields are required.",
      ],
      shot: {
        src: "/guide/brand-your-emails/01-sender.jpg",
        width: 1015,
        height: 248,
        alt: "The Emails to your shoppers group in Waitly Settings, with the Sender name and Reply-to address fields.",
        frame: "admin",
        highlights: [
          { x: 36.4, y: 16.3, w: 60.2, h: 31.0, label: "The name shoppers see" },
          { x: 36.4, y: 53.4, w: 60.2, h: 31.0, label: "Where replies go" },
        ],
      },
    },
    {
      title: "Add your logo",
      body: [
        "Under **Email branding**, paste a link to your logo image into **Logo**. The link must start with https://.",
        "To get one, open **Content** and then **Files** in your Shopify admin, upload your logo if it isn’t there yet, and copy its link.",
        "The logo shows at the top of each email. If a shopper’s mail app blocks images, they see your shop’s name in its place.",
      ],
      shot: {
        src: "/guide/brand-your-emails/02-branding.jpg",
        width: 1015,
        height: 280,
        alt: "The Email branding group in Waitly Settings, with a Logo link filled in and a Brand color picker.",
        frame: "admin",
        highlights: [
          { x: 36.4, y: 14.4, w: 60.2, h: 33.3, label: "Paste your logo’s link" },
          { x: 36.4, y: 53.0, w: 60.2, h: 33.3, label: "Pick a color or type a hex code" },
        ],
      },
      aside: {
        kind: "note",
        text: "Waitly doesn’t upload images itself, so the logo field takes a link. A link that starts with http:// is refused, because many mail apps block those images.",
      },
    },
    {
      title: "Pick your brand color",
      body: [
        "Choose a color in **Brand color**, or type a hex code such as #1f6feb. Waitly uses it for the bar across the top of each email and for the button.",
        "The button’s text turns white or black on its own, so it stays readable on any color. Body text and the unsubscribe footer keep their usual colors.",
      ],
    },
    {
      title: "Save your changes",
      body: [
        "Select **Save** in the bar at the top of the page. Waitly shows **Settings saved** when it’s done.",
        "Select **Discard** instead to put every field back as it was.",
      ],
      shot: {
        src: "/guide/brand-your-emails/03-save-bar.jpg",
        width: 1470,
        height: 757,
        alt: "The Shopify admin with Waitly Settings open and the unsaved-changes bar at the top, showing Discard and Save.",
        frame: "admin",
        highlights: [
          { x: 68.1, y: 1.2, w: 3.6, h: 4.9, label: "Save your changes" },
          { x: 63.5, y: 1.2, w: 4.5, h: 4.9, label: "Or put everything back" },
        ],
      },
    },
    {
      title: "See what shoppers get",
      body: [
        "Your sender name, logo and color reach every email Waitly sends for you: the waitlist confirmation, back-in-stock and launch alerts, the vote confirmation, the preorder receipt and delay notices.",
        "On the Free plan each email ends with a small “Sent with Waitly” line. Growth and Pro remove it.",
      ],
      shot: {
        src: "/guide/brand-your-emails/04-branded-email.jpg",
        width: 608,
        height: 540,
        alt: "A back-in-stock email from Northpeak Boards on the Free plan, with a bar in the brand color across the top, a Buy it now button in the same color and a small Sent with Waitly line at the end.",
        frame: "email",
        highlights: [
          { x: 3.3, y: 3.5, w: 93.3, h: 2.7, label: "Bar in your brand color" },
          { x: 8.6, y: 33.7, w: 19.1, h: 9.0, label: "Button in your brand color" },
          { x: 8.6, y: 85.0, w: 14.0, h: 4.9, label: "Only on the Free plan" },
        ],
      },
    },
  ],
  faqs: [
    {
      q: "Can I change the words in the emails too?",
      a: "On Growth and Pro you can write your own subject, heading, message and button label for the alerts and the waitlist confirmation. Preorder and vote emails always use Waitly’s wording.",
    },
    {
      q: "Why doesn’t the unsubscribe link use my brand color?",
      a: "The footer keeps fixed colors on purpose, so a shopper can always read the way out, whatever color you choose.",
    },
  ],
  related: ["customize-email-text", "shopper-restock-alert", "choose-a-plan"],
};
