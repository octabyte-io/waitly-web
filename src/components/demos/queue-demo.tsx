"use client";

import { useEffect, useMemo } from "react";
import { RotateCcw } from "lucide-react";
import { NotifyMeBlock, ProductFrame } from "@/components/mocks/storefront";
import { DotLegend, DotQueue } from "./dot-queue";
import { inBatches, tally } from "./queue-engine";
import { useFrames } from "./use-frames";

const SHOPPERS = 48;
const UNITS = 12;
const PRICE = 68;
const RESTOCK_LIGHT =
  "inset 0 1px 0 rgb(191 227 255 / 0.28), 0 0 0 1px rgb(255 107 53 / 0.5), 0 20px 110px 14px rgb(255 107 53 / 0.6)";

/**
 * The home page's one orchestrated moment: a sold-out variant, its waitlist,
 * and a restock released in batches until it sells out again. Plays once.
 */
export function QueueDemo() {
  const frames = useMemo(() => inBatches(SHOPPERS, UNITS, 8), []);
  const { frame, index, done, playing, play, reduced } = useFrames(frames, 1250);

  useEffect(() => {
    if (reduced) {
      play();
      return;
    }
    const start = window.setTimeout(play, 900);
    return () => window.clearTimeout(start);
    // Play once on arrival.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced]);

  const t = tally(frame.states);
  const stock =
    index === 0 ? "Sold out" : t.bought >= UNITS ? "Sold out again" : `${UNITS - t.bought} in stock`;

  return (
    <div className="relative">
      <ProductFrame
        title="Harbor overshirt"
        price="$68.00"
        options={{
          label: "Size",
          value: "M",
          values: [{ name: "S" }, { name: "M", soldOut: true }, { name: "L" }, { name: "XL", soldOut: true }],
        }}
        className="max-w-[34rem] lg:mr-10"
      >
        <NotifyMeBlock />
      </ProductFrame>

      {/* The restock light: the waitlist glows when stock comes back, and stays lit while it sells. */}
      <div
        className="on-ink glass-smoke relative z-10 -mt-6 ml-4 max-w-[31rem] rounded-[1.75rem] p-5 text-paper transition-shadow duration-[1600ms] ease-out sm:ml-12 sm:p-6"
        style={index === 0 ? undefined : { boxShadow: RESTOCK_LIGHT }}
      >
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <p className="font-semibold">Waitlist for Harbor overshirt / M</p>
          <p className="flex gap-3 text-[0.9375rem] tnum">
            <span className="text-paper/70">{frame.when}</span>
            <span className="font-semibold text-sky">{stock}</span>
          </p>
        </div>

        <DotQueue
          states={frame.states}
          columns={12}
          tone="dark"
          className="mt-5"
          label={`${SHOPPERS} shoppers in line: ${t.bought} bought, ${t.alerted} emailed, ${t.waiting} still waiting.`}
        />

        <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-paper/15 pt-4">
          <div>
            <dt className="text-[0.8125rem] text-paper/70">Emailed</dt>
            <dd className="font-display text-[1.5rem] font-bold tnum">{t.alerted + t.bought}</dd>
          </div>
          <div>
            <dt className="text-[0.8125rem] text-paper/70">Bought</dt>
            <dd className="font-display text-[1.5rem] font-bold tnum">{t.bought}</dd>
          </div>
          <div>
            <dt className="text-[0.8125rem] text-paper/70">Recovered</dt>
            <dd className="font-display text-[1.5rem] font-bold text-signal tnum">
              ${(t.bought * PRICE).toLocaleString("en-US")}
            </dd>
          </div>
        </dl>

        <p className="mt-4 min-h-[3rem] text-[0.9375rem] text-paper/85" aria-live="polite">
          {frame.caption}
        </p>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
          <DotLegend tone="dark" states={["waiting", "alerted", "bought"]} className="text-paper/80" />
          {done && !playing && !reduced ? (
            <button
              type="button"
              onClick={play}
              className="inline-flex h-9 items-center gap-1.5 rounded-full px-3 text-[0.9375rem] font-semibold text-sky hover:bg-paper/10"
            >
              <RotateCcw aria-hidden="true" className="size-4" />
              Replay
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
