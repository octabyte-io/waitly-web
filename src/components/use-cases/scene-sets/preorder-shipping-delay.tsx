import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { AdminFrame, Panel } from "@/components/mocks/admin";
import type { Scene } from "../scenes";

/**
 * The mocks for the “preorder-shipping-delay” post.
 *
 * Wording follows the app: `waitly/app/emails/delay-notice.tsx` and
 * `order-footer.tsx` for the email, `routes/proxy.preorder/page.server.ts` for
 * the Keep or cancel page, and `domain/preorder/preorder-mark.ts` for the
 * Preorders list. `EmailMock` isn't used because its footer is the
 * back-in-stock one; a preorder's emails carry the order footer instead.
 */

const SHOP = "Harbor Supply";
const BRAND = "#2f5d50";
const ORDER = "#1054";

/** A preorder email: the Delay notice, with the footer that names the order. */
function OrderEmail({
  subject,
  heading,
  children,
}: {
  subject: string;
  heading: string;
  children: ReactNode;
}) {
  return (
    <figure className="glass rounded-[1.75rem] p-2 sm:p-2.5">
      <div className="overflow-hidden rounded-[1.25rem] bg-white text-[#1f2328] ring-1 ring-[#0b2545]/10">
        <div className="space-y-1 border-b border-[#e6e9ee] bg-[#f6f8fa] px-5 py-3 text-[0.8125rem]">
          <p>
            <span className="text-[#6b7280]">From </span>
            <span className="font-semibold">{SHOP}</span>
          </p>
          <p className="truncate">
            <span className="text-[#6b7280]">Subject </span>
            <span className="font-semibold">{subject}</span>
          </p>
        </div>
        <div className="h-2" style={{ background: BRAND }} />
        <div className="space-y-3.5 px-6 pt-6 pb-5 text-[0.9375rem] leading-6">
          <p className="font-sans text-[0.8125rem] font-semibold tracking-wide" style={{ color: BRAND }}>
            {SHOP}
          </p>
          <p className="font-sans text-[1.25rem] font-bold leading-tight">{heading}</p>
          <p>
            Order {ORDER} · {SHOP}
          </p>
          {children}
          <p className="font-semibold">Cancel any time before it ships for a full refund.</p>
          <p className="inline-flex h-11 items-center rounded-md px-5 font-semibold text-white" style={{ background: BRAND }}>
            Keep or cancel your preorder
          </p>
          <div className="border-t border-[#e5e7eb] pt-4 text-[0.75rem] leading-[1.125rem] text-[#6b7280]">
            <p>
              You get this email because you placed order {ORDER}. It is about your order, so it comes even if you
              unsubscribed from other emails.
            </p>
          </div>
        </div>
      </div>
    </figure>
  );
}

/** One preorder in a Delay notice: what it was told beside what it is told now. */
function DelayCard({
  title,
  badge,
  before,
  now,
  ask,
}: {
  title: string;
  badge: string;
  before: string;
  now: string;
  ask: string;
}) {
  return (
    <div className="rounded-md border border-[#e5e7eb] px-4 py-3">
      <p className="font-semibold">{title}</p>
      <p className="text-[#374151]">{badge}</p>
      <div className="my-2 grid grid-cols-2 gap-3">
        <div>
          <p className="text-[0.75rem] uppercase text-[#6b7280]">You were told</p>
          <p className="text-[#6b7280] tnum">{before}</p>
        </div>
        <div>
          <p className="text-[0.75rem] uppercase text-[#6b7280]">Now</p>
          <p className="font-semibold tnum">{now}</p>
        </div>
      </div>
      <p className="text-[#374151]">{ask}</p>
    </div>
  );
}

/** The Keep or cancel page, drawn inside the store's theme. */
function KeepOrCancelPage() {
  return (
    <figure className="glass rounded-[1.75rem] p-2 sm:p-2.5">
      <div className="overflow-hidden rounded-[1.25rem] bg-white text-[#1a1a1a] ring-1 ring-[#0b2545]/10">
        <div className="flex items-center gap-2 border-b border-[#e6e9ee] px-4 py-2.5 text-[0.8125rem] text-[#5c6570]">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-[#d9dee4]" />
            <span className="size-2.5 rounded-full bg-[#d9dee4]" />
            <span className="size-2.5 rounded-full bg-[#d9dee4]" />
          </span>
          <span className="ml-2 truncate">harbor-supply.com</span>
        </div>
        <div className="mx-auto max-w-[34rem] px-5 py-7 text-[0.9375rem] leading-6 sm:px-6">
          <p className="font-sans text-[1.375rem] font-semibold leading-tight">Order {ORDER}</p>
          <p className="mt-1 text-[#5c6570]">Placed Sep 12, 2026 · Cancel any time before it ships for a full refund.</p>
          <div className="mt-5 rounded-lg border border-[#d9dee4] px-4 py-3.5">
            <div className="flex flex-wrap items-baseline justify-between gap-2.5">
              <p className="font-semibold">Harbor overshirt — M</p>
              <span className="rounded-full bg-[#fff4e0] px-2.5 py-0.5 text-[0.75rem] font-semibold whitespace-nowrap text-[#8a4b00] tnum">
                Answer by Nov 14, 2026
              </span>
            </div>
            <p className="mt-1.5 tnum">Ships around Jan 15, 2027.</p>
            <p className="mt-2 rounded-md bg-[#fff4e0] px-3 py-2.5 text-[#8a4b00]">
              The store moved this later than you were told. Choose <strong>Keep my preorder</strong> by{" "}
              <strong className="tnum">Nov 14, 2026</strong>, or it is cancelled and refunded in full.
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="inline-flex min-h-11 items-center rounded-lg bg-[#121212] px-4 font-semibold text-white">
                Keep my preorder
              </span>
              <span className="inline-flex min-h-11 items-center rounded-lg border border-[#1a1a1a] px-4">
                Cancel preorder
              </span>
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}

type Tone = "plain" | "critical" | "caution" | "warning";

const TONES: Record<Tone, string> = {
  plain: "bg-[#eceff3] text-[#3d4652]",
  critical: "bg-[#fde3e0] text-[#8a1f1f]",
  caution: "bg-[#fff1b8] text-[#5c4a00]",
  warning: "bg-[#ffe1c2] text-[#7a3e00]",
};

function Badge({ tone = "plain", children }: { tone?: Tone; children: ReactNode }) {
  return (
    <span className={cn("inline-flex h-6 items-center rounded-full px-2.5 text-[0.75rem] font-semibold whitespace-nowrap", TONES[tone])}>
      {children}
    </span>
  );
}

const PREORDER_ROWS: {
  order: string;
  item: string;
  qty: number;
  mark?: { tone: Tone; badge: string };
  lines: string[];
}[] = [
  {
    order: "#1054",
    item: "Harbor overshirt / M",
    qty: 1,
    mark: { tone: "caution", badge: "Waiting for the shopper" },
    lines: ["Waiting for the shopper to agree — until Nov 14", "Delay notice sent Oct 30"],
  },
  {
    order: "#1051",
    item: "Harbor overshirt / L",
    qty: 2,
    lines: ["Delay notice sent Oct 30", "Agreed to wait"],
  },
  {
    order: "#1038",
    item: "Brass lamp",
    qty: 1,
    mark: { tone: "critical", badge: "Refund due" },
    lines: ["The shopper did not agree to wait — cancel it in Shopify", "Delay notice sent Oct 12"],
  },
  {
    order: "#1060",
    item: "Trail runner / 9",
    qty: 1,
    mark: { tone: "warning", badge: "Reaches 30 days" },
    lines: ["Reaches 30 days on Nov 21"],
  },
];

/** The preorders list, with the badge that says a preorder needs the merchant. */
function PreorderListMock() {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full min-w-[30rem] text-left text-[0.875rem]">
        <caption className="sr-only">Preorders, example store</caption>
        <thead className="text-ink-soft">
          <tr className="border-b border-line">
            <th scope="col" className="py-2 pr-3 font-medium">Order</th>
            <th scope="col" className="py-2 pr-3 font-medium">Product</th>
            <th scope="col" className="py-2 pr-3 text-right font-medium">Qty</th>
            <th scope="col" className="py-2 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {PREORDER_ROWS.map((row) => (
            <tr key={row.order} className="border-b border-line align-top last:border-0">
              <th scope="row" className="py-2.5 pr-3 font-medium tnum">{row.order}</th>
              <td className="py-2.5 pr-3">{row.item}</td>
              <td className="py-2.5 pr-3 text-right tnum">{row.qty}</td>
              <td className="py-2.5">
                <span className="flex flex-wrap gap-1.5">
                  <Badge>Waiting</Badge>
                  {row.mark ? <Badge tone={row.mark.tone}>{row.mark.badge}</Badge> : null}
                </span>
                {row.lines.map((line) => (
                  <span key={line} className="mt-1 block text-[0.8125rem] text-ink-soft tnum">
                    {line}
                  </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export const scenes = {
  "delay-notice-email": {
    alt: "An email from Harbor Supply with the subject “Your preorder is delayed: order #1054”, headed “Your preorder will ship later”. A card for Harbor overshirt - M says “No action needed”, “You were told around Nov 14, 2026”, “Now around Nov 28, 2026” and “You do not need to do anything to keep it.” Under it: “Cancel any time before it ships for a full refund.” and a “Keep or cancel your preorder” button.",
    render: () => (
      <OrderEmail subject={`Your preorder is delayed: order ${ORDER}`} heading="Your preorder will ship later">
        <DelayCard
          title="Harbor overshirt - M"
          badge="No action needed"
          before="around Nov 14, 2026"
          now="around Nov 28, 2026"
          ask="You do not need to do anything to keep it."
        />
      </OrderEmail>
    ),
  },
  "delay-keep-or-cancel-page": {
    alt: "The Keep or cancel page on the store, headed “Order #1054”. A card for Harbor overshirt — M says “Answer by Nov 14, 2026”, “Ships around Jan 15, 2027.” and “The store moved this later than you were told. Choose Keep my preorder by Nov 14, 2026, or it is cancelled and refunded in full.” It has a “Keep my preorder” button and a “Cancel preorder” button.",
    render: () => <KeepOrCancelPage />,
  },
  "delay-preorders-list": {
    alt: "Waitly’s Preorders list for an example store. Four waiting preorders: one with a “Waiting for the shopper” badge until Nov 14, one that reads “Delay notice sent Oct 30” and “Agreed to wait”, one with a “Refund due” badge, and one with a “Reaches 30 days” badge.",
    render: () => (
      <AdminFrame title="Preorders">
        <Panel>
          <PreorderListMock />
        </Panel>
      </AdminFrame>
    ),
  },
} satisfies Record<string, Scene>;
