import { cn } from "@/lib/utils";
import type { Shot } from "@/content/guide/types";
import { RichText } from "./rich-text";

const FRAME_LABELS: Record<NonNullable<Shot["frame"]>, string> = {
  admin: "Shopify admin · Waitly",
  storefront: "Your online store",
  email: "Shopper’s inbox",
  phone: "",
};

/**
 * A screenshot of the real app in a glass bezel, with orange boxes round the
 * things the step asks you to press. Box positions are percentages, so they
 * hold at every width.
 */
export function Screenshot({ shot, className }: { shot: Shot; className?: string }) {
  const frame = shot.frame ?? "admin";
  const phone = frame === "phone";
  // Only labelled boxes are numbered, in the order they're listed.
  let count = 0;
  const boxes = (shot.highlights ?? []).map((h) => ({ ...h, n: h.label ? ++count : undefined }));
  const labelled = boxes.filter((b) => b.n);

  return (
    <figure
      className={cn(phone ? "mx-auto max-w-[22rem]" : "", className)}
      // Never scale a crop past its own pixels: a narrow card stays narrow and sharp.
      style={phone ? undefined : { maxWidth: `calc(${shot.width}px + 1.25rem)` }}
    >
      <div className={cn("glass p-2 sm:p-2.5", phone ? "rounded-[2.5rem]" : "rounded-[1.5rem]")}>
        <div
          className={cn(
            "overflow-hidden bg-paper ring-1 ring-ink/10",
            phone ? "rounded-[2rem]" : "rounded-[1.05rem]",
          )}
        >
          {phone ? null : (
            <div className="flex h-9 items-center gap-3 border-b border-line bg-mist/70 px-4">
              <span aria-hidden="true" className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-ink/15" />
                <span className="size-2.5 rounded-full bg-ink/15" />
                <span className="size-2.5 rounded-full bg-ink/15" />
              </span>
              <span className="truncate text-[0.8125rem] font-medium text-ink-soft">
                {FRAME_LABELS[frame]}
              </span>
            </div>
          )}
          <div className="relative">
            <a href={shot.src} target="_blank" rel="noopener" aria-label="Open the screenshot at full size">
              {/* eslint-disable-next-line @next/next/no-img-element -- static export; files are pre-sized */}
              <img
                src={shot.src}
                width={shot.width}
                height={shot.height}
                alt={shot.alt}
                loading="lazy"
                decoding="async"
                className="block h-auto w-full"
              />
            </a>
            {boxes.map((h, i) => (
              <span
                key={i}
                aria-hidden="true"
                className="pointer-events-none absolute rounded-[0.6rem] ring-[3px] ring-signal shadow-[0_0_0_6px_rgb(255_107_53/0.18)]"
                style={{ left: `${h.x}%`, top: `${h.y}%`, width: `${h.w}%`, height: `${h.h}%` }}
              >
                {h.n ? (
                  <span className="absolute -top-3 -left-3 flex size-6 items-center justify-center rounded-full bg-signal font-display text-[0.8125rem] font-bold text-ink shadow-[0_4px_10px_-4px_rgb(11_37_69/0.6)] sm:size-7 sm:text-[0.875rem]">
                    {h.n}
                  </span>
                ) : null}
              </span>
            ))}
          </div>
        </div>
      </div>
      {labelled.length || shot.caption ? (
        <figcaption className="mt-4 space-y-2 px-2 text-[0.9375rem] text-ink/80">
          {labelled.length ? (
            <ol className="flex flex-wrap gap-x-6 gap-y-2">
              {labelled.map((b) => (
                <li key={b.n} className="flex items-baseline gap-2">
                  <span className="flex size-5 shrink-0 translate-y-0.5 items-center justify-center rounded-full bg-signal font-display text-[0.75rem] font-bold text-ink">
                    {b.n}
                  </span>
                  <span>
                    <RichText text={b.label!} />
                  </span>
                </li>
              ))}
            </ol>
          ) : null}
          {shot.caption ? (
            <p className="text-ink-soft">
              <RichText text={shot.caption} />
            </p>
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
