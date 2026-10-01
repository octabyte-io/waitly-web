import {
  AdminFrame,
  DemandScoreScale,
  Figure,
  Panel,
  RestockPlannerMock,
  SendLogMock,
  TrendLine,
} from "@/components/mocks/admin";
import {
  Band,
  Explainer,
  InstallLink,
  PageHero,
  PlanBadge,
  SectionHeading,
  CtaLink,
} from "@/components/site/primitives";
import { ClosingCta } from "@/components/sections/closing-cta";
import { GuideLinks } from "@/components/guide/guide-links";
import { pages } from "@/config/pages";
import { JsonLd, pageMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata = pageMetadata(pages.analytics);

const SCORE_INPUTS = [
  { name: "Waitlist size", detail: "How many shoppers are waiting right now." },
  { name: "Preorders", detail: "Preorder units over the last 90 days." },
  { name: "Sales velocity", detail: "Units sold per day while the item was in stock." },
  { name: "Restock frequency", detail: "How often it has come back in the last 90 days." },
  { name: "Repeat demand", detail: "Shoppers who come back for it again." },
  { name: "Conversion after alerts", detail: "How many alerted shoppers bought, once at least 20 alerts have gone out." },
  { name: "Signup growth", detail: "The last 14 days of signups against the 14 before." },
];

const STATUSES = [
  { name: "Queued", detail: "On its way to the shopper’s inbox." },
  { name: "Delivered", detail: "Accepted by the email service for delivery." },
  { name: "Failed", detail: "The email service refused it." },
  { name: "Withheld", detail: "Held back because the cycle’s alert allowance ran out. The shopper stays on the list." },
  { name: "Bought", detail: "The shopper went on to buy within your attribution window.", level: "growth" as const },
  { name: "Not sent", detail: "Never needed: the item sold out before that shopper’s batch.", level: "pro" as const },
  { name: "Held", detail: "Units reserved for shoppers, and whether each sold or lapsed.", level: "pro" as const },
];

export default function AnalyticsPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd(pages.analytics)} />
      <PageHero
        title="Know what your waitlist is worth"
        intro="Waitly measures what every restock alert brings back, then turns waiting shoppers, preorders and sales into a score and a restock estimate for each product."
        aside={
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
            <Panel title="Open demand, last 30 days" level="pro">
              <TrendLine />
            </Panel>
          </AdminFrame>
        }
      >
        <InstallLink />
        <CtaLink href="/pricing/" variant="secondary">
          What each plan shows
        </CtaLink>
      </PageHero>

      <Band tone="paper">
        <SectionHeading
          title="Results you can put a number on"
          intro="Choose all time, the last 24 hours, the last 7 days or the last 30 days. Every figure follows the period you pick."
        />
        <div className="mt-14 space-y-14">
          <Explainer title="Right now">
            <p>
              Shoppers waiting and live waitlists, on every plan. The Waitly home page also shows your
              most wanted products at a glance.
            </p>
          </Explainer>
          <Explainer title="How the demand ended" level="growth">
            <p>
              For every shopper who joined a waitlist: did they buy after an alert, are they still
              waiting, or did they leave? Bought after alert and conversion rate show how well your
              alerts land.
            </p>
          </Explainer>
          <Explainer title="Recovered revenue" level="growth">
            <p>
              The value of orders placed by alerted shoppers within your attribution window (7 days by
              default). Refunds and unpaid cancellations are subtracted, so the figure is what you
              actually kept.
            </p>
          </Explainer>
        </div>
      </Band>

      <Band tone="mist">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div>
            <SectionHeading
              title="A send log for every restock"
              intro="Each restock gets a row: how many alerts went out and what happened to them. Open it to see each shopper’s status."
            />
            <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              {STATUSES.map((s) => (
                <div key={s.name}>
                  <dt className="flex items-center gap-2 font-semibold">
                    {s.name}
                    {s.level ? <PlanBadge level={s.level} /> : null}
                  </dt>
                  <dd className="text-ink/75">{s.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
          <AdminFrame title="Send log" className="self-start">
            <Panel>
              <SendLogMock />
            </Panel>
          </AdminFrame>
        </div>
      </Band>

      <Band tone="paper">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <SectionHeading
              title={<span className="inline-flex flex-wrap items-center gap-3">Demand Score <PlanBadge level="pro" /></span>}
              intro="Every product and variant with demand gets a score from 0 to 100. Every store is measured on the same fixed scale, so a score doesn’t move just because something else in your catalogue did."
            />
            <ul className="mt-10 divide-y divide-line border-y border-line">
              {SCORE_INPUTS.map((input) => (
                <li key={input.name} className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[12rem_minmax(0,1fr)] sm:gap-6">
                  <span className="font-semibold">{input.name}</span>
                  <span className="text-ink/75">{input.detail}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-ink/80">
              When Waitly hasn’t seen enough of an input yet, it leaves it out and lists it as “Not
              known yet” rather than guessing.
            </p>
          </div>
          <div className="space-y-6 lg:pt-4">
            <AdminFrame title="Harbor overshirt / M">
              <Panel title="Demand Score">
                <p className="mb-4 flex items-baseline gap-3">
                  <span className="font-display text-[3rem] leading-none font-bold tnum">78</span>
                  <span className="font-semibold">Very high</span>
                </p>
                <DemandScoreScale score={78} />
              </Panel>
            </AdminFrame>
            <p className="text-[0.9375rem] text-ink-soft">
              Low 0 to 29, Medium 30 to 49, High 50 to 69, Very high 70 to 84, Critical 85 to 100.
            </p>
          </div>
        </div>
      </Band>

      <Band tone="ink">
        <SectionHeading
          title={<span className="inline-flex flex-wrap items-center gap-3">Restock suggestion <PlanBadge level="pro" className="bg-sky text-ink" /></span>}
          intro="How many units to order next, worked out per variant from what Waitly has actually seen. It’s always shown as an estimate, with the working next to it."
        />
        <div className="mt-14 grid grid-cols-1 items-stretch gap-3 text-center sm:grid-cols-2 lg:grid-cols-[repeat(4,minmax(0,1fr))_auto_minmax(0,1fr)]">
          <EquationPart value="46" label="waiting shoppers likely to buy" />
          <EquationPart op="+" value="12" label="preorder units not yet shipped" />
          <EquationPart op="+" value="18" label="a month of sales at your in-stock pace" />
          <EquationPart op="−" value="8" label="stock on hand" />
          <span aria-hidden="true" className="hidden items-center justify-center px-2 font-display text-[2.5rem] font-bold text-sky lg:flex">=</span>
          <div className="flex flex-col justify-center rounded-2xl bg-signal p-5 text-ink">
            <span className="text-[0.9375rem] font-semibold">about</span>
            <span className="font-display text-[2.75rem] leading-none font-bold tnum">70</span>
            <span className="mt-2 text-[0.9375rem] font-semibold">units to restock</span>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
          <p className="text-paper/80">
            <strong className="text-paper">Rounded up, on purpose.</strong> Results round up to the
            next 5 below 100, the next 10 below 1,000 and the next 50 above, so they read as an
            estimate, not a count.
          </p>
          <p className="text-paper/80">
            <strong className="text-paper">Honest about gaps.</strong> A part Waitly hasn’t seen is left
            out and named. If stock already covers demand, it says so. Too little data, and it says
            “Not enough data yet”.
          </p>
          <p className="text-paper/80">
            <strong className="text-paper">Never a promise.</strong> Every suggestion carries the same
            note: an estimate from what Waitly has seen, not a promise of sales.
          </p>
        </div>
      </Band>

      <Band tone="paper">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div>
            <SectionHeading
              title={<span className="inline-flex flex-wrap items-center gap-3">Restock planner <PlanBadge level="pro" /></span>}
              intro="Every product and variant with demand in one sortable, searchable table: its score, how many wait and its suggestion. Plan a whole purchase order in one sitting."
            />
            <p className="mt-6 text-ink/80">
              The home page’s “Restock next” card picks out the products to look at first.
            </p>
          </div>
          <AdminFrame title="Restock planner" className="self-start">
            <Panel>
              <RestockPlannerMock />
            </Panel>
          </AdminFrame>
        </div>
      </Band>

      <Band tone="mist">
        <SectionHeading title="More detail when you need it" />
        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
          <Explainer title="Variant demand" level="pro" className="md:grid-cols-1">
            <p>Which sizes and colors people are actually waiting for, product by product.</p>
          </Explainer>
          <Explainer title="Trends" level="pro" className="md:grid-cols-1">
            <p>New signups and open demand over time, to spot a product heating up before it sells out.</p>
          </Explainer>
          <Explainer title="Potential revenue" level="pro" className="md:grid-cols-1">
            <p>
              An estimate of what each waitlist could be worth if you restocked, from the people waiting
              and how often alerts convert.
            </p>
          </Explainer>
          <Explainer title="Preorder volume" level="pro" className="md:grid-cols-1">
            <p>Which products take the most preorders over the period you choose.</p>
          </Explainer>
        </div>
      </Band>

      <GuideLinks sections={["analytics"]} />
      <ClosingCta
        title="Restock with numbers, not a hunch."
        intro="Start free and see your waitlists fill. Growth shows what they recover; Pro shows what to reorder."
      />
    </>
  );
}

function EquationPart({ op, value, label }: { op?: string; value: string; label: string }) {
  return (
    <div className="relative flex flex-col justify-center rounded-2xl bg-paper/[0.07] p-5 ring-1 ring-paper/15">
      {op ? (
        <span aria-hidden="true" className="absolute top-3 left-4 font-display text-[1.5rem] font-bold text-sky">
          {op}
        </span>
      ) : null}
      <span className="sr-only">{op === "−" ? "minus" : op === "+" ? "plus" : ""}</span>
      <span className="font-display text-[2.75rem] leading-none font-bold tnum">{value}</span>
      <span className="mt-2 text-[0.9375rem] text-paper/75">{label}</span>
    </div>
  );
}
