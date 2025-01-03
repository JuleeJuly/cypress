import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import Accueil from "../../e2e/pages/Accueil.js";

const pageAccueil = new Accueil();
 
Given("je suis sur le site", function () {
    pageAccueil.visit();
});
When("j accede a la page d accueil", function () {
    pageAccueil.visit();
});
Then("il y a un texte {string}", function (texte) {
    pageAccueil.verifyWelcomeMessage(texte);
});