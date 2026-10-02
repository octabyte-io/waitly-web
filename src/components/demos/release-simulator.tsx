"use client";

import { useMemo, useState } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DotLegend, DotQueue } from "./dot-queue";
import { allAtOnce, inBatches, reserve, tally, type DotState, type Frame } from "./queue-engine";
import { useFrames } from "./use-frames";

const SHOPPERS = 40;
const UNITS = 10;

type Mode = "all" | "batches" | "reserve";

const MODES: { value: Mode; label: string; blurb: string }[] = [
  { value: "all", label: "All at once", blurb: "Everyone waiting is alerted at the restock." },
  {
    value: "batches",
    label: "In batches",
    blurb: "A few shoppers at a time, in line order, until the item sells out.",
  },
  {
    value: "reserve",
    label: "Reserve for the first shoppers",
    blurb: "Waitly holds one unit for each shopper, in line order, and sends them a link only they can use.",
  },
];

const LEGENDS: Record<Mode, DotState[]> = {
  all: ["waiting", "alerted", "bought", "missed"],
  batches: ["waiting", "alerted", "bought"],
  reserve: ["waiting", "held", "bought", "missed"],
};

/** In Reserve mode a hollow dot is a hold that ran out, not a lost race: the shopper still waits. */
const RESERVE_LABELS = { missed: "Hold lapsed, still waiting" } as const;

export function ReleaseSimulator() {
  const [mode, setMode] = useState<Mode>("batches");
  const [perBatch, setPerBatch] = useState(10);
  const [maxHeld, setMaxHeld] = useState(5);

  const frames: Frame[] = useMemo(() => {
    if (mode === "all") return allAtOnce(SHOPPERS, UNITS);
    if (mode === "batches") return inBatches(SHOPPERS, UNITS, perBatch);
    return reserve(SHOPPERS, UNITS, maxHeld);
  }, [mode, perBatch, maxHeld]);

  return (
    <div className="rounded-[1.75rem] bg-white p-4 text-ink shadow-[inset_0_1px_0_#fff] sm:p-8">
      <Tabs value={mode} onValueChange={(value) => setMode(value as Mode)}>
        <TabsList className="h-auto w-full flex-wrap justify-start gap-1 rounded-2xl bg-mist p-1 group-data-horizontal/tabs:h-auto">
          {MODES.map((m) => (
            <TabsTrigger
              key={m.value}
              value={m.value}
              className="h-10 flex-none rounded-xl px-4 text-[0.9375rem] data-active:bg-ink data-active:text-paper"
            >
              {m.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <p className="mt-4 text-ink-soft">{MODES.find((m) => m.value === mode)!.blurb}</p>

      {mode === "batches" ? (
        <Choice
          label="Shoppers per batch"
          options={[5, 10, 20]}
          value={perBatch}
          onChange={setPerBatch}
          note="One hour between batches, at most 5 batches."
        />
      ) : null}
      {mode === "reserve" ? (
        <Choice
          label="Most units held at once"
          options={[3, 5, 10]}
          value={maxHeld}
          onChange={setMaxHeld}
          note="Each hold lasts 30 minutes. Units not held stay on sale to everyone."
        />
      ) : null}

      {/* Remount the player whenever the scenario changes so it starts fresh. */}
      <Player
        key={`${mode}-${perBatch}-${maxHeld}`}
        frames={frames}
        legend={LEGENDS[mode]}
        labels={mode === "reserve" ? RESERVE_LABELS : undefined}
      />
    </div>
  );
}

function Choice({
  label,
  options,
  value,
  onChange,
  note,
}: {
  label: string;
  options: number[];
  value: number;
  onChange: (value: number) => void;
  note: string;
}) {
  return (
    <fieldset className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
      <legend className="sr-only">{label}</legend>
      <span aria-hidden="true" className="font-semibold">
        {label}
      </span>
      <span className="flex gap-1">
        {options.map((option) => (
          <label
            key={option}
            className={cn(
              "inline-flex h-9 min-w-11 cursor-pointer items-center justify-center rounded-full px-3 font-semibold tnum ring-2 ring-inset has-focus-visible:outline-3 has-focus-visible:outline-ink has-focus-visible:outline-offset-2",
              value === option ? "bg-ink text-paper ring-ink" : "ring-line hover:ring-ink/40",
            )}
          >
            <input
              type="radio"
              name={label}
              className="sr-only"
              checked={value === option}
              onChange={() => onChange(option)}
            />
            {option}
          </label>
        ))}
      </span>
      <span className="text-[0.9375rem] text-ink-soft">{note}</span>
    </fieldset>
  );
}

function Player({
  frames,
  legend,
  labels,
}: {
  frames: Frame[];
  legend: DotState[];
  labels?: Partial<Record<DotState, string>>;
}) {
  const { frame, index, playing, play, seek } = useFrames(frames, 1000);
  const t = tally(frame.states);

  return (
    <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,17rem)]">
      <div>
        <div className="rounded-2xl bg-mist p-4 sm:p-5">
          <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
            <p className="font-semibold">
              {SHOPPERS} waiting, {UNITS} units back
            </p>
            <p className="text-[0.9375rem] text-ink-soft tnum">{frame.when}</p>
          </div>
          <DotQueue
            states={frame.states}
            className="grid-cols-10 md:grid-cols-20"
            label={`Line of ${SHOPPERS} shoppers: ${t.bought} bought, ${t.alerted} emailed, ${t.held} holding a unit, ${t.missed} missed out, ${t.waiting} waiting.`}
          />
          <p className="mt-4 min-h-[3.25rem]" aria-live="polite">
            {frame.caption}
          </p>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <DotLegend states={legend} labels={labels} />
          <button
            type="button"
            onClick={play}
            disabled={playing}
            className="inline-flex h-10 items-center gap-2 rounded-full bg-signal px-5 font-semibold text-ink disabled:opacity-60"
          >
            <Play aria-hidden="true" className="size-4 fill-current" />
            {index === 0 ? "Play the restock" : "Play again"}
          </button>
        </div>
      </div>

      <ol className="space-y-1 text-[0.9375rem]" aria-label="Steps">
        {frames.map((f, i) => (
          <li key={i}>
            <button
              type="button"
              onClick={() => seek(i)}
              aria-current={i === index ? "step" : undefined}
              className={cn(
                "grid w-full grid-cols-[1.75rem_minmax(0,1fr)] items-baseline rounded-lg px-2 py-1.5 text-left hover:bg-mist",
                i === index && "bg-mist font-semibold",
              )}
            >
              <span className="text-ink-soft tnum">{i + 1}</span>
              <span>{f.step}</span>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
