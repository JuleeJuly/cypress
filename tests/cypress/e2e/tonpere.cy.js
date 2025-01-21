import data from "../fixtures/example.json";

describe('template spec', () => {
  it('passes', () => {
    //cy.visit('https://www.doloandcie.ovh/compta_skulls')
    cy.visit('/')
    cy.fixture('example.json').as('data')
    //const user = this.data[1]
    cy.get('#id_id').type(data.login)
    cy.get('#id_password').type(data.password)
    cy.get('.bouton').click()
  })
})