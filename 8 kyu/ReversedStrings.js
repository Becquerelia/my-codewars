//! REVERSED STRINGS

//! https://www.codewars.com/kata/5168bb5dfe9a00b126000018

/* Complete the solution so that it reverses the string passed into it.

    'world'  =>  'dlrow'
    'word'   =>  'drow' */


//! Solution:

function solution(str){
    let reversedString = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversedString += str[i];
    }
    return reversedString;
}