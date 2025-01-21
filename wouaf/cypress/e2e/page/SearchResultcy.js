class SearchResult {
    selectors = {
        table: "#ownersTable",
    };

    getTable(){
        return cy.get(this.selectors.table);
    }
    verifyLineTable(nb){
        cy.get(this.selectors.table +" tbody").should('have.descendants', 'tr')
        cy.get('tr').its('length').should('be.gt', nb)
    }
    clickFirstResult(){
        cy.get(this.selectors.table +" a").first().click()
    }
}
export default SearchResult;