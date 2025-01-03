class Accueil{
    selectors = {
        accueilMessage: "h2",
        findOwnersBtn: "a.nav-link[href='/owners/find']",
        findVetoBtn: "a[href='/vets']",
        accueilBtn: "a[href='/']",
    };

    visit(){
        cy.visit('/');
    }
    getFindOwnersBtn(){
        return cy.get(this.selectors.findOwnersBtn);
    }
    getFindVetoBtn(){
        return cy.get(this.selectors.findVetoBtn);
    }
    getFindAccueilBtn(){
        return cy.get(this.selectors.accueilBtn);
    }
    verifyWelcomeMessage(message){
        cy.get(this.selectors.accueilMessage).should('have.text', message);
    }
}

export default Accueil;