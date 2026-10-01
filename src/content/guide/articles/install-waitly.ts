import type { GuideArticle } from "../types";

export const article: GuideArticle = {
  slug: "install-waitly",
  section: "getting-started",
  title: "Install Waitly",
  summary: "Install Waitly from the Shopify App Store, approve its permissions and open it in your Shopify admin.",
  before: [
    "A Shopify store with an Online Store 2.0 theme, such as Dawn or any theme from the Shopify Theme Store.",
    "You’re the store owner, or a staff member allowed to install apps.",
  ],
  steps: [
    {
      title: "Find Waitly in the Shopify App Store",
      body: [
        "Open the Shopify App Store and search for **Waitly**. Open the Waitly listing to see what it does, its plans and its reviews.",
      ],
    },
    {
      title: "Select Install",
      body: [
        "Select **Install** on the listing. If you’re signed in to more than one store, Shopify asks which store to install Waitly on.",
      ],
    },
    {
      title: "Approve the permissions",
      body: [
        "Shopify shows what Waitly will be able to see and change in your store. Waitly reads your products and inventory to know when something comes back in stock, your orders to see who bought after an alert and to run preorders, and your themes to check that its block is on your product page.",
        "Select **Install** to approve them.",
      ],
      shot: {
        src: "/guide/install-waitly/02-permissions.jpg",
        width: 1040,
        height: 725,
        alt: "Shopify’s Install app screen for Waitly by OctaByte. Under This app needs access to, it lists View customer data, View staff and contributor data, and View and edit store data, with Cancel and Install buttons below.",
        caption: "Select a row to see everything it includes.",
        frame: "admin",
        highlights: [
          { x: 19.8, y: 49.7, w: 60.4, h: 34.1, label: "What Waitly can see and change" },
          { x: 74.8, y: 88.8, w: 7.6, h: 5.5, label: "Select **Install**" },
        ],
      },
      aside: {
        kind: "note",
        text: "A few features ask for one more permission when you first turn them on. For example, **Reserve for the first shoppers** on Pro needs permission to create draft orders, and Waitly asks for it on the Settings page.",
      },
    },
    {
      title: "Start on Home",
      body: [
        "Waitly opens inside your Shopify admin on **Home**. The **Setup guide** at the top has two steps: add the Notify me block to your product page, and test it on a sold-out product.",
        "Below it you’ll see **Shoppers waiting** and **Live waitlists**, which read zero until your first shopper signs up. **Recovered revenue** is a Growth figure, so on Free it shows **Growth** with an **Upgrade to Growth** link.",
      ],
      shot: {
        src: "/guide/install-waitly/03-home.jpg",
        width: 1016,
        height: 578,
        alt: "Waitly’s Home page on a new store: the Setup guide at 0 of 2 steps completed, with the steps Add the Notify me block to your product page and Test the button on a sold-out product, then Shoppers waiting 0, Live waitlists 0 and Recovered revenue with a Growth badge.",
        frame: "admin",
        highlights: [
          { x: 2.5, y: 3.8, w: 95.1, h: 72.0, label: "The **Setup guide** and its two steps" },
          { x: 67.1, y: 81.3, w: 29.4, h: 14.0, label: "A Growth figure" },
        ],
      },
    },
    {
      title: "Check your plan",
      body: [
        "Every new store starts on the Free plan, so nothing is charged. Free includes the Notify me button, restock alerts, preorders and the send log, with a monthly allowance of 100 restock alerts and 20 preorders.",
        "To see or change your plan, open **Billing** in the Waitly menu. **Your plan** shows the plan you’re on, and **Change plan** opens Shopify’s plan page, where Growth and Pro are billed through your Shopify invoice.",
      ],
      shot: {
        src: "/guide/install-waitly/04-billing.jpg",
        width: 1000,
        height: 420,
        alt: "The Billing page, with the Your plan card and the Change plan button.",
        frame: "admin",
        highlights: [
          { x: 17.9, y: 4.6, w: 64.1, h: 39.3, label: "The plan you’re on" },
          { x: 19.5, y: 32.3, w: 10.8, h: 7.9, label: "Change plan" },
        ],
      },
    },
  ],
  faqs: [
    {
      q: "Does installing Waitly change my theme files?",
      a: "No. Waitly adds its button as a theme app block, which you place in the theme editor. Nothing is pasted into your theme’s code, and uninstalling leaves your theme as it was.",
    },
    {
      q: "What happens to my data if I uninstall?",
      a: "Your store’s Waitly data is erased 48 hours after you uninstall. If you reinstall within those 48 hours, it’s all still there.",
    },
  ],
  related: ["find-your-way-around", "add-notify-me-block", "choose-a-plan"],
};
