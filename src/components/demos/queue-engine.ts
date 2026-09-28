/**
 * A small, deterministic model of a Waitly restock, used by the demos.
 * It is an illustration of the release modes, not the app's own scheduler.
 */

export type DotState = "waiting" | "alerted" | "held" | "bought" | "missed";

export type Frame = {
  states: DotState[];
  when: string;
  /** A short name for the step list. */
  step: string;
  caption: string;
};

/** Roughly half of alerted shoppers buy: positions 1, 2, 4, 7, 8 of every ten. */
const WANTS_TO_BUY = [0, 1, 1, 0, 1, 0, 0, 1, 1, 0];
export const wantsToBuy = (i: number) => WANTS_TO_BUY[i % 10] === 1;

/** A shopper holding a unit just for them is likelier to buy. */
const buysHeld = (i: number) => i % 3 !== 2;

const count = (states: DotState[], state: DotState) =>
  states.filter((s) => s === state).length;

const plural = (n: number, one: string, many = `${one}s`) => `${n} ${n === 1 ? one : many}`;

export function allAtOnce(shoppers: number, units: number): Frame[] {
  const frames: Frame[] = [];
  const states: DotState[] = Array(shoppers).fill("waiting");
  frames.push({
    states: [...states],
    when: "Before",
    step: "Sold out",
    caption: `Sold out. ${shoppers} shoppers are waiting, in the order they joined.`,
  });

  states.fill("alerted");
  frames.push({
    states: [...states],
    when: "At the restock",
    step: "Everyone emailed",
    caption: `${units} units arrive. Waitly emails all ${shoppers} shoppers at once.`,
  });

  // Whoever opens the email first gets it, wherever they are in line.
  const eager = Array.from({ length: shoppers }, (_, i) => i).filter(wantsToBuy);
  const firstToCheckout = [...eager].sort((a, b) => ((a * 7) % 11) - ((b * 7) % 11));
  firstToCheckout.slice(0, units).forEach((i) => (states[i] = "bought"));
  frames.push({
    states: [...states],
    when: "+20 minutes",
    step: "Sold out again",
    caption: `Sold out again. The first ${units} to check out got one, not the first ${units} in line.`,
  });

  firstToCheckout.slice(units).forEach((i) => (states[i] = "missed"));
  frames.push({
    states: [...states],
    when: "+1 hour",
    step: "Late arrivals",
    caption: `${plural(count(states, "missed"), "shopper")} tried to buy and found it gone. Everyone who didn't buy goes back on the waitlist after the hold window.`,
  });
  return frames;
}

export function inBatches(
  shoppers: number,
  units: number,
  perBatch: number,
  minutesBetween = 60,
  maxBatches = 5,
): Frame[] {
  const frames: Frame[] = [];
  const states: DotState[] = Array(shoppers).fill("waiting");
  frames.push({
    states: [...states],
    when: "Before",
    step: "Sold out",
    caption: `Sold out. ${shoppers} shoppers are waiting, in line order.`,
  });

  let sold = 0;
  let next = 0;
  for (let batch = 1; batch <= maxBatches && next < shoppers && sold < units; batch++) {
    const last = batch === maxBatches;
    const end = last ? shoppers : Math.min(next + perBatch, shoppers);
    const members = Array.from({ length: end - next }, (_, k) => next + k);
    members.forEach((i) => (states[i] = "alerted"));
    const when = batch === 1 ? "At the restock" : `+${(batch - 1) * minutesBetween} minutes`;
    frames.push({
      states: [...states],
      when,
      step: `Batch ${batch} emailed`,
      caption: last
        ? `Batch ${batch}, the last: everyone still waiting is alerted.`
        : `Batch ${batch}: the next ${members.length} shoppers in line are alerted.`,
    });

    members.forEach((i) => {
      if (wantsToBuy(i) && sold < units) {
        states[i] = "bought";
        sold++;
      }
    });
    next = end;
    const left = units - sold;
    frames.push({
      states: [...states],
      when,
      step: left > 0 ? `Batch ${batch} buys` : "Sold out, sending stops",
      caption:
        left > 0
          ? `${plural(count(states, "bought"), "shopper")} bought. ${plural(left, "unit")} left for the next batch.`
          : `Sold out. Sending stops. ${plural(shoppers - next, "shopper")} were never emailed and keep their place for next time.`,
    });
  }
  return frames;
}

export function reserve(
  shoppers: number,
  units: number,
  maxHeld: number,
  holdLabel = "30 minutes",
): Frame[] {
  const frames: Frame[] = [];
  const states: DotState[] = Array(shoppers).fill("waiting");
  frames.push({
    states: [...states],
    when: "Before",
    step: "Sold out",
    caption: `Sold out. ${shoppers} shoppers are waiting, in line order.`,
  });

  let sold = 0;
  let next = 0;
  const holding = new Set<number>();
  const refill = () => {
    while (holding.size < maxHeld && sold + holding.size < units && next < shoppers) {
      states[next] = "held";
      holding.add(next);
      next++;
    }
  };

  refill();
  frames.push({
    states: [...states],
    when: "At the restock",
    step: "Units held",
    caption: `Waitly holds one unit each for the first ${holding.size} shoppers and sends each a link only they can use, good for ${holdLabel}.`,
  });

  for (let round = 1; round <= 12 && sold < units && holding.size > 0; round++) {
    const bought: number[] = [];
    const lapsed: number[] = [];
    holding.forEach((i) => (buysHeld(i) ? bought : lapsed).push(i));
    bought.forEach((i) => {
      states[i] = "bought";
      holding.delete(i);
      sold++;
    });
    lapsed.forEach((i) => {
      states[i] = "missed";
      holding.delete(i);
    });
    const before = next;
    refill();
    const passed = next - before;
    frames.push({
      states: [...states],
      when: `+${round * 30} minutes`,
      step: sold >= units ? "All sold" : `Holds, round ${round + 1}`,
      caption:
        sold >= units
          ? `All ${units} units sold to shoppers near the front of the line. Nobody raced for them.`
          : `${plural(bought.length, "shopper")} bought${
              lapsed.length ? `, ${plural(lapsed.length, "hold")} lapsed` : ""
            }. ${passed ? `The next ${plural(passed, "shopper")} in line get a hold.` : ""}`,
    });
  }
  return frames;
}

export const tally = (states: DotState[]) => ({
  waiting: count(states, "waiting"),
  alerted: count(states, "alerted"),
  held: count(states, "held"),
  bought: count(states, "bought"),
  missed: count(states, "missed"),
});
