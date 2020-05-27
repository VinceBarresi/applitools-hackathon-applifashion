Feature: Task 1 | Traditional | Footer Contact, Keep in Touch and Quick Links Validation
	As a test engineer, I'd like to validate that the Contact, Keep in Touch and Quick Link footer elements are rendered and visible by default on Laptop and Tablet and are hidden on Mobile.

	Scenario Outline: <version> | Task 1 | Traditional | Footer | Contacts Elements Validation
        Given I open <site>
        When I scroll to the footer
        Then I expect that the Contacts header and its elements are visible on Tablet and Laptop and are collapsed on Mobile
		Examples:
			|	site					| version 	|
			|	gridHackathonV1.html#0	| V1		|
			|	gridHackathonV2.html#0	| V2		|

	Scenario Outline: <version> | Task 1 | Traditional | Footer | Keep In Touch Elements Validation
        Given I open <site>
        When I scroll to the footer
        Then I expect that the Keep in touch header and its elements are visible on Tablet and Laptop and are collapsed on Mobile
		Examples:
			|	site					| version 	|
			|	gridHackathonV1.html#0	| V1		|
			|	gridHackathonV2.html#0	| V2		|

	Scenario Outline: <version> | Task 1 | Traditional | Footer | Quick Links Elements Validation
        Given I open <site>
        When I scroll to the footer
        Then I expect that the Quick Links header and its elements are visible on Tablet and Laptop and are collapsed on Mobile
        	| About us		|
        	| Faq			|
        	| Help			|
        	| My account	|
        	| Blog			|
        	| Contacts		|
		Examples:
			|	site					| version 	|
			|	gridHackathonV1.html#0	| V1		|
			|	gridHackathonV2.html#0	| V2		|
