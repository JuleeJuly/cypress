class PageClient {
    selectors = {
        tableDescription: "[aria-describedby='ownerInformation']",
        tableAnimaux: "[aria-describedby='petsAndVisits']",
        btn: ".btn-primary",
       /* btnEditProprio: "a[contains(text(), 'Edit owner')]",
        btnAddAnimal: "a[contains(text(), 'Add New Pet')]",*/
    }

    visit(idClient){
        cy.visit("/owners/"+idClient)
    }
    verifyTableDescription(){
        cy.get(this.selectors.tableDescription +" tbody").should('have.descendants', 'tr')
        cy.get(this.selectors.tableDescription +" tbody tr").its('length').should('be.eq', 4)
    }
    verifyTableAnimaux(){
        cy.get(this.selectors.tableAnimaux +" tbody").should('have.descendants', 'tr')
        cy.get(this.selectors.tableAnimaux +" tbody tr").its('length').should('be.gt', 0)
    }
    /*clickBtnEditProprio(){
        cy.get(this.selectors.btnEditProprio).click();
    }
    clickBtnAddAnimaux(){
        cy.get(this.selectors.btnAddAnimal).click();
    }*/
    trouveBouton(texte){
        cy.get(this.selectors.btn).contains(texte).click()
    }

}
export default PageClient;