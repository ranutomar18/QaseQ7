import { test, expect } from '@playwright/test';
import { qase } from 'playwright-qase-reporter';

test.describe('Parameterized Test for example.com', () => {
const testData = [

{ urlPath: '/example', expectedTitle: 'Example Domain' },
{ urlPath: '/login', expectedTitle: 'Login page' },
{ urlPath: '/not-found', expectedTitle: '404 - Not Found' },
];

testData.forEach(({ urlPath, expectedTitle }) => {
test(`Verify if "www.example.com${urlPath}" has the correct title`, async ({ page }) => {
qase.id(1); // Replace 1 with an existing valid case ID from your project.
qase.title("Verify if the Website has a correct title");
qase.fields({
'severity': 'blocker',
'priority': 'medium',
'layer': 'e2e',
'description': 'Add the test description, with **rich text support**',
'preconditions': 'Client is connected to the internet',
});
qase.parameters({
'URL Path': urlPath,
'Expected Title': expectedTitle
});

await test.step(`Go to https://example.com${urlPath}`, async () => {
await page.goto(`https://example.com${urlPath}`);
});

await test.step(`Check if the page's title is ${expectedTitle}`, async () => {
const title = await page.title();
expect(title).toBe(expectedTitle);
});
});
});

});