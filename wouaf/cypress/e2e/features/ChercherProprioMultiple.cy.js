import ChercherProprietaire from "../page/ChercherProprietaire.cy";
import ResultatRecherche from "../page/ResultatRecherche.cy";

    describe("recherche d'un proprietaire", ()=>{
        const rechProprio = new ChercherProprietaire();
        const resultRech = new ResultatRecherche();
        beforeEach(()=>{
            rechProprio.visit();
        });

        //Termine sur une page avec plusieurs résultats
        it('Faire une recherche sur un resultat existant 2', () => {
            rechProprio.remplirLastName("Davis");
            rechProprio.clickFindOwnersBtn();
            resultRech.verifyLigneTable(2);
            resultRech.clickPremierResultat();
        });


    });