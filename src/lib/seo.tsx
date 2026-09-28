import type { Metadata } from "next";
import { pages, type PageEntry } from "@/config/pages";
import { featureNav, siteConfig } from "@/config/site";
import { PLANS } from "@/content/plans";
import { ogSize } from "@/lib/og-image";

const absolute = (path: string) => new URL(path, siteConfig.url).toString();

/** The file name of a page's share card: `home.png`, `preorders.png`, … */
export const ogImageName = (page: PageEntry) =>
  `${page.path === "/" ? "home" : page.path.split("/").filter(Boolean).at(-1)}.png`;

/**
 * Title, description, canonical, Open Graph and share card for one page.
 *
 * Open Graph is written out in full on every page because Next.js replaces,
 * rather than merges, a parent segment's `openGraph`. Its title and
 * description are filled in by Next.js from the page's own.
 */
export function pageMetadata(page: PageEntry): Metadata {
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
      type: "website",
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

/** The page itself, with its breadcrumb trail back to the home page. */
export function webPageJsonLd(page: PageEntry, type: string = "WebPage") {
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
              { "@type": "ListItem", position: 2, name: page.title, item: url },
            ],
          },
        }),
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
