// import{test} from "@playwright/test"
// test("upload",async({page})=>{
//     await page.goto("https://testautomationpractice.blogspot.com/")
//     await page.locator('#singleFileInput').setInputFiles("C:/Users/Admin/Desktop/plywright - Copy/upload files/resume.txt")

// await page.getByRole("button",{name:'Upload Single File'}).click()
// await page.waitForTimeout(4000)
// })

// import{test} from "@playwright/test"
// test("upload",async({page})=>{
//     await page.goto("https://testautomationpractice.blogspot.com/")
//     // await page.locator('#singleFileInput').setInputFiles("C:/Users/Admin/Desktop/plywright - Copy/upload files/resume.txt")
//  await page.locator('#multipleFilesInput').setInputFiles(["C:/Users/Admin/Desktop/plywright - Copy/upload files/aa.xlsx","C:/Users/Admin/Desktop/plywright - Copy/upload files/resume.txt"])
// await page.getByRole("button",{name:'Upload Multiple Files'}).click()
// await page.waitForTimeout(4000)
// })

// import{test} from "@playwright/test"
// import path from "path"
// test("upload",async({page})=>{
//     await page.goto("https://testautomationpractice.blogspot.com/")
//     // await page.locator('#singleFileInput').setInputFiles("C:/Users/Admin/Desktop/plywright - Copy/upload files/resume.txt")
//  await page.locator('#singleFileInput').setInputFiles(path.join(__dirname,"../upload files/aa.xlsx"))
// await page.getByRole("button",{name:'Upload Single File'}).click()
// await page.waitForTimeout(4000)
// })

// import{test} from "@playwright/test"
// import path from "path"
// test("upload",async({page})=>{
//     await page.goto("https://testautomationpractice.blogspot.com/")
//     await page.locator('#singleFileInput').setInputFiles("c:/Users/Admin/Desktop/max")
// //  await page.locator('#singleFileInput').setInputFiles(path.join(__dirname,"../upload files/aa.xlsx"))
// await page.getByRole("button",{name:'Upload Single File'}).click()
// await page.waitForTimeout(4000)
//  await page.locator('#multipleFilesInput').setInputFiles(["c:/Users/Admin/Desktop/max","c:/Users/Admin/Desktop/log"])
// await page.getByRole("button",{name:'Upload Multiple Files'}).click()
// await page.waitForTimeout(4000)
// // })
// })

import{test} from "@playwright/test"
import path from "path"
test("upload",async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/download?sublist=0')
    await page.locator('#writeArea').fill("hello i am downloading")
    let [downloadfile]=await Promise.all([page.waitForEvent("download")
        ,page.getByRole("button",{name:"Download"}).click()])
    let downloadfolder="C:/Users/Admin/Desktop/plywright - Copy/downlaods"
    let filename=downloadfile.suggestedFilename()
    await downloadfile.saveAs(path.join(downloadfolder,filename))
})
