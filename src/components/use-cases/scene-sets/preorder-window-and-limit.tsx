import { Check } from "lucide-react";
import { AdminFrame, Panel } from "@/components/mocks/admin";
import { PreorderBlock, ProductFrame, ThemeBuyButtons } from "@/components/mocks/storefront";
import { PlanBadge } from "@/components/site/primitives";
import { cn } from "@/lib/utils";
import type { Scene } from "../scenes";

const SIZES = {
  label: "Size",
  value: "M",
  values: [{ name: "S" }, { name: "M" }, { name: "L" }, { name: "XL" }],
};

function Tick({ on = true, round = false }: { on?: boolean; round?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "mt-0.5 flex size-4 shrink-0 items-center justify-center border",
        round ? "rounded-full" : "rounded-[3px]",
        on ? "border-ink bg-ink text-white" : "border-ink-soft/60",
      )}
    >
      {on ? round ? <span className="size-1.5 rounded-full bg-white" /> : <Check className="size-3" /> : null}
    </span>
  );
}

/** A filled admin field with its label above. */
function Field({ label, value, className }: { label: string; value: string; className?: string }) {
  return (
    <div className={className}>
      <p className="text-[0.8125rem] text-ink-soft">{label}</p>
      <p className="mt-1 flex h-10 w-full items-center rounded-md border border-ink/25 bg-white px-3 tnum">{value}</p>
    </div>
  );
}

/** The mocks for the “preorder-window-and-limit” post. */
export const scenes = {
  "window-dates": {
    alt: "Waitly’s When preorder runs card for an example policy. “Between these dates” is selected, with a Growth badge. Opens on October 15, 2026 at 09:00 and closes on October 31, 2026 at 23:59, 24-hour, New York Time. Under the card: “This policy is on, and opens on October 15 at 09:00 (America/New_York).”",
    render: () => (
      <AdminFrame title="Preorders">
        <Panel title="When preorder runs">
          <div className="space-y-3 text-[0.9375rem]">
            <p className="flex items-start gap-2 text-ink-soft">
              <Tick round on={false} />
              Whenever this policy is on
            </p>
            <p className="flex items-start gap-2">
              <Tick round />
              <span>
                Between these dates <PlanBadge level="growth" className="ml-1 h-5 px-2 text-[0.75rem]" />
              </span>
            </p>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Opens on" value="2026-10-15" />
              <Field label="Opens at" value="09:00" />
              <Field label="Closes on" value="2026-10-31" />
              <Field label="Closes at" value="23:59" />
            </div>
            <p className="text-[0.8125rem] text-ink-soft">24-hour, New York Time</p>
          </div>
        </Panel>
        <Panel>
          <p className="text-[0.9375rem]">This policy is on, and opens on October 15 at 09:00 (America/New_York).</p>
        </Panel>
      </AdminFrame>
    ),
  },
  "window-limit-reached": {
    alt: "The same card further down: “Offer preorder only while a variant is sold out” is ticked and Maximum units per product is 150. Under the field: “Harbor overshirt reached 150 units, so it no longer offers preorder.” Below, the policy in the Preorders list: Fall drop, Status On, with “Limit reached on 1 of 3 products” under it.",
    render: () => (
      <AdminFrame title="Preorders">
        <Panel title="When preorder runs">
          <div className="space-y-3 text-[0.9375rem]">
            <p className="flex items-start gap-2">
              <Tick />
              Offer preorder only while a variant is sold out
            </p>
            <div className="border-t border-line pt-3">
              <Field label="Maximum units per product" value="150" className="max-w-48" />
              <p className="mt-2 text-[0.8125rem] text-ink-soft">
                Harbor overshirt reached 150 units, so it no longer offers preorder.
              </p>
            </div>
          </div>
        </Panel>
        <Panel>
          <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 gap-y-1 text-[0.9375rem]">
            <p className="text-[0.8125rem] text-ink-soft">Name</p>
            <p className="text-[0.8125rem] text-ink-soft">Status</p>
            <p className="font-semibold">Fall drop</p>
            <div>
              <span className="inline-flex h-6 items-center rounded-full bg-[#dcf5e4] px-2.5 text-[0.75rem] font-semibold text-[#14532d]">
                On
              </span>
              <p className="mt-1 text-[0.8125rem] text-ink-soft">Limit reached on 1 of 3 products</p>
            </div>
          </div>
        </Panel>
      </AdminFrame>
    ),
  },
  "window-preorder-page": {
    alt: "A product page for Harbor overshirt with Waitly’s Pre-order block above the theme’s Add to cart and Buy it now buttons: a Pre-order badge, “Pay in full today. Ships around November 20, 2026.”, “Cancel any time before it ships for a full refund.” and the store’s message, “One run of 150, cut and sewn in November. Preorder closes October 31.”",
    render: () => (
      <ProductFrame title="Harbor overshirt" price="$68.00" options={SIZES}>
        <PreorderBlock
          fact="Pay in full today. Ships around November 20, 2026."
          message="One run of 150, cut and sewn in November. Preorder closes October 31."
        />
        <ThemeBuyButtons />
      </ProductFrame>
    ),
  },
} satisfies Record<string, Scene>;
