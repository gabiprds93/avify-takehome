import { test, expect } from "@playwright/test"

const LOCALHOST_URL = "http://localhost:8080/"

test("app shows fuel image and text of biomass", async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const image = await page.getByRole("img", { name: "biomass" })
  const imageSrc = await image.getAttribute("src")
  const text = await page.getByText("biomass")

  await expect(text).toBeVisible()
  await expect(imageSrc.endsWith("biomass.svg")).toBeTruthy()
})

test("app shows one fuel percentage ", async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const percentage = await page.getByText("%").first()

  await expect(percentage).toBeVisible()
})
