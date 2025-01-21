import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import PageCustomer from "../../e2e/pages/PageCustomer.js";
import AddPet from "../../e2e/pages/AddPet.js";

const pageCustomer = new PageCustomer();
const addPet = new AddPet();
 
Given("I am on the page of {string}", function (id) {
    pageCustomer.visit(id);
});
When("I click on {string}", function (text) {
    pageCustomer.findButton(text);
});
Then("I can add a pet named {string} born on {string} of the breed {string}", function (name,date,race) {
    addPet.addName(name);
    addPet.addBirthDate(date);
    addPet.chooseType(race);
    addPet.clickButtonSubmit();
    addPet.messageError("is already in use");
});