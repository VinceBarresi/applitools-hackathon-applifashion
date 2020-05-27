import {
	getDeviceType,
	getFileName
} from "../../support/utils"

const {
	After,
	Status
} = require("cucumber")

const fs = require("fs")

After( async (scenarioResult) => {

	var testName = scenarioResult.pickle.name

	// append traditional test results to txt files
	if (testName.includes("Traditional")) {
		const status = scenarioResult.result.status === "passed" ? "Pass" : "Fail"

		const height = windowSize.height
		const width = windowSize.width
		const viewport =`${width}x${height}`
		const fileText = `${testName.split("|")[1]}, Test Name: ${testName}, DOM Id: ${ids}, Browser: ${browser.capabilities.browserName}, Viewport: ${viewport}, Device: ${getDeviceType()}, Status: ${status}\n\n`

		fs.appendFileSync(`${await getFileName()}`, fileText)
	}

	if (sauce === "true") {
		if (scenarioResult.result.status === "failed") {
			browser.execute("sauce:job-result=failed")
		} else if (scenarioResult.result.status === "passed") {
			browser.execute("sauce:job-result=passed")
		}
		return scenarioResult.status
	}
})
