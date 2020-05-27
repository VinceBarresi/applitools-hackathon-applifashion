import { _log } from "./logger-utils"

import cucumberJson from "wdio-cucumberjs-json-reporter"

var deviceType = ""
var fileName = ""

/**
* Get the device type
*
* @return {string} device type under test
*/
export function getDeviceType() {
	return deviceType
}

/**
* Get the the name of the file
*
* @return {string} file name to report traditional results into
*/
export function getFileName() {
	return fileName
}

/**
* Open the browser to a given url
*
* @param {string} url - url to navigate to
*
* @private
*/
export function _openWebsite(baseUrl, path) {
	_log(`open ${baseUrl}${path}`)
	browser.url(`${baseUrl}${path}`)
}

/**
* Set the device type
*
* @private
*/
export function _setDeviceType() {
	const width = windowSize.width
	if (width >= 992) {
		deviceType = "Laptop"
	} else if (width >= 768 && width <= 991) {
		deviceType = "Tablet"
	} else if (width >= 375 && width <= 767) {
		deviceType = "Mobile"
	}
}

/**
* Set the name of the file to report results into
*
* @private
*/
export async function _setFileName() {
	const url = await browser.getUrl()
	fileName = url.includes("V1")
		? "Traditional-V1-TestResults.txt"
		: "Traditional-V2-TestResults.txt"
}

/**
* Take a screenshot and attach it to the cucumber report
*
* @private
*/
export async function _takeScreenshot() {
	cucumberJson.attach(await browser.takeScreenshot(), "image/png")
}
