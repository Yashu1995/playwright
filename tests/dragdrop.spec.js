const{test,expect}=require('@playwright/test')
test('DND',async({page})=>{
 await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
const wt=await page.locator('#box3')
const us=await page.locator('#box103')
await wt.dragTo(us)



















})
