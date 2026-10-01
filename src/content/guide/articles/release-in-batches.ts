import type { GuideArticle } from "../types";

export const article: GuideArticle = {
  slug: "release-in-batches",
  section: "restock-release",
  title: "Send restock alerts in batches",
  summary:
    "Alert a few shoppers at a time, in line order, until the item sells out, and follow each batch in the send log.",
  level: "pro",
  before: ["Your store is on the Pro plan."],
  steps: [
    {
      title: "Open Restock release in Settings",
      body: [
        "In Waitly, choose **Settings** and scroll to **Restock release**, just below **Waitlist priority**.",
        "Under **Send restock alerts** you have three choices. **All at once** alerts everyone waiting at the restock. **In batches** alerts a few shoppers at a time, in line order, until the item sells out.",
      ],
      shot: {
        src: "/guide/release-in-batches/01-restock-release.jpg",
        width: 1014,
        height: 265,
        alt: "The Restock release section of Waitly Settings with the three choices under Send restock alerts: All at once, In batches and Reserve for the first shoppers.",
        frame: "admin",
        highlights: [
          { x: 1.8, y: 5.4, w: 11.2, h: 8.4, label: "Scroll to **Restock release**" },
          { x: 36.4, y: 21.7, w: 56.8, h: 53.3, label: "Three ways to send" },
        ],
      },
    },
    {
      title: "Choose In batches and set the pace",
      body: [
        "Select **In batches**. Three fields appear:",
        "**Shoppers per batch** is how many shoppers each batch alerts, between 1 and 1,000. **Time between batches** is how long Waitly waits before the next batch: 15 minutes, 30 minutes, 1 hour or 2 hours. **Most batches** is between 2 and 10. The last batch alerts everyone still waiting.",
      ],
      shot: {
        src: "/guide/release-in-batches/02-batch-fields.jpg",
        width: 679,
        height: 300,
        alt: "In batches selected, with Shoppers per batch set to 10, Time between batches set to 1 hour and Most batches set to 5 in one row.",
        frame: "admin",
        highlights: [
          { x: 5.3, y: 30.1, w: 56.3, h: 14.9, label: "Select **In batches**" },
          { x: 5.3, y: 66.4, w: 89.4, h: 31.2, label: "Set the pace" },
        ],
      },
    },
    {
      title: "Check the preview",
      body: [
        "Below the fields, Waitly plays your settings out on your largest waitlist, under a heading like “If The Complete Snowboard came back now (46 waiting)”. Each row shows a batch, when it goes (**At the restock**, then the time after it, like **+1 hour**) and how many shoppers it alerts. The last row says **everyone left**.",
        "The preview updates as you type, so you can try numbers before you save. If you don’t have a waitlist yet, it shows how a batched restock goes out in words instead.",
      ],
      shot: {
        src: "/guide/release-in-batches/03-timeline-preview.jpg",
        width: 679,
        height: 455,
        alt: "The batch preview headed If The Videographer Snowboard came back now (32 waiting), with Batch, When and Shoppers columns: 10 at the restock, 10 after 1 hour, 10 after 2 hours, and the last batch marked 2 — everyone left.",
        frame: "admin",
        highlights: [
          { x: 5.3, y: 25.3, w: 89.4, h: 50.0, label: "Your settings on your largest waitlist" },
          { x: 73.6, y: 64.5, w: 17.7, h: 5.8, label: "The last batch takes everyone left" },
        ],
      },
      aside: {
        kind: "note",
        text: "Batches stop when the item sells out. Shoppers not yet alerted stay on the waitlist and keep their place for the next restock.",
      },
    },
    {
      title: "Save",
      body: [
        "Select **Save** in the bar at the top of the page. Changes apply from the next restock. A send that’s already going out keeps the settings it started with.",
      ],
    },
    {
      title: "Follow the batches in Analytics",
      body: [
        "When the item comes back, open **Analytics** and scroll to **Restock alerts**. While batches are still going out, the **Status** column shows **Sending** with a line like **Batch 2 of 5 · next at 14:30**. Once the last batch is due, it shows only the batch, like **Batch 4 of 4**.",
        "When the send ends, the status reads **Complete**. **Not sent** counts shoppers the batches never reached because the item sold out or the send ran out of time. They’re still on the waitlist.",
      ],
      shot: {
        src: "/guide/release-in-batches/04-send-log.jpg",
        width: 1192,
        height: 220,
        alt: "The Restock alerts send log in Analytics. The first row, The Videographer Snowboard, has the status Sending with Batch 4 of 4 under it.",
        frame: "admin",
        highlights: [
          { x: 32.8, y: 33.5, w: 13.8, h: 23.9, label: "Which batch the send is on" },
          { x: 58.6, y: 18.0, w: 7.7, h: 10.7, label: "Shoppers no batch reached" },
        ],
      },
    },
  ],
  faqs: [
    {
      q: "Who goes in the first batch?",
      a: "The first shoppers in line. With waitlist priority on, that means your VIPs and other priority shoppers; otherwise it’s the shoppers who joined first.",
    },
    {
      q: "Can a batched send stop before the last batch?",
      a: "Yes. It stops when the item sells out, or when the restock is more than 24 hours old or a newer restock has happened. Anyone it didn’t reach is still waiting and is counted as Not sent.",
    },
    {
      q: "What happens if I move off Pro while batches are running?",
      a: "That send finishes its batches on schedule, and Settings tells you when. Your next restock goes out all at once.",
    },
  ],
  related: ["waitlist-priority", "reserve-units", "restock-alert-log"],
};
