class signup{
    constructor(page){
        this.nametf=page.locator('#name')
        this.emailtf=page.locator("#email")
this.passwordtf=page.locator('#password')
this.repasswordtf=page.locator('#cpassword')
this.contacttf=page.locator('#txtpassword')
this.maleRadio=page.locator("//input[@type='radio' and @value='m']")
this.fRadio=page.locator("//input[@type='radio' and @value='f']")
this.submitbutton=page.getByRole("button",{name:"submit"})

    }
}
export default signup
