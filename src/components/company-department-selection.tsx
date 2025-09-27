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
      <div className="min-h-[calc(100vh-4rem)] px-4 py-3">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 text-center">
            <h2 className="mb-1 font-bold text-3xl text-gray-900">
              Company Analysis Platform
            </h2>
            <p className="text-gray-600 text-lg">
              Select your company and department to access analysis tools
            </p>
          </div>

          <div className="space-y-2">
            {exampleCompanies.map((company) => (
              <Card className="overflow-hidden" key={company.id}>
                <CardHeader className="px-3 py-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl">{company.icon}</span>
                      <div>
                        <CardTitle className="text-xl leading-tight">
                          {company.name}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {company.description}
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="px-3 pt-1.5 pb-2">
                  <h4 className="mb-1 font-semibold text-gray-600 text-sm uppercase tracking-wider">
                    Departments
                  </h4>
                  <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
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
                          <CardContent className="px-2.5 py-1.5">
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <div className="flex items-center space-x-1.5">
                                  <Briefcase className="h-4 w-4 text-blue-600" />
                                  <h3 className="font-medium text-base text-gray-900">
                                    {dept.name}
                                  </h3>
                                </div>
                                <p className="mt-0.5 text-gray-600 text-sm leading-tight">
                                  {dept.description}
                                </p>
                              </div>
                              <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0 text-gray-400" />
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

          <div className="mt-4 rounded-lg bg-gray-50 p-3">
            <h3 className="mb-1 font-medium text-base text-gray-900">
              Custom URL Access
            </h3>
            <p className="mb-1 text-gray-600 text-sm">
              You can also directly navigate to any company/department
              combination:
            </p>
            <code className="block rounded border border-gray-200 bg-white px-2 py-0.5 text-sm">
              /{"{company-id}"}/{"{department-id}"}
            </code>
            <p className="mt-0.5 text-gray-500 text-sm">
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
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="mb-6 text-center">
        <div className="mb-2 flex items-center justify-center space-x-3">
          <Building2 className="h-7 w-7 text-gray-600" />
          <div className="text-left">
            <h2 className="font-bold text-3xl text-gray-900">
              {currentCompany?.name || companyId}
            </h2>
            <p className="text-gray-600 text-lg">
              {currentDepartment?.name || departmentId} Department
            </p>
          </div>
        </div>
        <p className="text-gray-600 text-xl">
          Select an application module to get started
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {modules.map((module) => {
          const Icon = module.icon;
          return (
            <Card className="transition-shadow hover:shadow-lg" key={module.id}>
              <CardHeader className="pb-3">
                <div
                  className={`h-10 w-10 ${module.bgColor} mb-3 flex items-center justify-center rounded-lg`}
                >
                  <Icon className={`h-5 w-5 ${module.color}`} />
                </div>
                <CardTitle className="text-xl">{module.name}</CardTitle>
                <CardDescription className="text-base">
                  {module.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Link
                  params={{ companyId, departmentId }}
                  to={(() => {
                    if (module.id === "hr-configurator") {
                      return "/$companyId/$departmentId/hr-configurator";
                    }
                    if (module.id === "poc-creator") {
                      return "/$companyId/$departmentId/poc-creator";
                    }
                    return "/$companyId/$departmentId/money-analysis";
                  })()}
                >
                  <Button className="h-9 w-full text-base">
                    Open {module.name}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-6 flex justify-center">
        <Link to="/">
          <Button className="text-base" variant="outline">
            <Building2 className="mr-2 h-4 w-4" />
            Choose Different Company/Department
          </Button>
        </Link>
      </div>
    </div>
  );
}
