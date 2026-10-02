"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { ProductArt } from "@/components/mocks/storefront";
import { useReducedMotion } from "@/components/demos/use-frames";
import { OrderCard } from "@/components/mocks/admin";

const DOT_AT = ["left-[16.66%]", "left-1/2", "left-[83.33%]"];

/**
 * The home page's one orchestrated moment: the whole loop in three panels,
 * read left to right. The orange dot is the shopper (the brand's "this
 * shopper, now") walking through it once.
 */
export function HeroSteps({ className }: { className?: string }) {
  const reduced = useReducedMotion();
  const [at, setAt] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const timers = [1400, 2800].map((ms, i) => window.setTimeout(() => setAt(i + 1), ms));
    return () => timers.forEach(window.clearTimeout);
  }, [reduced]);

  const current = reduced ? 2 : at;

  return (
    <div className={cn("relative", className)}>
      {/* The shopper's path, above the panels on large screens. */}
      <div aria-hidden="true" className="relative mb-6 hidden h-6 lg:block">
        <span className="absolute inset-x-[16.66%] top-1/2 h-0.5 -translate-y-1/2 bg-[repeating-linear-gradient(90deg,var(--ink)_0_6px,transparent_6px_14px)] opacity-25" />
        {DOT_AT.map((pos, i) => (
          <span
            key={pos}
            className={cn("absolute top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink/25", pos)}
            style={{ opacity: i <= current ? 0 : 1 }}
          />
        ))}
        <span
          className={cn(
            "absolute top-1/2 size-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal shadow-[0_0_0_6px_rgb(255_107_53/0.2)] transition-[left] duration-1000 ease-in-out",
            DOT_AT[current],
          )}
        />
      </div>

      <ol className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
        <Panel active={current === 0} title="A shopper finds their size sold out and taps Notify me.">
          <div className="overflow-hidden rounded-[1rem] bg-white text-[#1a1a1a] ring-1 ring-[#0b2545]/10">
            <ProductArt className="aspect-[16/7]" />
            <div className="space-y-2.5 p-4">
              <div className="flex items-baseline justify-between gap-3">
                <p className="font-semibold">Harbor overshirt</p>
                <p className="text-[0.875rem] text-[#5c6570] tnum">$68.00</p>
              </div>
              <p className="text-[0.8125rem] text-[#5c6570]">
                Size M is <span className="text-[#b42318]">sold out</span>
              </p>
              <p className="flex h-9 items-center rounded-md border border-[#c5ccd4] px-3 text-[0.875rem] text-[#9aa2ab]">
                you@example.com
              </p>
              <p className="flex items-start gap-2 text-[0.8125rem]">
                <span aria-hidden="true" className="mt-0.5 flex size-3.5 shrink-0 items-center justify-center rounded-[3px] bg-[#1a1a1a] text-white">
                  <Check className="size-2.5" />
                </span>
                Email me once when this is back in stock.
              </p>
              <p className="flex h-10 items-center justify-center rounded-md bg-[#1a1a1a] text-[0.875rem] font-semibold text-white">
                Notify me when available
              </p>
            </div>
          </div>
        </Panel>

        <Panel active={current === 1} title="You restock. Waitly emails everyone who asked, in order.">
          <div className="overflow-hidden rounded-[1rem] bg-white text-[#1f2328] ring-1 ring-[#0b2545]/10">
            <div className="border-b border-[#e6e9ee] bg-[#f6f8fa] px-4 py-2.5 text-[0.8125rem]">
              <span className="text-[#6b7280]">From </span>
              <span className="font-semibold">Harbor Supply</span>
            </div>
            <div className="h-1.5 bg-[#2f5d50]" />
            <div className="space-y-2.5 p-4">
              <p className="text-[1.125rem] font-bold leading-tight">Harbor overshirt is back</p>
              <p className="text-[0.9375rem] text-[#5c6570]">
                Harbor overshirt / M is available again at Harbor Supply. You were number 3 in line for
                this one.
              </p>
              <p className="inline-flex h-10 items-center rounded-md bg-[#2f5d50] px-4 text-[0.875rem] font-semibold text-white">
                Buy it now
              </p>
            </div>
          </div>
        </Panel>

        <Panel active={current === 2} title="They come back and buy. You see what the waitlist earned.">
          <div className="space-y-3">
            <OrderCard className="shadow-none" />
            <div className="rounded-[1rem] bg-white/80 p-4 ring-1 ring-[#0b2545]/8">
              <p className="text-[0.8125rem] text-ink-soft">Recovered revenue</p>
              <p className="font-display text-[1.75rem] font-bold leading-tight tracking-[-0.02em] tnum">$4,912</p>
            </div>
          </div>
        </Panel>
      </ol>
    </div>
  );
}

function Panel({ active, title, children }: { active: boolean; title: string; children: ReactNode }) {
  return (
    <li
      className={cn(
        "glass flex flex-col gap-4 rounded-[1.75rem] p-3 transition-transform duration-700 sm:p-4",
        active && "lg:-translate-y-2",
      )}
    >
      <p className="px-1 pt-1 font-display text-[1.125rem] font-bold leading-snug tracking-[-0.01em] text-balance">
        {title}
      </p>
      <div>{children}</div>
    </li>
  );
}
