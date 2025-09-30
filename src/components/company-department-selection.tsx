import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Briefcase, Building2, DollarSign, FileText, Search, Users } from "lucide-react";
import { useMemo, useState } from "react";
import { companies, companyCategories, getCompany, getDepartment } from "../data/companies";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

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
      filtered = filtered.filter((c) => c.category === selectedCategory);
    }

    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (c) =>
          c.name.toLowerCase().includes(search) ||
          c.description.toLowerCase().includes(search) ||
          c.departments.some((d) => d.name.toLowerCase().includes(search))
      );
    }

    return filtered;
  }, [searchTerm, selectedCategory]);

  if (!hasParams) {
    return (
      <div className="min-h-full bg-gray-100">
        <div>
          <div className="mb-6 text-center">
            <Building2 className="mx-auto mb-4 h-16 w-16 text-gray-700" />
            <h1 className="mb-3 font-bold text-5xl text-gray-900">Welcome to Company Analysis</h1>
            <p className="mx-auto max-w-2xl text-gray-600 text-xl">
              Select your company and department to access powerful tools for HR management, financial analysis, and POC
              creation
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="mb-6 space-y-4">
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                  <Search className="pointer-events-none absolute top-2.5 left-3 h-4 w-4 text-gray-400" />
                  <input
                    className="w-full rounded-md border border-gray-300 bg-white py-2 pr-3 pl-9 text-sm transition focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search companies or departments..."
                    type="text"
                    value={searchTerm}
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button
                    className="h-9 text-xs"
                    onClick={() => setSelectedCategory("all")}
                    size="sm"
                    variant={selectedCategory === "all" ? "default" : "outline"}
                  >
                    All
                  </Button>
                  {Object.entries(companyCategories).map(([key, cat]) => (
                    <Button
                      className="h-9 text-xs"
                      key={key}
                      onClick={() => setSelectedCategory(key)}
                      size="sm"
                      variant={selectedCategory === key ? "default" : "outline"}
                    >
                      <span className="mr-1 text-sm">{cat.icon}</span>
                      {cat.name}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {filteredCompanies.length === 0 ? (
              <div className="rounded-lg border border-gray-300 bg-white p-12 text-center">
                <Search className="mx-auto mb-3 h-10 w-10 text-gray-300" />
                <h3 className="mb-1 font-semibold text-gray-900">No companies found</h3>
                <p className="text-gray-500 text-sm">Try adjusting your search or filters</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredCompanies.map((company) => {
                  const category = companyCategories[company.category];
                  return (
                    <Card
                      className="overflow-hidden border-gray-300 bg-white py-0 transition-shadow hover:shadow-sm"
                      key={company.id}
                    >
                      <CardContent className="p-0">
                        <div className="flex items-center gap-4 p-4">
                          <span className="text-3xl">{category.icon}</span>
                          <div className="flex-1">
                            <h3 className="mb-0.5 font-semibold text-gray-900 text-lg">{company.name}</h3>
                            <p className="text-gray-500 text-sm">
                              {company.description} • {company.size}
                            </p>
                          </div>
                        </div>
                        <div className="border-gray-200 border-t bg-gray-50 px-4 py-3">
                          <div className="flex flex-wrap gap-2">
                            {company.departments.map((dept) => (
                              <Link
                                key={dept.id}
                                params={{
                                  companyId: company.id,
                                  departmentId: dept.id,
                                }}
                                to="/$companyId/$departmentId"
                              >
                                <button
                                  className="inline-flex items-center gap-1.5 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm transition-colors hover:border-gray-400 hover:bg-gray-50"
                                  type="button"
                                >
                                  <span className="font-medium text-gray-900">{dept.name}</span>
                                  <span className="text-gray-500">({dept.memberCount})</span>
                                  <ArrowRight className="h-3 w-3 text-gray-400" />
                                </button>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  const currentCompany = getCompany(companyId);
  const currentDepartment = getDepartment(companyId, departmentId);

  return (
    <div className="min-h-full bg-gray-100">
      <div className="px-8 py-8">
        <div className="mb-8 text-center">
          <h1 className="mb-2 font-bold text-3xl text-gray-900">{currentCompany?.name || companyId}</h1>
          <div className="mb-2 inline-flex items-center gap-2 rounded-lg bg-gray-800 px-4 py-2">
            <Briefcase className="h-5 w-5 text-gray-300" />
            <span className="font-semibold text-gray-100 text-lg">{currentDepartment?.name || departmentId}</span>
          </div>
          {currentDepartment?.description && (
            <p className="mt-2 text-gray-600 text-sm">{currentDepartment.description}</p>
          )}
          <p className="mt-4 text-gray-600">Select an application module to get started</p>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <Card className="border-gray-200 transition-shadow hover:shadow-md" key={module.id}>
                <CardHeader className="pb-4">
                  <div
                    className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg ${module.bgAccent}`}
                  >
                    <Icon className={`h-5 w-5 ${module.accent}`} />
                  </div>
                  <CardTitle className="text-xl">{module.name}</CardTitle>
                  <CardDescription className="text-sm">{module.description}</CardDescription>
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
            <Button className="h-10" variant="outline">
              <Building2 className="mr-2 h-4 w-4" />
              Switch Company/Department
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
