Feature: Add Nonworker

  Scenario: Create and Validate Nonworker

    Given user login to the application with passcode for nonworker

    When user navigates to Add a Nonworker

    And user completes the When and Why section for nonworker

    And user completes the Personal Details section for nonworker

    And user completes the Assignment section for nonworker

    And user submits the Nonworker record

    Then user validates the created nonworker in Person Management