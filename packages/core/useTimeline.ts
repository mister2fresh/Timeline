import { useContext } from "react";
import { TimelineContext } from "./timeline.context";
import type { TimelineState } from "./timeline.context";

/**
 * Access the current timeline state.
 * Must be used within a <Timeline /> provider.
 */
export function useTimeline(): TimelineState {
  const context = useContext(TimelineContext);

  if (!context) {
    throw new Error(
      "useTimeline must be used within a Timeline provider"
    );
  }

  return context;
}
