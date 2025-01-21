Feature: Find an owner
    Scenario: Search for an existing owner
        Given I am on the pet owner page
        When I search for "Davis"
        Then the owner's details are displayed
        