Feature: Workforce Model

  @HCM @CoreHR @WorkForceModel

  Scenario: Create Workforce Model for an Employee

    Given User logs into Oracle application

    When User navigates to Person Management

    And User searches and opens employee record

    And User opens Workforce Modeling task

    And User creates a new workforce model

    And User enters workforce model details

    And User uploads supporting attachment

    And User reviews and submits the workforce model

    Then Workforce model should be created successfully