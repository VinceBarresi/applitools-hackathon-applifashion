import Filters from "../../../../component-objects/filters"
import ProductGrid from "../../../../component-objects/product-grid"
import SortBar from "../../../../component-objects/sort-bar"

import { getDeviceType } from "../../../../support/utils"

import {
	clickStaticElement,
	validateNumberOfStaticElements
} from "../../../../support/interact"

const { Then } = require("cucumber")

Then(/^I expect that the page is correctly rendered with 2 black shoes after selecting black as a filter$/, { timeout: 800000 }, async () => {

	if (getDeviceType() !== "Laptop") {
		await clickStaticElement(SortBar.sortFilterBtn, "click sort button to expand filter slide out")
	}

	await clickStaticElement(Filters.blackFilterCheckBox, "click black filter button")
	await browser.pause(500)
	await clickStaticElement(Filters.filterBtn, "click filter button")
	await browser.pause(500)

	// validate 2 black shoe elements are rendered
	await validateNumberOfStaticElements(ProductGrid.gridItem, 2, "Number of filtered shoes is 2", "number of filtered shoes is not 2")

	expect(issues.length, "Black Shoes Filter Results Validation Test failed. Here are the issues: \n" + issues.join("\n")).to.be.equal(0)
})
