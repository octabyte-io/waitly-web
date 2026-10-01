import { Info, Lightbulb, TriangleAlert } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Aside } from "@/content/guide/types";
import { RichText } from "./rich-text";

const KINDS = {
  tip: { label: "Tip", Icon: Lightbulb, tone: "bg-sky/55 ring-sky-deep/50" },
  note: { label: "Note", Icon: Info, tone: "bg-white/60 ring-ink/10" },
  warning: { label: "Careful", Icon: TriangleAlert, tone: "bg-peach/55 ring-signal/30" },
} as const;

export function AsideNote({ aside, className }: { aside: Aside; className?: string }) {
  const { label, Icon, tone } = KINDS[aside.kind];
  return (
    <div className={cn("flex gap-3 rounded-2xl px-4 py-3.5 ring-1 ring-inset", tone, className)}>
      <Icon aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-ink" />
      <p className="text-[0.9844rem] text-ink/85">
        <span className="font-semibold text-ink">{label}: </span>
        <RichText text={aside.text} />
      </p>
    </div>
  );
}
