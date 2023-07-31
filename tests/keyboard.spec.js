import{test,expect} from '@playwright/test'
test('KB',async({page})=>{
const fb=await page.goto('https://www.facebook.com')
await page.keyboard.press('Tab')
await page.waitForTimeout(3000)
await page.keyboard.type('12345678')
await page.keyboard.press('Tab')
await page.keyboard.press('Tab')
await page.keyboard.press('Tab')
await page.waitForTimeout(3000)


})