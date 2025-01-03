import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import PageClient from "../../e2e/pages/PageClient.js";
import AjouterAnimal from "../../e2e/pages/AjouterAnimal.js";

const pageClient = new PageClient();
const ajouterAnimal = new AjouterAnimal();
 
Given("je suis sur la page de {string}", function (id) {
    pageClient.visit(id);
});
When("je clique sur {string}", function (texte) {
    pageClient.trouveBouton(texte);
});
Then("je peux ajouter un animal s'appelant {string} né le {string} de la race {string}", function (nom,date,race) {
    ajouterAnimal.remplirName(nom);
    ajouterAnimal.remplirBirthDate(date);
    ajouterAnimal.choisirType(race);
    ajouterAnimal.clickBtnSubmit();
    ajouterAnimal.messageErreur("is already in use");
});