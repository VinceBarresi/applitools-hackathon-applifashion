var Footer = {

	// footer elements
	footerContainer: "//footer[contains(@id,\"FOOTER\")]//div[contains(@class,\"container\")]",
	footerHeaderTxt: (header) => { return (`//h3[contains(@id,"H3") and (text()="${header}")]`) },

	// contact elements
	contactEmailLnkLabelTxt: "//div[@id=\"collapse_3\"]//a[contains(text(),\"srd@applitools.com\")]",
	contactAddressTxt: "//div[@id=\"collapse_3\"]//i[@class=\"ti-home\"]//parent::li",

	// keep in touch elements
	emailTextBox: "//input[@placeholder=\"Your email\"]",
	emailTxtBoxSubmitBtn: "//i[contains(@class,\"double-right\")]//parent::button",

	// quick links elements
	quickLnkLabelTxt: (label) => { return (`//div[contains(@id,"DIV__collgcolmd__42")]//a[contains(text(),"${label}")]`) },

}

export default Footer
