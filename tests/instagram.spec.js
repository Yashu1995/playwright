import {test,expect} from '@playwright/test'
test('Instagram',async({page})=>{
await page.goto('https://www.instagram.com/');
await page.waitForTimeout(2000);
await page.locator("input[name='username']").
fill('Yashwanth kumar');
await page.waitForTimeout(2000);
await page.locator("input[name='password']").fill('12345678');
await page.waitForTimeout(2000);
await page.locator("//div[starts-with(text(),'Log in')]").click();
await page.waitForTimeout(2000);
await page.locator("//span[.='Log in with Facebook']").click();
await page.waitForTimeout(2000);
await page.goBack('https://www.instagram.com/');
//await page.locator("//a[normalize-space()='Forgotten your password?']").click();
// await page.getByText('Forgotten your password?').click();
// await page.waitForTimeout(2000);
// await page.goBack('https://www.instagram.com/');
await page.locator("//span[normalize-space()='Sign up']").click();
await page.waitForTimeout(2000);






})