import { PreorderBlock, ProductFrame, ThemeBuyButtons } from "@/components/mocks/storefront";
import {
  Band,
  CtaLink,
  Explainer,
  InstallLink,
  PageHero,
  PlanBadge,
  SectionHeading,
  SettingList,
} from "@/components/site/primitives";
import { ClosingCta } from "@/components/sections/closing-cta";
import { GuideLinks } from "@/components/guide/guide-links";
import { UseCaseLinks } from "@/components/use-cases/use-case-links";
import { pages } from "@/config/pages";
import { JsonLd, pageMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata = pageMetadata(pages.preorders);

const WHEN = [
  {
    title: "Offer preorder only while a variant is sold out",
    body: "A tick box, on for new policies, that works with either date choice. Preorder switches on for a variant when its stock reaches zero, and off again when stock arrives. Your normal Add to cart comes back by itself.",
  },
  {
    title: "Whenever this policy is on",
    body: "Preorder runs until you switch the policy off, with no opening or closing date. The Pre-order block still shows only on a variant that tracks stock and has none left.",
  },
  {
    title: "Between these dates",
    body: "Open and close preorders at a set date and time, in your shop’s time zone. Good for a drop with a fixed window.",
    level: "growth" as const,
  },
];

const ESTIMATES = [
  { kind: "None", shows: "Pay in full today. This item ships later." },
  { kind: "A date", shows: "Pay in full today. Ships around November 14, 2026." },
  { kind: "A range of dates", shows: "Pay in full today. Ships November 14, 2026 – November 28, 2026." },
  { kind: "A time after the order", shows: "Pay in full today. Ships 3 weeks after you order." },
];

export default function PreordersPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd(pages.preorders)} />
      <PageHero
        title="Keep selling while the next batch is on its way"
        intro="Waitly adds a Pre-order panel to the product page for the products you choose, and your theme’s own Add to cart and Buy it now buttons keep selling. Shoppers pay in full at checkout, and Shopify holds the order until you ship."
        aside={
          <ProductFrame
            title="Trail runner, low"
            price="$140.00"
            art="sneaker"
            options={{ label: "Size", value: "9", values: [{ name: "8" }, { name: "9" }, { name: "10" }, { name: "11" }] }}
          >
            <PreorderBlock
              fact="Pay in full today. Ships around November 14, 2026."
              message="Hand-finished in small runs. We’ll email tracking as soon as yours leaves the workshop."
              powered={false}
            />
            <ThemeBuyButtons />
          </ProductFrame>
        }
      >
        <InstallLink />
        <CtaLink href="/pricing/" variant="secondary">
          Preorder limits by plan
        </CtaLink>
      </PageHero>

      <Band tone="paper">
        <SectionHeading
          title="Paid in full, through Shopify’s own checkout"
          intro="Waitly creates one Shopify selling plan for each preorder policy. The plan charges the full price at checkout and marks the order to be fulfilled later, so refunds, taxes and shipping all work the way they already do."
        />
        <div className="mt-14 space-y-14">
          <Explainer title="What it doesn’t do">
            <p>
              Deposits, partial payments and preorder discounts aren’t part of Waitly today. Every
              preorder is paid in full, at the normal price.
            </p>
          </Explainer>
          <Explainer title="Order tags for your team">
            <p>
              Every order that contains a preorder is tagged{" "}
              <code className="rounded bg-white/75 px-1.5 py-0.5 text-[0.9375rem] ring-1 ring-ink/10">waitly-preorder</code>, so it’s
              easy to filter in Shopify and in your fulfilment tools.
            </p>
            <p className="flex flex-wrap items-center gap-2">
              Add your own tag per policy too, like <code className="rounded bg-white/75 px-1.5 py-0.5 text-[0.9375rem] ring-1 ring-ink/10">winter-drop</code>.
              Waitly adds tags but never removes one. <PlanBadge level="growth" />
            </p>
          </Explainer>
          <Explainer title="Track what’s owed">
            <p>
              The Preorders page lists every preorder with its customer, order and status, read
              straight from Shopify’s fulfilments, refunds and cancellations: waiting, partly shipped,
              shipped or cancelled. Filter it by status.
            </p>
            <p>
              Under the status, a line shows what the shopper has been told: Delay notice sent, or
              Agreed to wait. A second badge marks what needs you: Waiting for the shopper, Reaches 30
              days, or Refund due when Shopify couldn’t make a refund.
            </p>
          </Explainer>
        </div>
      </Band>

      <Band tone="mist">
        <SectionHeading
          title="Policies decide what takes preorders"
          intro="A policy is a named set of rules. Make one for each kind of preorder you run, like “Winter jackets” or “Made to order”. Only you see the name; shoppers see “Pre-order”."
        />
        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="rounded-[1.5rem] bg-white/65 p-6 ring-1 ring-white/80 sm:p-8">
            <h3 className="text-d3 font-bold tracking-[-0.02em]">Offer preorder on</h3>
            <p className="mt-3 text-ink/80">Any product or variant that matches one of these.</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {["Collection: Outerwear", "Tag: made-to-order", "Product: Trail runner, low"].map((c) => (
                <li key={c} className="rounded-full bg-sky/70 px-4 py-2 font-medium">{c}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-[1.5rem] bg-white/65 p-6 ring-1 ring-white/80 sm:p-8">
            <h3 className="text-d3 font-bold tracking-[-0.02em]">Except</h3>
            <p className="mt-3 text-ink/80">Leave out anything that matches one of these, even if it matches above.</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {["Variant: Harbor overshirt / XS", "Tag: final-sale"].map((c) => (
                <li key={c} className="rounded-full bg-sky/70 px-4 py-2 font-medium">{c}</li>
              ))}
            </ul>
          </div>
        </div>
        <SettingList
          className="mt-12"
          settings={[
            {
              name: "Match by",
              detail:
                "Product, variant, collection or tag. Products you add to a matching collection or tag later are covered automatically, usually within a minute.",
            },
            {
              name: "Products this policy covers",
              detail: "A live count of the variants and products the rules reach, and a list of the first products with how many of their variants are in, so there are no surprises.",
            },
            {
              name: "Overlapping policies",
              detail:
                "If another policy already covers some of the same products, Waitly warns you before you save. The older policy keeps them.",
            },
            {
              name: "From the product page",
              detail:
                "Open More actions → Pre-order with Waitly on any product in Shopify, or the Purchase options card once the product has a Pre-order option. Add it to a policy, create a new one, remove it, or switch its policy on or off without leaving the product.",
            },
            {
              name: "Theme check",
              detail:
                "Waitly checks that the Pre-order block is actually on your product page, and tells you if it isn’t.",
            },
          ]}
        />
      </Band>

      <Band tone="paper">
        <SectionHeading
          title="When preorder runs"
          intro="Each policy has a switch to offer preorder, a choice of dates, and a sold-out setting."
        />
        <ol className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {WHEN.map((w) => (
            <li key={w.title} className="border-t-4 border-ink pt-6">
              <h3 className="flex flex-wrap items-center gap-2 text-[1.25rem] font-bold">
                {w.title}
                {w.level ? <PlanBadge level={w.level} /> : null}
              </h3>
              <p className="mt-3 text-ink/80">{w.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-16">
          <Explainer title="Maximum units per product">
            <p>
              Cap how many units a policy can sell, counting all variants of a product together. When
              the cap is reached, preorder stops for that product. A cancelled or refunded unit is
              given back, so the cap always reflects what you actually owe.
            </p>
          </Explainer>
        </div>
      </Band>

      <Band tone="sky">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <SectionHeading
              title={<span className="inline-flex flex-wrap items-center gap-3">What shoppers see <PlanBadge level="growth" /></span>}
              intro="On the free plan the block shows the Pre-order badge, “Pay in full today. This item ships later.” and “Cancel any time before it ships for a full refund.” Growth adds a ship estimate and your own message of up to 200 characters."
            />
            <div className="mt-10 relative overflow-x-auto">
              <table className="w-full min-w-[26rem] text-left">
                <thead className="text-ink/70">
                  <tr className="border-b border-ink/15">
                    <th scope="col" className="py-3 pr-6 font-medium">Ship estimate</th>
                    <th scope="col" className="py-3 font-medium">The product page says</th>
                  </tr>
                </thead>
                <tbody>
                  {ESTIMATES.map((e) => (
                    <tr key={e.kind} className="border-b border-ink/15">
                      <th scope="row" className="py-4 pr-6 font-semibold">{e.kind}</th>
                      <td className="py-4 text-ink/85">{e.shows}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-ink/80">
              The estimate is copied onto each preorder when it’s placed, so you can see what each
              shopper was promised.
            </p>
          </div>
          <div className="space-y-6">
            <ProductFrame title="Oat fleece, heavyweight" price="$96.00" compact>
              <PreorderBlock
                fact="Pay in full today. Ships 3 weeks after you order."
                message="Each one is cut and sewn after you order."
                powered={false}
              />
              <ThemeBuyButtons />
            </ProductFrame>
            <ProductFrame title="Brass reading lamp" price="$120.00" compact>
              <PreorderBlock powered />
              <ThemeBuyButtons />
            </ProductFrame>
          </div>
        </div>
      </Band>

      <Band tone="paper">
        <SectionHeading
          title="Shoppers always know where their order stands"
          intro="Preorder emails are about a purchase, not a promotion, so they go out on every plan, never count toward a limit, and reach shoppers who unsubscribed from alerts."
        />
        <div className="mt-14 space-y-14">
          <Explainer title="A receipt for every preorder">
            <p>
              Each new order with a preorder gets one Preorder receipt, in your logo and brand color.
              It names every preorder item, when it’s expected to ship, and the cancellation terms.
            </p>
          </Explainer>
          <Explainer title="Cancel before it ships">
            <p>
              The receipt links to a Keep or cancel page on your store. A shopper can cancel a
              preorder that hasn’t shipped, and Waitly refunds that line in full through Shopify
              straight away. No approval step, and the rest of the order is untouched.
            </p>
          </Explainer>
          <Explainer title="Told when a date moves">
            <p>
              Save a later ship estimate and your editor shows how many shoppers it affects before you
              do. Each one gets a Delay notice 30 minutes after your last save, so if you correct it in
              that time they get one notice with the final date, or none if you put the date back. A
              shopper whose date passes with nothing shipped hears from you too.
            </p>
            <p>
              A preorder with no ship estimate is promised within 30 days of the order, and is told so
              in its receipt.
            </p>
          </Explainer>
          <Explainer title="Agree to wait, or get a refund">
            <p>
              If the new date is more than 30 days past what a shopper was promised, or there’s no
              date at all, the notice asks them to keep their preorder. They get at least 7 days to
              answer. Anyone who doesn’t agree by the deadline is cancelled and refunded in full
              automatically, unless part of their preorder has already shipped.
            </p>
          </Explainer>
        </div>
      </Band>

      <UseCaseLinks features={["preorders"]} />
      <GuideLinks sections={["preorders"]} />
      <ClosingCta
        title="Turn your next sold-out week into a week of orders."
        intro="Preorders are on every plan, from 20 a cycle on Free to unlimited on Pro."
      />
    </>
  );
}
