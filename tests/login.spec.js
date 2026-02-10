// import{test} from "@playwright/test"
// import loginpage from "../page object model/loginpage.page.js"
// test("object",async({page})=>{
//     let linpage=new loginpage(page)
//     await page.goto("https://practicetestautomation.com/practice-test-login/")
//         await linpage.usernametextfield.fill("student")
//         await linpage.passwordtextfield.fill("Password123")
//     await linpage.submitbutton.click()
//     await page.waitForTimeout(3000)
// //launch url
// //pass pwd 
// //click on submit button
// })

import{test} from "@playwright/test"
import loginpage from "../page object model/loginpage.page.js"
import logindata from "../test data/logindata.json"
test("object",async({page})=>{
    let linpage=new loginpage(page)
    let url=logindata.url
    let usn=logindata.usn
    let pwd=logindata.pwd
    await page.goto(url)
        await linpage.usernametextfield.fill(usn)
        await linpage.passwordtextfield.fill(pwd)
    await linpage.submitbutton.click()

//launch url
//pass pwd
//click on submit button
})