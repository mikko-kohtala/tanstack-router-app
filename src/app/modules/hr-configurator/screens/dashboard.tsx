import { Award, Calendar, Clock, Shield, TrendingUp, Users } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../../components/ui/card";

export default function HrDashboard() {
  const stats = [
    { label: "Total Employees", value: "1,234", icon: Users, change: "+12%" },
    { label: "Open Positions", value: "47", icon: Award, change: "+8%" },
    { label: "Active Policies", value: "28", icon: Shield, change: "0%" },
    { label: "Avg. Attendance", value: "94%", icon: Clock, change: "+2%" },
  ];

  const quickActions = [
    { label: "Add New Employee", icon: Users },
    { label: "Update Policy", icon: Shield },
    { label: "Schedule Review", icon: Calendar },
    { label: "View Reports", icon: TrendingUp },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="font-bold text-2xl text-gray-900">HR Configurator</h2>
        <p className="mt-1 text-gray-600">Manage your organization's human resources settings and policies</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">{stat.label}</p>
                    <p className="mt-1 font-bold text-2xl text-gray-900">{stat.value}</p>
                    <p className="mt-1 text-green-600 text-sm">{stat.change}</p>
                  </div>
                  <div className="rounded-lg bg-blue-50 p-3">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common HR configuration tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <Button
                  className="flex h-24 flex-col items-center justify-center space-y-2"
                  key={action.label}
                  variant="outline"
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-center text-xs">{action.label}</span>
                </Button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest HR configuration changes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              "Updated vacation policy for Engineering department",
              "Added 5 new employees to Sales team",
              "Modified performance review schedule",
              "Updated remote work guidelines",
            ].map((activity) => (
              <div className="flex items-start space-x-3" key={activity}>
                <div className="mt-1.5 h-2 w-2 rounded-full bg-blue-600" />
                <p className="text-gray-600 text-sm">{activity}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
