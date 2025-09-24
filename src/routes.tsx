import { createRootRoute, createRoute } from "@tanstack/react-router";
import {
  rootLoader,
  dashboardLoader,
  analyticsLoader,
  reportsLoader,
  productsLoader,
  featuredProductsLoader,
  categoriesLoader,
  usersLoader,
  activeUsersLoader,
  userRolesLoader,
} from "./loaders";
import { RootLayout } from "./components/Layout";
import { HomePage } from "./components/Home";
import {
  DashboardLayout,
  DashboardOverview,
  DashboardAnalytics,
  DashboardReports,
  DashboardSettings,
} from "./components/Dashboard";
import {
  ProductsLayout,
  ProductsList,
  ProductsFeatured,
  ProductsCategories,
} from "./components/Products";
import {
  UsersLayout,
  UsersList,
  UsersActive,
  UsersRoles,
} from "./components/Users";

// Root route with loader
export const rootRoute = createRootRoute({
  loader: rootLoader,
  component: RootLayout,
});

// Index route
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

// Dashboard routes
const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "dashboard",
  loader: dashboardLoader,
  component: DashboardLayout,
});

const dashboardIndexRoute = createRoute({
  getParentRoute: () => dashboardRoute,
  path: "/",
  component: DashboardOverview,
});

const dashboardAnalyticsRoute = createRoute({
  getParentRoute: () => dashboardRoute,
  path: "analytics",
  loader: analyticsLoader,
  component: DashboardAnalytics,
});

const dashboardReportsRoute = createRoute({
  getParentRoute: () => dashboardRoute,
  path: "reports",
  loader: reportsLoader,
  component: DashboardReports,
});

const dashboardSettingsRoute = createRoute({
  getParentRoute: () => dashboardRoute,
  path: "settings",
  component: DashboardSettings,
});

// Products routes
const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "products",
  loader: productsLoader,
  component: ProductsLayout,
});

const productsIndexRoute = createRoute({
  getParentRoute: () => productsRoute,
  path: "/",
  component: ProductsList,
});

const productsFeaturedRoute = createRoute({
  getParentRoute: () => productsRoute,
  path: "featured",
  loader: featuredProductsLoader,
  component: ProductsFeatured,
});

const productsCategoriesRoute = createRoute({
  getParentRoute: () => productsRoute,
  path: "categories",
  loader: categoriesLoader,
  component: ProductsCategories,
});

// Users routes
const usersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "users",
  loader: usersLoader,
  component: UsersLayout,
});

const usersIndexRoute = createRoute({
  getParentRoute: () => usersRoute,
  path: "/",
  component: UsersList,
});

const usersActiveRoute = createRoute({
  getParentRoute: () => usersRoute,
  path: "active",
  loader: activeUsersLoader,
  component: UsersActive,
});

const usersRolesRoute = createRoute({
  getParentRoute: () => usersRoute,
  path: "roles",
  loader: userRolesLoader,
  component: UsersRoles,
});

// Build the route tree
export const routeTree = rootRoute.addChildren([
  indexRoute,
  dashboardRoute.addChildren([
    dashboardIndexRoute,
    dashboardAnalyticsRoute,
    dashboardReportsRoute,
    dashboardSettingsRoute,
  ]),
  productsRoute.addChildren([
    productsIndexRoute,
    productsFeaturedRoute,
    productsCategoriesRoute,
  ]),
  usersRoute.addChildren([usersIndexRoute, usersActiveRoute, usersRolesRoute]),
]);
