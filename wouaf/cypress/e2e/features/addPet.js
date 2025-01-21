import PageCustomer from "../page/PageCustomer.cy";
import AddPet from "../page/AddPet.cy";

    describe ("add a pet",()=>{
        const pageCustomer = new PageCustomer();
        const addPet = new Addpet();
        beforeEach(()=>{
            pageCustomer.visit(2);
        });
        it("ajouter un animal",()=>{
            pageCustomer.verifyTableDescription();
            pageCustomer.findButton("Add New Pet");
            addPet.addName("Redbull");
            //format "2020-01-09"
            addPet.addBirthDate("2009-04-03");
            //choisir type = dog/cat/bird/hamster/lizard/snake
            addPet.chooseType("cat");
            addPet.clickButtonSubmit();
        });
    });