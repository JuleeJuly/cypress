import Home from '../page/Home.cy.js';

describe("Tests de la page d'accueil",()=>{
    const homePage = new Home();
    beforeEach(()=>{
        cy.visit('https://spring-framework-petclinic-qctjpkmzuq-od.a.run.app/');
    });
    it('visite de la page', () => {
        homePage.visit();
    });
    it('Verifier message acceuil', () => {
        homePage.verifyWelcomeMessage();
    });
    it("Naviguer vers la page proprietaire d'animaux",() => {
        homePage.getFindOwnersButton().click();
    });
});