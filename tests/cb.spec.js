import {test,expect} from '@playwright/test'
test.skip('cob',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
page.on('dialog',async dialog=>{

    await expect(dialog.type()).toContain('confirm');
    dialog.accept();
})
await page.locator("//button[.='Confirm Box']").click();
await page.waitForTimeout(4000);



})
test('co',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
page.on('dialog',async dialog=>{

    await expect(dialog.type()).toContain('prompt');
    dialog.accept('yashwanth');
})
await page.locator("//button[.='Prompt']").click();
await page.waitForTimeout(4000);



})



