const wordElement = document.querySelector('#word');
const allWord = document.querySelector('#all-word');
const field = document.querySelector('#field');
const letterInput = document.querySelector('#letter-input');
const letterRemained = document.querySelector('#letter-remained');
const letterRow = document.querySelector('#letter-row');
const playAgain = document.querySelector('#play-again');
const question = document.querySelector('#question');
const resultMessageElement = document.querySelector('#result-message');
const wordInput = document.querySelector('#word-input');

const questionsWords =
    [
        ["Type in JS containing any symbols", "string"],
        ["Type in JS, value of which being added to 5 will give number on 5 more", "number"],
        ["conatins value received at function call", "parameter"],
        ["value passed at function call", "argument"],
        ["job you are looking for", "developer"],
        ["Profession you would like to master", "programmer"],
        ["May be passed, taken, returned, called in JS", "function"],
        ["Related to programming, but not programming language", "english"]
    ];

let word;
let wordArray;
let currentIndex = Math.floor(Math.random() * 8);
let trials;
let resultMessage;
let wordLettersElement; // ссылка на квадратики, которые потом мы создадим

startGame();

function startGame() {
    wordInput.value = '';
    wordInput.style.display = 'none';
    playAgain.style.display = 'none';
    letterInput.style.display = 'block';
    resultMessageElement.innerHTML = '';
    allWord.style.display = 'block';
    wordInput.readOnly = false;

    question.innerHTML = questionsWords[currentIndex][0];
    word = questionsWords[currentIndex][1];
    wordArray = Array.from(word);
    wordElement.innerHTML = getWordDivs();
    wordLettersElement = document.querySelectorAll('.letter');
    trials = Math.ceil(word.length * 0.5);
    letterRemained.innerHTML = `Remaind ${trials} trials for letter entering`;
}

function getWordDivs() {
    return Array.from(word).map(function (letter) {
        return `<div class="letter"></div>`
    }).join('');
}

function checkWord() {

    wordLettersElement.forEach(function (div, index){
        div.style.background = 'white';
        div.textContent = word[index];
    });

    if (word === wordInput.value)
        resultMessage = 'Congratulation, you are winner!!!';
    else resultMessage = 'Sorry, but you have failed with guess';
    finishGame();
}

function checkLetter() {
    resultMessageElement.innerHTML = '';
    let letter = letterInput.value;
    let indexes = [];

    wordArray.forEach(function (l, index){
        if(l === letter) indexes.push(index)
    });


    if (indexes.length ===0)
        resultMessageElement.innerHTML = 'No such letter';
    else
        indexes.forEach(function (index){
            wordLettersElement[index].textContent = letter;
            wordLettersElement[index].style.background = 'white';
        });

    trials --;
    letterRemained.innerHTML = `Remaind ${trials} trials for letter entering`;

    letterInput.value ='';

    setTimeout(function (){
        resultMessageElement.innerHTML = '';
    }, 1000);

    if(trials === 0){
        risk();
    }
}

function risk() {
    wordInput.style.display = 'block';
    letterInput.style.display = 'none';
    allWord.style.display = 'none';
}

function finishGame() {
    resultMessageElement.innerHTML = resultMessage;
    wordInput.readOnly = true;
    playAgain.style.display = 'block';
    currentIndex++;
    if(currentIndex === questionsWords.length)
        currentIndex = 0;
}