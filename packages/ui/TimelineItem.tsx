"use client";

import type { TimelineEntry } from "@timeline/core";
import { useTimeline } from "@timeline/core";

export interface TimelineItemProps {
  entry: TimelineEntry;
  index: number;
}

/**
 * TimelineItem
 *
 * Renders a single entry within the timeline.
 * Visual styling and animation are intentionally minimal.
 */
export function TimelineItem({
  entry,
  index
}: TimelineItemProps) {
  const { activeIndex, setActiveIndex } = useTimeline();

  const isActive = index === activeIndex;

  return (
    <article
      className={`timeline-item${isActive ? " active" : ""}`}
      data-index={index}
      aria-current={isActive ? "step" : undefined}
      onMouseEnter={() => setActiveIndex(index)}
    >
      <header className="timeline-item__header">
        {entry.date && (
          <time className="timeline-item__date">
            {entry.date}
          </time>
        )}

        <h3 className="timeline-item__title">
          {entry.title}
        </h3>
      </header>

      {entry.description && (
        <p className="timeline-item__description">
          {entry.description}
        </p>
      )}
    </article>
  );
}
