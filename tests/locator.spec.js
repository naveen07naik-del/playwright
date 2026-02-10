// import{test} from "@playwright/test"
// test("locator",async({page})=>{
//     await page.goto("https://practicetestautomation.com/practice-test-login/")
//     await page.locator('//input[@name="username"]').fill("student")
//     await page.locator('//input[@name="password"]').fill("Password123")
//     await page.locator('//button[@id="submit"]').click()
// })


import{test} from "@playwright/test"
test("locator",async({page})=>{
    await page.goto("https://demo.nopcommerce.com/login")
    await page.getByLabel("Email:").fill("aa@gmail.com")
    await page.getByPlaceholder("Enter your email here").fill("aa@gmail.com")
    // await page.getByText("Electronics").click()
    // await page.getByAltText("Picture for category Others").click()
    await page.getByTitle("Show products in category Camera & photo").first()
    // await page.getByRole('heading', { name: 'New Customer'}).first().click()
    // await page.goto("https://www.saucedemo.com/")
    // await page.getByTestId("password").fill("dsfghjk")
})