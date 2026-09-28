"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import type { Frame } from "./queue-engine";

const REDUCED = "(prefers-reduced-motion: reduce)";

export function useReducedMotion() {
  return useSyncExternalStore(
    (onChange) => {
      const query = window.matchMedia(REDUCED);
      query.addEventListener("change", onChange);
      return () => query.removeEventListener("change", onChange);
    },
    () => window.matchMedia(REDUCED).matches,
    () => false,
  );
}

/**
 * Steps through frames on a timer. With reduced motion, `play` jumps straight
 * to the last frame instead of animating.
 */
export function useFrames(frames: Frame[], stepMs = 1100) {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const timer = useRef<number | null>(null);

  const stop = useCallback(() => {
    if (timer.current !== null) window.clearInterval(timer.current);
    timer.current = null;
    setPlaying(false);
  }, []);

  const play = useCallback(() => {
    stop();
    if (reduced) {
      setIndex(frames.length - 1);
      return;
    }
    setIndex(0);
    setPlaying(true);
    timer.current = window.setInterval(() => {
      setIndex((i) => {
        if (i >= frames.length - 1) {
          if (timer.current !== null) window.clearInterval(timer.current);
          timer.current = null;
          setPlaying(false);
          return i;
        }
        return i + 1;
      });
    }, stepMs);
  }, [frames.length, reduced, stepMs, stop]);

  useEffect(() => stop, [stop]);

  const safeIndex = Math.min(index, frames.length - 1);
  return {
    frame: frames[safeIndex],
    index: safeIndex,
    done: safeIndex === frames.length - 1,
    playing,
    play,
    reset: () => {
      stop();
      setIndex(0);
    },
    seek: (i: number) => {
      stop();
      setIndex(i);
    },
    reduced,
  };
}
