import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../../components/ui/card";

const REPORTS = [
  { name: "Headcount Summary", period: "Last 30 days" },
  { name: "Attrition Analysis", period: "Quarter to date" },
  { name: "Time Off Usage", period: "Year to date" },
];

export default function HrReportsScreen() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">HR Configurator — Reports</h2>

      <Card>
        <CardHeader>
          <CardTitle>Generate Report</CardTitle>
          <CardDescription>Choose a report and period</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <label className="space-y-1">
              <span className="font-medium text-sm">Report</span>
              <select className="w-full rounded-md border px-3 py-2" defaultValue={REPORTS[0].name}>
                {REPORTS.map((r) => (
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
                Export CSV
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Reports</CardTitle>
          <CardDescription>Quick access to past runs</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            {REPORTS.map((r) => (
              <li className="flex items-center justify-between rounded border p-3" key={r.name}>
                <div>
                  <div className="font-medium">{r.name}</div>
                  <div className="text-muted-foreground">{r.period}</div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    Download
                  </Button>
                  <Button size="sm">Open</Button>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
