const vowelsSet = ["A", "E", "I", "O", "U"];
const alphabetSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const digitsSet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let setUsed = [];

const vowelsImgs = ["imgs/Abelha.png", "imgs/Elefante.png", "imgs/Igreja.png", "imgs/Ovo.png", "imgs/Uva.png"];
const alphabetImgs = ["imgs/Abelha.png", "imgs/Bola.png", "imgs/Cachorro.png", "imgs/Dinossauro.png", "imgs/Elefante.png", "imgs/Foca.png", "imgs/Gato.png", "imgs/Hipopotamo.png", "imgs/Igreja.png", "imgs/Jacare.png", "imgs/Kiwi.png", "imgs/Limao.png", "imgs/Macaco.png", "imgs/Navio.png", "imgs/Ovo.png", "imgs/Pato.png", "imgs/Queijo.png", "imgs/Relogio.png", "imgs/Sapo.png", "imgs/Tatu.png", "imgs/Uva.png", "imgs/Vaca.png", "imgs/Wafer.png", "imgs/Xicara.png", "imgs/Youtube.png", "imgs/Zebra.png"];
let imgsUsed = [];

let currentElement = 0;
let currentImg = 0;

const sets = window.document.getElementsByClassName("sets");
const optionVowels = sets[0];
const optionAlphabets = sets[1];
const optionDigits = sets[2];

const element = window.document.getElementById('element');

const firstElement = window.document.getElementById('firstElement');
const lastElement = window.document.getElementById('lastElement');

function verify_SelectionOfTheSet() {
    if (optionVowels.selected || optionAlphabets.selected || optionDigits.selected) {
        if (optionVowels.selected) {
            return [true, vowelsSet, vowelsImgs];
        }
        else if (optionAlphabets.selected) {
            return [true, alphabetSet, alphabetImgs];
        }
        else if (optionDigits.selected){
            return [true, digitsSet];
        }
    } 
    window.alert("Por favor selecione um conjunto primeiro.");
}

function fSubmit() {
    if (verify_SelectionOfTheSet()[0] && setUsed !== verify_SelectionOfTheSet()[1]) {
        currentElement = 0;
        currentImg = 0;
        setUsed = verify_SelectionOfTheSet()[1];
        imgsUsed = verify_SelectionOfTheSet()[2];
        element.innerHTML = `<h2>${setUsed[currentElement]}</h2>`;
        firstElement.innerHTML = `<h3>${setUsed[0]}</h3>`;
        lastElement.innerHTML = `<h3>${setUsed[setUsed.length - 1]}</h3>`;
        element.innerHTML += `<img src="${imgsUsed[currentImg]}">`;
    }   
}

function click_PreviousElement() {
    if (verify_SelectionOfTheSet()[0] && currentElement - 1 >= 0) {
        currentElement--;
        currentImg--;
        element.innerHTML = `<h2>${setUsed[currentElement]}</h2>`;
        element.innerHTML += `<img src="${imgsUsed[currentImg]}">`;
    }
}

function click_NextElement() {
    if (verify_SelectionOfTheSet()[0] && currentElement + 1 <= setUsed.length - 1) {
        currentElement++;
        currentImg++;
        element.innerHTML = `<h2>${setUsed[currentElement]}</h2>`;
        element.innerHTML += `<img src="${imgsUsed[currentImg]}">`;
    }
}

function click_FirstElement() {
    if (verify_SelectionOfTheSet()[0] && setUsed.length != 0) {
        currentElement = 0;
        element.innerHTML = `<h2>${setUsed[currentElement]}</h2>`;
        currentImg = 0;
        element.innerHTML += `<img src="${imgsUsed[currentImg]}">`;
    }
}

function click_LastElement() {
    if (verify_SelectionOfTheSet()[0] && setUsed.length != 0) {
        currentElement = setUsed.length - 1;
        element.innerHTML = `<h2>${setUsed[currentElement]}</h2>`;
        currentImg = imgsUsed.length - 1;
        element.innerHTML += `<img src="${imgsUsed[currentImg]}">`;
    }
}