const { Then } = require("cucumber")

var ConsoleLogHandler = require("@applitools/eyes-webdriverio").ConsoleLogHandler

const {
	BatchInfo,
	BrowserType,
	By,
	Configuration,
	DeviceName,
	Eyes,
	MatchLevel,
	ScreenOrientation,
	StitchMode,
	Target,
	VisualGridRunner
} = require("@applitools/eyes-webdriverio")

const runner = new VisualGridRunner(10)

let configuration = new Configuration()

const eyes = new Eyes(runner)

configuration.setAppName("Applifashion Hackathon")
configuration.setApiKey(process.env.APPLITOOLS_KEY)
configuration.setStitchMode(StitchMode.CSS)

configuration.addBrowser(1200, 700, BrowserType.CHROME)
configuration.addBrowser(1200, 700, BrowserType.CHROMIUM_EDGE)
configuration.addBrowser(1200, 700, BrowserType.FIREFOX)
configuration.addBrowser(768, 700, BrowserType.CHROME)
configuration.addBrowser(768, 700, BrowserType.CHROMIUM_EDGE)
configuration.addBrowser(768, 700, BrowserType.FIREFOX)
configuration.addDeviceEmulation(DeviceName.iPhone_X, ScreenOrientation.PORTRAIT)

//eyes.setLogHandler(new ConsoleLogHandler(true))
const batch = new BatchInfo("UFG Hackathon")
configuration.setBatch(batch)

eyes.setConfiguration(configuration)

Then(/^I expect that the page is correctly rendered across devices with different viewport sizes with applitools$/, { timeout: 800000 }, async () => {

	if (browser.capabilities.browserName === "chrome") {

		var closePromises = []

		try {
			await eyes.open(browser, "UFG Hackathon", "Task 1", { width: 800, height: 600 })
			await eyes.check("Cross-Device Elements Test", Target
				.window()
				.fully())
			closePromises.push(eyes.close(false))
		} catch (e) {
			console.log(e)
		} finally {
			await browser.pause(5000)
			await Promise.all(closePromises)
			await eyes.getRunner().getAllTestResults()
		}

	} else {
		return "skipped"
	}

})
