import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";

const BASE_HEIGHT = 30;
const HEIGHT_FACTOR = 13;
const HEIGHT_MOD = 70;
const BARS = Array.from({ length: 14 }, (_, i) => ({
  id: `run-${i}`,
  heightPct: BASE_HEIGHT + ((i * HEIGHT_FACTOR) % HEIGHT_MOD),
}));

export default function PocAnalyticsScreen() {
  const Kpis = [
    { label: "Avg. Build Time", value: "3m 12s" },
    { label: "Pass Rate", value: "92%" },
    { label: "Deploys/Week", value: "18" },
    { label: "Active Projects", value: "12" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">POC Creator — Analytics</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {Kpis.map((k) => (
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
            {BARS.map((b) => (
              <div
                className="w-4 rounded bg-blue-600/70"
                key={b.id}
                style={{ height: `${b.heightPct}%` }}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
