export class Doctor {
    constructor(argent,cabinet,salleAttente){
        this.argent=argent
        this.cabinet=cabinet
        this.salleAttente=salleAttente
    }
    diagnostique(x) {
       
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

    reçoitPaiement(){

    }
    donneTraitement(){

    }
    patientIn() {
        if (this.salleAttente.length != 0) {
            
            this.cabinet.push(this.salleAttente[0])
            
            console.log("personne dans le cabinet: " + this.cabinet.length)
            console.log("Il reste " + this.salleAttente.length + " personnes dans la salle d'attente ")
        } else {

            console.log("Salle d'attente vide")
        }
    }
    
}