import { EmailMock, muted } from "@/components/mocks/email";
import { ComingSoonBlock, ProductFrame, VotingBlock } from "@/components/mocks/storefront";
import {
  Band,
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

export const metadata = pageMetadata(pages.comingSoon);

const PROPOSAL_STATES = [
  { name: "Draft", detail: "Only you can see it while you write it." },
  { name: "Open", detail: "On your storefront, collecting votes. Up to 50 can be open at once." },
  { name: "Closed", detail: "Taken off your storefront. No more votes come in." },
  { name: "Promoted", detail: "It became a real product. Its voters are emailed when it comes into stock." },
];

export default function ComingSoonPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd(pages.comingSoon)} />
      <PageHero
        title="Find out what sells before you make it"
        intro="Two ways to hear from shoppers before a product exists: a Coming Soon page for something you’re about to launch, and a vote for ideas you haven’t committed to yet."
        aside={
          <ProductFrame title="Oat fleece, heavyweight" price="$96.00">
            <ComingSoonBlock />
          </ProductFrame>
        }
      >
        <InstallLink />
        <span className="flex items-center gap-2 text-ink/75">
          Both are part of <PlanBadge level="pro" />
        </span>
      </PageHero>

      <Band tone="paper">
        <SectionHeading
          title="Coming Soon"
          intro="Mark a real Shopify product as Coming Soon and its page shows an “I want this” form where the Notify me button would be. Shoppers sign up for launch day instead of bouncing off a sold-out page."
        />
        <div className="mt-14 space-y-14">
          <Explainer title="What the form asks">
            <p>
              The shopper picks their size or color, or ticks “Any size or color is fine”. They enter
              their email and agree to “Email me once when this goes on sale.” Then they see “You’re on
              the list” and get a confirmation email.
            </p>
            <p>
              If someone signs up twice, Waitly updates their answers instead of adding them again.
            </p>
          </Explainer>
          <SettingList
            settings={[
              {
                name: "Ask how many they want",
                detail: "Adds a “How many?” choice from 1 to 10, so you know units, not just people.",
              },
              {
                name: "Show the shopper’s country",
                detail: "Shows “Shopping from Canada” and records where demand comes from.",
              },
            ]}
          />
          <Explainer title="Launch is automatic">
            <p>
              The first time the product comes into stock, the Coming Soon mark ends by itself and
              everyone waiting gets a launch email. You don’t need to remember to switch anything off.
            </p>
            <p>
              Each Coming Soon product’s page in Waitly shows the most wanted option, the units asked
              for and where shoppers are from. Launches from the last 90 days are shown in a Launched
              list.
            </p>
          </Explainer>
        </div>
      </Band>

      <Band tone="mist">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              title="The launch email"
              intro="Coming Soon shoppers were promised a launch, not a restock, so the words change: “now available”, never “back”."
            />
            <p className="mt-6 text-ink/80">
              On Growth and Pro you can write your own subject, heading, message and button for the
              launch email, just as you can for restock alerts.
            </p>
          </div>
          <EmailMock
            subject="Oat fleece, heavyweight is now available"
            heading="Oat fleece, heavyweight is now available"
            button="Buy it now"
            after={<p className={muted}>This alert does not hold one for you, so it is first come, first served.</p>}
            item="Oat fleece, heavyweight / Medium"
            joinedBy="coming_soon"
          >
            <p>
              <strong>Oat fleece, heavyweight / Medium</strong> is now available at Harbor Supply.
            </p>
            <p className={muted}>You were number 12 in line for this one.</p>
          </EmailMock>
        </div>
      </Band>

      <Band tone="paper" id="voting">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <SectionHeading
              title="Product voting"
              intro="Put up ideas you’re considering and let shoppers tick the ones they’d buy. It’s a waitlist for products that don’t exist yet."
            />
            <SettingList
              className="mt-10"
              settings={[
                {
                  name: "A proposal",
                  detail: "A title, a short description, one image and, if you like, a planned price.",
                },
                {
                  name: "The Voting block",
                  detail:
                    "Add it to your home page or any page, like a “What’s next” page. Shoppers tick the ideas they’d buy, enter an email and agree to hear about them.",
                },
                {
                  name: "Vote counts stay private",
                  detail: "Shoppers never see how many votes an idea has, so early leaders don’t sway the result.",
                },
                {
                  name: "Voters hear about their picks only",
                  detail: "“We’ll only email you about those.” Nobody is emailed about ideas they didn’t tick.",
                },
                { name: "Export", detail: "Download a proposal’s voters as CSV." },
              ]}
            />
          </div>
          <div className="lg:pt-4">
            <VotingBlock />
          </div>
        </div>
      </Band>

      <Band tone="sky">
        <SectionHeading
          title="From idea to product, without losing a voter"
          intro="A proposal moves through four states. When you promote it, the votes move with it."
        />
        <ol className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PROPOSAL_STATES.map((state, i) => (
            <li key={state.name} className="border-t-4 border-ink pt-5">
              <p className="font-display text-[1rem] font-bold text-ink/60 tnum">{i + 1}</p>
              <h3 className="mt-1 text-[1.375rem] font-bold">{state.name}</h3>
              <p className="mt-2 text-ink/80">{state.detail}</p>
            </li>
          ))}
        </ol>
        <div className="mt-14 max-w-3xl space-y-4 text-ink/85">
          <p>
            <strong>Promote</strong> creates the Shopify product for you, or links a product you’ve
            already made. Every vote moves onto it as demand.
          </p>
          <p>
            When it goes on sale, each voter gets “Waxed canvas tote, which you voted for, is now
            available”, with a link to buy.
          </p>
        </div>
      </Band>

      <UseCaseLinks features={["comingSoon"]} />
      <GuideLinks sections={["coming-soon"]} />
      <ClosingCta
        title="Launch to a list, not to silence."
        intro="Coming Soon and product voting come with Pro. Try it free for 14 days."
      />
    </>
  );
}
