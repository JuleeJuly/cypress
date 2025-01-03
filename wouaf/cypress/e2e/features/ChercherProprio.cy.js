import ChercherProprietaire from "../page/ChercherProprietaire";

    describe("recherche d'un proprietaire", ()=>{
        const rechProprio = new ChercherProprietaire();
        beforeEach(()=>{
            rechProprio.visit();
        });

        //Termine sur une page proprietaire
        it('Faire une recherche sur un resultat existant 1', () => {
            rechProprio.remplirLastName("Franklin");
            rechProprio.clickFindOwnersBtn();
        });


    });