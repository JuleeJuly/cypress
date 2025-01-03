class ResultatRecherche {
    selectors = {
        table: "#ownersTable",
    };

    getTable(){
        return cy.get(this.selectors.table);
    }
    verifyLigneTable(nb){
        cy.get(this.selectors.table +" tbody").should('have.descendants', 'tr')
        cy.get('tr').its('length').should('be.gt', nb)
    }
    clickPremierResultat(){
        cy.get(this.selectors.table +" a").first().click()
    }
}
export default ResultatRecherche;