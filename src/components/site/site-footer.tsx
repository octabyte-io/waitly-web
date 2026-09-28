import Link from "next/link";
import { featureNav, mainNav, siteConfig } from "@/config/site";
import { Container } from "./primitives";
import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="on-ink bg-ink text-paper">
      <Container className="grid grid-cols-1 gap-12 py-16 md:grid-cols-[minmax(0,1.3fr)_repeat(3,minmax(0,1fr))]">
        <div className="max-w-xs">
          <Logo tone="sky" className="h-9" />
          <p className="mt-5 text-paper/75">
            Back in stock alerts, preorders and demand insight for Shopify stores.
            Made by {siteConfig.company}.
          </p>
          <p className="mt-5">
            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="font-semibold text-sky underline decoration-sky/40 underline-offset-4 hover:decoration-sky"
            >
              {siteConfig.supportEmail}
            </a>
          </p>
        </div>

        <FooterColumn
          title="Features"
          links={featureNav.map(({ href, label }) => ({ href, label }))}
        />
        <FooterColumn
          title="Waitly"
          links={[{ href: "/", label: "Overview" }, ...mainNav]}
        />
        <FooterColumn
          title="Legal"
          links={[
            { href: "/privacy/", label: "Privacy policy" },
            { href: "/dpa/", label: "Data protection agreement" },
          ]}
        />
      </Container>
      <Container className="border-t border-paper/15 py-6 text-[0.9375rem] text-paper/60">
        <p>
          © {new Date().getFullYear()} {siteConfig.company}. Shopify is a trademark of Shopify Inc.
          Waitly is an independent app, not made by Shopify.
        </p>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h2 className="font-sans text-[0.9375rem] font-semibold text-sky">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-paper/85 hover:text-paper hover:underline underline-offset-4">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
