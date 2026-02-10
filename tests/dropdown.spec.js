import{test}from "@playwright/test"
test("dropdown",async({page})=>{
    await page.goto('https://www.amazon.in/s?k=shoes&crid=MVYD9XVDN9TY&sprefix=shoes%2Caps%2C411&ref=nb_sb_noss_2')
await page.locator('#s-result-sort-select').click({force:true})
await page.locator('//a[@class="a-dropdown-link"]').first().waitFor()
    let options=await page.locator('//a[@class="a-dropdown-link"]').all()
    for(let option of options){
        let text=await option.textContent()
        if(text.includes('Best ')){
            await option.click()
        }
    }
await page.waitForTimeout(3000)
})
 