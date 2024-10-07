console.log('----------------------- 1 -------------------------');
//function getDigitsSum that takes any number and returns sum of the digits in the integer part of the number

function getDigitsSum(num = 0){

    num = Number(num);
    if (isNaN(num))
        return 'Wrong data!';

    let intPart = Math.abs(Math.trunc(num));
    let res = 0;

    Array.from(String(intPart), ( currentValue, index ) => res += +currentValue);

    return res;
}
// так понравилась стрелочная функция))

console.log(getDigitsSum(129.148));
console.log(getDigitsSum(-280.123));
console.log(getDigitsSum('kfjvg34'));

console.log('----------------------- 2 -------------------------');
//Write function reverse that takes any number and returns string comprising of the digits of the integer part of the given number
// in the reversed order. Sign “-” should be kept in the result

function reverseIntPart(num = 0){
    num = Number(num);
    if (isNaN(num))
        return 'Wrong data!';

    const positiv = (num > 0);
    const intPart = Math.abs(Math.trunc(num));

    return  ((positiv)?'':'-') + Array.from(String(intPart)).reverse().join('');
}

console.log(reverseIntPart(123.45));
console.log(reverseIntPart(-280.123));
console.log(reverseIntPart(-123));
console.log(reverseIntPart('kfjvg34'));

console.log('----------------------- 3 -------------------------');
// The method should return true if string is palindrome and false if is not. The method must be case insensitive
function isPalindrome(str =''){

    str = str.trim().replaceAll(' ','').toLowerCase();

    let res = false;

    let array1 = Array.from(str);
    let array2 = array1.concat().reverse();

    if (array1.toString()  === array2.toString())
        res = true;

    return res;
}

console.log('aba -> ' + isPalindrome('aba'));
console.log('abcd -> ' + isPalindrome('abcd'));
console.log('aa aa -> ' + isPalindrome('aa aa'));
console.log('SoS -> ' + isPalindrome('SoS'));
console.log('  Abba -> ' + isPalindrome('  Abba  '));
console.log('а роза упала на лапу азора -> ' + isPalindrome('а роза упала на лапу азора '));

console.log('----------------------- 4 -------------------------');
//The method counts and prints to the console how many times the transmitted character occurs in the specified string
function countChar(str = '', c = ''){
    if ((str||'')&&(c||''))
        return str.split(c).length - 1;

    return 0;
}

console.log(countChar("Hello world", 'l'));
console.log(countChar(undefined));
