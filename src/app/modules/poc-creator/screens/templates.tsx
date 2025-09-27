import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../../components/ui/card";

const TEMPLATES = [
  { name: "REST API", desc: "Fast Express API skeleton" },
  { name: "Web Dashboard", desc: "React + Tailwind admin shell" },
  { name: "Data Pipeline", desc: "ETL steps with queue" },
  { name: "Edge Worker", desc: "Serverless function playground" },
];

export default function PocTemplatesScreen() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">POC Creator — Templates</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {TEMPLATES.map((t) => (
          <Card key={t.name}>
            <CardHeader>
              <CardTitle>{t.name}</CardTitle>
              <CardDescription>{t.desc}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Button>Use Template</Button>
                <Button variant="outline">Preview</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
