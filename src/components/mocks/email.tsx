import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * A Waitly email as the shopper sees it. Wording follows
 * `waitly/app/emails/*.tsx`; the bar and button take the merchant's brand color.
 */
export function EmailMock({
  shop = "Harbor Supply",
  subject,
  heading,
  children,
  button,
  brandColor = "#2f5d50",
  item,
  className,
}: {
  shop?: string;
  subject: string;
  heading: string;
  children: ReactNode;
  button?: string;
  brandColor?: string;
  item: string;
  className?: string;
}) {
  return (
    <figure className={cn("glass rounded-[1.75rem] p-2 sm:p-2.5", className)}>
      <div className="overflow-hidden rounded-[1.25rem] bg-white text-[#1f2328] ring-1 ring-[#0b2545]/10">
        <div className="space-y-1 border-b border-[#e6e9ee] bg-[#f6f8fa] px-5 py-3 text-[0.8125rem]">
          <p>
            <span className="text-[#6b7280]">From </span>
            <span className="font-semibold">{shop}</span>
            <span className="text-[#6b7280]"> &lt;alerts@waitly.octabyte.app&gt;</span>
          </p>
          <p className="truncate">
            <span className="text-[#6b7280]">Subject </span>
            <span className="font-semibold">{subject}</span>
          </p>
        </div>
        <div className="h-2" style={{ background: brandColor }} />
        <div className="space-y-3.5 px-6 pt-6 pb-5 text-[0.9375rem] leading-6">
          <p className="font-sans text-[0.8125rem] font-semibold tracking-wide" style={{ color: brandColor }}>
            {shop}
          </p>
          <p className="font-sans text-[1.25rem] font-bold leading-tight">{heading}</p>
          {children}
          {button ? (
            <p
              className="inline-flex h-11 items-center rounded-md px-5 font-semibold text-white"
              style={{ background: brandColor }}
            >
              {button}
            </p>
          ) : null}
          <div className="border-t border-[#e5e7eb] pt-4 text-[0.75rem] leading-[1.125rem] text-[#6b7280]">
            <p>
              You are getting this because you asked {shop} to tell you when {item} was back in stock.
            </p>
            <p className="mt-2 text-[#1f6feb] underline">Stop alerts for {item}</p>
          </div>
        </div>
      </div>
    </figure>
  );
}

export const muted = "text-[0.8125rem] text-[#6b7280]";
