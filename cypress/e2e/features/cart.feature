Feature: Cart

  Background:
    Given I am authorized and on the inventory page
    And I clicked on the random Add to cart button
    And I clicked on the Cart button

  Scenario: Continue shopping

    When I click on the Continue Shopping button
    Then I should be redirected into inventory page
    And I should see initial cart item's status
      | status  |
      | in cart |

  Scenario: Remove from cart

    When I click on the Remove button
    And I click on the All Items button in burger menu
    Then I should be redirected into inventory page
    And I should see initial cart item's status
      | status  |
      | empty   |
