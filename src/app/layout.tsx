import type { Metadata, Viewport } from "next";
import { Mona_Sans } from "next/font/google";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { siteConfig } from "@/config/site";
import { PLANS } from "@/content/plans";
import "./globals.css";

const mona = Mona_Sans({
  variable: "--font-mona",
  subsets: ["latin"],
  axes: ["wdth"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Waitly: back in stock alerts and preorders for Shopify",
    template: "%s | Waitly",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    images: [{ url: "/brand/waitly-app-icon-1200.png", width: 1200, height: 1200, alt: "Waitly" }],
  },
  twitter: { card: "summary" },
};

export const viewport: Viewport = {
  themeColor: "#E8F4FF",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: siteConfig.name,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Shopify",
  description: siteConfig.description,
  url: siteConfig.url,
  publisher: { "@type": "Organization", name: siteConfig.company },
  offers: PLANS.map((plan) => ({
    "@type": "Offer",
    name: plan.name,
    price: plan.price.toFixed(2),
    priceCurrency: "USD",
  })),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${mona.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">
        <WindowLight />
        <a
          href="#main"
          className="sr-only z-[60] rounded-full bg-ink px-5 py-3 font-semibold text-paper focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}

/** The waiting line behind the glass. Positions are in viewport units so it frames any screen. */
function WindowLight() {
  return (
    <div aria-hidden="true" className="window-light">
      <span className="top-[-18vmax] left-[-14vmax] size-[52vmax] bg-sky" />
      <span className="top-[14vh] right-[-12vmax] size-[38vmax] bg-lilac" />
      <span className="top-[38vh] left-[48vw] size-[12vmax] bg-[#a9d2f5]" />
      <span className="bottom-[-12vmax] left-[-6vmax] size-[34vmax] bg-sky" />
      <span className="right-[-8vmax] bottom-[-16vmax] size-[30vmax] bg-peach opacity-80" />
    </div>
  );
}
