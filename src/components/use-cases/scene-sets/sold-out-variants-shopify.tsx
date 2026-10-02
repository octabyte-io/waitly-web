import { Check } from "lucide-react";
import { AdminFrame, Panel } from "@/components/mocks/admin";
import type { Scene } from "../scenes";

/**
 * The block's "What a shopper waits for" setting, as the theme editor's
 * sidebar shows it. The wording is the extension's own.
 */
function WaitsForSetting() {
  const options = [
    { name: "The selected variant", selected: true },
    { name: "The whole product", selected: false },
  ];
  return (
    <figure className="glass mx-auto max-w-md rounded-[1.75rem] p-2 sm:p-2.5">
      <div className="overflow-hidden rounded-[1.25rem] bg-white text-[#1a1a1a] ring-1 ring-[#0b2545]/10">
        <div className="flex items-center justify-between gap-3 border-b border-[#e6e9ee] px-4 py-2.5 text-[0.8125rem] text-[#5c6570]">
          <span>Theme editor</span>
          <span>Default product</span>
        </div>
        <div className="space-y-4 p-5">
          <p className="font-semibold">Notify me when available</p>
          <div>
            <p className="text-[0.8125rem] text-[#5c6570]">What a shopper waits for</p>
            <p className="mt-1 flex h-10 items-center justify-between rounded-md border border-[#1a1a1a] px-3 text-[0.9375rem]">
              The selected variant
              <span aria-hidden="true" className="text-[#9aa2ab]">
                ▾
              </span>
            </p>
            <ul className="mt-1 rounded-md border border-[#d9dee4] p-1 text-[0.9375rem]">
              {options.map((o) => (
                <li
                  key={o.name}
                  className={
                    o.selected
                      ? "flex items-center justify-between gap-3 rounded-[4px] bg-[#f1f3f5] px-2.5 py-2 font-semibold"
                      : "flex items-center justify-between gap-3 rounded-[4px] px-2.5 py-2"
                  }
                >
                  {o.name}
                  {o.selected ? <Check aria-hidden="true" className="size-4 shrink-0" /> : null}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-[0.8125rem] leading-relaxed text-[#5c6570]">
            A shopper who waits for one variant is emailed only when that exact size or color returns. A shopper who
            waits for the product is emailed when any variant returns.
          </p>
        </div>
      </div>
    </figure>
  );
}

const WAITLISTS = [
  { item: "Harbor overshirt - M", kind: "Variant", waiting: 64, alerted: 0, bought: 0, joined: "Oct 1" },
  { item: "Trail runner - 9", kind: "Variant", waiting: 41, alerted: 6, bought: 12, joined: "Oct 1" },
  { item: "Harbor overshirt - XL", kind: "Variant", waiting: 9, alerted: 0, bought: 0, joined: "Sep 28" },
  { item: "Harbor overshirt", kind: "Any variant", waiting: 6, alerted: 0, bought: 0, joined: "Sep 30" },
] as const;

/** The Waitlists page: one row per waitlist, most shoppers waiting first. */
function WaitlistsTable() {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full min-w-[34rem] text-left text-[0.875rem]">
        <caption className="sr-only">Waitlists, example store</caption>
        <thead className="text-ink-soft">
          <tr className="border-b border-line align-bottom">
            <th scope="col" className="py-2 pr-3 font-medium">Waitlist</th>
            <th scope="col" className="py-2 pr-3 text-right font-medium">Waiting</th>
            <th scope="col" className="py-2 pr-3 text-right font-medium">Alerted, still deciding</th>
            <th scope="col" className="py-2 pr-3 text-right font-medium">Bought after alert</th>
            <th scope="col" className="py-2 text-right font-medium">Last joined</th>
          </tr>
        </thead>
        <tbody className="tnum">
          {WAITLISTS.map((r) => (
            <tr key={r.item} className="border-b border-line last:border-0">
              <th scope="row" className="py-2.5 pr-3 font-medium">
                <span className="mr-2">{r.item}</span>
                <span className="inline-flex h-5 items-center rounded-full px-2 text-[0.75rem] font-medium whitespace-nowrap text-ink-soft ring-1 ring-ink/15 ring-inset">
                  {r.kind}
                </span>
              </th>
              <td className="py-2.5 pr-3 text-right font-semibold">{r.waiting}</td>
              <td className="py-2.5 pr-3 text-right">{r.alerted}</td>
              <td className="py-2.5 pr-3 text-right">{r.bought}</td>
              <td className="py-2.5 text-right">{r.joined}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** The mocks for the “sold-out-variants-shopify” post. */
export const scenes = {
  "variants-waits-for": {
    alt: "The Notify me block’s settings in the theme editor. A menu named “What a shopper waits for” offers “The selected variant”, which is chosen, and “The whole product”.",
    render: () => <WaitsForSetting />,
  },
  "variants-waitlists": {
    alt: "Waitly’s Waitlists page for an example store. Harbor overshirt has three rows: size M with 64 shoppers waiting, size XL with 9, both badged Variant, and the product itself with 6, badged Any variant.",
    render: () => (
      <AdminFrame title="Waitlists">
        <Panel>
          <WaitlistsTable />
        </Panel>
      </AdminFrame>
    ),
  },
} satisfies Record<string, Scene>;
