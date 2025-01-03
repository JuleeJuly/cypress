class AjouterAnimal{
    selectors = {
        name: "#name",
        birthDate: "#birthDate",
        typeAnimal: "select#type",
        btnSubmit: "[type='submit']",
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
    trouveBouton(texte){
        cy.get(this.selectors.btn).contains(texte).click()
    }

}
export default AjouterAnimal;