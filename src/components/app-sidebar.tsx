import { Link, useLocation } from "@tanstack/react-router";
import { DollarSign, FileText, Home, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouteContext } from "../contexts/route-context";

type NavItem = {
  name: string;
  href: string;
  icon: typeof Home;
};

export function AppSidebar() {
  const location = useLocation();
  const { companyId = "", departmentId = "" } = useRouteContext();
  const currentPath = location.pathname;

  const hasCompanyContext = companyId && departmentId;

  const navItems: NavItem[] = [
    {
      name: "Home",
      href: hasCompanyContext ? `/${companyId}/${departmentId}` : "/",
      icon: Home,
    },
    ...(hasCompanyContext
      ? [
          {
            name: "HR Configurator",
            href: `/${companyId}/${departmentId}/hr-configurator`,
            icon: Users,
          },
          {
            name: "POC Creator",
            href: `/${companyId}/${departmentId}/poc-creator`,
            icon: FileText,
          },
          {
            name: "Money Analysis",
            href: `/${companyId}/${departmentId}/money-analysis`,
            icon: DollarSign,
          },
        ]
      : []),
  ];

  return (
    <aside className="w-64 border-gray-700 border-r bg-gray-800 text-gray-100">
      <nav className="space-y-1 p-4 pt-6">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            currentPath.startsWith(item.href) && (item.name === "Home" ? currentPath === item.href : true);

          return (
            <Link
              className={cn(
                "flex items-center rounded-md px-3 py-2.5 font-medium text-sm transition-colors",
                isActive ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
              )}
              key={item.name}
              to={item.href}
            >
              <Icon className="mr-3 h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
