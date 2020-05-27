Feature: Task 1 | Traditional | Sort Bar Buttons Validation
	As a test engineer, I'd like to validate that the sort bar buttons are rendered and not rendered per device type. Sort by Popularity button is rendered on all device types, Grid and List view buttons are rendered only on Laptop. filter button is rendered on Mobile and Tablet only and Filter text is only rendered on Tablet.

    Scenario Outline: <version> | Task 1 | Traditional | Sort Bar Buttons Validation
        Given I open <site>
        Then I expect that the sort bar buttons are rendered and not rendered per device type
		Examples:
			|	site					| version 	|
			|	gridHackathonV1.html#0	| V1		|
			|	gridHackathonV2.html#0	| V2		|
