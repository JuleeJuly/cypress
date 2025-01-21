import FindCustomer from "../page/FindCustomer";

    describe("Find a customer", ()=>{
        const findCustomer = new FindCustomer();
        beforeEach(()=>{
            findCustomer.visit();
        });
        //Termine sur une page proprietaire
        it('Faire une recherche sur un resultat existant 1', () => {
            findCustomer.addLastName("Franklin");
            findCustomer.clickFindOwnersButton();
        });
    });