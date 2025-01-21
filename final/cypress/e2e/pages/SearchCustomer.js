class SearchCustomer{
    selectors ={
        lastName : "#lastName",
        findOwnersButton: "button[type='submit']",
        addOwnersButton: "a[href='/owners/new']",
    };

    visit(){
        cy.visit('/owners/find');
    }
    addLastName(lastName){
        cy.get(this.selectors.lastName).type(lastName);
    }
    clickFindOwnersButton(){
        cy.get(this.selectors.findOwnersButton).click();
    }
    getAddOwnersButton(){
        return cy.get(this.selectors.addOwnersButton);
    }

}
export default SearchCustomer;