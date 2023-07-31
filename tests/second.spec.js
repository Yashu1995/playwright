const{test,expect}=require('@playwright/test');
test('homepage',async({page})=>{
await page.goto('https://www.amazon.com');
const pageTitle=await page.title();
console.log('page title is:',pageTitle);
const pageURL=page.url();
console.log('pageurl is:',pageURL);
await page.close();
})