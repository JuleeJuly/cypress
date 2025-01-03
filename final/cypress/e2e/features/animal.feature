Feature: Ajouter un animal
    Scenario: Ajouter un animal inexistant
        Given je suis sur la page de "2"
        When je clique sur "Add New Pet"
        Then je peux ajouter un animal s'appelant "momo" né le "2020-10-01" de la race "cat"

    Scenario: Ajouter un animal doublons
        Given je suis sur la page de "2"
        When je clique sur "Add New Pet"
        Then je peux ajouter un animal s'appelant "momo" né le "2020-10-01" de la race "cat"