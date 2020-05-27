import SubHeader from "../../../../component-objects/sub-header"

import { getDeviceType } from "../../../../support/utils"

import {
	validateIfStaticElementIsDisplayed,
	validateIfStaticElementIsNotDisplayed
} from "../../../../support/interact"

const { Then } = require("cucumber")

Then(/^I expect that search bar and search button is hidden only on Mobile$/, { timeout: 800000 }, async () => {

	if (getDeviceType() === "Mobile") {

		await validateIfStaticElementIsNotDisplayed(SubHeader.searchBar,
			"search bar is not displayed",
			`search bar with selector ${SubHeader.searchBar} is displayed`,
		)

		await validateIfStaticElementIsNotDisplayed(SubHeader.searchBtn,
			"search button is not displayed",
			`search button with selector ${SubHeader.searchBtn} is displayed`,
		)

	} else {

		await validateIfStaticElementIsDisplayed(SubHeader.searchBar,
			"search bar container is displayed",
			`search bar container with selector ${SubHeader.searchBar} is not displayed`
		)

		await validateIfStaticElementIsDisplayed(SubHeader.searchBtn,
			"search button container is displayed",
			`search button container with selector ${SubHeader.searchBtn} is not displayed`
		)
	}

	expect(issues.length, "Search Bar Validation Test failed. Here are the issues: \n" + issues.join("\n")).to.be.equal(0)
})
