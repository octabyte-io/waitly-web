/**
 * The shape of a use-case post.
 *
 * One post is one situation a merchant is in, such as a restock with more
 * shoppers waiting than units. It answers the question in general first
 * (`voice: "neutral"`), then shows how Waitly handles it (`voice: "waitly"`).
 *
 * A post's `slug` and each section's `id` are permanent once published: the
 * site has no redirects, so a changed address is a broken link.
 */
import type { Level } from "@/content/plans";
import type { SceneId } from "@/components/use-cases/scenes";

/** Text with `**bold**` and `[label](/path/)` links. See `src/lib/inline.tsx`. */
export type Inline = string;

/** The feature pages a post can point at, by their key in `pages`. */
export type FeatureKey = "backInStock" | "preorders" | "restockRelease" | "analytics" | "comingSoon";

export type Figure = {
  /** A mock from the scene registry in `src/components/use-cases/scenes.tsx`. */
  scene: SceneId;
  /** Say "Example" when the mock shows figures. They are not results. */
  caption: Inline;
};

export type Block =
  /** A paragraph. */
  | Inline
  | { type: "h3"; text: string }
  | { type: "list"; ordered?: boolean; items: Inline[] }
  | { type: "table"; caption: string; head: string[]; rows: Inline[][] }
  | { type: "aside"; kind: "tip" | "note" | "warning"; text: Inline };

export type Section = {
  id: string;
  /** The H2, in the words a merchant would search for. */
  heading: string;
  /** `neutral` is advice that holds without Waitly. `waitly` is what the app does. */
  voice: "neutral" | "waitly";
  blocks: Block[];
  /** One mock per section. Split the section to show two. */
  figure?: Figure;
};

export type UseCasePost = {
  slug: string;
  /** The H1. */
  title: string;
  /** The title tag, when the H1 is too long to sit before " | Waitly". */
  metaTitle?: string;
  /** The meta description, 160 characters at most. */
  description: string;
  /** The heading on the share card, about 60 characters at most. */
  cardHeadline?: string;
  /** One or two sentences for the hub card and llms.txt. */
  summary: string;
  /** ISO dates, e.g. "2026-10-12". */
  published: string;
  updated?: string;
  /** The short answer under the H1, for a reader who stops there. */
  answer: Inline[];
  sections: Section[];
  features: FeatureKey[];
  /** The lowest plan that covers everything the post describes. */
  level: Level;
  /** Guide articles to follow, in order, with an optional note on each. */
  setup: { guide: string; note?: Inline }[];
  /** What Waitly doesn't do in this situation. */
  limits: Inline[];
  faqs: { q: string; a: Inline }[];
  /** Slugs of other use-case posts. */
  related?: string[];
};
