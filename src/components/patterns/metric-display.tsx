import type { LucideIcon } from "lucide-react";
import type * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type MetricDisplayProps = {
  label: string;
  value: string | number;
  icon?: LucideIcon;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  iconColor?: string;
  iconBackground?: string;
  className?: string;
};

export function MetricDisplay({
  label,
  value,
  icon: Icon,
  change,
  changeType = "positive",
  iconColor = "text-blue-600",
  iconBackground = "bg-blue-50",
  className,
}: MetricDisplayProps) {
  const changeColors = {
    positive: "text-green-600",
    negative: "text-red-600",
    neutral: "text-gray-600",
  };

  return (
    <Card className={className}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm">{label}</p>
            <p className="mt-1 font-bold text-2xl text-gray-900">{value}</p>
            {change && <p className={cn("mt-1 text-sm", changeColors[changeType])}>{change}</p>}
          </div>
          {Icon && (
            <div className={cn("rounded-lg p-3", iconBackground)}>
              <Icon className={cn("h-6 w-6", iconColor)} />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

function MetricGridRoot({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4", className)}
      data-slot="metric-grid"
      {...props}
    />
  );
}

export const MetricGrid = {
  Root: MetricGridRoot,
};
