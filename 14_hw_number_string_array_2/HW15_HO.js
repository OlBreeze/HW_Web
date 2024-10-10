console.log('----------------------- 1 -------------------------');
// src - source array, srcPos - index of the source array, dst - array destination, dstPos - index of destination array, length - number of elements.
// This function should copy length elements from src array beginning from srcPos index to dst array from dstPos index

function arrayCopy(src, srcPos, dst, dstPos, length) {

    if ((srcPos > src.length - length - 1) || (length > src.length) || dstPos > dst.length - 1)
        return false;

    for (let i = 0; i < length; i++) {
        dst.splice(dstPos + i, 0, src[srcPos + i]);
    }
    return true;
}

let arrSrc = [0, 'Hi', 2, 3, 4, 5];
let arrDst = [7, 8, 9, 'world', 11, 15];

if (arrayCopy(arrSrc, 1, arrDst, 3, 3))
    console.log(arrDst);
else
    console.log('Wrong data!');

console.log('----------------------- 2 -------------------------');
//Returns array of only numbers from the given array consisting of the given number of digits.
// where digitsAmount - given number of digits, array - any array of integer numbers. (digitsAmount — заданное количество цифр, array — любой массив целых чисел.)

function getNumbersWithDigitsAmount(digitsAmount, array) {
    let res;
    const isInt = array.every((num) => {
        return !isNaN(Number(num))
    });

    if (isInt) {
        res = array.filter((num) => {
            return Math.abs(num).toString().length === digitsAmount
        });
    } else res = 'Wrong data!';

    return res;
}

let arrInt = [10, 100, -200, 30, 250, 50];
console.log(getNumbersWithDigitsAmount(3, arrInt));

console.log('----------------------- 3 -------------------------');

function sortEvenAscOddDesc(array){

    const isInt = array.every((num) => {
        return !isNaN(Number(num))
    });

    if (isInt)
        array.sort( (a, b) => {
        if (a % 2 === 0 && b % 2 === 0)
            return a - b;
        else if (a % 2 !== 0 && b % 2 !== 0)
            return b - a;
        else return (a % 2 === 0) ? -1 : 1;
    })
    else console.log('Wrong data!');
}
// Example input array [20, -10,333,1000, 552, 7, -7] => [-10, 20, 552, 100, 333, 7, -7]
let array = [20, -10, 333, 1000, 552, 7, -7];
sortEvenAscOddDesc(array);
console.log(array.toString());

console.log('----------------------- 4 -------------------------');
/*that surrounds array of strings inside <ul></ul> element.
Example of input array ["abc","lmn","cd"]
Output array for the above example- ["<ul>","<li>abc</li>","<li>lmn</li>","<li>cd</li>","</ul>"]*/

function ulSurround(array){
    let resArr = array.map((num) => {
        return `<li>${num}</li>`;
    });
    resArr.splice(0, 0, "<ul>");
    resArr.splice(resArr.length, 0, "</ul>");

    return resArr;
}

let arrS = ["abc","lmn","cd"];
console.log(ulSurround(arrS));

console.log('----------------------- 5 -------------------------');
//returns how many times a given element encountered in a given array

function count(array, elem){
    return array.reduce((accum, num) => {
        return (num === elem) ? accum + 1 : accum + 0;
    }, 0)
}

let arrStrings=["abc","lmn","cd","abc","abc"];
console.log(count(arrStrings, 'abc'));

console.log('----------------------- 6 -------------------------');
// The strings str1 and str2 should be with the same length. Function returns array of following colors:
// if str2[i] exists in str1 but in another position - i-th color yellow
// if str2[i] == str1[i] - i-th color green
// if str2[i] doesn't exist in str1 - i -th color red


function coloringString(str1 = '', str2 = '') {
    if (str1.length !== str2.length)
        return "Wrong data!";

    let ar1 = Array.from(str1);
    let ar2 = Array.from(str2);

    return ar1.map((elm1, i)=>{
        if (elm1 === ar2[i]) return 'green';
        else if (str1.includes(ar2[i])) return 'yellow';
        else return 'red';
    })
}

console.log(coloringString("pappy", "apple"));
console.log(coloringString("pappy", "pappy"));
console.log(coloringString("puspy", "pappy"));

/*Examples:
coloringString("pappy", "apple") => ["yellow","yellow", "green","red", "red"]
coloringString("pappy", "pappy") => ["green", "green", "green", "green", "green"]*/