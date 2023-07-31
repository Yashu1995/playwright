import {test,expect} from '@playwright/test'
test('Mouse',async({page})=>{
await page.goto('https://demo.nopcommerce.com/')
const computers=await page.locator("//ul[@class='top-menu notmobile']//a[normalize-space()='Computers']")
await computers.hover()
await page.waitForTimeout(3000)
const ele=await page.locator("//ul[@class='top-menu notmobile']//a[normalize-space()='Electronics']")
await ele.hover()
await page.waitForTimeout(3000)


})