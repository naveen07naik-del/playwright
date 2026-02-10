// import{test} from "@playwright/test"
// import fs from "fs"
// let datafile=fs.readFileSync("C:/Users/Admin/Desktop/plywright - Copy/test data/singlesetdata.json")
// let data= JSON.parse(datafile)
// test("get data",async({page})=>{
//     console.log(data.greet);
    
// })

// import{test} from "@playwright/test"
// import fs from "fs"
// let datafile=fs.readFileSync("C:/Users/Admin/Desktop/plywright - Copy/test data/singlesetdata.json")
// let data= JSON.parse(datafile)
// test("get data",async({page})=>{
//     data.forEach(d => {
        
 
//     console.log(d.greet);
    
// })
// })

// import{test} from "@playwright/test"
// import fs from "fs"
// let datafile=fs.readFileSync("C:/Users/Admin/Desktop/plywright - Copy/test data/singlesetdata.json")
// let data= JSON.parse(datafile)
// test("multiple data",async({page})=>{
//   for(let testdata of data){
//     let url=testdata.url
//     let u=testdata.username
//     let p=testdata.password
//     await page.goto(url)
//     await page.locator("#username").fill(u)
//     await page.locator("#password").fill(p)
//     await page.getByRole("button",{name:"Submit"}).click()
//     let title=await page.title()
//     if(title=="Logged In Successfully | Practice Test Automation"){
//         console.log("valid cred");
        
//     }
//     else{
//         console.log("invalid cred");
        
//     }
    
    
 
//   }
// })

// import{test} from "@playwright/test"
// import data from "../../test data/singlesetdata.json"
// test("valid",async({page})=>{
//     for(let d of data.valid){
//         await page.goto(d.url)
//         await page.locator('#username').fill(d.username)
//         await page.locator('#password').fill(d.password)
//         await page.getByRole("button",{name:"Submit"}).click()
//         let title=await page.title()
//        if(title=="Logged In Successfully | Practice Test Automation"){
//         console.log("valid cred");
        
//     }
//     else{
//         console.log("invalid cred");
        
//     }
//     }
//     for(let d of data.invalid){
//         await page.goto(d.url)
//         await page.locator('#username').fill(d.username)
//         await page.locator('#password').fill(d.password)
//         await page.getByRole("button",{name:"Submit"}).click()
//         let title=await page.title()
//        if(title=="Logged In Successfully | Practice Test Automation"){
//         console.log("valid cred");
        
//     }
//     else{
//         console.log("invalid cred");
        
//     }
//     }
// })


    import{test} from "@playwright/test"
import data from "../../test data/singlesetdata.json"
test.only("a",async({page})=>{
    for(let key in data){
        console.log(key);
        for(let d of data[key]){
            await page.goto(d.url)
             await page.locator('#username').fill(d.username)
        await page.locator('#password').fill(d.password)
        await page.getByRole("button",{name:"Submit"}).click()
        let title=await page.title()
       if(title=="Logged In Successfully | Practice Test Automation"){
        console.log("valid cred");
        
    }
    else{
        console.log("invalid cred");
        
    }
    }
}})
    
  