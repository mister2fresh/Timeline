import * as React from "react";
import { TimelineEntry } from "@timeline/core";

export interface TimelineMediaProps {
  entry: TimelineEntry;
  className?: string;
}

/**
 * TimelineMedia
 *
 * Responsible for rendering visual media for a timeline entry.
 * This component is intentionally dumb:
 * - No animation
 * - No layout assumptions
 * - No scroll logic
 *
 * This keeps it reusable across themes and motion systems.
 */
export function TimelineMedia({
  entry,
  className,
}: TimelineMediaProps) {
  if (!entry.media) return null;

  const { type, src, alt } = entry.media;

  return (
    <div className={className}>
      {type === "image" && (
        <img
          src={src}
          alt={alt ?? entry.title}
          style={{ maxWidth: "100%", height: "auto" }}
          loading="lazy"
        />
      )}

      {type === "video" && (
        <video
          src={src}
          controls
          style={{ maxWidth: "100%" }}
        />
      )}
    </div>
  );
}
