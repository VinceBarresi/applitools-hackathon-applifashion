import Header from "../../../../component-objects/header"

import { getDeviceType } from "../../../../support/utils"

import {
	validateIfDynamicElementIsDisplayed,
	validateIfStaticElementIsDisplayed,
	validateIfStaticElementIsNotDisplayed
} from "../../../../support/interact"

const { Then } = require("cucumber")

Then(/^I expect that the Header Nav is not rendered on Mobile or Tablet and is rendered on Desktop with its child menu elements$/, { timeout: 800000 }, async (menuLinks) => {

	const linksArray = menuLinks.rawTable

 	if (getDeviceType() === "Laptop") {

		await validateIfStaticElementIsDisplayed(Header.headerNav,
			`header nav with selector ${Header.headerNav} is displayed`,
			`header nav with selector ${Header.headerNav} is not displayed`
		)

		for (let i = 0; i < linksArray.length; i++) {
			await validateIfDynamicElementIsDisplayed(Header.lnkLabelTxt,
				`label text ${linksArray[i]} is displayed`,
				`label text with selector ${Header.lnkLabelTxt(linksArray[i])} is not displayed`,
				linksArray[i]
			)
		}

 	} else {

		// this should only render on xl and lg devices as per nav class and id so this will fail
		await validateIfStaticElementIsNotDisplayed(Header.headerNav,
			`header nav with selector ${Header.headerNav} is not displayed`,
			`header nav with selector ${Header.headerNav} is displayed`
		)

 	}

	expect(issues.length, "Header Menu Links Validation Test failed. Here are the issues: \n" + issues.join("\n")).to.be.equal(0)
})
