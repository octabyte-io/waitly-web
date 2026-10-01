import type { GuideArticle } from "../types";

export const article: GuideArticle = {
  slug: "change-ship-date",
  section: "preorders",
  title: "Change a ship date and notify shoppers",
  summary:
    "Move a policy’s ship estimate later, see who will be told before you save, and let Waitly send the delay notices.",
  level: "growth",
  before: [
    "You’re on the Growth or Pro plan.",
    "The policy has a ship estimate and has taken preorders.",
  ],
  steps: [
    {
      title: "Open the ship estimate",
      body: [
        "In Waitly, choose **Preorders**, select the policy, and scroll to **Ship estimate** in the **What shoppers see** card.",
      ],
    },
    {
      title: "Enter the new estimate",
      body: [
        "Change the date, the range, or the time after the order. You can also switch to another kind of estimate, or to **None**.",
        "Only a later date is news. Moving the estimate earlier, or to the same day, tells no one.",
      ],
      shot: {
        src: "/guide/change-ship-date/01-new-estimate.jpg",
        width: 670,
        height: 325,
        alt: "The Message box, the Ship estimate menu set to A date, and the Ships around field changed to December 20, 2026.",
        frame: "admin",
        highlights: [
          { x: 4.2, y: 51.1, w: 91.6, h: 17.5, label: "The kind of estimate" },
          { x: 4.2, y: 73.2, w: 91.6, h: 17.5, label: "Enter the later date" },
        ],
      },
    },
    {
      title: "Read the banner before you save",
      body: [
        "A moment after you stop typing, a banner at the top of the editor says what saving will do, for example **Saving tells 12 shoppers their preorder is delayed**.",
        "Under it, Waitly counts who gets a delay notice, who must agree to wait, anyone whose order has partly shipped, and who was already promised this day or later and hears nothing. The banner turns red when some shoppers must agree to wait.",
      ],
      shot: {
        src: "/guide/change-ship-date/02-save-effect.jpg",
        width: 1014,
        height: 332,
        alt: "A red banner at the top of the policy editor reading Saving tells 11 shoppers their preorder is delayed. Under it: 11 shoppers get a Delay notice, 10 are more than 30 days late and have at least 7 days to keep their preorder, 1 has part of the order shipped, and notices go 30 minutes after your last save.",
        frame: "admin",
        highlights: [
          { x: 1.8, y: 6.6, w: 64.1, h: 14.5, label: "What saving will do" },
          { x: 1.8, y: 22.6, w: 64.1, h: 33.1, label: "Who is told, and who must agree" },
        ],
      },
      aside: {
        kind: "note",
        text: "The banner only informs. Saving is never blocked, and nothing is sent until you save.",
      },
    },
    {
      title: "Save",
      body: [
        "Select **Save** in the bar at the top. Notices go 30 minutes after your last save. Saving again within that time restarts the wait, so if you fix a typo or change your mind, shoppers get one notice with the final date, or none if you moved it back.",
      ],
    },
    {
      title: "Know what shoppers receive",
      body: [
        "Each order gets one **Delay notice** email. It shows each preordered product with **You were told** and **Now**, the cancel terms, and a button to the page where they can keep or cancel. If the estimate was removed, it says “The store has no new date yet”.",
        "Most shoppers read “You do not need to do anything to keep it.”",
      ],
      shot: {
        src: "/guide/change-ship-date/03-delay-notice.jpg",
        width: 608,
        height: 570,
        alt: "The Delay notice email headed Your preorder will ship later, with a product card showing No action needed, You were told around Nov 14, 2026 and Now around Nov 28, 2026, the cancel terms, and a Keep or cancel your preorder button.",
        frame: "email",
        highlights: [
          { x: 11.4, y: 36.8, w: 77.8, h: 8.7, label: "The old and new estimate" },
          { x: 11.4, y: 46.4, w: 43.3, h: 4.5, label: "Nothing to do" },
          { x: 8.6, y: 63.1, w: 38.9, h: 8.6, label: "Opens the keep or cancel page" },
        ],
      },
    },
    {
      title: "Understand the 30-day rule",
      body: [
        "If the new date is more than 30 days after the date the shopper was first promised (or the date they last agreed to), or there’s no date at all, the shopper must agree to wait. Their email’s subject reads “Action needed: keep or cancel your preorder by” a date, at least 7 days after the notice.",
        "A shopper who chooses **Keep my preorder** stays in line. Anyone who doesn’t answer by the deadline is cancelled and refunded in full, automatically.",
        "A preorder that has partly shipped is never refunded automatically. The shopper is asked to contact you instead.",
      ],
      shot: {
        src: "/guide/change-ship-date/04-action-needed.jpg",
        width: 608,
        height: 594,
        alt: "The Action needed version of the Delay notice, with Answer by Oct 8, 2026 on the product card and the line asking the shopper to choose Keep my preorder by that day or be refunded in full.",
        frame: "email",
        highlights: [
          { x: 11.4, y: 29.7, w: 25.2, h: 4.4, label: "The deadline to answer" },
          { x: 11.4, y: 44.5, w: 77.8, h: 8.4, label: "Keep it, or it’s refunded" },
          { x: 8.6, y: 64.6, w: 38.9, h: 8.3, label: "Opens the keep or cancel page" },
        ],
      },
      aside: {
        kind: "warning",
        text: "Auto-refunds can’t be undone. Check the banner’s count of shoppers who must agree before you save a long delay.",
      },
    },
    {
      title: "Follow up in the Preorders view",
      body: [
        "In **Preorders**, switch to the preorders list. Rows show “Delay notice sent” with the date, **Waiting for the shopper** until their deadline, and “Agreed to wait” once they keep it. If Shopify refuses an automatic refund, the row shows **Refund due**: cancel that order in Shopify.",
      ],
      shot: {
        src: "/guide/change-ship-date/05-follow-up.jpg",
        width: 1192,
        height: 526,
        alt: "The Preorders list with a row showing a Waiting for the shopper badge, until Oct 8, and Delay notice sent Sep 30; a row showing Delay notice sent Sep 18 and Agreed to wait; and a row with a Refund due badge.",
        frame: "admin",
        highlights: [
          { x: 68.0, y: 0.4, w: 15.3, h: 5.0, label: "Asked to keep or cancel" },
          { x: 61.8, y: 75.1, w: 13.7, h: 7.9, label: "Told, and agreed to wait" },
          { x: 68.0, y: 84.8, w: 9.4, h: 5.0, label: "Cancel this one in Shopify" },
        ],
      },
    },
  ],
  faqs: [
    {
      q: "What if the ship date passes and I don’t change it?",
      a: "The day after it passes, Waitly sends a late notice to every shopper whose preorder hasn’t shipped, and asks those still waiting to keep or cancel. Set a new estimate to tell them when it ships.",
    },
    {
      q: "Does a shopper who agreed to wait get asked again?",
      a: "Only if you move the date more than 30 days past the one they agreed to. A shopper who agreed to wait with no date isn’t asked again until you name one.",
    },
    {
      q: "Do delay notices count toward my plan’s email limits?",
      a: "No. Preorder emails are about a purchase, so they go out on every plan and reach shoppers who unsubscribed from alerts.",
    },
  ],
  related: ["manage-preorders", "preorder-message-and-ship-estimate", "shopper-cancels-preorder"],
};
