Feature: Task 2 | Traditional | Filter Results Page Validation
	As a test engineer, I'd like to validate that the page is rendered correctly when applying the black filter.

    Scenario Outline: <version> | Task 2 | Traditional | Filter Results Page Validations Validation
        Given I open <site>
        Then I expect that the page is correctly rendered with 2 black shoes after selecting black as a filter
		Examples:
			|	site					| version 	|
			|	gridHackathonV1.html#0	| V1		|
			|	gridHackathonV2.html#0	| V2		|
