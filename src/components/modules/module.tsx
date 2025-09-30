import { Link, useLocation } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import type * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ModuleNavigationItem = {
  name: string;
  href: string;
  icon?: LucideIcon;
};

type ModuleNavigationProps = {
  items: ModuleNavigationItem[];
  className?: string;
};

function ModuleNavigation({ items, className }: ModuleNavigationProps) {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className={cn("space-y-1", className)} data-slot="module-navigation">
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = currentPath === item.href;

        return (
          <Link
            className={cn(
              "flex items-center rounded-md px-3 py-2 font-medium text-sm transition-colors",
              isActive ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
            )}
            key={item.name}
            to={item.href}
          >
            {Icon && <Icon className="mr-3 h-4 w-4" />}
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}

type ModuleBackButtonProps = {
  companyId: string;
  departmentId: string;
  className?: string;
};

function ModuleBackButton({ companyId, departmentId, className }: ModuleBackButtonProps) {
  return (
    <Link params={{ companyId, departmentId }} to="/$companyId/$departmentId">
      <Button
        className={cn("w-full justify-start text-gray-300 hover:bg-gray-700 hover:text-white", className)}
        size="sm"
        variant="ghost"
      >
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back to Modules
      </Button>
    </Link>
  );
}

function ModuleTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3 className={cn("mb-2 font-semibold text-gray-100 text-sm", className)} data-slot="module-title" {...props} />
  );
}

export { ModuleNavigation, ModuleBackButton, ModuleTitle };
