import FindCustomer from "../page/FindCustomer.cy";
import SearchResult from "../page/SearchResult.cy";

    describe("recherche d'un proprietaire", ()=>{
        const findCustomer = new FindCustomer();
        const searchResult = new SearchResult();
        beforeEach(()=>{
            findCustomer.visit();
        });
        //Termine sur une page avec plusieurs résultats
        it('Faire une recherche sur un resultat existant 2', () => {
            findCustomer.addLastName("Davis");
            findCustomer.clickFindOwnersButton();
            searchResult.verifyLineTable(2);
            searchResult.clickFirstResult();
        });
    });