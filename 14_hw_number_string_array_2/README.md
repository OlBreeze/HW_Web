1. function arrayCopy(src,srcPos,dst,dstPos,length) 
where: src - source array, srcPos - index of the source array, dst - array destination, dstPos - index of destination array, length - number of elements. This function should copy length elements from src array beginning from srcPos index to dst array from dstPos index 
Apply the following array functions (splice and slice) 

  
2. function getNumbersWithDigitsAmount(digitsAmount, array)
where digitsAmount - given number of digits, array - any array of integer numbers. 
Returns array of only numbers from the given array comprising of the given number of digits.
Examples:
getNumbersWithDigitsAmount(3, [1, 100, -100, 25, 1000]) returns [100, -100]

  
4. function sortEvenAscOddDesc(array)
   Example input array [20, -10,333,1000, 552, 7, -7] => [-10, 20, 552, 100, 333, 7, -7]

  
6. function ulSurround(array) 
that surrounds array of strings inside <ul></ul> element.  
Example of input array ["abc","lmn","cd"]
Output array for the above example- ["<ul>","<li>abc</li>","<li>lmn</li>","<li>cd</li>","</ul>"]
Apply the array functions: splice and map    

  
8. function count(array, elem) 
that returns how many times a given element encountered in a given array 
Example of input array let strings=["abc","lmn","cd","abc","abc"] 
Output for the above example count(strings,"abc") will be 3 and count(strings,"ab") will be 0 
Apply the array function reduce 

  
9. function coloringString(str1, str2) 
The strings str1 and str2 should be with the same length. Function returns array of following colors:
if str2[i] exists in str1 but in another position - i-th color yellow
if str2[i] == str1[i] - i-th color green
if str2[i] doesn't exist in str1 - i -th color red
Examples: 
coloringString("pappy", "apple") => ["yellow","yellow", "green","red", "red"]
coloringString("pappy", "pappy") => ["green", "green", "green", "green", "green"]
Apply the array function map 
