class PageCustomer {
    selectors = {
        tableDescription: "[aria-describedby='ownerInformation']",
        tablePet: "[aria-describedby='petsAndVisits']",
        button: ".btn-primary",
    }

    visit(idClient){
        cy.visit("/owners/"+idClient)
    }
    verifyTableDescription(){
        cy.get(this.selectors.tableDescription +" tbody").should('have.descendants', 'tr')
        cy.get(this.selectors.tableDescription +" tbody tr").its('length').should('be.eq', 4)
    }
    verifyTablePet(){
        cy.get(this.selectors.tablePet +" tbody").should('have.descendants', 'tr')
        cy.get(this.selectors.tablePet +" tbody tr").its('length').should('be.gt', 0)
    }
    findButton(text){
        cy.get(this.selectors.button).contains(text).click()
    }

}
export default PageCustomer;