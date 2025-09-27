import { createRootRoute, createRoute, Outlet } from "@tanstack/react-router";
import { AppModuleLayout } from "../components/app-module-layout";
import { CompanyDepartmentSelection } from "../components/company-department-selection";
import { RootLayout } from "../components/root-layout";
import { companyDepartmentLoader, moduleLoader, rootLoader } from "../loaders";
import ModuleNotFound from "./components/module-not-found";
import HrDashboard from "./modules/hr-configurator/screens/dashboard";
import HrPoliciesScreen from "./modules/hr-configurator/screens/policies";
import HrReportsScreen from "./modules/hr-configurator/screens/reports";
// Sub-page screens
import HrSettingsScreen from "./modules/hr-configurator/screens/settings";
import MoneyBudgetsScreen from "./modules/money-analysis/screens/budgets";
import MoneyDashboard from "./modules/money-analysis/screens/dashboard";
import MoneyReportsScreen from "./modules/money-analysis/screens/reports";
import MoneyTransactionsScreen from "./modules/money-analysis/screens/transactions";
import PocAnalyticsScreen from "./modules/poc-creator/screens/analytics";
import PocDashboard from "./modules/poc-creator/screens/dashboard";
import PocProjectsScreen from "./modules/poc-creator/screens/projects";
import PocTemplatesScreen from "./modules/poc-creator/screens/templates";

// Root route with top navigation and root loader
export const rootRoute = createRootRoute({
  loader: rootLoader,
  component: RootLayout,
});

// Index route - welcome page
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: CompanyDepartmentSelection,
});

// Company/Department route with validation loader
const companyDepartmentRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "$companyId/$departmentId",
  loader: companyDepartmentLoader,
  component: CompanyDepartmentSelection,
});

// HR Configurator layout route with children
const hrConfiguratorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "$companyId/$departmentId/hr-configurator",
  loader: moduleLoader,
  component: () => (
    <AppModuleLayout moduleName="HR Configurator">
      <Outlet />
    </AppModuleLayout>
  ),
});

const hrConfiguratorIndexRoute = createRoute({
  getParentRoute: () => hrConfiguratorRoute,
  path: "/",
  component: HrDashboard,
});

const hrSettingsRoute = createRoute({
  getParentRoute: () => hrConfiguratorRoute,
  path: "settings",
  component: HrSettingsScreen,
});

const hrPoliciesRoute = createRoute({
  getParentRoute: () => hrConfiguratorRoute,
  path: "policies",
  component: HrPoliciesScreen,
});

const hrReportsRoute = createRoute({
  getParentRoute: () => hrConfiguratorRoute,
  path: "reports",
  component: HrReportsScreen,
});

const hrNotFoundRoute = createRoute({
  getParentRoute: () => hrConfiguratorRoute,
  path: "$",
  component: () => <ModuleNotFound moduleName="HR Configurator" />,
});

// POC Creator layout route with children
const pocCreatorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "$companyId/$departmentId/poc-creator",
  loader: moduleLoader,
  component: () => (
    <AppModuleLayout moduleName="POC Creator">
      <Outlet />
    </AppModuleLayout>
  ),
});

const pocIndexRoute = createRoute({
  getParentRoute: () => pocCreatorRoute,
  path: "/",
  component: PocDashboard,
});

const pocProjectsRoute = createRoute({
  getParentRoute: () => pocCreatorRoute,
  path: "projects",
  component: PocProjectsScreen,
});

const pocTemplatesRoute = createRoute({
  getParentRoute: () => pocCreatorRoute,
  path: "templates",
  component: PocTemplatesScreen,
});

const pocAnalyticsRoute = createRoute({
  getParentRoute: () => pocCreatorRoute,
  path: "analytics",
  component: PocAnalyticsScreen,
});

const pocNotFoundRoute = createRoute({
  getParentRoute: () => pocCreatorRoute,
  path: "$",
  component: () => <ModuleNotFound moduleName="POC Creator" />,
});

// Money Analysis layout route with children
const moneyAnalysisRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "$companyId/$departmentId/money-analysis",
  loader: moduleLoader,
  component: () => (
    <AppModuleLayout moduleName="Money Analysis">
      <Outlet />
    </AppModuleLayout>
  ),
});

const moneyIndexRoute = createRoute({
  getParentRoute: () => moneyAnalysisRoute,
  path: "/",
  component: MoneyDashboard,
});

const moneyTransactionsRoute = createRoute({
  getParentRoute: () => moneyAnalysisRoute,
  path: "transactions",
  component: MoneyTransactionsScreen,
});

const moneyBudgetsRoute = createRoute({
  getParentRoute: () => moneyAnalysisRoute,
  path: "budgets",
  component: MoneyBudgetsScreen,
});

const moneyReportsRoute = createRoute({
  getParentRoute: () => moneyAnalysisRoute,
  path: "reports",
  component: MoneyReportsScreen,
});

const moneyNotFoundRoute = createRoute({
  getParentRoute: () => moneyAnalysisRoute,
  path: "$",
  component: () => <ModuleNotFound moduleName="Money Analysis" />,
});

// Build the route tree
export const routeTree = rootRoute.addChildren([
  indexRoute,
  companyDepartmentRoute,
  hrConfiguratorRoute.addChildren([
    hrConfiguratorIndexRoute,
    hrSettingsRoute,
    hrPoliciesRoute,
    hrReportsRoute,
    hrNotFoundRoute,
  ]),
  pocCreatorRoute.addChildren([
    pocIndexRoute,
    pocProjectsRoute,
    pocTemplatesRoute,
    pocAnalyticsRoute,
    pocNotFoundRoute,
  ]),
  moneyAnalysisRoute.addChildren([
    moneyIndexRoute,
    moneyTransactionsRoute,
    moneyBudgetsRoute,
    moneyReportsRoute,
    moneyNotFoundRoute,
  ]),
]);
