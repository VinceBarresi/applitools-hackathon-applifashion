import SubHeader from "../../../../component-objects/sub-header"

import { getDeviceType } from "../../../../support/utils"

import {
	validateIfStaticElementIsDisplayed,
	validateIfStaticElementIsNotDisplayed
} from "../../../../support/interact"

const { Then } = require("cucumber")

Then(/^I expect that Account, Wishlist and Cart buttons are visible on Laptop and Wishlist button is hidden on Tablet and Mobile$/, { timeout: 800000 }, async () => {

	if (getDeviceType() === "Laptop") {

		await validateIfStaticElementIsDisplayed(SubHeader.toolsList,
			"tools list is displayed",
			`tools list with selector ${SubHeader.toolsList} is not displayed`,
		)

		await validateIfStaticElementIsDisplayed(SubHeader.accountLnk,
			"account link is displayed",
			`account link with selector ${SubHeader.accountLnk} is not displayed`,
		)

		await validateIfStaticElementIsDisplayed(SubHeader.shoppingCartLnk,
			"shopping cart link is displayed",
			`shopping cart link with selector ${SubHeader.shoppingCartLnk} is not displayed`,
		)

		await validateIfStaticElementIsDisplayed(SubHeader.wishlistLnk,
			"wishlist link is displayed",
			`wishlist link with selector ${SubHeader.wishlistLnk} is not displayed`,
		)

	} else {

		await validateIfStaticElementIsDisplayed(SubHeader.toolsList,
			"tools list is displayed",
			`tools list with selector ${SubHeader.toolsList} is not displayed`,
		)

		await validateIfStaticElementIsDisplayed(SubHeader.accountLnk,
			"account link is displayed",
			`account link with selector ${SubHeader.accountLnk} is not displayed`,
		)

		await validateIfStaticElementIsDisplayed(SubHeader.shoppingCartLnk,
			"shopping cart link is displayed",
			`shopping cart link with selector ${SubHeader.shoppingCartLnk} is not displayed`,
		)

		await validateIfStaticElementIsNotDisplayed(SubHeader.wishlistLnk,
			"wishlist link is not displayed",
			`wishlist link with selector ${SubHeader.wishlistLnk} is displayed`,
		)
	}

	expect(issues.length, "Search Bar Validation Test failed. Here are the issues: \n" + issues.join("\n")).to.be.equal(0)
})
