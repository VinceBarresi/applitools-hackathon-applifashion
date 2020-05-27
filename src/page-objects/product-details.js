var ProductDetails = {

	// add to cart button element
	addToCartBtn: "//a[@id=\"A__btn__114\"]",

	// header element
	shoeNameHeaderTxt: "//h1[@id=\"shoe_name\" and (text()=\"Appli Air x Night\")]",

	// product image element
	shoeImg: "//div[@id=\"shoe_img\"]",

	// price elements
	newPriceTxt: "//span[@id=\"new_price\" and (text()=\"$33.00\")]",
	oldPriceTxt: "//span[@id=\"old_price\" and (text()=\"$48.00\")]",
	discountPriceTxt: "//span[@id=\"discount\" and (text()=\"-30% discount\")]",

	// ratings, review and sku elements
	ratingsStarsAndTxt: "//span[@id=\"SPAN__rating__76\"]",
	reviewTxt: "//p[@id=\"P____83\"]",
	skuTxt: "//small[@id=\"SMALL____84\" and (text()=\"SKU: MTKRY-001\")]",

	// size and quantity elements
	sizeSelector: "//div[@id=\"DIV__colxlcollg__91\"]//span[text()=\"Small (S)\"]",
	sizeTxt: "//strong[@id=\"STRONG____90\" and (text()=\"Size\")]",
	quantitySelector: "//div[@id=\"DIV__colxlcollg__101\"]//input[@value=\"1\"]",
	quantityTxt: "//strong[@id=\"STRONG____100\" and (text()=\"Quantity\")]",

}

export default ProductDetails
