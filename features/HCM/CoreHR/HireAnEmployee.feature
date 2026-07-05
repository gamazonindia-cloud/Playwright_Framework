Feature: Hire an Employee - HCM Core HR

  Scenario: Hire an Employee end-to-end flow
    Given user login to the application with passcode
    When user navigates to "My Client Groups" and opens "Hire an Employee"
    And user selects what info to manage
    And user fills in the When and Why section
    And user fills in the Personal Details section
    And user fills in the Communication Info section
    And user fills in the Addresses section
    And user fills in the Legislative Info section
    And user fills in the Citizenship Info section
    And user fills in the Passport Info section
    And user fills in the Drivers Licenses section
    And user fills in the Visas and Permits section
    And user fills in the Family and Emergency Contacts section
    And user fills in the Employment Details section
    And user submits the Hire an Employee form
    Then user navigates to "My Client Groups" and opens "Person Management"
    And user searches the newly hired employee in Person Management
    And user opens the employee record
    And user validates the employee details