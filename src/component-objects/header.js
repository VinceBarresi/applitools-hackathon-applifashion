var Header = {

	// header nav elements
	headerNav: "//nav[@id=\"NAV__colxlcollg__10\"]",
	lnkLabelTxt: (linkText) => { return (`//div[@id="header_menu"]//parent::div//ul//li //a[text()="${linkText}"]`) }

}

export default Header
