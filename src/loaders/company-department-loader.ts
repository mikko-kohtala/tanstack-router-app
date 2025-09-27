import { getCompany, getDepartment, isValidCompanyDepartment } from "../data/companies";
import { checkAuth } from "./auth-loader";

/**
 * Company/Department validation loader
 * Checks authentication and validates company/department combination
 */
export const companyDepartmentLoader = ({ params }: { params: { companyId: string; departmentId: string } }) => {
  // Check authentication first
  checkAuth();

  const { companyId, departmentId } = params;

  console.log(`🔍 Validating company: ${companyId}, department: ${departmentId}`);

  // Check if company and department combination is valid
  if (!isValidCompanyDepartment(companyId, departmentId)) {
    const company = getCompany(companyId);

    if (!company) {
      throw new Error(`Company "${companyId}" not found. Please check the URL and try again.`);
    }

    throw new Error(
      `Department "${departmentId}" not found in ${company.name}. Valid departments are: ${company.departments
        .map((d) => d.id)
        .join(", ")}`
    );
  }

  const company = getCompany(companyId);
  const department = getDepartment(companyId, departmentId);

  if (!(company && department)) {
    throw new Error("Unexpected validation failure. Please recheck the URL.");
  }

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
