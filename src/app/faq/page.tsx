import { Band, Container, TextLink } from "@/components/site/primitives";
import { ClosingCta } from "@/components/sections/closing-cta";
import { FaqList } from "@/components/sections/faq-list";
import { pages } from "@/config/pages";
import { siteConfig } from "@/config/site";
import { FAQ } from "@/content/faq";
import { plainInline } from "@/lib/inline";
import { JsonLd, pageMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata = pageMetadata(pages.faq);

const slug = (title: string) => title.toLowerCase().replace(/[^a-z]+/g, "-");

/** Where each topic is covered in full, shown under its heading. */
const MORE: Record<string, { href: string; label: string }[]> = {
  "Getting started": [
    { href: "/setup/", label: "How to set up Waitly in two steps" },
    { href: "/guide/add-notify-me-block/", label: "Add the Notify me block to your theme" },
    { href: "/guide/customize-notify-me-block/", label: "Change the Notify me block’s words and style" },
  ],
  "Back in stock alerts": [
    { href: "/features/back-in-stock/", label: "Back in stock alerts for Shopify" },
    { href: "/guide/how-restock-alerts-work/", label: "How Waitly sends restock alerts" },
    { href: "/guide/notification-rules/", label: "Alert and attribution rules" },
  ],
  Preorders: [
    { href: "/features/preorders/", label: "Shopify preorders, paid in full" },
    { href: "/use-cases/preorder-window-and-limit/", label: "Limit preorders by date and quantity" },
    { href: "/guide/change-ship-date/", label: "Change a ship date and notify shoppers" },
  ],
  "Plans and billing": [
    { href: "/pricing/", label: "Compare Waitly plans and prices" },
    { href: "/guide/choose-a-plan/", label: "Choose or change your Waitly plan" },
    { href: "/guide/allowances-and-usage/", label: "Track your monthly allowances" },
  ],
  Privacy: [
    { href: "/guide/data-retention/", label: "Choose how long Waitly keeps demand" },
    { href: "/privacy/", label: "Waitly privacy policy" },
    { href: "/dpa/", label: "Data protection agreement" },
  ],
};

const faqJsonLd = {
  ...webPageJsonLd(pages.faq, "FAQPage"),
  mainEntity: FAQ.flatMap((group) =>
    group.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a.map(plainInline).join(" ") },
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
            Waitly questions and answers
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
              <div>
                <h2 id={`${slug(group.title)}-title`} className="text-d3 font-semibold tracking-[-0.02em]">
                  {group.title}
                </h2>
                {MORE[group.title] ? (
                  <ul className="mt-4 space-y-2 text-[0.9375rem] text-ink/80">
                    {MORE[group.title].map((link) => (
                      <li key={link.href}>
                        <TextLink href={link.href}>{link.label}</TextLink>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
              <FaqList items={group.items} />
            </section>
          ))}
        </div>
      </Band>

      <ClosingCta />
    </>
  );
}
