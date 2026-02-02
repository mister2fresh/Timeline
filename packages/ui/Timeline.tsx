"use client";

import { useState } from "react";
import type { ReactNode } from "react";

import {
  TimelineContext,
  type TimelineEntry,
  type TimelineConfig
} from "@timeline/core";

import { TimelineItem } from "./TimelineItem";

export interface TimelineProps {
  /** Timeline content */
  entries: TimelineEntry[];

  /** Behavioral and layout configuration */
  config?: TimelineConfig;

  /** Optional custom renderer for timeline items */
  renderItem?: (entry: TimelineEntry, index: number) => ReactNode;
}

/**
 * Timeline
 *
 * Provides timeline context and renders entries using
 * either the default UI or a custom renderer.
 */
export function Timeline({
  entries,
  config = {},
  renderItem
}: TimelineProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <TimelineContext.Provider
      value={{
        entries,
        config,
        activeIndex,
        setActiveIndex
      }}
    >
      <section className="timeline">
        {entries.map((entry, index) =>
          renderItem ? (
            renderItem(entry, index)
          ) : (
            <TimelineItem
              key={entry.id}
              entry={entry}
              index={index}
            />
          )
        )}
      </section>
    </TimelineContext.Provider>
  );
}
