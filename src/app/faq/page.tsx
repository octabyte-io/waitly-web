import { Band, Container } from "@/components/site/primitives";
import { ClosingCta } from "@/components/sections/closing-cta";
import { FaqList } from "@/components/sections/faq-list";
import { pages } from "@/config/pages";
import { siteConfig } from "@/config/site";
import { FAQ } from "@/content/faq";
import { JsonLd, pageMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata = pageMetadata(pages.faq);

const slug = (title: string) => title.toLowerCase().replace(/[^a-z]+/g, "-");

const faqJsonLd = {
  ...webPageJsonLd(pages.faq, "FAQPage"),
  mainEntity: FAQ.flatMap((group) =>
    group.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a.join(" ") },
    })),
  ),
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <section className="pt-10 pb-8 sm:pt-16 sm:pb-10">
        <Container>
          <h1 className="max-w-4xl text-d1 font-bold tracking-[-0.03em]">
            Questions and answers
          </h1>
          <p className="mt-6 max-w-2xl text-lead text-ink/80">
            Including the things Waitly doesn’t do yet. Can’t find yours? Email{" "}
            <a href={`mailto:${siteConfig.supportEmail}`} className="font-semibold underline underline-offset-4">
              {siteConfig.supportEmail}
            </a>
            .
          </p>
          <nav aria-label="Topics" className="mt-10">
            <ul className="flex flex-wrap gap-2">
              {FAQ.map((group) => (
                <li key={group.title}>
                  <a
                    href={`#${slug(group.title)}`}
                    className="glass-thin inline-flex h-10 items-center rounded-full px-4 font-medium hover:bg-white/75"
                  >
                    {group.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </section>

      <Band tone="mist">
        <div className="space-y-20">
          {FAQ.map((group) => (
            <section
              key={group.title}
              id={slug(group.title)}
              aria-labelledby={`${slug(group.title)}-title`}
              className="grid grid-cols-1 scroll-mt-24 gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]"
            >
              <h2 id={`${slug(group.title)}-title`} className="text-d3 font-semibold tracking-[-0.02em]">
                {group.title}
              </h2>
              <FaqList items={group.items} />
            </section>
          ))}
        </div>
      </Band>

      <ClosingCta />
    </>
  );
}
