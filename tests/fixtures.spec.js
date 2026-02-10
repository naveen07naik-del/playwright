// import {test} from"@playwright/test"
// test("fixtures",async({page})=>{
//   await page.goto("jdasjhjashhttps://www.amazon.in/")
// await page.pause()
// })
                   
import {test} from"@playwright/test"
test("fixtures",async({browser})=>{
  //await page.goto("https://www.amazon.in/")
let context=await browser.newContext()
let page =await context.newPage()
await page.goto("https://www.amazon.in/")
})

