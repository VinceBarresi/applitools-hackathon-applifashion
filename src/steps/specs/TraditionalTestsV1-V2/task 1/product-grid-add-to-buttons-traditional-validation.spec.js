import ProductGrid from "../../../../component-objects/product-grid"

import { getDeviceType } from "../../../../support/utils"

import {
	validateIfStaticElementIsNotDisplayed,
	validateNumberOfStaticElements
} from "../../../../support/interact"

const { Then } = require("cucumber")

Then(/^I expect that the add to buttons are only visible on Tablet and Mobile$/, { timeout: 800000 }, async () => {

	if (getDeviceType() === "Laptop") {

		// add to buttons are "displayed" in Laptop view so this will fail on V1.
		await validateIfStaticElementIsNotDisplayed(ProductGrid.addToButtonsList,
			`add to button list ${ProductGrid.addToButtonsList} is not displayed`,
			`add to button list with selector ${ProductGrid.addToButtonsList} is displayed`,
		)

	} else {

		await validateNumberOfStaticElements(ProductGrid.addToCartBtn, 9, "Number of add to cart buttons is 9", "number of add to cart buttons is not 9")
		await validateNumberOfStaticElements(ProductGrid.addToCompareBtn, 9, "Number of add to compare buttons is 9", "number of add to compare buttons is not 9")
		await validateNumberOfStaticElements(ProductGrid.addToFavoritesBtn, 9, "Number of add to favorites buttons is 9", "number of add to favorites buttons is not 9")

	}

	expect(issues.length, "Product Grid Add To Buttons Validation Test failed. Here are the issues: \n" + issues.join("\n")).to.be.equal(0)

})
