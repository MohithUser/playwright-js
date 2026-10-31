const {test, expect} = require('@playwright/test');

test('First Playwright Test', async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const infoText = await page.locator("p.text-white").textContent();
    const userName = infoText.split("and")[0].split("is")[1].trim();
    const password = infoText.split("and")[1].split("is")[1].trim();
    console.log("User Name: "+userName);
    console.log("Password: "+password);
    await page.locator("#username").fill(userName);
    await page.locator("#password").fill(password);
    await page.locator("#signInBtn").click();


})