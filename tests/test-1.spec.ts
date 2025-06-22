import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // console.log(process.env.BASE_URL_TEST)
  await page.goto('');
});