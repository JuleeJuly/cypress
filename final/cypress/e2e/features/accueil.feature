Feature: Acceder à la page d'accueil
    Scenario: Verifier le bon affichage la page d'accueil
        Given je suis sur le site
        When j accede à la page d accueil
        Then il y a un texte "Welcome"