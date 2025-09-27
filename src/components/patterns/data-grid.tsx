import type * as React from "react";
import { cn } from "@/lib/utils";

type GridColumns = 1 | 2 | 3 | 4 | 5 | 6;

type DataGridProps = React.ComponentProps<"div"> & {
  columns?: GridColumns;
};

const columnClasses: Record<GridColumns, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  5: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
  6: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
};

export function DataGrid({ columns = 3, className, ...props }: DataGridProps) {
  return <div className={cn("grid gap-4", columnClasses[columns], className)} data-slot="data-grid" {...props} />;
}
