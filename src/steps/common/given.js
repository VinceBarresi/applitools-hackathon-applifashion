import {
	getBaseUrl,
	_openWebsite,
	_setDeviceType,
	_setFileName
} from "../../support/utils"

import { _log } from "../../support/logger-utils"

const { Given } = require("cucumber")

Given(/^I open (.*)$/, { timeout: 1000000 }, async (path) => {

	_openWebsite("https://demo.applitools.com/", `${path}`)
	await browser.pause(5000)

	_setFileName()

	if (await browser.config.sauceConnect)
		sauce = true

	await browser.pause(2000)
	windowSize = await browser.getWindowSize()

	_setDeviceType()

})
