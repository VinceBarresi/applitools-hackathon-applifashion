const { generate } = require("multiple-cucumber-html-reporter")
const { removeSync } = require("fs-extra")

const fs = require("fs")
const moment = require("moment")

var startTime = ""

exports.config = {

	runner: "local",
	// Override default path ('/wd/hub') for chromedriver service.
	path: "/",
	specs: ["./src/features/**/**/*.feature"],
	exclude: [
		// path to excluded specs
	],
	suites: {
		full: ["./src/features/**/**/*.feature"],
		fullModern: ["./src/features/**/ModernTestsV1-V2/**/*.feature"],
		fullTraditional: ["./src/features/**/TraditionalTestsV1-V2/**/*.feature"],
		debug: ["./src/features/TraditionalTestsV1-V2/**/*add*.feature"]
	},

	// logLevel choices: ["trace", "debug", "info", "warn", "error", "silent"]
    logLevel: "silent",
	bail: 0,
	waitforTimeout: 10000,
	connectionRetryTimeout: 90000,
	connectionRetryCount: 3,
	framework: "cucumber",
	reporters: ["spec", "cucumberjs-json"],
	cucumberOpts: {
		require: ["./src/steps/**/**/**/*.js"],        // <string[]> (file/dir) require files before executing features
		backtrace: false,   // <boolean> show full backtrace for errors
		requireModule: [],  // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
		dryRun: false,      // <boolean> invoke formatters without executing steps
		failFast: false,    // <boolean> abort the run on first failure
		format: ["pretty"], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
		colors: true,       // <boolean> disable colors in formatter output
		snippets: true,     // <boolean> hide step definition snippets for pending steps
		source: true,       // <boolean> hide source uris
		profile: [],        // <string[]> (name) specify the profile to use
		strict: false,      // <boolean> fail if there are any undefined or pending steps
		tags: [],           // <string[]> (expression) only execute the features or scenarios with tags matching the expression
		timeout: 1800000,     // <number> timeout for step definitions
		ignoreUndefinedDefinitions: false, // <boolean> Enable this config to treat undefined definitions as warnings.
	},

	// =====
	// Hooks
	// =====
	// WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
	// it and to build services around it. You can either apply a single function or an array of
	// methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
	// resolved to continue.
	/**
	 * Gets executed once before all workers get launched.
	 * @param {Object} config wdio configuration object
	 * @param {Array.<Object>} capabilities list of capabilities details
	 */
	onPrepare: () => {
		// Remove the `cucumber-results` folder that holds the json and report files
		removeSync(".tmp/")
		// Overwrite contents of TestResults files
		fs.writeFile("./Traditional-V1-TestResults.txt", "", function() { console.log("Overwrite of Traditional-V1-TestResults.txt successful!") })
		fs.writeFile("./Traditional-V2-TestResults.txt", "", function() { console.log("Overwrite of Traditional-V2-TestResults.txt successful!") })
		// Capture start time of test to pass to report in custom field
		startTime = moment().format("MM/DD/YYYY hh:mm:ss")
	},
	/**
	 * Gets executed just before initialising the webdriver session and test framework. It allows you
	 * to manipulate configurations depending on the capability or spec.
	 * @param {Object} config wdio configuration object
	 * @param {Array.<Object>} capabilities list of capabilities details
	 * @param {Array.<String>} specs List of spec file paths that are to be run
	 */
	 beforeSession: function beforeTest() {
		require("@babel/register")
		// sets test name in sauce labs
		// browser.capabilities.name = specs && specs[0].split("/").pop() || undefined
	},
	/**
	 * Gets executed before test execution begins. At this point you can access to all global
	 * variables like `browser`. It is the perfect place to define custom commands.
	 * @param {Array.<Object>} capabilities list of capabilities details
	 * @param {Array.<String>} specs List of spec file paths that are to be run
	 */
	before: function (capabilities, specs) {
		const chai = require("chai")

		global.expect = chai.expect
		global.assert = chai.assert
		global.should = chai.should()

		global.domId = ""
		global.ids = []
		global.sauce = false
		global.windowSize = ""
	},

	/**
	 * Runs before a WebdriverIO command gets executed.
	 * @param {String} commandName hook command name
	 * @param {Array} args arguments that command would receive
	 */
	// beforeCommand: function (commandName, args) {
	// },
	/**
	 * Runs before a Cucumber feature
	 */
	// beforeFeature: function (uri, feature) {
	// },
	/**
	 * Runs before a Cucumber scenario
	 */
	beforeScenario: function (uri, feature, scenario) {
		ids = []
		issues = []
	},
	/**
	 * Runs before a Cucumber step
	 */
	// beforeStep: function (uri, feature, scenario, step, sourceLocation) {
	// },
	/**
	 * Runs after a Cucumber step
	 */
	// afterStep: function (uri, feature, scenario, step, result, sourceLocation) {
	// },
	/**
	 * Runs after a Cucumber scenario
	 */
	// afterScenario: function (uri, feature, scenario, result, sourceLocation) {
	// },
	/**
	 * Runs after a Cucumber feature
	 */
	// afterFeature: function (uri, feature) {
	// },

	/**
	 * Runs after a WebdriverIO command gets executed
	 * @param {String} commandName hook command name
	 * @param {Array} args arguments that command would receive
	 * @param {Number} result 0 - command success, 1 - command error
	 * @param {Object} error error object if any
	 */
	// afterCommand: function (commandName, args, result, error) {
	// },
	/**
	 * Gets executed after all tests are done. You still have access to all global variables from
	 * the test.
	 * @param {Number} result 0 - test pass, 1 - test fail
	 * @param {Array.<Object>} capabilities list of capabilities details
	 * @param {Array.<String>} specs List of spec file paths that ran
	 */
	// after: function (result, capabilities, specs) {
	// },
	/**
	 * Gets executed right after terminating the webdriver session.
	 * @param {Object} config wdio configuration object
	 * @param {Array.<Object>} capabilities list of capabilities details
	 * @param {Array.<String>} specs List of spec file paths that ran
	 */
	// afterSession: function (config, capabilities, specs) {
	// },
	/**
	 * Gets executed after all workers got shut down and the process is about to exit. An error
	 * thrown in the onComplete hook will result in the test run failing.
	 * @param {Object} exitCode 0 - success, 1 - fail
	 * @param {Object} config wdio configuration object
	 * @param {Array.<Object>} capabilities list of capabilities details
	 * @param {<Object>} results object containing test results
	 */
	onComplete: async function(exitCode, config, capabilities, results) {
		// Generate the report when it all tests are done
		try {
			var endTime = moment().format("MM/DD/YYYY hh:mm:ss")
			const epochTime = Date.now()
			const reportName = "applitools hackathon-" + epochTime + "-index.html"
			console.log("generating report")
			generate({
				// Required
				// This part needs to be the same path where you store the JSON files
				// default = '.tmp/json/'
				jsonDir: ".tmp/json/",
				reportPath: ".tmp/report/",
				pageFooter: "Brought to you by Vincent Barresi",
				customData: {
		        	title: "Vincent Barresi - Applitools Hackathon Report",
		        	data: [
		            	{ label: "Project", value: "applitools applifashion hackathon" },
		            	{ label: "Suite", value: process.env.SUITE },
		            	{ label: "Execution Start Time", value: startTime },
		            	{ label: 'Execution End Time', value: endTime }
		        	]
		        }
				// for more options see https://github.com/wswebcreation/multiple-cucumber-html-reporter#options
			})
		} catch (e) {
			console.log("*** ERROR GENERATING REPORT ***")
			console.log(e)
		}
	},

	/**
	* Gets executed when a refresh happens.
	* @param {String} oldSessionId session ID of the old session
	* @param {String} newSessionId session ID of the new session
	*/
	//onReload: function(oldSessionId, newSessionId) {
	//}
}
