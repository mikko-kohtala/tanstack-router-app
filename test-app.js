const { chromium } = require("@playwright/test");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  console.log("Testing root route...");
  await page.goto("http://localhost:5174/");
  await page.waitForLoadState("networkidle");

  const title = await page.textContent("h1");
  console.log("Page title:", title);

  const welcomeText = await page.textContent("h2");
  console.log("Welcome text:", welcomeText);

  console.log("\nTesting company/department route...");
  await page.goto("http://localhost:5174/techcorp/engineering");
  await page.waitForLoadState("networkidle");

  const companyInfo = await page.textContent('span:has-text("Company:")');
  console.log("Company info:", companyInfo);

  const modules = await page
    .locator(".grid .card-header-title")
    .allTextContents();
  console.log("Available modules:", modules);

  console.log("\nTesting HR Configurator...");
  await page.goto("http://localhost:5174/techcorp/engineering/hr-configurator");
  await page.waitForLoadState("networkidle");

  const hrTitle = await page.textContent("h2");
  console.log("HR Configurator title:", hrTitle);

  console.log("\nTesting POC Creator...");
  await page.goto("http://localhost:5174/techcorp/engineering/poc-creator");
  await page.waitForLoadState("networkidle");

  const pocTitle = await page.textContent("h2");
  console.log("POC Creator title:", pocTitle);

  console.log("\nTesting Money Analysis...");
  await page.goto("http://localhost:5174/techcorp/engineering/money-analysis");
  await page.waitForLoadState("networkidle");

  const moneyTitle = await page.textContent("h2");
  console.log("Money Analysis title:", moneyTitle);

  await browser.close();
  console.log("\n✅ All tests completed!");
})();
