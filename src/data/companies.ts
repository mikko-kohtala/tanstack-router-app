export type Department = {
  id: string;
  name: string;
  description: string;
  memberCount: number;
};

export type Company = {
  id: string;
  name: string;
  description: string;
  category: "technology" | "finance" | "healthcare" | "retail" | "manufacturing";
  size: string;
  departments: Department[];
};

export const companies: Company[] = [
  {
    id: "techcorp",
    name: "TechCorp Industries",
    description: "Leading technology solutions provider",
    category: "technology",
    size: "10,000+ employees",
    departments: [
      {
        id: "engineering",
        name: "Engineering",
        description: "Product development and innovation",
        memberCount: 450,
      },
      {
        id: "marketing",
        name: "Marketing",
        description: "Brand and customer engagement",
        memberCount: 120,
      },
      {
        id: "sales",
        name: "Sales",
        description: "Customer acquisition and growth",
        memberCount: 200,
      },
      {
        id: "product",
        name: "Product",
        description: "Product strategy and management",
        memberCount: 85,
      },
      {
        id: "hr",
        name: "Human Resources",
        description: "People and culture",
        memberCount: 65,
      },
      {
        id: "finance",
        name: "Finance",
        description: "Financial planning and analysis",
        memberCount: 90,
      },
    ],
  },
  {
    id: "globalfinance",
    name: "Global Finance Group",
    description: "International financial services",
    category: "finance",
    size: "5,000+ employees",
    departments: [
      {
        id: "trading",
        name: "Trading",
        description: "Market operations and analysis",
        memberCount: 300,
      },
      {
        id: "compliance",
        name: "Compliance",
        description: "Regulatory and risk management",
        memberCount: 150,
      },
      {
        id: "wealth",
        name: "Wealth Management",
        description: "Private banking services",
        memberCount: 200,
      },
      {
        id: "operations",
        name: "Operations",
        description: "Back office and settlements",
        memberCount: 400,
      },
      {
        id: "technology",
        name: "Technology",
        description: "Trading systems and infrastructure",
        memberCount: 280,
      },
      {
        id: "research",
        name: "Research",
        description: "Market research and analysis",
        memberCount: 120,
      },
    ],
  },
  {
    id: "healthplus",
    name: "HealthPlus Medical",
    description: "Healthcare and medical services",
    category: "healthcare",
    size: "8,000+ employees",
    departments: [
      {
        id: "clinical",
        name: "Clinical Operations",
        description: "Patient care and medical services",
        memberCount: 600,
      },
      {
        id: "research",
        name: "R&D",
        description: "Medical research and innovation",
        memberCount: 250,
      },
      {
        id: "pharmacy",
        name: "Pharmacy",
        description: "Pharmaceutical services",
        memberCount: 180,
      },
      {
        id: "admin",
        name: "Administration",
        description: "Healthcare administration",
        memberCount: 350,
      },
      {
        id: "emergency",
        name: "Emergency",
        description: "Emergency medical services",
        memberCount: 400,
      },
      {
        id: "imaging",
        name: "Medical Imaging",
        description: "Radiology and diagnostics",
        memberCount: 220,
      },
    ],
  },
  {
    id: "retailmax",
    name: "RetailMax Corporation",
    description: "Global retail chain",
    category: "retail",
    size: "20,000+ employees",
    departments: [
      {
        id: "stores",
        name: "Store Operations",
        description: "Retail store management",
        memberCount: 1500,
      },
      {
        id: "ecommerce",
        name: "E-Commerce",
        description: "Online retail platform",
        memberCount: 300,
      },
      {
        id: "logistics",
        name: "Logistics",
        description: "Supply chain and distribution",
        memberCount: 450,
      },
      {
        id: "merchandising",
        name: "Merchandising",
        description: "Product selection and pricing",
        memberCount: 200,
      },
      {
        id: "marketing",
        name: "Marketing",
        description: "Brand and promotions",
        memberCount: 150,
      },
      {
        id: "customer",
        name: "Customer Service",
        description: "Customer support and relations",
        memberCount: 380,
      },
    ],
  },
  {
    id: "industrialpro",
    name: "Industrial Pro Manufacturing",
    description: "Advanced manufacturing solutions",
    category: "manufacturing",
    size: "15,000+ employees",
    departments: [
      {
        id: "production",
        name: "Production",
        description: "Manufacturing operations",
        memberCount: 800,
      },
      {
        id: "quality",
        name: "Quality Control",
        description: "Quality assurance and testing",
        memberCount: 300,
      },
      {
        id: "supply",
        name: "Supply Chain",
        description: "Procurement and logistics",
        memberCount: 400,
      },
      {
        id: "maintenance",
        name: "Maintenance",
        description: "Equipment and facility maintenance",
        memberCount: 250,
      },
      {
        id: "engineering",
        name: "Engineering",
        description: "Process and product engineering",
        memberCount: 320,
      },
      {
        id: "safety",
        name: "Safety",
        description: "Health and safety compliance",
        memberCount: 180,
      },
    ],
  },
  {
    id: "datatech",
    name: "DataTech Solutions",
    description: "Data analytics and AI platform",
    category: "technology",
    size: "3,000+ employees",
    departments: [
      {
        id: "data",
        name: "Data Science",
        description: "ML and analytics",
        memberCount: 200,
      },
      {
        id: "platform",
        name: "Platform",
        description: "Core platform development",
        memberCount: 150,
      },
      {
        id: "security",
        name: "Security",
        description: "Cybersecurity and compliance",
        memberCount: 100,
      },
      {
        id: "consulting",
        name: "Consulting",
        description: "Client solutions and services",
        memberCount: 180,
      },
      {
        id: "cloud",
        name: "Cloud Infrastructure",
        description: "Cloud operations and DevOps",
        memberCount: 120,
      },
      {
        id: "sales",
        name: "Sales",
        description: "Business development",
        memberCount: 90,
      },
    ],
  },
  {
    id: "greenbank",
    name: "Green Bank International",
    description: "Sustainable banking solutions",
    category: "finance",
    size: "7,000+ employees",
    departments: [
      {
        id: "retail",
        name: "Retail Banking",
        description: "Consumer banking services",
        memberCount: 400,
      },
      {
        id: "corporate",
        name: "Corporate Banking",
        description: "Business banking solutions",
        memberCount: 250,
      },
      {
        id: "investment",
        name: "Investment",
        description: "Investment management",
        memberCount: 300,
      },
      {
        id: "risk",
        name: "Risk Management",
        description: "Risk assessment and control",
        memberCount: 200,
      },
      {
        id: "digital",
        name: "Digital Banking",
        description: "Online and mobile banking",
        memberCount: 180,
      },
      {
        id: "sustainability",
        name: "Sustainability",
        description: "ESG and green initiatives",
        memberCount: 120,
      },
    ],
  },
  {
    id: "carewell",
    name: "CareWell Hospitals",
    description: "Network of specialty hospitals",
    category: "healthcare",
    size: "12,000+ employees",
    departments: [
      {
        id: "emergency",
        name: "Emergency",
        description: "Emergency medical care",
        memberCount: 400,
      },
      {
        id: "surgery",
        name: "Surgery",
        description: "Surgical services",
        memberCount: 350,
      },
      {
        id: "outpatient",
        name: "Outpatient",
        description: "Ambulatory care services",
        memberCount: 500,
      },
      {
        id: "diagnostics",
        name: "Diagnostics",
        description: "Laboratory and testing",
        memberCount: 280,
      },
      {
        id: "nursing",
        name: "Nursing",
        description: "Nursing services",
        memberCount: 650,
      },
      {
        id: "pediatrics",
        name: "Pediatrics",
        description: "Children's healthcare",
        memberCount: 320,
      },
    ],
  },
  {
    id: "smartretail",
    name: "Smart Retail Systems",
    description: "Retail technology solutions",
    category: "retail",
    size: "4,500+ employees",
    departments: [
      {
        id: "pos",
        name: "POS Systems",
        description: "Point of sale technology",
        memberCount: 200,
      },
      {
        id: "inventory",
        name: "Inventory",
        description: "Inventory management systems",
        memberCount: 150,
      },
      {
        id: "analytics",
        name: "Analytics",
        description: "Retail analytics and insights",
        memberCount: 180,
      },
      {
        id: "support",
        name: "Support",
        description: "Customer support services",
        memberCount: 250,
      },
      {
        id: "integration",
        name: "Integration",
        description: "System integration services",
        memberCount: 120,
      },
      {
        id: "training",
        name: "Training",
        description: "Product training and education",
        memberCount: 100,
      },
    ],
  },
  {
    id: "autoworks",
    name: "AutoWorks Manufacturing",
    description: "Automotive parts manufacturer",
    category: "manufacturing",
    size: "9,000+ employees",
    departments: [
      {
        id: "assembly",
        name: "Assembly",
        description: "Component assembly lines",
        memberCount: 500,
      },
      {
        id: "design",
        name: "Design",
        description: "Product design and CAD",
        memberCount: 200,
      },
      {
        id: "testing",
        name: "Testing",
        description: "Quality testing and validation",
        memberCount: 250,
      },
      {
        id: "warehouse",
        name: "Warehouse",
        description: "Storage and distribution",
        memberCount: 300,
      },
      {
        id: "procurement",
        name: "Procurement",
        description: "Supplier management",
        memberCount: 150,
      },
      {
        id: "tooling",
        name: "Tooling",
        description: "Tool and die manufacturing",
        memberCount: 180,
      },
    ],
  },
];

export const companyCategories = {
  technology: { name: "Technology", icon: "💻" },
  finance: { name: "Finance", icon: "🏦" },
  healthcare: { name: "Healthcare", icon: "🏥" },
  retail: { name: "Retail", icon: "🛍️" },
  manufacturing: { name: "Manufacturing", icon: "🏭" },
};

export function getCompany(companyId: string): Company | undefined {
  return companies.find((c) => c.id === companyId);
}

export function getDepartment(companyId: string, departmentId: string): Department | undefined {
  const company = getCompany(companyId);
  return company?.departments.find((d) => d.id === departmentId);
}

export function isValidCompanyDepartment(companyId: string, departmentId: string): boolean {
  const company = getCompany(companyId);
  if (!company) {
    return false;
  }
  return company.departments.some((d) => d.id === departmentId);
}
