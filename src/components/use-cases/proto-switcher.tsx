import Link from "next/link";
import { cn } from "@/lib/utils";

export const PROTO_LAYOUTS = [
  { key: "a", name: "A · Long read" },
  { key: "b", name: "B · Two-part" },
  { key: "c", name: "C · Glance rail" },
] as const;

export type ProtoLayout = (typeof PROTO_LAYOUTS)[number]["key"];

/** Flips between the three prototype layouts. Deleted once one is chosen. */
export function ProtoSwitcher({ current }: { current: ProtoLayout }) {
  return (
    <nav
      aria-label="Prototype layouts"
      className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 gap-1 rounded-full bg-ink p-1 text-[0.875rem] shadow-[0_16px_40px_-16px_rgb(11_37_69/0.8)]"
    >
      {PROTO_LAYOUTS.map((layout) => (
        <Link
          key={layout.key}
          href={`/proto/use-case/${layout.key}/`}
          aria-current={layout.key === current ? "page" : undefined}
          className={cn(
            "rounded-full px-3.5 py-2 font-semibold whitespace-nowrap",
            layout.key === current ? "bg-paper text-ink" : "text-paper/80 hover:text-paper",
          )}
        >
          {layout.name}
        </Link>
      ))}
    </nav>
  );
}
