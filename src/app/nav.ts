import type { LucideIcon } from "lucide-react";
import { BarChart, FileText, Home, Settings } from "lucide-react";

export type NavItem = { name: string; href: string; icon?: LucideIcon };

const MODULE_BASE_SEGMENTS = 3;

export function moduleBasePathFrom(pathname: string): string {
  const parts = pathname.split("/").filter(Boolean);
  // companyId / departmentId / module-slug
  return `/${parts.slice(0, MODULE_BASE_SEGMENTS).join("/")}`;
}

export function moduleNavItems(moduleName: string, basePath: string): NavItem[] {
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
      return [{ name: "Dashboard", href: basePath }];
  }
}
