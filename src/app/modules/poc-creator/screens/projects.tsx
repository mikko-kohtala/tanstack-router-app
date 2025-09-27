import { Button } from "../../../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";

const PROJECTS = [
  { name: "Realtime Chat", status: "In Progress", owner: "Alex", progress: 62 },
  { name: "LLM Summarizer", status: "Planning", owner: "Bea", progress: 10 },
  { name: "Payments Sandbox", status: "Review", owner: "Chen", progress: 88 },
];

export default function PocProjectsScreen() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">POC Creator — Projects</h2>

      <Card>
        <CardHeader>
          <CardTitle>Active Projects</CardTitle>
          <CardDescription>Track progress and owners</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full table-auto text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="px-2 py-2">Name</th>
                  <th className="px-2 py-2">Owner</th>
                  <th className="px-2 py-2">Status</th>
                  <th className="px-2 py-2">Progress</th>
                  <th className="px-2 py-2 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {PROJECTS.map((p) => (
                  <tr key={p.name} className="border-b last:border-b-0">
                    <td className="px-2 py-2 font-medium">{p.name}</td>
                    <td className="px-2 py-2">{p.owner}</td>
                    <td className="px-2 py-2">{p.status}</td>
                    <td className="px-2 py-2">
                      <div className="h-2 w-40 rounded bg-gray-200">
                        <div
                          className="h-2 rounded bg-blue-600"
                          style={{ width: `${p.progress}%` }}
                        />
                      </div>
                    </td>
                    <td className="px-2 py-2 text-right">
                      <div className="inline-flex gap-2">
                        <Button size="sm" variant="outline">
                          Open
                        </Button>
                        <Button size="sm">Run</Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
