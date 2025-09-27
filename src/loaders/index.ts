// Valid companies and departments configuration
export const validCompanies = {
  techcorp: {
    name: "TechCorp Industries",
    departments: ["engineering", "marketing"],
  },
  globalfinance: {
    name: "Global Finance Group",
    departments: ["trading", "compliance"],
  },
  healthplus: {
    name: "HealthPlus Medical",
    departments: ["clinical", "research"],
  },
};

// Helper function to simulate async data fetching
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Root loader - runs on every route
export const rootLoader = async () => {
  console.log("🔄 Root loader: Initializing application...");
  await sleep(100); // Small delay to simulate async initialization

  return {
    appName: "Company Analysis Platform",
    version: "1.0.0",
    loadedAt: new Date().toISOString(),
  };
};

// Company/Department validation loader
export const companyDepartmentLoader = async ({
  params,
}: {
  params: { companyId: string; departmentId: string };
}) => {
  const { companyId, departmentId } = params;

  console.log(
    `🔍 Validating company: ${companyId}, department: ${departmentId}`
  );

  // Check if company exists
  const company = validCompanies[companyId as keyof typeof validCompanies];
  if (!company) {
    throw new Error(
      `Company "${companyId}" not found. Valid companies are: ${Object.keys(validCompanies).join(", ")}`
    );
  }

  // Check if department exists for this company
  if (!company.departments.includes(departmentId)) {
    throw new Error(
      `Department "${departmentId}" not found in ${company.name}. Valid departments are: ${company.departments.join(", ")}`
    );
  }

  // Return validated data
  return {
    company: {
      id: companyId,
      name: company.name,
    },
    department: {
      id: departmentId,
      name: departmentId.charAt(0).toUpperCase() + departmentId.slice(1),
    },
    validated: true,
  };
};

// Module loaders - validate access to specific modules
export const moduleLoader = async ({
  params,
}: {
  params: { companyId: string; departmentId: string };
}) => {
  // First validate company/department
  const validationResult = await companyDepartmentLoader({ params });

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
