import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";

const CATS = [
  { name: "Engineering", limit: 850000, used: 612000 },
  { name: "Sales", limit: 450000, used: 380000 },
  { name: "Marketing", limit: 320000, used: 298000 },
  { name: "Operations", limit: 180000, used: 95000 },
];

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
              const pct = Math.round((c.used / c.limit) * 100);
              const bar =
                pct >= 90
                  ? "bg-red-500"
                  : pct >= 75
                    ? "bg-yellow-500"
                    : "bg-green-500";
              return (
                <div key={c.name} className="space-y-2">
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
                      (
                      <span
                        className={
                          pct >= 90
                            ? "text-red-600"
                            : pct >= 75
                              ? "text-yellow-600"
                              : "text-green-600"
                        }
                      >
                        {pct}%
                      </span>
                      )
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
