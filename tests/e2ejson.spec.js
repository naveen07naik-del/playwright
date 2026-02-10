import{test} from "@playwright/test"
import landin from "../page object model/landingpage.js"
import signup from "../page object model/signup.page.js"
import signin from "../page object model/signin.page.js"
import home from "../page object model/homepage.js"
import createTicket from "../page object model/createticket.js"
import testData from "../test data/e2e.json"
test("",async({page})=>{
    let url =testData.url
    let name =testData.name
    let email=testData.email
    let password=testData.password
    let repassword=testData.repassword   
    let contact=testData.contact
    let subject=testData.subject
    let description=testData.description
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
     await page.goto(url)
     await landingpage.signuplink.click()
     await signuppage.nametf.fill(name)
     await signuppage.emailtf.fill(email)
     await signuppage.passwordtf.fill(password)
     await signuppage.repasswordtf.fill(repassword)
     await signuppage.contacttf.fill(contact)
     await signuppage.maleRadio.click()
     await signuppage.fRadio.click()
     await signuppage.submitbutton.click()

     await signinpage.emailltf.fill(email)
     await signinpage.pwdtf.fill(password)
     await signinpage.loginbutton.click()

     await homepage.createticketlink.click()
     

     await ticketpage.subjecttf.fill(subject)
     await ticketpage.taskdrop.selectOption({value:"ot1"})
     await ticketpage.priodrop.selectOption({value:"important"})
     await ticketpage.descriptiontextarea.fill(description)
     await ticketpage.sendbutton.click()
await homepage.viewticketlink.click()
// await  page.screenshot({path:"C:/Users/Admin/Desktop/plywright - Copy/git cong
})
 