Feature: Access the homepage
    Scenario: Verify the correct display of the homepage
        Given I am on the website
        When I access the homepage
        Then there is a text "Welcome"