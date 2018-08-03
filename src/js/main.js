class x {
    constructor(nom, maladie, argent, poche, etat_sante, traitement) {

        this.nom = nom;
        this.maladie = maladie;
        this.argent = argent;
        this.poche = poche;
        this.etat_sante = etat_sante;
        this.traitement = traitement;
    }
    goto() {

    }
    takeCare() {

    }
    paye() {

    }
}
var x = new x("Marcus", "mal indenté", 100, "vide", "malade")
var malade2 = new x("Optimus", "unsave", 200, "vide", "malade")
var malade3 = new x("Sangoku", "404", 80, "vide", "malade")
var malade4 = new x("DarthVader", "azmatique", 110, "vide", "malade")
var malade5 = new x("Semicolon", "syntaxError", 60, "vide", "malade")

var salleAttente = [x, malade2, malade3, malade4, malade5]
var cabinet = []
var pharmacie = []
class doctor {
    constructor(argent) {
        this.argent = argent
       
    }
    patientIn() {
        if (salleAttente.length != 0) {
            salleAttente.splice(0, 1)
            cabinet.push(salleAttente[0])
            console.log("personne dans le cabinet: " + cabinet.length)
            console.log("Il reste " + salleAttente.length + " personnes dans la salle d'attente ")
        } else {

            console.log("Salle d'attente vide")
        }
    }
    diagnostique(cabinet) {
        cabinet.forEach(element => {
            
        });
        switch (x.maladie) {
            case "mal indenté":
                x.traitement = "ctrl+maj+f"
                console.log(x.maladie + " DONC " + x.traitement)
                break;
            case "unsave":
                x.traitement = "saveOnFocusChange"
                console.log(malade2.maladie + " DONC " + malade2.traitement)
                break;
            case "404":
                x.traitement = "CheckLinkRelation"
                    (malade3.maladie + " DONC " + malade3.traitement)

                break;
            case "azmatique":
                x.traitement = "ventoline"
                    (malade4.maladie + " DONC " + malade4.traitement)
                break;
            case "syntaxError":
                x.traitement = "f12+doc"
                    (malade5.maladie + " DONC " + malade5.traitement)
                break;
        }
        
    }
    patientOut() {
        if (cabinet.length != 0) {
            pharmacie.push(cabinet[0])
            cabinet.splice(0, 1)

            let i;
            console.log("Salle d'attente: ")
            for (i = 0; i < salleAttente.length; i++) {
                console.log(salleAttente[i])
            }
            console.log("Dans le cabinet: "+ cabinet.length)
            console.log(cabinet)
            console.log("Dans la pharmacie: " + pharmacie.length)
            console.log(pharmacie)
        } else {
            console.log("Il n'y a plus de patient")
        }
    }
    chat() {

    }
}
var debog = new doctor(0);

debog.patientIn()
debog.diagnostique()
debog.patientOut()