Feature: Task 1 | Traditional | Search Bar Validation
	As a test engineer, I'd like to validate that the search bar is visible by default on Laptop and Tablet devices and is hidden on Mobile.

    Scenario Outline: <version> | Task 1 | Traditional | Search Bar Validation
        Given I open <site>
        Then I expect that search bar and search button is hidden only on Mobile
		Examples:
			|	site					| version 	|
			|	gridHackathonV1.html#0	| V1		|
			|	gridHackathonV2.html#0	| V2		|
