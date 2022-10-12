Feature: Verifying Eyecare products are being added to the cart

  Scenario: Verify Eyecare products are under skincare section

    Given I open the Estee Lauder page
    When I hover over skincare
    Then I can see Eyecare under By Category section

  Scenario Outline: Verify one of the Eyecare product is visible on the Eyecare page
    
    Given I open the Estee Lauder page
    When I hover over skincare
    Then I click on Eyecare
    Then I can see <product> product on the page

  Examples:
      | product | 
      | REVITALIZING |

  
  Scenario Outline: Add an eyecare product to cart and verify the cart pop up details

    Given I open the Estee Lauder page
    When I hover over skincare
    And I click on Eyecare
    And I click on eyecare <product> product
    And I click on add to cart
    Then I verify the cart pop has the same product

    Examples:
      | product | 
      | REVITALIZING |

  
  Scenario Outline: Navigate to the cart page and verify the details
    Given I click on cart icon
    Then I can see the <product> product
    Then I can see the quantity as <item count>

  Examples:
    | product               |  item count |
    | Revitalizing Supreme+ |  1          |


  

   
