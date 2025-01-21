class AddPet{
    selectors = {
        name: "#name",
        birthDate: "#birthDate",
        typePet: "select#type",
        buttonSubmit: "[type='submit']",
        errorMessage: "span",
    }

    addName(nameAnimal){
        cy.get(this.selectors.name).type(nameAnimal);
    }
    addBirthDate(date){
        cy.get(this.selectors.birthDate).invoke("attr","value",date);
    }
    chooseType(type){
        cy.get(this.selectors.typePet).select(type);
    }
    clickButtonSubmit(){
        cy.get(this.selectors.buttonSubmit).click();
    }
    messageError(message){
        cy.get(this.selectors.errorMessage).should('have.text', message);
    }

}
export default AddPet;