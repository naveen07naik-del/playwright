import{test} from "@playwright/test"
test("t1",async({page})=>{
   await page.goto('https://www.amazon.in/')
   await page.locator('input#twotabsearchtextbox').fill("shoes")
   await page.locator('//input[@type="submit"]').click()
   
await page.locator('#s-result-sort-select').click({force:true})
await page.locator("#s-result-sort-select_2").click({force:true})
await page.getByLabel("mens Addiction Gts 15 Running Shoe").click()

  await page.locator('input#add-to-cart-button').click()
  await page.locator('#sw-gtc').getByRole('link', { name: 'Go to Cart' }).click();
  await page.getByRole('group', { name: 'Quantity is' }).getByLabel('Delete Brooks Men&#39;s').click();
});
