import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { AdminFrame, Panel } from "@/components/mocks/admin";
import { PreorderBlock, ProductFrame, ThemeBuyButtons } from "@/components/mocks/storefront";
import { cn } from "@/lib/utils";
import type { Scene } from "../scenes";

/**
 * The mocks for the “made-to-order-production-time” post.
 *
 * Wording follows the app: the block's `fact_after_weeks` in
 * `extensions/waitly-storefront/locales/en.default.json`, the editor's fields in
 * `routes/app.preorders.$policyId/ShopperWords.tsx`, and the Ships column's
 * words from `shipEstimateWords` in `domain/preorder/ship-estimate.ts`.
 */

const COLORS = {
  label: "Color",
  value: "Tan",
  values: [{ name: "Tan" }, { name: "Black" }, { name: "Olive" }],
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

function Badge({ shipped = false, children }: { shipped?: boolean; children: ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex h-6 items-center rounded-full px-2.5 text-[0.75rem] font-semibold whitespace-nowrap",
        shipped ? "bg-[#dcf5e4] text-[#14532d]" : "bg-[#eef1f4] text-ink",
      )}
    >
      {children}
    </span>
  );
}

const ROWS = [
  { order: "#1088", placed: "Oct 17", item: "Field tote / Olive", status: "Waiting" },
  { order: "#1085", placed: "Oct 14", item: "Field tote / Tan", status: "Waiting" },
  { order: "#1079", placed: "Oct 6", item: "Field tote / Black", status: "Waiting" },
  { order: "#1071", placed: "Sep 29", item: "Field tote / Tan", status: "Shipped" },
];

export const scenes = {
  "mto-product-page": {
    alt: "A product page for Field tote in Tan with Waitly’s Pre-order block above the theme’s Add to cart and Buy it now buttons: a Pre-order badge, “Pay in full today. Ships 3–4 weeks after you order.”, “Cancel any time before it ships for a full refund.” and the store’s message, “Each tote is cut and stitched by hand after you order.”",
    render: () => (
      <ProductFrame title="Field tote" price="$140.00" art="bag" options={COLORS}>
        <PreorderBlock
          fact="Pay in full today. Ships 3–4 weeks after you order."
          message="Each tote is cut and stitched by hand after you order."
        />
        <ThemeBuyButtons />
      </ProductFrame>
    ),
  },
  "mto-policy-settings": {
    alt: "Two cards from a Waitly preorder policy. When preorder runs: “Whenever this policy is on” is selected and “Offer preorder only while a variant is sold out” is ticked. What shoppers see, with a Growth badge: the Message “Each tote is cut and stitched by hand after you order.”, Ship estimate “A time after the order”, From 3, To (optional) 4, Unit “weeks after the order”.",
    render: () => (
      <AdminFrame title="Made to order">
        <Panel title="When preorder runs">
          <div className="space-y-3 text-[0.9375rem]">
            <p className="flex items-start gap-2">
              <Tick round />
              Whenever this policy is on
            </p>
            <p className="flex items-start gap-2 text-ink-soft">
              <Tick round on={false} />
              Between these dates
            </p>
            <p className="flex items-start gap-2 border-t border-line pt-3">
              <Tick />
              Offer preorder only while a variant is sold out
            </p>
          </div>
        </Panel>
        <Panel title="What shoppers see" level="growth">
          <div className="space-y-3 text-[0.9375rem]">
            <Field label="Message" value="Each tote is cut and stitched by hand after you order." />
            <Field label="Ship estimate" value="A time after the order" />
            <div className="grid grid-cols-3 gap-3">
              <Field label="From" value="3" />
              <Field label="To (optional)" value="4" />
              <Field label="Unit" value="weeks after the order" className="col-span-3 sm:col-span-1" />
            </div>
          </div>
        </Panel>
      </AdminFrame>
    ),
  },
  "mto-preorders-list": {
    wide: true,
    alt: "Waitly’s Preorders list for an example store. Four orders of Field tote, placed between Sep 29 and Oct 17. Each row’s Ships column reads “3–4 weeks after order”. Three are Waiting and the oldest is Shipped.",
    render: () => (
      <AdminFrame title="Preorders">
        <Panel>
          <div className="relative overflow-x-auto">
            <table className="w-full min-w-[30rem] text-left text-[0.875rem]">
              <caption className="sr-only">Preorders, example store</caption>
              <thead className="text-ink-soft">
                <tr className="border-b border-line">
                  <th scope="col" className="py-2 pr-3 font-medium">Order</th>
                  <th scope="col" className="py-2 pr-3 font-medium">Product</th>
                  <th scope="col" className="py-2 pr-3 font-medium">Ships</th>
                  <th scope="col" className="py-2 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr key={row.order} className="border-b border-line align-top last:border-0">
                    <th scope="row" className="py-2.5 pr-3 font-medium tnum">
                      {row.order}
                      <span className="block text-[0.8125rem] font-normal text-ink-soft">{row.placed}</span>
                    </th>
                    <td className="py-2.5 pr-3">{row.item}</td>
                    <td className="py-2.5 pr-3 tnum">3–4 weeks after order</td>
                    <td className="py-2.5">
                      <Badge shipped={row.status === "Shipped"}>{row.status}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
      </AdminFrame>
    ),
  },
} satisfies Record<string, Scene>;
