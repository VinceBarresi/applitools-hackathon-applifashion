Feature: Task 1 | Traditional | Header Menu Links Validation
	As a test engineer, I'd like to validate that the header nav and its chid=kd menu elements is rendered on Laptop and is hidden on Tablet and Mobile.

    Scenario Outline: <version> | Task 1 | Traditional | Header Validation
        Given I open <site>
        Then I expect that the Header Nav is not rendered on Mobile or Tablet and is rendered on Desktop with its child menu elements
        	| HOME 		|
        	| MEN 		|
        	| WOMEN 	|
        	| RUNNING 	|
        	| TRAINING 	|
		Examples:
			|	site					| version 	|
			|	gridHackathonV1.html#0	| V1		|
			|	gridHackathonV2.html#0	| V2		|
