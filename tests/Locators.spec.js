import {test,expect} from '@playwright/test';
test('Locator',async({page})=>{
await page.goto('https://demoblaze.com/');
 await page.click('id=login2');
 await page.fill('#loginusername','YASHWANTH');
 await page.fill('#loginpassword','YASHWANTH');
 await page.click("//button[normalize-space()='Log in']");

})