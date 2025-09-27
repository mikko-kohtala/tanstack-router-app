import { useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { createContext, useContext, useMemo } from "react";

type RouteContextValue = {
  companyId?: string;
  departmentId?: string;
  companyName?: string;
  departmentName?: string;
  moduleName?: string;
};

const RouteContext = createContext<RouteContextValue>({});

export function useRouteContext() {
  const context = useContext(RouteContext);
  if (context === undefined) {
    throw new Error("useRouteContext must be used within a RouteProvider");
  }
  return context;
}

type RouteProviderProps = {
  children: ReactNode;
  moduleName?: string;
};

// Company and department name mappings
const companyNames: Record<string, string> = {
  techcorp: "TechCorp Industries",
  globalfinance: "Global Finance Group",
  healthplus: "HealthPlus Medical",
};

const departmentNames: Record<string, string> = {
  engineering: "Engineering",
  marketing: "Marketing",
  trading: "Trading",
  compliance: "Compliance",
  clinical: "Clinical Operations",
  research: "Research & Development",
};

export function RouteProvider({ children, moduleName }: RouteProviderProps) {
  const routerState = useRouterState();

  const routeContext = useMemo(() => {
    const pathSegments = routerState.location.pathname.split("/").filter(Boolean);
    const companyId = pathSegments[0];
    const departmentId = pathSegments[1];

    return {
      companyId,
      departmentId,
      companyName: companyId ? companyNames[companyId] : undefined,
      departmentName: departmentId ? departmentNames[departmentId] : undefined,
      moduleName,
    };
  }, [routerState.location.pathname, moduleName]);

  return <RouteContext.Provider value={routeContext}>{children}</RouteContext.Provider>;
}
