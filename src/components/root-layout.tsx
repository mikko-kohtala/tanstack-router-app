import { Link, Outlet, useLocation, useNavigate } from "@tanstack/react-router";
import { Building2, LogOut } from "lucide-react";
import { RouteProvider, useRouteContext } from "../contexts/route-context";
import { AppSidebar } from "./app-sidebar";
import { LayoutHeader, LayoutHeaderBar, LayoutHeaderContent, LayoutRoot } from "./layouts/layout";
import { Button } from "./ui/button";

export function RootLayout() {
  return (
    <RouteProvider>
      <RootLayoutContent />
    </RouteProvider>
  );
}

function RootLayoutContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const { companyId, departmentId, companyName, departmentName } = useRouteContext();

  const handleCompanyDepartmentChange = () => {
    navigate({ to: "/" });
  };

  const handleLogout = () => {
    navigate({ to: "/logout" });
  };

  const isInModule =
    location.pathname.includes("/hr-configurator") ||
    location.pathname.includes("/poc-creator") ||
    location.pathname.includes("/money-analysis");

  return (
    <LayoutRoot>
      <LayoutHeader>
        <LayoutHeaderContent>
          <LayoutHeaderBar>
            {companyId && departmentId ? (
              <Link
                className="flex items-center gap-2 text-gray-100 transition-colors hover:text-white"
                params={{ companyId, departmentId }}
                to="/$companyId/$departmentId"
              >
                <Building2 className="h-6 w-6" />
                <span className="font-semibold text-lg">{companyName || "Company Analysis"}</span>
              </Link>
            ) : (
              <Link className="flex items-center gap-2 text-gray-100 transition-colors hover:text-white" to="/">
                <Building2 className="h-6 w-6" />
                <span className="font-semibold text-lg">Company Analysis</span>
              </Link>
            )}
            <HeaderActions
              companyId={companyId}
              companyName={companyName}
              departmentId={departmentId}
              departmentName={departmentName}
              onChangeCompanyDepartment={handleCompanyDepartmentChange}
              onLogout={handleLogout}
            />
          </LayoutHeaderBar>
        </LayoutHeaderContent>
      </LayoutHeader>

      <div className="flex h-[calc(100vh-4rem)]">
        {!isInModule && <AppSidebar />}
        <main className="flex-1 overflow-y-auto bg-gray-100">
          <Outlet />
        </main>
      </div>
    </LayoutRoot>
  );
}

type HeaderActionsProps = {
  companyId?: string;
  departmentId?: string;
  companyName?: string;
  departmentName?: string;
  onChangeCompanyDepartment: () => void;
  onLogout: () => void;
};

function HeaderActions({
  companyId,
  departmentId,
  companyName,
  departmentName,
  onChangeCompanyDepartment,
  onLogout,
}: HeaderActionsProps) {
  return (
    <div className="flex items-center space-x-4">
      {companyId && departmentId && (
        <>
          <CompanyBadge companyName={companyName || companyId} departmentName={departmentName || departmentId} />
          <Button
            className="border-gray-600 bg-transparent text-gray-200 hover:bg-gray-700 hover:text-white"
            onClick={onChangeCompanyDepartment}
            size="sm"
            variant="outline"
          >
            Switch Company/Department
          </Button>
        </>
      )}
      <Button
        className="gap-2 text-gray-100 hover:bg-gray-700 hover:text-white"
        onClick={onLogout}
        size="sm"
        variant="ghost"
      >
        <LogOut className="h-4 w-4" />
        Logout
      </Button>
    </div>
  );
}

type CompanyBadgeProps = {
  companyName: string;
  departmentName: string;
};

function CompanyBadge({ companyName, departmentName }: CompanyBadgeProps) {
  return (
    <span className="text-gray-300 text-sm">
      <span className="font-medium">{companyName}</span>
      <span className="mx-2">•</span>
      <span className="font-medium">{departmentName}</span>
    </span>
  );
}
