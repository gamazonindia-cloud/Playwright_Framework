// Generated from: features\HCM\CoreHR\add-nonworker.feature
import { test } from "../../../../baseTest.ts";

test.describe('Add Nonworker', () => {

  test('Create and Validate Nonworker', async ({ Given, When, Then, And }) => { 
    await Given('user login to the application with passcode for nonworker'); 
    await When('user navigates to Add a Nonworker'); 
    await And('user completes the When and Why section for nonworker'); 
    await And('user completes the Personal Details section for nonworker'); 
    await And('user completes the Assignment section for nonworker'); 
    await And('user submits the Nonworker record'); 
    await Then('user validates the created nonworker in Person Management'); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\HCM\\CoreHR\\add-nonworker.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given user login to the application with passcode for nonworker","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When user navigates to Add a Nonworker","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And user completes the When and Why section for nonworker","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And user completes the Personal Details section for nonworker","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And user completes the Assignment section for nonworker","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"And user submits the Nonworker record","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then user validates the created nonworker in Person Management","stepMatchArguments":[]}]},
]; // bdd-data-end