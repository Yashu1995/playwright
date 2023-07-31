import {test,expect} from '@playwright/test'
test('frames',async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/');
await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_2.html'}).locator("input[name='mytext2']").fill('hello');

const frames=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});
await frames.locator("input[name='mytext3']").fill('Welcome');
await page.waitForTimeout(3000);
const cf=await frames.childFrames();
await cf[0].locator("//div[@id='i5']//div[@class='AB7Lab Id5V1']").check();
await page.waitForTimeout(3000);
// await cf[1].locator("label[for='i19'] span[class='aDTYNe snByac n5vBHf OIC90c']").click();
// await page.waitForTimeout(3000);
// await cf[2].locator("//div[@class='MocG8c HZ3kWc mhLiyf LMgvRb KKjvXb DEh1R']").click();



})