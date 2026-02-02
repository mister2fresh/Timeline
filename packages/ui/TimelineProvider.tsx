import * as React from "react";
import {
  TimelineContext,
  TimelineEntry,
  TimelineContextValue,
} from "@timeline/core";

export interface TimelineProviderProps {
  entries: TimelineEntry[];
  initialIndex?: number;
  children: React.ReactNode;
}

/**
 * TimelineProvider
 *
 * Root provider for timeline state.
 * This is the public integration point for consumers.
 */
export function TimelineProvider({
  entries,
  initialIndex = 0,
  children,
}: TimelineProviderProps) {
  const [activeIndex, setActiveIndex] =
    React.useState(initialIndex);

  const value: TimelineContextValue = React.useMemo(
    () => ({
      entries,
      activeIndex,
      setActiveIndex,
    }),
    [entries, activeIndex]
  );

  return (
    <TimelineContext.Provider value={value}>
      {children}
    </TimelineContext.Provider>
  );
}
