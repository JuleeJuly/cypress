import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import Home from "../../e2e/pages/Home.js";

const homePage = new Home();
 
Given("I am on the website", function () {
    homePage.visit();
});
When("I access the homepage", function () {
    homePage.visit();
});
Then("there is a text {string}", function (text) {
    homePage.verifyWelcomeMessage(text);
});