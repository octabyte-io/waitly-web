import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { GUIDE_SECTIONS, articlesIn, guidePath } from "@/content/guide";
import { PlanBadge } from "@/components/site/primitives";

function GuideTree({ current }: { current?: string }) {
  return (
    <nav aria-label="User guide" className="space-y-6">
      {GUIDE_SECTIONS.map((section) => {
        const items = articlesIn(section.key);
        if (items.length === 0) return null;
        return (
          <div key={section.key}>
            <p className="px-3 text-[0.8125rem] font-semibold tracking-[0.04em] text-ink-soft uppercase">
              {section.title}
            </p>
            <ul className="mt-2 space-y-0.5">
              {items.map((a) => {
                const active = a.slug === current;
                return (
                  <li key={a.slug}>
                    <Link
                      href={guidePath(a.slug)}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex items-center justify-between gap-2 rounded-xl px-3 py-1.5 text-[0.9375rem] leading-snug transition-colors",
                        active ? "bg-ink font-semibold text-paper" : "text-ink/80 hover:bg-white/70 hover:text-ink",
                      )}
                    >
                      <span>{a.title}</span>
                      {a.level && !active ? <PlanBadge level={a.level} className="h-5 px-2 text-[0.6875rem]" /> : null}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </nav>
  );
}

/** The whole guide, grouped by section: a sticky column on wide screens, a fold-out on phones. */
export function GuideSidebar({ current }: { current?: string }) {
  return (
    <>
      <details className="group glass-thin rounded-2xl lg:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 font-semibold">
          All guides
          <ChevronDown aria-hidden="true" className="size-5 transition-transform group-open:rotate-180" />
        </summary>
        <div className="border-t border-line px-1 py-4">
          <GuideTree current={current} />
        </div>
      </details>
      <div className="sticky top-24 hidden max-h-[calc(100dvh-7rem)] overflow-y-auto pr-1 pb-8 lg:block">
        <GuideTree current={current} />
      </div>
    </>
  );
}
