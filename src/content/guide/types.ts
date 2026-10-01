/**
 * The shape of a user guide article.
 *
 * One article is one task a merchant or shopper does in Waitly, told as
 * numbered steps. Each step can carry a screenshot of the real app with
 * boxes drawn round the thing to press.
 */
import type { Level } from "@/content/plans";

export type GuideSectionKey =
  | "getting-started"
  | "back-in-stock"
  | "waitlists"
  | "preorders"
  | "restock-release"
  | "coming-soon"
  | "analytics"
  | "emails-settings"
  | "billing"
  | "shoppers";

/**
 * A box drawn over a screenshot, in percent of the image's width and height,
 * so it stays on target at any size. A box with a `label` gets a numbered
 * marker, and the label is listed under the image against that number.
 */
export type Highlight = {
  x: number;
  y: number;
  w: number;
  h: number;
  label?: string;
};

export type Shot = {
  /** Path under `public/`, e.g. `/guide/add-notify-me-block/01-setup-guide.png`. */
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
  highlights?: Highlight[];
  /** `admin` frames the image as the Shopify admin, `storefront` as a shop page, `email` as an inbox, `phone` as a narrow phone screen. */
  frame?: "admin" | "storefront" | "email" | "phone";
};

export type Aside = {
  kind: "tip" | "note" | "warning";
  text: string;
};

export type Step = {
  title: string;
  /** Paragraphs. Keep each one short; plain text, with **bold** for UI labels. */
  body: string[];
  shot?: Shot;
  aside?: Aside;
};

export type GuideArticle = {
  slug: string;
  section: GuideSectionKey;
  title: string;
  /** One sentence: what the merchant will have done by the end. */
  summary: string;
  /** The lowest plan that has this feature. Omit for Free. */
  level?: Level;
  /** What must be true before the steps work. */
  before?: string[];
  steps: Step[];
  /** Short answers to the questions this task raises. */
  faqs?: { q: string; a: string }[];
  /** Slugs of other guide articles worth reading next. */
  related?: string[];
};
