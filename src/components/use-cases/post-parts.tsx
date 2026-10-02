import Link from "next/link";
import { ArrowRight, Info, Lightbulb, TriangleAlert } from "lucide-react";
import { PlanBadge } from "@/components/site/primitives";
import { articleBySlug, guidePath } from "@/content/guide";
import { LEVEL_NAMES } from "@/content/plans";
import { postBySlug, postPath, type Block, type Figure, type Section, type UseCasePost } from "@/content/use-cases";
import { Inline } from "@/lib/inline";
import { cn } from "@/lib/utils";
import { SCENES } from "./scenes";

/** The pieces every use-case post is built from. `PostLayout` arranges them. */

const formatDate = (iso: string) =>
  new Intl.DateTimeFormat("en-US", { dateStyle: "long", timeZone: "UTC" }).format(new Date(iso));

const planLine = (post: UseCasePost) =>
  post.level === "free"
    ? "Works on the Free plan."
    : `Needs the ${LEVEL_NAMES[post.level]} plan${post.level === "growth" ? " or Pro" : ""}.`;

/** The sections that close every post, after its own. */
export const TAIL = {
  setup: { id: "set-it-up", heading: "Set it up in Waitly" },
  limits: { id: "limits", heading: "What Waitly doesn’t do here" },
  faqs: { id: "questions", heading: "Questions" },
} as const;

export function PostHeader({ post, className }: { post: UseCasePost; className?: string }) {
  return (
    <header className={className}>
      <nav aria-label="Breadcrumb" className="text-[0.9375rem] text-ink-soft">
        <Link href="/use-cases/" className="hover:text-ink hover:underline">
          Use cases
        </Link>
      </nav>
      <h1 className="mt-4 max-w-4xl text-d2 font-bold tracking-[-0.03em]">{post.title}</h1>
      <div className="mt-6 max-w-2xl space-y-3 text-lead text-ink/80">
        {post.answer.map((p) => (
          <p key={p}>
            <Inline text={p} />
          </p>
        ))}
      </div>
      <p className="mt-6 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[0.9375rem] text-ink-soft">
        <PlanBadge level={post.level} />
        <span>{planLine(post)}</span>
        <span aria-hidden="true">·</span>
        <span>
          {post.updated ? "Updated " : ""}
          <time dateTime={post.updated ?? post.published}>{formatDate(post.updated ?? post.published)}</time>
        </span>
      </p>
    </header>
  );
}

const ASIDES = {
  tip: { label: "Tip", Icon: Lightbulb, tone: "bg-sky/55 ring-sky-deep/50" },
  note: { label: "Note", Icon: Info, tone: "bg-white/60 ring-ink/10" },
  warning: { label: "Careful", Icon: TriangleAlert, tone: "bg-peach/55 ring-signal/30" },
} as const;

function BlockView({ block }: { block: Block }) {
  if (typeof block === "string") {
    return (
      <p>
        <Inline text={block} />
      </p>
    );
  }
  if (block.type === "h3") return <h3 className="pt-3 text-[1.25rem] font-bold text-ink">{block.text}</h3>;
  if (block.type === "list") {
    const List = block.ordered ? "ol" : "ul";
    return (
      <List className={cn("space-y-1.5 pl-5 marker:text-ink-soft", block.ordered ? "list-decimal" : "list-disc")}>
        {block.items.map((item) => (
          <li key={item}>
            <Inline text={item} />
          </li>
        ))}
      </List>
    );
  }
  if (block.type === "table") {
    return (
      <div className="relative overflow-x-auto">
        <table className="w-full min-w-[30rem] text-left text-[0.9375rem]">
          <caption className="sr-only">{block.caption}</caption>
          <thead className="text-ink-soft">
            <tr className="border-b-2 border-ink">
              {block.head.map((cell) => (
                <th key={cell} scope="col" className="py-2.5 pr-4 font-medium">
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row) => (
              <tr key={row[0]} className="border-b border-line align-top">
                {row.map((cell, c) => (
                  <td key={c} className={cn("py-3 pr-4", c === 0 && "font-semibold text-ink")}>
                    <Inline text={cell} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  const { label, Icon, tone } = ASIDES[block.kind];
  return (
    <div className={cn("flex gap-3 rounded-2xl px-4 py-3.5 ring-1 ring-inset", tone)}>
      <Icon aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-ink" />
      <p className="text-[0.9844rem] text-ink/85">
        <span className="font-semibold text-ink">{label}: </span>
        <Inline text={block.text} />
      </p>
    </div>
  );
}

export function Blocks({ blocks, className }: { blocks: Block[]; className?: string }) {
  return (
    <div className={cn("space-y-4 text-ink/85", className)}>
      {blocks.map((block, i) => (
        <BlockView key={i} block={block} />
      ))}
    </div>
  );
}

/** A mock with its caption. The mock is described to screen readers by its `alt`. */
export function SceneFigure({ figure, className }: { figure: Figure; className?: string }) {
  const scene = SCENES[figure.scene];
  return (
    <figure className={className}>
      <div role="img" aria-label={scene.alt}>
        {scene.render()}
      </div>
      <figcaption className="mt-3 px-1 text-[0.9375rem] text-ink-soft">
        <Inline text={figure.caption} />
      </figcaption>
    </figure>
  );
}

export function SectionHeadingH2({ section, className }: { section: Pick<Section, "id" | "heading">; className?: string }) {
  return (
    <h2 id={section.id} className={cn("scroll-mt-28 text-d3 font-bold tracking-[-0.02em]", className)}>
      {section.heading}
    </h2>
  );
}

/** The guide articles to follow, in order. */
export function SetupSteps({ post, className }: { post: UseCasePost; className?: string }) {
  if (post.setup.length === 0) return null;
  return (
    <ol className={cn("space-y-3", className)}>
      {post.setup.map((step, i) => {
        const article = articleBySlug(step.guide)!;
        return (
          <li key={step.guide}>
            <Link
              href={guidePath(article.slug)}
              className="group grid grid-cols-[2rem_minmax(0,1fr)_auto] items-start gap-3 glass-thin rounded-2xl px-4 py-4 transition-colors hover:bg-white/80 sm:px-5"
            >
              <span className="flex size-8 items-center justify-center rounded-full bg-ink font-display text-[0.9375rem] font-bold text-paper tnum">
                {i + 1}
              </span>
              <span>
                <span className="flex flex-wrap items-center gap-2 font-semibold">
                  <span className="group-hover:underline">{article.title}</span>
                  {article.level ? <PlanBadge level={article.level} /> : null}
                </span>
                <span className="mt-1 block text-[0.9375rem] text-ink-soft">
                  {step.note ? <Inline text={step.note} /> : article.summary}
                </span>
              </span>
              <ArrowRight aria-hidden="true" className="mt-1 size-4 shrink-0 text-ink-soft" />
            </Link>
          </li>
        );
      })}
    </ol>
  );
}

export function Limits({ post, className }: { post: UseCasePost; className?: string }) {
  if (post.limits.length === 0) return null;
  return (
    <ul className={cn("list-disc space-y-1.5 pl-5 text-ink/85 marker:text-ink-soft", className)}>
      {post.limits.map((limit) => (
        <li key={limit}>
          <Inline text={limit} />
        </li>
      ))}
    </ul>
  );
}

/** Questions with their answers in the page, not folded away. */
export function Faqs({ post, className }: { post: UseCasePost; className?: string }) {
  if (post.faqs.length === 0) return null;
  return (
    <dl className={cn("divide-y divide-line border-y border-line", className)}>
      {post.faqs.map((faq) => (
        <div key={faq.q} className="py-5">
          <dt className="font-semibold">{faq.q}</dt>
          <dd className="mt-1.5 text-ink/80">
            <Inline text={faq.a} />
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function RelatedPosts({ post, className }: { post: UseCasePost; className?: string }) {
  const related = (post.related ?? []).map(postBySlug).filter((p) => p !== undefined);
  if (related.length === 0) return null;
  return (
    <section className={className}>
      <h2 className="text-d3 font-bold tracking-[-0.02em]">Related use cases</h2>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {related.map((r) => (
          <li key={r.slug}>
            <Link
              href={postPath(r.slug)}
              className="block h-full glass-thin rounded-2xl px-5 py-4 transition-colors hover:bg-white/80"
            >
              <span className="font-semibold">{r.title}</span>
              <span className="mt-1 block text-[0.9375rem] text-ink-soft">{r.summary}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

/** Setup, limits and questions: the same closing sections in every layout. */
export function PostTail({ post, className }: { post: UseCasePost; className?: string }) {
  return (
    <div className={cn("space-y-14", className)}>
      {post.setup.length ? (
        <section>
          <SectionHeadingH2 section={TAIL.setup} />
          <SetupSteps post={post} className="mt-5" />
        </section>
      ) : null}
      {post.limits.length ? (
        <section>
          <SectionHeadingH2 section={TAIL.limits} />
          <Limits post={post} className="mt-5" />
        </section>
      ) : null}
      {post.faqs.length ? (
        <section>
          <SectionHeadingH2 section={TAIL.faqs} />
          <Faqs post={post} className="mt-5" />
        </section>
      ) : null}
    </div>
  );
}
