class Home{
    selectors = {
        homeMessage: "h2",
        findOwnersButton: "a.nav-link[href='/owners/find']",
        findVetoButton: "a[href='/vets']",
        homeButton: "a[href='/']",
    };

    visit(){
        cy.visit('/');
    }
    getFindOwnersButton(){
        return cy.get(this.selectors.findOwnersButton);
    }
    getFindVetoButton(){
        return cy.get(this.selectors.findVetoButton);
    }
    getFindHomeButton(){
        return cy.get(this.selectors.homeButton);
    }
    verifyWelcomeMessage(message){
        cy.get(this.selectors.homeMessage).should('have.text', message);
    }
}

export default Home;