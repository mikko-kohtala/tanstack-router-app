import { Award, Calendar, Clock, Shield, TrendingUp, Users } from "lucide-react";
import { PageContent, PageDescription, PageHeader, PageRoot, PageTitle } from "../../../../components/layouts/page";
import { ActivityFeedItem, ActivityFeedRoot, ActivityFeedText } from "../../../../components/patterns/activity-feed";
import { MetricDisplay, MetricGridRoot } from "../../../../components/patterns/metric-display";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../../components/ui/card";

export default function HrDashboard() {
  const stats = [
    { label: "Total Employees", value: "1,234", icon: Users, change: "+12%", changeType: "positive" as const },
    { label: "Open Positions", value: "47", icon: Award, change: "+8%", changeType: "positive" as const },
    { label: "Active Policies", value: "28", icon: Shield, change: "0%", changeType: "neutral" as const },
    { label: "Avg. Attendance", value: "94%", icon: Clock, change: "+2%", changeType: "positive" as const },
  ];

  const quickActions = [
    { label: "Add New Employee", icon: Users },
    { label: "Update Policy", icon: Shield },
    { label: "Schedule Review", icon: Calendar },
    { label: "View Reports", icon: TrendingUp },
  ];

  const recentActivities = [
    "Updated vacation policy for Engineering department",
    "Added 5 new employees to Sales team",
    "Modified performance review schedule",
    "Updated remote work guidelines",
  ];

  return (
    <PageRoot>
      <PageHeader>
        <PageTitle>HR Configurator</PageTitle>
        <PageDescription>Manage your organization's human resources settings and policies</PageDescription>
      </PageHeader>

      <PageContent>
        <MetricGridRoot>
          {stats.map((stat) => (
            <MetricDisplay key={stat.label} {...stat} />
          ))}
        </MetricGridRoot>

        <QuickActionsCard actions={quickActions} />

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest HR configuration changes</CardDescription>
          </CardHeader>
          <CardContent>
            <ActivityFeedRoot>
              {recentActivities.map((activity) => (
                <ActivityFeedItem key={activity}>
                  <ActivityFeedText>{activity}</ActivityFeedText>
                </ActivityFeedItem>
              ))}
            </ActivityFeedRoot>
          </CardContent>
        </Card>
      </PageContent>
    </PageRoot>
  );
}

type QuickAction = {
  label: string;
  icon: typeof Users;
};

type QuickActionsCardProps = {
  actions: QuickAction[];
};

function QuickActionsCard({ actions }: QuickActionsCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Common HR configuration tasks</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {actions.map((action) => {
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
  );
}
