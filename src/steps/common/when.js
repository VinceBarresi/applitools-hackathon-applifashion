import Filters from "../../component-objects/filters"
import Footer from "../../component-objects/footer"
import SortBar from "../../component-objects/sort-bar"

import { getDeviceType } from "../../support/utils"

import {
	scrollDynamicElementIntoView,
	scrollStaticElementIntoView
} from "../../support/interact"

const { When } = require("cucumber")

When(/^I scroll to the (brand|color|price|type) filter$/, { timeout: 40000 }, (filterHeader) => {
	if (getDeviceType() === "Laptop") {
		scrollDynamicElementIntoView(Filters.filterHeaderTxt, `scroll to the ${filterHeader} filter`, filterHeader)
	}
})

When(/^I scroll to the footer$/, { timeout: 40000 }, () => {
	scrollStaticElementIntoView(Footer.footerContainer, "scroll to the footer")
})

When(/^I scroll to the sort bar$/, { timeout: 40000 }, () => {
	scrollStaticElementIntoView(SortBar.sortBarContainer, "scroll to the sort bar")
})
