import { Outlet, useNavigate } from "@tanstack/react-router";
import { Building2, LogOut } from "lucide-react";
import { RouteProvider, useRouteContext } from "../contexts/route-context";
import { Layout } from "./layouts/layout";
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
  const { companyId, departmentId, companyName, departmentName } = useRouteContext();

  const handleCompanyDepartmentChange = () => {
    navigate({ to: "/" });
  };

  const handleLogout = () => {
    navigate({ to: "/logout" });
  };

  return (
    <Layout.Root>
      <Layout.Header>
        <Layout.HeaderContent>
          <Layout.HeaderBar>
            <AppLogo />
            <HeaderActions
              companyId={companyId}
              companyName={companyName}
              departmentId={departmentId}
              departmentName={departmentName}
              onChangeCompanyDepartment={handleCompanyDepartmentChange}
              onLogout={handleLogout}
            />
          </Layout.HeaderBar>
        </Layout.HeaderContent>
      </Layout.Header>

      <main>
        <Outlet />
      </main>
    </Layout.Root>
  );
}

function AppLogo() {
  return (
    <div className="flex items-center">
      <Building2 className="mr-3 h-8 w-8 text-blue-600" />
      <h1 className="font-semibold text-gray-900 text-xl">Company Analysis</h1>
    </div>
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
          <Button onClick={onChangeCompanyDepartment} size="sm" variant="outline">
            Change Company/Department
          </Button>
        </>
      )}
      <Button className="gap-2" onClick={onLogout} size="sm" variant="ghost">
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
    <span className="text-gray-600 text-sm">
      <span className="font-medium">{companyName}</span>
      <span className="mx-2">•</span>
      <span className="font-medium">{departmentName}</span>
    </span>
  );
}
