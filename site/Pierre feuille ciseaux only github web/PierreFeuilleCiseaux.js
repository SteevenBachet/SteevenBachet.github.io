
const circleLeft = document.querySelector(".circle-left")
const circleRight = document.querySelector(".circle-right")
const pressButtonPierre = document.querySelector(".button-pierre").addEventListener("click", lancerPierre)
const pressButtonFeuille = document.querySelector(".button-feuille").addEventListener("click", lancerFeuille)
const pressButtonCiseaux = document.querySelector(".button-ciseaux").addEventListener("click", lancerCiseaux)
const resultat = document.querySelector(".resultat")
const message = document.querySelector(".message")
let vous;
let signe;

// Boutonnerie VOUS

function lancerPierre() {
    
    circleLeft.classList.add("active-pierre")
    circleLeft.classList.remove("active-ciseaux")
    circleLeft.classList.remove("active-feuille")

    vous = "PIERRE";
    
    calculResultat()
}
function lancerFeuille() {
    
    circleLeft.classList.add("active-feuille")
    circleLeft.classList.remove("active-pierre")
    circleLeft.classList.remove("active-ciseaux")

    vous = "FEUILLE";

    calculResultat()
    
}
function lancerCiseaux() {
   
    circleLeft.classList.add("active-ciseaux")
    circleLeft.classList.remove("active-pierre")
    circleLeft.classList.remove("active-feuille")

    vous = "CISEAUX";

    calculResultat()
    
}

// ENNEMI

function randomSigne() {

    const randomNumber = Math.floor(Math.random() * 3)

    

    if(randomNumber === 0) {
        circleRight.classList.add("active-pierre")
        circleRight.classList.remove("active-ciseaux")
        circleRight.classList.remove("active-feuille")
        signe = "PIERRE"
    }
    if(randomNumber === 1) {
        circleRight.classList.add("active-feuille")
        circleRight.classList.remove("active-pierre")
        circleRight.classList.remove("active-ciseaux")
        signe = "FEUILLE"
    }
    if(randomNumber === 2) {
        circleRight.classList.add("active-ciseaux")
        circleRight.classList.remove("active-pierre")
        circleRight.classList.remove("active-feuille")
        signe = "CISEAUX"
    }

}

function calculResultat() {

    message.innerHTML = "";

    randomSigne()

    if((vous === "PIERRE" && signe === "CISEAUX") || (vous === "FEUILLE" && signe === "PIERRE") || (vous === "CISEAUX" && signe === "FEUILLE") ){
        resultat.innerHTML = "WIN"
        resultat.style.background = "green"
    }
    else if(vous === signe) {
        resultat.innerHTML = "DRAW"
        resultat.style.background = "grey"
    }
    else {
        resultat.innerHTML = "LOST"
        resultat.style.background = "red"
    }
}

