export type TimelineMedia =
  | {
      type: "image";
      src: string;
      alt?: string;
    }
  | {
      type: "video";
      src: string;
      poster?: string;
    }
  | {
      type: "custom";
      render: () => JSX.Element;
    };

export interface TimelineEntry {
  /** Unique identifier for this point in time */
  id: string;

  /** Primary heading shown in the timeline */
  title: string;

  /** Human-readable time label (date, phase, milestone) */
  date?: string;

  /** Short narrative or explanation */
  description?: string;

  /** Optional media associated with this entry */
  media?: TimelineMedia[];

  /** Optional labels for filtering or grouping */
  tags?: string[];

  /** Open-ended metadata for advanced use cases */
  meta?: Record<string, any>;
}

export interface TimelineConfig {
  /** Timeline orientation */
  layout?: "vertical" | "horizontal";

  /** Visual alignment strategy */
  align?: "left" | "right" | "alternate";

  /** Enable or disable animations */
  animated?: boolean;

  /** Enable scroll snapping or step navigation */
  snap?: boolean;

  /** Theme name or identifier */
  theme?: string;
}

export type TimelineLayout = TimelineConfig["layout"];
export type TimelineAlign = TimelineConfig["align"];
