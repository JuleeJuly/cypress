Feature: Add a pet
    Scenario: Add a non-existent pet
        Given I am on the page of "2"
        When I click on "Add New Pet"
        Then I can add a pet named "momo" born on "2020-10-01" of the breed "cat"

    Scenario: Add an already existing pet
        Given I am on the page of "2"
        When I click on "Add New Pet"
        Then I can add a pet named "momo" born on "2020-10-01" of the breed "cat"