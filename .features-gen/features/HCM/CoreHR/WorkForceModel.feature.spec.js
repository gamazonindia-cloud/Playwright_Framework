// Generated from: features\HCM\CoreHR\WorkForceModel.feature
import { test } from "../../../../baseTest.ts";

test.describe('Workforce Model', () => {

  test('Create Workforce Model for an Employee', { tag: ['@HCM', '@CoreHR', '@WorkForceModel'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('User logs into Oracle application', null, { page }); 
    await When('User navigates to Person Management', null, { page }); 
    await And('User searches and opens employee record', null, { page }); 
    await And('User opens Workforce Modeling task', null, { page }); 
    await And('User creates a new workforce model', null, { page }); 
    await And('User enters workforce model details', null, { page }); 
    await And('User uploads supporting attachment', null, { page }); 
    await And('User reviews and submits the workforce model', null, { page }); 
    await Then('Workforce model should be created successfully', null, { page }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\HCM\\CoreHR\\WorkForceModel.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":["@HCM","@CoreHR","@WorkForceModel"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User logs into Oracle application","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When User navigates to Person Management","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And User searches and opens employee record","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And User opens Workforce Modeling task","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"And User creates a new workforce model","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"And User enters workforce model details","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"And User uploads supporting attachment","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"And User reviews and submits the workforce model","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then Workforce model should be created successfully","stepMatchArguments":[]}]},
]; // bdd-data-end