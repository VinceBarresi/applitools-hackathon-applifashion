import cucumberJson from "wdio-cucumberjs-json-reporter"

/**
* Log text
*
* @param {string} logTxt - text to log to console and cucumber report
*
* @private
*/
export function _log(logTxt) {
	console.log(logTxt)
	cucumberJson.attach(logTxt, "text/plain")
}
