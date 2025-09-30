// Helper function to simulate async data fetching
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Constants
const LOADER_INIT_DELAY_MS = 100;

/**
 * Root loader - runs on every route
 * Initializes application-wide data
 */
export const rootLoader = async () => {
  console.log("🔄 Root loader: Initializing application...");
  await sleep(LOADER_INIT_DELAY_MS); // Small delay to simulate async initialization

  return {
    appName: "Company Analysis Platform",
    version: "1.0.0",
    loadedAt: new Date().toISOString(),
  };
};
