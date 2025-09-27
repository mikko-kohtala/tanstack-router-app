import { Link, useRouterState } from "@tanstack/react-router";
import {
  ArrowRight,
  Briefcase,
  Building2,
  DollarSign,
  FileText,
  Users,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export function CompanyDepartmentSelection() {
  const routerState = useRouterState();

  // Extract params from the current location path
  const pathSegments = routerState.location.pathname.split("/").filter(Boolean);
  const companyId = pathSegments[0];
  const departmentId = pathSegments[1];
  const hasParams = companyId && departmentId;

  const modules = [
    {
      id: "hr-configurator",
      name: "HR Configurator",
      description: "Configure and manage human resources settings and policies",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      id: "poc-creator",
      name: "POC Creator",
      description: "Create and manage proof of concepts for new initiatives",
      icon: FileText,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      id: "money-analysis",
      name: "Money Analysis",
      description: "Analyze financial data and generate comprehensive reports",
      icon: DollarSign,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  // Example companies with their departments
  const exampleCompanies = [
    {
      id: "techcorp",
      name: "TechCorp Industries",
      description: "Leading technology solutions provider",
      icon: "💻",
      departments: [
        {
          id: "engineering",
          name: "Engineering",
          description: "Product development and innovation",
        },
        {
          id: "marketing",
          name: "Marketing",
          description: "Brand and customer engagement",
        },
      ],
    },
    {
      id: "globalfinance",
      name: "Global Finance Group",
      description: "International financial services",
      icon: "🏦",
      departments: [
        {
          id: "trading",
          name: "Trading",
          description: "Market operations and analysis",
        },
        {
          id: "compliance",
          name: "Compliance",
          description: "Regulatory and risk management",
        },
      ],
    },
    {
      id: "healthplus",
      name: "HealthPlus Medical",
      description: "Healthcare and medical services",
      icon: "🏥",
      departments: [
        {
          id: "clinical",
          name: "Clinical Operations",
          description: "Patient care and medical services",
        },
        {
          id: "research",
          name: "Research & Development",
          description: "Medical research and innovation",
        },
      ],
    },
  ];

  if (!hasParams) {
    // Landing page for root route - show company/department selector
    return (
      <div className="min-h-[calc(100vh-4rem)] px-4 py-6">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 text-center">
            <h2 className="mb-2 font-bold text-2xl text-gray-900">
              Company Analysis Platform
            </h2>
            <p className="text-base text-gray-600">
              Select your company and department to access analysis tools
            </p>
          </div>

          <div className="space-y-3">
            {exampleCompanies.map((company) => (
              <Card className="overflow-hidden" key={company.id}>
                <CardHeader className="px-4 py-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{company.icon}</span>
                      <div>
                        <CardTitle className="text-lg leading-tight">
                          {company.name}
                        </CardTitle>
                        <CardDescription className="text-sm">
                          {company.description}
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="px-4 pt-2 pb-2.5">
                  <h4 className="mb-1.5 font-semibold text-gray-600 text-xs uppercase tracking-wider">
                    Departments
                  </h4>
                  <div className="grid grid-cols-1 gap-1.5 md:grid-cols-2">
                    {company.departments.map((dept) => (
                      <Link
                        key={dept.id}
                        params={{
                          companyId: company.id,
                          departmentId: dept.id,
                        }}
                        to="/$companyId/$departmentId"
                      >
                        <Card className="h-full cursor-pointer border-gray-200 transition-all hover:scale-[1.01] hover:shadow-sm">
                          <CardContent className="px-3 py-2">
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <div className="flex items-center space-x-1.5">
                                  <Briefcase className="h-3.5 w-3.5 text-blue-600" />
                                  <h3 className="font-medium text-gray-900 text-sm">
                                    {dept.name}
                                  </h3>
                                </div>
                                <p className="mt-0.5 text-gray-600 text-xs leading-tight">
                                  {dept.description}
                                </p>
                              </div>
                              <ArrowRight className="ml-2 h-3.5 w-3.5 flex-shrink-0 text-gray-400" />
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-6 rounded-lg bg-gray-50 p-4">
            <h3 className="mb-1.5 font-medium text-gray-900 text-sm">
              Custom URL Access
            </h3>
            <p className="mb-1.5 text-gray-600 text-xs">
              You can also directly navigate to any company/department
              combination:
            </p>
            <code className="block rounded border border-gray-200 bg-white px-2.5 py-1 text-xs">
              /{"{company-id}"}/{"{department-id}"}
            </code>
            <p className="mt-1 text-gray-500 text-xs">
              Example: /acme-corp/engineering
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Company/Department specific page - show module selection
  const currentCompany = exampleCompanies.find((c) => c.id === companyId);
  const currentDepartment = currentCompany?.departments.find(
    (d) => d.id === departmentId
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <div className="mb-4 flex items-center justify-center space-x-3">
          <Building2 className="h-8 w-8 text-gray-600" />
          <div className="text-left">
            <h2 className="font-bold text-2xl text-gray-900">
              {currentCompany?.name || companyId}
            </h2>
            <p className="text-gray-600">
              {currentDepartment?.name || departmentId} Department
            </p>
          </div>
        </div>
        <p className="text-gray-600 text-lg">
          Select an application module to get started
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {modules.map((module) => {
          const Icon = module.icon;
          return (
            <Card className="transition-shadow hover:shadow-lg" key={module.id}>
              <CardHeader>
                <div
                  className={`h-12 w-12 ${module.bgColor} mb-4 flex items-center justify-center rounded-lg`}
                >
                  <Icon className={`h-6 w-6 ${module.color}`} />
                </div>
                <CardTitle>{module.name}</CardTitle>
                <CardDescription>{module.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  params={{ companyId, departmentId }}
                  to={
                    module.id === "hr-configurator"
                      ? "/$companyId/$departmentId/hr-configurator"
                      : module.id === "poc-creator"
                        ? "/$companyId/$departmentId/poc-creator"
                        : "/$companyId/$departmentId/money-analysis"
                  }
                >
                  <Button className="w-full">
                    Open {module.name}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-8 flex justify-center">
        <Link to="/">
          <Button variant="outline">
            <Building2 className="mr-2 h-4 w-4" />
            Choose Different Company/Department
          </Button>
        </Link>
      </div>
    </div>
  );
}
