class AjouterAnimal{
    selectors = {
        name: "#name",
        birthDate: "#birthDate",
        typeAnimal: "select#type",
        btnSubmit: "[type='submit']",
        erreurMessage: "span",
    }

    remplirName(nomDuChien){
        cy.get(this.selectors.name).type(nomDuChien);
    }
    remplirBirthDate(date){
        cy.get(this.selectors.birthDate).invoke("attr","value",date);
    }
    choisirType(type){
        cy.get(this.selectors.typeAnimal).select(type);
    }
    clickBtnSubmit(){
        cy.get(this.selectors.btnSubmit).click();
    }
    messageErreur(message){
        cy.get(this.selectors.erreurMessage).should('have.text', message);
    }

}
export default AjouterAnimal;