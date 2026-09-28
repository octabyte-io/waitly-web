/**
 * Plans and what each one includes.
 *
 * Mirrors `waitly/app/domain/billing/plan.ts` (allowances) and the
 * `atLeast(level, …)` gates across the app. Change them together.
 */

export type Level = "free" | "growth" | "pro";

export const LEVEL_NAMES: Record<Level, string> = {
  free: "Free",
  growth: "Growth",
  pro: "Pro",
};

export type Plan = {
  level: Level;
  name: string;
  price: number;
  trialDays: number | null;
  pitch: string;
  alerts: number;
  preorders: number | "unlimited";
  confirmations: number;
  adds: string[];
};

export const PLANS: Plan[] = [
  {
    level: "free",
    name: "Free",
    price: 0,
    trialDays: null,
    pitch: "Everything you need to stop losing shoppers at a sold-out page.",
    alerts: 100,
    preorders: 20,
    confirmations: 500,
    adds: [
      "Notify me on any sold-out product or variant",
      "Automatic restock emails with your logo and color",
      "Preorder policies, paid in full at checkout",
      "Waitlists, send log and shoppers waiting right now",
    ],
  },
  {
    level: "growth",
    name: "Growth",
    price: 19,
    trialDays: 14,
    pitch: "See what Waitly earns you, and make every word and color yours.",
    alerts: 5000,
    preorders: 500,
    confirmations: 10000,
    adds: [
      "Recovered revenue and conversion after each alert",
      "Your own email subject, heading, message and button",
      "No “Powered by Waitly” line, plus extra button styles",
      "Preorder launch dates, ship estimates and your own order tag",
      "CSV export and a tag on customers an alert brought back",
    ],
  },
  {
    level: "pro",
    name: "Pro",
    price: 49,
    trialDays: 14,
    pitch: "Control who gets stock first, and know what to make and reorder.",
    alerts: 20000,
    preorders: "unlimited",
    confirmations: 40000,
    adds: [
      "Waitlist priority and each shopper’s place in line",
      "Alerts in batches, stopped when sold out",
      "Hold a unit for the first shoppers in line",
      "Demand by variant, trends and potential revenue",
      "Demand Score, restock suggestions and the restock planner",
      "Coming Soon pages with launch alerts",
      "Let shoppers vote on your next products",
    ],
  },
];

export const formatCount = (value: number | "unlimited") =>
  value === "unlimited" ? "Unlimited" : value.toLocaleString("en-US");

type Cell = boolean | string;

export type ComparisonRow = {
  label: string;
  note?: string;
  free: Cell;
  growth: Cell;
  pro: Cell;
};

export type ComparisonGroup = { title: string; rows: ComparisonRow[] };

/** A row available from `from` upward. */
const from = (level: Level, label: string, note?: string): ComparisonRow => ({
  label,
  note,
  free: level === "free",
  growth: level !== "pro",
  pro: true,
});

export const COMPARISON: ComparisonGroup[] = [
  {
    title: "Each billing cycle",
    rows: [
      {
        label: "Restock alerts",
        note: "Emails sent when stock returns. Resets every cycle.",
        free: "100",
        growth: "5,000",
        pro: "20,000",
      },
      {
        label: "Preorders",
        note: "Orders placed through a Waitly preorder policy.",
        free: "20",
        growth: "500",
        pro: "Unlimited",
      },
      {
        label: "Signup confirmations",
        note: "A safety cap set high enough that ordinary stores never reach it.",
        free: "500",
        growth: "10,000",
        pro: "40,000",
      },
      { label: "Free trial", free: false, growth: "14 days", pro: "14 days" },
    ],
  },
  {
    title: "Back in stock",
    rows: [
      from("free", "Notify me block, for one variant or the whole product"),
      from("free", "Automatic restock detection and alerts"),
      from("free", "Hold window and per-shopper alert limit"),
      from("free", "Button color, text color and corner radius"),
      from("growth", "Background, border, outlined and full-width button"),
      from("growth", "Remove “Powered by Waitly”"),
      from("free", "Logo and brand color in every email"),
      from("growth", "Write your own email subject, heading, message and button"),
      from("free", "One-click unsubscribe and bounce protection"),
      from("free", "Storefront text translated with Translate & Adapt"),
    ],
  },
  {
    title: "Preorders",
    rows: [
      from("free", "Preorder policies by product, variant, collection or tag"),
      from("free", "Only while sold out, or whenever the policy is on"),
      from("free", "Maximum units per product"),
      from("free", "Every preorder order tagged waitly-preorder"),
      from("growth", "Run between two dates"),
      from("growth", "Ship estimate and your own message on the product page"),
      from("growth", "Your own order tag per policy"),
      from("pro", "Preorder volume report"),
    ],
  },
  {
    title: "Waitlists and restock release",
    rows: [
      from("free", "Waitlist for every product and variant"),
      from("growth", "CSV export of any waitlist"),
      from("growth", "Tag customers a Waitly alert brought back"),
      from("pro", "Waitlist priority: VIPs, top spenders, tags, returning buyers"),
      from("pro", "Tell shoppers their place in line"),
      from("pro", "Send alerts in batches, stopped when sold out"),
      from("pro", "Hold a unit for the first shoppers in line"),
    ],
  },
  {
    title: "Analytics",
    rows: [
      from("free", "Shoppers waiting and live waitlists"),
      from("free", "Send log for every restock alert"),
      from("growth", "Bought after alert, conversion and recovered revenue"),
      from("pro", "Demand by variant and trend charts"),
      from("pro", "Potential revenue on each waitlist"),
      from("pro", "Demand Score and restock suggestions"),
      from("pro", "Restock planner"),
    ],
  },
  {
    title: "Launch",
    rows: [
      from("pro", "Coming Soon pages with launch alerts"),
      from("pro", "Product voting, promoted into real products"),
    ],
  },
];
