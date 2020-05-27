import Filters from "../../../../component-objects/filters"

import { getDeviceType } from "../../../../support/utils"

import {
	validateIfDynamicElementIsDisplayed,
	validateIfDynamicElementIsNotDisplayed,
	validateIfStaticElementIsDisplayed,
	validateIfStaticElementIsNotDisplayed
} from "../../../../support/interact"

const { Then } = require("cucumber")

Then(/^I expect that the (brand|color|price|type) filter and its filter elements are visible on Laptop and hidden on Tablet and Mobile$/, { timeout: 800000 }, async (filterName, filters) => {

	const filtersArray = filters.rawTable

	if (await getDeviceType() !== "Laptop") {

		// this should only render on lg devices as per aside class and id so this will fail
		await validateIfStaticElementIsNotDisplayed(Filters.filterAside,
			`filter aside slideout with selector ${Filters.filterAside} is not displayed`,
			`aside slideout with selector ${Filters.filterAside} is displayed`
		)

	} else {

		await validateIfStaticElementIsDisplayed(Filters.filterAside,
			`filter aside with selector ${Filters.filterAside} is not displayed`,
			`${filterName} header link with selector ${Filters.filterHeaderTxt(filterName)} is displayed`,
			filterName
		)

		await validateIfDynamicElementIsDisplayed(Filters.filterHeaderTxt,
			`${filterName} header link is displayed`,
			`${filterName} header link with selector ${Filters.filterHeaderTxt(filterName)} is not displayed`,
			filterName
		)

		for (let i = 0; i < filtersArray.length; i++) {
			await validateIfDynamicElementIsDisplayed(Filters.filterTxt,
				`filter link ${filtersArray[i]} is displayed`,
				`brands filter link with selector ${Filters.filterTxt(filters[i])} is not displayed`,
				filtersArray[i]
			)
		}

		// we only need to validate these buttons once so lets do it when testing price filters
		if (filterName === "price") {

			await validateIfStaticElementIsDisplayed(Filters.filterBtn,
				"filter button is displayed",
				`filter button with selector ${Filters.filterBtn} is not displayed`
			)

			await validateIfStaticElementIsDisplayed(Filters.resetBtn,
				"reset button is displayed",
				`reset button with selector ${Filters.resetBtn} is not displayed`
			)
		}

	}

	expect(issues.length, `${filterName} Test Failed. Here are the issues: \n ${issues.join("\n")}`).to.be.equal(0)

})
