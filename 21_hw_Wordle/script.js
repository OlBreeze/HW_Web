const guessInput = document.querySelector('#guessInput');
const guessLetters = document.querySelector('#guessLetters');
const gameResult = document.querySelector('#gameResult');
const playAgain = document.querySelector('#playAgain');
const trialsRemained = document.querySelector('#trialsRemained');

const wordsForGuess = ["puppy", "apple", "table", "gold", "silver", "index",
    "script", "peace", "picture"];

let letterDivs;
let word;
let trials;
let finishMessage;
startGame();


function startGame()
{
    playAgain.style.display = 'none';
    guessInput.style.display = 'block';
    gameResult.innerHTML = '';
    guessInput.value = '';

    let index = Math.trunc(Math.random() * wordsForGuess.length);
    word = wordsForGuess[index];
    trials = word.length + 1;
    trialsRemained.innerHTML = `Remained trials ${trials}`;

    fillLetterDivs();
}

function fillLetterDivs()
{
    let array = Array.from(word);
    guessLetters.innerHTML = array.reduce(function (accum, item)
    {
        return accum + '<div class="letter"></div>'
    }, '');
    letterDivs = document.querySelectorAll('.letter');
}

function onChange()
{
    let value = guessInput.value;
    trials--;
    trialsRemained.innerHTML = `Remained trials ${trials}`;

    if(value.length != word.length)
        alert('Wrong count of letters');
    else
    {
        let array = Array.from(value);
        array.forEach(function (letter, index)
        {
            letterDivs[index].innerHTML = letter;
            letterDivs[index].style.background = getColor(letter, index);
        });
        guessInput.value = '';
    }

    if(checkGameOver(value))
        finishGame();
}

function getColor(letter, index)
{
    if(word.includes(letter))
        return word[index] === letter ? 'green' : 'yellow';
    return 'red';
}

function checkGameOver(value)
{
    if(value === word)
    {
        finishMessage = `Congratulation, you have guessed the word 
            using ${word.length + 1 - trials}`;
        return true;
    }

    if(trials === 0)
    {
        finishMessage = `Sorry, but you have used all given trials`;
        return true;
    }

    return false;
}
function finishGame()
{
    gameResult.innerHTML = finishMessage;
    playAgain.style.display = 'block';
    playAgain.focus();
    guessInput.style.display = 'none';
}




