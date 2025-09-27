import { useLocation } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { moduleBasePathFrom, moduleNavItems } from "../app/nav";
import { RouteProvider, useRouteContext } from "../contexts/route-context";
import { Layout } from "./layouts/layout";
import { Module } from "./modules/module";

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
  const { companyId = "", departmentId = "" } = useRouteContext();
  const currentPath = location.pathname;
  const basePath = moduleBasePathFrom(currentPath);
  const navItems = moduleNavItems(moduleName, basePath);

  return (
    <Layout.Body>
      <Layout.Sidebar>
        <Layout.SidebarHeader>
          <Module.BackButton companyId={companyId} departmentId={departmentId} />
        </Layout.SidebarHeader>
        <Layout.SidebarContent>
          <Module.Title>{moduleName}</Module.Title>
          <Module.Navigation items={navItems} />
        </Layout.SidebarContent>
      </Layout.Sidebar>
      <Layout.Main>
        <Layout.Content>{children}</Layout.Content>
      </Layout.Main>
    </Layout.Body>
  );
}
