import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { AdminFrame, Panel } from "@/components/mocks/admin";
import { PoweredBy, ProductFrame } from "@/components/mocks/storefront";
import { PlanBadge } from "@/components/site/primitives";
import { cn } from "@/lib/utils";
import type { Scene } from "../scenes";

const SIZES = {
  label: "Size",
  value: "M",
  values: [{ name: "S" }, { name: "M" }, { name: "L" }, { name: "XL" }],
};

/** The merchant theme's own buy buttons. Waitly's Pre-order block never draws these. */
function ThemeButtons() {
  return (
    <div className="space-y-2">
      <p className="flex min-h-11 items-center justify-center rounded-md border border-[#1a1a1a] px-4 py-2 text-center text-[0.9375rem] leading-tight font-semibold">
        Add to cart
      </p>
      <p className="flex min-h-11 items-center justify-center rounded-md bg-[#1a1a1a] px-4 py-2 text-center text-[0.9375rem] leading-tight font-semibold text-white">
        Buy it now
      </p>
    </div>
  );
}

/**
 * The Pre-order block as the guide describes it: a badge and the fixed terms,
 * with no button of its own. The theme's buttons sit under it and buy the
 * preorder. `PreorderBlock` in `mocks/storefront.tsx` draws a button, so it
 * isn't used here.
 */
function PreorderPanel() {
  return (
    <div className="space-y-2 rounded-lg border border-[#e6e9ee] p-4">
      <span className="inline-flex h-6 items-center rounded-full bg-[#1a1a1a] px-2.5 text-[0.75rem] font-semibold text-white">
        Pre-order
      </span>
      <p className="text-[0.9375rem]">Pay in full today. This item ships later.</p>
      <p className="text-[0.875rem]">Cancel any time before it ships for a full refund.</p>
      <PoweredBy />
    </div>
  );
}

/** A plain white card in the mock bezel, for a piece of the Shopify admin. */
function ShopifyCard({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <figure className={cn("glass rounded-[1.75rem] p-2 sm:p-2.5", className)}>
      <div className="rounded-[1.25rem] bg-white p-5 text-[#1a1a1a] ring-1 ring-[#0b2545]/10">{children}</div>
    </figure>
  );
}

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

/** The mocks for the “continue-selling-when-out-of-stock” post. */
export const scenes = {
  "continue-plain-listing": {
    alt: "A product page for Harbor overshirt with size M selected and ordinary Add to cart and Buy it now buttons. Nothing on the page says the item ships later. Under it, the variant’s inventory in Shopify: 0 available, with Continue selling when out of stock ticked.",
    render: () => (
      <div className="space-y-2.5">
        <ProductFrame title="Harbor overshirt" price="$68.00" options={SIZES}>
          <ThemeButtons />
        </ProductFrame>
        <ShopifyCard>
          <p className="text-[0.8125rem] text-[#5c6570]">Harbor overshirt / M in your Shopify admin</p>
          <div className="mt-2 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 text-[0.9375rem]">
            <p>
              <span className="text-[#5c6570]">Available </span>
              <span className="font-semibold tnum">0</span>
            </p>
            <p className="flex items-start gap-2">
              <span
                aria-hidden="true"
                className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-[3px] bg-[#1a1a1a] text-white"
              >
                <Check className="size-3" />
              </span>
              Continue selling when out of stock
            </p>
          </div>
        </ShopifyCard>
      </div>
    ),
  },
  "continue-preorder-panel": {
    alt: "The same product page with Waitly’s Pre-order block above the buttons: a Pre-order badge, “Pay in full today. This item ships later.” and “Cancel any time before it ships for a full refund.” Under it are the theme’s own Add to cart and Buy it now buttons, with their usual labels.",
    render: () => (
      <ProductFrame title="Harbor overshirt" price="$68.00" options={SIZES}>
        <PreorderPanel />
        <ThemeButtons />
      </ProductFrame>
    ),
  },
  "continue-when-preorder-runs": {
    alt: "Waitly’s When preorder runs card for an example policy. “Whenever this policy is on” is selected, “Between these dates” carries a Growth badge, “Offer preorder only while a variant is sold out” is ticked, and Maximum units per product is set to 200. A Summary card reads “Full price, charged at checkout” and “Orders held until you release them”.",
    render: () => (
      <AdminFrame title="Preorders">
        <Panel title="When preorder runs">
          <div className="space-y-2.5 text-[0.9375rem]">
            <p className="flex items-start gap-2">
              <Tick round />
              Whenever this policy is on
            </p>
            <p className="flex items-start gap-2 text-ink-soft">
              <Tick round on={false} />
              <span>
                Between these dates <PlanBadge level="growth" className="ml-1 h-5 px-2 text-[0.75rem]" />
              </span>
            </p>
            <p className="flex items-start gap-2 border-t border-line pt-3">
              <Tick />
              Offer preorder only while a variant is sold out
            </p>
            <div className="border-t border-line pt-3">
              <p className="text-[0.8125rem] text-ink-soft">Maximum units per product</p>
              <p className="mt-1 flex h-10 w-full max-w-40 items-center rounded-md border border-ink/25 bg-white px-3 tnum">
                200
              </p>
            </div>
          </div>
        </Panel>
        <Panel title="Summary">
          <ul className="space-y-1 text-[0.9375rem] text-ink-soft">
            <li>Full price, charged at checkout</li>
            <li>Orders held until you release them</li>
          </ul>
        </Panel>
      </AdminFrame>
    ),
  },
  "continue-held-order": {
    alt: "A Shopify order for Harbor overshirt in size M, paid and marked On hold. The item carries a Pre-order label, the order is tagged waitly-preorder, and there is a Release hold button.",
    render: () => (
      <ShopifyCard>
        <div className="flex flex-wrap items-center gap-2">
          <p className="mr-auto font-semibold">Order #1054</p>
          <span className="inline-flex h-6 items-center gap-1 rounded-full bg-[#dcf5e4] px-2.5 text-[0.75rem] font-semibold text-[#14532d]">
            <Check aria-hidden="true" className="size-3" />
            Paid
          </span>
          <span className="inline-flex h-6 items-center rounded-full bg-[#fdeccb] px-2.5 text-[0.75rem] font-semibold text-[#6b4a00]">
            On hold
          </span>
        </div>
        <div className="mt-4 flex items-start justify-between gap-3 text-[0.9375rem]">
          <div>
            <p>Harbor overshirt / M</p>
            <p className="text-[0.8125rem] text-[#5c6570]">Pre-order</p>
          </div>
          <span className="font-semibold tnum">$68.00</span>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[#e6e9ee] pt-4">
          <p className="text-[0.8125rem] text-[#5c6570]">
            Tags{" "}
            <span className="ml-1 inline-flex h-6 items-center rounded-md bg-[#eef1f4] px-2 text-[#1a1a1a]">
              waitly-preorder
            </span>
          </p>
          <p className="inline-flex h-9 items-center rounded-md border border-[#c5ccd4] px-3 text-[0.875rem] font-semibold">
            Release hold
          </p>
        </div>
      </ShopifyCard>
    ),
  },
} satisfies Record<string, Scene>;
