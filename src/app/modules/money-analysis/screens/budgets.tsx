import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";

const CATS = [
  { name: "Engineering", limit: 850_000, used: 612_000 },
  { name: "Sales", limit: 450_000, used: 380_000 },
  { name: "Marketing", limit: 320_000, used: 298_000 },
  { name: "Operations", limit: 180_000, used: 95_000 },
];

const PERCENT_DENOMINATOR = 100;
const THRESHOLD_ALERT = 90;
const THRESHOLD_WARN = 75;

function barClass(pct: number): string {
  if (pct >= THRESHOLD_ALERT) {
    return "bg-red-500";
  }
  if (pct >= THRESHOLD_WARN) {
    return "bg-yellow-500";
  }
  return "bg-green-500";
}

function textClass(pct: number): string {
  if (pct >= THRESHOLD_ALERT) {
    return "text-red-600";
  }
  if (pct >= THRESHOLD_WARN) {
    return "text-yellow-600";
  }
  return "text-green-600";
}

export default function MoneyBudgetsScreen() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Money Analysis — Budgets</h2>

      <Card>
        <CardHeader>
          <CardTitle>Budget Utilization</CardTitle>
          <CardDescription>Department spend vs. limits</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {CATS.map((c) => {
              const pct = Math.round((c.used / c.limit) * PERCENT_DENOMINATOR);
              const bar = barClass(pct);
              return (
                <div className="space-y-2" key={c.name}>
                  <div className="flex items-center justify-between text-sm">
                    <div className="font-medium">{c.name}</div>
                    <div className="text-muted-foreground">
                      {c.used.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                      {" / "}
                      {c.limit.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}{" "}
                      ( <span className={textClass(pct)}>{pct}%</span> )
                    </div>
                  </div>
                  <div className="h-2 w-full rounded bg-gray-200">
                    <div
                      className={`h-2 rounded ${bar}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
