import type { GuideArticle } from "../types";

export const article: GuideArticle = {
  slug: "demand-over-time",
  section: "analytics",
  title: "See demand over time",
  summary:
    "Chart new signups and open demand by day or week, and read the same figures as a table.",
  level: "pro",
  before: ["You’re on the Pro plan.", "Shoppers have been joining your waitlists."],
  steps: [
    {
      title: "Go to Over time on Analytics",
      body: [
        "Select **Analytics** in the Waitly menu and scroll to **Over time**. Two charts sit side by side at the top of the section.",
        "**New signups** is a bar for each day or week, counting shoppers who joined a waitlist. **Open demand** is a line showing how many shoppers were still waiting or still deciding at the end of each day or week.",
      ],
      shot: {
        src: "/guide/demand-over-time/01-charts.jpg",
        width: 1215,
        height: 449,
        alt: "The Over time section on Analytics with the New signups bar chart and the Open demand line chart side by side.",
        frame: "admin",
        highlights: [
          { x: 2.7, y: 24.6, w: 47.3, h: 65.8, label: "Shoppers who joined" },
          { x: 50.1, y: 24.6, w: 47.2, h: 65.8, label: "Shoppers still waiting or deciding" },
        ],
      },
      aside: {
        kind: "note",
        text: "Below Pro, the chart frames and dates show with “Available on Pro” in place of the figures, and there’s no table.",
      },
    },
    {
      title: "Choose a date range",
      body: [
        "Use the date menu next to **Over time**. **Last 7 days** and **Last 30 days** show one bar per day, with today last and still counting. **All time** shows one bar per week, starting on Monday.",
        "**Last 24 hours** is a single point, so no chart is drawn. Choose a longer range to see a trend.",
      ],
      shot: {
        src: "/guide/demand-over-time/02-range.jpg",
        width: 1215,
        height: 449,
        alt: "The Over time section set to Last 30 days, with one bar per day in the New signups chart.",
        frame: "admin",
        highlights: [
          { x: 79.6, y: 5.9, w: 17.7, h: 8.3, label: "Pick the date range" },
          { x: 3.9, y: 34.4, w: 26.3, h: 6.1, label: "One bar per day or week" },
        ],
      },
    },
    {
      title: "Read a day or week",
      body: [
        "Under each chart, a line shows the latest figure. Point at a bar, or select the chart and use the arrow keys, to read any other day or week.",
        "Days follow your store’s time zone. If Waitly can’t read it from Shopify, a note under the charts says the days are in UTC.",
      ],
      shot: {
        src: "/guide/demand-over-time/03-hover.jpg",
        width: 1215,
        height: 449,
        alt: "The New signups chart with the pointer on one bar and its day and count, Sep 25: 19 new signups, shown under the chart.",
        frame: "admin",
        highlights: [
          { x: 38.0, y: 44.3, w: 1.4, h: 32.7, label: "Point at a bar" },
          { x: 3.9, y: 80.9, w: 13.6, h: 5.9, label: "Its day and count" },
        ],
      },
    },
    {
      title: "View the figures as a table",
      body: [
        "Select **View as table** under the charts. The table lists every **Day** (or **Week**) with its **New signups** and **Open demand**.",
        "Select **Hide table** to close it.",
      ],
      shot: {
        src: "/guide/demand-over-time/04-table.jpg",
        width: 1215,
        height: 609,
        alt: "The trends table under the charts, with Day, New signups and Open demand columns, and a Hide table button.",
        frame: "admin",
        highlights: [
          { x: 89.6, y: 22.6, w: 7.4, h: 5.6, label: "Close the table" },
          { x: 2.7, y: 28.6, w: 94.6, h: 10.9, label: "One row per day or week" },
        ],
      },
    },
  ],
  faqs: [
    {
      q: "Why does my All time chart start later than I installed Waitly?",
      a: "Waitly only keeps waitlist demand for the number of days set under Settings, Data retention. When that cuts the chart short, a note says so, for example “Waitly keeps 365 days of demand, so the chart starts there.”",
    },
    {
      q: "Does a shopper who bought count in Open demand?",
      a: "No. Open demand counts only shoppers still waiting, or alerted and still deciding, at the end of each day or week.",
    },
  ],
  related: ["analytics-overview", "demand-score", "data-retention"],
};
