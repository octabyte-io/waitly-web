import type { ReactNode } from "react";
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
    <figure
      className={cn(
        "overflow-hidden rounded-2xl border border-line bg-[#f4f7fa] text-ink shadow-[0_24px_48px_-28px_rgba(11,37,69,0.45)]",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3 border-b border-line bg-paper px-5 py-3">
        <p className="font-semibold">{title}</p>
        <p className="text-[0.8125rem] text-ink-soft">Example store</p>
      </div>
      <div className="space-y-3 p-3 sm:p-4">{children}</div>
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
    <div className={cn("rounded-xl border border-line bg-paper p-4", className)}>
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

export function SendLogMock() {
  const rows = [
    { item: "Harbor overshirt / M", when: "Today", sent: 24, delivered: 24, bought: 12 },
    { item: "Trail runner / 9", when: "Yesterday", sent: 120, delivered: 118, bought: 31 },
    { item: "Brass lamp", when: "Mar 2", sent: 16, delivered: 16, bought: 5 },
  ];
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full min-w-[26rem] text-left text-[0.875rem]">
        <caption className="sr-only">Send log, example store</caption>
        <thead className="text-ink-soft">
          <tr className="border-b border-line">
            <th scope="col" className="py-2 pr-3 font-medium">Restock</th>
            <th scope="col" className="py-2 pr-3 text-right font-medium">Sent</th>
            <th scope="col" className="py-2 pr-3 text-right font-medium">Delivered</th>
            <th scope="col" className="py-2 text-right font-medium">Bought</th>
          </tr>
        </thead>
        <tbody className="tnum">
          {rows.map((r) => (
            <tr key={r.item} className="border-b border-line last:border-0">
              <th scope="row" className="py-2.5 pr-3 font-medium">
                {r.item}
                <span className="block text-[0.8125rem] font-normal text-ink-soft">{r.when}</span>
              </th>
              <td className="py-2.5 pr-3 text-right">{r.sent}</td>
              <td className="py-2.5 pr-3 text-right">{r.delivered}</td>
              <td className="py-2.5 text-right font-semibold">{r.bought}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function RestockPlannerMock() {
  const rows = [
    { item: "Trail runner / 9", score: 91, band: "Critical", waiting: 142, suggest: 180 },
    { item: "Harbor overshirt / M", score: 78, band: "Very high", waiting: 64, suggest: 70 },
    { item: "Harbor overshirt / L", score: 55, band: "High", waiting: 29, suggest: 35 },
    { item: "Brass lamp", score: 33, band: "Medium", waiting: 11, suggest: 15 },
  ];
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full min-w-[30rem] text-left text-[0.875rem]">
        <caption className="sr-only">Restock planner, example store</caption>
        <thead className="text-ink-soft">
          <tr className="border-b border-line">
            <th scope="col" className="py-2 pr-3 font-medium">Variant</th>
            <th scope="col" className="py-2 pr-3 font-medium">Demand Score</th>
            <th scope="col" className="py-2 pr-3 text-right font-medium">Waiting</th>
            <th scope="col" className="py-2 text-right font-medium">Suggested restock</th>
          </tr>
        </thead>
        <tbody className="tnum">
          {rows.map((r) => (
            <tr key={r.item} className="border-b border-line last:border-0">
              <th scope="row" className="py-2.5 pr-3 font-medium">{r.item}</th>
              <td className="py-2.5 pr-3">
                <span className="font-semibold">{r.score}</span>{" "}
                <span className="text-ink-soft">{r.band}</span>
              </td>
              <td className="py-2.5 pr-3 text-right">{r.waiting}</td>
              <td className="py-2.5 text-right font-semibold">about {r.suggest}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
