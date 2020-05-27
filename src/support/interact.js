import { _log } from "./logger-utils"
import { _takeScreenshot } from "./utils"

/**
* Get an array of static elements
*
* @param {string} selector - selector of element

* @param {number} numberOfExpectedElements - the number of elements expected to be rendered on the page
*
* @param {string} displayedMessage - message to log to cucumber report and console
*
* @param {string} notDisplayedMessage - error message to log to cucumber report, console, issues array
*
* @return {string} - array of static elements)
*/
export async function validateNumberOfStaticElements(selector, numberOfExpectedElements, displayedMessage, notDisplayedMessage) {
	const staticElements = await browser.$$(selector)
	if (staticElements.length === numberOfExpectedElements) {
		_log(displayedMessage)
	} else {
		issues.push(notDisplayedMessage)
		await _takeScreenshot()
	}
}

/**
* Click a static element using Javascript Executer
*
* @param {string} selector - selector of element
*
* @param {string} displayedMessage - message to log to cucumber report and console
*/
export async function clickStaticElement(selector, displayedMessage) {
	const staticElement = await browser.$(selector)
	_log(displayedMessage)
	await browser.execute("arguments[0].click();", staticElement)
}

/**
* Scroll a dynamic element into view
*
* @param {string} selector - selector of element
*
* @param {string} displayedMessage - message to log to cucumber report and console
*
* @param {string} replacementText - the elements dynamic text to be replaced
*/
export async function scrollDynamicElementIntoView(selector, displayedMessage, replacementText) {
	const dynamicElement = await browser.$(selector(replacementText))
	_log(displayedMessage)
	await dynamicElement.scrollIntoView()
}

/**
* Scroll a static element into view
*
* @param {string} selector - selector of element
*
* @param {string} displayedMessage - message to log to cucumber report and console
*/
export async function scrollStaticElementIntoView(selector, displayedMessage) {
	const staticElement = await browser.$(selector)
	_log(displayedMessage)
	await staticElement.scrollIntoView()
}

/**
* Validate a dynamic element is rendered on page
*
* @param {string} selector - selector of element
*
* @param {string} displayedMessage - message to log to cucumber report and console
*
* @param {string} notDisplayedMessage - error message to log to cucumber report, console, issues array
*
* @param {string} replacementText1 - the elements first dynamic text to be replaced
*
* @param {string} replacementText2 - the elements second dynamic text to be replaced
*/
export async function validateIfDynamicElementIsDisplayed(selector, displayedMessage, notDisplayedMessage, replacementText1, replacementText2 = "") {
	const dynamicElement = await browser.$(selector(replacementText1, replacementText2))
	const xpath = selector(replacementText1, replacementText2)
	ids.push(xpath)
	if (await dynamicElement.isDisplayed()) {
		_log(displayedMessage)
	} else {
		issues.push(notDisplayedMessage)
		await _takeScreenshot()
	}
}

/**
* Validate a dynamic element is not rendered on the page
*
* @param {string} selector - selector of element
*
* @param {string} notDisplayedMessage - message to log to cucumber report and console
*
* @param {string} displayedMessage - error message to log to cucumber report, console, issues array
*/
export async function validateIfDynamicElementIsNotDisplayed(selector, notDisplayedMessage, displayedMessage, replacementText) {
	const dynamicElement = await browser.$(selector(replacementText))
	ids.push(selector(replacementText))
	if (await dynamicElement.isDisplayed()) {
		issues.push(displayedMessage)
		await _takeScreenshot()
	} else {
		_log(notDisplayedMessage)
	}
}

/**
* Validate a static element is rendered on page
*
* @param {string} selector - selector of element
*
* @param {string} displayedMessage - message to log to cucumber report and console
*
* @param {string} notDisplayedMessage - error message to log to cucumber report, console, issues array
*/
export async function validateIfStaticElementIsDisplayed(selector, displayedMessage, notDisplayedMessage) {
	ids.push(selector)
	const staticElement = await browser.$(selector)
	if (await staticElement.isDisplayed()) {
		_log(displayedMessage)
	} else {
		issues.push(notDisplayedMessage)
		await _takeScreenshot()
	}
}

/**
* Validate a static element is not rendered on the page
*
* @param {string} selector - selector of element
*
* @param {string} notDisplayedMessage - message to log to cucumber report and console
*
* @param {string} displayedMessage - error message to log to cucumber report, console, issues array
*/
export async function validateIfStaticElementIsNotDisplayed(selector, notDisplayedMessage, displayedMessage) {
	ids.push(selector)
	const staticElement = await browser.$(selector)
	if (await staticElement.isDisplayed()) {
		issues.push(displayedMessage)
		await _takeScreenshot()
	} else {
		_log(notDisplayedMessage)
	}
}
