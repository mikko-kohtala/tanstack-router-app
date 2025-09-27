import { createRootRoute, createRoute } from "@tanstack/react-router";
import { AppModuleLayout } from "./components/AppModuleLayout";
import { CompanyDepartmentSelection } from "./components/CompanyDepartmentSelection";
import { HRConfigurator } from "./components/modules/HRConfigurator";
import { MoneyAnalysis } from "./components/modules/MoneyAnalysis";
import { POCCreator } from "./components/modules/POCCreator";
import { RootLayout } from "./components/RootLayout";
import { companyDepartmentLoader, moduleLoader, rootLoader } from "./loaders";

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

// HR Configurator route with module loader
const hrConfiguratorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "$companyId/$departmentId/hr-configurator",
  loader: moduleLoader,
  component: () => (
    <AppModuleLayout moduleName="HR Configurator">
      <HRConfigurator />
    </AppModuleLayout>
  ),
});

// POC Creator route with module loader
const pocCreatorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "$companyId/$departmentId/poc-creator",
  loader: moduleLoader,
  component: () => (
    <AppModuleLayout moduleName="POC Creator">
      <POCCreator />
    </AppModuleLayout>
  ),
});

// Money Analysis route with module loader
const moneyAnalysisRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "$companyId/$departmentId/money-analysis",
  loader: moduleLoader,
  component: () => (
    <AppModuleLayout moduleName="Money Analysis">
      <MoneyAnalysis />
    </AppModuleLayout>
  ),
});

// Build the route tree
export const routeTree = rootRoute.addChildren([
  indexRoute,
  companyDepartmentRoute,
  hrConfiguratorRoute,
  pocCreatorRoute,
  moneyAnalysisRoute,
]);
