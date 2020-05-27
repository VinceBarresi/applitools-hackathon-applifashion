# Applitools Applifashion Hackathon

Project completed using Webdriver IO V5 with Cucumber

## Install

Run `npm i` from root directory to install required dependencies.

## Running Tests

### Modern

Run `npm run localFullModern` to execute the modern tests on chrome which will kick off Visual Grid on backend and test on 7 browsers / devices in required viewport sizes.

### Traditional

Run `npm run sauceFullTraditional` to execute the traditional tests on 7 browser / devices in required veiwport sizes.


> Each time you run tests, the traditional reports are overriden so new results can be appended to empty files. The repo contains reports from my test run with results already appended so you can review the reports before running tests for yourself if you choose to.

## Reporting

### Modern

Results are obviously coming into the applitools dashboard. Since the submission link only allows for one url to be pasted, I'm linking the results from my test runs here:

[Task 1](https://eyes.applitools.com/app/test-results/00000251811178538632?accountId=owQgvglj8Eqq4ry_mJ8vLQ~~&display=details&fb=eyJ0ZXh0U2VhcmNoIjoiVUZHIn0%3D&top=00000251810063431929%2830%29)

[Task 2](https://eyes.applitools.com/app/test-results/00000251810063473917?accountId=owQgvglj8Eqq4ry_mJ8vLQ~~&display=details&fb=eyJ0ZXh0U2VhcmNoIjoiVUZHIn0%3D&top=00000251810063431929%2830%29)

[Task 3](https://eyes.applitools.com/app/test-results/00000251810063431929?accountId=owQgvglj8Eqq4ry_mJ8vLQ~~&display=details&fb=eyJ0ZXh0U2VhcmNoIjoiVUZHIn0%3D&top=00000251810063431929%2830%29)

### Traditional

Results are appended to Traditional-V1-TestResults.txt and Traditional-V2-TestResults.txt according with respect to the version of the application under test. Since we are running tests in parallel using cucumber js. Task 2 or 3 may start executing before Task 1 is complete so please remember this when reviewing the report. 

Since using hard asserts on every element doesnt make much sesne if you'd like the test to completely run and return all issues, I do hard assertions at the end of the test and print an array containing all issues found. By doing so, Im interacting with multiple elements so I've included all interacted with element DOM id's in the report instead of just one element id. I hope this is acceptable.


> The framework also includes support for [Multiple Cucumber HTML Reporter](https://github.com/wswebcreation/multiple-cucumber-html-reporter) where reports are generated after each test run in `.tmp/report` but this was included to make debugging and reporting easier for me. The repo contains the HTML report from my test run with results, logs and screenshots attached.

### Additional Comments

Since I'm using Cucumber and I've written the specs to run on both V1 and V2, I can't have 2 matching and copied step definitions as required in the instructions. If I copy my step definitions, Cucumber will skip those copied steps during execution. I'm also using Scenario Outlines to run the same steps on both versions of the application which makes the most sense from an engineering perspective.

For each version, I could have reworded the feature files and step definitions and pasted the same code within them but to be honest, that doesn't make much sense to me. Instead I've just included both V1 and V2 in the folder names containing my features and step definitions. I hope you understand my decision to not submit the copied code the way you've asked because of these details.
