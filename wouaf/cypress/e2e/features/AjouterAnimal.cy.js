import PageClient from "../page/PageClient.cy";
import AjouterAnimal from "../page/AjouterAnimal.cy";

    describe ("ajouter un animal",()=>{
        const pageClient = new PageClient();
        const ajouterAnimal = new AjouterAnimal();
        beforeEach(()=>{
            pageClient.visit(2);
        });
        it("ajouter un animal",()=>{
            pageClient.verifyTableDescription();
            pageClient.trouveBouton("Add New Pet");
            ajouterAnimal.remplirName("Redbull");
            //format "2020-01-09"
            ajouterAnimal.remplirBirthDate("2009-04-03");
            //choisir type = dog/cat/bird/hamster/lizard/snake
            ajouterAnimal.choisirType("cat");
            ajouterAnimal.clickBtnSubmit();
        });
    });