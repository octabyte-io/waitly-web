import { cn } from "@/lib/utils";
import type { DotState } from "./queue-engine";

const DOT: Record<"light" | "dark", Record<DotState, string>> = {
  light: {
    waiting: "bg-ink/30",
    alerted: "bg-paper ring-[3px] ring-signal ring-inset",
    held: "bg-signal/35 ring-[3px] ring-signal ring-inset",
    bought: "bg-signal",
    missed: "bg-transparent ring-2 ring-ink/35 ring-inset",
  },
  dark: {
    waiting: "bg-sky/35",
    alerted: "bg-ink ring-[3px] ring-signal ring-inset",
    held: "bg-signal/40 ring-[3px] ring-signal ring-inset",
    bought: "bg-signal",
    missed: "bg-transparent ring-2 ring-sky/40 ring-inset",
  },
};

type Tone = keyof typeof DOT;

export const DOT_LABELS: Record<DotState, string> = {
  waiting: "Waiting",
  alerted: "Emailed",
  held: "Holding a unit",
  bought: "Bought",
  missed: "Missed out",
};

export function Dot({
  state,
  tone = "light",
  className,
}: {
  state: DotState;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "block aspect-square rounded-full transition-[background-color,box-shadow] duration-500",
        DOT[tone][state],
        className,
      )}
    />
  );
}

/** The waitlist, drawn as a line of shoppers: left to right, top to bottom. */
export function DotQueue({
  states,
  columns,
  label,
  tone = "light",
  className,
}: {
  states: DotState[];
  /** A fixed column count. Leave out and pass `grid-cols-*` classes instead. */
  columns?: number;
  tone?: Tone;
  label: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn("grid gap-1.5 sm:gap-2", className)}
      style={columns ? { gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` } : undefined}
    >
      {states.map((state, i) => (
        <Dot key={i} state={state} tone={tone} />
      ))}
    </div>
  );
}

export function DotLegend({
  states,
  tone = "light",
  className,
  labels,
}: {
  states: DotState[];
  tone?: Tone;
  className?: string;
  /** Words for a state that means something else in this view. */
  labels?: Partial<Record<DotState, string>>;
}) {
  return (
    <ul className={cn("flex flex-wrap gap-x-5 gap-y-2 text-[0.9375rem]", className)}>
      {states.map((state) => (
        <li key={state} className="flex items-center gap-2">
          <Dot state={state} tone={tone} className="size-3.5" />
          {labels?.[state] ?? DOT_LABELS[state]}
        </li>
      ))}
    </ul>
  );
}
