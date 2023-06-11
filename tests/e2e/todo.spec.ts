import { test, expect } from "@playwright/test";

test("Example test index", async ({ page }) => {
  // Navigate to your Nuxt 3 app's URL
  await page.goto("/todo");
  const text = await page.textContent("h1");
  // Use assertions from the 'expect' module to validate the test results
  expect(text).toBe("Todo");
  // test add todo
  await page.fill("input", "test todo");
  // enter key
  await page.press("input", "Enter");
});
