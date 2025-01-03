Feature: Trouver un proprietaire
    Scenario: Rechercher un proprietaire existant
        Given je suis sur la page proprietaire d'animaux
        When je recherche "Davis"
        Then les details du proprietaire s'affichent
        