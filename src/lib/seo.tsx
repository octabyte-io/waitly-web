import type { Metadata } from "next";
import { pages, type PageEntry } from "@/config/pages";
import { featureNav, siteConfig } from "@/config/site";
import { PLANS } from "@/content/plans";
import { ogSize } from "@/lib/og-image";

const absolute = (path: string) => new URL(path, siteConfig.url).toString();

/** The file name of a page's share card: `home.png`, `preorders.png`, … */
export const ogImageName = (page: PageEntry) =>
  `${page.ogName ?? (page.path === "/" ? "home" : page.path.split("/").filter(Boolean).at(-1))}.png`;

/** When an article was first published and last changed, as YYYY-MM-DD. */
export type ArticleDates = { published: string; modified: string };

/**
 * Title, description, canonical, Open Graph and share card for one page.
 *
 * Open Graph is written out in full on every page because Next.js replaces,
 * rather than merges, a parent segment's `openGraph`. Its title and
 * description are filled in by Next.js from the page's own. Pass `article`
 * for a dated post, so it is shared as an article with its dates.
 */
export function pageMetadata(page: PageEntry, article?: ArticleDates): Metadata {
  const isHome = page.path === "/";
  const image = {
    url: `/og/${ogImageName(page)}`,
    width: ogSize.width,
    height: ogSize.height,
    alt: page.headline ?? page.title,
  };
  return {
    title: isHome ? { absolute: page.title } : page.title,
    description: page.description,
    alternates: { canonical: page.path },
    // Allow large image previews and full-length snippets in search and AI answers.
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    openGraph: {
      ...(article
        ? { type: "article", publishedTime: article.published, modifiedTime: article.modified }
        : { type: "website" }),
      siteName: siteConfig.name,
      locale: "en_US",
      url: page.path,
      images: [image],
    },
    twitter: { card: "summary_large_image", images: [image] },
  };
}

/* Structured data. Every node has a stable `@id` so pages can point at the
   organisation, site and app instead of repeating them. */

export const ids = {
  organization: absolute("/#organization"),
  website: absolute("/#website"),
  app: absolute("/#app"),
};

export const organizationJsonLd = {
  "@type": "Organization",
  "@id": ids.organization,
  name: siteConfig.company,
  logo: absolute("/brand/waitly-mark-512.png"),
  email: siteConfig.supportEmail,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: siteConfig.supportEmail,
    availableLanguage: "English",
  },
};

export const websiteJsonLd = {
  "@type": "WebSite",
  "@id": ids.website,
  name: siteConfig.name,
  url: absolute("/"),
  description: siteConfig.description,
  inLanguage: "en",
  publisher: { "@id": ids.organization },
};

export const appJsonLd = {
  "@type": "SoftwareApplication",
  "@id": ids.app,
  name: siteConfig.name,
  url: absolute("/"),
  description: siteConfig.description,
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Shopify app",
  operatingSystem: "Shopify",
  softwareRequirements: "A Shopify store with an Online Store 2.0 theme",
  installUrl: siteConfig.installUrl,
  image: absolute("/brand/waitly-app-icon-1200.png"),
  featureList: featureNav.map((item) => `${item.label}: ${item.blurb}`),
  publisher: { "@id": ids.organization },
  offers: PLANS.map((plan) => ({
    "@type": "Offer",
    name: `${siteConfig.name} ${plan.name}`,
    description: plan.pitch,
    url: absolute(pages.pricing.path),
    price: plan.price.toFixed(2),
    priceCurrency: "USD",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: plan.price.toFixed(2),
      priceCurrency: "USD",
      billingDuration: "P1M",
      unitText: "month",
    },
  })),
};

/**
 * The page itself, with its breadcrumb trail back to the home page.
 * `parents` are the pages between the two, outermost first.
 */
export function webPageJsonLd(page: PageEntry, type: string = "WebPage", parents: PageEntry[] = []) {
  const url = absolute(page.path);
  const isHome = page.path === "/";
  return {
    "@type": type,
    "@id": url,
    url,
    name: page.title,
    description: page.description,
    inLanguage: "en",
    isPartOf: { "@id": ids.website },
    about: { "@id": ids.app },
    ...(isHome
      ? {}
      : {
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: siteConfig.name, item: absolute("/") },
              ...parents.map((parent, i) => ({
                "@type": "ListItem",
                position: i + 2,
                name: parent.title,
                item: absolute(parent.path),
              })),
              { "@type": "ListItem", position: parents.length + 2, name: page.title, item: url },
            ],
          },
        }),
  };
}

/** A dated post on the page. Waitly's maker is its author; no person is named. */
export function articleJsonLd(page: PageEntry, headline: string, dates: ArticleDates) {
  const url = absolute(page.path);
  return {
    "@type": "Article",
    "@id": `${url}#article`,
    headline,
    description: page.description,
    image: absolute(`/og/${ogImageName(page)}`),
    datePublished: dates.published,
    dateModified: dates.modified,
    inLanguage: "en",
    author: { "@id": ids.organization },
    publisher: { "@id": ids.organization },
    mainEntityOfPage: { "@id": url },
  };
}

/** The questions answered on a page. Answers are plain text. */
export function faqJsonLd(page: PageEntry, faqs: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    "@id": `${absolute(page.path)}#questions`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

/** Renders one or more schema.org nodes as a single JSON-LD graph. */
export function JsonLd({ data }: { data: object | object[] }) {
  const json = {
    "@context": "https://schema.org",
    "@graph": Array.isArray(data) ? data : [data],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json).replace(/</g, "\\u003c") }}
    />
  );
}
