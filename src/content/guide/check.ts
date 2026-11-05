/**
 * Build-time checks on the guide, imported by the article page so a broken
 * link or a bad field stops the build. Kept out of `index.ts` because it
 * needs the use-case posts, which themselves import the guide.
 */
import { pages } from "@/config/pages";
import { POSTS, postPath } from "@/content/use-cases";
import { linksIn } from "@/lib/inline";
import { ARTICLES, GUIDE_SECTIONS, articleBySlug, guidePath } from "./index";
import type { GuideArticle } from "./types";

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

/** Every piece of text in an article that can hold inline markup. */
function textOf(a: GuideArticle): string[] {
  return [
    ...(a.before ?? []),
    ...(a.about ? [a.about] : []),
    ...a.steps.flatMap((step) => [
      ...step.body,
      ...(step.aside ? [step.aside.text] : []),
      ...(step.shot?.caption ? [step.shot.caption] : []),
      ...(step.shot?.highlights ?? []).flatMap((h) => (h.label ? [h.label] : [])),
    ]),
    ...(a.faqs ?? []).map((f) => f.a),
  ];
}

function check() {
  const problems: string[] = [];
  const known = new Set([
    ...Object.values(pages).map((p) => p.path),
    ...ARTICLES.map((a) => guidePath(a.slug)),
    ...POSTS.map((p) => postPath(p.slug)),
  ]);
  const checkLinks = (where: string, texts: string[]) => {
    for (const href of texts.flatMap(linksIn)) {
      if (href.startsWith("https://")) continue;
      if (!known.has(href.split("#")[0])) problems.push(`${where}: link "${href}" is not a page on this site`);
    }
  };

  for (const section of GUIDE_SECTIONS) checkLinks(`section ${section.key}`, [section.about]);

  for (const a of ARTICLES) {
    const say = (problem: string) => problems.push(`${a.slug}: ${problem}`);
    checkLinks(a.slug, textOf(a));
    if (a.metaTitle && a.metaTitle.length > 60) say(`metaTitle is ${a.metaTitle.length} characters, over 60`);
    if (a.metaTitle && !a.metaTitle.includes("Waitly")) say("metaTitle doesn't name Waitly");
    const description = a.metaDescription ?? a.summary;
    if (description.length > 160) say(`description is ${description.length} characters, over 160`);
    if (a.updated && !ISO_DATE.test(a.updated)) say(`updated "${a.updated}" is not YYYY-MM-DD`);
    for (const slug of a.related ?? []) {
      if (!articleBySlug(slug)) say(`related names guide article "${slug}", which doesn't exist`);
    }
    for (const slug of a.useCases ?? []) {
      if (!POSTS.some((p) => p.slug === slug)) say(`useCases names post "${slug}", which doesn't exist`);
    }
  }

  if (problems.length) throw new Error(`User guide:\n- ${problems.join("\n- ")}`);
}

check();
