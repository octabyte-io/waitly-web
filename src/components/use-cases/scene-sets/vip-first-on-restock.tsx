import type { ReactNode } from "react";
import { AdminFrame, Panel } from "@/components/mocks/admin";
import { cn } from "@/lib/utils";
import type { Scene } from "../scenes";

/**
 * The mocks for the “vip-first-on-restock” post.
 *
 * Same example store and item as “restock-sells-out-before-waitlist”, so that
 * post's held-unit email can stand in this one. Wording follows the app's
 * `PrioritySection.tsx` and the waitlist's Shoppers card in `waitly`.
 */

const ITEM = "Harbor overshirt / M";

const th = "py-2 pr-3 font-medium";
const td = "py-2 pr-3";

/** A rule's checkbox and sentence, as the Waitlist priority card lists them. */
function Rule({ label, on = false, children }: { label: string; on?: boolean; children?: ReactNode }) {
  return (
    <li className="space-y-2">
      <p className="flex gap-2.5">
        <span
          aria-hidden="true"
          className={cn(
            "mt-1 flex size-4 shrink-0 items-center justify-center rounded-[0.25rem] border text-[0.625rem] leading-none",
            on ? "border-ink bg-ink text-white" : "border-ink/35",
          )}
        >
          {on ? "✓" : null}
        </span>
        <span className={cn(on && "font-semibold")}>
          {label}
          <span className="sr-only">{on ? " (on)" : " (off)"}</span>
        </span>
      </p>
      {children ? <div className="pl-6.5">{children}</div> : null}
    </li>
  );
}

/** A settings field: its label, its value in a box, and the line under it. */
function Field({ label, value, detail }: { label: string; value: string; detail?: string }) {
  return (
    <div>
      <p className="text-[0.8125rem] text-ink-soft">{label}</p>
      <p className="mt-1 flex h-9 items-center rounded-md bg-white px-3 tnum ring-1 ring-ink/20">{value}</p>
      {detail ? <p className="mt-1 text-[0.75rem] leading-snug text-ink-soft">{detail}</p> : null}
    </div>
  );
}

const LINE = [
  { position: "1", why: "VIP", shopper: "maya@example.com", joined: "21 Sep" },
  { position: "2", why: "VIP", shopper: "jonas@example.com", joined: "29 Sep" },
  { position: "3", why: "High-value", shopper: "priya@example.com", joined: "24 Sep" },
  { position: "4", why: "Ordered before", shopper: "sam@example.com", joined: "18 Sep" },
  { position: "5", why: "Standard", shopper: "theo@example.com", joined: "12 Sep" },
  { position: "6", why: "Standard", shopper: "amara@example.com", joined: "14 Sep" },
  { position: "7", why: "Standard", shopper: "ben@example.com", joined: "15 Sep" },
];

export const scenes = {
  "vip-priority-rules": {
    alt: "The Waitlist priority card in Waitly Settings. Three rules are ticked: First, shoppers tagged… with the VIP tag field set to VIP; Then, shoppers who have spent at least… with Lifetime spend (USD) set to 500.00; and Then, shoppers who have ordered from you before. The rule Then, shoppers tagged… with Other tags is not ticked. Under the rules: Everyone else waits in the order they joined.",
    render: () => (
      <AdminFrame title="Settings">
        <Panel title="Waitlist priority" level="pro">
          <p className="text-[0.8125rem] text-ink-soft">
            Waitly alerts your waitlist in this order. Switch on the rules that apply to your shop — the order itself is
            fixed.
          </p>
          <ul className="mt-3 space-y-3 text-[0.9375rem]">
            <Rule on label="First, shoppers tagged…">
              <Field label="VIP tag" value="VIP" detail="The tag your best customers already carry in Shopify." />
            </Rule>
            <Rule on label="Then, shoppers who have spent at least…">
              <Field
                label="Lifetime spend (USD)"
                value="500.00"
                detail="What a customer has spent with you in total, as Shopify reports it."
              />
            </Rule>
            <Rule label="Then, shoppers tagged…" />
            <Rule on label="Then, shoppers who have ordered from you before." />
          </ul>
          <p className="mt-3 text-[0.9375rem]">Everyone else waits in the order they joined.</p>
        </Panel>
      </AdminFrame>
    ),
  },
  "vip-waitlist-why": {
    alt: "The Shoppers card on an example waitlist for Harbor overshirt / M, sorted by Position. Positions 1 and 2 are marked VIP, 3 High-value, 4 Ordered before, and 5 to 7 Standard, although the Standard shoppers joined first, on 12 to 15 September.",
    render: () => (
      <AdminFrame title={ITEM}>
        <Panel title="Shoppers" level="pro">
          <div className="relative overflow-x-auto">
            <table className="w-full min-w-[26rem] text-left text-[0.875rem]">
              <caption className="sr-only">The first 7 shoppers waiting, in queue order. Example store.</caption>
              <thead className="text-ink-soft">
                <tr className="border-b border-line">
                  <th scope="col" className={th}>Position</th>
                  <th scope="col" className={th}>Why</th>
                  <th scope="col" className={th}>Shopper</th>
                  <th scope="col" className="py-2 text-right font-medium">Joined</th>
                </tr>
              </thead>
              <tbody className="tnum">
                {LINE.map((row) => (
                  <tr key={row.shopper} className="border-b border-line last:border-0">
                    <td className={cn(td, "font-semibold")}>{row.position}</td>
                    <td className={cn(td, row.why === "VIP" && "font-semibold")}>{row.why}</td>
                    <td className={cn(td, "text-ink-soft")}>{row.shopper}</td>
                    <td className="py-2 text-right text-ink-soft">{row.joined}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[0.8125rem] text-ink-soft">Showing 7 of 26 waiting.</p>
        </Panel>
      </AdminFrame>
    ),
  },
} satisfies Record<string, Scene>;
