class ChercherProprietaire{
    selectors ={
        lastName : "#lastName",
        findOwnersBtn: "button[type='submit']",
        addOwnersBtn: "a[href='/owners/new']",
    };

    visit(){
        cy.visit('/owners/find');
    }
    remplirLastName(lastName){
        cy.get(this.selectors.lastName).type(lastName);
    }
    clickFindOwnersBtn(){
        cy.get(this.selectors.findOwnersBtn).click();
    }
    getAddOwnersBtn(){
        return cy.get(this.selectors.addOwnersBtn);
    }

}
export default ChercherProprietaire;