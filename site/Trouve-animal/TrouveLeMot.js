const container = document.querySelector(".container");
const boxMot = document.querySelector(".box-mot");
const form = document.querySelector(".form");
const button = document.querySelector(".button");
const resultat = document.querySelector(".resultat");
const letterUse = document.querySelector(".letterUse");
const nombreVie = document.querySelector(".nombreVie")

// utiliser un mot dans la liste

const listeMot = [
    "autruche",
    "abeille",
    "antilope",
    "baleine",
    "blaireau",
    "belette",
    "chacal",
    "crevette",
    "chameau",
    "chat",
    "cheval",
    "cochon",
    "corbeau",
    "castor",
    "dauphin",
    "dromadaire",
    "fourmis",
    "girafe",
    "gorille",
    "hippopotame",
    "kangourou",
    "lapin",
    "loup",
    "mouton",
    "mouche",
    "orque",
    "otarie",
    "ouistiti",
    "phoque",
    "papillon",
    "rat",
    "renard",
    "sanglier",
    "saumon",
    "singe",
    "souris",
    "taupe",
    "tortue",
    "tigre",
    "vache",
];

const randomNumber = Math.floor(Math.random() * listeMot.length);

const motDemander = listeMot[randomNumber].toUpperCase();

console.log(`le mot à deviner est ${motDemander}`);

let vie = 8;

nombreVie.innerHTML = vie

resultat.innerHTML = "ajoute une lettre et clique sur le bouton"

// afficher le mot au départ

let motAfficher = [];

for(let i = 0; i < motDemander.length; i++) {
    motAfficher[i] = "_";
}

boxMot.innerHTML = motAfficher.join("");



// Comparaison saisie/mot demandé/mot déjà utilisé

const listLetter = [];

function Compare(saisie, motDemander) {

    // retirer la valeur de la form et remettre la souris
    form.value = "";
    form.focus()

    
    let saisieCorrect;
    let lettreAlreadyUse;


    for(let letter in motDemander) {

        if(saisie === motDemander[letter]) {

            saisieCorrect = true;
            
            for(let k = 0; k < motDemander.length; k++) {

                // afficher la bonne lettre au bonne endroit du mot mystère

                if(saisie === motDemander[k]) {
                    motAfficher[k] = saisie;
                }
            }

            boxMot.innerHTML = motAfficher.join("");
        }
    }

    for(let j = 0; j < listLetter.length; j++) {
         
        // verification de la lettre saisie par rapport à la liste de lettre déjà utilisée

        if(saisie === listLetter[j]) {
            lettreAlreadyUse = true;
        }
    }

    if(saisieCorrect === true) {
        if(lettreAlreadyUse === true) {
            resultat.innerHTML = "lettre déjà utilisée";
            resultat.style.background = "#9c9c9c";
        }
        else {
            listLetter.push(saisie)
            resultat.innerHTML = "Bonne lettre";
            resultat.style.background = "#42E05B";
        }
    }
    else {
        if(lettreAlreadyUse === true) {
            resultat.innerHTML = "lettre déjà utilisée";
            resultat.style.background = "#9c9c9c";
        }
        else {
            listLetter.push(saisie)
            resultat.innerHTML = "mauvaise lettre";
            resultat.style.background = "#F72C28";  
        }

        vie -= 1
    }

    letterUse.innerHTML = listLetter;

    nombreVie.innerHTML = vie

    // lorsque que tout le mot a été trouver

    if (motAfficher.join("") === motDemander) {
            resultat.innerHTML = "GAGNÉ";
            resultat.style.background = "#8EB9FA";
            form.remove()
    }

    if (vie === 0) {
        resultat.innerHTML = `PERDU le mot était ${motDemander}`;
        resultat.style.background = "black";
        resultat.style.color = "white"
        form.remove()
    }
}

// Appuie sur le bouton "Deviner"

function deviner() {

    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    let saisie = form.value.toUpperCase();

    let lettreCorrect;

    for (let letter of alphabet) {
       if (saisie === letter) {
         lettreCorrect = true; 
       } 
    }

    if (lettreCorrect === true) {
        Compare(saisie, motDemander)
    }
    else {
        resultat.innerHTML = "Le saisie n'est pas une lettre"
        resultat.style.background = "#9c9c9c"
        form.value = "";
        form.focus()
    }
}

