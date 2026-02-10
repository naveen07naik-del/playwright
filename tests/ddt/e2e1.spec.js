import{test} from "@playwright/test"
import landin from "../../page object model/landingpage.js"
import signup from "../../page object model/signup.page.js"
import signin from "../../page object model/signin.page.js"
import home from "../../page object model/homepage.js"
import createTicket from "../../page object model/createticket.js"
test("",async({page})=>{
//     await page.goto("http://49.249.28.218:8081/TestServer/Build/Small_CRM/")
    //create instance for that object for everypage like page=new classname(page)
    page.on("dialog",async(dialog)=>{
console.log(await dialog.message);
await dialog.accept()

    })
    let landingpage=new landin(page) 
    let signuppage=new signup(page)
    let signinpage=new signin(page)
    let homepage=new home(page)
    let ticketpage=new createTicket(page)
     await page.goto("http://49.249.28.218:8081/TestServer/Build/Small_CRM/")
     await landingpage.signuplink.click()
     await signuppage.nametf.fill("pooomm")
     await signuppage.emailtf.fill('pooomm@gmail.com')
     await signuppage.passwordtf.fill("123")
     await signuppage.repasswordtf.fill("123")
     await signuppage.contacttf.fill("1234578911")
     await signuppage.maleRadio.click()
     await signuppage.fRadio.click()
     await signuppage.submitbutton.click()

     await signinpage.emailltf.fill('pooomm@gmail.com')
     await signinpage.pwdtf.fill("123")
     await signinpage.loginbutton.click()

     await homepage.createticketlink.click()
     

     await ticketpage.subjecttf.fill("logo font")
     await ticketpage.taskdrop.selectOption({value:"ot1"})
     await ticketpage.priodrop.selectOption({value:"important"})
     await ticketpage.descriptiontextarea.fill("font and colour in th logo ")
     await ticketpage.sendbutton.click()
await homepage.viewticketlink.click()
await  page.screenshot({path:"/screenshot/ticketss.png"})
})
