Feature: Task 1 | Traditional | Tools Buttons Validation
	As a test engineer, I'd like to validate that the Account, Wishlist and Cart buttons are visible on Laptop and Wishlist is hidden on Tablet and Mobile.

    Scenario Outline: <version> | Task 1 | Traditional | Tools Buttons Validation
        Given I open <site>
        Then I expect that Account, Wishlist and Cart buttons are visible on Laptop and Wishlist button is hidden on Tablet and Mobile
		Examples:
			|	site					| version 	|
			|	gridHackathonV1.html#0	| V1		|
			|	gridHackathonV2.html#0	| V2		|
