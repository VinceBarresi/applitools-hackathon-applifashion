Feature: Task 1 | Traditional | Add To Buttons Validation
	As a test engineer, I'd like to validate that the Add To Cart, Add To Compare and Add To Favorites buttons render by default  on Tablet and Mobile views.

	Scenario Outline: <version> | Task 1 | Traditional | Product Grid | Add To Buttons Validation
		Given I open <site>
		When I scroll to the sort bar
		Then I expect that the add to buttons are only visible on Tablet and Mobile
		Examples:
			|	site					| version 	|
			|	gridHackathonV1.html#0	| V1		|
			|	gridHackathonV2.html#0	| V2		|

