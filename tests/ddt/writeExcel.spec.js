// import{test} from "@playwright/test"
// import path from "path"
// import excel from "exceljs"
// test("write",async({page})=>{


// let book =new excel.Workbook()
// await book.xlsx.readFile(path.join(__dirname,"../../test data/exceldata.xlsx"))
// let sheet=book.getWorksheet("Sheet5")
// if(!sheet){
//     sheet=book.addWorksheet("Sheet5")

// }
// sheet.getRow(1).getCell(1).value="hello"
// await book.xlsx.writeFile(path.join(__dirname,"../../test data/exceldata.xlsx"))
// })

import{test} from "@playwright/test"
import path from "path"
import excel from "exceljs"
test("write",async({page})=>{


let book =new excel.Workbook()
await book.xlsx.readFile(path.join(__dirname,"../../test data/exceldata.xlsx"))
let sheet=book.getWorksheet("Sheet5")
if(!sheet){
    sheet=book.addWorksheet("Sheet5")

}
await page.goto('https://www.amazon.in/')
await page.locator("#twotabsearchtextbox").fill("shoes")
await page.locator('//div[@class="s-suggestion-container"]').first().waitFor()
let allopt=await page.locator('//div[@class="s-suggestion-container"]').allTextContents()
console.log(allopt)
for(let text of allopt){
    let i=allopt.indexOf(text)
    sheet.getRow(i+1).getCell(1).value=text
}

await book.xlsx.writeFile(path.join(__dirname,"../../test data/exceldata.xlsx"))
})