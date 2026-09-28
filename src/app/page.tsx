import Link from "next/link";
import { QueueDemo } from "@/components/demos/queue-demo";
import { EmailMock, muted } from "@/components/mocks/email";
import { PreorderBlock, ProductFrame, ComingSoonBlock } from "@/components/mocks/storefront";
import { AdminFrame, DemandScoreScale, Figure, Panel } from "@/components/mocks/admin";
import {
  Band,
  Container,
  CtaLink,
  InstallLink,
  PlanBadge,
  SectionHeading,
} from "@/components/site/primitives";
import { ClosingCta } from "@/components/sections/closing-cta";
import { FaqList } from "@/components/sections/faq-list";
import { PlanColumns } from "@/components/sections/plan-columns";
import { FAQ } from "@/content/faq";

const STATES = [
  {
    state: "Sold out",
    shopper: "“Notify me when available”",
    tool: "Back in stock",
    does: "Collects emails on the exact size or color that ran out, and emails each shopper when Shopify says it’s back.",
    href: "/features/back-in-stock/",
  },
  {
    state: "Made to order, or on its way",
    shopper: "“Pre-order”",
    tool: "Preorders",
    does: "Keeps the Buy button working. Shoppers pay in full today and the order waits for stock.",
    href: "/features/preorders/",
  },
  {
    state: "Not launched yet",
    shopper: "“I want this”",
    tool: "Coming Soon",
    does: "Turns a product page into a signup for launch day, with how many they want and where they shop from.",
    href: "/features/coming-soon/",
    level: "pro" as const,
  },
  {
    state: "Not made yet",
    shopper: "“Vote for what we make next”",
    tool: "Product voting",
    does: "Lets shoppers tick the ideas they’d buy, then emails the voters when you make one.",
    href: "/features/coming-soon/#voting",
    level: "pro" as const,
  },
];

const LOOP = [
  {
    title: "A shopper joins the line",
    body: "They pick a sold-out size, enter their email and tick the consent box. Waitly confirms by email: “You are on the list for Harbor overshirt / M.”",
  },
  {
    title: "Stock comes back",
    body: "Shopify tells Waitly the moment inventory changes. A variant going from unavailable to available is a restock. There’s nothing for you to press.",
  },
  {
    title: "Waitly emails the line",
    body: "In the order people joined, with your logo and color. On Pro, VIPs go first, and stock can go out in batches or as held units.",
  },
  {
    title: "The shopper buys",
    body: "They get 48 hours by default. If they don’t buy, they go back on the waitlist in their original place for the next restock.",
  },
  {
    title: "The sale is counted",
    body: "Orders within 7 days of an alert count as recovered revenue. Refunds and unpaid cancellations are taken back out.",
  },
];

export default function Home() {
  const homeFaq = FAQ.flatMap((group) => group.items).filter((item) => item.home);

  return (
    <>
      {/* Hero */}
      <section className="pt-10 pb-16 sm:pt-14 sm:pb-24">
        <Container className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.02fr)]">
          <div className="lg:pt-16">
            <h1 className="text-d1 font-bold tracking-[-0.035em]">
              Sold out is where the next sale starts.
            </h1>
            <p className="mt-7 max-w-[33rem] text-lead text-ink/80">
              Waitly puts a Notify me button on your sold-out Shopify products, emails every
              shopper in line when stock returns, and shows you exactly what to restock next.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <InstallLink />
              <CtaLink href="#how-it-works" variant="secondary">
                See how it works
              </CtaLink>
            </div>
            <p className="mt-6 text-[0.9375rem] text-ink/70">
              Free plan for small stores. Growth and Pro start with a 14-day trial.
            </p>
            <p className="mt-14 hidden max-w-[30rem] border-l-4 border-signal pl-5 text-ink/80 lg:block">
              The demo is one restock: 12 units back for 48 shoppers waiting on size M, sent in
              batches of 8. Sending stops the moment it sells out, so nobody is emailed about stock
              that has already gone.
            </p>
          </div>
          <QueueDemo />
        </Container>
      </section>

      {/* Four states */}
      <Band tone="mist">
        <SectionHeading
          title="A product can be unavailable in four ways. Waitly has a tool for each."
          intro="Every one of them ends the same way: the shopper leaves an email instead of leaving your store, and you hear about the demand."
        />
        <div className="mt-14 grid grid-cols-1 border-t border-ink/10 md:grid-cols-2 lg:grid-cols-4">
          {STATES.map((s, i) => (
            <div
              key={s.tool}
              className={
                "flex flex-col gap-4 border-b border-ink/10 py-8 md:px-6 lg:border-b-0 " +
                (i % 2 === 1 ? "md:border-l " : "") +
                (i > 0 ? "lg:border-l" : "lg:pl-0")
              }
            >
              <p className="text-ink-soft">When it’s</p>
              <p className="-mt-3 text-d3 font-semibold tracking-[-0.02em] font-display">{s.state}</p>
              <p className="text-[0.9375rem]">
                <span className="text-ink-soft">The shopper sees </span>
                <span className="font-semibold">{s.shopper}</span>
              </p>
              <p className="flex-1 text-ink/80">{s.does}</p>
              <p className="flex items-center gap-2">
                <Link href={s.href} className="font-semibold underline decoration-signal decoration-2 underline-offset-4 hover:decoration-ink">
                  {s.tool}
                </Link>
                {s.level ? <PlanBadge level={s.level} /> : null}
              </p>
            </div>
          ))}
        </div>
      </Band>

      {/* The loop */}
      <Band tone="ink" id="how-it-works" aria-labelledby="loop-title">
        <SectionHeading
          id="loop-title"
          title="What happens between “sold out” and “sold”"
          intro="Once the Notify me block is on your product page, this runs on its own for every product and variant in your store."
        />
        <ol className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {LOOP.map((step, i) => (
            <li key={step.title} className="relative">
              <div className="flex items-center gap-3" aria-hidden="true">
                <span
                  className={
                    "flex size-10 shrink-0 items-center justify-center rounded-full font-display text-[1.125rem] font-bold tnum " +
                    (i === 4 ? "bg-signal text-ink" : "bg-paper/10 text-sky ring-2 ring-sky/40 ring-inset")
                  }
                >
                  {i + 1}
                </span>
                {i < 4 ? <span className="hidden h-0.5 flex-1 bg-[repeating-linear-gradient(90deg,var(--sky)_0_6px,transparent_6px_14px)] opacity-50 lg:block" /> : null}
              </div>
              <h3 className="mt-5 text-[1.25rem] font-bold tracking-[-0.01em]">{step.title}</h3>
              <p className="mt-2 text-paper/75">{step.body}</p>
            </li>
          ))}
        </ol>
      </Band>

      {/* Back in stock */}
      <Band tone="paper">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              title="Back in stock alerts that sound like your store"
              intro="The email comes from your store’s name, replies go to your inbox, and the bar and button take your brand color. Shoppers never need to know Waitly exists."
            />
            <ul className="mt-8 space-y-3 text-ink/85">
              <li>Wait for one exact variant, or for any variant of the product.</li>
              <li>A one-click unsubscribe in every email. Bounces and spam complaints stop automatically.</li>
              <li>Every word on the storefront can be translated with Translate &amp; Adapt.</li>
            </ul>
            <CtaLink href="/features/back-in-stock/" variant="quiet" className="mt-9">
              Explore back in stock
            </CtaLink>
          </div>
          <EmailMock
            subject="Harbor overshirt is back in stock"
            heading="Harbor overshirt is back"
            button="Buy it now"
            item="Harbor overshirt / M"
          >
            <p>
              <strong>Harbor overshirt / M</strong> is available again at Harbor Supply.
            </p>
            <p className={muted}>You were number 3 in line for this one.</p>
          </EmailMock>
        </div>
      </Band>

      {/* Preorders */}
      <Band tone="paper" className="pt-0 sm:pt-0">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <ProductFrame
            title="Trail runner, low"
            price="$140.00"
            art="sneaker"
            options={{ label: "Size", value: "9", values: [{ name: "8" }, { name: "9" }, { name: "10" }, { name: "11" }] }}
            className="order-last lg:order-first"
          >
            <PreorderBlock fact="Pay in full today. Ships around Nov 14." powered={false} />
          </ProductFrame>
          <div>
            <SectionHeading
              title="Keep taking orders while the next batch is on its way"
              intro="Preorder policies decide which products take preorders and when. Match them by product, variant, collection or tag, so new products join automatically."
            />
            <ul className="mt-8 space-y-3 text-ink/85">
              <li>Offer preorder only while a variant is sold out, and it turns off when stock arrives.</li>
              <li>Cap the units per product so you never promise more than you can ship.</li>
              <li>Every preorder order is tagged <code className="rounded bg-white/75 px-1.5 py-0.5 text-[0.9375rem] ring-1 ring-ink/10">waitly-preorder</code> for fulfilment.</li>
            </ul>
            <CtaLink href="/features/preorders/" variant="quiet" className="mt-9">
              Explore preorders
            </CtaLink>
          </div>
        </div>
      </Band>

      {/* Analytics */}
      <Band tone="paper" className="pt-0 sm:pt-0">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              title="Know what your waitlist is worth, and how much to reorder"
              intro="Waitly counts what alerts bring back and scores every waiting product from 0 to 100, so the next purchase order is based on real demand."
            />
            <ul className="mt-8 space-y-3 text-ink/85">
              <li className="flex flex-wrap items-center gap-2">Recovered revenue and conversion after each alert <PlanBadge level="growth" /></li>
              <li className="flex flex-wrap items-center gap-2">Demand Score and a suggested restock quantity <PlanBadge level="pro" /></li>
              <li className="flex flex-wrap items-center gap-2">A restock planner sorted by what’s most wanted <PlanBadge level="pro" /></li>
            </ul>
            <CtaLink href="/features/analytics/" variant="quiet" className="mt-9">
              Explore analytics
            </CtaLink>
          </div>
          <AdminFrame title="Analytics">
            <div className="grid grid-cols-2 gap-3">
              <Panel title="Right now">
                <div className="grid gap-3">
                  <Figure label="Shoppers waiting" value="1,284" />
                  <Figure label="Live waitlists" value="37" />
                </div>
              </Panel>
              <Panel title="Last 30 days" level="growth">
                <div className="grid gap-3">
                  <Figure label="Recovered revenue" value="$4,912" />
                  <Figure label="Bought after alert" value="23%" />
                </div>
              </Panel>
            </div>
            <Panel title="Demand Score, Harbor overshirt / M" level="pro">
              <DemandScoreScale score={78} />
              <p className="mt-4 text-[0.9375rem]">
                <span className="font-semibold">Restock suggestion:</span> about 70 units
              </p>
            </Panel>
          </AdminFrame>
        </div>
      </Band>

      {/* Launch */}
      <Band tone="sky">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div>
            <SectionHeading
              title="Find out what sells before you make it"
              intro="Mark an upcoming product as Coming Soon and its page collects “I want this” signups. When it first comes into stock, everyone waiting gets a launch email. Not sure what to make? Put up ideas and let shoppers vote."
            />
            <p className="mt-6 flex items-center gap-2 text-ink/80">
              Coming Soon and product voting are part of <PlanBadge level="pro" />
            </p>
            <CtaLink href="/features/coming-soon/" variant="quiet" className="mt-9">
              Explore Coming Soon and voting
            </CtaLink>
          </div>
          <ProductFrame title="Oat fleece, heavyweight" price="$96.00" compact>
            <ComingSoonBlock />
          </ProductFrame>
        </div>
      </Band>

      {/* Pricing */}
      <Band tone="paper" aria-labelledby="pricing-title">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            id="pricing-title"
            title="Start free. Upgrade when the waitlist starts paying."
            intro="Billed monthly through your Shopify invoice. Change or cancel whenever you like."
          />
          <CtaLink href="/pricing/" variant="secondary">
            Full plan comparison
          </CtaLink>
        </div>
        <PlanColumns className="mt-12" />
      </Band>

      {/* Setup */}
      <Band tone="mist">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <SectionHeading
            title="Two steps to your first waitlist"
            intro="No code and no theme files. Waitly uses Shopify’s own theme app blocks, so it works with any Online Store 2.0 theme and uninstalls cleanly."
          />
          <ol className="grid gap-8">
            <li className="grid grid-cols-[3rem_minmax(0,1fr)] gap-5">
              <span className="flex size-12 items-center justify-center rounded-full bg-ink font-display text-[1.25rem] font-bold text-paper">1</span>
              <div>
                <h3 className="text-[1.25rem] font-bold">Add the Notify me block to your product page</h3>
                <p className="mt-2 text-ink/80">
                  One button on the Waitly home page opens your theme editor with the block already in
                  place. Check it sits where you want, then save.
                </p>
              </div>
            </li>
            <li className="grid grid-cols-[3rem_minmax(0,1fr)] gap-5">
              <span className="flex size-12 items-center justify-center rounded-full bg-ink font-display text-[1.25rem] font-bold text-paper">2</span>
              <div>
                <h3 className="text-[1.25rem] font-bold">Test the button on a sold-out product</h3>
                <p className="mt-2 text-ink/80">
                  Open any sold-out variant, sign up with your own email, and watch the waitlist
                  appear in Waitly. From then on, restocks are handled for you.
                </p>
              </div>
            </li>
            <li className="grid grid-cols-[3rem_minmax(0,1fr)] gap-5">
              <span aria-hidden="true" className="flex size-12 items-center justify-center">
                <NotifyDotRow />
              </span>
              <p className="self-center text-ink/80">
                Want more? <Link href="/setup/" className="font-semibold underline decoration-signal decoration-2 underline-offset-4">See the full setup guide</Link>, including preorders, Coming Soon and voting blocks.
              </p>
            </li>
          </ol>
        </div>
      </Band>

      {/* FAQ */}
      <Band tone="paper">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div>
            <SectionHeading title="Questions merchants ask first" />
            <p className="mt-5 text-ink/80">
              <Link href="/faq/" className="font-semibold underline decoration-signal decoration-2 underline-offset-4">
                Read every question
              </Link>
            </p>
          </div>
          <FaqList items={homeFaq} />
        </div>
      </Band>

      <ClosingCta />
    </>
  );
}

function NotifyDotRow() {
  return (
    <span className="grid grid-cols-3 gap-1">
      {Array.from({ length: 9 }, (_, i) => (
        <span key={i} className={"size-2.5 rounded-full " + (i === 4 ? "bg-signal" : "bg-ink/30")} />
      ))}
    </span>
  );
}
