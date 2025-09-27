import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";

export default function PocAnalyticsScreen() {
  const KPIS = [
    { label: "Avg. Build Time", value: "3m 12s" },
    { label: "Pass Rate", value: "92%" },
    { label: "Deploys/Week", value: "18" },
    { label: "Active Projects", value: "12" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">POC Creator — Analytics</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {KPIS.map((k) => (
          <Card key={k.label}>
            <CardContent className="p-5">
              <div className="text-muted-foreground text-xs">{k.label}</div>
              <div className="font-semibold text-2xl">{k.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Build Duration Trend</CardTitle>
          <CardDescription>Last 14 runs</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Simple bar chart placeholder */}
          <div className="flex h-40 items-end gap-2">
            {Array.from({ length: 14 }).map((_, i) => (
              <div
                key={i}
                className="w-4 rounded bg-blue-600/70"
                style={{ height: `${30 + ((i * 13) % 70)}%` }}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
