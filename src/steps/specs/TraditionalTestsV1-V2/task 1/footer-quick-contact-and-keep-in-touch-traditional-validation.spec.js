import Footer from "../../../../component-objects/footer"

import { getDeviceType } from "../../../../support/utils"

import {
	validateIfDynamicElementIsDisplayed,
	validateIfDynamicElementIsNotDisplayed,
	validateIfStaticElementIsDisplayed,
	validateIfStaticElementIsNotDisplayed
} from "../../../../support/interact"

const { Then } = require("cucumber")

Then(/^I expect that the (Contacts) header and its elements are visible on Tablet and Laptop and are collapsed on Mobile/, { timeout: 800000 }, async (headerTxt) => {

	await validateIfDynamicElementIsDisplayed(Footer.footerHeaderTxt,
		`${headerTxt} header is displayed`,
		`${headerTxt} header with selector ${Footer.footerHeaderTxt(headerTxt)} is not displayed`,
		headerTxt
	)

	if (getDeviceType() === "Mobile") {

		await validateIfStaticElementIsNotDisplayed(Footer.contactEmailLnkLabelTxt,
			"contact email link is not displayed",
			`contact email link with selector ${Footer.contactEmailLnkLabelTxt} is displayed`
		)

		await validateIfStaticElementIsNotDisplayed(Footer.contactAddressTxt,
			"contact address text is not displayed",
			`contact address text link with selector ${Footer.contactAddressTxt} is displayed`
		)

	} else {

		await validateIfStaticElementIsDisplayed(Footer.contactEmailLnkLabelTxt,
			"contact email link is displayed",
			`contact email link with selector ${Footer.contactEmailLnkLabelTxt} is not displayed`
		)

		await validateIfStaticElementIsDisplayed(Footer.contactAddressTxt,
			"contact address text is displayed",
			`contact address text link with selector ${Footer.contactAddressTxt} is not displayed`
		)
	}

	expect(issues.length, "Footer Contact Links Test Failed. Here are the issues: \n" + issues.join("\n")).to.be.equal(0)
})

Then(/^I expect that the (Keep in touch) header and its elements are visible on Tablet and Laptop and are collapsed on Mobile$/, { timeout: 800000 }, async (headerTxt) => {

	await validateIfDynamicElementIsDisplayed(Footer.footerHeaderTxt,
		`${headerTxt} header is displayed`,
		`${headerTxt} header with selector ${Footer.footerHeaderTxt(headerTxt)} is not displayed`,
		headerTxt
	)

	if (getDeviceType() === "Mobile") {

		await validateIfStaticElementIsNotDisplayed(Footer.emailTextBox,
			"email text box is not displayed",
			`email text box with selector ${Footer.emailTextBox} is displayed`
		)

		await validateIfStaticElementIsNotDisplayed(Footer.emailTxtBoxSubmitBtn,
			"email submit button is not displayed",
			`email submit button with selector ${Footer.emailTxtBoxSubmitBtn} is displayed`
		)

	} else {

		await validateIfStaticElementIsDisplayed(Footer.emailTextBox,
			"email text box is displayed",
			`email text box with selector ${Footer.emailTextBox} is not displayed`
		)

		await validateIfStaticElementIsDisplayed(Footer.emailTxtBoxSubmitBtn,
			"email submit button is displayed",
			`email submit button with selector ${Footer.emailTxtBoxSubmitBtn} is not displayed`
		)
	}

	expect(issues.length, "Footer Keep In Touch Links Test Failed. Here are the issues: \n" + issues.join("\n")).to.be.equal(0)
})

Then(/I expect that the (Quick Links) header and its elements are visible on Tablet and Laptop and are collapsed on Mobile$/, { timeout: 800000 }, async (headerTxt, links) => {

	const linksArray = links.rawTable

	await validateIfDynamicElementIsDisplayed(Footer.footerHeaderTxt,
		`${headerTxt} header is displayed`,
		`${headerTxt} header with selector ${Footer.footerHeaderTxt(headerTxt)} is not displayed`,
		headerTxt
	)

	if (getDeviceType() === "Mobile") {

		for (let i = 0; i < linksArray.length; i++) {
			await validateIfDynamicElementIsNotDisplayed(Footer.quickLnkLabelTxt,
				`quick link ${linksArray[i]} is not displayed`,
				`quick link with selector ${Footer.quickLnkLabelTxt(linksArray[i])} is displayed`,
				linksArray[i]
			)
		}

	} else {

		for (let i = 0; i < linksArray.length; i++) {
			await validateIfDynamicElementIsDisplayed(Footer.quickLnkLabelTxt,
				`quick link ${linksArray[i]} is displayed`,
				`quick link with selector ${Footer.quickLnkLabelTxt(linksArray[i])} is not displayed`,
				linksArray[i]
			)
		}
	}

	expect(issues.length, "Footer Quick Links Test Failed. Here are the issues: \n" + issues.join("\n")).to.be.equal(0)
})
