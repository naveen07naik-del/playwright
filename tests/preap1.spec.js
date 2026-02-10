import{test} from "@playwright/test"
test("window",async({browser})=>{
    let context=await browser.newContext()
    let page = await context.newPage()
await page.goto('https://www.amazon.in/s?k=bag&crid=1PDGKFLNTIIAA&sprefix=bag%2Caps%2C509&ref=nb_sb_noss_2')
let [page2]=await Promise.all([ page.waitForEvent('popup'), page.locator('//input[@value="Add to cart"]').click()])0
awge.locator('//input[@value="Add to cart"]').click()
await page.waitForTimeout(2000)
})