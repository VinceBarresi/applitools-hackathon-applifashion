const { config } = require("./wdio.SHARED.conf")

// =========================
// Sauce config
// =========================

config.services = ["sauce"]
config.region = "us"
config.user = process.env.SAUCE_USERNAME
config.key = process.env.SAUCE_ACCESS_KEY
config.sauceConnect = true
config.connectionRetryTimeout = 180000

 config.capabilities = [ {
	platformName: "macOS 10.13",
	browserName: "googlechrome",
	browserVersion: "latest",
	"sauce:options": {
		seleniumVersion: "3.141.59",
		screenResolution: "1024x768",
		maxDuration: "10799",
			commandTimeout: "599",
			idleTimeout: "1000"
	},
	"cjson:metadata": {
		browser: {
			name: "Chrome",
			version: 81
		},
		device: "Sauce - 1024x768",
		platform: {
			name: "OSX",
			version: "10.13"
		}
	},
},
{
	platformName: "macOS 10.12",
	browserName: "firefox",
	browserVersion: "latest",
	"sauce:options": {
		seleniumVersion: "3.141.59",
		screenResolution: "1024x768",
		maxDuration: "10799",
		commandTimeout: "599"
	},
	"cjson:metadata": {
		browser: {
			name: "FireFox",
			version: 75.0
		},
		device: "Sauce - 1024x768",
		platform: {
			name: "OSX",
			version: "10.12"
		}
	},
},
{
	platformName: "Windows 10",
	browserName: "MicrosoftEdge",
	browserVersion: 81,
	"sauce:options": {
		seleniumVersion: "3.141.59",
		screenResolution: "1024x768",
		maxDuration: "10799",
		commandTimeout: "599",
		idleTimeout: "1000"
	},
	"cjson:metadata": {
		browser: {
			name: "Microsoft Edge",
			version: 81
		},
		device: "Sauce - 1024x768",
		platform: {
			name: "Windows",
			version: "10"
		}
	}
},
{
	platformName: "Windows 10",
	browserName: "googlechrome",
	browserVersion: "latest",
	"sauce:options": {
		seleniumVersion: "3.141.59",
		screenResolution: "800x600",
		maxDuration: "10799",
			commandTimeout: "599",
			idleTimeout: "1000"
	},
	"cjson:metadata": {
		browser: {
			name: "Chrome",
			version: 81
		},
		device: "Sauce - 800x600",
		platform: {
			name: "OSX",
			version: "10.13"
		}
	},
},
{
	platformName: "Windows 10",
	browserName: "firefox",
	browserVersion: "latest",
	"sauce:options": {
		seleniumVersion: "3.141.59",
		screenResolution: "800x600",
		maxDuration: "10799",
		commandTimeout: "599"
	},
	"cjson:metadata": {
		device: "Sauce - 800x600",
		browser: {
			name: "FireFox",
			version: 76.0
		},
		platform: {
			name: "OSX",
			version: "10.12"
		}
	},
},
{
	platformName: "Windows 10",
	browserName: "MicrosoftEdge",
	browserVersion: 81,
	"sauce:options": {
		seleniumVersion: "3.141.59",
		screenResolution: "800x600",
		maxDuration: "10799",
		commandTimeout: "599",
		idleTimeout: "1000"
	},
	"cjson:metadata": {
		device: "Sauce - 800x600",
		browser: {
			name: "Microsoft Edge",
			version: 81
		},
		platform: {
			name: "Windows",
			version: "10"
		}
	}
},
{
		automationName: "XCUITest",
        browserName: "safari",
        deviceName: "iPhone X Simulator",
        platformName: "iOS",
        idleTimeout: 180,
        cacheId: new Date().getTime(),
        noReset: true,
        orientation: "PORTRAIT",
        newCommandTimeout: 180,
        phoneOnly: true,
        tabletOnly: false,
        platformVersion: "12.0",
	    "cjson:metadata": {
			device: "Sauce iPhone X Sim",
			browser: {
				name: "Safari",
				version: 12
			},
			platform: {
				version: "iPhone X"
			}
		}

} ]

// This path was defined in the `wdio.SHARED.conf.js`
delete config.path

exports.config = config
