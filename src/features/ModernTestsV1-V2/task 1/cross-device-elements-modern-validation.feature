Feature: Task 1 | Modern | Cross Device Page Validation
	As a test engineer, I'd like to validate that the page is rendered correctly across various devices and screen sizes

    Scenario Outline: <version> | Task 1 | Modern | Cross Device Page Validations
        Given I open <site>
        Then I expect that the page is correctly rendered across devices with different viewport sizes with applitools
		Examples:
			|	site					| version 	|
			|	gridHackathonV1.html#0	| V1		|
			|	gridHackathonV2.html#0	| V2		|
