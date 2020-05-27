const { config } = require("./wdio.SHARED.conf")

config.services = ["chromedriver"]

config.capabilities = [{
	maxInstances: 1,
	browserName: "chrome",
}]

exports.config = config
