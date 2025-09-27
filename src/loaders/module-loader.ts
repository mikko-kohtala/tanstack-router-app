import { checkAuth } from "./auth-loader";
import { companyDepartmentLoader } from "./company-department-loader";

/**
 * Module loader - validates access to specific modules
 * Checks authentication and validates company/department before granting module access
 */
export const moduleLoader = ({ params }: { params: { companyId: string; departmentId: string } }) => {
  // Check authentication first
  checkAuth();

  // First validate company/department
  const validationResult = companyDepartmentLoader({ params });

  // Could add module-specific permissions or data loading here
  console.log(`✅ Access granted to module for ${validationResult.company.name} - ${validationResult.department.name}`);

  return {
    ...validationResult,
    moduleAccess: true,
    // Add any module-specific data here
  };
};
