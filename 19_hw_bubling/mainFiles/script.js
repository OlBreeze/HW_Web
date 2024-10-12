const textLorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolores eos in obcaecati odit pariatur quaerat quisquam tempora voluptatibus voluptatum. A aperiam consectetur nam nisi nulla officiis optio quia voluptatum.';
let numInp = 1;
function setAttributeInput(inputSize) {
    inputSize.style.margin = '5px';
    inputSize.style.width = '70px'; // min="5" max="100" step="5" value="5"
    inputSize.setAttribute('type', 'number');
    inputSize.setAttribute('min', 5);
    inputSize.setAttribute('max', 100);
    inputSize.setAttribute('step', 5);
    inputSize.setAttribute('value', 5);
    inputSize.setAttribute('name', 'inpName'+numInp); numInp++;
}

function isPalindrome(value)
{
    if(typeof value !== 'string' || value.length === 0)
        return  false;
    if(value.length === 1)
        return true;

    value = value.toLowerCase().replaceAll(' ', '');
    let reverse = Array.from(value).reverse().join('');
    return value === reverse;
}
//------- 1 ---------------
const arrSizeFont = [15, 25 , 35, 45];
const arrColorFont = ['red', 'green', 'blue', 'yellow'];

const task1 = document.querySelector('.task1');
const divSize1 = document.querySelector('.task1 .size');
const divColor1 = document.querySelector('.task1 .color');
const pText = document.createElement('p');
pText.textContent = textLorem;
task1.appendChild(pText);

for (let value of arrSizeFont) {
    const elButton = document.createElement('button');
    elButton.style.margin = "2px";
    elButton.style.width = '50px';
    elButton.textContent = value +'px';
    divSize1.appendChild(elButton);

    elButton.onclick =  ()=>{
        pText.style.fontSize = value+'px';
    }
}

for (let value of arrColorFont) {
    const elButton = document.createElement('button');
    elButton.style.margin = "2px";
    elButton.style.width = '50px';
    elButton.textContent = value;
    divColor1.appendChild(elButton);

    elButton.onclick = ()=>{
        pText.style.color = value;
    }
}

//------- 2 ---------------
const task2 = document.querySelector('.task2');
const divSize2 = document.querySelector('.task2 .size');
const divColor2 = document.querySelector('.task2 .color');

const pText2 = document.createElement('p');
const inputSize = document.createElement('input');
const buttonSizeSet = document.createElement('button');
const selectColor = document.createElement('select');
const buttonColorSet = document.createElement('button');

divSize2.append(inputSize, buttonSizeSet);
divColor2.append(selectColor, buttonColorSet);
pText2.textContent = textLorem;
task2.appendChild(pText2);

// option
for (let value of arrColorFont) {
    const elOption = document.createElement('option');
    elOption.textContent = value;
    selectColor.appendChild(elOption);
}

//- size
setAttributeInput(inputSize);

buttonSizeSet.textContent = 'Set';
buttonSizeSet.onclick = ()=>{
    pText2.style.fontSize = inputSize.value+'px';
}
//-color
selectColor.style.width ='75px';
selectColor.style.margin = '5px';

buttonColorSet.textContent = 'Set';
buttonColorSet.onclick = ()=>{
    pText2.style.color = selectColor.value;
}

//------- 3 calculator ---------------
const calculator = document.querySelector('.calculator');


const arrActions = ['+', '-', '*', '/'];
for (let arrAction of arrActions) {
    const divOperand = document.createElement('div');
    const inputOperand1 = document.createElement('input');
    const inputOperand2 = document.createElement('input');
    const resOperand = document.createElement('b');

    setAttributeInput(inputOperand1);
    setAttributeInput(inputOperand2);

    const elButton = document.createElement('button');
    elButton.textContent = " = ";
    elButton.style.margin = '5px';
    elButton.onclick = ()=>{
        resOperand.textContent = eval(inputOperand1.value +arrAction + inputOperand2.value);
    }

    divOperand.append(inputOperand1, arrAction, inputOperand2, elButton, resOperand);
    calculator.appendChild(divOperand);
}

//------- 4 Gallery ---------------
const gallery = document.querySelector('.gallery');
const galleryBtn = document.querySelector('.galleryBtn');
const btnPrev = document.querySelector('#btnPrev');
const btnNext = document.querySelector('#btnNext');
gallery.style.textAlign = 'center';

const divImg = document.createElement('img');
divImg.width = 200;
gallery.appendChild(divImg);
divImg.after(galleryBtn);

let numImg = 0;
setImg(1);

btnPrev.onclick = function() {setImg(-1)};
btnNext.onclick = function() {setImg(1)};

function setImg(k){
    if (k > 0)
        (numImg += k) > 8 ? numImg = 1 : numImg;
    else
        (numImg += k) < 1 ? numImg = 8 : numImg;

    divImg.src = `img/gallery_${numImg}.jpg`;
}
//------- 5 palindrome ---------------
const palindrome = document.querySelector('.palindrome');
const inputPalindrome = document.createElement('input');
const newP = document.createElement('p');
newP.style.fontWeight='bold';

const elButtonPalindrome = document.createElement('button');
elButtonPalindrome.textContent = " Check ";
elButtonPalindrome.style.margin = '5px';
elButtonPalindrome.onclick = (event) => {
    if (isPalindrome(inputPalindrome.value)) {
        newP.textContent = "Is a palindrome!";
        newP.style.color = 'green';
    } else {
        newP.textContent = "Is not a palindrome!";
        newP.style.color = 'red';
    }
}

palindrome.append(inputPalindrome, elButtonPalindrome, newP);


