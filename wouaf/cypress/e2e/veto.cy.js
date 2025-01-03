describe('Snif pardon', () => {
  it('Acces au site', () => {
    cy.visit('/')
    cy.get("h2").should('have.text', 'Welcome')
  })
  it('Recherche utilisateur', () => {
    cy.visit('/')
    cy.get("a.nav-link[href='/owners/find']").click()
    cy.get("#lastName").type("Davis")
    cy.get("button[type='submit']").click()
    cy.get("#ownersTable tbody").should('have.descendants', 'tr')
    cy.get("#ownersTable > tbody > tr > td > a").should('not.be.empty')
    cy.get('tr').its('length').should('be.gt', 2)
    /*cy.get("tr").then((list) => {
       cy.log(list.length) 
    })*/
  })
  it('Ajout animal', () => {
    cy.visit('/')
    cy.get("a.nav-link[href='/owners/find']").click()
    cy.get("#lastName").type("Davis")
    cy.get("button[type='submit']").click()
    cy.get("#ownersTable > tbody > tr > td > a").first().click()
    cy.get(".btn-primary").contains('Add New Pet').click()
    cy.get("#name").type("Chien")
    cy.get("#birthDate").invoke("attr","value","2020-01-09")
    cy.get("select#type").select("dog")
    cy.get("[type='submit']").click()
  })
})