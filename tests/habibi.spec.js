import { test, expect } from '@playwright/test';

test.describe('Select Country Dropdown', () => {
  test('select India from country dropdown', async ({ page }) => {
    // Navigate to https://demoapps.qspiders.com/ui?scenario=1
    await page.goto('https://demoapps.qspiders.com/ui?scenario=1');

    // Click on Dropdown link to navigate to the dropdown section
    await page.getByRole('link', { name: 'Dropdown' }).click();

    // Select 'India' from the country dropdown
    await page.locator('#select3').selectOption(['India']);

    // Verify that India is selected in the country dropdown
    await expect(page.locator('#select3')).toHaveValue('India');
  });
});
