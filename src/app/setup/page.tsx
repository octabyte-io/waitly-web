import type { Metadata } from "next";
import Link from "next/link";
import { Band, Container, CtaLink, Explainer, InstallLink, PlanBadge, SectionHeading } from "@/components/site/primitives";
import { ClosingCta } from "@/components/sections/closing-cta";
import { siteConfig } from "@/config/site";
import type { Level } from "@/content/plans";

export const metadata: Metadata = {
  title: "Setup guide",
  description:
    "Set up Waitly in two steps: add the Notify me block to your product page and test it on a sold-out product. No code, any Online Store 2.0 theme.",
  alternates: { canonical: "/setup/" },
};

const STEPS = [
  {
    title: "Install Waitly from the Shopify App Store",
    body: "Approve the permissions Shopify shows you. Waitly opens inside your Shopify admin, with a setup guide on its home page.",
  },
  {
    title: "Add the Notify me block to your product page",
    body: "Press the button in the setup guide. Your theme editor opens on your product template with the Notify me block already added. Move it where you want it, usually just under the price or the Add to cart button, and save.",
  },
  {
    title: "Test the button on a sold-out product",
    body: "Open a product with a sold-out variant, choose that variant and sign up with your own email. You’ll get a confirmation email and the waitlist appears in Waitly. When that variant is restocked, you’ll get the alert too.",
  },
];

const BLOCKS: { name: string; where: string; what: string; level?: Level }[] = [
  {
    name: "Notify me when available",
    where: "Product page",
    what: "The back in stock form. Shows only on sold-out variants.",
  },
  {
    name: "Pre-order",
    where: "Product page",
    what: "The Pre-order badge, ship estimate and your message, for products a preorder policy covers.",
  },
  {
    name: "Coming soon",
    where: "Product page",
    what: "The “I want this” form for products you’ve marked as Coming Soon.",
    level: "pro",
  },
  {
    name: "Vote for what we make next",
    where: "Home page or any page",
    what: "Your open product ideas, for shoppers to vote on.",
    level: "pro",
  },
];

const PROCESSORS = [
  { name: "Shopify", role: "Your store, orders, products and customers", where: "Global" },
  { name: "Resend", role: "Sending Waitly’s emails", where: "United States" },
  { name: "Hetzner", role: "Hosting Waitly’s servers and database", where: "Germany" },
  { name: "Sentry", role: "Error monitoring", where: "United States" },
];

export default function SetupPage() {
  return (
    <>
      <section className="bg-sky pt-14 pb-20 sm:pt-20 sm:pb-24">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <h1 className="text-d1 font-bold tracking-[-0.03em]">
              Set up in two steps, no code
            </h1>
            <p className="mt-6 max-w-[34rem] text-lead text-ink/80">
              Waitly uses Shopify’s theme app blocks, so it works with any Online Store 2.0 theme.
              Nothing is pasted into your theme files, and uninstalling leaves your theme as it was.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <InstallLink />
            </div>
          </div>
          <ol className="grid gap-8">
            {STEPS.map((step, i) => (
              <li key={step.title} className="grid grid-cols-[3rem_minmax(0,1fr)] gap-5">
                <span
                  className={
                    "flex size-12 items-center justify-center rounded-full font-display text-[1.25rem] font-bold " +
                    (i === 0 ? "bg-paper text-ink" : "bg-ink text-paper")
                  }
                >
                  {i === 0 ? "0" : i}
                </span>
                <div>
                  <h2 className="text-[1.375rem] font-bold tracking-[-0.01em]">{step.title}</h2>
                  <p className="mt-2 text-ink/80">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <Band tone="paper">
        <SectionHeading
          title="Waitly’s theme blocks"
          intro="Add them in the theme editor like any other block. Each one’s text and style is set on the block itself."
        />
        <div className="mt-12 relative overflow-x-auto">
          <table className="w-full min-w-[40rem] text-left">
            <thead className="text-ink-soft">
              <tr className="border-b-2 border-ink">
                <th scope="col" className="py-3 pr-6 font-medium">Block</th>
                <th scope="col" className="py-3 pr-6 font-medium">Where it goes</th>
                <th scope="col" className="py-3 font-medium">What it does</th>
              </tr>
            </thead>
            <tbody>
              {BLOCKS.map((block) => (
                <tr key={block.name} className="border-b border-line">
                  <th scope="row" className="py-4 pr-6 font-semibold">
                    <span className="flex flex-wrap items-center gap-2">
                      {block.name}
                      {block.level ? <PlanBadge level={block.level} /> : null}
                    </span>
                  </th>
                  <td className="py-4 pr-6 text-ink/80">{block.where}</td>
                  <td className="py-4 text-ink/80">{block.what}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-16 space-y-14">
          <Explainer title="A built-in connection check">
            <p>
              Waitly checks that it can reach your storefront. If it can’t, Settings says so plainly,
              “Waitly could not confirm the connection to your storefront”, so you’re not left
              guessing why signups aren’t arriving.
            </p>
          </Explainer>
          <Explainer title="Light on your pages">
            <p>
              The blocks are plain Liquid and small scripts of about 10 KB each, with no framework to
              download. They take their fonts and spacing from your theme.
            </p>
          </Explainer>
          <Explainer title="Then make it yours">
            <p>
              Once the button works, open Waitly’s settings to add your logo and brand color to emails,
              set your sender name, and adjust the notification rules.
            </p>
            <p>
              <CtaLink href="/features/back-in-stock/" variant="quiet" className="mt-2">
                See every setting
              </CtaLink>
            </p>
          </Explainer>
        </div>
      </Band>

      <Band tone="mist" id="privacy">
        <SectionHeading
          title="Data and privacy"
          intro="Waitly keeps as little as it can. The only customer detail it asks Shopify for is an email address."
        />
        <div className="mt-14 space-y-14">
          <Explainer title="What’s stored">
            <p>
              For each signup: the shopper’s email, what they’re waiting for, when they joined, and a
              record of their consent. Waitly also keeps a list of addresses that unsubscribed or
              bounced, so they’re never emailed again, and a log of changes to your settings.
            </p>
          </Explainer>
          <Explainer title="Shopify privacy requests">
            <p>
              Waitly answers Shopify’s privacy requests automatically. A customer data request is
              emailed to you as an export. A customer erasure request removes that shopper. When you
              uninstall, your store’s data is erased 48 hours later.
            </p>
          </Explainer>
          <Explainer title="Who else handles data">
            <div className="relative overflow-x-auto">
              <table className="w-full min-w-[28rem] text-left">
                <thead className="text-ink-soft">
                  <tr className="border-b border-ink/20">
                    <th scope="col" className="py-2.5 pr-4 font-medium">Service</th>
                    <th scope="col" className="py-2.5 pr-4 font-medium">What for</th>
                    <th scope="col" className="py-2.5 font-medium">Where</th>
                  </tr>
                </thead>
                <tbody>
                  {PROCESSORS.map((p) => (
                    <tr key={p.name} className="border-b border-ink/10">
                      <th scope="row" className="py-3 pr-4 font-semibold">{p.name}</th>
                      <td className="py-3 pr-4">{p.role}</td>
                      <td className="py-3">{p.where}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              Read the <Link href="/privacy/" className="font-semibold underline underline-offset-4">privacy policy</Link>{" "}
              and the <Link href="/dpa/" className="font-semibold underline underline-offset-4">data protection agreement</Link>.
              Questions go to{" "}
              <a href={`mailto:${siteConfig.supportEmail}`} className="font-semibold underline underline-offset-4">
                {siteConfig.supportEmail}
              </a>
              .
            </p>
          </Explainer>
        </div>
      </Band>

      <ClosingCta />
    </>
  );
}
