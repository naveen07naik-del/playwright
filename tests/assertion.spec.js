import{test,expect} from "@playwright/test"
test("assert",async({page})=>{
//     // await page.goto("https://www.flipkart.com/")
//     // await expect(page.getByPlaceholder("Search for Products, Brands and More")).toBeEditable()
//     // await page.getByPlaceholder("Search for Products, Brands and More").isEditable()
// //    await expect(page.getByPlaceholder("Search for Products, Brands and More")).toBeDisabled()
// //    await expect(page.getByPlaceholder("Search for Products, Brands and More")).toBeEmpty()
// //  await page.getByPlaceholder("Search for Products, Brands and More").fill("dboss")
// // await expect( page.locator("//a[@title='Login']")).toBeEnabled()
//  //await page.getByTitle('Login').isEnabled

//  await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")
// //  await page.locator('#domain_b').check()
// //  await expect(page.locator('#domain_b')).toBeChecked()

// // await expect(page.getByText("Already have an account ?")).toContainText("Already")
// // await expect(page.locator('')).toContainClass("font-medium")
// // await expect(page).toHaveURL("https://demoapps.qspiders.com/ui?scenario=1")
// // await expect(page).toHaveTitle("DemoApps | Qspiders | Text Box")
// //await expect(page.locator('//button[text()="Yes"]')).toHaveCSS('background-color','rgb(253, 186, 116)')
// await expect(page.locator('.flex gap-2')).toHaveCount(1)

// await page.goto('https://demoapps.qspiders.com/ui/checkbox?sublist=0')
// expect('Name').toBe('Name')
// expect(100).toBeCloseTo(100)
// expect('Number').toBeDefined()
// expect('enter your number').toBeNull()
// expect(10).toBeGreaterThan(9)
//  expect(10).toBeGreaterThanOrEqual(9)
//  expect('maxlength').toHaveLength(10)
//  expect('maxlength').toContain('l')
//   expect(Number('maxlength')).toBeNaN()


let car={
    brand:"tata",
colour:["black","white","purple"],
price:[100000,200000,300000]
}
expect(car.brand).toEqual(expect.any())
// expect(car.brand).toEqual(expect.any("tata"))
// expect(car.colour).toContain('black')
// expect([car.colour]).toEqual(expect.arrayContaining([]))

// expect(car).toEqual(
//   expect.objectContaining({
//     colour: expect.arrayContaining(['black'])}))

// expect(car.colour).toEqual(
//   expect.arrayContaining([expect.any(String)])

// );

// expect(car.colour.length).toBeGreaterThan(0);

// expect(car.brand).toEqual(expect.any(String))
// expect(car.brand).toEqual(expect.anything(String))

// expect(car.brand).toEqual(expect.any())
// expect(car.brand).toEqual(expect.anything())
})