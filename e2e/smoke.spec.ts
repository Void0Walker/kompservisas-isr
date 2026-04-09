import { test, expect } from "@playwright/test";

test.describe("home", () => {
  test("default locale responds", async ({ page }) => {
    const res = await page.goto("/");
    expect(res?.ok()).toBeTruthy();
    await expect(page.locator("body")).toBeVisible();
  });

  test("english locale responds", async ({ page }) => {
    const res = await page.goto("/en");
    expect(res?.ok()).toBeTruthy();
    await expect(page.locator("body")).toBeVisible();
  });
});
