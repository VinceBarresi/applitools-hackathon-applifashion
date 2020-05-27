var Filters = {

	// filter elements
	blackFilterCheckBox: "//div[@id=\"sidebar_filters\"]//input[@id=\"colors__Black\"]",
	filterAside: "//aside[@id=\"ASIDE__collg__67\"]",
	filterBtn: "//button[@id=\"filterBtn\"]",
	filterContainer: "//div[@id=\"sidebar_filters\"]",
	filterHeaderTxt: (filterHeader) => { return (`//div[@id="sidebar_filters"]//a[contains(text(),"${filterHeader}")]`) },
	filterTxt: (filterName) => { return (`//div[@id="sidebar_filters"]//label[contains(text(),"${filterName}")]`) },
	resetBtn: "//button[@id=\"resetBtn\"]",

}

export default Filters
