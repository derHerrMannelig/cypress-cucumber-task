Feature: Login
  Background:
    Given I am on the login page

  Scenario: Valid login

    When I login with valid credentials
    Then I should be redirected into inventory page