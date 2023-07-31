const{test,expect}=require('@playwright/test')
test('table',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')
await page.locator("table[name='BookTable']")
const coloumn=await page.locator('tbody tr th')
console.log(await coloumn.count())
const row=await page.locator('tr')
console.log(await row.count())
for(let i=0;i<await row.count();i++)
{
    const rows=row.nth(i)
    const tds=rows.locator('td')
    for(let j=0;j<await tds.count();j++)
    {
       console.log(await tds.nth(j).textContent())

    }
}


})