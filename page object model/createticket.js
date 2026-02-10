class createTicket{
    constructor(page){
        this.subjecttf=page.locator('#subject')
        this.taskdrop=page.locator('//select[@name="tasktype" ]')
        this.priodrop=page.locator('//select[@name="priority" ]')
        this.descriptiontextarea=page.locator('//textarea[@name="description"]')
        this.sendbutton=page.getByRole("button",{name:"send"})
    }
}
export default createTicket