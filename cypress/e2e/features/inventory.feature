Feature: Inventory

  Background:
    Given I am authorized and on the inventory page

  Scenario: Burger menu

    When I click on the burger menu
    Then I should see expanded menu items

  Scenario: Logout

    When I click on the burger menu
    And I click on the menu button
      | menu   |
      | logout |
    Then I should be redirected into corresponding webpage
      | webpage   |
      | login     |

  Scenario: About page

    When I click on the burger menu
    And I click on the menu button
      | menu   |
      | about  |
    Then I should be redirected into corresponding webpage
      | webpage   |
      | saucelabs |

  Scenario: Footer links

    When I click on the footer links
    Then I should open corresponding social networks in new tabs