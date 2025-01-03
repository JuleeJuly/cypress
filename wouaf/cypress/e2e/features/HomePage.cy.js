import Accueil from '../page/Accueil.cy.js';

describe("Tests de la page d'accueil",()=>{
    const pageAccueil = new Accueil();
    beforeEach(()=>{
        cy.visit('https://spring-framework-petclinic-qctjpkmzuq-od.a.run.app/');
    });
    it('visite de la page', () => {
        pageAccueil.visit();
    });
    it('Verifier message acceuil', () => {
        pageAccueil.verifyWelcomeMessage();
    });
    it("Naviguer vers la page proprietaire d'animaux",() => {
        pageAccueil.getFindOwnersBtn().click();
    });
});