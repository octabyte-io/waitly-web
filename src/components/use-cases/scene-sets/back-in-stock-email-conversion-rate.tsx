import { AdminFrame, Figure, Panel } from "@/components/mocks/admin";
import { PlanBadge } from "@/components/site/primitives";
import type { Scene } from "../scenes";

const LOG = [
  { item: "Harbor overshirt / M", sent: "Oct 6", queued: 64, delivered: 63, bought: 17, rate: "27%" },
  { item: "Trail runner / 9", sent: "Sep 29", queued: 142, delivered: 139, bought: 31, rate: "22%" },
  { item: "Brass lamp", sent: "Sep 12", queued: 16, delivered: 16, bought: 5, rate: "31%" },
  { item: "Field cap / Olive", sent: "Aug 30", queued: 9, delivered: 9, bought: 0, rate: "0%" },
];

const ENDED = [
  { label: "Bought after alert", value: "53" },
  { label: "Bought anyway", value: "21" },
  { label: "Expired", value: "35" },
  { label: "Unsubscribed", value: "6" },
  { label: "Cannot be emailed", value: "2" },
  { label: "Removed by you", value: "1" },
];

const RULES = [
  { label: "Hold a restock alert for", value: "48", unit: "hours", range: "1 to 168 hours" },
  { label: "Alert one shopper at most", value: "3", unit: "alerts", range: "1 to 10 alerts" },
  { label: "Count a sale as recovered for", value: "7", unit: "days", range: "1 to 30 days" },
];

/** The mocks for the “back-in-stock-email-conversion-rate” post. */
export const scenes = {
  "rate-log": {
    wide: true,
    alt: "Waitly’s Restock alerts log for an example store, newest first. Harbor overshirt / M, sent Oct 6: 64 queued, 63 delivered, 17 bought, rate 27%. Trail runner / 9: 139 delivered, 31 bought, 22%. Brass lamp: 16 delivered, 5 bought, 31%. Field cap / Olive: 9 delivered, 0 bought, 0%.",
    render: () => (
      <AdminFrame title="Analytics">
        <Panel title="Restock alerts">
          <div className="relative overflow-x-auto">
            <table className="w-full min-w-[30rem] text-left text-[0.875rem]">
              <caption className="sr-only">Restock alerts, example store</caption>
              <thead className="text-ink-soft">
                <tr className="border-b border-line">
                  <th scope="col" className="py-2 pr-3 font-medium">Item</th>
                  <th scope="col" className="py-2 pr-3 font-medium">Status</th>
                  <th scope="col" className="py-2 pr-3 text-right font-medium">Queued</th>
                  <th scope="col" className="py-2 pr-3 text-right font-medium">Delivered</th>
                  <th scope="col" className="py-2 pr-3 text-right font-medium">Bought</th>
                  <th scope="col" className="py-2 text-right font-medium">Rate</th>
                </tr>
              </thead>
              <tbody className="tnum">
                {LOG.map((r) => (
                  <tr key={r.item} className="border-b border-line last:border-0">
                    <th scope="row" className="py-2.5 pr-3 font-medium">
                      {r.item}
                      <span className="block text-[0.8125rem] font-normal text-ink-soft">Sent {r.sent}</span>
                    </th>
                    <td className="py-2.5 pr-3 text-ink-soft">Complete</td>
                    <td className="py-2.5 pr-3 text-right">{r.queued}</td>
                    <td className="py-2.5 pr-3 text-right">{r.delivered}</td>
                    <td className="py-2.5 pr-3 text-right font-semibold">{r.bought}</td>
                    <td className="py-2.5 text-right">{r.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
      </AdminFrame>
    ),
  },
  "rate-settings": {
    alt: "The Notifications group in Waitly Settings for an example store: Hold a restock alert for 48 hours, Alert one shopper at most 3 alerts, and Count a sale as recovered for 7 days, each with its allowed range under it.",
    render: () => (
      <AdminFrame title="Settings">
        <Panel title="Notifications">
          <div className="space-y-4">
            {RULES.map((r) => (
              <div key={r.label}>
                <p className="text-[0.8125rem] text-ink-soft">{r.label}</p>
                <p className="mt-1 flex h-10 w-full items-center justify-between rounded-md border border-ink/25 bg-white px-3 tnum">
                  {r.value}
                  <span className="text-ink-soft">{r.unit}</span>
                </p>
                <p className="mt-1 text-[0.8125rem] text-ink-soft">{r.range}</p>
              </div>
            ))}
          </div>
        </Panel>
      </AdminFrame>
    ),
  },
  "rate-results": {
    alt: "The Results section of Waitly’s Analytics page for an example store: Recovered revenue of $3,412.50 USD, and How the demand ended: 53 bought after alert, 21 bought anyway, 35 expired, 6 unsubscribed, 2 cannot be emailed and 1 removed by you.",
    render: () => (
      <AdminFrame title="Analytics">
        <Panel>
          <p className="mb-3 flex items-center gap-2 text-[0.9375rem] font-semibold">
            Results
            <PlanBadge level="growth" className="h-5 px-2 text-[0.75rem]" />
          </p>
          <Figure label="Recovered revenue" value="$3,412.50 USD" note="All time, across your whole shop." />
          <p className="mt-4 text-[0.8125rem] text-ink-soft">How the demand ended</p>
          <dl className="mt-2 grid grid-cols-2 gap-x-4 gap-y-2 text-[0.875rem] sm:grid-cols-3">
            {ENDED.map((e) => (
              <div key={e.label}>
                <dt className="text-ink-soft">{e.label}</dt>
                <dd className="font-semibold tnum">{e.value}</dd>
              </div>
            ))}
          </dl>
        </Panel>
      </AdminFrame>
    ),
  },
} satisfies Record<string, Scene>;
