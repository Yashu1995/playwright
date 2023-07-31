const{test,expect}=require('@playwright/test')
test('File',async({page})=>{
await page.goto('https://www.foundit.in/')
await page.waitForSelector('.mqfihd-upload')
await page.locator('.mqfihd-upload').click()
//await page.locator("//div[contains(text(),'Upload Resume')]").click()
await page.locator('#file-upload').setInputFiles('tests\files\myfile.text')






})