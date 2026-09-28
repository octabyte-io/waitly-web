import { ReleaseSimulator } from "@/components/demos/release-simulator";
import { EmailMock, muted } from "@/components/mocks/email";
import {
  Band,
  Explainer,
  InstallLink,
  PageHero,
  PlanBadge,
  SectionHeading,
  SettingList,
  CtaLink,
} from "@/components/site/primitives";
import { ClosingCta } from "@/components/sections/closing-cta";
import { pages } from "@/config/pages";
import { JsonLd, pageMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata = pageMetadata(pages.restockRelease);

const LADDER = [
  {
    rule: "First, shoppers tagged…",
    detail: "The tag your best customers already carry in Shopify.",
    example: "VIP",
  },
  {
    rule: "Then, shoppers who have spent at least…",
    detail: "What a customer has spent with you in total, as Shopify reports it.",
    example: "500.00",
  },
  {
    rule: "Then, shoppers tagged…",
    detail: "Up to 20 more tags, like wholesale or members.",
    example: "member, wholesale",
  },
  {
    rule: "Then, shoppers who have ordered from you before.",
    detail: "Returning customers ahead of first-time visitors.",
  },
  {
    rule: "Everyone else waits in the order they joined.",
    detail: "",
  },
];

export default function RestockReleasePage() {
  return (
    <>
      <JsonLd data={webPageJsonLd(pages.restockRelease)} />
      <PageHero
        title="Decide who hears first when stock comes back"
        intro="Ten units and forty people waiting is a good problem, but emailing everyone at once turns it into a race. Waitly Pro lets you put your best customers first and release stock at a pace you choose."
      >
        <InstallLink />
        <span className="flex items-center gap-2 text-ink/75">
          Restock release is part of <PlanBadge level="pro" />
        </span>
      </PageHero>

      <Band tone="ink" aria-labelledby="simulator-title">
        <SectionHeading
          id="simulator-title"
          title="Try the three ways to send"
          intro="The same restock each time: 40 shoppers waiting, 10 units back. Pick a mode and play it through, or step through it on the right."
        />
        <div className="mt-12">
          <ReleaseSimulator />
        </div>
        <p className="mt-6 max-w-3xl text-[0.9375rem] text-paper/70">
          An illustration with a fixed pattern of who buys, not a forecast. In Waitly, the settings
          page shows the real schedule for your largest waitlist.
        </p>
      </Band>

      <Band tone="paper">
        <SectionHeading
          title="The three modes, in full"
          intro="Chosen under Settings, Restock release. They apply to every restock in your store."
        />
        <div className="mt-14 space-y-14">
          <Explainer title="All at once">
            <p>
              Everyone waiting is alerted at the restock. Simple and fast, and the right choice when
              you have plenty of stock for the size of the list. Whoever opens the email first gets
              it.
            </p>
            <p>This is how Waitly works on Free and Growth.</p>
          </Explainer>
          <Explainer title="In batches" level="pro">
            <p>
              A few shoppers at a time, in line order, until the item sells out. The moment it sells
              out, sending stops, so nobody further down the line is emailed about stock that has
              already gone. They keep their place for the next restock.
            </p>
            <SettingList
              settings={[
                { name: "Shoppers per batch", detail: "How many are alerted each time.", value: "1 to 1,000, default 20" },
                { name: "Time between batches", detail: "The gap before the next batch goes out.", value: "15, 30, 60 or 120 minutes, default 60" },
                { name: "Most batches", detail: "The last batch alerts everyone still waiting.", value: "2 to 10, default 5" },
              ]}
            />
          </Explainer>
          <Explainer title="Reserve for the first shoppers" level="pro">
            <p>
              Waitly holds one unit for each shopper, in line order, and sends them a link only they
              can use. While the hold lasts, nobody else can buy that unit. If the shopper doesn’t
              buy in time, the hold lapses and the next shopper in line gets it.
            </p>
            <SettingList
              settings={[
                { name: "Hold each unit for", detail: "How long each shopper has.", value: "10 minutes, 30 minutes, 1 hour or 24 hours, default 30 minutes" },
                { name: "Most units held at once", detail: "Keeps the rest of your stock on sale while holds run.", value: "1 to 100, default 5" },
              ]}
            />
            <p>
              Holds are made as Shopify draft orders that reserve inventory, so they show up in your
              admin like any other reservation. This mode asks for one extra Shopify permission to
              create draft orders, which you grant when you turn it on.
            </p>
          </Explainer>
        </div>
      </Band>

      <Band tone="mist">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div>
            <SectionHeading
              title={<span className="inline-flex flex-wrap items-center gap-3">Waitlist priority <PlanBadge level="pro" /></span>}
              intro="Waitly alerts your waitlist in this order. Switch on the rules that apply to your shop. The order itself is fixed, so a place already given to a shopper can’t become wrong."
            />
            <ol className="mt-10 space-y-0">
              {LADDER.map((step, i) => {
                const last = i === LADDER.length - 1;
                return (
                  <li key={step.rule + i} className="grid grid-cols-[3rem_minmax(0,1fr)] gap-4">
                    <div className="flex flex-col items-center">
                      <span
                        className={
                          "flex size-10 shrink-0 items-center justify-center rounded-full font-display font-bold tnum " +
                          (last ? "bg-white/70 text-ink-soft ring-2 ring-line ring-inset" : "bg-ink text-paper")
                        }
                      >
                        {last ? "·" : i + 1}
                      </span>
                      {last ? null : <span aria-hidden="true" className="w-0.5 flex-1 bg-ink/20" />}
                    </div>
                    <div className="pb-8">
                      <p className="pt-2 font-semibold">{step.rule}</p>
                      {step.detail ? <p className="mt-1 text-ink/75">{step.detail}</p> : null}
                      {step.example ? (
                        <p className="mt-2 inline-block rounded-full bg-white/70 px-3 py-1 text-[0.9375rem]">
                          e.g. {step.example}
                        </p>
                      ) : null}
                    </div>
                  </li>
                );
              })}
            </ol>
            <p className="text-ink/80">
              Every rule starts switched off, and priority applies to shoppers who join from the moment
              you turn it on.
            </p>
          </div>
          <div className="lg:pt-24">
            <h3 className="text-d3 font-bold tracking-[-0.02em]">Tell shoppers their place</h3>
            <p className="mt-3 text-ink/80">
              Turn on “tell each shopper their place in the line” and the confirmation email says where
              they stand. The restock alert later says where they were.
            </p>
            <EmailMock
              className="mt-8"
              subject="You are on the list for Trail runner / 9"
              heading="You are on the list"
              item="Trail runner / 9"
            >
              <p>
                Harbor Supply will email you as soon as <strong>Trail runner / 9</strong> is available
                again.
              </p>
              <p className={muted}>Right now you are number 4 in line for this one.</p>
              <p className={muted}>
                Joining the list does not hold one for you, so it is first come, first served when the
                email arrives.
              </p>
            </EmailMock>
          </div>
        </div>
      </Band>

      <Band tone="paper">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <Explainer title="See holds as they happen" level="pro" className="md:grid-cols-1">
            <p>
              Each waitlist shows who holds a unit right now and when the hold ends. The send log
              records every hold alongside sent, delivered and bought.
            </p>
          </Explainer>
          <Explainer title="Nothing to set up per product" className="md:grid-cols-1">
            <p>
              Priority and release settings apply to every waitlist. New products and variants inherit
              them the first time a shopper joins.
            </p>
            <CtaLink href="/features/analytics/" variant="quiet" className="mt-2">
              See how results are measured
            </CtaLink>
          </Explainer>
        </div>
      </Band>

      <ClosingCta
        title="Give your best customers the first chance, every restock."
        intro="Try Pro free for 14 days. Priority, batches and held units are all included."
      />
    </>
  );
}
