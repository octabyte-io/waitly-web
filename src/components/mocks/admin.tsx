import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { PlanBadge } from "@/components/site/primitives";
import type { Level } from "@/content/plans";

/**
 * Mocks of Waitly's admin screens. Figures are an example store's, labelled
 * as such where they appear.
 */

export function AdminFrame({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <figure className={cn("glass rounded-[1.75rem] p-2 text-ink sm:p-2.5", className)}>
      <div className="flex items-center justify-between gap-3 px-3.5 pt-2 pb-3 sm:px-4">
        <p className="font-semibold">{title}</p>
        <p className="text-[0.8125rem] text-ink-soft">Example store</p>
      </div>
      <div className="space-y-2.5">{children}</div>
    </figure>
  );
}

export function Panel({
  title,
  level,
  children,
  className,
}: {
  title?: string;
  level?: Level;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("rounded-[1.25rem] bg-white/85 p-4 ring-1 ring-[#0b2545]/8", className)}>
      {title ? (
        <p className="mb-3 flex items-center gap-2 text-[0.9375rem] font-semibold">
          {title}
          {level ? <PlanBadge level={level} className="h-5 px-2 text-[0.75rem]" /> : null}
        </p>
      ) : null}
      {children}
    </div>
  );
}

export function Figure({ label, value, note }: { label: string; value: string; note?: string }) {
  return (
    <div>
      <p className="text-[0.8125rem] text-ink-soft">{label}</p>
      <p className="font-display text-[1.75rem] font-bold leading-tight tracking-[-0.02em] tnum">{value}</p>
      {note ? <p className="text-[0.8125rem] text-ink-soft">{note}</p> : null}
    </div>
  );
}

/** A single-series trend line: open demand over 30 days. */
export function TrendLine({ className }: { className?: string }) {
  const points = [12, 14, 13, 17, 22, 21, 26, 31, 29, 34, 38, 36, 41, 47, 52, 50, 58, 63, 61, 68];
  const w = 300;
  const h = 90;
  const max = 70;
  const step = w / (points.length - 1);
  const path = points
    .map((p, i) => `${i === 0 ? "M" : "L"}${(i * step).toFixed(1)} ${(h - (p / max) * h).toFixed(1)}`)
    .join(" ");
  const last = points[points.length - 1];
  return (
    <svg
      viewBox={`0 0 ${w} ${h + 18}`}
      role="img"
      aria-label={`Open demand rising from ${points[0]} to ${last} shoppers over 30 days`}
      className={cn("w-full overflow-visible", className)}
    >
      {[0, 0.5, 1].map((t) => (
        <line key={t} x1="0" x2={w} y1={h * t} y2={h * t} stroke="var(--line)" strokeWidth="1" />
      ))}
      <path d={path} fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx={w} cy={h - (last / max) * h} r="4" fill="var(--ink)" stroke="var(--paper)" strokeWidth="2" />
      <text x="0" y={h + 15} fontSize="11" fill="var(--ink-soft)">30 days ago</text>
      <text x={w} y={h + 15} fontSize="11" fill="var(--ink-soft)" textAnchor="end">Today</text>
    </svg>
  );
}

export const DEMAND_BANDS = [
  { name: "Low", from: 0, to: 29 },
  { name: "Medium", from: 30, to: 49 },
  { name: "High", from: 50, to: 69 },
  { name: "Very high", from: 70, to: 84 },
  { name: "Critical", from: 85, to: 100 },
] as const;

/** The Demand Score scale: one hue, light to dark, with the example score marked. */
export function DemandScoreScale({ score = 78, className }: { score?: number; className?: string }) {
  const shades = ["#dcecfb", "#a9cdee", "#6f9ccb", "#3d6592", "#0b2545"];
  const band = DEMAND_BANDS.find((b) => score >= b.from && score <= b.to)!;
  return (
    <div className={cn("w-full pt-6", className)}>
      <div className="relative">
        <div
          className="grid h-9 gap-[2px] overflow-hidden rounded-[4px]"
          style={{ gridTemplateColumns: DEMAND_BANDS.map((b) => `${b.to - b.from + 1}fr`).join(" ") }}
          aria-hidden="true"
        >
          {DEMAND_BANDS.map((b, i) => (
            <span key={b.name} style={{ background: shades[i] }} />
          ))}
        </div>
        <span
          aria-hidden="true"
          className="absolute -top-2 -bottom-2 w-[3px] rounded-full bg-signal ring-2 ring-paper"
          style={{ left: `calc(${score}% - 1.5px)` }}
        >
          <span className="absolute -top-7 left-1/2 -translate-x-1/2 rounded-full bg-signal px-2 py-0.5 text-[0.75rem] font-bold text-ink tnum">
            {score}
          </span>
        </span>
      </div>
      <ol
        className="mt-3 grid gap-[2px] text-[0.8125rem]"
        style={{ gridTemplateColumns: DEMAND_BANDS.map((b) => `${b.to - b.from + 1}fr`).join(" ") }}
      >
        {DEMAND_BANDS.map((b) => (
          <li key={b.name} className="min-w-0">
            <span className="block truncate font-semibold">{b.name}</span>
            <span className="block text-ink-soft tnum">{b.from}+</span>
          </li>
        ))}
      </ol>
      <p className="sr-only">
        Example score {score}, in the {band.name} band.
      </p>
    </div>
  );
}

/**
 * The Restock alerts log on Analytics: one row per alert, with a count in each
 * column. Bought and Rate are on Growth and Pro; Rate is bought ÷ delivered.
 */
export function SendLogMock() {
  const rows = [
    { item: "Harbor overshirt / M", sent: "Today", queued: 24, delivered: 24, bought: 12, rate: "50%" },
    { item: "Trail runner / 9", sent: "Yesterday", queued: 120, delivered: 118, bought: 31, rate: "26%" },
    { item: "Brass lamp", sent: "Mar 2", queued: 16, delivered: 16, bought: 5, rate: "31%" },
  ];
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full min-w-[28rem] text-left text-[0.875rem]">
        <caption className="sr-only">Restock alerts, example store</caption>
        <thead className="text-ink-soft">
          <tr className="border-b border-line">
            <th scope="col" className="py-2 pr-3 font-medium">Item</th>
            <th scope="col" className="py-2 pr-3 text-right font-medium">Queued</th>
            <th scope="col" className="py-2 pr-3 text-right font-medium">Delivered</th>
            <th scope="col" className="py-2 pr-3 text-right font-medium">Bought</th>
            <th scope="col" className="py-2 text-right font-medium">Rate</th>
          </tr>
        </thead>
        <tbody className="tnum">
          {rows.map((r) => (
            <tr key={r.item} className="border-b border-line last:border-0">
              <th scope="row" className="py-2.5 pr-3 font-medium">
                {r.item}
                <span className="block text-[0.8125rem] font-normal text-ink-soft">Sent {r.sent}</span>
              </th>
              <td className="py-2.5 pr-3 text-right">{r.queued}</td>
              <td className="py-2.5 pr-3 text-right">{r.delivered}</td>
              <td className="py-2.5 pr-3 text-right font-semibold">{r.bought}</td>
              <td className="py-2.5 text-right">{r.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const PLANNER = [
  { product: "Trail runner", band: "Critical", score: 91, action: "Restock now.", suggest: "180", waiting: 153 },
  { product: "Harbor overshirt", band: "Very high", score: 76, action: "Restock soon.", suggest: "110", waiting: 101 },
  { product: "Brass lamp", band: "Medium", score: 33, action: "Restock when convenient.", suggest: "15", waiting: 11 },
  { product: "Field cap", band: "Medium", score: 31, action: "No action needed.", suggest: "Not enough data yet", waiting: 6 },
  { product: "Canvas tote", band: "Low", score: 18, action: "No action needed.", suggest: "Covered by stock", waiting: 4 },
];

/** The restock planner: one row per product, never per variant. */
export function RestockPlannerMock() {
  return (
    <>
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
                  <span className="inline-flex h-5 items-center rounded-full bg-[#0b2545]/8 px-2 text-[0.75rem] font-medium text-ink">
                    {r.band}
                  </span>{" "}
                  <span className="font-semibold">{r.score}</span>
                </td>
                <td className="py-2.5 pr-3">{r.action}</td>
                <td
                  className={cn(
                    "py-2.5 pr-3 text-right",
                    /^\d/.test(r.suggest) ? "font-semibold" : "text-ink-soft",
                  )}
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
    </>
  );
}

/** A Shopify admin order, as the merchant sees it after a Waitly alert. */
export function OrderCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-[1.25rem] bg-white p-4 text-[#1a1a1a] shadow-[0_24px_60px_-28px_rgb(11_37_69/0.55)] ring-1 ring-[#0b2545]/10",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="font-semibold">Order #1042</p>
        <span className="inline-flex h-6 items-center gap-1 rounded-full bg-[#dcf5e4] px-2.5 text-[0.75rem] font-semibold text-[#14532d]">
          <Check aria-hidden="true" className="size-3" />
          Paid
        </span>
      </div>
      <div className="mt-3 flex items-center justify-between gap-3 text-[0.9375rem]">
        <span className="text-[#5c6570]">Harbor overshirt / M</span>
        <span className="font-semibold tnum">$68.00</span>
      </div>
      <p className="mt-3 flex items-center gap-2 border-t border-[#e6e9ee] pt-3 text-[0.8125rem] text-[#5c6570]">
        <span aria-hidden="true" className="size-2.5 rounded-full bg-signal" />
        Bought 4 minutes after a Waitly alert
      </p>
    </div>
  );
}
