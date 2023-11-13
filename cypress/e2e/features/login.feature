Feature: Login

  Background:
    Given I am on the login page

  Scenario: Valid login

    When I login with credentials
      | credentials |
      | valid       |
    Then I should be redirected into inventory page

  Scenario: Login w/o credentials

    When I login with credentials
      | credentials |
      | none        |
    Then I should see error message
      | error       |
      | required    |

  Scenario: Login w/o password

    When I login with credentials
      | credentials |
      | only login  |
    Then I should see error message
      | error       |
      | password    |

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

  Scenario: Problem login

    When I login with credentials
      | credentials |
      | problem     |
    Then I should be redirected into inventory page
    And I should take a screenshot

  Scenario: Performance glitch login

    When I login with credentials
      | credentials |
      | glitch      |
    Then I should be redirected into inventory page
    And I should record time taken to login

  Scenario: Secure area

    When I paste inventory's url into address bar and hit enter on keyboard
    Then I should see error message
      | error       |
      | forbidden   |