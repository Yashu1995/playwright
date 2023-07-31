import{test,expect} from '@playwright/test'
test('Tube',async({page})=>{
await page.goto('https://www.youtube.com')
//await page.locator("//input[@aria-label='Search']").fill('o rendu prema meghalu')
//await page.waitForTimeout(5000)
//await page.locator("button[id^='search-icon-legacy']").click()
//await page.waitForTimeout(7000)
await page.locator("//yt-formatted-string[.='Baby - O Rendu Prema Meghaalila | Anand Deverakonda,Vaishnavi, Viraj| Vijai Bulganin,Sai Rajesh, SKN']").click()
})