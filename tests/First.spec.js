const{test,expect}=require('@playwright/test');
test('Home Page',async({page})=>{
await page.goto('https://www.youtube.com');
const pageTitle=page.title();
console.log('page title is:',pageTitle);
await expect(page).toHaveTitle('YouTube');
const pageURL=page.url();
console.log('page url is:',pageURL);
await expect(page).toHaveURL('https://www.youtube.com');
await page.close
})