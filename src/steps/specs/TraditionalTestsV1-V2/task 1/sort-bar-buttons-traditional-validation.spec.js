import SortBar from "../../../../component-objects/sort-bar"

import { getDeviceType } from "../../../../support/utils"

import {
	validateIfStaticElementIsDisplayed,
	validateIfStaticElementIsNotDisplayed
} from "../../../../support/interact"

const { Then } = require("cucumber")

Then(/^I expect that the sort bar buttons are rendered and not rendered per device type$/, { timeout: 800000 }, async () => {

	const deviceType = getDeviceType()

	await validateIfStaticElementIsDisplayed(SortBar.sortByPopularityBtn,
		"sort by popularity button view button is displayed",
		`sort by list popularity button with selector ${SortBar.sortByPopularityBtn} is not displayed`
	)

	if (deviceType === "Laptop") {

		await validateIfStaticElementIsDisplayed(SortBar.sortByGridViewBtn,
			"sort by grid view button is displayed",
			`sort by grid view button with selector ${SortBar.sortByGridViewBtn} is not displayed`
		)

		await validateIfStaticElementIsDisplayed(SortBar.sortByViewListBtn,
			"sort by list view button is displayed",
			`sort by list view button with selector ${SortBar.sortByViewListBtn} is not displayed`
		)

		await validateIfStaticElementIsNotDisplayed(SortBar.sortFilterBtn,
			"sort by filter button is not displayed",
			`sort by filter button with selector ${SortBar.sortFilterBtn} is displayed`
		)

		await validateIfStaticElementIsNotDisplayed(SortBar.sortFilterTxt,
			"sort by filter text is not displayed",
			`sort by filter text with selector ${SortBar.sortFilterTxt} is displayed`
		)

	} else if (deviceType === "Tablet") {

		await validateIfStaticElementIsNotDisplayed(SortBar.sortByGridViewBtn,
			"sort by grid view button is not displayed",
			`sort by grid view button with selector ${SortBar.sortByGridViewBtn} is displayed`
		)

		await validateIfStaticElementIsNotDisplayed(SortBar.sortByViewListBtn,
			"sort by list view button is not displayed",
			`sort by list view button with selector ${SortBar.sortByViewListBtn} is displayed`
		)

		await validateIfStaticElementIsDisplayed(SortBar.sortFilterBtn,
			"sort by filter button is displayed",
			`sort by filter button with selector ${SortBar.sortFilterBtn} is not displayed`
		)

		await validateIfStaticElementIsDisplayed(SortBar.sortFilterTxt,
			"sort by filter text is displayed",
			`sort by filter text with selector ${SortBar.sortFilterTxt} is not displayed`
		)

	} else {

		await validateIfStaticElementIsNotDisplayed(SortBar.sortByGridViewBtn,
			"sort by grid view button is not displayed",
			`sort by grid view button with selector ${SortBar.sortByGridViewBtn} is displayed`
		)

		await validateIfStaticElementIsNotDisplayed(SortBar.sortByViewListBtn,
			"sort by list view button is not displayed",
			`sort by list view button with selector ${SortBar.sortByViewListBtn} is displayed`
		)

		await validateIfStaticElementIsNotDisplayed(SortBar.sortFilterTxt,
			"sort by filter text is not displayed",
			`sort by filter text with selector ${SortBar.sortFilterTxt} is displayed`
		)

		await validateIfStaticElementIsDisplayed(SortBar.sortFilterBtn,
			"sort by filter button is displayed",
			`sort by filter button with selector ${SortBar.sortFilterBtn} is not displayed`
		)

	}

	expect(issues.length, "Sort Bar Buttons Validation Test failed. Here are the issues: \n" + issues.join("\n")).to.be.equal(0)
})
