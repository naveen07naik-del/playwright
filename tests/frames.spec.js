// import{test} from "@playwright/test"
// test("frames",async({page})=>{
//     await page.goto('https://ui.vision/demo/webtest/frames/')
//     let frames=await page.frames()
// //     console.log(frames.length)
// // for(let frame of frames){
// //     console.log(await frame.title());
    
// // }
// // console.log(await page.title());

// })

// import{test,expect} from "@playwright/test"
// test("frames",async({page})=>{
//     await page.goto('https://ui.vision/demo/webtest/frames/')
//     let frames=await page.frames()
//     let frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
//     await frame1.locator('//input[@name="mytext1"]').fill("aaaaaaaaaaa")
//     await expect(await frame1.locator('//input[@name="mytext1"]').inputValue()).toContain('aaaaa')
// })

// import{test,expect} from "@playwright/test"
// test("frames",async({page})=>{
//    await page.goto('https://ui.vision/demo/webtest/frames/')
//    let tfframe2=await page.frameLocator('//frame[@src="frame_2.html"]').locator('//input[@name="mytext2"]')
//    await tfframe2.fill('qqqqq')
//    await page.waitForTimeout(2000)
// })

// import{test,expect} from "@playwright/test"
// test("frames",async({page})=>{
//    await page.goto('https://ui.vision/demo/webtest/frames/')
//  let frame2=  await page.locator('//frame[@src="frame_2.html"]').contentFrame()
//    await frame2.locator('//input[@name="mytext2"]').fill('ddddd')
//    await page.waitForTimeout(2000)
// })


// import{test,expect} from "@playwright/test"
// test("frames",async({page})=>{
//    await page.goto('https://ui.vision/demo/webtest/frames/')
//    let frame3=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
//    let button=await frame3.frameLocator('//iframe').locator('//div[@class="ulDsOb" and .="I am a human"]')
//    await button.click()
//    await page.waitForTimeout(2000)

// })