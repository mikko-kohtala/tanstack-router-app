import { Link, useLocation, useRouterState } from "@tanstack/react-router";
import { BarChart, ChevronLeft, FileText, Home, Settings } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";

type AppModuleLayoutProps = {
  moduleName: string;
  children: ReactNode;
};

export function AppModuleLayout({
  moduleName,
  children,
}: AppModuleLayoutProps) {
  const location = useLocation();
  const routerState = useRouterState();

  // Extract params from the current location path
  const pathSegments = routerState.location.pathname.split("/").filter(Boolean);
  const companyId = pathSegments[0];
  const departmentId = pathSegments[1];

  const currentPath = location.pathname;

  // Different sidebar items based on module
  const getSidebarItems = () => {
    const ModulePathSegments = 4;
    const basePath = currentPath
      .split("/")
      .slice(0, ModulePathSegments)
      .join("/");

    switch (moduleName) {
      case "HR Configurator":
        return [
          { name: "Dashboard", icon: Home, href: basePath },
          {
            name: "Employee Settings",
            icon: Settings,
            href: `${basePath}/settings`,
          },
          { name: "Policies", icon: FileText, href: `${basePath}/policies` },
          { name: "Reports", icon: BarChart, href: `${basePath}/reports` },
        ];
      case "POC Creator":
        return [
          { name: "Dashboard", icon: Home, href: basePath },
          { name: "Projects", icon: FileText, href: `${basePath}/projects` },
          { name: "Templates", icon: Settings, href: `${basePath}/templates` },
          { name: "Analytics", icon: BarChart, href: `${basePath}/analytics` },
        ];
      case "Money Analysis":
        return [
          { name: "Dashboard", icon: Home, href: basePath },
          {
            name: "Transactions",
            icon: FileText,
            href: `${basePath}/transactions`,
          },
          { name: "Budgets", icon: Settings, href: `${basePath}/budgets` },
          { name: "Reports", icon: BarChart, href: `${basePath}/reports` },
        ];
      default:
        return [];
    }
  };

  const sidebarItems = getSidebarItems();

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      {/* Sidebar */}
      <div className="w-64 border-gray-200 border-r bg-white">
        <div className="border-gray-200 border-b p-4">
          <Link
            params={{ companyId, departmentId }}
            to="/$companyId/$departmentId"
          >
            <Button className="w-full justify-start" size="sm" variant="ghost">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Modules
            </Button>
          </Link>
        </div>

        <div className="p-4">
          <h3 className="mb-2 font-semibold text-gray-900 text-sm">
            {moduleName}
          </h3>
          <nav className="space-y-1">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPath === item.href;

              return (
                <Link
                  className={cn(
                    "flex items-center rounded-md px-3 py-2 font-medium text-sm transition-colors",
                    isActive
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  )}
                  key={item.name}
                  to={item.href}
                >
                  <Icon className="mr-3 h-4 w-4" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
}
