import {
  isValidCompanyDepartment,
  getCompany,
  getDepartment,
} from "../data/companies";

// Helper function to simulate async data fetching
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Constants
const LOADER_INIT_DELAY_MS = 100;

// Root loader - runs on every route
export const rootLoader = async () => {
  console.log("🔄 Root loader: Initializing application...");
  await sleep(LOADER_INIT_DELAY_MS); // Small delay to simulate async initialization

  return {
    appName: "Company Analysis Platform",
    version: "1.0.0",
    loadedAt: new Date().toISOString(),
  };
};

// Company/Department validation loader
export const companyDepartmentLoader = ({
  params,
}: {
  params: { companyId: string; departmentId: string };
}) => {
  const { companyId, departmentId } = params;

  console.log(
    `🔍 Validating company: ${companyId}, department: ${departmentId}`
  );

  // Check if company and department combination is valid
  if (!isValidCompanyDepartment(companyId, departmentId)) {
    const company = getCompany(companyId);

    if (!company) {
      throw new Error(
        `Company "${companyId}" not found. Please check the URL and try again.`
      );
    }

    throw new Error(
      `Department "${departmentId}" not found in ${company.name}. Valid departments are: ${company.departments.map((d) => d.id).join(", ")}`
    );
  }

  const company = getCompany(companyId)!;
  const department = getDepartment(companyId, departmentId)!;

  // Return validated data
  return {
    company: {
      id: companyId,
      name: company.name,
      description: company.description,
    },
    department: {
      id: departmentId,
      name: department.name,
      description: department.description,
      memberCount: department.memberCount,
    },
    validated: true,
  };
};

// Module loaders - validate access to specific modules
export const moduleLoader = ({
  params,
}: {
  params: { companyId: string; departmentId: string };
}) => {
  // First validate company/department
  const validationResult = companyDepartmentLoader({ params });

  // Could add module-specific permissions or data loading here
  console.log(
    `✅ Access granted to module for ${validationResult.company.name} - ${validationResult.department.name}`
  );

  return {
    ...validationResult,
    moduleAccess: true,
    // Add any module-specific data here
  };
};
