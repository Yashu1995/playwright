import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.instagram.com/');
  await page.getByLabel('Phone number, username, or email').click();
  await page.getByLabel('Phone number, username, or email').fill('Yashwanth');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('12345678');
  await page.getByLabel('Password').press('Tab');
  await page.getByRole('button', { name: 'Show' }).press('Tab');
  await page.getByRole('button', { name: 'Log in', exact: true }).press('Enter');
  await page.goto('https://www.instagram.com/');
  await page.getByRole('link', { name: 'Forgot password?' }).click();
  await page.goto('https://www.instagram.com/');
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.goto('https://www.instagram.com/');
  await page.getByRole('button', { name: 'Log in with Facebook' }).click();
  await page.getByPlaceholder('Email address or phone number').fill('yashwanth');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('kumar');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.goto('https://www.facebook.com/login/device-based/regular/login/?login_attempt=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26locale%3Den_US%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26response_type%3Dcode%252Cgranted_scopes%26scope%3Demail%26state%3D%257B%2522fbLoginKey%2522%253A%2522bn97n6i8ya0u1adtdm11ycxdgnc6wuss1tts03dwdefsvwtndwm%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%2522%257D%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Dd65d1d6f-0483-4712-83d8-bd570f30d2ef%26tp%3Dunspecified%26cbt%3D1690642577475&lwv=100');
  await page.goto('https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26locale%3Den_US%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26response_type%3Dcode%252Cgranted_scopes%26scope%3Demail%26state%3D%257B%2522fbLoginKey%2522%253A%2522bn97n6i8ya0u1adtdm11ycxdgnc6wuss1tts03dwdefsvwtndwm%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%2522%257D%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Dd65d1d6f-0483-4712-83d8-bd570f30d2ef%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%2522bn97n6i8ya0u1adtdm11ycxdgnc6wuss1tts03dwdefsvwtndwm%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%2522%257D%23_%3D_&display=page&locale=en_GB&pl_dbl=0');
  await page.goto('https://www.instagram.com/');
});