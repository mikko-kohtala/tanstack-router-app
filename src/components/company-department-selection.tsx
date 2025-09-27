import { Link, useRouterState } from "@tanstack/react-router";
import {
  ArrowRight,
  Briefcase,
  Building2,
  DollarSign,
  FileText,
  Search,
  Users,
  TrendingUp,
  Shield,
  Globe,
} from "lucide-react";
import { useState, useMemo } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { companies, companyCategories, getCompany, getDepartment } from "../data/companies";

export function CompanyDepartmentSelection() {
  const routerState = useRouterState();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

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
      accent: "text-blue-600",
      bgAccent: "bg-blue-50",
      stats: "15+ workflows",
    },
    {
      id: "poc-creator",
      name: "POC Creator",
      description: "Create and manage proof of concepts for new initiatives",
      icon: FileText,
      accent: "text-green-600",
      bgAccent: "bg-green-50",
      stats: "Quick setup",
    },
    {
      id: "money-analysis",
      name: "Money Analysis",
      description: "Analyze financial data and generate comprehensive reports",
      icon: DollarSign,
      accent: "text-purple-600",
      bgAccent: "bg-purple-50",
      stats: "Real-time data",
    },
  ];

  const filteredCompanies = useMemo(() => {
    let filtered = companies;

    if (selectedCategory !== "all") {
      filtered = filtered.filter(c => c.category === selectedCategory);
    }

    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter(c =>
        c.name.toLowerCase().includes(search) ||
        c.description.toLowerCase().includes(search) ||
        c.departments.some(d => d.name.toLowerCase().includes(search))
      );
    }

    return filtered;
  }, [searchTerm, selectedCategory]);

  if (!hasParams) {
    return (
      <div className="min-h-[calc(100vh-4rem)] bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="mb-10 text-center">
            <h1 className="mb-3 font-bold text-4xl text-gray-900">
              Enterprise Analysis Platform
            </h1>
            <p className="mx-auto max-w-2xl text-gray-600 text-lg">
              Powerful tools for HR management, financial analysis, and proof of concept creation
            </p>
          </div>

          <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="mb-1 font-semibold text-gray-900">Real-time Analytics</h3>
                <p className="text-gray-600 text-sm">Instant insights across all departments</p>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-green-50">
                  <Shield className="h-5 w-5 text-green-600" />
                </div>
                <h3 className="mb-1 font-semibold text-gray-900">Enterprise Security</h3>
                <p className="text-gray-600 text-sm">Bank-level security for your data</p>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50">
                  <Globe className="h-5 w-5 text-purple-600" />
                </div>
                <h3 className="mb-1 font-semibold text-gray-900">Global Scale</h3>
                <p className="text-gray-600 text-sm">Supporting enterprises worldwide</p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-6 space-y-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="relative flex-1 lg:max-w-md">
                <Search className="pointer-events-none absolute top-3 left-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search companies or departments..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 bg-white py-3 pr-4 pl-10 transition focus:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedCategory === "all" ? "default" : "outline"}
                  onClick={() => setSelectedCategory("all")}
                  className="h-9"
                >
                  All Industries
                </Button>
                {Object.entries(companyCategories).map(([key, cat]) => (
                  <Button
                    key={key}
                    variant={selectedCategory === key ? "default" : "outline"}
                    onClick={() => setSelectedCategory(key)}
                    className="h-9"
                  >
                    <span className="mr-1.5 text-base">{cat.icon}</span>
                    {cat.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {filteredCompanies.length === 0 ? (
            <Card className="border-gray-200">
              <CardContent className="py-12 text-center">
                <Search className="mx-auto mb-4 h-12 w-12 text-gray-300" />
                <h3 className="mb-2 font-semibold text-gray-900 text-xl">No companies found</h3>
                <p className="text-gray-600">Try adjusting your search or filters</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              {filteredCompanies.map((company) => {
                const category = companyCategories[company.category];
                return (
                  <Card
                    key={company.id}
                    className="overflow-hidden border-gray-200 transition-shadow hover:shadow-md"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{category.icon}</span>
                          <div>
                            <CardTitle className="text-lg">{company.name}</CardTitle>
                            <CardDescription className="text-sm">
                              {company.description} • {company.size}
                            </CardDescription>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div>
                        <h4 className="mb-2 font-medium text-gray-700 text-sm">
                          Departments
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {company.departments.slice(0, 4).map((dept) => (
                            <Link
                              key={dept.id}
                              params={{
                                companyId: company.id,
                                departmentId: dept.id,
                              }}
                              to="/$companyId/$departmentId"
                            >
                              <div className="rounded-lg border border-gray-200 bg-white p-2.5 transition-all hover:border-gray-300 hover:bg-gray-50">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <span className="font-medium text-gray-900 text-sm">
                                      {dept.name}
                                    </span>
                                    <div className="text-gray-500 text-xs">
                                      {dept.memberCount} members
                                    </div>
                                  </div>
                                  <ArrowRight className="h-3.5 w-3.5 text-gray-400" />
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                        {company.departments.length > 4 && (
                          <p className="mt-2 text-center text-gray-500 text-xs">
                            +{company.departments.length - 4} more departments
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}

          <Card className="mt-8 border-gray-200 bg-gray-50">
            <CardContent className="p-5">
              <div className="flex items-center gap-4">
                <Briefcase className="h-5 w-5 text-gray-600" />
                <div className="flex-1">
                  <h3 className="mb-1 font-medium text-gray-900">
                    Direct URL Access
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Navigate directly using: /{"{company-id}"}/{"{department-id}"}
                  </p>
                  <span className="text-gray-500 text-xs">
                    Example: /techcorp/engineering
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const currentCompany = getCompany(companyId);
  const currentDepartment = getDepartment(companyId, departmentId);

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="mb-2 font-bold text-3xl text-gray-900">
            {currentCompany?.name || companyId}
          </h1>
          <p className="text-gray-600 text-lg">
            {currentDepartment?.name || departmentId} Department
          </p>
          {currentDepartment?.description && (
            <p className="mt-1 text-gray-500 text-sm">
              {currentDepartment.description}
            </p>
          )}
          <p className="mt-4 text-gray-600">
            Select an application module to get started
          </p>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <Card
                key={module.id}
                className="border-gray-200 transition-shadow hover:shadow-md"
              >
                <CardHeader className="pb-4">
                  <div className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg ${module.bgAccent}`}>
                    <Icon className={`h-5 w-5 ${module.accent}`} />
                  </div>
                  <CardTitle className="text-xl">{module.name}</CardTitle>
                  <CardDescription className="text-sm">
                    {module.description}
                  </CardDescription>
                  <div className="mt-2 inline-flex items-center rounded-full bg-gray-100 px-2.5 py-1 text-gray-600 text-xs">
                    {module.stats}
                  </div>
                </CardHeader>
                <CardContent>
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
                    <Button className="h-10 w-full">
                      Launch Module
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Link to="/">
            <Button variant="outline" className="h-10">
              <Building2 className="mr-2 h-4 w-4" />
              Switch Company/Department
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}