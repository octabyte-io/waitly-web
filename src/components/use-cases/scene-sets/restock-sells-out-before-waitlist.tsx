import type { ReactNode } from "react";
import { AdminFrame, Panel } from "@/components/mocks/admin";
import { muted } from "@/components/mocks/email";
import { cn } from "@/lib/utils";
import type { Scene } from "../scenes";

/**
 * The mocks for the “restock-sells-out-before-waitlist” post.
 *
 * One example runs through all of them: Harbor overshirt / M, 10 units back,
 * 40 shoppers waiting. Wording follows the app's screens and emails
 * (`RestockReleaseSection.tsx`, `HeldNow.tsx`, `held-alert.tsx` in `waitly`).
 */

const ITEM = "Harbor overshirt / M";
const SHOP = "Harbor Supply";
const BRAND = "#2f5d50";

const th = "py-2 pr-3 font-medium";
const td = "py-2 pr-3";

/** A radio choice with its detail line, as the settings page lists them. */
function Choice({ label, detail, selected = false }: { label: string; detail: string; selected?: boolean }) {
  return (
    <li className="flex gap-2.5">
      <span
        aria-hidden="true"
        className={cn(
          "mt-1 flex size-4 shrink-0 items-center justify-center rounded-full border",
          selected ? "border-ink" : "border-ink/35",
        )}
      >
        {selected ? <span className="size-2 rounded-full bg-ink" /> : null}
      </span>
      <span>
        <span className={cn("block", selected && "font-semibold")}>
          {label}
          {selected ? <span className="sr-only"> (selected)</span> : null}
        </span>
        <span className="block text-[0.8125rem] text-ink-soft">{detail}</span>
      </span>
    </li>
  );
}

/** A settings field: its label, its value in a box, and the line under it. */
function Field({ label, value, detail }: { label: string; value: string; detail?: string }) {
  return (
    <div>
      <p className="text-[0.8125rem] text-ink-soft">{label}</p>
      <p className="mt-1 flex h-9 items-center rounded-md bg-white px-3 tnum ring-1 ring-ink/20">{value}</p>
      {detail ? <p className="mt-1 text-[0.75rem] leading-snug text-ink-soft">{detail}</p> : null}
    </div>
  );
}

const BATCHES = [
  { batch: 1, when: "At the restock", shoppers: "10" },
  { batch: 2, when: "+1 hour", shoppers: "10" },
  { batch: 3, when: "+2 hours", shoppers: "10" },
  { batch: 4, when: "+3 hours", shoppers: "10 — everyone left" },
];

const LINE = [
  { position: 1, why: "VIP", shopper: "maya@example.com", joined: "21 Sep" },
  { position: 2, why: "VIP", shopper: "jonas@example.com", joined: "29 Sep" },
  { position: 3, why: "High-value", shopper: "priya@example.com", joined: "24 Sep" },
  { position: 4, why: "Ordered before", shopper: "sam@example.com", joined: "18 Sep" },
  { position: 5, why: "Ordered before", shopper: "lucia@example.com", joined: "26 Sep" },
  { position: 6, why: "Standard", shopper: "theo@example.com", joined: "12 Sep" },
  { position: 7, why: "Standard", shopper: "amara@example.com", joined: "14 Sep" },
  { position: 8, why: "Standard", shopper: "ben@example.com", joined: "15 Sep" },
];

const HELD = [
  "maya@example.com",
  "jonas@example.com",
  "priya@example.com",
  "sam@example.com",
  "lucia@example.com",
  "theo@example.com",
  "amara@example.com",
  "ben@example.com",
  "noor@example.com",
  "eli@example.com",
];

/** The email frame of `EmailMock`, with room for the hold box above the heading. */
function HeldEmailFrame({ subject, children }: { subject: string; children: ReactNode }) {
  return (
    <figure className="glass rounded-[1.75rem] p-2 sm:p-2.5">
      <div className="overflow-hidden rounded-[1.25rem] bg-white text-[#1f2328] ring-1 ring-[#0b2545]/10">
        <div className="space-y-1 border-b border-[#e6e9ee] bg-[#f6f8fa] px-5 py-3 text-[0.8125rem]">
          <p>
            <span className="text-[#6b7280]">From </span>
            <span className="font-semibold">{SHOP}</span>
            <span className="text-[#6b7280]"> &lt;alerts@waitly.octabyte.app&gt;</span>
          </p>
          <p>
            <span className="text-[#6b7280]">Subject </span>
            <span className="font-semibold">{subject}</span>
          </p>
        </div>
        <div className="h-2" style={{ background: BRAND }} />
        <div className="space-y-3.5 px-6 pt-6 pb-5 text-[0.9375rem] leading-6">
          <p className="font-sans text-[0.8125rem] font-semibold tracking-wide" style={{ color: BRAND }}>
            {SHOP}
          </p>
          {children}
          <div className="border-t border-[#e5e7eb] pt-4 text-[0.75rem] leading-[1.125rem] text-[#6b7280]">
            <p>
              You are getting this because you asked {SHOP} to tell you when {ITEM} was back in stock.
            </p>
            <p className="mt-2 text-[#1f6feb] underline">Stop alerts for {ITEM}</p>
          </div>
        </div>
      </div>
    </figure>
  );
}

export const scenes = {
  "race-line-order": {
    alt: "The Shoppers card on an example waitlist with 40 waiting, sorted by Position. Positions 1 and 2 are marked VIP, 3 High-value, 4 and 5 Ordered before, and 6 to 8 Standard, although the Standard shoppers joined earliest.",
    render: () => (
      <AdminFrame title={ITEM}>
        <Panel title="Shoppers" level="pro">
          <div className="relative overflow-x-auto">
            <table className="w-full min-w-[26rem] text-left text-[0.875rem]">
              <caption className="sr-only">The first 8 of 40 shoppers waiting, in queue order. Example store.</caption>
              <thead className="text-ink-soft">
                <tr className="border-b border-line">
                  <th scope="col" className={th}>Position</th>
                  <th scope="col" className={th}>Why</th>
                  <th scope="col" className={th}>Shopper</th>
                  <th scope="col" className="py-2 text-right font-medium">Joined</th>
                </tr>
              </thead>
              <tbody className="tnum">
                {LINE.map((row) => (
                  <tr key={row.position} className="border-b border-line last:border-0">
                    <td className={cn(td, "font-semibold")}>{row.position}</td>
                    <td className={td}>{row.why}</td>
                    <td className={cn(td, "text-ink-soft")}>{row.shopper}</td>
                    <td className="py-2 text-right text-ink-soft">{row.joined}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[0.8125rem] text-ink-soft">Showing 8 of 40 waiting.</p>
        </Panel>
      </AdminFrame>
    ),
  },
  "race-batch-schedule": {
    alt: "The Restock release settings with In batches selected: 10 shoppers per batch, 1 hour between batches, 4 batches at most. A preview for an example waitlist of 40 shows 10 shoppers alerted at the restock, 10 after 1 hour, 10 after 2 hours and the last 10 after 3 hours.",
    render: () => (
      <AdminFrame title="Settings">
        <Panel title="Restock release" level="pro">
          <p className="text-[0.8125rem] text-ink-soft">Send restock alerts</p>
          <ul className="mt-2 space-y-2 text-[0.9375rem]">
            <Choice label="All at once" detail="Everyone waiting is alerted at the restock." />
            <Choice
              selected
              label="In batches"
              detail="A few shoppers at a time, in line order, until the item sells out."
            />
            <Choice
              label="Reserve for the first shoppers"
              detail="Waitly holds one unit for each shopper, in line order, and sends them a link only they can use."
            />
          </ul>
          <div className="mt-4 grid gap-3 text-[0.9375rem] sm:grid-cols-3">
            <Field label="Shoppers per batch" value="10" detail="Between 1 and 1,000." />
            <Field label="Time between batches" value="1 hour" />
            <Field label="Most batches" value="4" detail="The last batch alerts everyone still waiting" />
          </div>
        </Panel>
        <Panel>
          <p className="text-[0.9375rem] font-semibold">If {ITEM} came back now (40 waiting)</p>
          <table className="mt-2 w-full text-left text-[0.875rem]">
            <caption className="sr-only">The batches this example restock would go out in</caption>
            <thead className="text-ink-soft">
              <tr className="border-b border-line">
                <th scope="col" className={th}>Batch</th>
                <th scope="col" className={th}>When</th>
                <th scope="col" className="py-2 text-right font-medium">Shoppers</th>
              </tr>
            </thead>
            <tbody className="tnum">
              {BATCHES.map((row) => (
                <tr key={row.batch} className="border-b border-line last:border-0">
                  <td className={td}>{row.batch}</td>
                  <td className={td}>{row.when}</td>
                  <td className="py-2 text-right font-semibold">{row.shoppers}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-3 text-[0.8125rem] text-ink-soft">
            Batches stop when the item sells out. Shoppers not yet alerted stay on the waitlist and keep their place.
          </p>
        </Panel>
      </AdminFrame>
    ),
  },
  "race-held-email": {
    alt: "An email from Harbor Supply with the subject “Harbor overshirt: one is held for you for 30 minutes”. A grey box says “Held for you for 30 minutes” and gives the end time. The email says the shopper was number 3 in line, so one is set aside for them, and has a “Complete your purchase” button.",
    render: () => (
      <HeldEmailFrame subject="Harbor overshirt: one is held for you for 30 minutes">
        <div className="rounded-md bg-[#f3f4f6] px-4 py-3">
          <p className="font-semibold">Held for you for 30 minutes</p>
          <p className={muted}>Until 14:30 on 2 Oct, New York Time</p>
        </div>
        <p className="font-sans text-[1.25rem] font-bold leading-tight">Harbor overshirt is back</p>
        <p>
          <strong>{ITEM}</strong> is available again at {SHOP}. You were number 3 in line, so one is set aside for
          you.
        </p>
        <p className="inline-flex h-11 items-center rounded-md px-5 font-semibold text-white" style={{ background: BRAND }}>
          Complete your purchase
        </p>
        <p className={muted}>
          Only you can use this link. When the time is up it stops working and the next shopper in line gets the
          item.
        </p>
      </HeldEmailFrame>
    ),
  },
  "race-held-now": {
    alt: "The Held now card on an example waitlist, just after a restock of 10 units. It lists ten shoppers, places 1 to 10 in line, each with a unit held until 14:30, and a Remove link on every row.",
    render: () => (
      <AdminFrame title={ITEM}>
        <Panel title="Held now">
          <p className="text-[0.8125rem] text-ink-soft">
            Each shopper has one unit held until the time shown. To end a hold early, remove the shopper — the next
            shopper in line is then called.
          </p>
          <div className="relative mt-2 overflow-x-auto">
            <table className="w-full min-w-[27rem] text-left text-[0.875rem]">
              <caption className="sr-only">Units held right now, example store</caption>
              <thead className="text-ink-soft">
                <tr className="border-b border-line">
                  <th scope="col" className={th}>Shopper</th>
                  <th scope="col" className="py-2 pr-3 text-right font-medium">Place in line</th>
                  <th scope="col" className={th}>Held until (New York Time)</th>
                  <th scope="col" className="py-2">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="tnum">
                {HELD.map((shopper, i) => (
                  <tr key={shopper} className="border-b border-line last:border-0">
                    <th scope="row" className="py-1.5 pr-3 font-normal">{shopper}</th>
                    <td className="py-1.5 pr-3 text-right font-semibold">{i + 1}</td>
                    <td className="py-1.5 pr-3">2 Oct, 14:30 (28 min left)</td>
                    <td className="py-1.5 text-right text-ink-soft underline">Remove</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
      </AdminFrame>
    ),
  },
} satisfies Record<string, Scene>;
