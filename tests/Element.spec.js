const{test,expext}=require('@playwright/test');
test('Production', async({page})=>{

    await page.goto('https://demoblaze.com/');
const products=await page.$$("//div[@id='tbodyid']//div//h4//a");
for(const product of products)
{
    const productName=await product.textContent();
console.log(productName);
}


})