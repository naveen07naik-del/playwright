class signin{
    constructor(page){
        this.emailltf=page.locator('#txtusername')
        this.pwdtf=page.locator('#txtpassword')
        this.loginbutton=page.getByRole("button",{name:"login"})
    }
}
export default signin