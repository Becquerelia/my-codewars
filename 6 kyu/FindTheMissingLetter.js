//! FIND THE MISSING LETTER

//! https://www.codewars.com/kata/5839edaa6754d6fec10000a2

/* Write a method that takes an array of consecutive (increasing) letters as input and
 that returns the missing letter in the array.

 You will always get an valid array. And it will be always exactly one letter be missing.
 The length of the array will always be at least 2.
 The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

["a","b","c","d","f"] -> "e"
["O","Q","R","S"] -> "P"
(Use the English alphabet with 26 letters!) */


//! Solution:

function findMissingLetter(array){

    let result;

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i + 1].charCodeAt() - array[i].charCodeAt() === 2) {
        result = String.fromCharCode(array[i].charCodeAt() + 1);
      }
    };

    return result;
}