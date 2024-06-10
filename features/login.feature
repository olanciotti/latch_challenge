Feature: The James Rider Android App Log in and Log out

  Scenario: As a user, I can log in with valid credentials
    Given I am on the Home page and click Get Started button
    When I select "Afghanistan" as country and "701111112" as phone number
    And I enter the six digits code and click Continue button
    Then I see the title Welcome "James"!

  Scenario: As a user, I can log out
    Given I select the option "SIGN OUT" from the main menu
    Then I see the title "Enter your phone number"