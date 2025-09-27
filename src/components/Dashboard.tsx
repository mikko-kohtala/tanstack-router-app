import { Link, Outlet } from "@tanstack/react-router";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export const DashboardLayout = () => (
  <div className="space-y-6">
    <Card>
      <CardHeader>
        <CardTitle>Dashboard</CardTitle>
        <CardDescription>Monitor your key metrics and reports</CardDescription>
      </CardHeader>
      <CardContent>
        <nav className="flex gap-2">
          <Link to="/dashboard">
            <Button variant="outline" size="sm">Overview</Button>
          </Link>
          <Link to="/dashboard/analytics">
            <Button variant="outline" size="sm">Analytics</Button>
          </Link>
          <Link to="/dashboard/reports">
            <Button variant="outline" size="sm">Reports</Button>
          </Link>
          <Link to="/dashboard/settings">
            <Button variant="outline" size="sm">Settings</Button>
          </Link>
        </nav>
      </CardContent>
    </Card>
    <Outlet />
  </div>
);

export const DashboardOverview = () => (
  <Card>
    <CardHeader>
      <CardTitle>Overview</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">View your key metrics here</p>
    </CardContent>
  </Card>
);

export const DashboardAnalytics = () => (
  <Card>
    <CardHeader>
      <CardTitle>Analytics</CardTitle>
    </CardHeader>
    <CardContent className="space-y-2">
      <div className="flex justify-between">
        <span className="text-muted-foreground">Page views:</span>
        <span className="font-semibold">1,000</span>
      </div>
      <div className="flex justify-between">
        <span className="text-muted-foreground">Clicks:</span>
        <span className="font-semibold">250</span>
      </div>
    </CardContent>
  </Card>
);

export const DashboardReports = () => (
  <Card>
    <CardHeader>
      <CardTitle>Reports</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2">
        <li className="flex items-center">
          <span className="text-muted-foreground">•</span>
          <span className="ml-2">Q1 Report</span>
        </li>
        <li className="flex items-center">
          <span className="text-muted-foreground">•</span>
          <span className="ml-2">Q2 Report</span>
        </li>
        <li className="flex items-center">
          <span className="text-muted-foreground">•</span>
          <span className="ml-2">Q3 Report</span>
        </li>
      </ul>
    </CardContent>
  </Card>
);

export const DashboardSettings = () => (
  <Card>
    <CardHeader>
      <CardTitle>Dashboard Settings</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">Configure your dashboard preferences here.</p>
    </CardContent>
  </Card>
);