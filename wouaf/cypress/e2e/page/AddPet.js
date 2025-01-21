class AddPet{
    selectors = {
        name: "#name",
        birthDate: "#birthDate",
        typePet: "select#type",
        buttonSubmit: "[type='submit']",
    }

    addName(namePet){
        cy.get(this.selectors.name).type(namePet);
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
    findButton(text){
        cy.get(this.selectors.button).contains(text).click()
    }
}
export default AddPet;