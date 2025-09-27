import type * as React from "react";
import { cn } from "@/lib/utils";

function ActivityFeedRoot({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("space-y-4", className)} data-slot="activity-feed" {...props} />;
}

type ActivityItemProps = React.ComponentProps<"div"> & {
  showIndicator?: boolean;
  indicatorColor?: string;
};

function ActivityFeedItem({
  showIndicator = true,
  indicatorColor = "bg-blue-600",
  className,
  children,
  ...props
}: ActivityItemProps) {
  return (
    <div className={cn("flex items-start space-x-3", className)} data-slot="activity-item" {...props}>
      {showIndicator && <div className={cn("mt-1.5 h-2 w-2 rounded-full", indicatorColor)} />}
      <div className="flex-1">{children}</div>
    </div>
  );
}

function ActivityFeedText({ className, ...props }: React.ComponentProps<"p">) {
  return <p className={cn("text-gray-600 text-sm", className)} data-slot="activity-text" {...props} />;
}

function ActivityFeedTime({ className, ...props }: React.ComponentProps<"time">) {
  return <time className={cn("text-gray-500 text-xs", className)} data-slot="activity-time" {...props} />;
}

function ActivityFeedTitle({ className, ...props }: React.ComponentProps<"h4">) {
  return <h4 className={cn("font-medium text-gray-900 text-sm", className)} data-slot="activity-title" {...props} />;
}

export const ActivityFeed = {
  Root: ActivityFeedRoot,
  Item: ActivityFeedItem,
  Text: ActivityFeedText,
  Time: ActivityFeedTime,
  Title: ActivityFeedTitle,
};
