import { Container, CtaLink } from "@/components/site/primitives";
import { GuideIndex, type IndexSection } from "@/components/guide/guide-index";
import { plainText } from "@/components/guide/rich-text";
import { ClosingCta } from "@/components/sections/closing-cta";
import { GUIDE_SECTIONS, articlesIn } from "@/content/guide";
import { pages } from "@/config/pages";
import { siteConfig } from "@/config/site";
import { JsonLd, pageMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata = pageMetadata(pages.guide);

const sections: IndexSection[] = GUIDE_SECTIONS.map((s) => ({
  ...s,
  articles: articlesIn(s.key).map((a) => ({
    slug: a.slug,
    title: a.title,
    summary: a.summary,
    level: a.level,
    text: plainText(
      [a.title, a.summary, ...a.steps.flatMap((step) => [step.title, ...step.body])].join(" "),
    ).toLowerCase(),
  })),
})).filter((s) => s.articles.length > 0);

export default function GuidePage() {
  return (
    <>
      <JsonLd data={webPageJsonLd(pages.guide, "CollectionPage")} />
      <section className="pt-10 pb-20 sm:pt-16">
        <Container>
          <h1 className="max-w-4xl text-d1 font-bold tracking-[-0.03em]">How to use Waitly</h1>
          <p className="mt-6 max-w-[40rem] text-lead text-ink/80">
            Step-by-step guides for every part of Waitly, with screenshots from the app. New here? Start
            with setup, then come back for the rest when you need it.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaLink href="/guide/install-waitly/">Start with setup</CtaLink>
            <CtaLink href={`mailto:${siteConfig.supportEmail}`} variant="secondary">
              Ask us a question
            </CtaLink>
          </div>
          <GuideIndex sections={sections} />
        </Container>
      </section>
      <ClosingCta />
    </>
  );
}
