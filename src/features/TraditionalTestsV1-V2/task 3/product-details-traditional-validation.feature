Feature: Task 3 | Traditional | Product Details Page Validation
	As a test engineer, I'd like to validate that the product details page is rendered correctly

    Scenario Outline: <version> | Task 3 | Traditional | Product Details Page Validation
        Given I open <site>
        Then I expect that the product details page is correctly rendered correctly
		Examples:
			|	site					| version 	|
			|	gridHackathonV1.html#0	| V1		|
			|	gridHackathonV2.html#0	| V2		|
