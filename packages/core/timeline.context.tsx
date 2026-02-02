import { createContext } from "react";
import type { TimelineEntry, TimelineConfig } from "./timeline.types";

/**
 * Internal state shared by the timeline system.
 * This is intentionally minimal and framework-controlled.
 */
export interface TimelineState {
  /** All timeline entries, in order */
  entries: TimelineEntry[];

  /** Runtime configuration for behavior and layout */
  config: TimelineConfig;

  /** Index of the currently active timeline entry */
  activeIndex: number;

  /** Update the active entry (used by scroll, nav, etc.) */
  setActiveIndex: (index: number) => void;
}

/**
 * React context for timeline state.
 * Consumers should access via `useTimeline()`.
 */
export const TimelineContext =
  createContext<TimelineState | null>(null);
