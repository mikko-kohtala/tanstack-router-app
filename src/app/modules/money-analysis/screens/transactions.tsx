import { Button } from "../../../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";

const TX = [
  { date: "2025-09-01", desc: "Stripe Payout", amount: 85_000, type: "+" },
  { date: "2025-09-03", desc: "AWS", amount: -12_450, type: "-" },
  { date: "2025-09-05", desc: "Contractor", amount: -8200, type: "-" },
  { date: "2025-09-09", desc: "Enterprise License", amount: -3200, type: "-" },
];

export default function MoneyTransactionsScreen() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Money Analysis — Transactions</h2>

      <Card>
        <CardHeader>
          <CardTitle>Filter</CardTitle>
          <CardDescription>Search and export transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
            <input
              className="rounded-md border px-3 py-2"
              placeholder="Search description"
            />
            <input className="rounded-md border px-3 py-2" type="date" />
            <input className="rounded-md border px-3 py-2" type="date" />
            <div className="flex gap-2">
              <Button>Apply</Button>
              <Button variant="outline">Export CSV</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Latest activity</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full table-auto text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="px-2 py-2">Date</th>
                  <th className="px-2 py-2">Description</th>
                  <th className="px-2 py-2 text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                {TX.map((t) => (
                  <tr
                    className="border-b last:border-b-0"
                    key={`${t.date}-${t.desc}`}
                  >
                    <td className="px-2 py-2">{t.date}</td>
                    <td className="px-2 py-2">{t.desc}</td>
                    <td className="px-2 py-2 text-right font-medium">
                      <span
                        className={
                          t.type === "+" ? "text-green-600" : "text-red-600"
                        }
                      >
                        {t.type}
                        {Math.abs(t.amount).toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </span>
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
