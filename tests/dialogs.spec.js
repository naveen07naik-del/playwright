// import{test} from "@playwright/test"
// test("dialog",async({page})=>{
// await page.goto('https://testautomationpractice.blogspot.com/')
// await page.getByRole("button",{name: 'Simple Alert'}).click()
// await page.getByRole("button",{name: 'Confirmation Alert'}).click()
// await page.getByRole("button",{name: 'Prompt Alert'}).click()
// })

// import{test,expect} from "@playwright/test"
// test("dialog",async({page})=>{
// await page.goto('https://testautomationpractice.blogspot.com/')
// page.on("dialog",(dialog)=>{dialog.accept()})
// await page.getByRole("button",{name: 'Simple Alert'}).click()
// await page.getByRole("button",{name: 'Confirmation Alert'}).click()
// await page.getByRole("button",{name: 'Prompt Alert'}).click()
// })
import{test,expect} from "@playwright/test"
test("dialog",async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')
page.on("dialog",async(dialog)=>{if(dialog.type()=='alert'){
    await dialog.accept()
}
else if(dialog.type()=='confirm'){
      await dialog.accept()
}
else if(dialog.type()=='prompt'){
      await dialog.accept("tom")
}})
await page.getByRole("button",{name: 'Simple Alert'}).click()
await page.waitForTimeout(2000)
await page.getByRole("button",{name: 'Confirmation Alert'}).click()
await page.waitForTimeout(2000)

await expect(page.locator("#demo")).toContainText("OK")
await page.getByRole("button",{name: 'Prompt Alert'}).click()
await expect(await page.locator('#demo').textContent()).toBe("Hello tom! How are you today?")
await page.waitForTimeout(5000)
})
