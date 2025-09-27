import { Button } from "../../../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";

const POLICIES = [
  { name: "Vacation & Leave", version: "1.3", updated: "2025-04-02" },
  { name: "Remote Work", version: "2.0", updated: "2025-02-12" },
  { name: "Code of Conduct", version: "1.8", updated: "2025-06-20" },
  { name: "Expense Reimbursement", version: "1.1", updated: "2025-01-07" },
];

export default function HrPoliciesScreen() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">HR Configurator — Policies</h2>

      <Card>
        <CardHeader>
          <CardTitle>Company Policies</CardTitle>
          <CardDescription>Manage and track policy documents</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full table-auto text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="px-2 py-2">Policy</th>
                  <th className="px-2 py-2">Version</th>
                  <th className="px-2 py-2">Last Updated</th>
                  <th className="px-2 py-2 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {POLICIES.map((p) => (
                  <tr key={p.name} className="border-b last:border-b-0">
                    <td className="px-2 py-2 font-medium">{p.name}</td>
                    <td className="px-2 py-2">{p.version}</td>
                    <td className="px-2 py-2 text-muted-foreground">
                      {p.updated}
                    </td>
                    <td className="px-2 py-2 text-right">
                      <div className="inline-flex gap-2">
                        <Button size="sm" variant="outline">
                          View
                        </Button>
                        <Button size="sm">Edit</Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4">
            <Button>Add New Policy</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
