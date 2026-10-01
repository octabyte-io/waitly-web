import type { GuideArticle } from "../types";

export const article: GuideArticle = {
  slug: "export-waitlist",
  section: "waitlists",
  title: "Export a waitlist as CSV",
  summary:
    "Download everyone on a waitlist, or just the shoppers you’ve filtered to, as a spreadsheet.",
  level: "growth",
  before: [
    "You’re on the Growth or Pro plan.",
    "The product has a waitlist with at least one shopper on it.",
  ],
  steps: [
    {
      title: "Open the waitlist",
      body: [
        "Select **Waitlists** in the Waitly menu, then select the product or variant you want. Scroll to the **Shoppers** card.",
      ],
    },
    {
      title: "Narrow the list if you want",
      body: [
        "The file follows what the table shows. Select a status filter, such as **Waiting**, or type in **Search by email** and select **Search**, and only those shoppers are exported.",
        "It ignores which page you’re on: every matching shopper is in the file, not just the 50 on screen. Select **All** first to export everyone.",
      ],
      shot: {
        src: "/guide/export-waitlist/01-filter.jpg",
        width: 961,
        height: 467,
        alt: "The Shoppers card filtered to Waiting, with the Waiting 8 filter selected, eight waiting shoppers in queue order, and the Export CSV button at the top right.",
        frame: "admin",
        highlights: [
          { x: 8.2, y: 23.0, w: 8.0, h: 5.3, label: "Only these shoppers are exported" },
          { x: 85.7, y: 5.8, w: 11.6, h: 7.2 },
        ],
      },
    },
    {
      title: "Select Export CSV",
      body: [
        "Select **Export CSV** at the top right of the **Shoppers** card. Your browser downloads a file named after the item and today’s date, for example waitly-variant-123456789-2026-10-01.csv.",
        "Open it in Excel, Numbers or Google Sheets.",
      ],
      shot: {
        src: "/guide/export-waitlist/02-export.jpg",
        width: 961,
        height: 390,
        alt: "The Export CSV button at the top right of the Shoppers card on a waitlist, above the search field, filters and the first rows of shoppers.",
        frame: "admin",
        highlights: [
          { x: 85.7, y: 4.5, w: 11.6, h: 8.4, label: "Download the list as CSV" },
        ],
      },
      aside: {
        kind: "note",
        text: "On Free the button reads **Export CSV (Growth)** and can’t be selected.",
      },
    },
    {
      title: "Read the columns",
      body: [
        "Every file has email, state, item, product_id, variant_id, joined_at, last_notified_at, notify_count and ended_at. On Pro it adds position, priority_reason, joined_by, quantity and shopping_country.",
        "state uses short names: waiting, notified (alerted, still deciding), converted (bought after alert), fulfilled (bought anyway), unsubscribed, expired, barred (cannot be emailed) and dismissed (removed by you). Times are in UTC. position is only filled in for shoppers still in the queue, and joined_by is back_in_stock, coming_soon or voted.",
      ],
      shot: {
        src: "/guide/export-waitlist/03-csv.jpg",
        width: 1412,
        height: 276,
        alt: "An exported waitlist CSV shown as a spreadsheet grid, with the column headers email, state, item, product_id, variant_id, joined_at, last_notified_at, notify_count, ended_at, position, priority_reason, joined_by, quantity and shopping_country, and rows in the states waiting, notified, converted, fulfilled and unsubscribed.",
        highlights: [
          { x: 11.9, y: 19.3, w: 6.1, h: 77.6, label: "Status as a short name" },
          { x: 73.6, y: 19.3, w: 26.4, h: 77.6, label: "Added on Pro" },
        ],
      },
      aside: {
        kind: "note",
        text: "The file holds email addresses. Keep it safe, and only email shoppers in line with the consent they gave when they joined.",
      },
    },
  ],
  faqs: [
    {
      q: "Is there a limit to how many shoppers I can export?",
      a: "A file holds the 50,000 most recent shoppers. If the list is longer, a line under the button says how many aren’t in it.",
    },
    {
      q: "Can I export who voted for a proposal?",
      a: "Yes, on Pro. Open the proposal under Voting and select Export voters. The file has the same columns, with joined_by set to voted.",
    },
    {
      q: "Why is a shopper’s email blank?",
      a: "Their data was deleted at their request through Shopify. Their row stays so the demand still counts. On screen it reads Redacted.",
    },
  ],
  related: ["see-whos-waiting", "remove-a-shopper", "choose-a-plan"],
};
