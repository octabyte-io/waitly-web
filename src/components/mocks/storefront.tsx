import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Mocks of Waitly's theme app blocks, using their real default wording from
 * the extension's `en.default.json`. They sit inside a neutral "merchant
 * theme" so they read as the shop's page, not Waitly's.
 */

export function ProductArt({
  kind = "shirt",
  className,
}: {
  kind?: "shirt" | "sneaker" | "lamp" | "bag";
  className?: string;
}) {
  return (
    <div className={cn("flex aspect-[4/3] items-center justify-center bg-[#e9edf1]", className)}>
      <svg viewBox="0 0 200 150" aria-hidden="true" className="h-4/5 w-auto">
        {kind === "shirt" ? (
          <g>
            <path
              d="M72 22 L100 30 L128 22 L162 40 L150 70 L136 64 L136 132 L64 132 L64 64 L50 70 L38 40 Z"
              fill="#6f7f63"
            />
            <path d="M88 26 L100 44 L112 26 L100 30 Z" fill="#56654b" />
            <path d="M100 44 L100 132" stroke="#56654b" strokeWidth="2" />
            {[60, 78, 96, 114].map((y) => (
              <circle key={y} cx="104" cy={y} r="2.4" fill="#e9edf1" />
            ))}
            <rect x="72" y="60" width="18" height="16" rx="2" fill="#63724f" />
          </g>
        ) : null}
        {kind === "sneaker" ? (
          <g>
            <path
              d="M22 104 C22 92 28 86 40 84 L74 78 C84 70 92 54 104 48 C110 45 116 46 120 50 C126 60 134 66 150 70 C168 74 180 82 180 98 L180 104 Z"
              fill="#f4f6f8"
              stroke="#2f3b48"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <path d="M104 48 C100 58 102 70 112 78" fill="none" stroke="#2f3b48" strokeWidth="2.5" />
            <path d="M40 84 C52 92 60 94 74 94" fill="none" stroke="#c7ced6" strokeWidth="3" strokeLinecap="round" />
            <path d="M86 70 L98 64 M90 78 L104 71 M96 86 L110 78" stroke="#d2542a" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M18 104 H184 V112 C184 118 180 122 174 122 H28 C22 122 18 118 18 112 Z" fill="#2f3b48" />
            <path d="M40 113 H160" stroke="#56626f" strokeWidth="2" strokeDasharray="6 5" />
          </g>
        ) : null}
        {kind === "lamp" ? (
          <g>
            <path d="M70 30 L130 30 L146 78 L54 78 Z" fill="#c9a86a" />
            <rect x="97" y="78" width="6" height="42" fill="#2f3b48" />
            <rect x="72" y="118" width="56" height="8" rx="4" fill="#2f3b48" />
          </g>
        ) : null}
        {kind === "bag" ? (
          <g>
            <path d="M78 52 C78 30 122 30 122 52" fill="none" stroke="#3b2f2a" strokeWidth="6" />
            <rect x="52" y="50" width="96" height="80" rx="10" fill="#8a5a44" />
            <rect x="52" y="74" width="96" height="6" fill="#744a37" />
          </g>
        ) : null}
      </svg>
    </div>
  );
}

export function ProductFrame({
  store = "harbor-supply.com",
  title,
  price,
  options,
  art = "shirt",
  children,
  className,
  compact = false,
}: {
  store?: string;
  title: string;
  price: string;
  options?: { label: string; value: string; values: { name: string; soldOut?: boolean }[] };
  art?: "shirt" | "sneaker" | "lamp" | "bag";
  children?: ReactNode;
  className?: string;
  compact?: boolean;
}) {
  return (
    <figure className={cn("glass rounded-[1.75rem] p-2 sm:p-2.5", className)}>
      <div className="overflow-hidden rounded-[1.25rem] bg-white text-[#1a1a1a] ring-1 ring-[#0b2545]/10">
        <div className="flex items-center gap-2 border-b border-[#e6e9ee] px-4 py-2.5 text-[0.8125rem] text-[#5c6570]">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-[#d9dee4]" />
            <span className="size-2.5 rounded-full bg-[#d9dee4]" />
            <span className="size-2.5 rounded-full bg-[#d9dee4]" />
          </span>
          <span className="ml-2 truncate">{store}</span>
        </div>
        <div className={cn("grid", compact ? "" : "sm:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]")}>
          {compact ? null : <ProductArt kind={art} className="sm:aspect-auto sm:h-full" />}
          <div className="space-y-4 p-5 sm:p-6">
            <div>
              <p className="font-sans text-[1.125rem] font-semibold leading-snug">{title}</p>
              <p className="mt-1 text-[0.9375rem] text-[#5c6570] tnum">{price}</p>
            </div>
            {options ? (
              <div>
                <p className="text-[0.8125rem] text-[#5c6570]">
                  {options.label}: <span className="text-[#1a1a1a]">{options.value}</span>
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {options.values.map((v) => (
                    <span
                      key={v.name}
                      className={cn(
                        "inline-flex h-8 min-w-10 items-center justify-center rounded-md border px-2.5 text-[0.8125rem]",
                        v.name === options.value ? "border-[#1a1a1a]" : "border-[#d9dee4]",
                        v.soldOut && "text-[#9aa2ab] line-through",
                      )}
                    >
                      {v.name}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
            {children}
          </div>
        </div>
      </div>
    </figure>
  );
}

export function PoweredBy() {
  return <p className="text-[0.75rem] text-[#7a828b]">Powered by Waitly</p>;
}

export function NotifyMeBlock({
  state = "form",
  buttonColor = "#1a1a1a",
  radius = 6,
  powered = true,
}: {
  state?: "form" | "success";
  buttonColor?: string;
  radius?: number;
  powered?: boolean;
}) {
  return (
    <div className="space-y-3 rounded-lg border border-[#e6e9ee] p-4">
      <p className="font-semibold">Out of stock</p>
      {state === "success" ? (
        <p className="flex gap-2 text-[0.9375rem]">
          <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
          You are on the list. We will email you once this is back.
        </p>
      ) : (
        <>
          <div>
            <p className="text-[0.8125rem] text-[#5c6570]">Email</p>
            <p
              className="mt-1 flex h-10 items-center border border-[#c5ccd4] px-3 text-[0.9375rem] text-[#9aa2ab]"
              style={{ borderRadius: radius }}
            >
              you@example.com
            </p>
          </div>
          <p className="flex items-start gap-2 text-[0.875rem]">
            <span aria-hidden="true" className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-[3px] bg-[#1a1a1a] text-white">
              <Check className="size-3" />
            </span>
            Email me once when this is back in stock.
          </p>
          <p
            className="flex min-h-11 items-center justify-center px-4 py-2 text-center text-[0.9375rem] leading-tight font-semibold text-white"
            style={{ background: buttonColor, borderRadius: radius }}
          >
            Notify me when available
          </p>
        </>
      )}
      {powered ? <PoweredBy /> : null}
    </div>
  );
}

export function PreorderBlock({
  fact = "Pay in full today. This item ships later.",
  message,
  powered = true,
}: {
  fact?: string;
  message?: string;
  powered?: boolean;
}) {
  return (
    <div className="space-y-3">
      <span className="inline-flex h-6 items-center rounded-full bg-[#1a1a1a] px-2.5 text-[0.75rem] font-semibold text-white">
        Pre-order
      </span>
      <p className="text-[0.9375rem]">{fact}</p>
      <p className="text-[0.875rem]">Cancel any time before it ships for a full refund.</p>
      {message ? <p className="text-[0.875rem] text-[#5c6570]">{message}</p> : null}
      <p className="flex min-h-11 items-center justify-center rounded-md bg-[#1a1a1a] px-4 py-2 text-center text-[0.9375rem] leading-tight font-semibold text-white">
        Pre-order
      </p>
      {powered ? <PoweredBy /> : null}
    </div>
  );
}

export function ComingSoonBlock({
  quantity = true,
  country = true,
}: {
  quantity?: boolean;
  country?: boolean;
}) {
  return (
    <div className="space-y-3 rounded-lg border border-[#e6e9ee] p-4">
      <span className="inline-flex h-6 items-center rounded-full bg-[#1a1a1a] px-2.5 text-[0.75rem] font-semibold text-white">
        Coming soon
      </span>
      <p className="font-semibold">Want this when it launches?</p>
      <p className="text-[0.875rem] text-[#5c6570]">You&rsquo;re asking for Oat / Medium.</p>
      <p className="flex items-center gap-2 text-[0.875rem]">
        <span aria-hidden="true" className="size-4 shrink-0 rounded-[3px] border border-[#8a939c]" />
        Any size or color is fine
      </p>
      {quantity ? (
        <div className="flex items-center justify-between gap-3 text-[0.875rem]">
          <span>How many?</span>
          <span className="flex h-9 w-20 items-center justify-between rounded-md border border-[#c5ccd4] px-3 tnum">
            2 <span aria-hidden="true" className="text-[#9aa2ab]">▾</span>
          </span>
        </div>
      ) : null}
      <p className="flex h-10 items-center rounded-md border border-[#c5ccd4] px-3 text-[0.9375rem] text-[#9aa2ab]">
        you@example.com
      </p>
      {country ? <p className="text-[0.8125rem] text-[#5c6570]">Shopping from Canada</p> : null}
      <p className="flex min-h-11 items-center justify-center rounded-md bg-[#1a1a1a] px-4 py-2 text-center text-[0.9375rem] leading-tight font-semibold text-white">
        I want this
      </p>
    </div>
  );
}

export function VotingBlock() {
  const proposals = [
    { title: "Waxed canvas tote", text: "Our harbor bag, in a size for groceries.", price: "$84", checked: true, art: "bag" as const },
    { title: "Brass reading lamp", text: "A clamp-on lamp for small desks.", price: "$120", checked: false, art: "lamp" as const },
    { title: "Trail runner, low", text: "The runner, in a lighter everyday cut.", price: "$140", checked: true, art: "sneaker" as const },
  ];
  return (
    <figure className="glass rounded-[1.75rem] p-2 sm:p-2.5">
      <div className="rounded-[1.25rem] bg-white p-5 text-[#1a1a1a] ring-1 ring-[#0b2545]/10 sm:p-6">
        <p className="font-sans text-[1.25rem] font-semibold">Vote for what we make next</p>
        <p className="mt-1 text-[0.9375rem] text-[#5c6570]">
          Tick the ones you&rsquo;d buy. We&rsquo;ll only email you about those.
        </p>
        <ul className="mt-5 grid gap-3">
          {proposals.map((p) => (
            <li
              key={p.title}
              className={cn(
                "grid grid-cols-[4.5rem_minmax(0,1fr)_auto] items-center gap-4 rounded-lg border p-2.5",
                p.checked ? "border-[#1a1a1a]" : "border-[#e6e9ee]",
              )}
            >
              <ProductArt kind={p.art} className="aspect-square rounded-md" />
              <div className="min-w-0">
                <p className="font-semibold">{p.title}</p>
                <p className="truncate text-[0.8125rem] text-[#5c6570]">{p.text}</p>
                <p className="text-[0.8125rem] text-[#5c6570] tnum">{p.price}</p>
              </div>
              <span
                aria-hidden="true"
                className={cn(
                  "mr-1.5 flex size-5 items-center justify-center rounded-[4px] border",
                  p.checked ? "border-[#1a1a1a] bg-[#1a1a1a] text-white" : "border-[#8a939c]",
                )}
              >
                {p.checked ? <Check className="size-3.5" /> : null}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-4 flex h-10 items-center rounded-md border border-[#c5ccd4] px-3 text-[0.9375rem] text-[#9aa2ab]">
          you@example.com
        </p>
        <p className="mt-3 text-[0.75rem] text-[#5c6570]">
          By voting, you agree to get emails about these products. You can unsubscribe at any time.
        </p>
        <p className="mt-3 flex min-h-11 items-center justify-center rounded-md bg-[#1a1a1a] px-4 py-2 text-center text-[0.9375rem] leading-tight font-semibold text-white">
          Vote
        </p>
      </div>
    </figure>
  );
}
