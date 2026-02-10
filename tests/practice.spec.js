// import{test} from "@playwright/test"
// import { log } from "console"
// test("flp",async({page})=>{
//     await page.goto("https://www.flipkart.com/")
//     await page.locator("//span[text()='Fashion']")
//    await page.locator("//span[text()='Mobiles']").click()
//    let a= await page.locator("//div[@class='buvtMR']").all()
//    console.log(a);
   
//     })

// import{test} from "@playwright/test"
// test("flip",async({page})=>{
//     await page.goto("https://www.instagram.com/accounts/login/?hl=en")
//     await page.locator("//input[@name='email']").fill("narendramodi@gmaail.com")
//     await page.locator("//input[@name='pass']").fill("bjpindia")
//     await page.locator("//span[text()='Log in']").click()
//     await page.locator("//span[text()='Forgot password?']").click()
//     await page.locator("//input[@type='text']").fill("narendra@gmail.com")
//     await page.locator("//span[text()='Continue']").click()

// })

import{test} from "@playwright/test"
test("flipk",async({page})=>{
    await page.goto("https://www.flipkart.com/")
    await page.getByTitle('Search for Products, Brands and More').last().fill("iphone 17")
    await page.locator("//span[text()='Mobiles']").click()
    await page.locator("//div[text()='Apple']").first().click()
    await page.getByText('Apple iPhone 16 (Black, 128 GB)').click()
})