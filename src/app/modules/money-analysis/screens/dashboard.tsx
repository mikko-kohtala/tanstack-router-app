import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  DollarSign,
  Download,
  PieChart,
  TrendingUp,
} from "lucide-react";
import { Button } from "../../../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";

export default function MoneyDashboard() {
  const financialMetrics = [
    {
      label: "Total Revenue",
      value: "$2.4M",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
    },
    {
      label: "Operating Costs",
      value: "$1.8M",
      change: "+8.2%",
      trend: "up",
      icon: TrendingUp,
    },
    {
      label: "Net Profit",
      value: "$642K",
      change: "+23.1%",
      trend: "up",
      icon: BarChart3,
    },
    {
      label: "Burn Rate",
      value: "$125K/mo",
      change: "-5.3%",
      trend: "down",
      icon: PieChart,
    },
  ];

  const departments = [
    { name: "Engineering", budget: "$850K", spent: "$612K", percentage: 72 },
    { name: "Sales", budget: "$450K", spent: "$380K", percentage: 84 },
    { name: "Marketing", budget: "$320K", spent: "$298K", percentage: 93 },
    { name: "Operations", budget: "$180K", spent: "$95K", percentage: 53 },
  ];

  const recentTransactions = [
    {
      description: "AWS Cloud Services",
      amount: "-$12,450",
      category: "Infrastructure",
      date: "Dec 15, 2024",
    },
    {
      description: "Client Payment - Project Alpha",
      amount: "+$85,000",
      category: "Revenue",
      date: "Dec 14, 2024",
    },
    {
      description: "Software Licenses",
      amount: "-$3,200",
      category: "Tools",
      date: "Dec 13, 2024",
    },
    {
      description: "Consulting Services",
      amount: "+$25,000",
      category: "Revenue",
      date: "Dec 12, 2024",
    },
    {
      description: "Office Rent Q4",
      amount: "-$18,500",
      category: "Operations",
      date: "Dec 10, 2024",
    },
  ];

  const BudgetThresholdHigh = 90;
  const BudgetThresholdMedium = 75;

  const getBudgetColor = (percentage: number) => {
    if (percentage >= BudgetThresholdHigh) {
      return "text-red-600 bg-red-100";
    }
    if (percentage >= BudgetThresholdMedium) {
      return "text-yellow-600 bg-yellow-100";
    }
    return "text-green-600 bg-green-100";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="font-bold text-2xl text-gray-900">Money Analysis</h2>
          <p className="mt-1 text-gray-600">
            Comprehensive financial data analysis and reporting
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700">
            Generate Analysis
          </Button>
        </div>
      </div>

      {/* Financial Metrics */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {financialMetrics.map((metric) => {
          const Icon = metric.icon;
          const TrendIcon =
            metric.trend === "up" ? ArrowUpRight : ArrowDownRight;
          const trendColor =
            metric.trend === "up" ? "text-green-600" : "text-red-600";

          return (
            <Card key={metric.label}>
              <CardContent className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-gray-600 text-sm">{metric.label}</p>
                  <Icon className="h-5 w-5 text-purple-600" />
                </div>
                <p className="font-bold text-2xl text-gray-900">
                  {metric.value}
                </p>
                <div className={`mt-2 flex items-center ${trendColor}`}>
                  <TrendIcon className="mr-1 h-4 w-4" />
                  <span className="font-medium text-sm">{metric.change}</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Department Budgets */}
      <Card>
        <CardHeader>
          <CardTitle>Department Budget Analysis</CardTitle>
          <CardDescription>
            Current spending vs allocated budgets
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {departments.map((dept) => (
              <div className="space-y-2" key={dept.name}>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">{dept.name}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-600 text-sm">
                      {dept.spent} / {dept.budget}
                    </span>
                    <span
                      className={`rounded-full px-2 py-1 text-xs ${getBudgetColor(dept.percentage)}`}
                    >
                      {dept.percentage}%
                    </span>
                  </div>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-200">
                  <div
                    className={`h-2 rounded-full transition-all ${(() => {
                      if (dept.percentage >= BudgetThresholdHigh) {
                        return "bg-red-500";
                      }
                      if (dept.percentage >= BudgetThresholdMedium) {
                        return "bg-yellow-500";
                      }
                      return "bg-green-500";
                    })()}`}
                    style={{ width: `${dept.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Latest financial activities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentTransactions.map((transaction) => (
              <div
                className="flex items-center justify-between rounded-lg p-3 hover:bg-gray-50"
                key={`${transaction.date}-${transaction.description}`}
              >
                <div className="flex-1">
                  <p className="font-medium text-gray-900">
                    {transaction.description}
                  </p>
                  <div className="mt-1 flex items-center gap-3">
                    <span className="text-gray-500 text-xs">
                      {transaction.date}
                    </span>
                    <span className="rounded-full bg-gray-100 px-2 py-1 text-gray-600 text-xs">
                      {transaction.category}
                    </span>
                  </div>
                </div>
                <div
                  className={`font-semibold ${
                    transaction.amount.startsWith("+")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {transaction.amount}
                </div>
              </div>
            ))}
          </div>
          <Button className="mt-4 w-full" variant="outline">
            View All Transactions
          </Button>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card className="cursor-pointer transition-shadow hover:shadow-md">
          <CardContent className="p-6">
            <BarChart3 className="mb-3 h-8 w-8 text-purple-600" />
            <h3 className="font-semibold text-gray-900">Budget Forecast</h3>
            <p className="mt-1 text-gray-600 text-sm">
              Analyze spending trends and projections
            </p>
          </CardContent>
        </Card>
        <Card className="cursor-pointer transition-shadow hover:shadow-md">
          <CardContent className="p-6">
            <PieChart className="mb-3 h-8 w-8 text-blue-600" />
            <h3 className="font-semibold text-gray-900">Cost Breakdown</h3>
            <p className="mt-1 text-gray-600 text-sm">
              Detailed analysis by category
            </p>
          </CardContent>
        </Card>
        <Card className="cursor-pointer transition-shadow hover:shadow-md">
          <CardContent className="p-6">
            <TrendingUp className="mb-3 h-8 w-8 text-green-600" />
            <h3 className="font-semibold text-gray-900">Revenue Insights</h3>
            <p className="mt-1 text-gray-600 text-sm">
              Growth opportunities and trends
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
