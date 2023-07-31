const{test,expect}=require('@playwright/test')
test('All',async({page})=>{
 await page.goto('https://www.facebook.com');
// await page.fill('id=email','Yashwanth');
// await page.fill('id=pass','12345678');
// //await page.getByRole('button', { name: 'login' }).click();
// //await page.locator("//button[.='Log in']").click();
// //await page.getByText('Forgotten Password?').click();
// //await page.getByText('Create new account').click();
// await page.waitForTimeout(2000);
// await page.locator("//a[.=Create new account]").click();
// //await page.close();
//await page.goto('https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0');
//await page.getByText('').fill();
//await page.fill('id=identify_email','Yashwanth');
//await page.getByText("Log in").first().click();
//await page.locator("a[aria-label='Log in'] span[class='x1lliihq x6ikm8r x10wlt62 x1n2onr6 xlyipyv xuxw1ft']").click();
await page.getByText('Create new account').click();
await page.waitForTimeout(2000);
await page.locator("//input[@aria-label='First name']").fill('Yashwanth');
await page.waitForTimeout(2000);
await page.locator("//input[@aria-label='Surname']").fill('Balanaku');
await page.waitForTimeout(2000);
await page.
locator("//input[@aria-label='Mobile number or email address']").fill('8374691200');
await page.waitForTimeout(2000);
await page.locator("//input[@aria-label='New password']").fill('12345678');
await page.waitForTimeout(2000);
//input[@aria-label='Mobile number or email address']
//input[@aria-label='New password']
await page.locator('#day').selectOption({value :'9'});
await page.waitForTimeout(2000);
await page.locator('#month').selectOption({index :2});
await page.waitForTimeout(2000);
await page.locator('#year').selectOption({value :'1995'});
await page.waitForTimeout(2000);
await page.locator("//label[.='Male']").check();
await page.waitForTimeout(2000);
await page.locator("//button[@name='websubmit']").click();
await page.waitForTimeout(2000);





})