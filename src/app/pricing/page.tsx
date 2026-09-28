import type { Metadata } from "next";
import { Check, Minus } from "lucide-react";
import { Band, Container, Explainer, SectionHeading } from "@/components/site/primitives";
import { ClosingCta } from "@/components/sections/closing-cta";
import { FaqList } from "@/components/sections/faq-list";
import { PlanColumns } from "@/components/sections/plan-columns";
import { FAQ } from "@/content/faq";
import { COMPARISON, PLANS } from "@/content/plans";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Waitly is free to start. Growth is $19 a month and Pro is $49 a month, each with a 14-day free trial, billed through Shopify.",
  alternates: { canonical: "/pricing/" },
};

export default function PricingPage() {
  const billingFaq = FAQ.find((g) => g.title === "Plans and billing")?.items ?? [];

  return (
    <>
      <section className="bg-mist pt-14 pb-20 sm:pt-20 sm:pb-24">
        <Container>
          <h1 className="max-w-4xl text-d1 font-extrabold tracking-[-0.045em] [font-stretch:92%]">
            Pay for Waitly when it’s paying you back
          </h1>
          <p className="mt-6 max-w-2xl text-lead text-ink/80">
            Every plan includes Notify me, automatic restock alerts and preorders. Paid plans add
            reporting, branding and control over who gets stock first. Prices are in US dollars and
            billed monthly on your Shopify invoice.
          </p>
          <PlanColumns className="mt-14" />
        </Container>
      </section>

      <Band tone="paper" aria-labelledby="compare-title">
        <SectionHeading id="compare-title" title="Compare every feature" />
        <div className="mt-12 relative overflow-x-auto">
          <table className="w-full min-w-[40rem] border-collapse text-left">
            <caption className="sr-only">Features included in each Waitly plan</caption>
            <thead>
              <tr className="border-b-2 border-ink">
                <th scope="col" className="py-4 pr-4 font-medium text-ink-soft">
                  Feature
                </th>
                {PLANS.map((plan) => (
                  <th key={plan.level} scope="col" className="w-[16%] py-4 text-center">
                    <span className="block font-display text-[1.25rem] font-bold">{plan.name}</span>
                    <span className="block text-[0.9375rem] font-normal text-ink-soft tnum">
                      ${plan.price}/mo
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            {COMPARISON.map((group) => (
              <tbody key={group.title}>
                <tr>
                  <th colSpan={4} scope="colgroup" className="pt-10 pb-3 font-display text-[1.25rem] font-bold">
                    {group.title}
                  </th>
                </tr>
                {group.rows.map((row) => (
                  <tr key={row.label} className="border-b border-line">
                    <th scope="row" className="py-3.5 pr-4 font-normal">
                      {row.label}
                      {row.note ? (
                        <span className="block text-[0.875rem] text-ink-soft">{row.note}</span>
                      ) : null}
                    </th>
                    {(["free", "growth", "pro"] as const).map((level) => (
                      <td key={level} className="py-3.5 text-center tnum">
                        <Cell value={row[level]} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            ))}
          </table>
        </div>
      </Band>

      <Band tone="mist">
        <SectionHeading
          title="How billing works"
          intro="Waitly is billed by Shopify, so there’s no card to enter and nothing to manage outside your Shopify admin."
        />
        <div className="mt-14 space-y-14">
          <Explainer title="Billing cycles">
            <p>
              Allowances reset every billing cycle. On a paid plan the cycle follows your Shopify
              subscription. On Free, each month runs from the day you installed Waitly.
            </p>
          </Explainer>
          <Explainer title="What counts">
            <p>
              <strong>Restock alerts</strong> are the emails sent to waiting shoppers when stock returns. <strong>Preorders</strong> are orders placed through a
              Waitly preorder policy. Signup confirmations have their own, much higher safety cap that
              ordinary stores never reach.
            </p>
          </Explainer>
          <Explainer title="Reaching a limit">
            <p>
              Waitly shows a banner when you’ve used 80% of an allowance. At 100%, further restock
              alerts are held back rather than sent, and they show as Withheld in the send log.
              Shoppers stay on their waitlists and nothing is deleted. Upgrade, or wait for the next
              cycle.
            </p>
          </Explainer>
          <Explainer title="Trials and changes">
            <p>
              Growth and Pro start with a 14-day free trial. Upgrade, downgrade or cancel whenever you
              like from Shopify. If you move down a plan, your settings and waitlists are kept.
            </p>
          </Explainer>
        </div>
      </Band>

      <Band tone="paper">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <SectionHeading title="Billing questions" />
          <FaqList items={billingFaq} />
        </div>
      </Band>

      <ClosingCta />
    </>
  );
}

function Cell({ value }: { value: boolean | string }) {
  if (value === true)
    return (
      <>
        <Check aria-hidden="true" className="mx-auto size-5 text-ink" />
        <span className="sr-only">Included</span>
      </>
    );
  if (value === false)
    return (
      <>
        <Minus aria-hidden="true" className="mx-auto size-5 text-ink/30" />
        <span className="sr-only">Not included</span>
      </>
    );
  return <span className="font-semibold">{value}</span>;
}
