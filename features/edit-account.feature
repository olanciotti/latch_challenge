Feature: The James Rider Android App Edit Account section 

  Scenario: As a user, I can log in with valid credentials
    Given I am on the Home page and click Get Started button
    When I select "Afghanistan" as country and "701111112" as phone number
    And I enter the six digits code and click Continue button
    And I see the title Welcome "James"!
    And I click to see my profile
    And I see the text "Profile"
    And I fill "John" as first name and "Smithh" as last name
    Then I validate that my profile name is "John" "Smithh"
