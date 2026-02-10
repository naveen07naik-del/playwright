import{test} from "@playwright/test"
test("fill",async({page})=>{
    // await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
//     await page.locator("#name").fill("naveen")
//     // let text=await page.locator("#name").inputValue()
//     await page.locator("#email").type("aa@gmail.com")
//    let v= await page.locator('//button[@type="submit"]').isEditable()
//     // await page.pause(3000)
//     let text=await page.locator('//section[@class="poppins text-[14px]" and text()="Radio Button"]').allTextContents()
// console.log(text);
// await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
// let a=await page.locator('//input[@id="male"]').getAttribute('value')
// console.log(a);
// await page.goto("https://www.flipkart.com/")
// let b=await page.locator('//div[@class="uBUBH6"]').last().click()
// console.log(b);
//  await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
//  await page.locator('//input[@id="phone"]').fill("aaa")
//  let v=await page.locator('//input[@id="phone"]').isVisible()
//  console.log(v)

//  await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")
//  await page.locator('//input[@id="domain_a"]').waitFor()
//  let v=await page.locator('//input[@id="domain_a"]').isChecked()
//  console.log(v)
// })

 await page.goto("http://playwright.dev/docs/test-fixtures")
 await page.locator('//a[text()="TypeScript"]').click()

 
})
