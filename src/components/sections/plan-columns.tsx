import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { PLANS, formatCount } from "@/content/plans";
import { InstallLink } from "@/components/site/primitives";

/** The three plans side by side. Pro is smoked glass to mark it as the full kit. */
export function PlanColumns({ className }: { className?: string }) {
  return (
    <div className={cn("grid grid-cols-1 gap-4 lg:grid-cols-3", className)}>
      {PLANS.map((plan, i) => {
        const dark = plan.level === "pro";
        return (
          <div
            key={plan.level}
            className={cn(
              "flex flex-col rounded-[2rem] p-6 sm:p-8",
              dark ? "on-ink glass-smoke text-paper" : "glass text-ink",
            )}
          >
            <h3 className="text-d3 font-semibold tracking-[-0.02em]">{plan.name}</h3>
            <p className="mt-4 flex items-baseline gap-1.5">
              <span className="font-display text-[3.25rem] leading-none font-bold tracking-[-0.04em] tnum">
                ${plan.price}
              </span>
              <span className={dark ? "text-paper/70" : "text-ink-soft"}>
                {plan.price === 0 ? "forever" : "a month"}
              </span>
            </p>
            <p className={cn("mt-2 text-[0.9375rem]", dark ? "text-sky" : "text-ink-soft")}>
              {plan.trialDays ? `${plan.trialDays}-day free trial` : "No trial needed"}
            </p>
            <p className="mt-5 min-h-[3.2em]">{plan.pitch}</p>

            <dl
              className={cn(
                "mt-6 grid grid-cols-2 gap-4 border-y py-5 tnum",
                dark ? "border-paper/15" : "border-ink/10",
              )}
            >
              <div>
                <dt className={cn("text-[0.8125rem]", dark ? "text-paper/70" : "text-ink-soft")}>
                  Restock alerts a cycle
                </dt>
                <dd className="text-[1.375rem] font-bold">{formatCount(plan.alerts)}</dd>
              </div>
              <div>
                <dt className={cn("text-[0.8125rem]", dark ? "text-paper/70" : "text-ink-soft")}>
                  Preorders a cycle
                </dt>
                <dd className="text-[1.375rem] font-bold">{formatCount(plan.preorders)}</dd>
              </div>
            </dl>

            <p className="mt-6 text-[0.9375rem] font-semibold">
              {i === 0 ? "Includes" : `Everything in ${PLANS[i - 1].name}, plus`}
            </p>
            <ul className="mt-3 flex-1 space-y-2.5">
              {plan.adds.map((line) => (
                <li key={line} className="grid grid-cols-[1.25rem_minmax(0,1fr)] gap-2">
                  <Check aria-hidden="true" className={cn("mt-1 size-4", dark ? "text-signal" : "text-ink")} />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <InstallLink
              variant={dark ? "primary" : "quiet"}
              className="mt-8 w-full"
            >
              {plan.price === 0 ? "Install free" : `Start ${plan.name} trial`}
            </InstallLink>
          </div>
        );
      })}
    </div>
  );
}
