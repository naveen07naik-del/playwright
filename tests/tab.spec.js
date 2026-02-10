import{test,expect}from "@playwright/test"
test("tab",async({browser})=>{
    let context=await browser.newContext()
    // let page1=await context.newPage()
    // await page1.goto('https://www.flipkart.com/')
    // let page2=await context.newPage()
    // await page2.goto('https://www.amazon.in/')

let page=await context.newPage()
    await page.goto("https://www.flipkart.com/search?q=shoes&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
   await page.click('(//a[@class="atJtCj Qum9aC"])[1]')
   await page.waitForTimeout(3000)
   console.log(await page.url());
   

   await page.goto("https://www.redbus.in/")
   await page.click('//a[text()="Contact us"]')
   await page.waitForTimeout(3000)
   await page.click('//button[text()="Account"]')
})
test.only("handling",async({browser})=>{
let context =await browser.newContext()
let page =await context.newPage()
    await page.goto("https://www.flipkart.com/search?q=shoes&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
   let [page2]= await Promise.all([ page.waitForEvent('popup'),
     page.click('(//a[@class="atJtCj Qum9aC"])[1]')])
    await page.waitForTimeout(3000)
    console.log(await page2.url());
    await expect(page2.url()).not.toBe("https://www.flipkart.com/search?q=shoes&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
    })


test("handle",async({browser})=>{
    let context =await browser.newContext()
let page =await context.newPage()
    await page.goto("https://www.redbus.in/")
    let [page2]=await Promise.all([
        page.waitForEvent('popup'), page.click('//a[text()="Contact us"]')
            ])
await page2.click('//span[text()="Account"]') 

    
})
test("handles",async({browser})=>{
    let context=await browser.newContext()
    let page=await context.newPage()
    await page.goto('https://demoapps.qspiders.com/ui/browser/multipleWindow?sublist=2')
    let [window2] = await Promise.all([page.waitForEvent('popup'), page.getByRole("button",{name:"Shop Now"}).click()
    ])


await window2.locator('//button[text()="Add to Cart"]').click()
    const title1=await page.title()
    const title2=await window2.title()
    await expect(title2).not.toBe(title1)
    
})


