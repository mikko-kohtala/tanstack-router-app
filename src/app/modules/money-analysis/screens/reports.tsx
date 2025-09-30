import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../../components/ui/card";

const RPTS = [
  { name: "P&L Statement", range: "Q3 2025" },
  { name: "Cash Flow", range: "Last 60 days" },
  { name: "Spend by Category", range: "Year to date" },
];

export default function MoneyReportsScreen() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Money Analysis — Reports</h2>

      <Card>
        <CardHeader>
          <CardTitle>Generate Report</CardTitle>
          <CardDescription>Choose parameters to produce a report</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <label className="space-y-1">
              <span className="font-medium text-sm">Report</span>
              <select className="w-full rounded-md border px-3 py-2" defaultValue={RPTS[0].name}>
                {RPTS.map((r) => (
                  <option key={r.name} value={r.name}>
                    {r.name}
                  </option>
                ))}
              </select>
            </label>
            <label className="space-y-1">
              <span className="font-medium text-sm">From</span>
              <input className="w-full rounded-md border px-3 py-2" type="date" />
            </label>
            <label className="space-y-1">
              <span className="font-medium text-sm">To</span>
              <input className="w-full rounded-md border px-3 py-2" type="date" />
            </label>
            <div className="flex gap-2 md:col-span-3">
              <Button type="button">Generate</Button>
              <Button type="button" variant="outline">
                Download PDF
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Reports</CardTitle>
          <CardDescription>Download past reports</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            {RPTS.map((r) => (
              <li className="flex items-center justify-between rounded border p-3" key={r.name}>
                <div>
                  <div className="font-medium">{r.name}</div>
                  <div className="text-muted-foreground">{r.range}</div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    CSV
                  </Button>
                  <Button size="sm">PDF</Button>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
