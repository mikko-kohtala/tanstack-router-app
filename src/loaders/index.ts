// Helper function to simulate async data fetching with delay
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Helper to get timestamp
const getTimestamp = () => new Date().toLocaleTimeString();

// Root loader that sleeps for 3 seconds - BLOCKS all child loaders
export const rootLoader = async () => {
  console.log(`[${getTimestamp()}] 🔴 Root loader started - sleeping for 3 seconds...`);
  await sleep(3000);
  console.log(`[${getTimestamp()}] ✅ Root loader completed! Child loaders can now start.`);
  return {
    rootData: "Root data loaded after 3 seconds",
    loadedAt: getTimestamp()
  };
};

// Dashboard loaders
export const dashboardLoader = async () => {
  console.log(`[${getTimestamp()}] 📊 Dashboard loader started (after root completes)`);
  await sleep(500);
  console.log(`[${getTimestamp()}] 📊 Dashboard loader completed`);
  return { dashboardData: "Dashboard data loaded" };
};

export const analyticsLoader = async () => {
  console.log(`[${getTimestamp()}] 📈 Analytics loader started`);
  await sleep(300);
  console.log(`[${getTimestamp()}] 📈 Analytics loader completed`);
  return { analyticsData: [{ views: 1000, clicks: 250 }] };
};

export const reportsLoader = async () => {
  console.log(`[${getTimestamp()}] 📄 Reports loader started`);
  await sleep(400);
  console.log(`[${getTimestamp()}] 📄 Reports loader completed`);
  return { reports: ["Q1 Report", "Q2 Report", "Q3 Report"] };
};

// Products loaders
export const productsLoader = async () => {
  console.log(`[${getTimestamp()}] 🛍️ Products loader started (after root completes)`);
  await sleep(600);
  console.log(`[${getTimestamp()}] 🛍️ Products loader completed`);
  return { products: ["Product A", "Product B", "Product C"] };
};

export const featuredProductsLoader = async () => {
  console.log(`[${getTimestamp()}] ⭐ Featured products loader started`);
  await sleep(350);
  console.log(`[${getTimestamp()}] ⭐ Featured products loader completed`);
  return { featuredProducts: ["Premium Product X", "Limited Edition Y"] };
};

export const categoriesLoader = async () => {
  console.log(`[${getTimestamp()}] 📦 Categories loader started`);
  await sleep(250);
  console.log(`[${getTimestamp()}] 📦 Categories loader completed`);
  return { categories: ["Electronics", "Clothing", "Books", "Home & Garden"] };
};

// Users loaders
export const usersLoader = async () => {
  console.log(`[${getTimestamp()}] 👥 Users loader started (after root completes)`);
  await sleep(700);
  console.log(`[${getTimestamp()}] 👥 Users loader completed`);
  return { totalUsers: 1250 };
};

export const activeUsersLoader = async () => {
  console.log(`[${getTimestamp()}] 🟢 Active users loader started`);
  await sleep(450);
  console.log(`[${getTimestamp()}] 🟢 Active users loader completed`);
  return { activeUsers: 892 };
};

export const userRolesLoader = async () => {
  console.log(`[${getTimestamp()}] 🔐 User roles loader started`);
  await sleep(300);
  console.log(`[${getTimestamp()}] 🔐 User roles loader completed`);
  return { roles: { admin: 15, editor: 45, viewer: 1190 } };
};