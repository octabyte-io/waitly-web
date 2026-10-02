import { AdminFrame, DemandScoreScale, Panel } from "@/components/mocks/admin";
import type { Scene } from "../scenes";

/**
 * The mocks for the “how-much-to-reorder-after-selling-out” post.
 *
 * The restock planner here lists whole products, as the app and the guide do
 * (`demand-score`). `RestockPlannerMock` in `mocks/admin.tsx` lists variants
 * and has no “What to do” column, so it isn’t used.
 */

const WAITLISTS = [
  { item: "Trail runner / 9", kind: "Variant", waiting: 142, bought: 31, joined: "Today" },
  { item: "Harbor overshirt / M", kind: "Variant", waiting: 64, bought: 12, joined: "Today" },
  { item: "Harbor overshirt / L", kind: "Variant", waiting: 29, bought: 6, joined: "Yesterday" },
  { item: "Trail runner / 10", kind: "Variant", waiting: 11, bought: 0, joined: "Sep 28" },
  { item: "Harbor overshirt", kind: "Any variant", waiting: 8, bought: 2, joined: "Sep 30" },
];

const WORKING = [
  { label: "Waiting, likely to buy", note: "25% of 64 waiting, the share that bought after past alerts", value: "16" },
  { label: "Preordered, not shipped", value: "0" },
  { label: "Sales in 30 days", note: "1.5 a day while in stock", value: "45" },
  { label: "In stock", value: "− 0" },
];

const PLANNER = [
  { product: "Trail runner", band: "Critical", score: 91, action: "Restock now.", suggest: "180", waiting: 153 },
  { product: "Harbor overshirt", band: "Very high", score: 76, action: "Restock soon.", suggest: "110", waiting: 101 },
  { product: "Brass lamp", band: "Medium", score: 33, action: "Restock when convenient.", suggest: "15", waiting: 11 },
  { product: "Field cap", band: "Medium", score: 31, action: "No action needed.", suggest: "Not enough data yet", waiting: 6 },
  { product: "Canvas tote", band: "Low", score: 18, action: "No action needed.", suggest: "Covered by stock", waiting: 4 },
];

const pill = "inline-flex h-5 items-center rounded-full bg-[#0b2545]/8 px-2 text-[0.75rem] font-medium text-ink";

export const scenes = {
  "reorder-waitlists": {
    wide: true,
    alt: "Waitly’s Waitlists page for an example store, sorted by Waiting. Each size is its own row: Trail runner / 9 has 142 shoppers waiting, Harbor overshirt / M has 64 and Harbor overshirt / L has 29.",
    render: () => (
      <AdminFrame title="Waitlists">
        <Panel>
          <div className="relative overflow-x-auto">
            <table className="w-full min-w-[28rem] text-left text-[0.875rem]">
              <caption className="sr-only">Waitlists, example store</caption>
              <thead className="text-ink-soft">
                <tr className="border-b border-line">
                  <th scope="col" className="py-2 pr-3 font-medium">Waitlist</th>
                  <th scope="col" className="py-2 pr-3 text-right font-medium">Waiting</th>
                  <th scope="col" className="py-2 pr-3 text-right font-medium">Bought after alert</th>
                  <th scope="col" className="py-2 text-right font-medium">Last joined</th>
                </tr>
              </thead>
              <tbody className="tnum">
                {WAITLISTS.map((r) => (
                  <tr key={r.item} className="border-b border-line last:border-0">
                    <th scope="row" className="py-2.5 pr-3 font-medium">
                      <span className="mr-2">{r.item}</span>
                      <span className={pill}>{r.kind}</span>
                    </th>
                    <td className="py-2.5 pr-3 text-right font-semibold">{r.waiting}</td>
                    <td className="py-2.5 pr-3 text-right">{r.bought}</td>
                    <td className="py-2.5 text-right text-ink-soft">{r.joined}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
      </AdminFrame>
    ),
  },
  "reorder-score-card": {
    alt: "The Demand Score card on the waitlist for Harbor overshirt / M in an example store: Very high, 78 out of 100, “Restock soon.” Beside it, a Restock suggestion of 65 units marked Estimate, with its working: 16 waiting and likely to buy, 0 preordered, 45 sales in 30 days, 0 in stock, rounded up from 61.",
    render: () => (
      <AdminFrame title="Harbor overshirt / M">
        <div className="grid gap-2.5 sm:grid-cols-2">
          <Panel title="Demand Score" level="pro">
            <p className="flex items-baseline gap-2">
              <span className={pill}>Very high</span>
              <span className="font-display text-[1.75rem] leading-none font-bold tnum">78</span>
              <span className="text-[0.875rem] text-ink-soft">/ 100</span>
            </p>
            <p className="mt-2 font-semibold">Restock soon.</p>
            <DemandScoreScale score={78} />
            <p className="mt-4 text-[0.8125rem] text-ink-soft">What drives it</p>
            <ul className="mt-1 list-disc space-y-0.5 pl-5 text-[0.875rem] tnum">
              <li>64 waiting</li>
              <li>1.5 sold per day in stock</li>
              <li>2 restocks in 90 days</li>
            </ul>
          </Panel>
          <Panel title="Restock suggestion" level="pro">
            <p className="flex flex-wrap items-center gap-2">
              <span className="font-display text-[1.375rem] leading-tight font-bold tnum">Order 65 units</span>
              <span className={pill}>Estimate</span>
            </p>
            <dl className="mt-3 text-[0.875rem]">
              {WORKING.map((row) => (
                <div key={row.label} className="flex items-start justify-between gap-4 py-1.5">
                  <dt>
                    {row.label}
                    {row.note ? <span className="block text-[0.8125rem] text-ink-soft">{row.note}</span> : null}
                  </dt>
                  <dd className="shrink-0 tnum">{row.value}</dd>
                </div>
              ))}
              <div className="mt-1 flex items-start justify-between gap-4 border-t border-line pt-2.5 font-semibold">
                <dt>
                  Suggested
                  <span className="block text-[0.8125rem] font-normal text-ink-soft">Rounded up from 61</span>
                </dt>
                <dd className="shrink-0 tnum">65</dd>
              </div>
            </dl>
            <p className="mt-3 text-[0.8125rem] text-ink-soft">
              An estimate from what Waitly has seen. It is not a promise of sales.
            </p>
          </Panel>
        </div>
      </AdminFrame>
    ),
  },
  "reorder-planner": {
    wide: true,
    alt: "Waitly’s Restock planner for an example store, one row per product: Trail runner, Critical 91, “Restock now.”, suggested restock 180, 153 waiting. Harbor overshirt, Very high 76, suggested restock 110. One product reads “Not enough data yet” and one “Covered by stock”.",
    render: () => (
      <AdminFrame title="Restock planner">
        <Panel>
          <div className="relative overflow-x-auto">
            <table className="w-full min-w-[36rem] text-left text-[0.875rem]">
              <caption className="sr-only">Restock planner, example store</caption>
              <thead className="text-ink-soft">
                <tr className="border-b border-line">
                  <th scope="col" className="py-2 pr-3 font-medium">Product</th>
                  <th scope="col" className="py-2 pr-3 font-medium">Demand Score</th>
                  <th scope="col" className="py-2 pr-3 font-medium">What to do</th>
                  <th scope="col" className="py-2 pr-3 text-right font-medium">Suggested restock</th>
                  <th scope="col" className="py-2 text-right font-medium">Waiting</th>
                </tr>
              </thead>
              <tbody className="tnum">
                {PLANNER.map((r) => (
                  <tr key={r.product} className="border-b border-line last:border-0">
                    <th scope="row" className="py-2.5 pr-3 font-medium">{r.product}</th>
                    <td className="py-2.5 pr-3 whitespace-nowrap">
                      <span className={pill}>{r.band}</span> <span className="font-semibold">{r.score}</span>
                    </td>
                    <td className="py-2.5 pr-3">{r.action}</td>
                    <td
                      className={
                        /^\d/.test(r.suggest)
                          ? "py-2.5 pr-3 text-right font-semibold"
                          : "py-2.5 pr-3 text-right text-ink-soft"
                      }
                    >
                      {r.suggest}
                    </td>
                    <td className="py-2.5 text-right">{r.waiting}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[0.8125rem] text-ink-soft">Suggested restocks are estimates.</p>
        </Panel>
      </AdminFrame>
    ),
  },
} satisfies Record<string, Scene>;
