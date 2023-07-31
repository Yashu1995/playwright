const{test,expect}=require('@playwright/test')
test('TEST',async({page})=>{

await page.goto('https://itera-qa.azurewebsites.net/home/automation');

// await page.fill('#name','Yashwanth');

// await page.click('#male');

// await page.locator('.custom-select').selectOption({ index: 2 })

// await page.click('#monday');

// await page.click('#saturday');
// await page.waitForTimeout(3000);

// await page.locator('#monday').uncheck()
// await page.waitForTimeout(3000);
// await page.locator('#saturday').uncheck()
//await page.locator('.custom-select').selectOption({label:'Sweden'});
//  const options=await page.locator('.custom-select option');
//  await expect(options).toHaveCount(11);
// await page.waitForTimeout(5000);
const options=await page.$$('.custom-select option');
for(const option of options)
{
    console.log(await option.textContent());
}

})