import{test} from "@playwright/test"
test("wait",async({page})=>{
await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
await page.fill('#writeArea',"i am downloaing the file")
let[downloadfile]=await Promise.all([
     page.click('#downloadButton'),
     page.waitForEvent('download')
    
])
console.log(await downloadfile.path())
})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   