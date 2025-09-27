import { Outlet, useNavigate, useRouterState } from "@tanstack/react-router";
import { Building2 } from "lucide-react";
import { Button } from "./ui/button";

export function RootLayout() {
  const navigate = useNavigate();
  const routerState = useRouterState();

  // Extract params from the current location path
  const pathSegments = routerState.location.pathname.split("/").filter(Boolean);
  const companyId = pathSegments[0];
  const departmentId = pathSegments[1];

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

  const handleCompanyDepartmentChange = () => {
    navigate({ to: "/" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <header className="border-gray-200 border-b bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Building2 className="mr-3 h-8 w-8 text-blue-600" />
              <h1 className="font-semibold text-gray-900 text-xl">
                Company Analysis
              </h1>
            </div>

            {companyId && departmentId && (
              <div className="flex items-center space-x-4">
                <span className="text-gray-600 text-sm">
                  <span className="font-medium">
                    {companyNames[companyId] || companyId}
                  </span>
                  <span className="mx-2">•</span>
                  <span className="font-medium">
                    {departmentNames[departmentId] || departmentId}
                  </span>
                </span>
                <Button
                  onClick={handleCompanyDepartmentChange}
                  size="sm"
                  variant="outline"
                >
                  Change Company/Department
                </Button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}
