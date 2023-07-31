// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://testautomationpractice.blogspot.com/');
//   page.once('dialog', dialog => {
//     console.log(`Dialog message: ${dialog.message()}`);
//     dialog.dismiss().catch(() => {});
//   });
//   await page.getByRole('button', { name: 'Alert' }).click();
//   page.once('dialog', dialog => {
//     console.log(`Dialog message: ${dialog.message()}`);
//     dialog.dismiss().catch(() => {});
//   });
//   await page.getByRole('button', { name: 'Confirm Box' }).click();
//   await page.getByRole('button', { name: 'Copy Text' }).click();
//   await page.getByRole('button', { name: 'Copy Text' }).dblclick();
//   await page.getByText('Tabs Search results New Browser Window New Browser Window JS Alerts Alert Confir').click();
//   await page.frameLocator('#frame-one796456169').locator('div').filter({ hasText: 'Name:' }).nth(1).click();
//   await page.locator('#slider').click();
//   await page.frameLocator('#frame-one796456169').getByLabel('Job:').selectOption('Radio-0');
//   await page.frameLocator('#frame-one796456169').getByPlaceholder('MM/DD/YYYY').click();
//   await page.frameLocator('#frame-one796456169').getByPlaceholder('MM/DD/YYYY').fill('09/03/1995');
//   await page.frameLocator('#frame-one796456169').getByPlaceholder('MM/DD/YYYY').press('Enter');
// });