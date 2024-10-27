const { test, expect } = require('@playwright/test');
test('Test Qase - Playwright Integration', async ({ page }) => {
await page.goto('https://qase.io/');
expect(await page.title()).toBe('Qase | Test management software for quality assurance');
});

// 3d885faa76452ff0346702705e27970c005b6307db3dd15756f914fbbc4282a3



