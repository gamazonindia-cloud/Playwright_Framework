// Generated from: features\HCM\CoreHR\HireAnEmployee.feature
import { test } from "../../../../baseTest.ts";

test.describe('Hire an Employee - HCM Core HR', () => {

  test('Hire an Employee end-to-end flow', async ({ Given, When, Then, And, page }) => { 
    await Given('user login to the application with passcode', null, { page }); 
    await When('user navigates to "My Client Groups" and opens "Hire an Employee"', null, { page }); 
    await And('user selects what info to manage', null, { page }); 
    await And('user fills in the When and Why section', null, { page }); 
    await And('user fills in the Personal Details section', null, { page }); 
    await And('user fills in the Communication Info section', null, { page }); 
    await And('user fills in the Addresses section', null, { page }); 
    await And('user fills in the Legislative Info section', null, { page }); 
    await And('user fills in the Citizenship Info section', null, { page }); 
    await And('user fills in the Passport Info section', null, { page }); 
    await And('user fills in the Drivers Licenses section', null, { page }); 
    await And('user fills in the Visas and Permits section', null, { page }); 
    await And('user fills in the Family and Emergency Contacts section', null, { page }); 
    await And('user fills in the Employment Details section', null, { page }); 
    await And('user submits the Hire an Employee form', null, { page }); 
    await Then('user navigates to "My Client Groups" and opens "Person Management"', null, { page }); 
    await And('user searches the newly hired employee in Person Management', null, { page }); 
    await And('user opens the employee record', null, { page }); 
    await And('user validates the employee details', null, { page }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\HCM\\CoreHR\\HireAnEmployee.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given user login to the application with passcode","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When user navigates to \"My Client Groups\" and opens \"Hire an Employee\"","stepMatchArguments":[{"group":{"start":18,"value":"\"My Client Groups\"","children":[{"start":19,"value":"My Client Groups","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":47,"value":"\"Hire an Employee\"","children":[{"start":48,"value":"Hire an Employee","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And user selects what info to manage","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And user fills in the When and Why section","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And user fills in the Personal Details section","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And user fills in the Communication Info section","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"And user fills in the Addresses section","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And user fills in the Legislative Info section","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"And user fills in the Citizenship Info section","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And user fills in the Passport Info section","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And user fills in the Drivers Licenses section","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"And user fills in the Visas and Permits section","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"And user fills in the Family and Emergency Contacts section","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"And user fills in the Employment Details section","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"And user submits the Hire an Employee form","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then user navigates to \"My Client Groups\" and opens \"Person Management\"","stepMatchArguments":[{"group":{"start":18,"value":"\"My Client Groups\"","children":[{"start":19,"value":"My Client Groups","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":47,"value":"\"Person Management\"","children":[{"start":48,"value":"Person Management","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"And user searches the newly hired employee in Person Management","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"And user opens the employee record","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"And user validates the employee details","stepMatchArguments":[]}]},
]; // bdd-data-end