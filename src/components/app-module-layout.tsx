import { useLocation } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { moduleBasePathFrom, moduleNavItems } from "../app/nav";
import { RouteProvider } from "../contexts/route-context";
import { LayoutContent, LayoutMain, LayoutSidebar, LayoutSidebarContent, LayoutSidebarHeader } from "./layouts/layout";
import { ModuleNavigation, ModuleTitle } from "./modules/module";

type AppModuleLayoutProps = {
  moduleName: string;
  children: ReactNode;
};

export function AppModuleLayout({ moduleName, children }: AppModuleLayoutProps) {
  return (
    <RouteProvider moduleName={moduleName}>
      <ModuleLayoutContent moduleName={moduleName}>{children}</ModuleLayoutContent>
    </RouteProvider>
  );
}

function ModuleLayoutContent({ moduleName, children }: AppModuleLayoutProps) {
  const location = useLocation();
  const currentPath = location.pathname;
  const basePath = moduleBasePathFrom(currentPath);
  const navItems = moduleNavItems(moduleName, basePath);

  return (
    <div className="flex h-full">
      <LayoutSidebar>
        <LayoutSidebarHeader>
          <ModuleTitle>{moduleName}</ModuleTitle>
        </LayoutSidebarHeader>
        <LayoutSidebarContent>
          <ModuleNavigation items={navItems} />
        </LayoutSidebarContent>
      </LayoutSidebar>
      <LayoutMain>
        <LayoutContent>{children}</LayoutContent>
      </LayoutMain>
    </div>
  );
}
