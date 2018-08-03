import {Malade} from "./class/malade.js";
import {Doctor} from "./class/doctor.js";
import {Pharmacie} from "./class/pharmarcie.js"
import {Chat} from "./class/chat.js"
// Création malade
var malade1 = new Malade("Marcus", "mal indenté", 100, "vide", "malade");
var malade2 = new Malade("Optimus", "unsave", 200, "vide", "malade");
var malade3 = new Malade("Sangoku", "404", 80, "vide", "malade");
var malade4 = new Malade("DarthVader", "azmatique", 110, "vide", "malade");
var malade5 = new Malade("Semicolon", "syntaxError", 60, "vide", "malade");

// Création docteur et salle attente + push malades
var doctor = new Doctor(0,[],[]);
doctor.salleAttente=[malade1,malade2,malade3,malade4,malade5]
console.log(doctor.salleAttente)

// Création chat et push cabinet
var minou = new Chat ("Sphinx")
doctor.cabinet.push(minou)
console.log(doctor.cabinet)

//Création pharma
var multipharma = new Pharmacie(0,[])
doctor.patientIn()
console.log(doctor.cabinet)







