Feature: Task 1 | Traditional | Filters Validation
	As a test engineer, I'd like to validate that all filter elements are rendered and visible by default on Laptop and hidden on Tablet and Mobile views.

	Scenario Outline: <version> | Task 1 | Traditional | Filters | Brand Elements Validation
		Given I open <site>
		When I scroll to the brand filter
		Then I expect that the brand filter and its filter elements are visible on Laptop and hidden on Tablet and Mobile
			| Adibas 			|
			| Mykey 			|
			| Bans 				|
			| Over Armour 		|
			| ImBalance 		|
		Examples:
			|	site					| version 	|
			|	gridHackathonV1.html#0	| V1		|
			|	gridHackathonV2.html#0	| V2		|

	Scenario Outline: <version> | Task 1 | Traditional | Filters | Color Elements Validation
		Given I open <site>
		When I scroll to the color filter
		Then I expect that the color filter and its filter elements are visible on Laptop and hidden on Tablet and Mobile
			| Black		|
			| White 	|
			| Blue		|
			| Green 	|
			| Yellow	|
		Examples:
			|	site					| version 	|
			|	gridHackathonV1.html#0	| V1		|
			|	gridHackathonV2.html#0	| V2		|

	Scenario Outline: <version> | Task 1 | Traditional | Filters | Price Elements Validation
		Given I open <site>
		When I scroll to the price filter
		Then I expect that the price filter and its filter elements are visible on Laptop and hidden on Tablet and Mobile
			| $0 - $50 		|
			| $50 - $100	|
			| $100 - $150 	|
			| $150 - $500	|
		Examples:
			|	site					| version 	|
			|	gridHackathonV1.html#0	| V1		|
			|	gridHackathonV2.html#0	| V2		|

	Scenario Outline: <version> | Task 1 | Traditional | Filters | Price Elements Validation
		Given I open <site>
		When I scroll to the type filter
		Then I expect that the type filter and its filter elements are visible on Laptop and hidden on Tablet and Mobile
			| Soccer 		|
			| Basketball	|
			| Running 		|
			| Training		|
		Examples:
			|	site					| version 	|
			|	gridHackathonV1.html#0	| V1		|
			|	gridHackathonV2.html#0	| V2		|
