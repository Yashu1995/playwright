import {test,expect} from '@playwright/test';
test('PWL',async({page})=>{
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
const logo=await page.getByAltText('company-branding');
await expect(logo).toBeVisible();
await page.getByPlaceholder('Username').fill('Admin');
await page.getByPlaceholder('Password').fill('admin123');
await page.locator("//button[normalize-space()='Login']").click();
})