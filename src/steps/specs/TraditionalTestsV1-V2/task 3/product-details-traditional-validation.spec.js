import Footer from "../../../../component-objects/footer"
import ProductDetails from "../../../../page-objects/product-details"
import ProductGrid from "../../../../component-objects/product-grid"
import SubHeader from "../../../../component-objects/sub-header"

import {
	clickStaticElement,
	scrollStaticElementIntoView,
	validateIfStaticElementIsDisplayed
} from "../../../../support/interact"

const { Then } = require("cucumber")

Then(/^I expect that the product details page is correctly rendered correctly$/, { timeout: 800000 }, async () => {

	await browser.pause(1000)
	await clickStaticElement(ProductGrid.firstBlackShoeImg, "click first black shoe image")

	// tools buttons validation
	await validateIfStaticElementIsDisplayed(SubHeader.accountLnk,
		"account link is displayed",
		`account link with selector ${SubHeader.accountLnk} is not displayed`
	)

	await validateIfStaticElementIsDisplayed(SubHeader.shoppingCartLnk,
		"shopping cart link is displayed",
		`shopping cart link with selector ${SubHeader.shoppingCartLnk} is not displayed`
	)

	await validateIfStaticElementIsDisplayed(SubHeader.wishlistLnk,
		"wishlist link is displayed",
		`wishlist link with selector ${SubHeader.wishlistLnk} is not displayed`
	)

	// add to cart button validation
	await validateIfStaticElementIsDisplayed(ProductDetails.addToCartBtn,
		"add to cart button is displayed",
		`add to cart button with selector ${ProductDetails.addToCartBtn} is not displayed`
	)

	// header element validation
	await validateIfStaticElementIsDisplayed(ProductDetails.shoeNameHeaderTxt,
		"shoe name header text is displayed",
		`shoe name header text with selector ${ProductDetails.shoeNameHeaderTxt} is not displayed`
	)

	// product image validation
	await validateIfStaticElementIsDisplayed(ProductDetails.shoeImg,
		"shoe image is displayed",
		`shoe image with selector ${ProductDetails.shoeImg} is not displayed`
	)

	await scrollStaticElementIntoView(Footer.footerContainer, "scroll to the footer")

	// ratings, review and sku elements
	await validateIfStaticElementIsDisplayed(ProductDetails.ratingsStarsAndTxt,
		"ratings is displayed",
		`ratings with selector ${ProductDetails.ratingsStarsAndTxt} is not displayed`
	)

	await validateIfStaticElementIsDisplayed(ProductDetails.reviewTxt,
		"ratings review text is displayed",
		`ratings review text with selector ${ProductDetails.reviewTxt} is not displayed`
	)

	// this is being found in V2 when it shouldn't be as its not rendered on the page so this is giving a false pass
	await validateIfStaticElementIsDisplayed(ProductDetails.skuTxt,
		"sku text is displayed",
		`sku text with selector ${ProductDetails.skuTxt} is not displayed`
	)

	// price elements validation
	await validateIfStaticElementIsDisplayed(ProductDetails.discountPriceTxt,
		"discount price text is displayed",
		`discount price text with selector ${ProductDetails.discountPriceTxt} is not displayed`
	)

	await validateIfStaticElementIsDisplayed(ProductDetails.newPriceTxt,
		"new price text is displayed",
		`new price text with selector ${ProductDetails.newPriceTxt} is not displayed`
	)

	await validateIfStaticElementIsDisplayed(ProductDetails.oldPriceTxt,
		"old price text is displayed",
		`old price text with selector ${ProductDetails.oldPriceTxt} is not displayed`
	)

	// size and quantity elements validation
	await validateIfStaticElementIsDisplayed(ProductDetails.sizeSelector,
		"size selector is displayed",
		`size selector with selector ${ProductDetails.sizeSelector} is not displayed`
	)

	await validateIfStaticElementIsDisplayed(ProductDetails.sizeTxt,
		"size text is displayed",
		`size text with selector ${ProductDetails.sizeTxt} is not displayed`
	)

	await validateIfStaticElementIsDisplayed(ProductDetails.quantitySelector,
		"quantity selector is displayed",
		`quantity selector with selector ${ProductDetails.quantitySelector} is not displayed`
	)

	await validateIfStaticElementIsDisplayed(ProductDetails.quantityTxt,
		"quantity text is displayed",
		`quantity text with selector ${ProductDetails.quantityTxt} is not displayed`
	)

	expect(issues.length, "Product Details Validation Test failed. Here are the issues: \n" + issues.join("\n")).to.be.equal(0)

})
