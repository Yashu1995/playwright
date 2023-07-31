import{test,expect} from '@playwright/test';
test('SS',async({page})=>{
await page.goto('https://www.youtube.com')
await page.screenshot({path:'HomePage.png'})
await page.screenshot({path:'fullpage.png',fullPage:true})


});