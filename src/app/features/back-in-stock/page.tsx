import type { Metadata } from "next";
import { EmailMock, muted } from "@/components/mocks/email";
import { NotifyMeBlock, ProductFrame } from "@/components/mocks/storefront";
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

export const metadata: Metadata = {
  title: "Back in stock alerts",
  description:
    "Add a Notify me button to sold-out Shopify products. Waitly detects restocks automatically and emails every shopper waiting, in your brand.",
  alternates: { canonical: "/features/back-in-stock/" },
};

export default function BackInStockPage() {
  return (
    <>
      <PageHero
        title="A Notify me button on every sold-out variant"
        intro="When a size or color runs out, the Add to cart button can’t help. Waitly’s Notify me block takes its place, collects an email, and sends one alert when Shopify says it’s back."
        aside={
          <ProductFrame
            title="Harbor overshirt"
            price="$68.00"
            options={{
              label: "Size",
              value: "M",
              values: [{ name: "S" }, { name: "M", soldOut: true }, { name: "L" }, { name: "XL", soldOut: true }],
            }}
          >
            <NotifyMeBlock />
          </ProductFrame>
        }
      >
        <InstallLink />
        <CtaLink href="/setup/" variant="secondary">
          How setup works
        </CtaLink>
      </PageHero>

      <Band tone="paper">
        <SectionHeading
          title="What shoppers see"
          intro="The block only appears when the selected variant is sold out. Choose another size that’s in stock and it steps aside for your normal Add to cart button."
        />
        <div className="mt-14 space-y-14">
          <Explainer title="Wait for a variant, or the whole product">
            <p>
              Each Notify me block chooses what a shopper waits for. <strong>The selected variant</strong>{" "}
              is the default: someone waiting for a medium is emailed only when mediums return, not
              when a large turns up.
            </p>
            <p>
              <strong>The whole product</strong> suits items where any variant will do, like a
              candle in a few scents. The shopper is emailed when any variant comes back.
            </p>
          </Explainer>
          <Explainer title="Consent, built in">
            <p>
              The form asks for an email address and a clear yes: “Email me once when this is back in
              stock.” Waitly keeps a record of that consent with each signup. After signing up, the
              shopper sees “You are on the list. We will email you once this is back.” and gets a
              confirmation email.
            </p>
          </Explainer>
          <Explainer title="Protected from abuse">
            <p>
              Waitly limits how many signups can arrive from one place in a short time, and shows a
              polite “Too many sign-ups from here just now” message instead of filling your waitlist
              with junk. Invalid addresses are caught before they’re saved.
            </p>
          </Explainer>
        </div>
      </Band>

      <Band tone="mist">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div>
            <SectionHeading
              title="Make the block match your theme"
              intro="Everything is set in the theme editor, on the block itself. The block takes its fonts and spacing from your theme."
            />
            <SettingList
              className="mt-10"
              settings={[
                {
                  name: "Every word",
                  detail:
                    "Heading, email label and placeholder, consent line, button, and the messages for success, errors and too many signups. Each has a sensible default.",
                },
                { name: "Button color", detail: "The button’s fill.", value: "Default #1a1a1a" },
                { name: "Button text color", detail: "The words on the button.", value: "Default #ffffff" },
                { name: "Corner radius", detail: "For the button and field.", value: "0 to 32 px, default 6" },
                { name: "Background and border", detail: "Put the form on its own panel.", level: "growth" },
                { name: "Button style", detail: "Filled or outlined.", level: "growth" },
                { name: "Full-width button", detail: "Stretch the button across the form.", level: "growth" },
                {
                  name: "“Powered by Waitly”",
                  detail: "A small line under the block on Free. Growth and Pro remove it.",
                  level: "growth",
                },
              ]}
            />
          </div>
          <div className="space-y-6 lg:pt-4">
            <ProductFrame title="Harbor overshirt" price="$68.00" compact>
              <NotifyMeBlock buttonColor="#2f5d50" radius={24} powered={false} />
            </ProductFrame>
            <ProductFrame title="Harbor overshirt" price="$68.00" compact>
              <NotifyMeBlock state="success" powered={false} />
            </ProductFrame>
          </div>
        </div>
      </Band>

      <Band tone="ink">
        <SectionHeading
          title="Restocks are detected for you"
          intro="Shopify sends Waitly a message every time an inventory level changes. When a variant goes from unavailable to available, Waitly treats it as a restock and starts emailing the people waiting for it."
        />
        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-[1.25rem] font-bold">No button to press</h3>
            <p className="mt-2 text-paper/75">
              Receive stock the way you already do, in Shopify admin, an inventory app or your
              warehouse sync. Waitly hears about it either way.
            </p>
          </div>
          <div>
            <h3 className="text-[1.25rem] font-bold">In line order</h3>
            <p className="mt-2 text-paper/75">
              Shoppers are alerted in the order they joined. On Pro you can put VIPs and big spenders
              first, and release stock in batches or as held units.
            </p>
            <CtaLink href="/features/restock-release/" variant="secondary" className="mt-5 h-10 px-4 text-[0.9375rem]">
              Restock release
            </CtaLink>
          </div>
          <div>
            <h3 className="text-[1.25rem] font-bold">Stops at your limit</h3>
            <p className="mt-2 text-paper/75">
              If a cycle’s restock alert allowance runs out, further alerts are held back rather than
              sent, and shoppers stay on the list. You’re warned at 80%.
            </p>
          </div>
        </div>
      </Band>

      <Band tone="paper">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <SectionHeading
              title="Emails in your store’s voice"
              intro="Alerts are sent from alerts@waitly.octabyte.app under your store’s name, and replies go to your own contact address."
            />
            <SettingList
              className="mt-10"
              settings={[
                { name: "Sender name", detail: "The name shoppers see in their inbox.", value: "Your shop name by default" },
                { name: "Reply-to address", detail: "Where replies land.", value: "Your Shopify contact address by default" },
                { name: "Logo", detail: "Shown at the top of every email." },
                { name: "Brand color", detail: "Used for the bar at the top of each email and the Buy button." },
                {
                  name: "Your own words",
                  detail:
                    "Rewrite the subject, heading, message and button label of the restock alert, the launch alert and the signup confirmation. Placeholders like {item} fill in the product.",
                  level: "growth",
                },
              ]}
            />
          </div>
          <div className="space-y-6">
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
              <p className={muted}>This alert does not hold one for you, so it is first come, first served.</p>
            </EmailMock>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-d3 font-bold tracking-[-0.02em]">Every email Waitly sends</h3>
          <div className="mt-6 relative overflow-x-auto">
            <table className="w-full min-w-[36rem] text-left">
              <thead className="text-ink-soft">
                <tr className="border-b border-line">
                  <th scope="col" className="py-3 pr-6 font-medium">Email</th>
                  <th scope="col" className="py-3 pr-6 font-medium">When it’s sent</th>
                  <th scope="col" className="py-3 font-medium">Default subject</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Signup confirmation", "Right after a shopper joins a waitlist", "You are on the list for {item}"],
                  ["Coming Soon confirmation", "Right after a shopper asks for a Coming Soon product (Pro)", "We’ll email you when {item} goes on sale"],
                  ["Restock alert", "When the item they wait for is back", "{product} is back in stock"],
                  ["Held-unit alert", "When a unit is held for them (Pro)", "{product}: one is held for you for {time}"],
                  ["Launch alert", "When a Coming Soon product first goes on sale (Pro)", "{product} is now available"],
                  ["Vote confirmation", "After a shopper votes on your ideas (Pro)", "Thanks for voting at {shop}"],
                  ["Vote launch", "When an idea they voted for becomes a product (Pro)", "The {product} you voted for is now available"],
                ].map(([name, when, subject]) => (
                  <tr key={name} className="border-b border-line">
                    <th scope="row" className="py-4 pr-6 font-semibold">{name}</th>
                    <td className="py-4 pr-6 text-ink/80">{when}</td>
                    <td className="py-4 text-ink/80">{subject}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Band>

      <Band tone="mist">
        <SectionHeading
          title="Rules that keep alerts welcome"
          intro="Set once in Waitly’s settings. They apply to every waitlist in your store."
        />
        <SettingList
          className="mt-10"
          settings={[
            {
              name: "Hold a restock alert for",
              detail:
                "How long a shopper has to buy after an alert. After this, a shopper who hasn’t bought goes back on the waitlist, keeping their original place in the queue.",
              value: "1 to 168 hours, default 48",
            },
            {
              name: "Alert one shopper at most",
              detail:
                "Once a shopper has had this many alerts for the same product without buying, they leave the waitlist.",
              value: "1 to 10 alerts, default 3",
            },
            {
              name: "Count a sale as recovered for",
              detail: "A purchase this long after an alert is credited to Waitly in your reporting.",
              value: "1 to 30 days, default 7",
            },
            {
              name: "Keep waitlist demand for",
              detail:
                "A signup with no activity for this long expires, and ended signups are deleted after the same period.",
              value: "30 to 365 days, default 365",
            },
            {
              name: "Unsubscribe",
              detail:
                "Every email has a one-click link to stop alerts for that item, and an option to stop every waitlist email from your store.",
            },
            {
              name: "Bounces and complaints",
              detail: "Addresses that bounce or report spam are stopped automatically, protecting your sender reputation.",
            },
          ]}
        />
      </Band>

      <Band tone="paper">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <Explainer title="In every language you sell in" className="md:grid-cols-1">
            <p>
              The block’s default words ship with Waitly’s theme translations, and anything you change
              in the block can be translated per language in Shopify’s Translate &amp; Adapt app.
            </p>
          </Explainer>
          <Explainer title="Waitlists you can act on" className="md:grid-cols-1">
            <p>
              Every product and variant with shoppers waiting gets its own waitlist in Waitly: who’s in
              line, when they joined, and what they asked for. Remove a shopper by hand if you need to.
            </p>
            <p className="flex flex-wrap items-center gap-2">
              Export any waitlist as CSV, and tag customers an alert brought back with{" "}
              <code className="rounded bg-mist px-1.5 py-0.5 text-[0.9375rem]">waitly-recovered</code>.
              <PlanBadge level="growth" />
            </p>
          </Explainer>
        </div>
      </Band>

      <ClosingCta />
    </>
  );
}
