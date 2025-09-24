import { Link, Outlet } from "@tanstack/react-router";

export const DashboardLayout = () => (
  <div>
    <h2>Dashboard</h2>
    <nav style={{ marginTop: "10px", marginBottom: "10px" }}>
      <Link to="/dashboard" style={{ marginRight: "10px" }}>
        Overview
      </Link>
      <Link to="/dashboard/analytics" style={{ marginRight: "10px" }}>
        Analytics
      </Link>
      <Link to="/dashboard/reports" style={{ marginRight: "10px" }}>
        Reports
      </Link>
      <Link to="/dashboard/settings">
        Settings
      </Link>
    </nav>
    <Outlet />
  </div>
);

export const DashboardOverview = () => (
  <div>Dashboard Overview - View your key metrics here</div>
);

export const DashboardAnalytics = () => (
  <div>
    <h3>Analytics</h3>
    <p>Page views: 1,000 | Clicks: 250</p>
  </div>
);

export const DashboardReports = () => (
  <div>
    <h3>Reports</h3>
    <ul>
      <li>Q1 Report</li>
      <li>Q2 Report</li>
      <li>Q3 Report</li>
    </ul>
  </div>
);

export const DashboardSettings = () => (
  <div>
    <h3>Dashboard Settings</h3>
    <p>Configure your dashboard preferences here.</p>
  </div>
);