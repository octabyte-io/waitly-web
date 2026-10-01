import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container, PlanBadge } from "@/components/site/primitives";
import { AsideNote } from "@/components/guide/aside-note";
import { GuideSidebar } from "@/components/guide/guide-sidebar";
import { plainText, RichText } from "@/components/guide/rich-text";
import { Screenshot } from "@/components/guide/screenshot";
import { ARTICLES, ORDERED_ARTICLES, articleBySlug, guideEntries, guidePath, sectionOf } from "@/content/guide";
import { LEVEL_NAMES } from "@/content/plans";
import { JsonLd, pageMetadata, webPageJsonLd } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

const entryFor = (slug: string) => guideEntries.find((e) => e.path === guidePath(slug))!;

export async function generateMetadata({ params }: PageProps<"/guide/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  return pageMetadata(entryFor(slug));
}

export default async function GuideArticlePage({ params }: PageProps<"/guide/[slug]">) {
  const { slug } = await params;
  const article = articleBySlug(slug);
  if (!article) notFound();

  const section = sectionOf(article);
  const index = ORDERED_ARTICLES.findIndex((a) => a.slug === slug);
  const prev = ORDERED_ARTICLES[index - 1];
  const next = ORDERED_ARTICLES[index + 1];
  const related = (article.related ?? []).map(articleBySlug).filter((a) => a !== undefined);

  const howTo = {
    "@type": "HowTo",
    name: article.title,
    description: article.summary,
    step: article.steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.title,
      text: step.body.map(plainText).join(" "),
      ...(step.shot ? { image: new URL(step.shot.src, siteConfig.url).toString() } : {}),
    })),
  };

  return (
    <>
      <JsonLd data={[webPageJsonLd(entryFor(slug)), howTo]} />
      <Container className="grid grid-cols-1 gap-8 pt-8 pb-20 sm:pt-12 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-14">
        <aside>
          <GuideSidebar current={slug} />
        </aside>

        <article className="min-w-0">
          <nav aria-label="Breadcrumb" className="text-[0.9375rem] text-ink-soft">
            <Link href="/guide/" className="hover:text-ink hover:underline">
              User guide
            </Link>
            <span aria-hidden="true" className="mx-2">/</span>
            <Link href={`/guide/#${section.key}`} className="hover:text-ink hover:underline">
              {section.title}
            </Link>
          </nav>

          <header className="mt-4 max-w-3xl">
            <h1 className="text-d2 font-bold tracking-[-0.025em]">{article.title}</h1>
            <p className="mt-5 text-lead text-ink/80">{article.summary}</p>
            {article.level ? (
              <p className="mt-5 flex items-center gap-2.5 text-[0.9375rem] text-ink-soft">
                <PlanBadge level={article.level} />
                Needs the {LEVEL_NAMES[article.level]} plan{article.level === "growth" ? " or Pro" : ""}.
              </p>
            ) : null}
          </header>

          {article.before?.length ? (
            <div className="mt-9 max-w-3xl glass-thin rounded-2xl px-5 py-4">
              <p className="font-semibold">Before you start</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-ink/80 marker:text-ink-soft">
                {article.before.map((b) => (
                  <li key={b}>
                    <RichText text={b} />
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {article.steps.length === 0 ? (
            <p className="mt-12 max-w-3xl text-ink-soft">This guide is being written.</p>
          ) : null}

          <ol className="mt-12 space-y-14">
            {article.steps.map((step, i) => (
              <li key={step.title} id={`step-${i + 1}`} className="scroll-mt-28">
                <div className="grid max-w-3xl grid-cols-[2.75rem_minmax(0,1fr)] gap-4">
                  <span className="flex size-11 items-center justify-center rounded-full bg-ink font-display text-[1.125rem] font-bold text-paper shadow-[inset_0_1px_0_rgb(191_227_255/0.25)]">
                    {i + 1}
                  </span>
                  <div className="pt-1.5">
                    <h2 className="text-d3 font-semibold tracking-[-0.02em]">{step.title}</h2>
                    <div className="mt-3 space-y-3 text-ink/80">
                      {step.body.map((p) => (
                        <p key={p}>
                          <RichText text={p} />
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
                {step.shot ? <Screenshot shot={step.shot} className="mt-7" /> : null}
                {step.aside ? <AsideNote aside={step.aside} className="mt-6 max-w-3xl" /> : null}
              </li>
            ))}
          </ol>

          {article.faqs?.length ? (
            <section className="mt-20 max-w-3xl">
              <h2 className="text-d3 font-semibold tracking-[-0.02em]">Questions</h2>
              <dl className="mt-5 divide-y divide-line border-y border-line">
                {article.faqs.map((f) => (
                  <div key={f.q} className="py-5">
                    <dt className="font-semibold">{f.q}</dt>
                    <dd className="mt-1.5 text-ink/80">
                      <RichText text={f.a} />
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          ) : null}

          {related.length ? (
            <section className="mt-14 max-w-3xl">
              <h2 className="text-d3 font-semibold tracking-[-0.02em]">Read next</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={guidePath(r.slug)}
                      className="block h-full glass-thin rounded-2xl px-5 py-4 transition-colors hover:bg-white/80"
                    >
                      <span className="font-semibold">{r.title}</span>
                      <span className="mt-1 block text-[0.9375rem] text-ink-soft">{r.summary}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <nav aria-label="Previous and next" className="mt-16 grid max-w-3xl gap-3 border-t border-line pt-8 sm:grid-cols-2">
            {prev ? (
              <Link href={guidePath(prev.slug)} className="group rounded-2xl px-4 py-3 hover:bg-white/60">
                <span className="flex items-center gap-1.5 text-[0.875rem] text-ink-soft">
                  <ArrowLeft aria-hidden="true" className="size-4" /> Previous
                </span>
                <span className="mt-1 block font-semibold group-hover:underline">{prev.title}</span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link href={guidePath(next.slug)} className="group rounded-2xl px-4 py-3 text-right hover:bg-white/60">
                <span className="flex items-center justify-end gap-1.5 text-[0.875rem] text-ink-soft">
                  Next <ArrowRight aria-hidden="true" className="size-4" />
                </span>
                <span className="mt-1 block font-semibold group-hover:underline">{next.title}</span>
              </Link>
            ) : null}
          </nav>
        </article>
      </Container>
    </>
  );
}
