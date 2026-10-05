/**
 * The use-case posts: one situation a merchant is in, and how to handle it.
 *
 * To add a post, write `posts/<slug>.ts` and list it in `POSTS`, newest first.
 * A slug is permanent once published. The checks at the foot of this file
 * stop the build when a post points at something that doesn't exist.
 */
import { pages, type PageEntry } from "@/config/pages";
import { articleBySlug, guideEntries } from "@/content/guide";
import { linksIn } from "@/lib/inline";
import { post as preorderWindowAndLimit } from "./posts/preorder-window-and-limit";
import { post as backInStockNotificationsShopify } from "./posts/back-in-stock-notifications-shopify";
import { post as soldOutVariantsShopify } from "./posts/sold-out-variants-shopify";
import { post as continueSellingWhenOutOfStock } from "./posts/continue-selling-when-out-of-stock";
import { post as preorderShippingDelay } from "./posts/preorder-shipping-delay";
import { post as restockSellsOutBeforeWaitlist } from "./posts/restock-sells-out-before-waitlist";
import { post as howMuchToReorderAfterSellingOut } from "./posts/how-much-to-reorder-after-selling-out";
import type { FeatureKey, UseCasePost } from "./types";

export type { Block, FeatureKey, Figure, Inline, Section, UseCasePost } from "./types";

export const POSTS: UseCasePost[] = [
  preorderWindowAndLimit,
  backInStockNotificationsShopify,
  soldOutVariantsShopify,
  continueSellingWhenOutOfStock,
  preorderShippingDelay,
  restockSellsOutBeforeWaitlist,
  howMuchToReorderAfterSellingOut,
];

export const postPath = (slug: string) => `/use-cases/${slug}/`;

/** Each post as a site page, for metadata, share cards and the sitemap. */
export const useCaseEntries: PageEntry[] = POSTS.map((p) => ({
  path: postPath(p.slug),
  title: p.metaTitle ?? p.title,
  description: p.description,
  headline: p.cardHeadline ?? p.title,
  eyebrow: "Use case",
  ogName: `use-case-${p.slug}`,
  lastModified: p.updated ?? p.published,
}));

export const entryFor = (slug: string) => useCaseEntries.find((e) => e.path === postPath(slug))!;

export const postBySlug = (slug: string) => POSTS.find((p) => p.slug === slug);

/** Posts whose setup steps send the reader to this guide article. */
export const postsForGuide = (guideSlug: string) =>
  POSTS.filter((p) => p.setup.some((s) => s.guide === guideSlug));

export const postsForFeature = (feature: FeatureKey) =>
  POSTS.filter((p) => p.features.includes(feature));

/** Every piece of inline text in a post, for link checks and plain-text output. */
export function inlineTextOf(post: UseCasePost): string[] {
  const blocks = post.sections.flatMap((section) => [
    ...section.blocks.flatMap((block) => {
      if (typeof block === "string") return [block];
      if (block.type === "list") return block.items;
      if (block.type === "table") return block.rows.flat();
      if (block.type === "aside") return [block.text];
      return [];
    }),
    ...(section.figure ? [section.figure.caption] : []),
  ]);
  return [
    ...post.answer,
    ...blocks,
    ...post.setup.flatMap((s) => (s.note ? [s.note] : [])),
    ...post.limits,
    ...post.faqs.map((f) => f.a),
  ];
}

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

function check(posts: UseCasePost[]) {
  const problems: string[] = [];
  const known = new Set([
    ...Object.values(pages).map((p) => p.path),
    ...guideEntries.map((e) => e.path),
    ...posts.map((p) => postPath(p.slug)),
  ]);
  const slugs = new Set<string>();

  for (const post of posts) {
    const say = (problem: string) => problems.push(`${post.slug}: ${problem}`);

    if (slugs.has(post.slug)) say("slug is used twice");
    slugs.add(post.slug);

    if (post.description.length > 160) say(`description is ${post.description.length} characters, over 160`);
    if (!ISO_DATE.test(post.published)) say(`published "${post.published}" is not YYYY-MM-DD`);
    if (post.updated && !ISO_DATE.test(post.updated)) say(`updated "${post.updated}" is not YYYY-MM-DD`);
    if (post.updated && post.updated < post.published) say("updated is before published");

    const ids = new Set<string>();
    for (const section of post.sections) {
      if (ids.has(section.id)) say(`section id "${section.id}" is used twice`);
      ids.add(section.id);
    }

    for (const step of post.setup) {
      if (!articleBySlug(step.guide)) say(`setup names guide article "${step.guide}", which doesn't exist`);
    }
    for (const slug of post.related ?? []) {
      if (!posts.some((p) => p.slug === slug)) say(`related names post "${slug}", which doesn't exist`);
    }
    for (const href of inlineTextOf(post).flatMap(linksIn)) {
      if (href.startsWith("https://")) continue;
      if (!known.has(href.split("#")[0])) say(`link "${href}" is not a page on this site`);
    }
  }

  if (problems.length) throw new Error(`Use-case posts:\n- ${problems.join("\n- ")}`);
}

check(POSTS);
