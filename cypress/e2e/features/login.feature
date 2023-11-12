Feature: Login

  Background:
    Given I am on the login page

  Scenario: Valid login

    When I login with credentials
      | credentials |
      | valid       |
    Then I should be redirected into inventory page

  Scenario: Locked login

    When I login with credentials
      | credentials |
      | locked      |
    Then I should see error message
      | error       |
      | locked      |

  Scenario: Random login

    When I login with credentials
      | credentials |
      | random      |
    Then I should see error message
      | error       |
      | nonexistent |